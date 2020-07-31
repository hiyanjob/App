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
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';
import ModalDropdown from './ModalDropdown';
import { Header, Container } from 'native-base';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


let data = [{
  value: 'Mumbai Room',
}, {
  value: 'Delhi Room',
}, {
  value: 'Pune Room',
}];

export default class
  RoomSelection extends Component {


  // static navigationOptions = ({ navigation }) => {
  //   return {

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
      value: false,
      countryNameData: '',
      types: [
        { label: 'Country', value: 'Country' },
        { label: 'City', value: 'City' },
      ],
      flatlistMethod: false,
      dataSource:''

    }
  }

  screenName = (text) => {
    this.setState({ screenName: text })
  }

  componentWillMount() {
    this.countryApi();
    this.userflatApi();
  }
  
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


  loginApi() {

  }

  privateChat() {
    this.props.navigation.navigate('singleChat');
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


  dropdownmethod = (text) => {
    debugger;
    if (this.state.value === "City") {
      this.setState({
        value: true
      })
    }
    else {
      this.setState({
        value: false
      })
    }
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
                      // marginBottom: -700,
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
          {this.state.flatlistMethod === true ?
            <View style={{ height: "12%", width: "35%", marginLeft: '80%', backgroundColor: '#028a9a', flexDirection: 'row', marginTop: 0 }}>

              <RadioForm
                style={{ fontSize: 10, }}
                radio_props={this.state.types}
                initial={null}
                formHorizontal={true}
                labelHorizontal={true}
                buttonSize={8}
                buttonStyle={{ marginTop: 15 }}
                labelStyle={{ marginBottom: 10, marginRight: 8 }}
                buttonColor={'#2196f3'}
                animation={true}
                onPress={(value) => { this.setState({ value: value }) }} />
            </View>
            : null}

          {this.state.value === "City" ?
            <View style={{ height: "20%", width: "16%", marginLeft: '82%', backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 0 }}>
              <FlatList
                style={{ borderRadius: 120 }}
                data={this.state.countryNameData}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({ item }) =>
                  <Text style={{ marginLeft: "1%", marginTop: 10, fontSize: 16 }}>{item.countryName}</Text>
                }
                keyExtractor={(item, index) => index.toString()}
              /></View>
            : null}
          <ScrollView>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => this.loginApi()}>
                <LinearGradient style={styles.loginButton} colors={['#009dae', '#009dae']} >

                  <Text style={styles.LoginButtontxt}> Chat Room </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.privateChat()}>
                <LinearGradient style={styles.loginButton1} colors={['#00070d', '#00070d']} >

                  <Text style={styles.LoginButtontxt1}> Private Chat </Text>
                </LinearGradient>
              </TouchableOpacity>


              <View style={styles.secondContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={require('./images/ceo.png')}
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
                  <View style={{ marginLeft: 15, marginTop: 10 }} >
                    <Text
                      style={{
                        color: "white",
                        marginTop: 20,
                        marginLeft: "4%",
                        fontSize: 12,

                      }}>Clarke</Text>
                    <Text
                      style={{
                        color: "white",
                        marginTop: "5%",
                        marginLeft: "4%",
                        fontSize: 12
                      }}>Hey! How are you?</Text>
                  </View>

                </View>

                <View style={{ width: "92%", height: 1, marginTop: "2%", backgroundColor: '#4065a5' }} />

                <View style={{ flexDirection: "row" }}>
                  <Image source={require('./images/cr7.png')}
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'flex-start',
                      marginTop: "5%",
                      alignItems: "center",
                      marginTop: "5%",
                      marginLeft: "3%",
                      borderRadius: 10,
                      marginBottom: 20
                    }} />
                  <View style={{ marginLeft: 15, marginTop: 7 }} >
                    <Text
                      style={{
                        color: "white",
                        marginTop: 20,
                        marginLeft: "4%",
                        fontSize: 12,
                      }}>Paul</Text>
                    <Text
                      style={{
                        color: "white",
                        marginTop: "5%",
                        marginLeft: "4%",
                        fontSize: 12
                      }}>Hello!!!!</Text>
                  </View>
                </View>

                <View style={{ width: "92%", height: 1, marginTop: "2%", backgroundColor: '#4065a5' }} />

                <View style={{ flexDirection: "row" }}>
                  <Image source={require('./images/cof.png')}
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'flex-start',
                      marginTop: "5%",
                      alignItems: "center",
                      borderRadius: 20,
                      marginTop: "5%",
                      marginLeft: "3%",
                      marginBottom: 10
                    }} />
                  <View style={{ marginLeft: 15, marginTop: 7 }} >
                    <Text
                      style={{
                        color: "white",
                        marginTop: 20,
                        marginLeft: "4%",
                        fontSize: 12,
                      }}>Clarke</Text>
                    <Text
                      style={{
                        color: "white",
                        marginTop: "5%",
                        marginLeft: "4%",
                        fontSize: 12
                      }}>Where are you?</Text>
                  </View>

                </View>

                <View style={{ width: "92%", height: 1, marginTop: "2%", backgroundColor: '#4065a5' }} />

                <View style={{ flexDirection: "row" }}>
                  <Image source={require('./images/ceo.png')}
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: 'flex-start',
                      marginTop: "5%",
                      alignItems: "center",
                      marginTop: "5%",
                      borderRadius: 20,
                      marginLeft: "3%",
                      marginBottom: 10
                    }} />
                  <View style={{ marginLeft: 15, marginTop: 7 }} >
                    <Text
                      style={{
                        color: "white",
                        marginTop: 20,
                        marginLeft: "4%",
                        fontSize: 12,
                      }}>Paul</Text>
                    <Text
                      style={{
                        color: "white",
                        marginTop: "5%",
                        marginLeft: "4%",
                        fontSize: 12
                      }}>Hi Guys!!</Text>
                  </View>
                </View>

                <View style={{ width: "92%", height: 1, marginTop: "2%", backgroundColor: '#4065a5' }} />

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


              </View>






            </View>
          </ScrollView>


        </ImageBackground>

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
    color: 'white',
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
    color: '#9ca0a3',
    padding: 2,
    marginLeft: 20,
    marginTop: -5
  },

});





