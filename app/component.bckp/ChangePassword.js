import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar, View, Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ChangePassword extends Component {

constructor() {
super();
this.state = {
id:'',
email:''

}
}
static navigationOptions = {
header: null
}
email = (text) => 
{
this.setState({ email: text })
}




signUp()
{


}




render() {
return (

<View style={styles.container}> 
<ImageBackground source={require('./images/Mobile_bg.png')} style={{width: '100%', height: '100%'}}>


<Image source={require('./images/Aalap-Final-logo.png')} style={{
	width: 150,
	marginLeft:105, height: 80,marginTop: 120,marginBottom: 15}} />



<Text style={styles.Emailtxt}> Email ID/Mobile Number </Text>

<TextInput
style={{marginTop:-30,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
editable={true}
///value={this.state.textInputValue}
/> 



<LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
<TouchableOpacity
activeOpacity={1.5}
onPress = {() => this.signUp()}>
<Text style = {styles.LoginButtontxt}> Submit </Text>
</TouchableOpacity>
</LinearGradient>






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
marginTop:100

},





loginButton: {
justifyContent: 'center',
alignItems: 'stretch',
margin: 5,
height: 40,
width:275,
padding:10,
borderColor: 'grey', 
marginVertical: 10,
marginLeft:30,
marginTop:100,
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
