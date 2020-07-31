import React, { Component } from "react";
import { View, Text, AsyncStorage } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';

const USER_ID = '@userId';

export default class chat extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userId: null
    };

    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = SocketIOClient('http://18.204.139.44:3005');
    this.socket.on('msg', this.onReceivedMessage);
    this.determineUser();
  }

  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  determineUser() {
    AsyncStorage.getItem(USER_ID)
      .then((userId) => {
        // If there isn't a stored userId, then fetch one from the server.
        if (!userId) {
          this.socket.emit('userJoined', null);
          this.socket.on('userJoined', (userId) => {
            AsyncStorage.setItem(USER_ID, userId);
            this.setState({ userId });
          });
        } else {
          this.socket.emit('userJoined', userId);
          this.setState({ userId });
        }
      })
      .catch((e) => alert(e));
  }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages=[]) {


    var objMessage = {

      
      content: messages[0].text,
      time : "",
      roomsId : "5cc99ba8b241be43f687d3ed",
      message_status : "sent",
      chatUsersId : "5cc86792e8de18198b51790b,5cc990adb241be43f687d3e3",
      type : "",
      profile_pic : "",
      username : "",
      group_name : "",
      chatSenderId : "5cc86792e8de18198b51790b",
      chatReceiverId : "5cc990adb241be43f687d3e3",
      sender_profile_pic : "",
      date : "",
      receiver_profile_pic : "",
      messageCustomId : "",
      messagesBySender :"" ,
      onlineSenderStatus : "",
      onlinereceiverStatus : ""

    }

    this.socket.emit('Send_msg', objMessage);
    this._storeMessages(messages);
  }

  render() {
    var user = { _id: this.state.userId || -1 };

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={user}
      />
    );
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
}