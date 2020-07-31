import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  FlatList
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
      
   }
   
    this.socket = SocketIOClient('http://18.204.139.44:3005');
    this.socket.on('Start_Chat', () => {
         console.log('connected to server');      
    });  

   

  }
       

 
  componentWillMount() {

 
  }
  sendMethod(){

    var objMessage = {
        content: "yikxt",
        roomsId : "5cc99ba8b241be43f687d3ed",
        chatUsersId : "5cd55491403eb4208e155a93",
        chatSenderId : "5cd55491403eb4208e155a93",
        chatReceiverId : "5cd5551d403eb4208e155a94",
    }
    console.log(objMessage);
  this.socket.emit('Send_msg',objMessage);

  }

      render() {
      
           return (
  <View>
          <FlatList
              data={this.state.dataSource}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) =>
            <Text 
             style={{
              color:"black",
              marginTop:"5%",
              marginLeft:"4%",
              fontSize:15}}>{item.content}
              </Text>
            }
               keyExtractor={(item,index)=>item.index}
           />

         <TextInput
            style={{
              marginTop:210,
              borderBottomWidth:1, 
              borderColor:'red',
              width:'75%', 
              padding:10, 
              height:50,
              marginLeft:50, 
              color: 'grey',
              }}
            editable={true}
            onChangeText = {this.handleEmail}
            value = {this.state.handleEmail}
            /> 
<TouchableOpacity activeOpacity={1.0} onPress={ () => this.sendMethod() }>
            <Text style={styles.sendbtn}> Send </Text>
            <View
            style={{
            marginTop:-1,
            width:'93%',
            marginLeft:100,
            borderBottomColor:'#46B4C7',
            borderBottomWidth:.5, }} />
  </TouchableOpacity>

  </View> 
           );
         }
       }

       const styles = StyleSheet.create({
        sendbtn:{
          color:'#46B4C7',
        },
       });