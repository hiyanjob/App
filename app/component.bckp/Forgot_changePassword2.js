import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar, View, Image, StyleSheet, TextInput, TouchableOpacity,AsyncStorage,Alert,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Forgot_changePassword2 extends Component<Props> {

    static navigationOptions = {
     title: 'Change Password' , 
      headerStyle: {
        backgroundColor: '#fff',
        height:80
    },
  headerTintColor: '#e3e3e5',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginRight:'20%',
      fontFamily:"400",
      fontFamily:'sans',
      color: 'black',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    },
    }

  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }

  constructor(props){
    super(props);
    this.state = {
      radioSelected: 1,
      password:'',
      retypePassword:'',
      id:''
    }
  }

password = (text) => 
{
this.setState({ password: text })
}
retypePassword = (text) =>
{
  this.setState({ retypePassword: text})
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



updatePassword()
{
var data={
email:this.state.email,
password:this.state.password
}

fetch('http://18.204.139.44:3003/changePassword', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

       if(this.state.password == this.state.retypePassword )
       {
        console.log(responseJson); 
        this.props.navigation.navigate('Login');
       }
       else 
       {
        Alert.alert("Your Password is Mismatch...Please Check Correct Password");

       }
})
.catch((error) => {
console.error(error);
}); 
}    

  render() {
    return (
      <ScrollView>
       <View >
         <Image source={require('./images/yass.png')} 
         style={{
          width: 150,
          marginLeft:'30%', 
          height: 80,
          backgroundColor:'white',
          marginTop: 35,}} />

        <Text style={styles.ForgotText}>Change your password</Text>

         <View style={{  paddingLeft:'11%',paddingRight:'18%',flexDirection: 'row',marginTop:37.5,marginVertical:4}}>
            <Image source={require('./images/locked.png')}
            style={{
              width: 20, 
              height: 20,
            }}/> 
            <Text style={{marginLeft:10}}>Password must include 8 characters</Text>               
         </View>
         <View style={{ paddingLeft:'11%',paddingRight:'18%',flexDirection: 'row',marginTop:17.5,marginVertical:0}}>
            
            <Image source={require('./images/locked.png')}
            style={{
              width: 20, 
              height: 20,
            }}/> 
            <Text style={{marginLeft:10}}>Password must include 8 characters</Text>             
         </View>
         <Text style={{marginLeft:75}}>1 special character</Text>    
        
         <TextInput 
             style = 
             {{margin: 5,
              height: 45, 
              width:wp('80%'),
              padding:8,
              justifyContent:'center',
              borderColor: 'grey',
              borderWidth: .2, 
              borderStyle: 'solid',
              overflow: 'hidden',
              backgroundColor:'#FAFAFA',
              borderColor: 'grey',
              height:50,
              marginTop:28,
              marginLeft:46,
              marginVertical: 8}}
               secureTextEntry
               placeholder = "New password *"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.password}
               value={this.state.password}/>
              
         <TextInput 
         style = {{margin: 5,
          height: 45, 
          width:wp('80%'),
          padding:8,
          justifyContent:'center',
          borderColor: 'grey',
          borderWidth: .2, 
          borderStyle: 'solid',
          overflow: 'hidden',
          borderColor: 'grey',
          backgroundColor:'#FAFAFA',
          height:50,
          marginTop:16,
          marginLeft:46,
          marginVertical: 8}}
               secureTextEntry
               placeholder = "Retype New password *"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.retypePassword}
               value={this.state.retypePassword}/>
              
      <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.submitButton} colors={['#69b3f6', '#25d0de']} >
        <TouchableOpacity
            activeOpacity={1.5}
               onPress = {
                  () => this.updatePassword()
               }>
               <Text style = {styles.submitButtontxt}>Submit</Text>
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
    fontSize: 30,
    marginVertical: 22,
    padding:10
  },
  ForgotText: {
    textAlign: 'center', 
    fontSize: 22.5,
    marginTop:20,
    fontWeight: '400',
    fontFamily:'Proximanova',
    color: 'black'
  },
  resetText: {
    textAlign: 'center', 
    fontSize: 19,
     fontWeight: 'bold',
      color: 'black',
  },
 
  submitButton: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 45,
    width:wp('80%'),
    marginTop:20,
    marginLeft:46,
    color:'blue'

   },
  submitButtontxt:{
    color: 'white',
    padding: 2,
    marginLeft:-25
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
    marginLeft:10,
    width: 140,
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },


});
