import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar, View, Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

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
   register(){
    this.props.navigation.navigate("SignUp");
   }
 
loginApi () {
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

      fetch("http://18.204.139.44:3005/login", {
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
              this.props.navigation.navigate("Sample");
              ToastAndroid.show('Login Success', ToastAndroid.LONG);
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

submit(){
    let str=this.state.radioButtonValue;
    
    if(str =='Password'){
       this.props.navigation.navigate('ForgotPassword');
    }
    else if(str =='otp'){
      this.props.navigation.navigate('Forgot_changePassword1');
    }
    else{
      Alert.alert('Please choose the checkbox above');
    }
  }

  onSelect(index, value){
      this.setState({
      radioButtonValue: `${value}`
    })
  }
  render() {
    return (
     
   <View style={styles.container}> 
   <ImageBackground source={require('./images/Splash_bg.png')} style={{width: '100%', height: '100%'}}>
  <ScrollView>  

       <Image source={require('./images/Aalap-Final-logo.png')} 
          style={{
            width: 150, 
            height: 140,
            justifyContent:'center',
            textAlign:"center",
            marginLeft:"27%",
            marginTop:"5%",
            alignItems:"center",
            marginTop: '5%',
            marginBottom:10}} />
         
         <Text style={styles.Emailtxt}> Email ID/Mobile Number </Text>

          <TextInput
          style={{
            marginTop:-30,
            borderBottomWidth:1, 
            borderColor:'#ccc',
            width:'75%', 
            padding:10, 
            height:50,
            marginLeft:50, 
            color: 'grey',
            }}
          editable={true}
          onChangeText = {this.handleEmail}
          value = {this.state.handleEmail}
          />      
 
          <View>
          <Text style={styles.Logintxt}> Login using </Text>
           <View style={{  flexDirection: 'row',marginTop:25,marginLeft:"8%"}}>

           
            <RadioGroup
                onSelect = {(index, value) => this.onSelect(index, value)} >
                <RadioButton value={'Password'}>
                  <Text style={{color:'white'}}>Password</Text>
                </RadioButton>

                <RadioButton value={'OTP'}>
                  <Text style={{color:'white'}}>OTP</Text>
                </RadioButton>
            </RadioGroup>
        </View>
        </View>

           <Text style={styles.Pwdtxt}> Password/OTP </Text>

          <TextInput
          style={{marginTop:-30,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          secureTextEntry
          onChangeText = {this.handlePassword}
                value = {this.state.handlePassword}
           />   
            <View style={styles.forget}>

            <TouchableOpacity activeOpacity={1.0} onPress={ () => this.signUp() }>
            <Text style={styles.forgetbtn}> Forgot Password? </Text>
            <View
            style={{
            marginTop:-1,
            width:'93%',
            marginLeft:2,
            borderBottomColor:'#46B4C7',
            borderBottomWidth:.5, }} /></TouchableOpacity>
           </View> 
           <LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
            onPress = {() => this.loginApi()}>
            <Text style = {styles.LoginButtontxt}> Login </Text>
           </TouchableOpacity>
          </LinearGradient>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',justifyContent:"flex-start",alignItems:"center",marginLeft:"15%",marginTop:35}}>
        
        <View style={{width:"37%", height: 1, backgroundColor: 'grey'}} />
        <Text style={styles.ortxt}> or </Text>
        <View style={{width: "37%", height: 1, backgroundColor: 'grey'}} />
        
       </View>

        <Text style={styles.withtxt}> Login with </Text>

        <View style={{flex: 1,marginLeft:"5%", flexDirection: 'row', flexWrap: 'wrap',}}>
          <Image source={require('./images/google-plus.png')} style={{width: 40,marginLeft:110, height: 40,marginTop: 35,marginBottom: 15}} />
          <Image source={require('./images/facebook.png')} style={{width: 40,marginLeft:30, height: 40,marginTop: 35,marginBottom: 15}} />
        </View>
 

         <LinearGradient style = {styles.regbtn} colors={['#233539', '#223637']} >
           <TouchableOpacity
            activeOpacity={1.5}
            onPress = {() => this.register()}>
            <Text style = {styles.regbtntxt}> Register </Text>
           </TouchableOpacity>
          </LinearGradient>

           <LinearGradient style = {styles.guestbtn} colors={['#050E13', '#050E15']} >
           <TouchableOpacity
            activeOpacity={1.5}
            onPress = {() => this.guest()}>
            <Text style = {styles.guestbtntxt}> Guest </Text>
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
      justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
  },

   Logintxt: {
      justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
    
  },

   Pwdtxt: {
       justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
   
  },
  forget:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
  },

    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },

  signUpText:{
    color:'grey',

  },

  forgetbtn:{
    color:'#46B4C7',
  },
 
 loginButton: {
    margin: 5,
    height: 40,
    width:"75%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:-10,
    borderRadius:18,
   },

  LoginButtontxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
   },

  viewallign:{
    flexDirection:'row'
   },
    ortxt:{
    color:'white',marginLeft:"2%",
    marginRight:"2%"
    
  },
  withtxt:{
   color:'white',
   textAlign:'center',
   marginTop:25,
   marginLeft:20,
   fontSize: 12,
  },
  regbtn: {
    margin: 5,
    height: 40,
    width:"75%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:20,
    borderRadius:18,
   },

  regbtntxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",

   },
   guestbtn: {
    margin: 5,
    height: 40,
    width:"75%",
    padding:10,
    color:'#3079f2',
    borderWidth: 1,
    borderColor: '#2E8B57', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:20,
    borderRadius:18,
   },

  guestbtntxt:{
    color: 'white',
    padding: 2,
    borderColor:"#050E15",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",

   },
});

