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
    Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CometChat } from '@cometchat-pro/react-native-chat';
import ActionSheet from 'react-native-actionsheet';
import { Header, Container } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



var uid, messagelist, typingNotification, status;
let typing = 'typing....';
let data = [{
    value: 'Mumbai Room',
  }, {
    value: 'Delhi Room',
  }, {
    value: 'Pune Room',
  }];


export default class privateMessage extends Component {
    messagesRequest = null;
    static navigationOptions = {
        header: null
      }
    

        // uid = navigation.getParam('uid', 'NO-ID');
        // username = navigation.getParam('username', 'some default value');
        // status = navigation.getParam('status', 'some default value');
        // const {state} = navigation;
        // return {
        //     headerBackground: (
        //         <Image
        //             style={{ marginLeft: -100, marginTop: 5, width: '20%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
        //             source={require('./images/logo_web.png')}
        //         />
        //     ),
        //     headerTitleStyle: {
        //         textAlign: 'center',
        //         flexGrow: 1,
        //         alignSelf: 'center',
        //         color: 'white',
        //     },
        //     headerStyle: {
        //         backgroundColor: '#009dae'
        //     },
        //     headerLeft:

        //         <View style={{ flexDirection: 'row' }}>
        //             <TouchableOpacity onPress={() => navigation.navigate('friends')}>
        //                 {/* <Ionicons style={{ marginLeft: 10 }}
        //               name="ios-arrow-back" size={26} color='#69b3f6'
        //             /> */}
        //                 <Image
        //                     style={{ marginLeft: 10, height: 22, width: 22, marginTop: 10 }}
        //                     source={require('./images/back.png')}
        //                 />
        //             </TouchableOpacity>
        //             <TouchableOpacity onPress={() => navigation.navigate('RoomSelection')}>
        //                 {/* <AntDesign style={{
        //               marginLeft: 36
        //             }}
        //               name="select1" size={26} color='#69b3f6'
        //             /> */}
        //                 <Image
        //                     style={{ marginLeft: 36, height: 22, width: 22, marginTop: 10 }}
        //                     source={require('./images/roomselection.png')}
        //                 />

        //                 <Text style={{
        //                     color: "#aadae0",
        //                     marginLeft: 10,
        //                     textAlign: 'center',
        //                     fontSize: 12,
        //                     borderBottomWidth: 2,
        //                     borderBottomColor: 'white',
        //                     marginBottom: -750
        //                 }}> Room Selection </Text>


        //             </TouchableOpacity>

        //             <TouchableOpacity onPress={() => navigation.navigate('users')}>
        //                 <Image
        //                     style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
        //                     source={require('./images/chat.png')}
        //                 />
        //                 <Text style={{
        //                     color: "#aadae0",
        //                     textAlign: 'center',
        //                     fontSize: 12,
        //                     marginLeft: 7
        //                 }} > Chat </Text>
        //             </TouchableOpacity>

        //         </View>
        //     ,
        //     headerRight:

        //         <View style={{ flexDirection: 'row', marginRight: 140 }}>

        //             <TouchableOpacity onPress={() => navigation.navigate('')}>
        //                 {/* <Ionicons style={{ marginLeft: 17 }}
        //            name="md-search" size={26} color='#69b3f6'
        //          /> */}
        //                 <Image
        //                     style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
        //                     source={require('./images/search.png')}
        //                 />

        //                 <Text style={{
        //                     color: "#aadae0",
        //                     marginLeft: 10,
        //                     textAlign: 'center',
        //                     fontSize: 12
        //                 }}> Search </Text>
        //             </TouchableOpacity>

        //             <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

        //                 {/* <Ionicons style={{ marginLeft: 29 }}
        //            name="ios-notifications-outline" size={26} color='#69b3f6'
        //          /> */}
        //                 <Image
        //                     style={{ marginLeft: 29, height: 20, width: 20, marginTop: 10 }}
        //                     source={require('./images/notification.png')}
        //                 />
        //                 <Text style={{
        //                     color: "#aadae0",
        //                     textAlign: 'center',
        //                     fontSize: 12,
        //                     marginLeft: 7
        //                 }} >Notification </Text>
        //             </TouchableOpacity>

        //             <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

        //                 <Image
        //                     style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
        //                     source={require('./images/settings.png')}
        //                 />
        //                 <Text style={{
        //                     color: "#aadae0",
        //                     textAlign: 'center',
        //                     fontSize: 12,
        //                     marginLeft: 5
        //                 }} >Settings </Text>
        //             </TouchableOpacity>

