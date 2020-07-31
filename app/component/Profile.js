import React, {Component} from 'react';
import { AppRegistry,Dimensions,Button,
  PixelRatio,
   Text, StatusBar, Picker,View, Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import ZocialIcon from 'react-native-vector-icons/Zocial';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroup from 'react-native-radio-buttons-group';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default class Profile extends Component {
  
  static navigationOptions = {
    title: 'Profile' , 
     headerStyle: {
       backgroundColor: '#69b3f6',
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
  
 state = {
    avatarSource: null,
    videoSource: null,
    data: null,
    empty:null,
    data2:null,  
    id:''
  };

 name = (text) => 
  {
        this.setState({ name: text })
  }
  email = (text) => 
  {
        this.setState({ email: text })
  }

 mobile_no = (text) => 
  {
        this.setState({ mobile_no: text })
  }

 dob = (text) => 
  {
        this.setState({ dob: text })
  }

 age = (text) => 
  {
        this.setState({ age: text })
  }
updateUser = (user) => 
  {
        this.setState({ user: user })
  }
city1 = (city1) => 
  {
        this.setState({ city1: city1 })
  }
Occupation = (Occupation) => 
  {
        this.setState({ Occupation: Occupation })
  }
Language = (Language) => 
  {
        this.setState({ Language: Language })
  }

  selectPhotoTapped() {
      const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
      skipBackup: true,
    },
  };
  
  ImagePicker.showImagePicker(options, (response) => 
  {
      if (response.didCancel) {
      console.log('User cancelled photo picker');
      } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      } else {
      let source = { uri: response.uri };
      
      let data2 = new FormData();
      data2.append("pic", response.fileName);
      data2.append("userID", id1);
      console.log(data2);
      this.setState({
      avatarSource: source,
     });
    }
   });
  }
      
      
  picApi()
      {
      fetch('http://18.204.139.44:3003/updateprofile', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data2,
      })
      .then((response) => response.json())
      .then((response) => response.json())
      .then((responseJson) => {
      
      Alert.alert(JSON.stringify(responseJson));
      
      })
      .catch((error) => {
      console.error(error);
      }); 
      
  }


constructor() {
super();
var nameid = [];

this.state = {

  id:'',
  email:'',
  mobile_no:'',
  password:'',
  age:'',
  dob:'',
  screenName :'',
  referalCode:'', 
  gender:'', 
  city:'', 
  country:'',
  tagline:'',
  user:'',
  city1:'',
  Occupation:'',
  Language:'',
  
  data: [
  {
      label: 'Default value is same as label',
  },
  {
      label: 'Value is different',
      value: "I'm not same as label",
  },
  {
      label: 'Color',
      color: 'green',
  },
  
],
  //Gender
  types : [
    {label: 'Male', value: 'Male' },
    {label: 'Female', value: 'Female' },
    {label: 'Transgender', value: 'Transgender' },
      ],

      //sexual orientation
    types1 : [
    {label: 'Asexual', value: 'Asexual' },
    {label: 'Bisexual', value: 'Bisexual' },
    {label: 'Hetrosexual', value: 'Hetrosexual' },
    {label: 'Gay', value: 'Gay' },
    {label: 'Lesbian', value: 'Lesbian' },
    {label: 'Complicated', value: 'Complicated' },
    {label: 'Dont want to disclose', value: 'Dont want to disclose' },
    ],

      //status
      types2 : [
      {label: 'Single', value: 'Single' },
      {label: 'Engaged', value: 'Engaged' },
      {label: 'Married', value: 'Married' },
      {label: 'In a relationship', value: 'In a relationship' },
      {label: 'Open to Experiment', value: 'Open to Experiment' },
      {label: 'Its Complicated', value: 'Its Complicated' },
      {label: 'Dont want to disclose', value: 'Dont want to disclose' },
      ],
      
      value : null
}
}

email = (text) => 
{ 
this.setState({ email: text })
}
password = (text) => 
{
this.setState({ password: text })
}
age = (text) => 
{
this.setState({ age: text })
}
screenName = (text) => 
{
this.setState({ screenName: text })
}
mobile_no = (text) => 
{
this.setState({ mobile_no: text })
}
referalCode = (text) => 
{
this.setState({ referalCode: text })
}

componentDidMount() {
  this.getDetailsApi();

}


