import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar,Alert,alert, View, Image, StyleSheet, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class SignupForgotPassword extends Component<Props> {

   _onPressButton() {
    
  }
  constructor(props){
    super(props);
    this.state = {
      radioSelected: 1,
      otp:'',
      id:'',
      email:''

    }
  }

otp = (text) => 
{
this.setState({ otp: text })
}

componentWillMount() {
this.onLoad();
}

onLoad = async () => {
try { 
this.setState({ 

email:await AsyncStorage.getItem('email')

});
}
catch (error) {
Alert.alert('Error', 'There was an error.')
}
}

  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }

  static navigationOptions = {
     title: 'Change Password' , 
      headerStyle: {
        backgroundColor: '#fff',
    },
  headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: '200',
      color: 'black',
      textAlign: 'center',
      marginLeft:15,
      flex: 1,
    },
    }



verifyCodeApi()
{
var data={
otp:this.state.otp,
email:this.state.email,
}

let must={
  otp:this.state.otp,
}

if(must.otp.trim()=="")
 {
   Alert.alert('Enter the OTP');
 }
else{
fetch('http://18.204.139.44:3003/otpVerify', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

console.log(responseJson); 
this.props.navigation.navigate('GeneralInfo');

})
.catch((error) => {
console.error(error);
}); 
}
}

    

  render() {
    return (
       <View style={{flex:1,justifyContent:'center',marginTop:-20,}} >
         <Image source={require('./images/yass.png')} 
         style={{
          width:'50%',
          justifyContent:'center',
          alignItems:'center', 
          height: 80,
          marginLeft:85,
          marginBottom: 15,
          backgroundColor:'white'}} />

      <Text style={styles.ForgotText}> We just sent a code to your</Text>
       <Text style={{textAlign: 'center',fontSize: 19,fontWeight: 'bold',color: 'black'}}> email</Text>
        <Text style={{ textAlign: 'center',fontSize: 12.5,marginTop:20,}}>Please enter the code we sent to your email </Text>
         <Text style={{textAlign: 'center',fontSize: 12.5,marginVertical:12 }}>bxxxxxx@xxx.com </Text>

         <TextInput style = {styles.inputStyle}
               placeholder = "Enter Code"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next" 
               onChangeText = {this.otp}
               value={this.state.otp}/>

      <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.submitButton} colors={['#69b3f6', '#25d0de']} >
        <TouchableOpacity
            activeOpacity={1.5}
               onPress = {() => this.verifyCodeApi()}>
               <Text style = {styles.submitButtontxt}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={{flexDirection:'row',marginTop:6,justifyContent:'space-between',alignItems:'center',paddingHorizontal:1}}>  
          <Text style={{marginLeft:34}}>Didn't receive the code?</Text>
          <TouchableOpacity  activeOpacity={1.0} onPress={ () => this.reSend() }>
          <Text style={{color:'#57a4ff',justifyContent:'flex-end',marginRight:'10%'}}>   Resend by email </Text></TouchableOpacity>
      </View> 
    </View>
    );
  }
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    textAlign: 'center', 
    fontSize: 30,
    marginVertical: 22,
  },
  ForgotText: {
    textAlign: 'center', 
    fontSize: 19,
    marginTop:32,
     fontWeight: 'bold',
      color: 'black'
  },
  resetText: {
    textAlign: 'center', 
    fontSize: 19,
     fontWeight: 'bold',
      color: 'black',
  },
  inputStyle:{
    margin: 20,
    height: 50,
    width: '80%',
    padding:10,
    justifyContent:'center',
    marginLeft:35,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'#FBFDFB',
    marginVertical: 17,
  },
  submitButton: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    justifyContent:'center',
    margin: 8,
    height: 43,
    width:'80%',
    marginTop:15,
    marginLeft:35,
    color:'blue'
   },
  submitButtontxt:{
    color: 'white',
    padding: 2,
   },
  cancelButton:{
    margin: 20,
    marginVertical: 20,
    height: 43,
    width: 140,
   backgroundColor:'rgba(255,255,255,0.5)',
  },
  cancelButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
  submitBut:{
    margin: 20,
    marginVertical: 20,
    height: 43,
    width: 140,
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },


});
