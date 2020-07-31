import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,Button,CheckBox,Alert,AsyncStorage,
     View ,Animated, ActivityIndicator,KeyboardAvoidingView,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
         <Image source={require('../images/yass.png')} 
            style={{
              width: 160, 
              height: 80,
              backgroundColor:'white',
              marginTop: -80,}} />
              <StatusBar
                    backgroundColor='black'
                    barStyle="light-content"
                />
            <Text style = {{alignItems:'center',fontWeight:'bold',fontSize:18.5,color:'black',marginTop:12}}>Company/Interest Sign up</Text>
            <TextInput style = {styles.input}
               placeholder = "Employee name"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.employeeName}/>
            
            <TextInput style = {styles.input}
               placeholder = "Email id"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               onChangeText = {this.email}/>

               <TextInput style = {styles.input}
               placeholder = "Password"
               secureTextEntry
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               onChangeText = {this.password}/>

              
              <View style={{ flexDirection: 'row',marginLeft:-2,marginBottom:-10,borderColor:'#25d0de' }}>
                <CheckBox style={{color:'#25d0de',borderColor:'red',borderStyle:'red'}}
                  checkedColor='red'
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{marginTop: 7,fontSize:11.5,}}>I verify that I am the official representative of this </Text>
              </View>

                <Text style={{marginTop: 5,fontSize:11.5,marginLeft:22,marginBottom:5}}>company and have the right to act  behalf of the </Text>
                <Text style={{marginTop: 2,fontSize:11.5,marginLeft:-30}}>company in the creation of this page. </Text>
            
         <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} st