import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,Button,CheckBox,Alert,AsyncStorage,
     View ,Animated, ActivityIndicator,KeyboardAvoidingView,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';


export default class CompanySignup extends Component {

  static navigationOptions = {
        header: null
    }

    state = {
             firstname: '',
             email: '',
             password:''
   }
   firstname = (text) => 
   {
      this.setState({ firstname: text })
   }
   email = (text) => 
   {
      this.setState({ email: text })
   }
   password = (text) => 
   {
      this.setState({ password: text })
   }
  
   CompIntrst () {

    const{type,firstname,email,password}=this.state; 
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let data ={type:"company",firstname:this.state.firstname,email:this.state.email,password:this.state.password}
      
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
        fetch('http://18.204.139.44:3003/signup', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

     body:JSON.stringify(data)    
      }).
        then((response) => response.json())
      .then((responseJson) => {

       if(responseJson.message == "successfully Inserted.")
            {
              Alert.alert("Success", "You have succesfully signed up");
              /* Api response */
              let responseStore = (JSON.stringify(responseJson.result));
              console.log(responseJson);

              /* Get the value from the api response*/
              AsyncStorage.setItem('_id',responseJson.result[0]._id); 

              this.props.navigation.navigate("CompanyInterest");

              }
      else{
          Alert.alert("Failure", "Check the details");  
              }            
          })
          .catch((error) => {
           console.error(error);
    });
   }
}
   signUp(){
    this.props.navigation.navigate('CompanyLogin');
   }
   render() {
      return (
        <ScrollView>
        <KeyboardAvoidingView>
         <View style = {styles.container}>
         <Image source={require('../images/yass-logo.png')} style={{width: 160, height: 80,marginTop: -80,}} />
              <StatusBar
                    backgroundColor='black'
                    barStyle="light-content"
                />
            <Text style = {{alignItems:'center',fontSize:'bold',fontSize:19.5,color:'black',marginTop:12}}>Company/Interest Sign up</Text>
            <TextInput style = {styles.input}
               placeholder = "Employee name"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.employeeName}/>
            
            <TextInput style = {styles.input}
               placeholder = "Email id"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.email}/>

               <TextInput style = {styles.input}
               placeholder = "Password"
               secureTextEntry
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.password}/>

              
              <View style={{ flexDirection: 'row',marginLeft:-2,marginBottom:-10,borderColor:'#69b3f6' }}>
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{marginTop: 7,fontSize:11.5,}}>I verify that I am the official representative of this </Text>
              </View>

                <Text style={{marginTop: 5,fontSize:11.5,marginLeft:22,marginBottom:5}}>company and have the right to act  behalf of the </Text>
                <Text style={{marginTop: 2,fontSize:11.5,marginLeft:-30}}>company in the creation of this page. </Text>
            
         <LinearGradient style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
            activeOpacity={1.5}
               onPress = {() => this.CompIntrst()}>
               <Text style = {styles.LoginButtontxt}>Create Company/Interest</Text>
            </TouchableOpacity>
            </LinearGradient>

             <View style={styles.signUp}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={1.0} onPress={ () => this.signUp() }>
            <Text style={styles.signUpButton}>Login</Text></TouchableOpacity>
            </View> 

         </View>
         </KeyboardAvoidingView>
      </ScrollView>
      )
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
    width:285,
    padding:10,
    marginTop:15,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
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
    marginTop:25,
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
    marginTop:18
  },
  signUpText:{
    color:'grey',
  },
  signUpButton:{
    color:'#57a4ff',
  },
 
})