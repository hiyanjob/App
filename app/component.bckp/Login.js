import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,Button,
     View ,Animated, ActivityIndicator,KeyboardAvoidingView,TouchableOpacity,ScrollView,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Login extends Component {

  static navigationOptions = {
        header: null
    }
    state = {
      email: '',
      password: '',
      nameData:''
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
     let data =
       {
         email:this.state.email,
         password:this.state.password
       }

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
             
              console.log(responseJson);
              this.props.navigation.navigate("Dashboard");
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
         <Image source={require('./images/yass.png')} 
          style={{
          width: 160, 
          height: 90,
          marginTop: 20,
          marginBottom: 10,backgroundColor:'white'}} />
              <StatusBar
                    backgroundColor='black'
                    barStyle="light-content"
                />
            <TextInput style = {styles.input}
               placeholder = "Email or Phone number"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.handleEmail}
                value = {this.state.handleEmail}/>
            
            <TextInput style = {styles.input1}
               
               placeholder = "Enter Password"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               secureTextEntry
               onChangeText = {this.handlePassword}
                value = {this.state.handlePassword}/>

            <TouchableOpacity
            activeOpacity={1.0}
               onPress = {() => this.forgetPass()}>
               <Text style = {styles.forgetPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            
         <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
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
                <Image source={require('./images/google.png')} style={{width: 19, height: 20, resizeMode: 'stretch',marginLeft:63,marginRight:22}} />
                <View style={styles.SeparatorLine} />
               <Text style = {styles.GoogleLoginButtonText}>Login with Google</Text>
            </TouchableOpacity>

             <View style={styles.signUp}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <View>
            <TouchableOpacity activeOpacity={1.0} onPress={ () => this.signUp() }>
            <Text style={styles.signUpButton}>Sign up</Text></TouchableOpacity>
            <View
                style={{
                marginTop:-2.5,
                width:'86%',
                marginLeft:2,
                borderBottomColor:'#57a4ff',
                borderBottomWidth:.5, }}   />
            </View>
            </View> 

             <View
               style={{
                marginTop:'25%',
                width:'100%',
                marginLeft:0,
                borderBottomColor: '#f4f6f9',
                borderBottomWidth: 1,  
                shadowWidth:1,
                shadowOffset: {width: 0, height:1}, 
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,         }} /> 

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
    display:'flex',
    marginTop:95,
    alignItems:'center',
    marginVertical:10,
    backgroundColor:'#FFFFFF'
  },
  
   input: {
    margin: 5,
    height: hp('15%'),
    fontFamily:'Proxima Nova',
    width:wp('80%'),
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2, 
    overflow: 'hidden', 
    backgroundColor:'#FAFAFA',
    height:50,
    marginVertical: 8
  },
   input1: {
    margin: 5,
    height: hp('15%'),
    width:wp('80%'),
    padding:10,
    fontFamily:'Proximanova',
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2, 
    overflow: 'hidden', 
    backgroundColor:'#FAFAFA',
    height:50,
    marginVertical: 7,
    borderRadius:2
  },
  forgetPassword:{
    color: '#57a2ff',
    marginVertical:18,
    fontFamily:'Proxima Nova',
    fontSize:16,
    fontWeight: '300'
  },
  loginButton: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: hp('7%'),
    width:wp('80%'),
    color:'blue',
    marginVertical:10

   },
  LoginButtontxt:{
    color: 'white',
    padding: 5,
    fontSize:15,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'Proxima Nova',
   },
  GooleButton:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#c41107',
    height: hp('7%'),
    width:wp('80%'),
    margin: 5,
    marginTop:10

   },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 0,
    height: 40,
  },
  GoogleLoginButtonText:{
    color: '#c41107',
    justifyContent:'center',
    textAlign:'center',
    marginBottom: 2,
    fontWeight: '300',
    fontSize:15,
    fontFamily:'Proximanova',
  },
  signUp:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
  },
  signUpText:{
    color:'grey',
    fontFamily:'Proximanova',
    fontSize:16,
    fontWeight: '500'
  },
  signUpButton:{
    color:'#0394EA',
    fontFamily:'Proximanova',
    fontSize:16,
    fontWeight:'400',
    marginLeft:'2%',
  },
  CompanySignUp:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    flexDirection:'row',
    borderColor: 'grey',
    marginBottom: 1,
    marginTop:17,

  },
  CompanySignUpText:{
    color:'grey',
    fontFamily:'Proximanova',
    fontWeight: '400',
    fontSize:16,
    
  },
  
  CompanySignUpButton:{
    color:'#0394EA',
    fontSize:16,
  },
})