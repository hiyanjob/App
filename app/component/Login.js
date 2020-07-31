import React, { Component } from 'react';
import { AppRegistry, Button, Text, StatusBar, ToastAndroid, View, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert, AsyncStorage, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    email: '',
    password: '',
    nameData: '',
    checked: 'Password',
  }
  email = (text) => {
    this.setState({ email: text })
  }
  password = (text) => {
    this.setState({ password: text })
  }
  register() {
    this.props.navigation.navigate("SignUp");
  }
  onSelect(index, value) {
    this.setState({
      checked: `${value}`
    })
  }
  loginApi() {
    let str = this.state.radioButtonValue;
    const { email, password } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let data =
    {
      email: this.state.email,
      password: this.state.password
    }
    if (data.email.trim() == "") {
      Alert.alert('Please Fill the Field');
    }
    else {
      fetch("http://18.204.139.44:3005/login", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).
        then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == "True") {
            AsyncStorage.setItem('userID', responseJson.response._id);
            AsyncStorage.setItem('screenName', responseJson.response.screenName);
            AsyncStorage.setItem('email', responseJson.response.email);
            AsyncStorage.setItem('mobile_no', responseJson.response.mobile_no);
            AsyncStorage.setItem('password', responseJson.response.password);
            AsyncStorage.setItem('dob', responseJson.response.dob);
            AsyncStorage.setItem('age', responseJson.response.age);
            AsyncStorage.setItem('tagline', responseJson.response.tagline);
            AsyncStorage.setItem('profilePic', responseJson.response.profilePic);
            this.setState({ email: '' })
            this.setState({ password: '' })
            this.props.navigation.navigate("home");
            ToastAndroid.show('Login Success', ToastAndroid.LONG);
          }
          else {
            Alert.alert('Incorrect password');
          }
        })
        .catch(function (error) {
          this.setState({
            isLoading: false,
          })
          reject(new Error(`Unable to retrieve events.\n${error.message}`));
        });
    }
  }
  forPass() {
    this.props.navigation.navigate('ForgotPassword');
  }
  otp1() {
  }
  otp() {
    if (isNaN(this.state.email)) {
      var data = {
        email: this.state.email,
        type: "email",
      }
      fetch('http://18.204.139.44:3005/loginViaOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((responseJson) => {
          let responseStore = (JSON.stringify(responseJson.result));
          console.log(responseJson);
        })
        .catch(function (error) {
          this.setState({
            isLoading: false,
          })
          reject(new Error(`Unable to retrieve events.\n${error.message}`));
        });
    }
    else {
      var data = {
        email: this.state.email,
        type: "mobile",
      }
      fetch('http://18.204.139.44:3005/loginViaOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((responseJson) => {
        })
        .catch(function (error) {
          this.setState({
            isLoading: false,
          })
          reject(new Error(`Unable to retrieve events.\n${error.message}`));
        });
    }
  }
  onSelect(index, value) {
    this.setState({
      radioButtonValue: `${value}`
    })
  }
  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/Mobile_bg.png')} style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <Image source={require('./images/Aalap-Final-logo.png')}
              style={{
                width: 150,
                height: 140,
                justifyContent: 'center',
                textAlign: "center",
                marginLeft: "27%",
                marginTop: "5%",
                alignItems: "center",
                marginTop: '5%',
                marginBottom: 10
              }} />
            <Text style={styles.Emailtxt}> Email ID/Mobile Number </Text>
            <TextInput
              style={{
                marginTop: -30,
                borderBottomWidth: 1,
                borderColor: '#ccc',
                width: '75%',
                padding: 10,
                height: 50,
                marginLeft: 50,
                color: 'grey',
              }}
              editable={true}
              onChangeText={this.email}
              value={this.state.email}
            />
            <View>
              <Text style={styles.Logintxt}> Login using </Text>
              <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: "8%" }}>
                <RadioGroup onSelect={() => this.otp1()}>
                  <RadioButton
                    value={'Password'} >
                    <Text style={{ color: 'white', marginLeft: 8 }}>Password</Text>
                  </RadioButton>
                  <RadioButton
                    onSelect={() => this.otp()}
                    value={'OTP'}>
                    <Text style={{ color: 'white', marginLeft: 8 }}>OTP</Text>
                  </RadioButton>
                </RadioGroup>
              </View>
            </View>
            <Text style={styles.Pwdtxt}> Password/OTP </Text>
            <TextInput
              style={{ marginTop: -30, borderBottomWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, height: 50, marginLeft: 50, color: 'grey', }}
              editable={true}
              secureTextEntry
              value={this.state.password}
              onChangeText={this.password}
            />
            <View style={styles.forget}>
              <TouchableOpacity activeOpacity={1.0} onPress={() => this.forPass()}>
                <Text style={styles.forgetbtn}> Forgot Password? </Text>
                <View
                  style={{
                    marginTop: -1,
                    width: '93%',
                    marginLeft: 2,
                    borderBottomColor: '#46B4C7',
                    borderBottomWidth: .5,
                  }} /></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.loginApi()}>
              <LinearGradient style={styles.loginButton} colors={['#69b3f6', '#25d0de']} >
                <Text style={styles.LoginButtontxt}> Login </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "flex-start", alignItems: "center", marginLeft: "15%", marginTop: 35 }}>
              <View style={{ width: "37%", height: 1, backgroundColor: 'grey' }} />
              <Text style={styles.ortxt}> or </Text>
              <View style={{ width: "37%", height: 1, backgroundColor: 'grey' }} />
            </View>
            <Text style={styles.withtxt}> Login with </Text>
            <View style={{ flex: 1, marginLeft: 60, flexDirection: 'row', flexWrap: 'wrap', }}>
              <Image source={require('./images/googleplus-logo.png')} style={{ width: 30, marginLeft: 110, height: 30, marginTop: 35, marginBottom: 15 }} />
              <Image source={require('./images/facebook.png')} style={{ width: 30, marginLeft: 30, height: 30, marginTop: 35, marginBottom: 15 }} />
            </View>
            <LinearGradient style={styles.regbtn} colors={['#233539', '#223637']} >
              <TouchableOpacity
                activeOpacity={1.5}
                onPress={() => this.register()}>
                <Text style={styles.regbtntxt}> Register </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient style={styles.guestbtn} colors={['#050E13', '#050E15']} >
              <TouchableOpacity
                activeOpacity={1.5}>
                <Text style={styles.guestbtntxt}> Guest </Text>
              </TouchableOpacity>
            </LinearGradient>
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
  Emailtxt: {
    justifyContent: "flex-start",
    marginLeft: "12%",
    fontSize: 12,
    marginVertical: 20,
    color: 'white',
  },
  Logintxt: {
    justifyContent: "flex-start",
    marginLeft: "12%",
    fontSize: 12,
    marginVertical: 20,
    color: 'white',
  },
  Pwdtxt: {
    justifyContent: "flex-start",
    marginLeft: "12%",
    fontSize: 12,
    marginVertical: 20,
    color: 'white',
  },
  forget: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: "15%",
    flexDirection: 'row',
    marginVertical: 35,
  },
  valueText: {
    fontSize: 18,
    marginBottom: 50,
  },
  signUpText: {
    color: 'grey',
  },
  forgetbtn: {
    color: '#46B4C7',
  },
  loginButton: {
    margin: 5,
    height: 40,
    width: "75%",
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 50,
    marginTop: -10,
    borderRadius: 18,
  },
  LoginButtontxt: {
    color: 'white',
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  viewallign: {
    flexDirection: 'row'
  },
  ortxt: {
    color: 'white', marginLeft: "2%",
    marginRight: "2%"
  },
  withtxt: {
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
    marginLeft: 20,
    fontSize: 12,
  },
  regbtn: {
    margin: 5,
    height: 40,
    width: "75%",
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 18,
  },
  regbtntxt: {
    color: 'white',
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  guestbtn: {
    margin: 5,
    height: 40,
    width: "75%",
    padding: 10,
    color: '#3079f2',
    borderWidth: 1,
    borderColor: '#2E8B57',
    marginVertical: 10,
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 18,
  },
  guestbtntxt: {
    color: 'white',
    padding: 2,
    borderColor: "#050E15",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