        //         </View>,
        // }
   


    constructor() {
        super();
        this.state = {

            uid: '',
            name: '',
            status: '',
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
            countryNameData: '',
            isLoading: true,
            text: '',
            img: [],
            usersimg: [],
            usersimg1: [],
            img: [],
            usersimg: [],
            usersimg1: [],
            count: '',
            dataSource01: [],
            messages: [],
            txtMessage: '',
            mediaMsg: '',
            refreshing: false,
            autoScroll: true,
            fullVideo: 0,
            fullVideoStream: '',
            userId1: ''
        }
        this.arrayholder = [];
        //this.messagesRequest = new CometChat.MessagesRequestBuilder().setUID(uid).setLimit(30).build();
        this.receiveMessages()
        this.fetchMessages = this.fetchMessages.bind(this);
        this._handleRefresh = this._handleRefresh.bind(this);
        // this.fetchMessages();
        this.messagelist;
        this.sendMessage = this.sendMessage.bind(this);
        this.sendMediaMessage = this.sendMediaMessage.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
        this.imagePicker = this.imagePicker.bind(this);
        this.documentPicker = this.documentPicker.bind(this);
        this.showActionSheet = this.showActionSheet.bind(this);
        this.addUserListner()
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        let receiverType = CometChat.RECEIVER_TYPE.USER;
        typingNotification = new CometChat.TypingIndicator(uid, receiverType);

    }
    flat = (text) => {
        if (this.state.flatlistMethod === false) {
          this.setState({
            flatlistMethod: true
          })
        }
        else {
          this.setState({
            flatlistMethod: false
          })
        }
      }
    //Initiate Call

    initiateCall() {
        var receiverID = uid;
        var callType = CometChat.CALL_TYPE.VIDEO;
        var receiverType = CometChat.RECEIVER_TYPE.USER;

        var call = new CometChat.Call(receiverID, callType, receiverType);

        CometChat.initiateCall(call).then(
            outGoingCall => {
                console.log("Call initiated successfully:", outGoingCall);
                // perform action on success. Like show your calling screen.
            },
            error => {
                console.log("Call initialization failed with exception:", error);
            }
        );
    }

    //Receive Calls

    addCallListener() {
        var listnerID = "UNIQUE_LISTENER_ID";
        CometChat.addCallListener(
            listnerID,
            new CometChat.CallListener({
                onIncomingCallReceived(call) {
                    console.log("Incoming call:", call);
                    // Handle incoming call
                },
                onOutgoingCallAccepted(call) {
                    console.log("Outgoing call accepted:", call);
                    // Outgoing Call Accepted
                },
                onOutgoingCallRejected(call) {
                    console.log("Outgoing call rejected:", call);
                    // Outgoing Call Rejected
                },
                onIncomingCallCancelled(call) {
                    console.log("Incoming call calcelled:", call);
                }
            })
        );

    }


    //Accept Call

    acceptCall() {
        var sessionID = "SESSION_ID";

        CometChat.acceptCall(sessionID).then(
            call => {
                console.log("Call accepted successfully:", call);
                // start the call using the startCall() method
            },
            error => {
                console.log("Call acceptance failed with error", error);
                // handle exception
            }
        );

    }

    //reject call
    rejectCall() {
        var sessionID = "SESSION_ID";
        var status = CometChat.CALL_STATUS.REJECTED;

        CometChat.rejectCall(sessionID, status).then(
            call => {
                console.log("Call rejected successfully", call);
            },
            error => {
                console.log("Call rejection failed with error:", error);
            }
        );

        var sessionID = "SESSION_ID";
        var status = CometChat.CALL_STATUS.REJECTED;

        CometChat.rejectCall(sessionID, status).then(
            call => {
                console.log("Call rejected successfully", call);
            },
            error => {
                console.log("Call rejection failed with error:", error);
            }
        );
    }

    //start a call

    startCall() {
        var sessionID = "SESSION_ID";

        CometChat.startCall(
            sessionID,
            document.getElementById("callScreen"),
            new CometChat.OngoingCallListener({
                onUserJoined: user => {
                    /* Notification received here if another user joins the call. */
                    console.log("User joined call:", user);
                    /* this method can be use to display message or perform any actions if someone joining the call */
                },
                onUserLeft: user => {
                    /* Notification received here if another user left the call. */
                    console.log("User left call:", user);
                    /* this method can be use to display message or perform any actions if someone leaving the call */
                },
                onCallEnded: call => {
                    /* Notification received here if current ongoing call is ended. */
                    console.log("Call ended:", call);
                    /* hiding/closing the call screen can be done here. */
                }
            })
        );

    }



