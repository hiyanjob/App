import React, {Component} from 'react';
import { AppRegistry,Dimensions,Button,
  PixelRatio,Platform,
   Text, StatusBar, Picker,View,CheckBox,Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
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
import ToggleSwitch from 'rn-toggle-switch';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from "react-native-modal";


export default class Others_profile extends Component {
  
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
  hobby = (text) => 
{ 
this.setState({ hobby: text })
}
   email = (text) => 
  {
        this.setState({ email: text })
  }

  screenEdit = (text) => 
   {
      this.setState({ screenEdit: text })
   }
 name = (text) => 
  {
        this.setState({ name: text })
  }

 mobile_no = (text) => 
  {
        this.setState({ mobile_no: text })
  }
  tagline = (text) => 
  {
        this.setState({ tagline: text })
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
  PickerValueHolder=(PickerValueHolder)=>
  {
  this.setState({PickerValueHolder})
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
      

      var str3 = response.fileName;

            this.setState({
            avatarSource: source,
            imageResponseData:response,
     
     });
    }
   });
  }
  
 
constructor() {
super();
var nameid = [];

this.state = {
  switch1Value: false,
  id:'',
  screenName : '',
  email: '',
  mobile_no : '',
  password: '',
  dob: '',
  age:'',
  avatarSource:'',
  referalCode:'', 
  gender:'', 
  city:'', 
  country:'',
  tagline:'',
  user:'',
  city1:'',
  Occupation:'',
  Language:'',
  screenEdit:'',
  isModalVisible: false,
  isModalVisible1: false,
  hobby:'',
  PickerValueHolder:'',
  PickerValueHolder1:'',
  PickerValueHolder2:'',
  PickerValueHolder3:'',
  occ: [],
  partnerData1: [],
  lang: [],
  city: [],
  checked1:false,
  checked2:false,
  checked3:false,
  hobby1:'',
  hobby2:'',
  hobby3:'',
  countryNameStr: '',
  country_type:'',
  country_name:'',
 
  
                facilityType : '',
                functionMgmt : '',
                function : [],
                facility : [],


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
componentWillMount() {
    this.onLoad();
    this.langApi();
    this.occuApi();
    this.countryApi();
    this.hobbyApi();
    
  // if(this.state.PickerValueHolder!=''){
  //   this.cityApi();
  // }  
    }
    
    onLoad = async () => {
      debugger;
    try { 
    this.setState({ 
    id:await AsyncStorage.getItem('userID'),
    screenEdit:await AsyncStorage.getItem('screenName'),
    screenEdit:await AsyncStorage.getItem('screenName'),
    email:await AsyncStorage.getItem('email'),
    mobile_no:await AsyncStorage.getItem('mobile_no'),
    password:await AsyncStorage.getItem('password'),
    dob:await AsyncStorage.getItem('dob'),
    age:await AsyncStorage.getItem('age'),
    });
    }
    catch (error) {
    Alert.alert('Error', 'There was an error.')
    }
    }

    langApi(){
     
      var data = {
        "value":"Language"
       }
     
          fetch('http://18.204.139.44:3005/selectedOptionsList', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((responseJson) => {
              this.setState({
                isLoading: false,
                lang: responseJson.country,
                
              }, function() {
                // In this block you can do something with new state.
              });
            })
            .catch((error) => {
              console.error(error);
            });
    }

    newC(){
      Alert.alert("hey");
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    _toggleModal1 = () =>
    this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    occuApi(){
      var data = {
        "value":"Occupation"
       }
     
          fetch('http://18.204.139.44:3005/selectedOptionsList', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((responseJson) => {
              this.setState({
                isLoading: false,
                occ: responseJson.country,
                
              }, function() {
                // In this block you can do something with new state.
              });
            })
            .catch((error) => {
              console.error(error);
            });
    }
  
    countryApi() {
      var data = {
       "value":"Country"
      }

    
         fetch('http://18.204.139.44:3005/selectedOptionsList', {
   method: 'POST',
   headers: {
   'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
   }).then((response) => response.json())
   .then((responseJson) => {
    
             this.setState({
               isLoading: false,
               partnerData1: responseJson.country,
              
               
             }, function() {
               // In this block you can do something with new state.
             
             });
           })
           .catch((error) => {
             console.error(error);
           });
       }
    
   hobbyApi() {
        var data = {
         "value":"Hobbies"
        }
  
      
           fetch('http://18.204.139.44:3005/selectedOptionsList', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
     }).then((response) => response.json())
     .then((responseJson) => {
      
    
               this.setState({
                 isLoading: false,
                 hobby1 : responseJson.country[0].hobbies,
                 hobby2 : responseJson.country[1].hobbies,
                 hobby3 : responseJson.country[2].hobbies,
                 
               }, function() {
                 // In this block you can do something with new state.
               
               });
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

  getCountryName = (id) => 
  {
    var country_name = '';
    for (let i=0 ; i<this.state.partnerData1.length ; i++ )
        {
          // Alert.alert('test',JSON.stringify(this.state.partnerData1));
          if(id==this.state.partnerData1[i]._id)
          {
            country_name += this.state.partnerData1[i].countryName;
            this.setState({country_name:country_name});
          }
          // return 'label:'+countryName[i]+','+'value:'+_id[i];
    
        }
        
    
  }

 cityApi(val)
{
  this.setState({PickerValueHolder:val});
  this.getCountryName(val);

  // Alert.alert('warning',val)
 
var data=
  {
    "value":"City",
    "_id": this.state.PickerValueHolder
  }

console.log('city valueee is',data);

fetch('http://18.204.139.44:3005/selectedOptionsList', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {
  console.log(responseJson);
  
  this.setState({
    isLoading: false,
    city: responseJson.country,
    
  }, function() {
    // In this block you can do something with new state.
  });
})
.catch((error) => {
  console.error(error);
});

    }
 
  saveChanges () {
    this.props.navigation.navigate('home');
  }
 
     // update state
     onPress = data => this.setState({ data });   



     picApi(response)
     {
      console.log('ggfg',this.state.countryNameStr);

     const data2 = new FormData();
       
       data2.append('pic', {
         uri:Platform.OS === 'android' ? response.uri : response.uri.replace('file://', ''), 
         name: response.fileName,
         type :response.type,
       });
       data2.append('userID', this.state.id);
       data2.append('dob',this.state.dob);
       data2.append('tagline',this.state.tagline);
       data2.append('country',this.state.country_name);
       data2.append('city',this.state.PickerValueHolder3);
       data2.append('gender',"Male");
       data2.append('gdrstatus',"Male");
       data2.append('orientation',"Default");
       data2.append('orntStatus',"Female");
       data2.append('mrg',"Default");
       data2.append('mgStatus',"UnMarried");
       data2.append('hobbies',this.state.hobby1);
      //  data2.append('hobbies',this.state.hobby2);
      //  data2.append('hobbies',this.state.hobby3);
       data2.append('occupation',this.state.PickerValueHolder2);
       data2.append('occStatus',"1");
       data2.append('language',this.state.PickerValueHolder1);
   
   
       console.log(data2);
    
   console.log("GetImage Method",response);
   fetch('http://18.204.139.44:3005/updateprofile', {
   method: 'POST',
   body: data2
   }).then((response) => response.json())
   .then((responseJson) => {
    if(responseJson.message=="Your personal details update successfully."){

 this.props.navigation.navigate('Login');
    }    
   console.log("Uploaded image : ",responseJson);
   this.setState({
     avatarSource: null,
     imageResponseData:null,
     
     });
    
   //Alert.alert(JSON.stringify(responseJson));
   
   })
   .catch((error) => {
   console.error(error);
   }); 

   }

   onEnterText1(){
let valuea = "gdhdg";
Alert.alert(valuea);
   }


   createData() {
    return this.state.partnerData1.map( el => ({label:el.countryName,value: el._id}));
     countryNameStr = el.countryName;
    
  }



  // country_type  = this.state.partnerData1.map(el => ({
  //   if(this.state.PickerValueHolder==el._id)
  //   {
  //     AsyncStorage.setItem('countryName',el.countryName);
  //   }
  //   return this.state.partnerData1.map( el => ({label:el.countryName,value: el._id}));
  //   }));


//   createData() {

//     for (let i=0 ; i<this.state.partnerData1.length ; i++ )
//     {
//       var country_name = '';
//       if(this.state.PickerValueHolder==_id[i])
//       {
//         country_name += countryName[i];
//       }
//       return 'label:'+countryName[i]+','+'value:'+_id[i];

//     }
    
//     Alert.alert('test',country_name);
  
  
//  }

createData1() {

  return this.state.lang.map( (el,ite ) => 
   
    
    ({label:el.language,value: el.language})
    
    );
}


  createData1() {
    return this.state.lang.map( el => ({label:el.language,value: el.language}));
  }

  createData2() {
    return this.state.occ.map( el => ({label:el.occupation,value: el.occupation}));
  }

  createData3() {
    return this.state.city.map( el => ({label:el.cityName,value: el.cityName}));
  }


  onEnterText(city){
    this.setState({ PickerValueHolder:city });
    Alert.alert(this.state.PickerValueHolder)
    console.warn(this.state.PickerValueHolder);
      this.cityApi();
  }


  render() {

  // let country_type  = this.state.partnerData1.map(el => ({
  //   if(this.state.PickerValueHolder==el._id)
  //   {
  //     AsyncStorage.setItem('countryName',el.countryName);
  //   }
  //   return this.state.partnerData1.map( el => ({label:el.countryName,value: el._id}));
  //   }));
 
    const partnerData1 = this.createData();
    const lang = this.createData1();
    const occ = this.createData2();
    const city = this.createData3();

    // let selectedButton = this.state.data.find(e => e.selected == true);
    // selectedButton = selectedButton
    //     ? selectedButton.value
    //     : this.state.data[0].label;

    // let country_type = this.state.partnerData1.map( (vl, ite) => {
    //   if(this.state.PickerValueHolder==vl._id)
    //   {
    //     AsyncStorage.setItem('countryName',vl.countryName);
    //   }
    //   return this.state.partnerData1.map( el => ({label:vl.countryName,value: el._id}));
    //   //return <Picker.Item key={ite} value={vl._id} label={vl.facilityType} />
    // });

    return (
   <ScrollView>  
   <View style={styles.container}> 
     
     
     <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={['#69b3f6', '#25d0de']} > 
   <View style={{backgroundColor:"#69b3f6",}}>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View  >
        {this.state.avatarSource === null ? (<Text>Select a Photo</Text>) : (
      <Image style={styles.avatar} source={this.state.avatarSource} />)}
      </View>
    </TouchableOpacity>


    <View style={{flexDirection:"row",
    justifyContent:"center",
 	 textAlign:"center",
 	 alignItems:"center",
 	 marginVertical:10}}>    
    


<TextInput style = {styles.input}
        placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value={this.state.screenEdit}
         onChangeText = {this.screenEdit}/>



  <TouchableOpacity  >
 	<Icon 
 	style={{marginLeft:'2%',marginBottom:10}} 
 	name="edit" 
 	size={20}  
 	color='white'/>
</TouchableOpacity>  

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

           <Image source={require('./images/2.png')} 
          style={{width: 60, height: 60,margin:10}} /> 

      <Image source={require('./images/cof.png')} 
          style={{width: 60, height: 60,margin:10}} />

      <Image source={require('./images/cr7.png')} 
          style={{width: 60, height: 60,margin:10}} />             

    </View> 
    </View>
    </LinearGradient>
     
    <View>
     <ImageBackground source={require('./images/Splash_bg1.png')} style={{width: '100%', height: '100%'}}>
      
         <View>
         <Text style={styles.Emailtxt}> Tag Line </Text>
         <TextInput
          placeholder = "Enter your tagline"
          placeholderTextColor = "white"
          style={styles.tagLine}
          editable={true} 
          maxLength ={180}
          value={this.state.tagline}
          onChangeText = {this.tagline}/>

        <View style={{flexDirection:'row',marginTop:6,justifyContent:'space-between',alignItems:'center',paddingHorizontal:1}}>  
          <Text style={{marginLeft:34,color:'black'}}></Text>
          <Text style={{color:'white',justifyContent:'flex-end',marginRight:'7%',fontWeight:'200'}}> 
            max limit 160 characters </Text>
        </View> 
          </View>    

      <View>
          <Text style={styles.Pwdtxt}> Email ID </Text>
          <TextInput
          style={{margin:1,marginBottom:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={false}
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
	          editable={false}
             keyboardType='numeric'
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
                 {/* <ZocialIcon style={{marginLeft:'90%',marginTop:-28}}
                     name='cal'
                     size={24}
                     color='white'/> */}
                       <Image style={{ marginLeft:'90%',marginTop:-28, width: 30, height: 30,}}
          source={require('./images/calendar.png')}
        />
           
           </View>
         <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} /> 
        </View>           
              
         <View>
         
         <View style={{flexDirection:"row",width:'80%',marginLeft:'10%',justifyContent:'space-between'}}>
          <Text style={styles.age}> Age </Text>   
          <ToggleSwitch  
        text={{on: 'Share', off: 'Share', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        height={10}
        width={40}
        radius={10}
        marginTop={10}
        marginVertical={20}
        onValueChange={(val) => {
          /* your handler function... */
        }}
      /> 
          
          
          </View> 




          <TextInput
          style={{margin:1,marginVertical:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
           keyboardType='numeric'
          value={this.state.age}
          onChangeText = {this.age}
          placeholderTextColor = "white"
           />
          </View>

          <View style={styles.city}>
          <Text style={styles.cityText}>Country</Text>
          
   <Dropdown 
                containerStyle={styles.dropdown}
                borderColor= 'white'
                underlineColorAndroid="transparent"
                placeholder='select country'
                dropdownPosition={0}
                textAlign= 'center'
                placeholderTextColor="white"
                data={partnerData1}
                onChangeText={(PickerValueHolder)=>this.cityApi(PickerValueHolder)}
              
                />
          </View>
 



          <View style={styles.city}>
          <Text style={styles.cityText}>City</Text>
          <Dropdown  



                containerStyle={styles.dropdown}
               
                underlineColorAndroid = 'transparent'
                placeholder='select city'
                dropdownPosition={0}
                textAlign= 'center'
                placeholderTextColor="white"
                data={city}
                //onChangeText={city => this.onEnterText(city)}
             
                  
                
                onChangeText={(PickerValueHolder3)=>this.setState({PickerValueHolder3})}
               />
          
          </View>
 

{/* <View style={styles.city}>
          <Text style={styles.cityText}>City</Text>
          <Picker 
            style={{color:'white',}}
            selectedValue = {this.state.city1} 
            onValueChange = {this.city1}>
               <Picker.Item label = "California" value = "California" />
               <Picker.Item label = "Delfort" value = "Delfort" />
               <Picker.Item label = "Emen" value = "Emen" />
            </Picker>
          </View> */}



          

          

          <View style={{flexDirection:"row",width:'80%',marginLeft:'10%',justifyContent:'space-between'}}>
          <Text style={styles.hobbiesText1}> Gender </Text>  
          <ToggleSwitch  
        text={{on: 'Share', off: 'Not Share', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        height={10}
        width={40}
        radius={10}
        marginTop={10}
        marginVertical={20}
        onValueChange={(val) => {
          /* your handler function... */
        }}
      />    
       </View> 

      
      <RadioForm
        style ={{width:400,margin:10,flexWrap: 'wrap', marginLeft:"12%",fontSize:5}}
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


<View style={{flexDirection:"row",width:'80%',marginLeft:'10%',justifyContent:'space-between'}}>
<Text style={styles.hobbiesText1}> Sexual Orientation </Text>
          <ToggleSwitch  
        text={{on: 'Share', off: 'Not Share', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        height={10}
        width={40}
        radius={10}
        marginTop={10}
        marginVertical={20}
        onValueChange={(val) => {
          /* your handler function... */
        }}
      />    
       </View> 

    
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


<View style={{flexDirection:"row",width:'80%',marginLeft:'10%',justifyContent:'space-between'}}>
<Text style={styles.hobbiesText1}> Status </Text>
          <ToggleSwitch  
        text={{on: 'Share', off: 'Not Share', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        height={10}
        width={40}
        radius={10}
        marginTop={10}
        marginVertical={20}
        onValueChange={(val) => {
          /* your handler function... */
        }}
      />    
       </View> 
     
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
          <Text style={styles.hobiestxt}>{this.state.hobby1} </Text>
          <CheckBox style={{justifyContent:"flex-end",marginLeft:"62%",marginTop:15,color:'#4889f2'}}
                  checkedColor='green'
                  value={this.state.checked1}
                  onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                />
       
       </View>

       <View style={{flexDirection:"row"}}>
          <Text style={styles.hobiestxt}>{this.state.hobby2} </Text>
          <CheckBox style={{justifyContent:"flex-end",marginLeft:"65%",marginTop:15}}
                  checkedColor='#4889f2'
                  value={this.state.checked2}
                  onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                />
        
       </View>

       <View style={{flexDirection:"row"}}>
          <Text style={styles.hobiestxt}> {this.state.hobby3} </Text>
          <CheckBox style={{justifyContent:"flex-end",marginLeft:"53%",marginTop:15}}
                  checkedColor='#4889f2'
                  value={this.state.checked3}
                  onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                />
         
       </View>
       </View>
      
    </View>

   <LinearGradient style = {styles.guestbtn} colors={['#050E13', '#050E15']} >
           <TouchableOpacity
            activeOpacity={1.5}
            onPress={this._toggleModal}>
            <Text style = {styles.guestbtntxt}> Add Hobbies </Text>
           </TouchableOpacity>
    </LinearGradient>




    <Modal isVisible={this.state.isModalVisible}>
          <View style={{ marginLeft:20,height:200,width:300,borderRadius:15,backgroundColor:'white' }}>
            <Text style={{ marginTop:10,marginLeft:85, fontWeight:"bold",fontSize:18}}> Add Hobbies  </Text>
            {/* <TouchableOpacity onPress={this._toggleModal}> */}
            <TextInput
              style={{borderBottomWidth:1, 
              borderColor:'#ccc',
              width:'75%', 
              padding:5, 
              height:50,
              marginLeft:50, 
              color: 'grey',
              marginTop:50,
              marginBottom:15}}
              editable={true}
              onChangeText = {this.hobby}
              value = {this.state.hobby} />  
              <View style={{flexDirection:"row",justifyContent:"center", textAlign:"center", alignItems:"center", marginVertical:10,marginTop:10,justifyContent:'space-between'}}>    
              <TouchableOpacity onPress={this._toggleModal}>
              <Text style={{ color:"#3A94E4",fontSize:20,marginBottom:15,marginRight:30,marginLeft:30 }}> Cancel </Text> 
              </TouchableOpacity>

             <TouchableOpacity onPress={this._toggleModal}>
              <Text style={{ color:"#2E72B9", fontSize:20,marginBottom:15,marginLeft:30 ,marginRight:30 }}> Save </Text> 
              </TouchableOpacity>
              </View> 
                
                {/* </TouchableOpacity> */}
          </View>
        </Modal>





     <View style={styles.city}>
     


     <View style={{flexDirection:"row",width:'80%',marginLeft:'10%',justifyContent:'space-between'}}>
     <Text style={styles.cityText}>Occupation</Text>  
          <ToggleSwitch  
        text={{on: 'Share', off: 'Not Share', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        height={10}
        width={40}
        radius={10}
        marginTop={10}
        marginVertical={20}
        onValueChange={(val) => {
          /* your handler function... */
        }}
      /> 
          
          
          </View> 

      
          <Dropdown 
                containerStyle={styles.dropdown}
                underlineColorAndroid = 'transparent'
                placeholder='select occupation'
                dropdownPosition={0}
                textAlign= 'center'
                placeholderTextColor="white"
                data={occ}
                onChangeText={(PickerValueHolder2)=>this.setState({PickerValueHolder2})}/>


       <View style={styles.breedingstate}></View>
      </View>

    <View style={styles.city}>
      <View style={{flexDirection:'row',}}>
      <Text style={{color:'white',justifyContent:'flex-start'}}>Primary Language</Text>
      <TouchableOpacity
            activeOpacity={1.5}
            onPress={this._toggleModal1}>
            <Text style={{color:'#0b5bdd',marginLeft:"18%"}}> Add Languages </Text>
           </TouchableOpacity>
     
      </View> 
      <Dropdown 
                containerStyle={styles.dropdown}
                underlineColorAndroid = 'transparent'
                placeholder='select language'
                dropdownPosition={0}
                textAlign= 'center'
                placeholderTextColor="white"
                data={lang}
                onChangeText={(PickerValueHolder1)=>this.setState({PickerValueHolder1})}/>
       <View style={styles.breedingstate}></View>
      </View>

      <Modal isVisible={this.state.isModalVisible1}>
          <View style={{ marginLeft:20,height:200,width:300,borderRadius:15,backgroundColor:'white' }}>
            <Text style={{ marginTop:10,marginLeft:85, fontWeight:"bold",fontSize:18}}>Add Languages</Text>
            {/* <TouchableOpacity onPress={this._toggleModal}> */}
            <TextInput
              style={{borderBottomWidth:1, 
              borderColor:'#ccc',
              width:'75%', 
              padding:5, 
              height:50,
              marginLeft:50, 
              color: 'grey',
              marginTop:50,
              marginBottom:15}}
              editable={true}
              onChangeText = {this.hobby}
              value = {this.state.hobby} />  
              <View style={{flexDirection:"row",justifyContent:"center", textAlign:"center", alignItems:"center", marginVertical:10,marginTop:10,justifyContent:'space-between'}}>    
              <TouchableOpacity onPress={this._toggleModal1}>
              <Text style={{ color:"#3A94E4",fontSize:20,marginBottom:15,marginRight:30,marginLeft:30 }}> Cancel </Text> 
              </TouchableOpacity>

             <TouchableOpacity onPress={this._toggleModal1}>
              <Text style={{ color:"#2E72B9", fontSize:20,marginBottom:15,marginLeft:30 ,marginRight:30 }}> Save </Text> 
              </TouchableOpacity>
              </View> 
                
                {/* </TouchableOpacity> */}
          </View>
        </Modal>



      
    <TouchableOpacity   style = {styles.regbtn}
            activeOpacity={1.5}
            onPress = {() => this.picApi(this.state.imageResponseData)}>
            <Text style = {styles.regbtntxt}> Save Changes </Text>
          </TouchableOpacity>
         
         <Text></Text>
         <Text></Text>
         <Text></Text>
         
         
    
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
       
        height: 80,
        width: 80,
     borderRadius: 40,
      backgroundColor:'grey',
      justifyContent: 'center',
      textAlign:'center',    
      marginTop:'15%',
      marginLeft:'40%',
      alignItems: 'center',
      overflow: 'hidden',
      position:'relative',
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
    marginVertical: 8
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
      marginLeft:"12%",
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
    marginLeft:"2%",
    fontSize: 16,
    marginVertical: 20,
    color: 'white',
    marginTop:8
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
      marginTop:10,
      
  },
  age:{
  	justifyContent:"flex-start",
      marginLeft:10,
      fontSize: 15,
      marginVertical: 20,
      color: 'white',
      marginTop:10,
      
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
    marginLeft:-20,
    fontSize:15
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
    marginTop:80,
    borderRadius:18,
   },

  regbtntxt:{
    color: 'white',
    padding: 2,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",

   },
   dropdown:{
     
    
     marginRight:20
     
   }

});

