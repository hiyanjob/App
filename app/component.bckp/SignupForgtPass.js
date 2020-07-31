import React, {Component} from 'react';
import { AppRegistry,alert, Button, Text, StatusBar, View, Image, StyleSheet,Alert, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class SignupForgtPass extends Component<Props> {


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
  
  constructor(props){
    super(props);
    this.state = {
      radioSelected: 1,
      radioButtonValue:''
    }
  }

  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }
  
   cancel(){
     this.props.navigation.navigate('SignupForgtPass');
   }

   submit(){
    let str=this.state.radioButtonValue;
    
    if(str =='Send me an email'){
       this.props.navigation.navigate('SignupForgotPassword');
    }
    else if(str =='Text my phone number ending in 45'){
      this.props.navigation.navigate('SignupForgotPassword1');
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
      
       <View >
          <Image source={require('./images/yass.png')} 
          style={{
            width: 150,
            marginLeft:105, 
            height: 80,
            marginTop: 35,
            backgroundColor:'white',
            marginBottom: 15}} />
        
        <Text style={styles.ForgotText}> Select how you'd like to change</Text>
        <Text style={styles.resetText}> your password </Text>
        <Text style={styles.passwordText}>We'll send a verification code to your </Text>
         <Text style={styles.prefMetho}>preferred method. </Text>

         <View style={{  flexDirection: 'row',marginTop:25,margin:15,justifyContent:'center'}}>
            <RadioGroup
                onSelect = {(index, value) => this.onSelect(index, value)} >
                <RadioButton value={'Send me an email'}>
                  <Text style={styles.title}>Send me an email</Text>
                </RadioButton>

                <RadioButton value={'Text my phone number ending in 45'}>
                  <Text style={{color:'black'}}>Text my phone number ending in 45</Text>
                </RadioButton>
            </RadioGroup>
        </View>
              

    <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'center'}}>
         <View style = {styles.cancelButton} >
           <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {
                  () => this.cancel()
               }>
               <Text style = {styles.cancelButText}>Cancel</Text>
            </TouchableOpacity>
            </View>
            

            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {
                  () => this.submit()
               }>
               <Text style = {styles.submitButText}>Submit</Text>
            </TouchableOpacity>
            </LinearGradient>
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
    fontSize: 22,
    marginTop:25,
     fontWeight: 'bold',
      color: 'black'
  },
  resetText: {
    textAlign: 'center', 
    fontSize: 22,
    marginBottom:2,
     fontWeight: 'bold',
      color: 'black',
  },
  passwordText: {
    textAlign: 'center', 
    fontSize: 12.5,
    marginTop:18,
  },
  prefMetho:{
    textAlign: 'center', 
    fontSize: 12.5,
    marginVertical:10
  },
  inputStyle:{
    margin: 20,
    height: 50,
    width: 300,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    backgroundColor:'rgba(255,255,255,0.5)',
    marginVertical: 14,
  },
  cancelButton:{
    margin: 20,
    marginVertical: 20,
    borderColor:'#69b3f6',
    borderStyle:'solid',
    height: 43,
    width: 140,
    borderWidth:1,
   backgroundColor:'white',
  },
  cancelButText:{
    color: 'black',
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