    mediaView(isMyMess, item) {
        console.log("Media msg", item);
        switch (item.type) {
            case 'image': {
                return (
                    <TouchableOpacity onPress={() => this.renderFullScreenImage(item)}>
                        <View style={{ alignSelf: isMyMess ? 'flex-end' : 'flex-start' }}>
                            <Image style={{ height: 120, width: 120 }} source={{ uri: item.data.url }} />
                        </View>
                    </TouchableOpacity>
                );
            } break;

            case 'video': {
                // return (
                //     <TouchableOpacity onPress={() => this.renderFullScreenVideo(item)}>
                //         <View style={{ alignSelf: isMyMess ? 'flex-end' : 'flex-start' }}>
                //             <Video style={{ height: 150, width: 150 }} source={{ uri: item.data.url }} paused={true} ref={(ref) => { this.player = ref }} />
                //         </View>
                //     </TouchableOpacity>
                // );
            } break;

            default: {
                var msg = item.sender.name + ' has sent you a file. Download it here: ';
                return (
                    <View style={[styles.balloon, { backgroundColor: isMyMess ? '#bdbdbd' : '#3f51b5' }, { alignSelf: isMyMess ? 'flex-end' : 'flex-start' }]}>
                        <Text style={[styles.item, { color: isMyMess ? '#757575' : 'white' }, { fontWeight: '600', fontStyle: 'italic' }]}>
                            {msg}
                            <Text onPress={() => Linking.openURL(item.data.url)} style={{ color: '#0000EE' }}>
                                {item.data.url}
                            </Text>
                        </Text>
                    </View>
                )
            }
        }
    }

