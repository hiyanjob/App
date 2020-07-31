import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage,
  ListView,
  ActivityIndicator,
  Alert,
  FlatList,
  BackHandler,
  BackAndroid,
  ToastAndroid
} from 'react-native';
import { toastMsg, internetconnection } from "./assets/scripts/helper";
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { CometChat } from '@cometchat-pro/react-native-chat';
import { decode, encode } from 'base-64'

var conversationsRequest;
var uid, messagelist, typingNotification, status;

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

this.DOMParser = require('xmldom').DOMParser;

let appID = "48942283c24520", apiKey = "467cc0d0ed712e7f76902f2c68c05545709f1d09";


// BackHandler.exitApp();
export default class home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {

      headerBackground: (

        <Image
          style={{ marginLeft: 45, marginTop: 5, width: '20%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          source={require('./images/logo_web.png')}
        />
      ),
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#009dae'
      },

      headerLeft:

        <View style={{ flexDirection: 'row' }}>


          <TouchableOpacity onPress={() => navigation.navigate('friends')}>
            <Image
              style={{ marginLeft: 15, height: 33, width: 33, marginTop: 10 }}
              source={require('./images/friends.png')}
            />
            {/* <Icon style={{ marginLeft: 17, }}
              name="users" size={26} color='#69b3f6'
            /> */}
            <Text style={{
              color: "#aadae0",
              marginLeft: 10,
              textAlign: 'center',
              fontSize: 12,
              marginTop: -5
            }}>Friends </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
            <Image
              style={{ marginLeft: 17, height: 23, width: 23, marginTop: 12 }}
              source={require('./images/rewards.png')}
            />
            {/* <Icon style={{ marginLeft: 17 }}
              name="gift" size={26} color='#69b3f6'
            /> */}
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 7,
              marginTop: 2
            }} >Rewards </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            {/* <FontAwesome style={{ marginLeft: 21 }}
              name="envelope-o" size={26} color='#69b3f6'
            /> */}
            <Image
              style={{ marginLeft: 21, height: 25, width: 25, marginTop: 10 }}
              source={require('./images/messag.png')}
            />
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 5, borderBottomWidth: 2,
              borderBottomColor: 'white',
              marginBottom: -750
            }} >Messages </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RoomSelection')}>
            {/* <AntDesign style={{ marginLeft: 30 }}
              name="select1" size={26} color='#69b3f6'
            /> */}
            <Image
              style={{ marginLeft: 30, height: 26, width: 26, marginTop: 10 }}
              source={require('./images/roomselection.png')}
            />
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 5,
              marginTop: -1
            }} >Room Selection </Text>
          </TouchableOpacity>

        </View>,
      headerRight:

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            {/* <Ionicons style={{ marginLeft: 17 }}
              name="md-search" size={26} color='#69b3f6'
            /> */}
            <Image
              style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
              source={require('./images/search.png')}
            />

            <Text style={{
              color: "#aadae0",
              marginLeft: 10,
              textAlign: 'center',
              fontSize: 12
            }}> Search </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

            {/* <Ionicons style={{ marginLeft: 29 }}
              name="ios-notifications-outline" size={26} color='#69b3f6'
            /> */}
            <Image
              style={{ marginLeft: 29, height: 20, width: 20, marginTop: 10 }}
              source={require('./images/notification.png')}
            />
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 7
            }} >Notification </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            {/* <AntDesign style={{ marginLeft: 15, }}
              name="setting" size={26} color='#69b3f6'
            /> */}

            <Image
              style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
              source={require('./images/settings.png')}
            />
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 5
            }} >Settings </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('newprofile')}>
            {/* <Icon style={{
              marginLeft: 12
            }}
              name="user-circle" size={26} color='#69b3f6'
            /> */}
            <Image
              style={{ marginLeft: 12, height: 20, width: 20, marginTop: 10 }}
              source={require('./images/profileimg.png')}
            />
            <Text style={{
              color: "#aadae0",
              textAlign: 'center',
              fontSize: 12,
              marginLeft: 5
            }} > Profile  </Text>
          </TouchableOpacity>

        </View>,
    }
  };

  constructor() {
    super();

    this.state = {
      uid: '',
      loaderVisible: false,
      id: '',
      email: '',
      mobile_no: '',
      password: '',
      age: '',
      dob: '',
      screenName: '',
      profilePic: '',
      referalCode: '',
      gender: '',
      city: '',
      country: '',
      tagline: '',
      chatlist: [],
      isModalVisible: false,
      isLoading: true,
      text: '',
      img: [],
      usersimg: [],
      usersimg1: [],
      count: '',
      users: [],
      dataItem: '?',
      index: 0,
      actionId: '',
      ConnectionStatus: '',
      routes: [
        { key: 'single', title: 'Contacts', icon: 'contacts', color: '#3F51B5' },
        { key: 'groups', title: 'Group', icon: 'group', color: '#009688' },
      ],

    }
    //  conversationsRequest = new CometChat.ConversationsRequestBuilder()
    // .setLimit(30)
    // .conversationId(uid)
    // .setConversationType("user")
    // .build();
    this.fetchMessages = this.fetchMessages.bind(this);
    // this.messagelistApi = this.messagelistApi.bind(this);
    this.arrayholder = [];
    // this.state.ConnectionStatus = this.state.ConnectionStatus.bind(this);
    CometChat.init(appID).then(() => {
      console.log("Cometchat intialized");
      // window.document=new window.DOMParser().parseFromString("<?xml version='1.0'?>", 'text/xml');
    }, error => {
      console.error(error);
    });
  }


  componentWillMount() {

    this.userflatApi();
    this.joinflatApi();
    this.getDetailsApi();
    this.fetchUser();
    this.messagelistApi();
    // this.addUserListner();
    this.cometchatLogin();
    //this.fetchMessages();
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  conversationList() {
    // 


    // conversationsRequest.fetchNext().then(
    //   conversationList => {
    //     console.log("Conversations list received:", conversationList);
    //   },
    //   error => {
    //     console.log("Conversations list fetching failed with error:", error);
    //   }
    // );
  }


  async cometchatLogin() {

    var id2 = await AsyncStorage.getItem('userID');
    console.log('CometChat login Called')
    this.setState({ loaderVisible: true })
    CometChat.login(id2, apiKey).then(
      user => {
        this.setState({ loaderVisible: false })
        var userName = user.name;
        console.log("Login Successful:", { userName });
        //this.props.navigation.navigate('Home')
      },

      error => {
        console.log("Login failed with exception:", { error });
      }
    );
  }

  async fetchMessages() {

    console.log('Fetch messages called.....')

    var uid = await AsyncStorage.getItem('userID');

    var messagesRequest = new CometChat.MessagesRequestBuilder().setUID(uid).setLimit(50).build();

    messagesRequest.fetchPrevious().then(
      mess => {
        console.log("Message list fetched:", mess);
        // Handle the list of messages

        this.setState({
          messages: [...mess, ...this.state.messages],
          refreshing: false
        })

        this.changeTypingText(status)
      },
      error => {
        console.log("Message fetching failed with error:", error);
      }
    );
  }


  screenName = (text) => {
    this.setState({ screenName: text })
  }
  city = (text) => {
    this.setState({ city: text })
  }
  tagline = (text) => {
    this.setState({ tagline: text })
  }



  // componentWillMount() {
  //   BackHandler.exitApp();
  // }

  // componentWillUnmount() {
  //   BackHandler.exitApp();
  // }




  //  onButtonPress = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  //   // then navigate
  //   navigate('NewScreen');
  // }

  // handleBackButton = () => {
  //  Alert.alert(
  //      'Exit App',
  //      'Exiting the application?', [{
  //          text: 'Cancel',
  //          onPress:  console.log('Cancel Pressed'),
  //          style: 'cancel'
  //      }, {
  //          text: 'OK',
  //          onPress:  BackHandler.exitApp()
  //      }, ], {
  //          cancelable: false
  //      }
  //   )
  //   return true;
  // } 

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }



  componentDidMount = () => {
    this.fetchUser();
    this.addUserListner();
    this.messagelistApi();
    // this.willFocusSubscription = this.props.navigation.addListener(
    //   "willFocus",
    //   () => {
    //     this.messagelistApi();
    //   }
    // );
  };



  // fetchUser() {
  //   
  //   console.log('Fetch user called.....')
  //   var limit = 30;
  //   var usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();
  //   usersRequest.fetchNext().then(
  //       userList => {
  //           if(userList.length >0){
  //               CometChat.getUnreadMessageCountForAllUsers().then(array=>{
  //                   var unread = Object.keys(array);
  //                   if(unread.length > 0){
  //                       unread.map(uid =>{
  //                           var index = userList.findIndex(user=> user.uid == uid);
  //                           if(index != -1){
  //                               userList[index].unreadCount = array[uid];
  //                           }
  //                       });
  //                   } 
  //                   this.setState({
  //                     users: userList,
  //                   });  
  //               })
  //           }
  //       },
  //       error => {
  //           console.log("User list fetching failed with error:", error);
  //       }
  //   );
  // }

  async fetchUser() {

    var userid = await AsyncStorage.getItem('userID');
    var data = {
      userId: userid
    }
    fetch('http://18.204.139.44:3005/UsersListInChat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          users: responseJson.data,

        })
      })
      .catch(function (error) {
        this.setState({
          isLoading: false,
        })
        reject(new Error(`Unable to retrieve events.\n${error.message}`));
      });
  }

  async messagelistApi() {

    var userid = await AsyncStorage.getItem('userID');
    var lastMsg = this.state.chatlist.slice();
    var data = {
      userId: userid
    }
    fetch('http://18.204.139.44:3005/GetMessages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        //  this.fetchMessages();
        // console.log('chat res', responseJson);
        var newStateArray1 = this.state.chatlist.slice();
        responseJson && responseJson.map((el, ind) => {
          var messagesRequest = new CometChat.MessagesRequestBuilder().setUID(el._id).setLimit(50).build();
          messagesRequest.fetchPrevious().then(
            mess => {
               console.log("Message list fetched:", mess)

              if (userid === mess[0].receiver) {


                // this.state.chatlist.push({

                //   name : mess[0].data.entities.sender.entity.name,
                //   avatar : mess[0].data.entities.sender.entity.avatar,
                //   emsg : mess[mess.length - 1].text
                

                // })

                //  this.state.chatlist.slice();
                newStateArray1.push({
                  otherid: mess[0].data.entities.sender.entity.uid,
                  name: mess[0].data.entities.sender.entity.name,
                  avatar: mess[0].data.entities.sender.entity.avatar,
                  emsg: mess[mess.length - 1].text
                });
                // this.setState({ chatlist: lastMsg });
                // console.log("if checking error:", this.state.chatlist);
              }
              else {

                newStateArray1.push({
                  otherid: mess[0].data.entities.receiver.entity.uid,
                  name: mess[0].data.entities.receiver.entity.name,
                  avatar: mess[0].data.entities.receiver.entity.avatar,
                  emsg: mess[mess.length - 1].text

                })
                // var newStateArray1 = this.state.chatlist;
                // newStateArray1.push({
                //   name: mess[0].data.entities.receiver.entity.name,
                //   avatar: mess[0].data.entities.receiver.entity.avatar,
                //   emsg: mess[mess.length - 1].text
                // });
                // this.setState({ chatlist: newStateArray1 });
                // console.log("else checking error:", this.state.chatlist);
              }

              this.setState({ chatlist: newStateArray1 });

            },
            error => {
              console.log("Message fetching failed with error:", error);
            }
          );


        })

        //typeof avatar == undefined

        // console.log('lastmsg', this.state.chatlist);

        // this.setState({
        //   chatlist : lastMsg
        // })

      })
      .catch(function (error) {
        this.setState({
          isLoading: false,
        })
        reject(new Error(`Unable to retrieve events.\n${error.message}`));
      });

    console.log('last msg =>', this.state.chatlist);
  }





  addUserListner() {
    let listenerID = "CONTACT_USER_LISTNER";
    let that = this;
    CometChat.addUserListener(
      listenerID,
      new CometChat.UserListener({
        onUserOnline: onlineUser => {
          /* when someuser/friend comes online, user will be received here */
          console.log("On User Online:", { onlineUser });
          that.state.users.map(user => {
            if (user.uid == onlineUser.uid) {
              user.status = "online"
              that.setState({ users: [...that.state.users] })
            }
          })
        },
        onUserOffline: offlineUser => {
          /* when someuser/friend went offline, user will be received here */
          console.log("On User Offline:", { offlineUser });
          that.state.users.map(user => {
            if (user.uid == offlineUser.uid) {
              user.status = "offline"
              that.setState({ users: [...that.state.users] })
            }
          })
        }
      })
    );
  }
  renderItem1 = ({ item }) => {
    console.log("Render item called " + JSON.stringify(item))

    let isOnline, showUnreadCount, showBlockedLabel;

    if (item.avatar == null) {
      item.avatar = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"  // default avatar
    }

    if (item.status === 'online') {
      isOnline = true;
    } else {
      isOnline = false;
    }

    if (item.unreadCount > 0) {
      showUnreadCount = true;
    } else {
      showUnreadCount = false;
    }

    if (item.blockedByMe == true) {
      showBlockedLabel = true;
    } else {
      showBlockedLabel = false;
    }

    return (

      <TouchableRipple
        delayLongPress={10}
        onPress={() => {
          this.onPress(item)
        }}
        onLongPress={() => {
          console.log("on long press");
          this.showActionSheet(item);
        }}
        rippleColor="rgba(0, 0, 0, .20)">
        <View style={styles.item} >
          <Image
            style={styles.image}
            resizeMode={"cover"}
            source={{ uri: item.avatar }}
          />
          <View>
            <View style={[{ flex: 1, flexDirection: 'row', width: '100%' }]}>
              <Text>{item.name}</Text>
              {showBlockedLabel ? <Text style={{ color: 'red', fontSize: 12, fontWeight: 'bold' }}> blocked </Text> : null}
              {showUnreadCount ? <View style={{ width: 25, height: 25, backgroundColor: 'red', alignContent: 'flex-end', marginLeft: '65%', borderRadius: 25 / 2, padding: 3, justifyContent: 'center' }}><Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>{item.unreadCount}</Text></View> : null}
            </View>


            <View style={[{ flexDirection: 'row' }]}>
              <View style={[styles.circle, { backgroundColor: isOnline ? '#76ff03' : '#9e9e9e' }]} />
              <Text style={[{ marginStart: 5 }]}>
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
    );
  };

  onPress(item) {
    this.state.users.map(user => {
      if (user.uid == item.uid) {
        user.unreadCount = 0;
        this.setState({ users: [...this.state.users] });
      }
    });
    NavigationService.navigate('Chat', {
      uid: item.uid,
      username: item.name,
      status: item.status,
    });
  }
  async getDetailsApi() {

    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }

    fetch('http://18.204.139.44:3005/usersignupdetail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          screenName: responseJson.Result[0].screenName,
          profilePic: responseJson.Result[0].profilePic,
          city: responseJson.Result[0].city,
          tagline: responseJson.Result[0].tagline,
        })


      })
      .catch(function (error) {
        this.setState({
          isLoading: false,
        })
        reject(new Error(`Unable to retrieve events.\n${error.message}`));
      });
  }

  async userflatApi() {
    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }

    fetch('http://18.204.139.44:3005/usersList', {
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
          count: responseJson.usercount,
          ConnectionStatus: responseJson.list[0].ConnectionStatus
        }
        );
      })

      .catch(function (error) {
        this.setState({
          isLoading: false,
        })
        reject(new Error(`Unable to retrieve events.\n${error.message}`));
      });
  }




  async joinflatApi() {

    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }


    fetch('http://18.204.139.44:3005/usersList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource1: responseJson.list,
          //ConnectionStatus: responseJson.list[0].ConnectionStatus

        }
        );
      })
      .catch(function (error) {
        this.setState({
          isLoading: false,
        })
        reject(new Error(`Unable to retrieve events.\n${error.message}`));
      });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getDetailsApi().then(() => {
      this.setState({ refreshing: false });
    });
  }

  actionOnRow(_id, screenName, status, ConnectionStatus) {

    var Id = _id;
    // var ConnectionStatus1 = ConnectionStatus;
    this.setState({
      actionId: Id,
      //ConnectionStatus: ConnectionStatus
    })

    if (ConnectionStatus === "True") {
      var data = {
        uid: _id,
        username: screenName,
        status: status,
      }
      this.props.navigation.navigate('privateMessage', { data: data });
    }
    else {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }
  }

  centeractionOnRow(otherid, name, status) {
    debugger;
      var data1 = {
        uid: otherid,
        username: name,
        status: status,
      }
      this.props.navigation.navigate('privateMessage', { data: data1 });
  }
  async frndMethod() {
    var id1 = await AsyncStorage.getItem('userID');
    var data = {
      userID: id1,
      receiverId: this.state.actionId,
    }
    console.log(data);
    fetch('http://18.204.139.44:3005/sendFriendReq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        AsyncStorage.setItem('receiverId', this.state.actionId);
        if (responseJson.message == "request send.") {
          this.setState({ isModalVisible: false });
          ToastAndroid.show(responseJson.message, ToastAndroid.LONG)
          // this.props.navigation.navigate('friends');
        }
        else {
          ToastAndroid.show(responseJson.message, ToastAndroid.LONG)
          this.setState({ isModalVisible: false });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }















  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });


  //this.props.navigation.navigate('UpdatePassowrd');





  render() {
    return (
      <ImageBackground source={require('./images/Splash_bg.png')}
        style={{
          width: '100%',
          height: '100%'
        }}>


        <View style={{ flexDirection: "row", }}>
          <Text style={{
            color: "white",
            marginLeft: 10,
            marginTop: 10

          }}>Online Users</Text>
          <Text style={{
            color: "white",
            marginLeft: 10,
            marginTop: 10,
            width: 25,
            height: 20,
            textAlign: 'center',
            backgroundColor: "#CC5B88"
          }}>{this.state
            .count}</Text>
        </View>

        <View style={styles.container}>





          <View style={styles.firstContainer}>

            {/* <FlatList
                        data={this.state.groups}
                        keyExtractor={item => item.guid}
                        renderItem={this.renderItem1}/> */}

            <FlatList
              data={this.state.dataSource1}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>

                <TouchableOpacity onPress={
                  this.actionOnRow.bind(this, item._id, item.screenName, item.online ? item.online : null, item.ConnectionStatus ? item.ConnectionStatus : null)
                }
                >

                  <View style={{ flexDirection: "row" }}>

                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'flex-start',
                        marginTop: "5%",
                        alignItems: "center",
                        marginTop: '10%',
                        marginLeft: "3%",
                        borderRadius: 25,
                        marginBottom: 10
                      }}
                      source={{ uri: 'http://18.204.139.44/AalapApi/uploads/' + item.profilePic }}
                    />

                    {this.state.online === "true" ?
                      <View>
                        <Image source={require('./images/circle_green.png')}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 18,
                            marginTop: 15,
                          }} />
                      </View>
                      : <View>
                        <Image source={require('./images/circle_orange.png')}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 18,
                            marginTop: 15,
                          }} />
                      </View>
                    }


                    <View style={{ marginLeft: 5, marginTop: 7 }} >
                      <Text
                        style={{
                          color: "white",
                          marginTop: "10%",

                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.screenName}</Text>
                      <Text
                        style={{
                          color: "white",
                          marginTop: "5%",
                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.city}</Text>

                    </View>
                  </View>

                </TouchableOpacity>
              }
              keyExtractor={(item, index) => item.index}
            />

          </View>


          <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: null })}
            onBackButtonPress={() => this.setState({ isModalVisible: null })}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}>


            {/* <Modal isVisible={this.state.isModalVisible}> */}
            <View style={{ marginLeft: 20, height: 250, width: 300, borderRadius: 15, backgroundColor: 'white' }}>

              <TouchableOpacity onPress={this._toggleModal}>
                <Text style={{ marginVertical: 20, marginTop: 20, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}> View Profile  </Text>
              </TouchableOpacity>
              <Text style={{ marginVertical: 10, marginTop: 10, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}> Chat </Text>
              <Text style={{ marginVertical: 20, marginTop: 20, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}> Send Message </Text>
              <TouchableOpacity onPress={() => this.frndMethod()}>
                <Text style={{ marginVertical: 10, marginTop: 10, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}> Add Friend </Text>
              </TouchableOpacity>

              <Text style={{ marginVertical: 20, marginTop: 20, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}> Report as Spam </Text>


            </View>
          </Modal>




          <View style={styles.secondContainer}>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                data={this.state.chatlist}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={
                  this.centeractionOnRow.bind(this, item.otherid, item.name)
                }
                >
                  <View style={{ flexDirection: "row" }}> 
                   {item.avatar != "undefined" ? (
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'flex-start',
                        marginTop: "5%",
                        alignItems: "center",
                        marginTop: '10%',
                        marginLeft: "3%",
                        borderRadius: 25,
                        marginBottom: 10
                      }}
                      source={{
                        uri:
                          item.avatar
                      }}
                    />
                    ) : <Image
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'flex-start',
                      marginTop: "5%",
                      alignItems: "center",
                      marginTop: '10%',
                      marginLeft: "3%",
                      borderRadius: 25,
                      marginBottom: 10
                    }}
                    source={require('./images/profileimg.png')}  
                  />}
                     
                       
                    <View style={{ marginLeft: 5, marginTop: 7 }} >
                      <Text
                        style={{
                          color: "white",
                          marginTop: 35,
                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.name}</Text>
                      <Text
                        style={{
                          color: "white",
                          marginTop: 10,
                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.emsg}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => item.index}
              />
            </View>
          </View>



          <View style={styles.thirdContainer}>

            <Image source={{ uri: 'http://18.204.139.44/AalapApi/uploads/' + this.state.profilePic }}
              style={{
                width: 50,
                height: 45,
                justifyContent: 'center',

                marginTop: "10%",
                alignItems: 'center',
                marginTop: '18%',
                borderRadius: 25,
                marginLeft: "35%",
                borderRadius: 25,
                marginBottom: 10
              }} />
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: "4%",
                fontSize: 15
              }}>{this.state.screenName}</Text>
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: "4%",
                fontSize: 12
              }}>{this.state.tagline}</Text>
            <Text
              style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: "4%",
                fontSize: 12.5
              }}>{this.state.city}</Text>
            <View style={{ backgroundColor: '#142c30', height: 25 }}>
              <Text style={{
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: -50,
                fontSize: 14
              }}> Just Joined </Text>
            </View>

            <FlatList
              data={this.state.dataSource1}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>
                <View style={{ flex: 1, flexDirection: 'column', margin: 10, }}>


                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'center',

                      marginTop: "10%",
                      alignItems: 'center',
                      marginTop: '18%',
                      borderRadius: 25,
                      marginLeft: "16%",
                      borderRadius: 25,
                      marginBottom: 10
                    }}
                    source={{ uri: 'http://18.204.139.44/AalapApi/uploads/' + item.profilePic }}
                  />
                  <Text style={{
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginLeft: "4%",
                    fontSize: 15
                  }}>{item.screenName}</Text>
                  <Text style={{
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginLeft: "4%",
                    fontSize: 15
                  }}>{item.city}</Text>
                </View>
              }
              keyExtractor={item => item.city}
            />





          </View>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  firstContainer: {
    flex: .5,
    backgroundColor: '#0a2b32',
    marginLeft: -10


  },
  secondContainer: {
    flex: 1.5,



  },
  thirdContainer: {
    flex: .5,
    backgroundColor: '#0b2c33',
    marginTop: -50,
    marginLeft: -150
  },
  loginScreenButton: {

    backgroundColor: 'white',

  },
  loginScreenButton1: {

    backgroundColor: 'white',

  },
  input: {
    margin: 5,
    height: 40,
    width: 320,
    padding: 10,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#1f2c3f',
    marginVertical: 12,
    marginTop: 25
  },
});