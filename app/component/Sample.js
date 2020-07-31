import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage,
} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Sample extends Component {

static navigationOptions = ({ navigation }) => {
  return {

    headerBackground: (
      <Image
        style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}
        source={require('./images/logo_web.png')}
      />
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                color:'white',
            },
    
    headerLeft: 
      
      <View style={{flexDirection:'row'}}>
       <TouchableOpacity  onPress={navigation.navigate('') }>
        <Icon style={{marginLeft:15,}} 
        name="users" size={26}  color='#69b3f6'
        />
        </TouchableOpacity>
        <Icon style={{marginLeft:25}} 
        name="gift" size={26}  color='#69b3f6'
        />
        <FontAwesome style={{marginLeft:25}} 
        name="envelope-o" size={26}  color='#69b3f6'
        
        />
        <AntDesign style={{marginLeft:25}} 
        name="select1" size={26}  color='#69b3f6'
        
        />
        </View>,
     
  headerRight: 
   <TouchableOpacity style={ [{}] }>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Ionicons style={{marginLeft:55}} 
        name="md-search" size={28}  color='#69b3f6'
        onPress={() =>navigation.navigate('DrawerToggle')}
        />
        <Ionicons style={{marginLeft:25}} 
        name="ios-notifications-outline" size={28}  color='#69b3f6'
        onPress={() =>navigation.navigate('DrawerToggle')}
        />
        <AntDesign style={{marginLeft:15,}} 
        name="setting" size={28}  color='#69b3f6'
        onPress={() =>navigation.navigate('DrawerToggle')}
        />
        <Icon style={{marginLeft:25}} 
        name="user-circle" size={28}  color='#69b3f6'
        onPress={() =>navigation.navigate('DrawerToggle')}
        />

        </View>
     </TouchableOpacity>, 
  }
};

constructor() {
super();
this.state = {

id:'',
email:'',
mobile_no:'',
password:'',
age:'',
dob:'',
screenName :'',
profilePic:'',
referalCode:'', 
gender:'', 
city:'', 
country:'',
tagline:'',

}
}

screenName = (text) => 
  {
        this.setState({ screenName: text })
  }

componentWillMount() {
  this.getDetailsApi();
  }
  
  async getDetailsApi()
{

var id1 = await AsyncStorage.getItem('userID');

var data={
userID:id1
}
console.log(data);
fetch('http://18.204.139.44:3005/usersignupdetail', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {
console.log(responseJson);
this.setState({
  screenName:responseJson.Result[0].screenName,
  profilePic:responseJson.Result[0].profilePic 

})


})
.catch((error) => {
console.error(error);
}); 
}

_onRefresh = () => {
    this.setState({refreshing: true});
    this.getDetailsApi().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
 <ImageBackground source={require('./images/Splash_bg.png')} 
 style={{
  width: '100%', 
  height: '100%'}}>
 
      <View style={styles.container}>
      
      
      <View style={styles.firstContainer}>
        <View style={{flexDirection:"row"}}>
        <Image source={require('./images/cr7.png')} 
          style={{
            width: 25, 
            height: 25,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: '10%',
            marginLeft:"3%",
            borderRadius:25,
            marginBottom:10}} />
        <View style={{marginLeft:5,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:10}}>Marry</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Bangalore</Text>
          </View>
        </View>

         <View style={{flexDirection:"row"}}>
        <Image source={require('./images/1.jpg')} 
          style={{
            width: 25, 
            height: 25,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: '10%',
            marginLeft:"3%",
            borderRadius:25,
            marginBottom:10}} />
        <View style={{marginLeft:5,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:10}}>Marry</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Bangalore</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.secondContainer}>
       <View style={{flexDirection:"row"}}>
        <Image source={require('./images/message.png')} 
          style={{
            width: 25, 
            height: 30,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"3%",
            marginBottom:10}} />
        <View style={{marginLeft:15,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:8,
          }}>Clarke</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Welcome to aalap...</Text>
        </View>
        <Entypo style={{marginLeft:"15%",marginTop: "6%",}} 
        name="attachment" size={20}  color='white'   />
        </View>
        
        <View style={{width:"100%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />

         <View style={{flexDirection:"row"}}>
        <Image source={require('./images/message.png')} 
          style={{
            width: 25, 
            height: 30,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"3%",
            marginBottom:10}} />
        <View style={{marginLeft:15,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:8,
          }}>Paul</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Hai, how are you?</Text>
        </View>
        </View>
        
        <View style={{width:"100%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />
      </View>
      
      <View style={styles.thirdContainer}>
       
      <Image source={{ uri:'http://18.204.139.44/AalapApi/uploads/'+this.state.profilePic}} 
          style={{
            width: 50, 
            height: 45,
            justifyContent:'center',
            textAlign:'center',
            marginTop:"10%",
            alignItems:'center',
            marginTop: '18%',
            borderRadius:25,
            marginLeft:"35%",
            borderRadius:25,
            marginBottom:10}} />
        <Text 
         style={{
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          marginLeft:"4%",
          fontSize:15}}>{this.state.screenName}</Text>
        <Text 
         style={{
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          marginLeft:"4%",
          fontSize:12.5}}>My Game,My Rules</Text> 
        <Text 
         style={{
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          marginLeft:"4%",
          fontSize:10}}>Bangalore</Text>     

        <TextInput style = {styles.input}
        placeholder = "Just Joined"
        placeholderTextColor = "grey"
        autoCapitalize = "none"
        returnKeyType="next"/>
      </View>
          </View>
    
    </ImageBackground>   

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
  },
  firstContainer:{
    flex:.7,
    backgroundColor:'#25344c',

  },
  secondContainer:{
    flex:1.5,
  
  },
  thirdContainer:{
    flex:.7,
      backgroundColor:'#25344c',
  },
  input: {
    margin: 5,
    height: 40,
    width:320,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#1f2c3f',
    marginVertical: 12,
    marginTop:25
},

});