import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar, View, Image,ImageBackground, 
  StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class RetypePassword extends Component {


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




forgotApi()
{

var data={
  
  email:this.state.email,
  
}

fetch('http://18.204.139.44:3005/forgotPassword', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

   let responseStore = (JSON.stringify(responseJson.result));
   console.log(responseJson);

 
this.props.navigation.navigate('ChangePassword');

})
.catch((error) => {
console.error(error);
}); 


}

 
  render() {
    return (
   <ScrollView>  
   <View style={styles.container}> 
  <ImageBackground source={require('./images/Splash_bg.png')} style={{width: '100%', height: '100%'}}>
   

        <Image source={require('./images/Aalap-Final-logo.png')} style={{
        	marginLeft:105,
        	 width: 150, 
            height: 140,marginTop: 120,marginBottom: 15}} />

          <Text style={styles.forgetTxt}> Forgot Password ? </Text>   

         

          <TextInput
          style={{borderBottomWidth:1,
           borderColor:'#ccc',width:'75%', padding:10, 
           height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          onChangeText = {this.email}
          value = {this.state.email}
          />
           
         <TouchableOpacity
            activeOpacity={1.5}
            onPress = {() => this.forgotApi()}>
           <LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
            <Text style = {styles.LoginButtontxt}> Submit </Text>
            </LinearGradient>  
          </TouchableOpacity>      
       </ImageBackground>
     </View>
    </ScrollView>   
    );
  }
}


const styles = StyleSheet.create({
    container: {
           flex: 1,         
     },
  forgetTxt:{
      textAlign: 'center', 
      fontSize: 17,
      marginVertical: 20,
      color: 'white',
     marginLeft:30,
     marginTop:20,
     fontWeight:'600'

  },

  Emailtxt: {
      textAlign: 'center', 
      fontSize: 14,
      color: 'white',
      marginTop:30,
     marginBottom:10
    
  },

 loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    marginLeft:"15%",
    margin: 5,
    height: 40,
    width:275,
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,

    marginTop:70,
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

