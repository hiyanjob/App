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
  ToastAndroid
} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class friends extends Component {

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
              marginTop: -5,
              borderBottomWidth: 2,
              borderBottomColor: 'white',
              marginBottom: -750
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
              marginLeft: 5,
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
      acceptButton: 'Accept',
      rejectButton: 'Reject',
      pendingButton: 'Pending Invitation',
      dataSource01: [],


    }
    this.arrayholder = [];
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
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.userflatApi();
      });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {

    return false;
  }





  componentWillMount() {
    this.onLoad();
    this.userflatApi();
    this.joinflatApi();
    this.getDetailsApi();
    this.friendReqSendApi();
    this.ReqListApi();
  }

  onLoad = async () => {
    try {
      this.setState({
        id: await AsyncStorage.getItem('userID'),
        receiverId: await AsyncStorage.getItem('receiverId'),
      });
    }
    catch (error) {
      Alert.alert('Error', 'There was an error.')
    }
  }


  async friendReqSendApi() {
    debugger;
    var userid = await AsyncStorage.getItem('userID');
    var receiverid = await AsyncStorage.getItem('receiverId');

    var data = {
      userID: userid,
      receiverId: receiverId,
    }

    console.log('frnd', data);

    fetch('http://18.204.139.44:3005/sendFriendReq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        if (responseJson.message == "request send.") {
          //this.props.navigation.navigate('friends');
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }



  async ReqListApi() {
    debugger;
    var userid = await AsyncStorage.getItem('userID');

    var data = {
      userID: userid,
    }

    console.log(data);

    fetch('http://18.204.139.44:3005/getFriendRequestList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        if (responseJson.status == "True") {

          this.setState({
            isLoading: false,
            dataSource01: responseJson.receive,
            dataSource02: responseJson.send,
          }
          );



          //this.props.navigation.navigate('UpdatePassowrd');
        }

        // console.log('resp rec',responseJson.receive);



        // console.log('datasource is',this.state.dataSource01);

        // else if(responseJson.message == "Get frdrequest details"){

        //   this.setState({
        //     isLoading: false,
        //     dataSource01: responseJson.send,  
        //   } 
        //   );



        // //this.props.navigation.navigate('UpdatePassowrd');
        // }

      })
      .catch((error) => {
        console.error(error);
      });
  }













  async getDetailsApi() {
    debugger;
    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }
    console.log(data);
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
      .catch((error) => {
        console.error(error);
      });
  }


  async userflatApi() {
    debugger;
    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }

    console.log(data);

    fetch('http://18.204.139.44:3005/friendslist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.details,
          count: responseJson.details.length,
        }
        );
      })
      .catch((error) => {
        console.error(error);

      });
  }




  async joinflatApi() {

    var id1 = await AsyncStorage.getItem('userID');

    var data = {
      userID: id1
    }
    console.log("this is" + data);

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

        }
        );
      })
      .catch((error) => {
        console.error(error);

      });
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getDetailsApi().then(() => {
      this.setState({ refreshing: false });
    });
  }




  async acceptApi(actionid) {

    var userid = await AsyncStorage.getItem('userID');
    //var receiverId1 = await AsyncStorage.getItem('_id');
    var receiverid = await AsyncStorage.getItem('receiverId');

    var data = {
      userID: userid,
      receiverId: actionid._id,
      "status": "Accept"
    }

    console.log(data);

    fetch('http://18.204.139.44:3005/acceptFrdRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        this.ReqListApi();
        this.userflatApi();

      })
      .catch((error) => {
        console.error(error);
      });
  }


  async actionOnRow(_id) {

    AsyncStorage.setItem('_id', _id);
    // var receiverId1 = await AsyncStorage.setItem('_id');
    // 


    var userid = await AsyncStorage.getItem('userID');
    var receiverId1 = await AsyncStorage.getItem('_id');
    //var receiverid = await AsyncStorage.getItem('receiverId');
    console.log('hi this is rec id', receiverId1);
    var data = {
      userID: userid,
      receiverId: receiverId1,
      "status": "Accept"
    }


    console.log(data);

    fetch('http://18.204.139.44:3005/acceptFrdRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);
        //this.props.navigation.navigate('singleChat');
        if (responseJson.message == "Room created successfully.") {

          // AsyncStorage.setItem('roomID', responseJson.roomID);
          // AsyncStorage.setItem('chatUSersId', responseJson.result[0].chatUSersId);
          // AsyncStorage.setItem('chatUSersId2', responseJson.result[0].chatUSersId2);


          this.props.navigation.navigate('privateMessage');
        }
        else if (responseJson.message == "Already have a room.") {
          //Alert.alert("Already have a room");
        }

      })
      .catch((error) => {




        console.error(error);
      });

  }



  async rejectApi(actionid) {

    var userid = await AsyncStorage.getItem('userID');
    //var receiverId1 = await AsyncStorage.getItem('_id');
    var receiverid = await AsyncStorage.getItem('receiverId');

    var data = {
      userID: userid,
      receiverId: actionid._id,
      "status": "Reject"
      // userID:"5ca36fed717f3150964020cb",
      // receiverId:"5ca1e0ce28eb9d0f8bea63be",
      // "status":"Reject"
    }

    console.log(data);

    fetch('http://18.204.139.44:3005/acceptFrdRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);



      })
      .catch((error) => {
        console.error(error);
      });
  }
  actionOnRow(_id, screenName, status) {
    var data = {
      uid: _id,
      username: screenName,
      status: status,
    }
    this.props.navigation.navigate('privateMessage', { data: data });
  }


  render() {
    return (
      <ImageBackground source={require('./images/Splash_bg.png')}
        style={{
          width: '100%',
          height: '100%'
        }}>


        <View style={{ flexDirection: "row" }}>
          <Text style={{
            color: "white",
            marginLeft: 10,
            marginTop: 10

          }}>Online Users</Text>
          <Text style={{
            color: "white",
            marginLeft: 10,
            marginTop: 10,
            width: 30,
            height: 25,
            textAlign: 'center',
            backgroundColor: "#CC5B88"
          }}>{this.state.count}</Text>
        </View>

        <View style={styles.container}>






          <View style={styles.firstContainer}>
            <FlatList
              data={this.state.dataSource}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>


                <TouchableOpacity onPress={
                  this.actionOnRow.bind(this, item._id, item.screenName, item.online ? item.online : null, item.ConnectionStatus)
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







          <View style={styles.secondContainer}>
            <FlatList
              data={this.state.dataSource01}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) =>

                <TouchableOpacity onPress={this.actionOnRow
                  .bind(this, item._id)}
                >

                  <View style={{ flexDirection: "row", marginTop: -20 }}>



                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'flex-start',
                        marginTop: "-10%",
                        alignItems: "center",
                        marginTop: '10%',
                        marginLeft: "3%",
                        borderRadius: 25,
                        marginBottom: 10
                      }}
                      source={{ uri: 'http://18.204.139.44/AalapApi/uploads/' + item.profilePic }}
                    />

                    <View style={{ marginLeft: 5, marginTop: 7 }} >
                      <Text
                        style={{
                          color: "white",
                          marginTop: "15%",

                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.screenName}</Text>
                      <Text
                        style={{
                          color: "white",
                          marginTop: "3%",
                          marginLeft: "4%",
                          fontSize: 15
                        }}>{item.tagline}</Text>


                      <View style={{ flex: 1, marginLeft: 105, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => this.rejectApi(item)}>
                          <View style={styles.button1}>
                            <Text style={styles.buttonText1}>{this.state.rejectButton}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.acceptApi(item)}>
                          <View style={styles.button}>
                            <Text style={styles.buttonText}>{this.state.acceptButton}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

              }
              keyExtractor={(item, index) => item.index}
            />
          </View>











          <View style={styles.thirdContainer}>

            <Image source={{ uri: 'http://18.204.139.44/AalapApi/uploads/' + this.state.profilePic }}
              style={{
                width: 50,
                height: 45,
                justifyContent: 'center',
                textAlign: 'center',
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
                      textAlign: 'center',
                      marginTop: "10%",
                      alignItems: 'center',
                      marginTop: '18%',
                      borderRadius: 25,
                      marginLeft: "35%",
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
    backgroundColor: '#25344c',
    marginLeft: -10


  },
  secondContainer: {
    flex: 1.5,



  },
  thirdContainer: {
    flex: .5,
    backgroundColor: '#25344c',
    marginTop: -50,
    marginLeft: -150
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
  button: {
    marginBottom: 30,
    marginLeft: 10,
    width: 70,
    height: 30,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  buttonText: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
    color: 'white'
  },
  button1: {
    marginBottom: 30,
    width: 70,
    height: 30,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  buttonText1: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
    color: 'white'
  }

});