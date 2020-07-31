import React, { Component } from 'react';
import {
  AppRegistry, Button, Text,
  StatusBar, View, Image, StyleSheet,
  TextInput, TouchableOpacity, AsyncStorage, ImageBackground,
  Alert, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class UpdatePassowrd extends Component {


  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      radioSelected: 1,
      password: '',
      retypePassword: '',
      id: '',
      isModalVisible: false,

    }
  }
  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });


  email = (text) => {
    this.setState({ email: text })
  }
  password = (text) => {
    this.setState({ password: text })

  }
  retypePassword = (text) => {
    this.setState({ retypePassword: text })
  }

  componentWillMount() {
    this.onLoad();
    this._toggleModal
  }


  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });


  onLoad = async () => {
    try {
      this.setState({
        email: await AsyncStorage.getItem('email')
      });
    }
    catch (error) {
      Alert.alert('Error', 'There was an error.')
    }
  }



  updatePassword() {
    var data = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(data);

    fetch('http://18.204.139.44:3005/changePassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {

        if (this.state.password == this.state.retypePassword) {
          console.log(responseJson);
          this.props.navigation.navigate('Login');
        }
        else {
          Alert.alert("Your Password is Mismatch...Please Check Correct Password");

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/Splash_bg1.png')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <Image source={require('./images/Aalap-Final-logo.png')} style={{
              marginLeft: 125,
              width: 150,
              height: 140, marginTop: 120, marginBottom: 15
            }} />
            <Text style={{
              color: 'black', justifyContent: 'center', textAlign: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: 18,
              marginTop: 15,
              fontWeight: '500'
            }}> Change Password
      </Text>

            <TextInput
              style={{
                borderBottomWidth: 1,
                borderColor: '#ccc', width: '75%', padding: 10,
                height: 50, marginLeft: 50, marginTop: 25, color: 'grey',
              }}
              editable={true}
              placeholder=" New password *"
              placeholderTextColor="#b9c1ce"
              onChangeText={this.password}
              value={this.state.password}
            />
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderColor: '#ccc', width: '75%', marginTop: 25, padding: 10,
                height: 50, marginLeft: 50, color: 'grey',
              }}
              editable={true}
              placeholder="Retype New password *"
              placeholderTextColor="#b9c1ce"
              onChangeText={this.retypePassword}
              value={this.state.retypePassword}
            />

            <TouchableOpacity
              activeOpacity={1.5}
              onPress={() => this.updatePassword()}>
              <LinearGradient style={styles.loginButton} colors={['#69b3f6', '#25d0de']} >
                <Text style={styles.LoginButtontxt}> Submit </Text>
              </LinearGradient>
            </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  forgetTxt: {
    textAlign: 'center',
    fontSize: 17,
    marginVertical: 20,
    color: 'white',
    marginLeft: 30,
    marginTop: 20,
    fontWeight: '600'

  },

  Emailtxt: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    marginTop: 30,
    marginBottom: 10

  },

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: "15%",
    margin: 5,
    height: 40,
    width: 275,
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginTop: 100,
    borderRadius: 18,
  },

  LoginButtontxt: {

    color: 'white',
    padding: 3,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",

  },


});