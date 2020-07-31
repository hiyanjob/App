import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,Alert,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import { Dropdown } from 'react-native-material-dropdown'
import { Slider } from 'react-native-elements';


const maritalArr = [{
value: 'Single',
}, {
value: 'Married',
}, {
value: 'Others',
}];

const monthArr = [{
value: 'Jan',
}, {
value: 'Feb',
}, {
value: 'Mar',
}];
const yearArr = [{
value: '2018',
}, {
value: '2019',
}, {
value: '2020',
}];
const wmonthArr = [{
value: 'Jan',
}, {
value: 'Feb',
}, {
value: 'Mar',
}];
const wyearArr = [{
value: '2018',
}, {
value: '2019',
}, {
value: '2020',
}];

export default class GeneralInfo extends Component {

  static navigationOptions = {
        title: 'General Info' , 
   headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: '200',
      color: 'black',
      textAlign: 'center',
      flex: 1,
    },
    }

  constructor() {
        super();

        this.state = {
             cityValue: '',
             orientValuew : '',
             religionValue: '',
             maritalValue : '',
             monthValue : '',
             yearValue : '',
             wmonthValue : '',
             wyearValue : '',
             id:'',
             degree:'',
             location:'',
             wdegree:'',
             wlocation:'',
             cityData: [],
             orienData: [],
             religionData: [],
             maritalData: [],

        }
    }
    degree = (text) => 
   {
      this.setState({ degree: text })
   }
   location = (text) => 
   {
      this.setState({ location: text })
   }
   wdegree = (text) => 
   {
      this.setState({ wdegree: text })
   }
   wlocation = (text) => 
   {
      this.setState({ wlocation: text })
   }
    

componentWillMount() {
this.getOrientationApi();
this.getCityApi();
this.getreligionApi();
this.getMaritalApi();
}

getOrientationApi(){
fetch('http://18.204.139.44:3003/orientationList', {
         method: 'GET'
      })
.then(response => response.json())
        .then(res => {
            console.log(res.result)
            this.setState({
                orienData: res.result
            })
        })
  
      .catch((error) => {
         console.error(error);
      });
}
getMaritalApi(){
fetch('http://18.204.139.44:3003/maritalStatus', {
         method: 'GET'
      })
.then(response => response.json())
        .then(res => {
            console.log(res.result)
            this.setState({
                maritalData: res.result
            })
        })
  
      .catch((error) => {
         console.error(error);
      });
}

getCityApi(){
fetch('http://18.204.139.44:3003/cityList', {
         method: 'GET'
      })
.then(response => response.json())
        .then(res => {
            console.log(res.result)
            this.setState({
                cityData: res.result
            })
        })
  
      .catch((error) => {
         console.error(error);
      });
}

getreligionApi(){
fetch('http://18.204.139.44:3003/religionList', {
         method: 'GET'
      })
.then(response => response.json())
        .then(res => {
            console.log(res.result)
            this.setState({
                religionData: res.result
            })
        })
  
      .catch((error) => {
         console.error(error);
      });
}

createData() {
  return this.state.orienData.map( el => ({value: el.orientationType}));
}

createData1() {
  return this.state.cityData.map( el => ({value: el.cityName}));
}

createData2() {
  return this.state.religionData.map( el => ({value: el.religion}));
}
createData3() {
  return this.state.maritalData.map( el => ({value: el.name}));
}


 async generalinfoApi()
{
  var id = await AsyncStorage.getItem('_id');
  let info ={
    orientation:this.state.orientValuew,
    religion:this.state.religionValue,
  }
  if(info.orientation.trim()=="")
   {
     Alert.alert('Please Enter Orientation type field');
   }
   else if(info.religion.trim()==""){
    Alert.alert('Please Pick Religion ');
   }
   else{

   var data={
       "_id":id,
      "maritalStatus":this.state.maritalValue,
      "orientation":this.state.orientValuew,
      "religion":this.state.religionValue,
      "currentcity":this.state.cityValue,
      "eduMonth":this.state.monthValue,
      "eduYear":this.state.yearValue,
      "eduDegree":this.state.degree,
      "eduCity":this.state.location,
      "cpnyMonth":this.state.wmonthValue,
      "cpnyYear":this.state.wyearValue,
      "cpnyDegree":this.state.wdegree,
      "cpnyCity":this.state.wlocation

}
fetch('http://18.204.139.44:3003/generalDetails', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

  this.finish();

})
.catch((error) => {
console.error(error);
}); 
}
}

dash(){
  this.props.navigation.navigate('Dashboard');
}

