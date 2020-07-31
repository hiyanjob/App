import React, {Component} from 'react';
import { AppRegistry,KeyboardAvoidingView, Button, CheckBox,Text, StatusBar, View, Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import LinearGradient from 'react-native-linear-gradient';
import RadioGroup from 'react-native-radio-buttons-group';

export default class SignUp extends Component {

 static navigationOptions = {
     header: null
  }
 
 constructor() {
        super();
        this.state = {
             textInputValue: '',
             textInputValue: '',
             PickerValueHolder : '',
             email: '',
             password: '',
             phnNo:'',
             screenName:'',
             refCode:'',            
            
        }
    }

    state = {
    text:"Date of Birth"
  }

    email = (text) => 
   {
      this.setState({ email: text })
   }
   password = (text) => 
   {
      this.setState({ password: text })
   }
   screenName = (text) => 
   {
      this.setState({ screenName: text })
   }
   phnNo = (text) => 
   {
      this.setState({ phnNo: text })
   }
   refCode = (text) => 
   {
      this.setState({ refCode: text })
   }

   

registerApi(){
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let data ={
      email:this.state.email,
      password:this.state.password,
      screenName:this.state.password,
      mobile:this.state.phnNo,
      refCode:this.state.refCode,

     }
      
      if(data.email.trim()==""){
        Alert.alert('Fill the Email');
      }
      
      else if(data.password.trim()==""){
        Alert.alert('Fill the Password');
      }
     else if(reg.test(data.email) === false)
     {
        Alert.alert('Invalid Email field');
        return false;
      }
    else if(data.password.trim()=="")
     {
      Alert.alert('Please fill Password field');
     }
  else
      {
  fetch('http://18.204.139.44:3005/signup', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
},

body: JSON.stringify(data)
})
  .then((response) => response.json())
    .then((responseJson) => {
 
       if(responseJson.message == "successfully Inserted.")
            {

              let responseStore = (JSON.stringify(responseJson.result));
              console.log(responseJson);

              /* Get the value from the api response*/
              AsyncStorage.setItem('_id',responseJson.result[0]._id); 

              this.props.navigation.navigate('Profile');
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
   login () {
    this.props.navigation.navigate('Login');
   }
 

 onDOBPress = () => {
    let dobDate = this.state.dobDate;
    if(!dobDate || dobDate == null){
      dobDate = new Date();
      this.setState({
        dobDate: dobDate
      });
    }
    //To open the dialog
    this.refs.dobDialog.open({
      date: dobDate,//To restirct future date
    });
  }
  /*Call back for dob date picked event   */
  onDOBDatePicked = (date) => {
    this.setState({
      dobDate: date,
      dobText: moment(date).format('DD-MM-YYYY')
    });
  }
  render() {
    return (
     
   <View style={styles.container}> 
     <ImageBackground source={require('./images/Splash_bg.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView>  
        <Image source={require('./images/Aalap-Final-logo.png')} 
          style={{
            width: 150, 
            height: 140,
            justifyContent:'center',
            textAlign:"center",
            marginLeft:"27%",
            marginTop:"5%",
            alignItems:"center",
            marginTop: '5%',marginVertical: 10}} />

         <Text style={styles.txt}> Sign Up to continue</Text>
        
        <KeyboardAvoidingView> 
        <View>
           <Text style={styles.txt}> Email ID </Text>
           <TextInput
            style={{borderBottomWidth:1, 
              borderColor:'#ccc',
              width:'75%', 
              padding:5, 
              height:50,
              marginLeft:50, 
              color: 'grey',
              marginBottom:15}}
             editable={true}
             onChangeText = {this.email}  />  
        </View>  
        </KeyboardAvoidingView>  

        <View>
          <Text style={styles.txt}> Password </Text>

          <TextInput
            style={{borderBottomWidth:1, 
            borderColor:'#ccc',
            width:'75%', 
            marginBottom:15,padding:10, height:50,marginLeft:50, color: 'grey',}}
            editable={true} 
             secureTextEntry
          onChangeText = {this.password}    />
        </View>
            
        <View>    
           <Text style={styles.txt}> Screen Name </Text>
          <TextInput
          style={{borderBottomWidth:1,marginBottom:15, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true} 
          onChangeText = {this.screenName}          />
        </View>     
            
        <View>    
           <Text style={styles.txt}> Phone Number </Text>
          <TextInput
          style={{borderBottomWidth:1,marginBottom:15, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          onChangeText = {this.phnNo}/>
        </View> 

        <View>    
           <Text style={styles.txt}> Enter Referral Code </Text>
          <TextInput
          style={{borderBottomWidth:1,marginBottom:15, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          onChangeText = {this.refCode}
          />
        </View> 

        <View style={styles.dob}>
          <Text style={styles.dobText}>DOB</Text>
        </View>
            <View style={styles.inputDob}>
              <View style={{flex:1, }}>
              <TouchableOpacity  >
                    <View >
                        <Text style={styles.datePickerText}>{}</Text>
                    </View>     
                 <ZocialIcon style={{marginLeft:"89%",marginTop:-28}}
                     name='cal'
                     size={24}
                     color='white'/>
             </TouchableOpacity>
           </View>
         <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} /> 
        </View>                            
      
      <View style={{ flexDirection: 'row',marginTop:15,justifyContent:"center",textAlign:"center",marginBottom:10,borderColor:'#25d0de' }}>
                <CheckBox style={{color:'#25d0de',borderColor:'red',borderStyle:'red'}}
                  checkedColor='red'
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
      <Text style={{marginLeft:"3%",marginTop: 7,fontSize:11.5,color:"white"}}>Accept Terms & Conditions </Text>
    </View>

    <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
      <TouchableOpacity
            activeOpacity={1.5}
               onPress = {() => this.registerApi()}>
               <Text style = {styles.LoginButtontxt}>Register</Text>
       </TouchableOpacity>
    </LinearGradient>
    
    <View style={styles.signUp}>
      <Text style={{color:"grey"}}>Already have an account?</Text>
      <TouchableOpacity activeOpacity={1.0} 
      onPress={ () => this.login() }>
        <Text style={styles.signUpButton}>Login</Text>
      </TouchableOpacity>
    </View> 

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

  txt: { 
      fontSize: 12,
      marginVertical:7,
      color: 'white',
      justifyContent:'flex-start',
      marginLeft:"10%",
    
  },

   Pwdtxt: {
      textAlign: 'center', 
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
      marginLeft: -140
    
  },

   forget:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
    marginLeft: -100
  },

  signUpText:{
    color:'grey',

  },

  forgetbtn:{
    color:'#57a4ff',
  },
 
 loginButton: {
    margin: 5,
    height: 40,
    width:"75%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:10,
    borderRadius:18,
   },

  LoginButtontxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",

   },
    datePickerBox:{
    marginTop:-17,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    height: hp('7%'),
    marginLeft:"10%",
    justifyContent:'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#b9c1ce',
    marginLeft:"10%",
    fontFamily:'Proximanova',
  },
  inputDob: {
    borderBottomWidth:1, 
    borderColor:'#ccc',
    width:'75%', 
    padding:10, 
    height:50,
    marginLeft:'12%', 
    color: 'grey',
  },
  dob:{
    marginTop:5,
    padding: 9,
    margin: 8,
    height: hp('7%'),
     width:'75%',
    color:'white'
  },
  dobText:{
    color: 'white',
    padding: 1,
    marginLeft:"8%",
    fontWeight:'500',
    marginTop:5,
    fontFamily:'Proximanova',
  },
  signUp:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
    marginTop:18
  },
  signUpText:{
    color:'white',
    fontFamily:'Proximanova',
    fontSize:16,
    fontWeight: '300'
  },
  signUpButton:{
    color:'white',
    fontFamily:'Proximanova',
    fontSize:14,
    marginLeft:"7%",
    fontWeight: '400'
  },

  viewallign:{
    flexDirection:'row'
   }
});