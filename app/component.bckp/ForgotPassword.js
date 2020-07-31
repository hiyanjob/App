import React, {Component} from 'react';
import { AppRegistry,ScrollView, Button, Text, StatusBar, View, Image, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class ForgotPassword extends Component {

    static navigationOptions = {
        title: 'Forgot Password' , 
   headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
    headerTintColor: '#e3e3e5',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginRight:'20%',
      fontFamily:'sans',
      color: 'black',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    },
    }

 constructor() {
        super();
    this.state = {
             id:'',
             email:''

   }
 }

  email = (text) => 
   {
      this.setState({ email: text })
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
     

forgotPasswordApi()
{
var data={ 
  email:this.state.email,
}

fetch('http://18.204.139.44:3003/forgotPassword', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

   let responseStore = (JSON.stringify(responseJson.result));
   console.log(responseJson);

let responseStore1 = responseJson.result[0].email;
console.log(responseStore1);

   AsyncStorage.setItem('email',responseJson.result[0].email); 
 
this.props.navigation.navigate('Forgot_changePassword');

})
.catch((error) => {
console.error(error);
}); 
}
   
 render() {
    return (
      <ScrollView>
       <View style={styles.container}>
         <Image source={require('./images/yass.png')} style={{justifyContent:'center',textAlign:'center',marginLeft:'32%',width: 150, height: 80,marginTop: 15,marginBottom: 2,backgroundColor:'white'}} />
        
          <Image source={require('./images/locked.png')}style={{justifyContent:'center',width: 90, height: 90,marginLeft:'40%',marginTop:5,marginBottom: 15,padding: 0}}/>

        <Text style={styles.ForgotText}> Forgot Password </Text>
        <Text style={styles.resetText}> Please enter your email address to reset </Text>
        <Text style={styles.passwordText}> your password </Text>
              
        <TextInput
            style={styles.inputStyle}
            placeholderTextColor = "#b9c1ce"
            placeholder="Email address"
            onChangeText = {this.email}
            value = {this.state.email}/>
                
         <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.nextButton} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.forgotPasswordApi()}>
               <Text style = {styles.NextButText}>Next</Text>
            </TouchableOpacity>
            </LinearGradient>
        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    textAlign: 'center', 
    justifyContent:'center',
    fontSize: 30,
    marginVertical: 10,
  },
  ForgotText: {
    textAlign: 'center', 
    fontSize: 22,
    fontWeight: '400',
    marginVertical: 20,
    color: 'black',
    fontFamily:'sans',
  },
  resetText: {
    textAlign: 'center', 
    fontSize: 13.5,
    color: 'grey',
    fontFamily:'Proximanova',
  },
  passwordText: {
    textAlign: 'center', 
    fontSize: 13.5,
    color: 'grey',
    marginBottom:22,
     fontFamily:'Proximanova',
  },
  inputStyle:{
    margin: 20,
    height: hp('6%'),
    width: '80%',
    marginLeft:45,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'#FCFCFC',
    marginVertical: 14,
  },
  nextButton:{
    margin: 20,
    marginVertical: 20,
    height: hp('6%'),
    width: '80%',
    marginLeft:45,
  },
  NextButText:{
    color: 'white',
    justifyContent:'center',
    textAlign:'center',
    alignItems: 'center',
    marginTop:7.5
    },

});
