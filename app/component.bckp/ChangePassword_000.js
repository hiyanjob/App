import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,
View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import { Input,Button } from 'react-native-elements';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'


export default class ChangePassword extends Component {

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
flex: 1,
},
}

constructor() {
super();
this.state = {
otp:'',
id:''

}
}

componentWillMount() {
this.onLoad();
}

onLoad = async () => {
try { 
this.setState({ 
otp:await AsyncStorage.getItem('otp'),
id:await AsyncStorage.getItem('_id')
});
}
catch (error) {
Alert.alert('Error', 'There was an error.')
}
}


async sampleTest()
{
var data={
_id:this.state.id,
otp:this.state.otp
}

fetch('http://18.204.139.44:3003/otpVerify', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

console.log(responseJson); 
this.props.navigation.navigate('Forgot_changePassword2');


})
.catch((error) => {
console.error(error);
}); 
}



render(){
// const { otpValue, text } = this.state;
return (
<View View style = {styles.container}> 
<Image source={require('./images/yass-logo.png')} style={{width: 150, height: 80,}} />
<StatusBar
backgroundColor='black'
barStyle="light-content"
/> 
<Text style={{ alignItems:'center',fontSize:25,color:'black'}}>We just send a code to your</Text>
<Text style={{ alignItems:'center', fontSize:25,color:'black'}} >Phone</Text>

<View style={{marginTop:15,alignItems:'center',}}> 
<Text >Please enter the code we sent to number</Text>
<Text >ending in 45</Text>
</View> 

<TextInput style = {styles.input}
placeholder = "Enter code"
placeholderTextColor = "grey"
autoCapitalize = "none"
returnKeyType="next"
value={this.state.otp}
// onChangeText={(value) => this.setState(otpValue)}
/>

<LinearGradient style = {styles.submitButton} colors={['#69b3f6', '#25d0de']} >
<TouchableOpacity
activeOpacity={1.5}
onPress = {() => this.sampleTest()}>
<Text style = {styles.submitButtontxt}>Submit</Text>
</TouchableOpacity>
</LinearGradient>

<View style={styles.Code}> 
<Text style={styles.codetext}>Didn't receive the code?</Text>
<TouchableOpacity activeOpacity={1.0} onPress={ () => this.reSend() }>
<Text style={styles.reSend}> Resend by SMS </Text></TouchableOpacity>
</View> 

</View> 

);
}
}

const styles = StyleSheet.create({
container:{

flex:1,
marginTop:1,
alignItems:'center',
marginVertical:14
},
input: {
margin: 5,
height: 40,
width:300,
padding:10,
justifyContent:'center',
borderColor: 'grey',
borderWidth: 1,
borderStyle: 'solid', 
overflow: 'hidden', 
borderColor: 'grey',
backgroundColor:'rgba(255,255,255,0.5)',
marginVertical: 12,
marginTop:25
},
submitButton: {
margin: 5,
height: 40,
width:300,
padding:10,
borderColor: 'grey', 
marginVertical: 10
},
submitButtontxt:{

color: 'white',
padding: 2,
marginLeft:114
},
Code:{

flex:1,
flexDirection:'row',
borderColor: 'grey',
marginBottom: 1,
alignItems:'flex-start',
marginTop: 12,
},
codetext:{

color:'grey',
marginLeft:5
},
reSend:{

flex:1,
color:'#57a4ff',
marginTop: 0,
alignItems:'flex-end',
marginLeft:50

}

})