import React, {Component} from 'react';
import { AppRegistry,Dimensions,Button, Text, StatusBar, Picker,View, Image,ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import ZocialIcon from 'react-native-vector-icons/Zocial';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroup from 'react-native-radio-buttons-group';
import Feather from 'react-native-vector-icons/Feather';
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
        data: [
          
            {
                label: 'Male',
                color: 'white',
            },
            {
                label: 'Female',
                color: 'white',
            },
            {
                label: 'Transgender',
                color: 'white',
            },
        ],
        data1: [
          
            {
                label: 'Asexual',
                color: 'white',
            },
            {
                label: 'Bisexual',
                color: 'white',
            },
            {
                label: 'Heterosexual',
                color: 'white',
            },
        ],
        data2: [
          
            {
                label: 'Single',
                color: 'white',
            },
            {
                label: 'Engaged',
                color: 'white',
            },
            {
                label: 'Married',
                color: 'white',
            },
        ],
         

    };

    // update state
    onPress = data => this.setState({ data });   

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
    this.props.navigation.navigate('Sample');
  }
 
  render() {

      let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

    return (
   <ScrollView>  
   <View style={styles.container}> 
     <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={['#69b3f6', '#25d0de']} > 
   <View style={{backgroundColor:"#69b3f6",}}>
    <Image source={require('./images/ceo.png')} 
         style={{
         borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor:'#f00',
        justifyContent: 'center',
        textAlign:'center',
        marginLeft:"38%",
        marginTop:"20%",
        alignItems: 'center'}} />
    <View style={{flexDirection:"row",
    justifyContent:"center",
 	 textAlign:"center",
 	 alignItems:"center",
 	 marginVertical:10}}>    
     <Text 
     style={{
     color:"white",
 	 fontSize:20,
 	 marginBottom:15	}}>Salah Markaya</Text> 
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

      <Image source={require('./images/cr7.jpg')} 
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
          <Text style={{marginLeft:34,color:'black'}}></Text>
          <Text style={{color:'white',justifyContent:'flex-end',marginRight:'7%',fontWeight:'200'}}> 
            maxlimit 160 characters </Text>
        </View> 
          </View>    

     

          <View>
          <Text style={styles.Pwdtxt}> Email ID </Text>
          <TextInput
          style={{margin:1,marginBottom:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          placeholder = "abc@xyz.com"
          placeholderTextColor = "white"
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
	          placeholder = "+91012365478"
	          placeholderTextColor = "white"
	           />
          </View>

          <View style={styles.dob}>
          <Text style={styles.dobText}>DOB</Text>
        </View>
            <View style={styles.inputDob}>
              <View style={{flex:1, }}>
              <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                    <View >
                        <Text style={styles.datePickerText}>{this.state.dobText}</Text>
                    </View>     
                 <ZocialIcon style={{marginLeft:'90%',marginTop:-28}}
                     name='cal'
                     size={24}
                     color='white'/>
             </TouchableOpacity>
           </View>
         <DatePickerDialog ref="dobDialog" onDatePicked={this.onDOBDatePicked.bind(this)} /> 
        </View>           
              
         <View>
          <Text style={styles.Pwdtxt}> Age</Text>
          <TextInput
          style={{margin:1,marginVertical:15,borderBottomWidth:1, borderColor:'#ccc',width:'75%', padding:10, height:50,marginLeft:50, color: 'grey',}}
          editable={true}
          placeholder = "25"
          placeholderTextColor = "white"
           />
          </View>

          <View style={styles.city}>
          <Text style={styles.cityText}>Country</Text>
          <Picker
                 style={{color:'white',marginLeft:'5%',marginRight:'5%',borderBottomWidth:1}}
                 mode="dropdown"
                 selectedValue={this.state.cityPicker}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>
   
                 <Picker.Item label="Australia" value="" />
                 <Picker.Item label="USA" value="USA" />
                 <Picker.Item label="German" value="German" />
                 <Picker.Item label="India" value="India" />
            </Picker>
            <View style={styles.breedingstate}></View>
          </View>

           <View style={styles.city}>
          <Text style={styles.cityText}>City</Text>
          <Picker
                 style={{color:'white',bottomWidth:"1",borderColor:"white",marginLeft:'5%',marginRight:'5%'}}
                 itemStyle={{color:"Red"}}
                 mode="dropdown"
                 selectedValue={this.state.cityPicker}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>
   
                 <Picker.Item label="California" value="" />
                 <Picker.Item label="Western" value="USA" />
                 <Picker.Item label="North East" value="German" />
                 <Picker.Item label="Pacific" value="India" />
            </Picker>
            <View style={styles.breedingstate}></View>
          </View>

     <View>
      <Text style={styles.Logintxt}>Gender </Text>
        <View style={{color:"white",justifyContent:"flex-start"}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data} 
            onPress={this.onPress} />
      </View>
    </View>

    <View>
      <Text style={styles.Logintxt}>Sexual Orientation </Text>
        <View style={{marginLeft:"7%",color:"white",justifyContent:'space-between',}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data1} 
            onPress={this.onPress} />
        </View>
    </View> 

    <View>
      <Text style={styles.Logintxt}>Status </Text>
        <View style={{color:"white",justifyContent:'space-between',marginRight:"5%"}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data2} 
            onPress={this.onPress} />
        </View>
    </View> 

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
                 style={{color:'white',marginLeft:'5%',marginRight:'5%',borderBottomWidth:1}}
                 mode="dropdown"
                 selectedValue={this.state.cityPicker}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>

                 <Picker.Item label="Business" value="" />
                 <Picker.Item label="Engineer" value="USA" />
                 <Picker.Item label="Doctor" value="German" />
                 <Picker.Item label="Pacific" value="India" />
            </Picker>
       <View style={styles.breedingstate}></View>
      </View>

    <View style={styles.city}>
      <View style={{flexDirection:'row',}}>
      <Text style={{color:'white',justifyContent:'flex-start'}}>Primary Language</Text>
      <Text style={{color:'#0b5bdd',marginLeft:"18%"}}>Add Languages</Text>
      </View> 
          <Picker
                 style={{color:'white',marginLeft:'5%',marginRight:'5%',borderBottomWidth:1}}
                 mode="dropdown"
                 selectedValue={this.state.cityPicker}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>

                 <Picker.Item label="English" value="" />
                 <Picker.Item label="French" value="USA" />
                 <Picker.Item label="Chinese" value="German" />
                 <Picker.Item label="Tamil" value="India" />
            </Picker>
       <View style={styles.breedingstate}></View>
      </View>

      
    <TouchableOpacity   style = {styles.regbtn}
            activeOpacity={1.5}
            onPress = {() => this.saveChanges()}>
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
    backgroundImage: {
            flex: 1,
            
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
   guestbtn: {
    margin: 5,
    height: 40,
    width:"65%",
    padding:10,
    marginLeft:"25%",
    borderColor: '#050E15', 
    marginVertical: 10,
    marginLeft:50,
    marginTop:20,
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
    marginLeft:"10%",
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

