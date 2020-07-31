import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,Alert,alert,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import {NavigationActions,StackActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import ModalPicker from 'react-native-modal-picker';
import { Slider } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown'


const companyType = [{
value: 'Software',
}, {
value: 'Bussiness',
}, {
value: 'Others',
}];

const categoryArr = [{
value: 'Bangalore',
}, {
value: 'Chennai',
}, {
value: 'Mumbai',
}];

const companySize = [{
value: 'Large',
}, {
value: 'Small',
}, {
value: 'Medium',
}];

export default class CompanyInterest extends Component {
  static navigationOptions = {
   title: 'Create Company/Interest' , 
   headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#e3e3e5',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginRight:'20%',
      fontFamily:'sans',
      color: 'black',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    },
    }
    
    constructor() {
        super();

        this.state = {

             textInputValue: '',
             id:'',
             category: '',
             companyURL : '',
             headquarters: '',
             yearFund: '',
             companyType: '',
             companySize:'',
             special: '',
        }
    }
    category = (text) => 
   {
      this.setState({ category: text })
   }
   companyURL = (text) => 
   {
      this.setState({ companyURL: text })
   }
   headquarters = (text) => 
   {
      this.setState({ headquarters: text })
   }
   yearFund = (text) => 
   {
      this.setState({ yearFund: text })
   }
   companyType = (text) => 
   {
      this.setState({ companyType: text })
   }
   companySize = (text) => 
   {
      this.setState({ companySize: text })
   }
   special = (text) => 
   {
      this.setState({ special: text })
   }
componentWillMount() {
this.onLoad();
}

onLoad = async () => {
try { 
this.setState({ 
otp:await AsyncStorage.getItem('otp'),
id:await AsyncStorage.getItem('_id')
});
}
catch (error) {
Alert.alert('Error', 'There was an error.')
}
}


companyinterestApi()
{
  let check={
    category:this.state.category,
    companyURL:this.state.companyURL,
    headquarters:this.state.headquarters,
    yearFund:this.state.yearFund,
  }
if(check.category.trim()=="" &&check.companyURL.trim()=="" && check.headquarters.trim()==""  && check.yearFund.trim()=="")
   {
     Alert.alert('Fill the Required field');
   }
else{

var data={
  _id:this.state.id,
  category:this.state.category,
  companyURL:this.state.companyURL,
  headquarters:this.state.headquarters,
  yearFund:this.state.yearFund,
  cmnyType:this.state.companyType,
  cmnysize:this.state.companySize,
  special:this.state.special

}

fetch('http://18.204.139.44:3004/createCompany', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {
this.props.navigation.navigate('CompanyInterestImage');

})
.catch((error) => {
console.error(error);
}); 
}   
}

render(){
  let index = 0;
   const data1 =[
            {key: index++, section: true, label: 'Company'},
          
            ];
    
    return (
      <ScrollView>
      <View style={{}}>
        <View style={{flex: 1, marginTop:19,width:'84%',marginLeft:'8%', justifyContent: 'center'}}>
         <Slider  
          thumbTintColor='#fbfbfb'
          maximumTrackTintColor='#69b3f6' 
          minimumTrackTintColor='#25d0de'
           value={this.state.value}
           onValueChange={(value) => this.setState({value})} />
         </View>

         <View style={styles.dropdwn}>
            <Dropdown 
              containerStyle={{height:50,width:333,}}
              placeholder='Category *'
              data={categoryArr}
              onChangeText={(cityValue)=>this.setState({cityValue})}/>
          </View>

        <TextInput
            style={styles.input}
            placeholder="Category"
            onChangeText = {this.category}
            value = {this.state.category}/>

        <TextInput style={styles.input}
            placeholder="Company URL *"
            onChangeText = {this.companyURL}
            value= {this.state.companyURL}/>

      <View style={{flexDirection:'row',marginTop:10,}}>
        <AntDesignIcon style={{padding: 1,marginLeft:'6%',marginTop:20}}
              name='enviromento'
              size={21}
              color='black'/>       
        <TextInput
            style={styles.input1}
            placeholder="   Headquarters *"
            onChangeText = {this.headquarters}
            value = {this.state.headquarters} />
      </View>

        <TouchableOpacity
            style = {styles.Addbut}
            onPress = {() => this.addBtn() }>
            <Image source={require('../images/add.png')} style={{width: 19, height: 20, resizeMode: 'stretch',marginLeft:85,marginVertical:14}} />
           <Text style = {styles.addText}>Add New Address</Text>     
        </TouchableOpacity>

        <TextInput
           style={styles.input}
            placeholder="Year founded *"
            onChangeText = {this.yearFund}
            value = {this.state.yearFund}/>

        <View style={styles.container0}>
            <Dropdown
                containerStyle={{width:333,height:50}}
                placeholder='Company type'
                data={companyType}
                onChangeText={(companyType)=>this.setState({companyType})}/>
          </View>

           <View style={styles.container1}>
          <Dropdown
                containerStyle={{width:333,height:50}}
                placeholder='Specilaties'
                data={companySize}
                onChangeText={(companySize)=>this.setState({companySize})}/>
          </View>
         
        <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.companyinterestApi()
               }>
               <Text style = {styles.continButtontxt}>Create</Text>
            </TouchableOpacity>
        </LinearGradient>
      </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({

dropdwn:{
    flex: 1,
    marginTop:-15,
    marginLeft:'2%',
    marginRight:'2%',
    alignItems:'center',
    marginBottom:15,
    alignItems: 'center',
    justifyContent: 'center',
},
input:{
  borderBottomWidth:1,
  marginTop:0, 
  borderColor:'#ccc',
  width:'84%',
  marginLeft:'7%', 
  marginBottom:10,
  padding:10, 
  height:50,
},
input1:{
  borderBottomWidth:1,
  marginTop:0, 
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  borderColor:'#ccc',
  width:'80%',
  marginBottom:10,
  height:50,
},
container0: {
    flex: 1,
    marginTop:5,
    alignItems:'center',
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
},
container1: {
    flex: 1,
    marginTop:5,
    alignItems:'center',
    marginBottom:10,
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
},
company:{
   borderBottomWidth:1,marginTop:-10, borderColor:'#ccc',width:'80%',marginLeft:24, padding:10, height:70,
},
continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:'82%',
    color:'blue',
    marginLeft:'9%',
    marginTop:25
   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
},
Addbut:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#69b3f6',
    height: 43,
    width: '83%',
    margin: 5,
    marginTop:18,
    marginLeft:'8%',
   },
addText:{
    color: '#69b3f6',
    textAlign:'center',
    justifyContent:'center',
    marginRight: 25,
    marginLeft:'4%',
    marginVertical:12
  },
})