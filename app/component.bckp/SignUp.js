import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,Alert,Picker,
     View ,TouchableOpacity,ScrollView,TextInput,CheckBox,AsyncStorage,ToastAndroid} from 'react-native'
import {NavigationActions,StackActions} from 'react-navigation'
import ZocialIcon from 'react-native-vector-icons/Zocial';
import ModalPicker from 'react-native-modal-picker'
import { Dropdown } from 'react-native-material-dropdown'
import LinearGradient from 'react-native-linear-gradient'
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import moment from 'moment';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const category = [{
value: 'MySelf',
}, {
value: 'Family&Friends',
}, {
value: 'Others',
}];

export default class SignUp extends Component {
    
   constructor() {
        super();
        this.state = {
             textInputValue: '',
             dobText: 'DD-MM-YYYY',
             age:'',
             dobDate: null,
             radioButtonValue: '',
             textInputValue: '',
             PickerValueHolder : '',
             firstname: '',
             lastname: '',
             email: '',
             mobile:'',
             password: '',
            partnerData: []
        }
    }

   firstname = (text) => 
   {
      this.setState({ firstname: text })
   }
   lastname = (text) => 
   {
      this.setState({ lastname: text })
   }
   email = (text) => 
   {
      this.setState({ email: text })
   }
   password = (text) => 
   {
      this.setState({ password: text })
   }
 
  onSelect(index, value){
      this.setState({
      radioButtonValue: `${value}`
    })
  }

  static navigationOptions = {
     header: null
  }

  state = {
    text:"Date of Birth"
  }

