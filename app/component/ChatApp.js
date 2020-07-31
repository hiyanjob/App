import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import { Icon, Avatar, Card } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";
import SocketIOClient  from 'socket.io-client';

 
export default class ChatApp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      messages: [],
      roomidStore : ''
   }
   
    this.socket = SocketIOClient('http://18.204.139.44:3005');
    this.socket.on('Start_Chat', () => {
         console.log('connected to server');
         
        
    });  

    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

  }
       

 
  componentWillMount() {
    this.roomIdApi(); 
    //this.getMessageList();
    

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }
 
  async roomIdApi(){
  
    var id1 = await AsyncStorage.getItem('userID');
    var receiverId1 = await AsyncStorage.getItem('_id');
   
  var data={
  userID:id1,
  _id:receiverId1
  }
  console.log(data);
  
  fetch('http://18.204.139.44:3005/getRoomId', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  }).then((response) => response.json())
  .then((responseJson) => {

    roomidStore = responseJson.roomId;  
    AsyncStorage.setItem('roomId',responseJson.roomId); 
    console.log(roomidStore);

        })
        .catch((error) => {
          console.error(error);
        
   }); 
  }

 // Event listeners0
  /* When the server sends a message to this.
  */
 onReceivedMessage(messages) {
   this._storeMessages(messages);
 }

 /**
  * When a message is sent, send the message to the server
  * and store it in this component's state.
  */

 async onSend(messages = []) {

  var userid = await AsyncStorage.getItem('userID');
  var receiverid = await AsyncStorage.getItem('receiverId');
  var _id = await AsyncStorage.getItem('_id');
  var chatUSersId = await AsyncStorage.getItem('chatUSersId');


  var objMessage = {

    content: messages[0].text,
    roomsId : roomidStore,
    chatSenderId : userid,
    chatReceiverId : _id,

  }
  console.log(objMessage);
  
  this.socket.emit('Send_msg', objMessage);
  
  
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }

//  async onSend(messages=[]) {

//   var useridStr = await AsyncStorage.getItem('userID');
//   var receiveridStr = await AsyncStorage.getItem('_id');
//   console.log('this is rec',receiveridStr);
//   var roomIDStr = await AsyncStorage.getItem('roomID');
//   var chatUSersId = await AsyncStorage.getItem('chatUSersId');
//   var chatUSersId2 = await AsyncStorage.getItem('chatUSersId2');
//  var data = {
//   content: this.state.messages[0],
//   roomsId : roomidStore,
//   chatUsersId : useridStr ,
//   chatSenderId : useridStr ,
//   chatReceiverId : receiveridStr,
//  }
//  console.log(data);

//   this.socket.emit('Send_msg', {
//        content: this.state.messages[0],
//        roomsId : roomIDStr,
//        chatUsersId : useridStr ,
//        chatSenderId : useridStr ,
//        chatReceiverId : receiveridStr,
//    });
//    this.socket.emit('Send_msg', messages[0]);
//    this._storeMessages(messages);
//  }










  // async onSend(messages = []) {

  //   var userid = await AsyncStorage.getItem('userID');
  //   var receiverid = await AsyncStorage.getItem('receiverId');
  //   var _id = await AsyncStorage.getItem('_id');
  //   var chatUSersId = await AsyncStorage.getItem('chatUSersId');


  //   // var objMessage = {
  //   //   content: messages[0].text,
  //   //   roomsId : "5cc99ba8b241be43f687d3ed",
  //   //   chatUsersId : "5cd55491403eb4208e155a93",
  //   //   chatSenderId : "5cd55491403eb4208e155a93",
  //   //   chatReceiverId : "5cd5551d403eb4208e155a94",
  //   // }

  //   var objMessage = {
  //    
  

  
  //   }

  //   console.log(objMessage);
    
  //   this.socket.emit('Send_msg', objMessage);
  //   this.socket.emit('msg', objMessage);
    
  //       this.setState(previousState => ({
  //         messages: GiftedChat.append(previousState.messages, messages),
  //       }))
  //     }

 // Helper functions
 _storeMessages(messages) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, messages),
    };
  });
}

    // getMessageList = async () => {
    //     var receiverid = await AsyncStorage.getItem('receiverId');
    //     var data ={
    //         userID:receiverid,
    //     }
    //     fetch('http://18.204.139.44:3005/receivedMsgList', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(data),
    //           }).then((response) => response.json())
    //           .then((responseJson) => {
         
    //         if (result.status === "success")
    //           this.setState({
    //             messages: result.data
    //           });
    

    //         console.log("message2=>", this.state.messages);
    //       })
    //       .then(error => {
    //         console.log(error);
    //       });
    //   };

      
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
} 

