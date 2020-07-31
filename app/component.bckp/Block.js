import React, { Component } from 'react'
import { Text, 
         StatusBar,
         StyleSheet,
         Image,
         View ,
         ToastAndroid,
         AsyncStorage, 
         ActivityIndicator,
         TouchableOpacity,
         TextInput,
         ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import Dropdown from 'react-native-modal-select-option';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const propsDropdown = {
  defaultValue: {value: 5, label: 'Kebumen'},
  options: [
    {value: 1, label: 'Bandung'},
    {value: 2, label: 'Surabaya'},
    {value: 3, label: 'Palembang'},
    {value: 4, label: 'Jakarta'},
  ],
  label: 'Your City',
  animationType: 'none',
};

type State = {
  selectedOption: Object,
  isShowingOptions: boolean;
};


export default class Block extends Component {

    constructor() {
        super();
        this.state = {
                textInputValue1: '',
                cDetails:'',
                sDetails:'',
                clDetails:'',
                jDetails:'',
                name1:'',
                email1:'',
                mobile1:'',     
        }
    }  

  cDetails = (text) => {
      this.setState({ cDetails: text })
   }
   sDetails = (text) => {
      this.setState({ sDetails: text })
   }
  clDetails = (text) => {
      this.setState({ clDetails: text })
   }
   jDetails = (text) => {
      this.setState({ jDetails: text })
   }
   name1 = (text) => {
      this.setState({ name1: text })
   }
   email1 = (text) => {
      this.setState({ email1: text })
   }
    mobile1 = (text) => {
      this.setState({ mobile1: text })
   }



   static navigationOptions = {
     title: 'No Shame' , 
      headerBackground: (
         <Image
            style={{width:'100%',height:'100%'}}
            source={require('./images/Mask.png')}
          />
        ),
      headerStyle: {
        backgroundColor: '#fff',
        color:'white',
        height:80
    },
  headerTintColor: 'white',
    headerTitleStyle:{
      fontWeight: '500',
      color: 'white',
      marginLeft:85,
      marginRight:85,
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center'
    },
    }
    save(){
      this.props.navigation.navigate('Dashboard');
    }



async NoshameApi()
{

const{cDetails,sDetails,clDetails,jDetails,name1,email1,mobile1}=this.state;

var id1 = await AsyncStorage.getItem('_id');


var data={
        _id:id1,
       "cmpyDetails":this.state.cDetails,
       "schlDetails" :this.state.sDetails,
        "clgDetails" : this.state.clDetails,
        "jobDetails":this.state.jDetails,
        "name" :this.state.name1,
        "email":this.state.email1,
        "mobile":this.state.mobile1,
        "age":"18 to 24"
}
console.log(data);

fetch('http://18.204.139.44:3003/userNoShameDetails', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

console.log(responseJson); 

this.props.navigation.navigate('Dashboard');


})
.catch((error) => {
console.error(error);
}); 
}
  
render(){    
    return (
      <ScrollView>
      <View style={{}}>
         <Text style={{marginTop:17.5,textAlign:'center',fontSize:17.5,fontWeight:'500'}}>Don't bump into a wrong person. Be</Text>
         <Text style={{marginTop:2.5,textAlign:'center',fontSize:17.5,fontWeight:'500'}}>invisible to following people</Text>
         <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Contact Number"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.mobile1}
            /> 

         <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Email Id"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.email1}     />  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Names"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.name1}
             />  

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Company name & locations"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.cDetails}
             />       

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Job Titles,compnaies & locations:"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.jDetails}
             /> 

          <View style={{ flexDirection:'row',marginTop:14}}>
           <Text style={{marginLeft:32,}}>By Age range</Text>
           <Text style={{marginLeft:169,}}>18 to 24</Text>
          </View>

          <TextInput
            style={{marginTop:44,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By School name & locations:"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.sDetails}
             /> 

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By College name & locations:"
            placeholderTextColor = "#b9c1ce"
            onChangeText = {this.clDetails}
             /> 

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.NoshameApi()
               }>
               <Text style = {styles.continButtontxt}>Save</Text>
            </TouchableOpacity>
        </LinearGradient>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
   height: hp('7%'),
    width:wp('85%'),
    color:'blue',
    marginLeft:31,
    marginTop:15
   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
   })