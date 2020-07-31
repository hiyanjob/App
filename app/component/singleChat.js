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

} from 'react-native';
import { CometChat } from '@cometchat-pro/react-native-chat';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Container, Footer, FooterTab } from 'native-base';

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

export default class singleChat extends Component {


  static navigationOptions = {
    header: null
  }



  constructor() {
    super();
    this.state = {

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
      isLoading: true,
      text: '',
      img: [],
      usersimg: [],
      usersimg1: [],
      count: '',
      users: '',
      chatlist: [],
    }
    this.fetchMessages = this.fetchMessages.bind(this);
    this.arrayholder = [];
    CometChat.init(appID).then(() => {
      console.log("Cometchat intialized");
    }, error => {
      console.error(error);
    });
  }


  screenName = (text) => {
    this.setState({ screenName: text })
  }


  componentWillMount() {
    this.messagelistApi();
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

  async messagelistApi() {
    debugger;
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
        var newStateArray1 = this.state.chatlist.slice();
        responseJson && responseJson.map((el, ind) => {
          var messagesRequest = new CometChat.MessagesRequestBuilder().setUID(el._id).setLimit(50).build();
          messagesRequest.fetchPrevious().then(
            mess => {
              console.log("Message list fetched:", mess)
              if (userid === mess[0].receiver) {
                newStateArray1.push({
                  otherid: mess[0].data.entities.sender.entity.uid,
                  name: mess[0].data.entities.sender.entity.name,
                  avatar: mess[0].data.entities.sender.entity.avatar,
                  emsg: mess[mess.length - 1].text
                });
              }
              else {
                newStateArray1.push({
                  otherid: mess[0].data.entities.receiver.entity.uid,
                  name: mess[0].data.entities.receiver.entity.name,
                  avatar: mess[0].data.entities.receiver.entity.avatar,
                  emsg: mess[mess.length - 1].text
                })
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

  centeractionOnRow(otherid, name, status) {
    debugger;
    var data1 = {
      uid: otherid,
      username: name,
      status: status,
    }
    this.props.navigation.navigate('privateMessage', { data: data1 });
  }
  loginApi() {
    this.props.navigation.navigate('RoomSelection');
  }

  privateChat() {
    this.props.navigation.navigate('privateMessage');
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
                      // marginBottom: -750,
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

        <ImageBackground source={require('./images/Splash_bg.png')}
          style={{
            width: '100%',
            height: '100%'
          }}>
          <ScrollView>
            <View style={styles.container}>



              <TouchableOpacity onPress={() => this.loginApi()}>
                <LinearGradient style={styles.loginButton1} colors={['#00070d', '#00070d']} >

                  <Text style={styles.LoginButtontxt}> Chat Room </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.privateChat()}>
                <LinearGradient style={styles.loginButton} colors={['#009dae', '#009dae']} >

                  <Text style={styles.LoginButtontxt1}> Private Chat </Text>
                </LinearGradient>
              </TouchableOpacity>


              <View style={styles.secondContainer}>
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
                          <Image source={{ uri: item.avatar }}
                            style={{
                              width: 50,
                              height: 50,
                              justifyContent: 'flex-start',
                              marginTop: "5%",
                              alignItems: "center",
                              marginTop: "5%",
                              marginLeft: "3%",
                              marginBottom: 10,
                              borderRadius: 20
                            }} />
                        ) : <Image
                            style={{
                              width: 50,
                              height: 50,
                              justifyContent: 'flex-start',
                              marginTop: "5%",
                              alignItems: "center",
                              marginTop: "5%",
                              marginLeft: "3%",
                              marginBottom: 10,
                              borderRadius: 20
                            }}
                            source={require('./images/profileimg.png')}
                          />}
                        <View style={{ marginLeft: 15, marginTop: 10 }} >
                          <Text
                            style={{
                              color: "white",
                              marginTop: 20,
                              marginLeft: "4%",
                              fontSize: 12,

                            }}>{item.name}</Text>
                          <Text
                            style={{
                              color: "white",
                              marginTop: "5%",
                              marginLeft: "4%",
                              fontSize: 12
                            }}>{item.emsg}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  }
                  keyExtractor={(item, index) => item.index}
                />
              </View>
            </View>
          </ScrollView>
          
        </ImageBackground>
        {/* <Footer>
            <FooterTab>
              <TextInput
                style={{
                  marginTop: -10,
                  borderBottomWidth: 1,
                  width: '100%',
                  padding: 10,
                  height: 50,
                  marginLeft: -20,
                  color: "grey",
                  borderWidth: 1,
                  backgroundColor: '#1D3036',
                  borderRadius: 25,
                }}
                placeholder="Type your text here..."
                editable={true}
                onChangeText={this.email}
                value={this.state.email}
              />
            </FooterTab>
          </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  firstContainer: {
    flex: .7,


  },
  secondContainer: {
    flex: 1.5,
    marginTop: 50,
    marginLeft: -280

  },
  thirdContainer: {
    flex: .7,
    backgroundColor: '#25344c',
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
  loginButton: {
    margin: 5,
    height: 35,
    width: "80%",
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 35,
    marginTop: 10,
    borderRadius: 18,
  },

  LoginButtontxt: {
    color: '#9ca0a3',
    padding: 2,
    marginLeft: 20,
    marginTop: -5
  },
  loginButton1: {
    margin: 5,
    height: 35,
    width: "80%",
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 35,
    marginTop: 10,
    borderRadius: 18,
  },

  LoginButtontxt1: {
    color: 'white',
    padding: 2,
    marginLeft: 20,
    marginTop: -5
  },

});