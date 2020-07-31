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
  ListView, 
  ActivityIndicator, 
   Alert,
   FlatList,
   BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Notifications extends Component {

static navigationOptions = ({ navigation }) => {
  return {

    headerBackground: (

      <Image
        style={{ marginLeft: 45, marginTop: 5, width: '20%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
        source={require('./images/logo_web.png')}
      />
    ),
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      color: 'white',
    },
    headerStyle: {
      backgroundColor: '#009dae'
    },

    headerLeft:

      <View style={{ flexDirection: 'row' }}>


        <TouchableOpacity onPress={() => navigation.navigate('friends')}>
          <Image
            style={{ marginLeft: 15, height: 33, width: 33, marginTop: 10 }}
            source={require('./images/friends.png')}
          />
          {/* <Icon style={{ marginLeft: 17, }}
            name="users" size={26} color='#69b3f6'
          /> */}
          <Text style={{
            color: "#aadae0",
            marginLeft: 10,
            textAlign: 'center',
            fontSize: 12,
            marginTop: -5,
          }}>Friends </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
          <Image
            style={{ marginLeft: 17, height: 23, width: 23, marginTop: 12 }}
            source={require('./images/rewards.png')}
          />
          {/* <Icon style={{ marginLeft: 17 }}
            name="gift" size={26} color='#69b3f6'
          /> */}
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 7,
            marginTop: 2,
          }} >Rewards </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          {/* <FontAwesome style={{ marginLeft: 21 }}
            name="envelope-o" size={26} color='#69b3f6'
          /> */}
          <Image
            style={{ marginLeft: 21, height: 25, width: 25, marginTop: 10 }}
            source={require('./images/messag.png')}
          />
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 5,
          }} >Messages </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RoomSelection')}>
          {/* <AntDesign style={{ marginLeft: 30 }}
            name="select1" size={26} color='#69b3f6'
          /> */}
          <Image
            style={{ marginLeft: 30, height: 26, width: 26, marginTop: 10 }}
            source={require('./images/roomselection.png')}
          />
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 5,
            marginTop: -1
          }} >Room Selection </Text>
        </TouchableOpacity>

      </View>,
    headerRight:

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => navigation.navigate('')}>
          {/* <Ionicons style={{ marginLeft: 17 }}
            name="md-search" size={26} color='#69b3f6'
          /> */}
          <Image
            style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
            source={require('./images/search.png')}
          />

          <Text style={{
            color: "#aadae0",
            marginLeft: 10,
            textAlign: 'center',
            fontSize: 12
          }}> Search </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          {/* <Ionicons style={{ marginLeft: 29 }}
            name="ios-notifications-outline" size={26} color='#69b3f6'
          /> */}
          <Image
            style={{ marginLeft: 29, height: 20, width: 20, marginTop: 10 }}
            source={require('./images/notification.png')}
          />
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 7,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            marginBottom: -750
          }} >Notification </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          {/* <AntDesign style={{ marginLeft: 15, }}
            name="setting" size={26} color='#69b3f6'
          /> */}

          <Image
            style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
            source={require('./images/settings.png')}
          />
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 5
          }} >Settings </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('newprofile')}>
          {/* <Icon style={{
            marginLeft: 12
          }}
            name="user-circle" size={26} color='#69b3f6'
          /> */}
          <Image
            style={{ marginLeft: 12, height: 20, width: 20, marginTop: 10 }}
            source={require('./images/profileimg.png')}
          />
          <Text style={{
            color: "#aadae0",
            textAlign: 'center',
            fontSize: 12,
            marginLeft: 5
          }} > Profile  </Text>
        </TouchableOpacity>

      </View>,
  }
};
constructor() {
super();
this.state = {


}
}


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    
    return false;
  }





componentWillMount() {

}


render() {
 return (
<ImageBackground source={require('./images/Splash_bg.png')} 
 style={{
  width: '100%', 
  height: '100%'}}>
 <ScrollView> 
      <View style={styles.container}>
     
    





        <View style={styles.secondContainer}>
       <View style={{flexDirection:"row",marginTop:-60}}>
        <Image source={require('./images/ceo.png')} 
          style={{
            width: 50, 
            height: 50,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"35%",
            marginBottom:10,
            borderRadius:20}} />
           
      
        <Text 
         style={{
          color:"white",
          marginTop:"7%",
          marginLeft:"4%",
          fontSize:12}}>Nison accepted your friend request</Text>
       
       
        </View>
        
        <View style={{width:"60%", height: 1,marginTop:"2%", backgroundColor: '#4065a5',marginLeft:300}} />

         <View style={{flexDirection:"row"}}>
        <Image source={require('./images/cr7.png')} 
          style={{
            width: 50, 
            height: 50,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"35%",
            borderRadius:10,
            marginBottom:20}} />
       
        <Text 
         style={{
          color:"white",
          marginTop:"6%",
          marginLeft:"4%",
          fontSize:12}}>Today is Preethi's birthday</Text>
       
        </View>
         
        <View style={{width:"60%", height: 1,marginTop:"2%", backgroundColor: '#4065a5',marginLeft:300}} />

        
       
        <View style={{flexDirection:"row"}}>
        <Image source={require('./images/giftbox.png')} 
          style={{
            width: 50, 
            height: 50,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            borderRadius:20,
            marginLeft:"35%",
            marginBottom:10}} />
   
        <Text 
         style={{
          color:"white",
          marginTop:"7%",
          marginLeft:"4%",
          fontSize:12}}>Refer your Friend to earn your bonus chat hours</Text>
  
        </View>
         
        <View style={{width:"92%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />

           


        </View>



           
      </View>
      </ScrollView>
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
    

  },
  secondContainer:{
    flex:1.5,
    marginTop:50,
    marginLeft:-280
  
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
loginButton: {
    margin: 5,
    height: 35,
    width:"80%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:35,
    marginTop:10,
    borderRadius:18,
   },

  LoginButtontxt:{
    color: 'white',
    padding: 2,
    marginLeft:20,
    marginTop:-5
   },
   loginButton1: {
    margin: 5,
    height: 35,
    width:"80%",
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,
    marginLeft:35,
    marginTop:10,
    borderRadius:18,
   },

  LoginButtontxt1:{
    color: 'white',
    padding: 2,
    marginLeft:20,
    marginTop:-5
   },

});