  login(){
   this.props.navigation.navigate('Login');
  }
  CompanySignUp(){
    this.props.navigation.navigate('CompanySignup');
  }

componentWillMount() {
this.getPartnerApi();
}

getPartnerApi(){
fetch('http://18.204.139.44:3003/partnerlooking', {
         method: 'GET'
      })
.then(response => response.json())
        .then(res => {
            console.log(res.result)
            this.setState({
                partnerData: res.result
            })
        })
  
      .catch((error) => {
         console.error(error);
      });
}

signupApi () {

     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let data ={type:"user",firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,
    password:this.state.password,dob:this.state.dobText,gender:this.state.radioButtonValue,partnerfor:this.state.PickerValueHolder}
      
      if(data.firstname.trim()==""){
        Alert.alert('Fill the First Name');
      }
      else if(data.email.trim()=="")
      {
        Alert.alert('Please fill Email field');
      }
      else if(data.lastname.trim()==""){
        Alert.alert('Fill the Last Name');
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
  fetch('http://18.204.139.44:3003/signup', {
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

              let age1 = responseJson.result[0].age;
              console.log(age1);

              this.props.navigation.navigate('ImageUploads');
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

createData() {
  return this.state.partnerData.map( el => ({value: el.name}));
}

render(){
  const partnerData = this.createData();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./images/yass.png')} style={{width: 150, height: 80,backgroundColor:'white'}} />
           <View style={{  flexDirection: 'row',marginTop:2}}>
            <TextInput style = {styles.input1}
               placeholder = "First Name"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.firstname}/>

            <TextInput style = {styles.input2}
               placeholder = "Last Name"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.lastname}/>
         </View>

          <TextInput style = {styles.input}
               placeholder = "Email or Phone Number"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.email}/>
            
          <TextInput style = {styles.input}
               placeholder = "Create Password"
               placeholderTextColor = "#b9c1ce"
               autoCapitalize = "none"
               secureTextEntry
               onChangeText = {this.password}/>

        <View style={styles.dob}>
          <Text style={styles.dobText}>Date of Birth</Text>
        </View>
            <View style={styles.inputDob}>
              <View style={{flex:1, }}>
              <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                    <View >
                        <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                    </View>     
                 <ZocialIcon style={{marginLeft:272,marginTop:-28}}
                     name='cal'
                     size={24}
                     color='black'/>
             </TouchableOpacity>
           </View>
         <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} /> 
        </View>                 
        
        <View style={{ flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center', flexDirection: 'row',marginTop:10,marginLeft:-185}}>
            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <RadioGroup 
                onSelect = {(index, value) => this.onSelect(index, value)} 
                styles={{flexDirection:"row",display: 'inline'}} >
                
                <RadioButton value={'Male'}>
                  <Text style={styles.title}>Male</Text>
                </RadioButton>
                
                <RadioButton value={'Female'}>
                  <Text style={styles.title}>Female</Text>
                </RadioButton>
          
                <RadioButton value={'Transgender'}>
                  <Text style={styles.title}>Transgender</Text>
                </RadioButton>
            
            </RadioGroup>
           </View> 
        </View>

        <View style={styles.container0}>
            <Dropdown
                containerStyle={{width:300,height:50,}}
                placeholder='Partner looking for'
                data={partnerData}
                onChangeText={(PickerValueHolder)=>this.setState({PickerValueHolder})}/>
        </View>

       <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
              activeOpacity={1.5}
              onPress = {() => this.signupApi()}>
            <Text style = {styles.LoginButtontxt}>SIGN UP</Text>
           </TouchableOpacity>
       </LinearGradient>

       <View style={{marginTop:2,fonWeight:100,color:'#8788A1', fontFamily:'Proximanova',}}>  
            <Text >By Signin up,you agree to the Terms of Service and</Text>
            <Text >Privacy Policy,including Cookie Use.Others will be</Text>
            <Text >able to find you by email or phone number provided.</Text>
        </View> 

        <View style={styles.signUp}>
            <Text style={styles.signUpText}>Already have an account?</Text>
             <TouchableOpacity activeOpacity={1.0} onPress={ () => this.login() }>
               <Text style={styles.signUpButton}> Login</Text></TouchableOpacity>
        </View> 

        <View
               style={{
                marginTop:'25%',
                width:'100%',
                marginLeft:0,
                borderBottomColor: '#f4f6f9',
                borderBottomWidth: 1,  
                shadowWidth:1,
                shadowOffset: {width: 0, height:1}, 
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,         }} /> 

        <View style={styles.CompanySignUp}>  
           <Text style={styles.CompanySignUpText}>Company/Interest?</Text>
            <TouchableOpacity  activeOpacity={1.0} onPress={ () => this.CompanySignUp() }>
              <Text style={styles.CompanySignUpButton}> Sign up here</Text></TouchableOpacity>
        </View> 
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    marginTop:15,
    alignItems:'center',
    marginVertical:10,
    backgroundColor:'#FFFFFF'
  },
   marginall : {
    marginLeft: 15,
    marginRight: 15,
   },
   locationtext : {
    fontSize: 12,
  },
locationpicker : {
    width: 335, 
    marginTop:-15, 
  },
  container0: {
    flex: 1,
    marginTop:5,
    marginBottom:26,
    alignItems:'center',
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePickerBox:{
    marginTop:-17,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    height: hp('7%'),
    justifyContent:'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#b9c1ce',
    fontFamily:'Proximanova',
  },
    input: {
    margin: 5,
    height: hp('7%'),
    width:315,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#FCFCFC',
    marginVertical: 10
  },
   input1: {
    margin: 5,
    height: hp('7%'),
    width:150,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#FCFCFC',
    marginVertical: 10
  },
  input2:{
    margin: 5,
    height: hp('7%'),
    width:150,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#FCFCFC',
    marginVertical: 10
  },
  inputDob: {
    marginTop:0,
    height: hp('7%'),
    width:315,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#FCFCFC',
    marginVertical: 10
  },
  dob:{
    marginTop:5,
    marginLeft:-5,
    padding: 9,
    margin: 8,
    height: hp('7%'),
    width:100,
    color:'#b9c1ce'
  },
  dobText:{
    color: 'black',
    padding: 1,
    marginLeft:-105,
    fontWeight:'500',
    marginTop:5,
    fontFamily:'Proximanova',
  },
  maleText:{
   color: 'black',
    padding: 1,
    marginLeft:-13,
    marginTop:14,
    fontFamily:'Proximanova',
  },
  loginButton: {
    margin: 5,
    marginTop:15,
    height: hp('7%'),
    width:315,
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10
   },
  LoginButtontxt:{
    color: 'white',
    padding: 2,
    marginLeft:114,
    fontFamily:'Proximanova',

   },
  signUp:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:35,
  },
  signUpText:{
     color:'grey',
    fontFamily:'Proximanova',
    fontSize:16,
    fontWeight: '300'
  },
  signUpButton:{
    color:'#57a4ff',
    fontSize:16
  },
  CompanySignUp:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    flexDirection:'row',
    borderColor: 'grey',
    marginBottom: 5,
    marginTop: 25,
  },
  CompanySignUpText:{
     color:'grey',
    fontFamily:'Proximanova',
    fontSize:16,
    fontWeight: '300',
    justifyContent:'center',
    alignItems:'center',
  },
  
  CompanySignUpButton:{
    color:'#57a4ff',
    fontSize:16,
  },
   
})