async getDetailsApi()
{

var id1 = await AsyncStorage.getItem('userID');

var idPass={
userID:id1
}

fetch('http://18.204.139.44:3005/usersignupdetail', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(idPass),
}).then((response) => response.json())
.then((responseJson) => {

console.log(responseJson); 

this.setState({

  email:responseJson.Result[0].email,
  mobile_no:responseJson.Result[0].mobile_no,
  password:responseJson.Result[0].password,
  dob:responseJson.Result[0].dob,
  age:responseJson.Result[0].age,
  screenName:responseJson.Result[0].screenName,
  referalCode:responseJson.Result[0].referalCode,
  gender:responseJson.Result[0].gender,
  city:responseJson.Result[0].city,
  country:responseJson.Result[0].country,
  tagline:responseJson.Result[0].tagline,

})
console.log(this.state.city);

console.log(this.state.name);

})
.catch((error) => {
console.error(error);
}); 
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

  saveChanges () {
    this.props.navigation.navigate('Login');
  }
     // update state
     onPress = data => this.setState({ data });   

  render() {

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton
        ? selectedButton.value
        : this.state.data[0].label;

    return (
   <ScrollView>  
   <View style={styles.container}> 
     
     
     <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={['#69b3f6', '#25d0de']} > 
   <View style={{backgroundColor:"#69b3f6",}}>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View style={[styles.avatar]}>
        {this.state.avatarSource === null ? (<Text>Select a Photo</Text>) : (
      <Image style={styles.avatar} source={this.state.avatarSource} />)}
      </View>
    </TouchableOpacity>


    <View style={{flexDirection:"row",
    justifyContent:"center",
   textAlign:"center",
   alignItems:"center",
   marginVertical:10}}>    
     <Text 
     style={{
     color:"white",
   fontSize:20,
   marginBottom:15  }}>{this.state.screenName}</Text> 
  <Icon 
  style={{marginLeft:10,marginBottom:10}} 
  name="edit" 
  size={20}  
  color='white'/>
  </View> 

  <View style={{flexDirection:"row",marginBottom:15}}>
    <Image source={require('./images/2.png')} 
          style={{width: 60, height: 60,margin:10}} /> 

      <Image source={require('./images/cof.png')} 
          style={{width: 60, height: 60,margin:10}} />

      <Image source={require('./images/cr7.png')} 
          style={{width: 60, height: 60,margin:10}} />

      <Image source={require('./images/cof.png')} 
          style={{width: 60, height: 60,margin:10}} /> 

      <Image source={require('./images/2.png')} 
          style={{width: 60, height: 60,margin:10}} />                  

    </View> 
    </View>
    </LinearGradient>
     
    <View>
     <ImageBackground source={require('./images/Splash_bg.png')} style={{width: '100%', height: '100%'}}>
      
         <View>
         <Text style={styles.Emailtxt}> Tag Line </Text>
         <TextInput
          placeholder = "Enter your tagline"
          placeholderTextColor = "white"
          style={styles.tagLine}
          editable={true} />

        <View style={{flexDirection:'row',marginTop:6,justifyContent:'space-between',alignItems:'center',paddingHorizontal:1}}>  
          <Text style={{marginLeft:34,color:'white'}}></Text>
          <Text style={{color:'white',justifyContent:'flex-end',marginRight:'7%',fontWeight:'200'}}> 
            maxlimit 160 characters </Text>
        </View> 
          </View>    

      <View>
          <Text style={styles.Pwdtxt}> Email ID </Text>
          <TextInput
          style={{margin:1,marginBottom:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          placeholderTextColor = "white"
          value={this.state.email}
          onChangeText = {this.email}
           />
          </View>

          <View>
          <View style={{flexDirection:"row",}}>
          <Text style={styles.phnNo}> Phone Number </Text>
          <Text style={{marginTop:10,color:"#69b3f6",marginLeft:"35%"}}> Edit with OTP </Text>
          </View> 
            <TextInput
            style={{margin:1,marginBottom:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
            editable={true}
            placeholderTextColor = "white"
            value={this.state.mobile_no}
            onChangeText = {this.mobile_no}
             />
          </View>

          <View style={styles.dob}>
          <Text style={styles.dobText}>DOB</Text>
        </View>
            <View style={styles.inputDob}>
              <View style={{flex:1, }}>
        
                    <View >
                        <Text style={styles.datePickerText}>{this.state.dob}</Text>
                    </View>     
                 <ZocialIcon style={{marginLeft:'90%',marginTop:-28}}
                     name='cal'
                     size={24}
                     color='white'/>
           
           </View>
         <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} /> 
        </View>           
              
         <View>
          <Text style={styles.Pwdtxt}> Age</Text>
          <TextInput
          style={{margin:1,marginVertical:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          value={this.state.age}
          onChangeText = {this.age}
          keyboardType='numeric'
          placeholderTextColor = "white"
           />
          </View>

          <View style={styles.city}>
          <Text style={styles.cityText}>Country</Text>
          <Picker 
            style={{color:'white',}}
            selectedValue = {this.state.user} 
            onValueChange = {this.updateUser}>
               <Picker.Item label = "Australia" value = "Australia" />
               <Picker.Item label = "Egypt" value = "Egypt" />
               <Picker.Item label = "France" value = "France" />
            </Picker>
          </View>

          <View style={styles.city}>
          <Text style={styles.cityText}>City</Text>
          <Picker 
            style={{color:'white',}}
            selectedValue = {this.state.city1} 
            onValueChange = {this.city1}>
               <Picker.Item label = "California" value = "California" />
               <Picker.Item label = "Delfort" value = "Delfort" />
               <Picker.Item label = "Emen" value = "Emen" />
            </Picker>
          </View>


      <Text style={styles.hobbiesText1}> Gender </Text>
      <RadioForm
        style ={{width:400,margin:10,flexWrap: 'wrap', marginLeft:"12%",}}
        radio_props={this.state.types}
        initial={null}
        formHorizontal={true}
        labelHorizontal={true}
        labelColor={'white'}
        buttonSize = {10}
        buttonStyle ={{
        alignItems:'center',justifyContent:'center',}}
        labelStyle ={{marginBottom:10,paddingRight:30,textAlign:'center',
      }}
        buttonColor={'#2196f3'}
        animation={true}
        onPress={(value) => {this.setState({value:value})}}
        
      />

     <Text style={styles.hobbiesText1}> Sexual Orientation </Text>
      <RadioForm
        style ={{width:400,margin:10,flexWrap: 'wrap', marginLeft:"12%",}}
        radio_props={this.state.types1}
        initial={null}
        formHorizontal={true}
        labelHorizontal={true}
        labelColor={'white'}
        buttonSize = {10}
        buttonStyle ={{
        alignItems:'center',justifyContent:'center'}}
        labelStyle ={{marginBottom:10,paddingRight:30,textAlign:'center',}}
        buttonColor={'#2196f3'}
        animation={true}
        onPress={(value) => {this.setState({value:value})}}
      />

       <Text style={styles.hobbiesText1}> Status </Text>
       <RadioForm
        style ={{width:400,margin:10,flexWrap: 'wrap', marginLeft:"12%",}}
        radio_props={this.state.types2}
        initial={null}
        formHorizontal={true}
        labelHorizontal={true}
         labelColor={'white'}
        buttonSize = {10}
        buttonStyle ={{
          alignItems:'center',justifyContent:'center'}}
        labelStyle ={{marginBottom:10,paddingRight:40,textAlign:'center',}}
        buttonColor={'#2196f3'}
        animation={true}
        onPress={(value) => {this.setState({value:value})}}
      />
  
           
    <View>
       <Text style={styles.hobbiesText}>Hobbies </Text>
      <View style={{
          margin: 5,
          width:320,
          marginLeft:"10%",
          padding:10,
          borderColor: '#4889f2',
          borderWidth: 1,
          borderStyle: 'solid', 
          height:170,
      }}>
        <View style={{flexDirection:"row",}}>
          <Text style={styles.hobiestxt}>Photography </Text>
          <Feather 
            style={{justifyContent:"flex-end",marginLeft:"54%",marginTop:15}} 
            name="check-square" 
            size={20}  
            color='#4889f2'/>
       </View>

       <View style={{flexDirection:"row"}}>
          <Text style={styles.hobiestxt}>Hiking </Text>
          <Feather 
            style={{justifyContent:"flex-end",marginLeft:"65%",marginTop:15}} 
            name="check-square" 
            size={20}  
            color='#4889f2'/>
       </View>

       <View style={{flexDirection:"row"}}>
          <Text style={styles.hobiestxt}>Dancing </Text>
          <Feather 
            style={{justifyContent:"flex-end",marginLeft:"62%",marginTop:15}} 
            name="check-square" 
            size={20}  
            color='#4889f2'/>
       </View>
       </View>
      
    </View>

   <LinearGradient style = {styles.guestbtn} colors={['#050E13', '#050E15']} >
           <TouchableOpacity
            activeOpacity={1.5}
            onPress = {() => this.loginApi()}>
            <Text style = {styles.guestbtntxt}> Add Hobbies </Text>
           </TouchableOpacity>
    </LinearGradient>

     <View style={styles.city}>
      <Text style={styles.cityText}>Occupation</Text>
          <Picker 
            style={{color:'white',}}
            selectedValue = {this.state.Occupation} 
            onValueChange = {this.Occupation}>
               <Picker.Item label = "Business" value = "Business" />
               <Picker.Item label = "Doctor" value = "Doctor" />
               <Picker.Item label = "Farmer" value = "Farmer" />
            </Picker>
       <View style={styles.breedingstate}></View>
      </View>

    <View style={styles.city}>
      <View style={{flexDirection:'row',}}>
      <Text style={{color:'white',justifyContent:'flex-start'}}>Primary Language</Text>
      <Text style={{color:'#0b5bdd',marginLeft:"18%"}}>Add Languages</Text>
      </View> 
         <Picker 
            style={{color:'white',}}
            selectedValue = {this.state.Language} 
            onValueChange = {this.Language}>
               <Picker.Item label = "English" value = "English" />
               <Picker.Item label = "Hindi" value = "Hindi" />
               <Picker.Item label = "Tamil" value = "Tamil" />
               <Picker.Item label = "Telugu" value = "Telugu" />
            </Picker>
       <View style={styles.breedingstate}></View>
      </View>

      
    <TouchableOpacity   style = {styles.regbtn}
            activeOpacity={1.5}
            onPress = {() => this.picApi()}>
            <Text style = {styles.regbtntxt}> Save Changes </Text>
          </TouchableOpacity>
         
    
  </ImageBackground> 
 </View>  
</View>
</ScrollView>  
     
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  } ,
    avatar: {
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').width * 0.2,
      height: Dimensions.get('window').width * 0.2,
      backgroundColor:'white',
      justifyContent: 'center',
      textAlign:'center',    
      marginTop:20,
      marginLeft:'40%',
      alignItems: 'center',
      borderColor:'red'
    },
   Emailtxt: {
      justifyContent:"flex-start",
      marginLeft:"10%",
      fontSize: 12,
      marginTop:15,
      marginVertical:5,
      color: 'white',
  },
  tagLine:{
    height: 60,
    width:"85%",
    marginLeft:"10%",
    borderColor: 'white',
    borderWidth: .2,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    marginVertical: 8,
    color:'white'
  },

   Logintxt: {
      justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
    
  },
  hobiestxt:{
      justifyContent:"flex-start",
      marginLeft:"8%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
  },
  hobbiesText:{
      justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
      marginTop:35
  },
  hobbiesText1:{
    justifyContent:"flex-start",
    marginLeft:"12%",
    fontSize: 14,
    marginVertical: 20,
    color: 'white',
    marginTop:35
},
   guestbtn: {
    margin: 5,
    height: 40,
    width:"65%",
    padding:10,
    marginLeft:"25%",
    borderColor: '#050E15', 
    marginVertical: 10,
    marginLeft:80,
    marginTop:25,
    borderRadius:18,
    backgroundColor:"#4382ef",
    marginVertical:30
   },

  guestbtntxt:{
    color: 'white',
    padding: 2,
    borderColor:"#050E15",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    backgroundColor:"#050E13"

   },

   Pwdtxt: {
       justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
  },
  phnNo:{
    justifyContent:"flex-start",
      marginLeft:"12%",
      fontSize: 12,
      marginVertical: 20,
      color: 'white',
      marginTop:10
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
    marginLeft:"0%",
    fontFamily:'Proximanova',
  },
  inputDob: {
    borderBottomWidth:1, 
    borderColor:'#ccc',
    width:'75%', 
    padding:10, 
    height:50,
    marginBottom:15,
    marginLeft:'12%', 
    color: 'grey',
  },
  dob:{
    marginTop:15,
    padding: 9,
    margin: 8,
    height: hp('7%'),
    width:'75%',
    marginLeft:"6%",
    color:'white'
  },
  dobText:{
    color: 'white',
    padding: 1,
    marginLeft:"5%",
    fontWeight:'500',
    marginTop:5,
    fontFamily:'Proximanova',
  },
  city:{
    marginLeft:"15%",
    marginTop:10,

  },
  cityText:{
    color:'white',
  },
  cityPicker:{
    color:"white",
  },
 loginButton: {
    margin: 5,
    height: 40,
     width:"65%",
     marginLeft:"15%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:-10,
    borderRadius:18,
   },

  LoginButtontxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
   },
    regbtn: {
    margin: 5,
    height: 40,
    width:"75%",
    padding:10,
    backgroundColor:'#3870d1',
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:20,
    borderRadius:18,
   },

  regbtntxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",

   },

});