finish(){
     Alert.alert(
    // This is Alert Dialog Title
    'Enable Location',
    // This is Alert Dialog Message. 
    'We want to you to enable location',
    [
      // First Text Button in Alert Dialog.
      {text: 'Enable GPS', onPress: (() => this.dash())  },
 
      // Second Cancel Button in Alert Dialog.
      {text: 'No, not now', onPress: (() => this.dash()) , style: 'cancel'},
    ]
  )
}

    
render(){

  const orienData = this.createData();
  const cityData = this.createData1();
  const religionData = this.createData2();
   const maritalData = this.createData3();

    return (
      <ScrollView>
      <View style={{justifyContent:'center',alignItems:'center',marginLeft:'-11%'}} >
       <View style={{width:'80%',flex: 1, marginTop:19,marginLeft:'9%', justifyContent: 'center'}}>
         <Slider 
         thumbTintColor='#fbfbfb'
          maximumTrackTintColor='#fbfbfb' 
          minimumTrackTintColor='#25d0de'
           value={this.state.value}
           onValueChange={(value) => this.setState({value})} />
         </View>
    
          <View style={styles.container0}>
            <Dropdown 
              containerStyle={{height:50,width:315,}}
              placeholder='Current City'
              data={cityData}
              onChangeText={(cityValue)=>this.setState({cityValue})}/>
          </View>

          <View style={styles.container1}>
             <Dropdown containerStyle={{width:315,height:50}}
             placeholder='Orientation Type*'
                data={orienData}
                onChangeText={(orientValuew)=>this.setState({orientValuew})}/>
          </View>

          <View style={styles.container2}>
             <Dropdown containerStyle={{width:300,height:50}}
             placeholder='Religion*'
                data={religionData}
                onChangeText={(religionValue)=>this.setState({religionValue})}/>
          </View>

           <View style={styles.container3}>
             <Dropdown containerStyle={{width:300,height:50}}
             placeholder='Maratial Status'
                data={maritalData}
                onChangeText={(maritalValue)=>this.setState({maritalValue})}/>
          </View>

           <TextInput style = {styles.static}
               placeholder = "Last Education"
               editable={false}
               placeholderTextColor = "black"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.handleEmail}/>

          <View style={{flexDirection:'row',marginTop:-18,justifyContent:'space-between',alignItems:'center',paddingHorizontal:1}}>
          <View style={styles.container4}>
             <Dropdown 
                containerStyle={{width:150,height:50}}
                placeholder='Months'
                data={monthArr}
                onChangeText={(monthValue)=>this.setState({monthValue})}/>
          </View>
           <View style={styles.container5}>
             <Dropdown containerStyle={{width:150,height:50}}
                 placeholder='Year'
                data={yearArr}
                onChangeText={(yearValue)=>this.setState({yearValue})}/>
          </View>
          </View>

           <TextInput style = {styles.input}
               placeholder = "Degree"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.degree}/>

            <TextInput style = {styles.input}
               placeholder = "City_Location"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.location}/> 


            <TouchableOpacity
               style = {styles.Addbut}
               onPress = {
                  () => this.addBtn()
               }>
                <Image source={require('./images/add.png')} style={{width: 19, height: 20, resizeMode: 'stretch',marginRight:22,marginVertical:14}} />
               <Text style = {styles.AddEduButtonText}>Add Education</Text>
            </TouchableOpacity>

             <TextInput style = {styles.static}
               placeholder = "Last Work"
               editable={false}
               placeholderTextColor = "black"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.handleEmail}/>


           <View style={{flexDirection:'row',marginTop:-18,justifyContent:'space-between',alignItems:'center',paddingHorizontal:1}}>
          <View style={styles.container4}>
             <Dropdown 
                containerStyle={{width:150,height:50}}
                placeholder='Months'
                data={monthArr}
                onChangeText={(monthValue)=>this.setState({monthValue})}/>
          </View>
           <View style={styles.container5}>
             <Dropdown containerStyle={{width:150,height:50}}
                 placeholder='Year'
                data={yearArr}
                onChangeText={(yearValue)=>this.setState({yearValue})}/>
          </View>
          </View>

           <TextInput style = {styles.input}
               placeholder = "Degree"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.wdegree}/>

            <TextInput style = {styles.input}
               placeholder = "City_Location"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               returnKeyType="next"
               onChangeText = {this.wlocation}/> 


            <TouchableOpacity
               style = {styles.Addbut}
               onPress = {
                  () => this.addBtn()
               }>
                <Image source={require('./images/add.png')} style={{width: 19, height: 20, resizeMode: 'stretch',marginRight:22}} />
               <Text style = {styles.AddWOrk}>Add Work</Text>
            </TouchableOpacity>

        <LinearGradient style = {styles.finisBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
            activeOpacity={1.5}               
               onPress = { () => this.generalinfoApi() }>
               <Text style = {styles.contifinishButtontxt}>Finish</Text>
            </TouchableOpacity>
            </LinearGradient>
       
      </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({

   container0: {
    flex: 1,
    marginLeft:'8%',
    marginTop:-15,
    marginBottom:10,
    alignItems:'center',
    marginVertical:10,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    marginLeft:'8%',
    marginTop:5,
    alignItems:'center',
    marginVertical:10,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    marginLeft:'8%',
    marginTop:5,
    alignItems:'center',
    marginVertical:10,
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    marginTop:5,
    marginLeft:'8%',
    alignItems:'center',
    marginVertical:10,
    justifyContent: 'center',
  },
  container4: {
    flex: 1,
    marginLeft:'10%',
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
   container5: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginLeft:'-8%',
    marginVertical:10,
    alignItems: 'center',
  },
finisBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:325,
    color:'blue',
    marginTop:25,
    marginLeft:'12%',marginBottom:15,
   },
contifinishButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
edu:{
   color: 'black',
    padding: 1,
    marginLeft:-155,
    marginTop:14
  },
input: {
    marginTop:15,
    height: 40,
    width:325,
    height:50,
    marginLeft:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    fontSize:12,
    color:'black',
    height:50,
    marginVertical: 8
  },
static: {
    marginTop:15,
    height: 40,
    width:330,
    fontWeight:'bold',
    marginLeft:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    fontSize:12,
    color:'black',
    height:50,
    marginVertical: 8
  },
  Addbut:{
    flexDirection: 'row',
    borderColor: '#69b3f6',
    marginTop:15,
    height: 40,
    width:330,
    fontWeight:'bold',
    marginLeft:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    fontSize:12,
    color:'black',
    height:50,
    marginVertical: 8
   },
    AddEduButtonText:{
    color: '#69b3f6',
    marginRight: 25,
    marginLeft:0,
    marginVertical:12
  },
  AddWOrk:{
    color: '#69b3f6',
    marginRight: 25,
    marginLeft:0,
    marginVertical:12
  },

})