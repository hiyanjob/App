import React, { Component } from 'react';
import { AppRegistry, alert, ScrollView, Button, Text, Dimensions, StatusBar, View, ImageBackground, Image, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

const { width, height } = Dimensions.get('window');
export default class SelectOptions extends Component {

  //  static navigationOptions = {
  //    title: 'Change Password' , 
  //     headerStyle: {
  //       backgroundColor: '#fff',
  //       height:80,
  //   },
  // headerTintColor: '#e3e3e5',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     marginRight:'20%',
  //     fontFamily:'sans',
  //     color: 'black',
  //     textAlign: 'center',
  //     justifyContent:'center',
  //     alignItems:'center',
  //     flex: 1,
  //   },
  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    this.state = {
      radioSelected: 1,
      radioButtonValue: ''
    }
  }

  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }

  cancel() {
    this.props.navigation.navigate('Forgot_changePassword');
  }

  submit() {
    let str = this.state.radioButtonValue;

    if (str == 'Send me an email') {
      this.props.navigation.navigate('ChangePassword');
    }
    else if (str == 'Send me an mobile number') {
      this.props.navigation.navigate('ChangePasswordMbl');
    }
    else {
      Alert.alert('Please choose the checkbox above');
    }
  }

  onSelect(index, value) {
    this.setState({
      radioButtonValue: `${value}`
    })
  }


  render() {
    return (
      //    <View style={styles.container}>
      //       <Image source={require('./images/Aalap-Final-logo.png')} style={{width: 150,marginLeft:105,marginRight:105, height: 80,marginTop: 35,marginBottom: 7.5,backgroundColor:'white'}} /> 
      <View style={styles.container}>
        <ImageBackground source={require('./images/Splash_bg1.png')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <Image source={require('./images/Aalap-Final-logo.png')} style={{
              marginLeft: 150,
              width: 120,
              height: 120, marginTop: 70, marginBottom: 15,
            }} />
            <Text style={styles.ForgotText}> Select how you'd like to change</Text>
            <Text style={styles.resetText}> your password </Text>
            <Text style={styles.passwordText}>We'll send a verification code to your </Text>
            <Text style={styles.prefMetho}>preferred method. </Text>

            <View style={{ paddingRight: 10, paddingLeft: 5, flexDirection: 'row', marginLeft: '10%', marginTop: 45, }}>
              <RadioGroup
                onSelect={(index, value) => this.onSelect(index, value)} >
                <RadioButton value={'Send me an email'}>
                  <Text style={{ color: 'white', fontWeight: "300", marginLeft: "4%" }}>Send me an email</Text>
                </RadioButton>

                <RadioButton value={'Send me an mobile number'}>
                  <Text style={{ color: 'white', fontWeight: "300", marginLeft: "3%" }}>Text my phone number</Text>
                </RadioButton>
              </RadioGroup>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'center',marginTop:40 }}>
            <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} style={styles.submitBut} colors={['#69b3f6', '#25d0de']} >
                <TouchableOpacity
                  activeOpacity={1.5}
                  onPress={
                    () => this.submit()
                  }>
                  <Text style={styles.submitButText}>Submit</Text>
                </TouchableOpacity>
              </LinearGradient>
              <View style={styles.cancelButton} >
                <TouchableOpacity
                  activeOpacity={1.5}
                  onPress={
                    () => this.cancel()
                  }>
                  <Text style={styles.cancelButText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* </View> */}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  bigblue: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 22,
  },
  ForgotText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 25,
    fontWeight: "400",
    fontFamily: 'Proximanova',
    color: 'white'
  },
  resetText: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 8,
    fontWeight: "400",
    fontFamily: 'Proximanova',
    color: 'white',
  },
  passwordText: {
    textAlign: 'center',
    fontSize: 13.5,
    fontFamily: 'Proximanova',
    marginTop: 25,
    color: 'white'
  },
  prefMetho: {
    textAlign: 'center',
    fontSize: 13.5,
    marginVertical: 10,
    color: 'white'
  },
  inputStyle: {
    margin: 20,
    height: 50,
    width: 300,
    padding: 10,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginVertical: 14,
  },
  cancelButton: {
    margin: 20,
    marginVertical: 20,
    borderColor: '#25d0de',
    borderStyle: 'solid',
    height: 43,
    borderRadius: 3,
    width: 140,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  cancelButText: {
    color: 'grey',
    textAlign: 'center',
    fontFamily: 'Proximanova',
    marginTop: 10
  },
  submitBut: {
    margin: 20,
    marginVertical: 20,
    height: 43,
    borderRadius: 5,
    marginLeft: 10,
    width: 140,
  },
  submitButText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Proximanova',
    marginTop: 10
  },

});