    txtView(isMyMess, item) {
        return (
            <View style={[styles.balloon, { backgroundColor: isMyMess ? '#bdbdbd' : '#3f51b5' }, { alignSelf: isMyMess ? 'flex-end' : 'flex-start' }]}>
                <Text style={[styles.item, { color: isMyMess ? '#757575' : 'white' }]}>{item.data.text}</Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        let isMyMess, isRead, isDelivered;
        if (item.receiver == uid) {
            isMyMess = true

            "readAt" in item ? isRead = true : isRead = false;
            "deliveredAt" in item ? isDelivered = true : isDelivered = false;

        } else {
            isMyMess = false
            "readAt" in item ? '' : CometChat.markMessageAsRead(item);
        }



        if (isMyMess) {
            return (
                <View>
                    <View style={[{ flexDirection: 'row' }]}>
                        <View style={styles.row}>
                            {
                                item.type == 'text' ? this.txtView(isMyMess, item) : this.mediaView(isMyMess, item)
                            }
                        </View>
                        {this.displayReceipt(isRead, isDelivered)}

                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={styles.row}>
                        <View
                            style={{ alignSelf: isMyMess ? 'flex-end' : 'flex-start' }}>
                            {
                                item.type == 'text' ? this.txtView(isMyMess, item) : this.mediaView(isMyMess, item)
                            }
                        </View>
                    </View>
                </View>
            );
        }
    }


    displayReceipt(isRead, isDelivered) {
        if (isRead) {
            return <MaterialCommunityIcons style={[{ alignSelf: 'center' }]} name='check-all' size={15} color="#2196f3" />
        } else if (isDelivered) {
            return <MaterialCommunityIcons style={[{ alignSelf: 'center' }]} name='check-all' size={15} color="#000" />
        } else {
            return <MaterialCommunityIcons style={[{ alignSelf: 'center' }]} name='check' size={15} color="#000" />
        }
    }

    addUserListner() {
        var listenerID = "CHAT_SCREEN_USER_LISTNER";

        CometChat.addUserListener(
            listenerID,
            new CometChat.UserListener({
                onUserOnline: onlineUser => {
                    /* when someuser/friend comes online, user will be received here */
                    console.log("On User Online:", { onlineUser });

                    if (onlineUser.uid == uid) {
                        status = "Online"
                        this.changeTypingText(status)
                    }
                },
                onUserOffline: offlineUser => {
                    /* when someuser/friend went offline, user will be received here */
                    console.log("On User Offline:", { offlineUser });
                    if (offlineUser.uid == uid) {
                        status = "Offline"
                        this.changeTypingText(status)
                    }
                }
            })
        );
    }


    _keyboardDidShow() {
        if (messagelist != null) {
            setTimeout(() => messagelist.scrollToEnd(), 100)
        }
    }


    getMimeType(type) {
        var MimeList = {
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            gif: 'image/gif',
            png: 'image/png',
            svg: 'image/svg+xml',
            webp: 'image/webp',
            mpeg: 'video/mpeg',
            ogv: 'video/ogg',
            webm: 'video/webm',
            mp4: 'video/mp4',
            doc: 'application/msword',
            docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            pdf: 'application/pdf',
            pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            zip: 'application/zip',
            aac: 'audio/aac',
            wav: 'audio/wav',
            weba: 'audio/webm',
            mp3: 'audio/mpeg',
            oga: 'audio/ogg'
        };
        return MimeList[type];
    }

    // handleChoosePhoto = () => {
    //     DocumentPicker.show({
    //         filetype: [DocumentPickerUtil.allFiles()],
    //     },(error,response) => {
    //         if(Platform.OS === 'ios'){
    //             var ext = response.fileName.split('.')[1].toLowerCase();               
    //             var type = this.getMimeType(ext);
    //         }
    //         var file = {
    //             name: response.fileName,
    //             type: Platform.OS === "android" ? response.type : type, 
    //             uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://",""),
    //         }
    //         this.setState({ mediaMsg: file });
    //     });
    // }

    documentPicker() {
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()],
        }, (error, response) => {
            if (Platform.OS === 'ios') {
                var ext = response.fileName.split('.')[1].toLowerCase();
                var type = this.getMimeType(ext);
            }
            var file = {
                name: response.fileName,
                type: Platform.OS === "android" ? response.type : type,
                uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
            }
            this.setState({ mediaMsg: file });
        });
    }

    imagePicker() {
        const options = {
            quality: 1.0,
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                if (Platform.OS === 'ios') {
                    var ext = response.fileName.split('.')[1].toLowerCase();
                    var type = this.getMimeType(ext);
                }
                var file = {
                    name: response.fileName,
                    type: Platform.OS === "android" ? response.type : type,
                    uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
                }
                this.setState({ mediaMsg: file });
            }
        });
    }

    showActionSheet() {
        this.ActionSheet.show();
    }

    renderFullScreenVideo(item) {
        this.props.navigation.navigate('Video', {
            url: item.data.url,
        });
    }

    renderFullScreenImage(item) {
        this.props.navigation.navigate('Image', {
            url: item.data.url,
        });
    }

    screenName = (text) => {
        this.setState({ screenName: text })
    }

    loginApi1() {
        this.props.navigation.navigate('RoomSelection');
    }
  
 
    componentWillMount() {
        debugger;
        const { navigation } = this.props;
        const Comments = navigation.getParam("data");
        uid = Comments.uid;
        name = Comments.name;
        status = Comments.status;
        // this.setState({
        //     userId1:uid
        // })
        this.fetchMessages();
        this.countryApi();
        // const {state} = navigation;

        //  this.setState({
        //    uid: Comments.uid,
        //    name: Comments.name,
        //    status: Comments.status,

        //  });


        //this.joinflatApi();

    }


    //  async joinflatApi(){

    //     var id1 = await AsyncStorage.getItem('userID');

    //   var data={
    //   userID:id1,

    //   }
    //   console.log(data);

    //   fetch('http://18.204.139.44:3005/friendslist', {
    //   method: 'POST',
    //   headers: {
    //   'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    //   }).then((response) => response.json())
    //   .then((responseJson) => {
    //           this.setState({
    //             isLoading: false,
    //             dataSource: responseJson.details,
    //           } 
    //           );
    //         })
    //         .catch((error) => {
    //           console.error(error);

    //    }); 
    //   }

    // private(){

    //   this.props.navigation.navigate('ChatApp');
    // }

    countryApi() {
        fetch('http://18.204.139.44:3003/country', {
          method: 'GET'
        })
          .then(response => response.json())
          .then(res => {
            console.log(res.result)
            this.setState({
              countryNameData: res.result
            })
          })
    
          .catch(function (error) {
            reject(new Error(`Unable to retrieve events.\n${error.message}`));
          });
      }




    render() {
        return (
            <Container>
            <Header style={{ height: 65, backgroundColor: "#009dae" }} >
            <View style={styles.textWrapper}   >
              {/* <View style={{ width: '100%', height: "100%", flexDirection: 'row', marginTop: "5%" }}> */}
              <View style={{ flexDirection: 'row', }}>
                <View style={{ flexDirection: 'row', width: '35%', marginLeft: 25, marginTop: 10 }}>
  
                  <Image
                    style={{ marginLeft: 10, height: 22, width: 22, marginTop: 10 }}
                    source={require('./images/back.png')}
                  />
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomSelection')}>
                    <View style={{ width: '50%', flexDirection: 'row' }}>
                      <Image
                        style={{ marginLeft: 50, height: 22, width: 22, marginTop: 10 }}
                        source={require('./images/roomselection.png')}
                      />
  
                      <Text style={{
                        color: "#aadae0",
                        //marginLeft: 10,
                        textAlign: 'center',
                        fontSize: 12,
                        borderBottomWidth: 2,
                        borderBottomColor: 'white',
                        marginBottom: -750,
                        marginLeft: -50,
                        marginTop: 30
                      }}> Room Selection </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('users')}>
                    <View style={{ width: '50%', flexDirection: 'row' }}>
                      <Image
                        style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
                        source={require('./images/chat.png')}
                      />
                      <Text style={{
                        color: "#aadae0",
                        textAlign: 'center',
                        fontSize: 12,
                        // marginLeft: 7,
                        marginLeft: -25,
                        marginTop: 30
                      }} > Chat </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Image
                  style={{ marginTop: 5, width: '15%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                  source={require('./images/logo_web.png')}
                />
  
                <View style={{ flexDirection: 'row', width: '50%', marginLeft: 10, marginTop: 10 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <View style={{ width: '50%', flexDirection: 'row' }}>
                      <Image
                        style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
                        source={require('./images/search.png')}
                      />
                      <Text style={{
                        color: "#aadae0",
                        marginLeft: -30,
                        marginTop: 30,
                        textAlign: 'center',
                        fontSize: 12
                      }}> Search </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                    <View style={{ width: '50%', flexDirection: 'row' }}>
                      <Image
                        style={{ marginLeft: 25, height: 20, width: 20, marginTop: 10 }}
                        source={require('./images/notification.png')}
                      />
                      <Text style={{
                        color: "#aadae0",
                        textAlign: 'center',
                        fontSize: 12,
                        marginLeft: -40,
                        marginTop: 30
                      }} >Notification </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <View style={{ width: '50%', flexDirection: 'row' }}>
                      <Image
                        style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
                        source={require('./images/settings.png')}
                      />
                      <Text
                        style={{
                          color: "#aadae0",
                          textAlign: 'center',
                          fontSize: 12,
                          marginLeft: -30,
                          marginTop: 30
                        }}
                      >Settings </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{ marginLeft: 5, flexDirection: 'row', width: '35%', height: 35, marginTop: 10, borderWidth: .8, borderColor: '#fff' }}>
                     {/* <TouchableOpacity onPress={() => this.flat()}> */}
                      <TextInput
                        placeholder="Select Room"
                        editable={false}
                        placeholderTextColor='#fff'
                        style={{ backgroundColor: 'transparent', }}
                      // onChangeText={this.onchangetext}
                      />
                      <View style={{}}>
                        <Image style={{ width: 20, height: 20, marginTop: 10 }}
                          soure={require('./images/downarrow.png')} /></View>
                    {/* </TouchableOpacity> */}
                  </View>
  
                </View>
              </View>
            </View>
  
            {/* </View> */}
          </Header>
  
  
            <View style={styles.container}>
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem}
                    extraData={this.state.messages}
                    keyExtractor={item => item.id}
                    ref={(ref) => messagelist = ref}
                    onContentSizeChange={() => this._onContentSizeChange()}
                    onRefresh={this._handleRefresh}
                    refreshing={this.state.refreshing}
                />
                <View style={styles.messageinputcontainer}>
                    <TextInput style={styles.messageinput}
                        placeholder="Enter Message"
                        value={this.state.txtMessage}
                        multiline={true}
                        //onChangeText={text => this.setState({ txtMessage: text })}
                        onChangeText={text => this.onTextChange(text)}
                    />
                    <TouchableOpacity style={styles.roundedbackgroud} onPress={this.initiateCall}>
                        <Image
                            style={{ height: 30, width: 30, alignSelf: 'center' }}
                            source={require('./images/facetime-button.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundedbackgroud} onPress={this.showActionSheet}>
                        <Image
                            style={{ height: 30, width: 30, alignSelf: 'center' }}
                            source={require('./images/attach_media_icon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundedbackgroud} onPress={this.sendMsg}>
                        <Image
                            style={{ height: 30, width: 30, alignSelf: 'center' }}
                            source={require('./images/send_icon.png')}
                        />
                    </TouchableOpacity>

                </View>
                <ActionSheet
                    title={'Choose File'}
                    ref={o => this.ActionSheet = o}
                    options={['Image', 'Document', 'Cancel']}
                    cancelButtonIndex={2}
                    onPress={(index) => { if (index == 0) { this.imagePicker() } else if (index == 1) { this.documentPicker() } }}
                />
            </View>
              </Container>
        );

    }

    onTextChange(text) {
        this.setState({ txtMessage: text })
        this.sendTypingIndicator()
    }

    _onContentSizeChange() {
        if (this.state.autoScroll) {
            messagelist.scrollToEnd({ animated: false })
        } else {
            setTimeout(() => this.setState({ autoScroll: true }), 500)
        }
    }

    _handleRefresh() {
        debugger;
        //.log('on handle refresh');
        this.setState({
            autoScroll: false,
            refreshing: true
        })
        this.fetchMessages();
    }

    receiveMessages() {
        console.log('Receive messages called');
        var listenerID = 'CHAT_SCREEN_LISTENER_ID';

        CometChat.addMessageListener(
            listenerID,
            new CometChat.MessageListener({
                onTextMessageReceived: textMessage => {
                    console.log("Text message successfully", textMessage);
                    this.setState((state) => {
                        return state.messages.push(textMessage)
                    })
                },
                onMediaMessageReceived: mediaMessage => {
                    console.log("Media message received successfully", mediaMessage);
                    this.setState((state) => {
                        return state.messages.push(mediaMessage)
                    })
                },
                onCutomMessageReceived: customMessage => {
                    console.log("Media message received successfully", mediaMessage);
                    this.setState((state) => {
                        return state.messages.push(mediaMessage)
                    })
                },
                onTypingStarted: (typingIndicator) => {
                    console.log("Typing started :", typingIndicator);
                    this.changeTypingText("Typing....")
                },
                onTypingEnded: (typingIndicator) => {
                    console.log("Typing ended :", typingIndicator);
                    this.changeTypingText(status)
                },
                onMessageDelivered: (messageReceipt) => {
                    console.log("MessageDeliverd", { messageReceipt });
                    var messages = this.state.messages;
                    for (var i = 0; i < messages.length; i++) {
                        var message = messages[i]
                        if (message.id == messageReceipt.messageId) {
                            message.deliveredAt = messageReceipt.timestamp;
                            this.setState({ messages: messages })
                        }
                    }

                }, onMessageRead: (messageReceipt) => {
                    console.log("MessageRead", { messageReceipt });
                    var messages = this.state.messages;
                    for (var i = 0; i < messages.length; i++) {
                        var message = messages[i]
                        if (message.id == messageReceipt.messageId) {
                            message.readAt = messageReceipt.timestamp;
                            this.setState({ messages: messages })
                        }
                    }
                }

            })
        );
    }

    changeTypingText = (titleText) => {
        const { setParams } = this.props.navigation;
        setParams({ title: titleText })
    }

    sendTypingIndicator() {
        CometChat.startTyping(typingNotification);
    }

    sendMsg() {
        if (this.state.txtMessage != '') {
            console.log("sending text message");
            this.sendMessage();
        } else if (this.state.mediaMsg != '') {
            console.log("sending media message");
            this.sendMediaMessage();
        }
    }

    sendMessage() {
        console.log('Send message called =', this.state.txtMessage);
        var messageType = CometChat.MESSAGE_TYPE.TEXT;
        var receiverType = CometChat.RECEIVER_TYPE.USER;
        var textMessage = new CometChat.TextMessage(uid, this.state.txtMessage, messageType, receiverType);
        this.setState({
            txtMessage: ''
        })

        console.log("Send End typing called", textMessage)
        CometChat.endTyping(typingNotification);

        CometChat.sendMessage(textMessage).then(
            message => {
                console.log('cometchat send message', message);
                this.setState((state) => {
                    return state.messages.push(message)
                })
            },
            error => {
                console.log("Message sending failed with error:", error);
            }
        );
    }

    sendMediaMessage() {
        var messageType;
        if (this.state.mediaMsg.type.split('/')[0] == 'image') {
            messageType = CometChat.MESSAGE_TYPE.IMAGE;
        } else if (this.state.mediaMsg.type.split('/')[0] == 'video') {
            messageType = CometChat.MESSAGE_TYPE.VIDEO;
        } else {
            messageType = CometChat.MESSAGE_TYPE.FILE;
        }
        var receiverType = CometChat.RECEIVER_TYPE.USER;
        var mediaMessage = new CometChat.MediaMessage(uid, this.state.mediaMsg, messageType, receiverType);
        this.setState({
            mediaMsg: ''
        });
        console.log("mediaMessage", mediaMessage);

        CometChat.sendMessage(mediaMessage)
            .then(message => {
                console.log('cometchat send media message', message);
                this.setState((state) => {
                    return state.messages.push(message)
                })
            },
                error => {
                    console.log("Media message sending failed with error", error);
                }
            );
    }

    fetchMessages() {
        debugger;
        console.log('Fetch messages called.....')

        var uid1 = this.state.uid;
        console.log('uid', uid1);

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

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 15
    },
    itemRight: {
        padding: 10,
        fontSize: 18,
        height: 44,
        alignSelf: 'flex-end'
    },
    balloon: {
        alignSelf: 'baseline',
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
    },
    row: {
        padding: 5,
        flex: 1,
    },
    messageinput: {
        flex: 1,
        textAlign: 'justify',
        height: 50,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    messageinputcontainer: {
        flexDirection: 'row',
        backgroundColor: "transparent",
        margin: 5
    },
    roundedbackgroud: {
        height: 40,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: "#3f51b5"
    }
})

//   render() {

//     return (
//  <ImageBackground source={require('./images/Splash_bg.png')} 
//  style={{
//   width: '100%', 
//   height: '100%'}}>
//  <ScrollView> 
//       <View style={styles.container}>



//      <TouchableOpacity    onPress = {() => this.loginApi1()}>
//           <LinearGradient style = {styles.loginButton} colors={['#030810', '#04070E']}  >

//             <Text style = {styles.LoginButtontxt}> Chat Room </Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <TouchableOpacity    onPress = {() => this.loginApi()}>
//           <LinearGradient style = {styles.loginButton1} colors={['#69b3f6', '#25d0de']}>

//             <Text style = {styles.LoginButtontxt1}> Private Chat </Text>
//           </LinearGradient>
//         </TouchableOpacity>


//         <View style={styles.secondContainer}>


//         <FlatList
//               data={this.state.dataSource}
//               showsVerticalScrollIndicator={false}
//               renderItem={({item}) =>

//               <TouchableOpacity onPress={this.actionOnRow
//                 .bind(this, item._id)}
//         >
//         <View style={{flexDirection:"row"}}>
//         <Image  source={{uri: 'http://18.204.139.44/AalapApi/uploads/'+item.profilePic}}
//           style={{
//             width: 50, 
//             height: 50,
//             justifyContent:'flex-start',
//             marginTop:"5%",
//             alignItems:"center",
//             marginTop: "5%",
//             marginLeft:"3%",
//             marginBottom:10,
//             borderRadius:20}} />
//       <View style={{marginLeft:15,marginTop:10}} >    
//         <Text 
//          style={{
//           color:"white",
//           marginTop:20,
//           marginLeft:"4%",
//           fontSize:12,

//           }}>{item.screenName}</Text>
//         <Text 
//          style={{
//           color:"white",
//           marginTop:"5%",
//           marginLeft:"4%",
//           fontSize:12}}>Hey! How are you?</Text>
//         </View>

//         </View>





//          </TouchableOpacity>
//             }
//                keyExtractor={(item,index)=>item.index}
//             />








// {/* <TouchableOpacity    onPress = {() => this.private()}>
//        <View style={{flexDirection:"row"}}>
//         <Image source={require('./images/ceo.png')} 
//           style={{
//             width: 50, 
//             height: 50,
//             justifyContent:'flex-start',
//             marginTop:"5%",
//             alignItems:"center",
//             marginTop: "5%",
//             marginLeft:"3%",
//             marginBottom:10,
//             borderRadius:20}} />

//         <View style={{marginLeft:15,marginTop:10}} >    
//         <Text 
//          style={{
//           color:"white",
//           marginTop:20,
//           marginLeft:"4%",
//           fontSize:12,

//           }}>Clarke</Text>
//         <Text 
//          style={{
//           color:"white",
//           marginTop:"5%",
//           marginLeft:"4%",
//           fontSize:12}}>Hey! How are you?</Text>
//         </View>

//         </View>

//         <View style={{width:"92%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />
//         </TouchableOpacity>


//         <TouchableOpacity    onPress = {() => this.private()}>
//          <View style={{flexDirection:"row"}}>
//         <Image source={require('./images/cr7.png')} 
//           style={{
//             width: 50, 
//             height: 50,
//             justifyContent:'flex-start',
//             marginTop:"5%",
//             alignItems:"center",
//             marginTop: "5%",
//             marginLeft:"3%",
//             borderRadius:10,
//             marginBottom:20}} />
//         <View style={{marginLeft:15,marginTop:7}} >    
//         <Text 
//          style={{
//           color:"white",
//           marginTop:20,
//           marginLeft:"4%",
//           fontSize:12,
//           }}>Paul</Text>
//         <Text 
//          style={{
//           color:"white",
//           marginTop:"5%",
//           marginLeft:"4%",
//           fontSize:12}}>Hello!!!!</Text>
//         </View>
//         </View>

//         <View style={{width:"92%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />
// </TouchableOpacity>

//         <TouchableOpacity    onPress = {() => this.private()}>
//         <View style={{flexDirection:"row"}}>
//         <Image source={require('./images/cof.png')} 
//           style={{
//             width: 50, 
//             height: 50,
//             justifyContent:'flex-start',
//             marginTop:"5%",
//             alignItems:"center",
//             borderRadius:20,
//             marginTop: "5%",
//             marginLeft:"3%",
//             marginBottom:10}} />
//         <View style={{marginLeft:15,marginTop:7}} >    
//         <Text 
//          style={{
//           color:"white",
//           marginTop:20,
//           marginLeft:"4%",
//           fontSize:12,
//           }}>Clarke</Text>
//         <Text 
//          style={{
//           color:"white",
//           marginTop:"5%",
//           marginLeft:"4%",
//           fontSize:12}}>Where are you?</Text>
//         </View>

//         </View>

//         <View style={{width:"92%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />
// </TouchableOpacity>

// <TouchableOpacity    onPress = {() => this.private()}>
//         <View style={{flexDirection:"row"}}>
//         <Image source={require('./images/ceo.png')} 
//           style={{
//             width: 50, 
//             height: 50,
//             justifyContent:'flex-start',
//             marginTop:"5%",
//             alignItems:"center",
//             marginTop: "5%",
//             borderRadius:20,
//             marginLeft:"3%",
//             marginBottom:10}} />
//         <View style={{marginLeft:15,marginTop:7}} >    
//         <Text 
//          style={{
//           color:"white",
//           marginTop:20,
//           marginLeft:"4%",
//           fontSize:12,
//           }}>Paul</Text>
//         <Text 
//          style={{
//           color:"white",
//           marginTop:"5%",
//           marginLeft:"4%",
//           fontSize:12}}>Hi Guys!!</Text>
//         </View>
//         </View>

//         <View style={{width:"92%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />

//         </TouchableOpacity>    */}

//         </View>
//       </View>
//       </ScrollView>
//     </ImageBackground>   
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     flexDirection:'row',
//   },
//   firstContainer:{
//     flex:.7,


//   },
//   secondContainer:{
//     flex:1.5,
//     marginTop:50,
//     marginLeft:-280

//   },
//   thirdContainer:{
//     flex:.7,
//       backgroundColor:'#25344c',
//   },
//   input: {
//     margin: 5,
//     height: 40,
//     width:320,
//     padding:10,
//     justifyContent:'center',
//     borderColor: 'grey',
//     borderWidth: 1,
//     borderStyle: 'solid', 
//     overflow: 'hidden', 
//     borderColor: 'grey',
//     backgroundColor:'#1f2c3f',
//     marginVertical: 12,
//     marginTop:25
// },
// loginButton: {
//     margin: 5,
//     height: 35,
//     width:"80%",
//     padding:10,
//     borderColor: 'grey', 
//     marginVertical: 10,
//     marginLeft:35,
//     marginTop:10,
//     borderRadius:18,
//    },

//   LoginButtontxt:{
//     color: 'white',
//     padding: 2,
//     marginLeft:20,
//     marginTop:-5
//    },
//    loginButton1: {
//     margin: 5,
//     height: 35,
//     width:"75%",
//     padding:10,
//     borderColor: 'grey', 
//     marginVertical: 10,
//     marginLeft:35,
//     marginTop:10,
//     borderRadius:18,
//    },

//   LoginButtontxt1:{
//     color: 'white',
//     padding: 2,
//     marginLeft:10,
//     marginTop:-5
//    },

// });