import React, { Component } from 'react';
import { AppRegistry, Button, CheckBox, Text, StatusBar, View, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert, AsyncStorage, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import ZocialIcon from 'react-native-vector-icons/Zocial';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";


export default class Signup extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      textInputValue: '',
      textInputValue: '',
      PickerValueHolder: '',
      screenName: '',
      email: '',
      mobile_no: '',
      password: '',
      dob: '',
      age: '',
      screenName: '',
      phnNo: '',
      refCode: '',
      dobDate: null,
      isModalVisible: false,

    }
  }




  email = (text) => {
    this.setState({ email: text })
  }
  password = (text) => {
    this.setState({ password: text })
  }
  screenName = (text) => {
    this.setState({ screenName: text })
  }
  phnNo = (text) => {
    this.setState({ phnNo: text })
  }
  refCode = (text) => {
    this.setState({ refCode: text })
  }

  state = {
    text: "DOB"
  }


  registerApi() {
    const { value } = this.state;
    const re = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$");
    const isOk = re.test(this.state.password);




    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let data = {
      email: this.state.email,
      password: this.state.password,
      screenName: this.state.screenName ? this.state.screenName : "---",
      mobile: this.state.phnNo,
      referalCode: this.state.refCode,
      dob: this.state.dobText,

    }

    // if(data.email.trim()==""){
    //   Alert.alert('Fill the Email field');
    // }

    if (data.password.trim() == "") {
      Alert.alert('Fill the Password field');
    }
    else if (reg.test(data.email) === false) {
      Alert.alert('Invalid Email field');
      return false;
    }
    else if (data.screenName.trim() == "") {
      Alert.alert('Please fill screen Name');
    }


    if (!isOk) {
      return alert('Password is weak!..password mustbe 8 Character & 1special Character & 1 number ');
    }

    else {
      fetch('http://localhost:3005/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((responseJson) => {

          if (responseJson.message == "successfully Inserted.") {

            let responseStore = (JSON.stringify(responseJson.result));
            console.log(responseJson);



            /* Get the value from the api response*/
            AsyncStorage.setItem('userID', responseJson.userID);
            AsyncStorage.setItem('screenName', responseJson.result[0].screenName);
            AsyncStorage.setItem('email', responseJson.result[0].email);
            AsyncStorage.setItem('mobile_no', responseJson.result[0].mobile_no);
            AsyncStorage.setItem('password', responseJson.result[0].password);
            AsyncStorage.setItem('dob', responseJson.result[0].dob);
            AsyncStorage.setItem('age', responseJson.result[0].age);



            // this.setState({ email: '' })
            // this.setState({ password:''  })
            // this.setState({ screenName: '' })
            // this.setState({ phnNo: '' })
            // this.setState({ refCode: '' })
            // this.setState({ dobText: '' })


            this.props.navigation.navigate('newprofile');
            //this.props.navigation.navigate('Others_profile');
          }
          else {
            Alert.alert("Failure", "Already used this Email or Mobile number");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  onDOBPress = () => {

    let dobDate = this.state.dobDate;
    if (!dobDate || dobDate == null) {
      dobDate = new Date();
      this.setState({
        dobDate: dobDate,
      });
    }
    //To open the dialog
    this.refs.dobDialog.open({
      date: dobDate,
      minDate: new Date("1972"),
      maxDate: new Date("2019") //To restirct future date
      // minDate:new Date("01-01-1972"),
      // maxDate:new Date("12-31-2020"),
    });
  }
  /*Call back for dob date picked event */
  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MM-YYYY'),

    });
  }

  login() {




    this.props.navigation.navigate('Login');
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('./images/Splash_bg.png')}
          style={{ width: '100%', height: '100%' }}>
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
                marginTop: '5%', marginVertical: 10
              }} />

            <Text style={styles.txt}> Sign Up to continue</Text>

            <View>
              <Text style={styles.txt}> Email ID </Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  width: '75%',
                  padding: 5,
                  height: 50,
                  marginLeft: 50,
                  color: 'grey',
                  marginBottom: 15
                }}
                editable={true}
                onChangeText={this.email}
                value={this.state.email} />
            </View>

            <View>
              <Text style={styles.txt}> Password </Text>

              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  width: '75%',
                  marginBottom: 15, padding: 10, height: 50, marginLeft: 50, color: 'grey',
                }}
                editable={true}
                secureTextEntry
                onChangeText={this.password}
                value={this.state.password} />
            </View>

            <View>
              <Text style={styles.txt}> Screen Name </Text>
              <TextInput
                style={{ borderBottomWidth: 1, marginBottom: 15, borderColor: '#ccc', width: '75%', padding: 10, height: 50, marginLeft: 50, color: 'grey', }}
                editable={true}
                onChangeText={this.screenName}
                value={this.state.screenName} />
            </View>

            <View>
              <Text style={styles.txt}> Phone Number </Text>
              <TextInput
                style={{ borderBottomWidth: 1, marginBottom: 15, borderColor: '#ccc', width: '75%', padding: 10, height: 50, marginLeft: 50, color: 'grey', }}
                editable={true}
                onChangeText={this.phnNo}
                value={this.state.phnNo}
                keyboardType='numeric'
                maxLength={10}
              />
            </View>

            <View>
              <Text style={styles.txt}> Enter Referral Code </Text>
              <TextInput
                style={{ borderBottomWidth: 1, marginBottom: 15, borderColor: '#ccc', width: '75%', padding: 10, height: 50, marginLeft: 50, color: 'grey', }}
                editable={true}
                onChangeText={this.refCode}
                value={this.state.refCode}
              />
            </View>

            <View style={styles.dob}>
              <Text style={styles.dobText}>DOB</Text>
            </View>
            <View style={styles.inputDob}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                  <View >
                    <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                  </View>
                  <ZocialIcon style=
                    {{
                      color: 'white',
                      marginLeft: '88%',
                      marginTop: -25
                    }}
                    name='cal'
                    size={24}
                    color='black' />
                </TouchableOpacity>
              </View>
              <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: "center", textAlign: "center", marginBottom: 10, borderColor: '#25d0de' }}>
              <CheckBox style={{ color: '#25d0de', borderColor: 'red', borderStyle: 'red' }}
                checkedColor='red'
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <TouchableOpacity onPress={this._toggleModal}>
                <Text style={{ marginLeft: "3%", marginTop: 7, fontSize: 11.5, color: "white" }}>Accept Terms & Conditions </Text>
              </TouchableOpacity>
            </View>


            <Modal isVisible={this.state.isModalVisible}>
              <View style={{ marginLeft: 20, height: 450, width: 300, borderRadius: 15, backgroundColor: 'white' }}>
                <Text style={{ marginTop: 10, marginLeft: 60, fontWeight: "bold", fontSize: 16 }}> Terms and conditions </Text>
                {/* <TouchableOpacity onPress={this._toggleModal}> */}
                <Text style={{ marginVertical: 20, marginTop: 20, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                <Text style={{ marginVertical: 10, marginTop: 10, marginLeft: 30, marginRight: 20, fontWeight: "bold", fontSize: 14 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>

                <View style={{ flexDirection: "row", justifyContent: "center", textAlign: "center", alignItems: "center", marginVertical: 10, marginTop: 10, justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={this._toggleModal}>
                    <Text style={{ color: "#3A94E4", fontSize: 20, marginBottom: 15, marginRight: 30, marginLeft: 30 }}> Cancel </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this._toggleModal}>
                    <Text style={{ color: "#2E72B9", fontSize: 20, marginBottom: 15, marginLeft: 30, marginRight: 30 }}> Accept </Text>
                  </TouchableOpacity>
                </View>

                {/* </TouchableOpacity> */}
              </View>
            </Modal>










            <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} style={styles.loginButton} colors={['#69b3f6', '#25d0de']} >
              <TouchableOpacity
                activeOpacity={1.5}
                onPress={() => this.registerApi()}>
                <Text style={styles.LoginButtontxt}>Register</Text>
              </TouchableOpacity>
            </LinearGradient>

            <View style={styles.signUp}>
              <Text style={{ color: "grey" }}>Already have an account?</Text>
              <TouchableOpacity activeOpacity={1.0}
                onPress={() => this.login()}>
                <Text style={styles.signUpButton}>Login</Text>
              </TouchableOpacity>
            </View>
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
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 20,
    color: 'white',
    marginTop: 10,
    marginLeft: 30

  },



  forgetbtn: {
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
    marginTop: 60,
    marginLeft: 30
  },

  loginButton: {

    margin: 5,
    height: 40,
    width: 275,
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 30,
    marginTop: 80,
    borderRadius: 18,
  },

  LoginButtontxt: {

    color: 'white',
    padding: 2,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    textAlign: 'center'

  },

  txt: {
    fontSize: 12,
    marginVertical: 14,
    color: 'white',
    justifyContent: 'flex-start',
    marginLeft: "10%",

  },

  Pwdtxt: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 20,
    color: 'white',
    marginLeft: -140

  },

  forget: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 35,
    marginLeft: -100
  },

  signUpText: {
    color: 'grey',

  },

  forgetbtn: {
    color: '#57a4ff',
  },

  loginButton: {
    margin: 5,
    height: 40,
    width: "75%",
    padding: 10,
    borderColor: 'grey',
    marginVertical: 10,
    marginLeft: 50,
    marginTop: 10,
    borderRadius: 18,
  },

  LoginButtontxt: {
    color: 'white',
    padding: 2,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",

  },
  datePickerBox: {
    marginTop: -17,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    height: hp('7%'),
    marginLeft: "10%",
    justifyContent: 'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    marginTop: 10,
    borderWidth: 0,
    color: 'white',
    marginLeft: "8%",
    fontFamily: 'Proximanova',
  },
  inputDob: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '75%',
    height: 50,
    marginLeft: '12%',
    color: 'grey',
  },
  dob: {
    marginTop: 5,
    padding: 9,
    margin: 8,
    height: hp('7%'),
    width: '75%',
    color: 'white'
  },
  dobText: {
    color: 'white',
    padding: 1,
    marginLeft: "8%",
    fontWeight: '500',
    marginTop: 0,
    fontFamily: 'Proximanova',
  },
  signUp: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 35,
    marginTop: 18
  },
  signUpText: {
    color: 'white',
    fontFamily: 'Proximanova',
    fontSize: 16,
    fontWeight: '300'
  },
  signUpButton: {
    color: 'white',
    fontFamily: 'Proximanova',
    fontSize: 14,
    marginLeft: "12%",
    fontWeight: '400'
  },

  viewallign: {
    flexDirection: 'row'
  }

});
