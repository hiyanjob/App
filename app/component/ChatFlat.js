import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon, Avatar, Card } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";
import SocketIOClient  from 'socket.io-client';
import ImagePicker from "react-native-image-picker";
// import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

 
export default class ChatFlat extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
      
          headerBackground: (
            
            <Image
              style={{marginLeft:45,marginTop:5,width:'20%',height:'80%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}
              source={require('./images/logo_web.png')}
            />
          ), 
          headerTitleStyle: {
                      textAlign: 'center',
                      flexGrow:1,
                      alignSelf:'center',
                      color:'white',
                  },
         
          headerLeft: 
            
            <View style={{flexDirection:'row'}}>
            
            
            {/* <TouchableOpacity  onPress={() => navigation.navigate('friends')}>
              <Icon style={{marginLeft:17,}} 
              name="users" size={26}  color='#69b3f6'
              />
              <Text style={{
                 color:"black",
                  marginLeft:10,
                  textAlign:'center',
                  fontSize:12
               }}>Friends </Text>
            </TouchableOpacity>   */}
      
            <TouchableOpacity  onPress={() => navigation.navigate('gift')}>
              <Icon style={{marginLeft:17}} 
              name="gift" size={26}  color='#69b3f6'
              />
               <Text style={{
                 color:"black",
                  textAlign:'center',
                  fontSize:12,
                  marginLeft:7
               }} >Rewards </Text>
               </TouchableOpacity>
      
               <TouchableOpacity  onPress={() => navigation.navigate('home')}>
              <FontAwesome style={{marginLeft:21}} 
              name="envelope-o" size={26}  color='#69b3f6'
              />
               <Text style={{
                 color:"black",
                  textAlign:'center',
                  fontSize:12,
                  marginLeft:5, borderBottomWidth:2,
                  borderBottomColor:'red',
                  marginBottom:-750
               }} >Messages </Text>
                </TouchableOpacity>
      
                <TouchableOpacity  onPress={() => navigation.navigate('RoomSelection')}>
              <AntDesign style={{marginLeft:30}} 
              name="select1" size={26}  color='#69b3f6'
              />
               <Text style={{
                 color:"black",   
                 textAlign:'center',
                 fontSize:12,
                 marginLeft:5
               }} >Room Selection </Text>
               </TouchableOpacity>
      
              </View>,
        headerRight: 
        
        <View style={{flexDirection:'row'}}>
        
        <TouchableOpacity  onPress={() => navigation.navigate('')}>
        <Ionicons style={{marginLeft:17}} 
              name="md-search" size={26}  color='#69b3f6'
              />
        
          <Text style={{
             color:"black",
              marginLeft:10,
              textAlign:'center',
              fontSize:12
           }}> Search </Text>
        </TouchableOpacity>  
      
        <TouchableOpacity  onPress={() => navigation.navigate('')}>
        
          <Ionicons style={{marginLeft:29}} 
          name="ios-notifications-outline" size={26}  color='#69b3f6'
          />
           <Text style={{
             color:"black",
              textAlign:'center',
              fontSize:12,
              marginLeft:7
           }} >Notification </Text>
           </TouchableOpacity>
      
           <TouchableOpacity  onPress={() => navigation.navigate('')}>
           <AntDesign style={{marginLeft:15,}} 
              name="setting" size={26}  color='#69b3f6'
              />
          
           <Text style={{
             color:"black",
              textAlign:'center',
              fontSize:12,
              marginLeft:5
           }} >Settings </Text>
            </TouchableOpacity>
      
            {/* <TouchableOpacity  onPress={() => navigation.navigate('')}>
            <Icon style={{marginLeft:12
            }} 
              name="user-circle" size={26}  color='#69b3f6'
              />
           <Text style={{
             color:"black",   
             textAlign:'center',
             fontSize:12,
             marginLeft:5
           }} > Profile  </Text>
           </TouchableOpacity> */}
      
          </View>,
        }
      };
  constructor() {
    super();
    this.state = {
      text: '',
      messages : [],
      
   }

    this.socket = SocketIOClient('http://18.204.139.44:3005');
    this.socket.on('Start_Chat', (objMessage) => {
         console.log('connected to server');
        //  console.log(objMessage);
    });  
    // this.socket = SocketIOClient('http://18.204.139.44:3005');
    // this.socket.emit('Send_msg', (objMessage) => {
    //      console.log(objMessage);
    // });   
  }
       
  componentWillMount() {

    this.getMessageList();

  }
 



  async onSend(messages = []) {

    var userid = await AsyncStorage.getItem('userID');
    var receiverid = await AsyncStorage.getItem('_id');
    console.log("this is rec",receiverid);
    var roomID = await AsyncStorage.getItem('roomID');
    var chatUSersId = await AsyncStorage.getItem('chatUSersId');
    var chatUSersId2 = await AsyncStorage.getItem('chatUSersId2');
   
    var objMessage = {
    
      content: messages[0].text,
      time : "",
      roomsId : roomID,
      message_status : "sent",
      type : "",
      profile_pic : "",
      username : "",
      group_name : "",
      chatSenderId : userid,
      chatReceiverId : receiverid,
      chatUsersId:chatUSersId,
       chatUSersId2 : chatUSersId2,
      sender_profile_pic : "",
      date : "",
      receiver_profile_pic : "",
      messageCustomId : "",
      messagesBySender :"" ,
      onlineSenderStatus : "",
       onlinereceiverStatus : ""
    }
    console.log(objMessage);
    
    this.socket.emit('Send_msg', objMessage);
    
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }


    async getMessageList()  {
        var receiverid = await AsyncStorage.getItem('receiverId');
        var data ={
            userID:"5cc84e9fe8de18198b5178ef",
        }
        fetch('http://18.204.139.44:3005/receivedMsgList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              }).then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.list,
                   
                  } 
                  );
         
          })
          .then(error => {
            console.log(error);
          });
      };

      async actionOnRow(_id) {
      }  
        
  render() {
    return (

        <View >
          <FlatList
      data={this.state.dataSource}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =>
      
      <TouchableOpacity onPress={this.actionOnRow
        .bind(this, item._id)}
>

    <View style={{marginLeft:5,marginTop:7}} >    

    <Text 
     style={{
      color:"black",
      marginTop:"5%",
      marginLeft:"4%",
      fontSize:15}}>{item.content}</Text>

      </View>

  
 </TouchableOpacity>
    }
       keyExtractor={(item,index)=>item.index}
    />
    </View> 



    );
    
  }
} 

