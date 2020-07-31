import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,Button,
     View ,Animated, ActivityIndicator,KeyboardAvoidingView,TouchableOpacity,ScrollView,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';


export default class CompanyLogin extends Component {

  static navigationOptions = {
        header: null
    }
    state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

  onLogin()
  {
     const{email,password}=this.state;
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let data ={email:this.state.email,password:this.state.password}


    if(data.email.trim()=="")
      {
        Alert.alert('Please fill Email field');
      }
    else if(reg.test(data.email) === false)
     {
       //alert("Email is Not Correct");
        Alert.alert('Invalid Email field');
       return false;
      }
    else if(data.password.trim()=="")
     {
      Alert.alert('Please fill Password field');
     }

    else
     { 

      fetch("http://18.204.139.44:3003/login", {
         method: 'POST',
         headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify(data)
        }).
        then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == "True")
            {
              Alert.alert('Login Success');
              console.log(responseJson);
              this.props.navigation.navigate("CompanyDashboard");
               }
          else{
             Alert.alert('Incorrect password');
              }            
          })
          .catch((error) => {
           console.error(error);
        });
     }
  }

   forgetPass () {
      this.props.navigation.navigate('ForgotPassword');
     }


   GoogleLogin(){
     this.props.navigation.navigate('GoogleLogin');
   }
   signUp(){
    this.props.navigation.navigate('SignUp');
   }
   CompanySignUp(){
    this.props.navigation.navigate('CompanySignup');
   }
   render() {
      return (
        <ScrollView>
        <KeyboardAvoidingView>
         <View style = {styles.container}>
         <Image source={require('../images/yass-logo.png')} style={{width: 150, height: 80,marginTop: 35,marginBottom: 25}} />
              <StatusBar
                    backgroundColor='black'
                    barStyle="light-content"
                />
            <TextInput style = {styles.input}
               placeholder = "Email or Phone Number"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.handleEmail}
                value = {this.state.handleEmail}/>
            
            <TextInput style = {styles.input}
               
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               secureTextEntry
               onChangeText = {this.handlePassword}
                value = {this.state.handlePassword}/>

            <TouchableOpacity
            activeOpacity={1.0}
               onPress = {() => this.forgetPass()}>
               <Text style = {styles.forgetPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            
         <LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
            activeOpacity={1.1}               
               onPress = {this.onLogin.bind(this)}>
               <Text style = {styles.LoginButtontxt}>LOGIN</Text>
            </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity
               style = {styles.GooleButton}
               onPress = {
                  () => this.GoogleLogin()
               }>
                <Image source={require('../images/google.png')} style={{width: 19, height: 20, resizeMode: 'stretch',marginLeft:55,marginRight:22}} />
                <View style={styles.SeparatorLine} />
               <Text style = {styles.GoogleLoginButtonText}>Login with Google</Text>
            </TouchableOpacity>

             <View style={styles.signUp}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={1.0} onPress={ () => this.signUp() }>
            <Text style={styles.signUpButton}>Sign Up</Text></TouchableOpacity>
            </View> 

         
            <View style={styles.CompanySignUp}>  
            <Text style={styles.CompanySignUpText}>Company/Interest?</Text>
            <TouchableOpacity  activeOpacity={1.0} onPress={ () => this.CompanySignUp() }>
            <Text style={styles.CompanySignUpButton}> Sign up here</Text></TouchableOpacity>
            </View> 

         </View>
         </KeyboardAvoidingView>
      </ScrollView>
      );
   }

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    marginTop:95,
    alignItems:'center',
    marginVertical:10
  },
  
   input: {
    margin: 5,
    height: 40,
    width:270,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'rgba(255,255,255,0.5)',
    height:50,
    marginVertical: 8
  },
  forgetPassword:{
    color: '#57a4ff',
    marginVertical:18
  },
  loginButton: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:270,
    color:'blue'

   },
  LoginButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
  GooleButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    height: 43,
    width: 270,
    margin: 5,

   },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 0,
    height: 40,
  },
  GoogleLoginButtonText:{
    color: 'red',
    marginBottom: 2,
    marginRight: 25,
    marginLeft:0
  },
  signUp:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
  },
  signUpText:{
    color:'grey',
  },
  signUpButton:{
    color:'#57a4ff',
  },
  CompanySignUp:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    flexDirection:'row',
    borderColor: 'grey',
    marginBottom: 1,
    marginTop: 95,

  },
  CompanySignUpText:{
    color:'grey'
  },
  
  CompanySignUpButton:{
    color:'#57a4ff',
  },
})