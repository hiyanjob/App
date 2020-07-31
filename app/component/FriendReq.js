import React, {Component} from 'react';
import { AppRegistry, 
	Button, Text, StatusBar, View, Image,
	ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class FriendReq extends Component {

static navigationOptions = {
     header: null
  }

 constructor(props){
    super(props);
    this.state = {
     
      id:'',
      receiverId:'',
     
    }
  }

componentWillMount() {

  this.FriendReq();
   
  }


async FriendReq()
{
 var id1 = await AsyncStorage.getItem('userID');
 var id2 = await AsyncStorage.getItem('receiverId');
var data={
userID:id1,
receiverId:id2,
}

console.log(data);

fetch('http://18.204.139.44:3005/sendFriendReq', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

console.log(responseJson); 
// this.props.navigation.navigate('UpdatePassowrd');


})
.catch((error) => {
console.error(error);
}); 

    }
 



render() {
return (

<View style={styles.container}> 
<ImageBackground source={require('./images/Splash_bg.png')} style={{width: '100%', height: '100%'}}>

<ScrollView>

<Image source={require('./images/Aalap-Final-logo.png')} style={{
	width: 150, 
    height: 140,
	marginLeft:105, 
	marginTop: 120,
	marginBottom: 15}}
	 />

<Text style={styles.Emailtxt}> Enter OTP Number </Text>

<TextInput
style={{
   borderBottomWidth:1, 
   borderColor:'#ccc',
   width:'75%',
    padding:10, 
    height:50,
    marginLeft:50, color: 'grey',}}
   onChangeText = {this.otp}
   value = {this.state.otp}
  editable={true}

/> 

<TouchableOpacity activeOpacity={1.5}
   onPress = {() => this.otpApi()}>
	<LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
	   <Text style = {styles.LoginButtontxt}> Submit </Text>
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

Emailtxt: {
	textAlign: 'center', 
	fontSize: 14,
	marginVertical: 20,
	color: 'white',
	marginTop:50,
	marginLeft:30,
},


loginButton: {
	justifyContent: 'center',
	alignItems: 'stretch',
	margin: 5,
	height: 40,
	width:260,
	padding:10,
	borderColor: 'grey', 
	marginBottom:30,
	marginVertical:30,
	marginLeft:"16%",
	marginTop:90,
	borderRadius:18,
},

LoginButtontxt:{
	color: 'white',
	padding: 3,
	justifyContent:"center",
	textAlign:"center",
	alignItems:"center",

},

});
