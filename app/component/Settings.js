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
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Settings extends Component {

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
            marginLeft: 7
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
            marginLeft: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            marginBottom: -750
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

// logout(){
// AsyncStorage.removeItem('userID');
// this.props.navigation.navigate('Login');
// }


log_out() {
  this.props.navigation.navigate("logout");
}


componentWillMount() {

}


render() {
 return (
 
<ImageBackground source={require('./images/Splash_bg.png')} 
 style={{
  width: '100%', 
  height: '100%'}}>
 



      <View style={styles.container}>
      
       <ScrollView >
<Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
          fontSize:17

         }}>User Profile Settings</Text> 

<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:20,
         }}>Accounts</Text> 
           <AntDesign style={{marginLeft:84,marginTop:22}} 
        name="right" size={16}  color='white'
        />
        </View>


         <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 

<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Language</Text>
            <AntDesign style={{marginLeft:83,marginTop:12}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Delete Chat History</Text>
           <AntDesign style={{marginLeft:26,marginTop:13}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Chat Backup</Text>
           <AntDesign style={{marginLeft:65,marginTop:10}} 
        name="right" size={16}  color='white'
        />
         </View>
         <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
  <TouchableOpacity  onPress={ () => this.log_out() }>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Logout Permanently</Text>  
         </TouchableOpacity>
           <AntDesign style={{marginLeft:18,marginTop:13}} 
        name="right" size={16}  color='white'
        />
       
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Delete Account</Text>
          <AntDesign style={{marginLeft:48,marginTop:13}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 

<Text>    </Text>


<Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
          fontSize:17

         }}>Chat General Settings</Text> 
         <Text>    </Text>
<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:20,
         }}>Volume Control</Text> 
           <AntDesign style={{marginLeft:53,marginTop:20}} 
        name="right" size={16}  color='white'
        />
         </View>
         <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Sound Control</Text>
           <AntDesign style={{marginLeft:60,marginTop:15}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Vibration</Text>
          <AntDesign style={{marginLeft:90,marginTop:15}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 

<View style={{flexDirection:'row'}}>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Block Notifications</Text> 
          <AntDesign style={{marginLeft:28,marginTop:16}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Message Notification</Text>
           <AntDesign style={{marginLeft:11,marginTop:13}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
         <View style={{flexDirection:'row'}}>
         <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Audio/Video</Text>
          <AntDesign style={{marginLeft:65,marginTop:15}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>List of Blocked users</Text>
          <AntDesign style={{marginLeft:15,marginTop:15}} 
        name="right" size={16}  color='white'
        />
         </View>
        <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
<View style={{flexDirection:'row'}}>
<Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10,
         }}>Location</Text>
          <AntDesign style={{marginLeft:90,marginTop:16}} 
        name="right" size={16}  color='white'
        />
          <Text style={{
          borderBottomWidth:1,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-5
         }} ></Text> 
         </View>
         </ScrollView>
         </View>



      <View style={styles.firstContainer}>
      <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:43,
          fontSize:17
         }}>Accounts</Text>

           <Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>Screen Name</Text>
        
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>Briyant Twiford</Text>
          <Entypo style={{marginLeft:169,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />
        
         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'36%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>Tag Line</Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>My Rules,My Games</Text>
         <Entypo style={{marginLeft:169,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />

         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'36%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>Email ID </Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>briyantwiford@gmail.com</Text>
         <Entypo style={{marginLeft:172,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />
         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'36%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>Mobile Number</Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>+919524456211</Text>
         <Entypo style={{marginLeft:168,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />
         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'36%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 


</View>


<View style={styles.thirdContainer}>

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:38,
         }}>Change Password</Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>***********</Text>
         <Entypo style={{marginLeft:169,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />

         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>PaymentOption Saved Cards</Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>4327  XXXX  XX57</Text>
         <Entypo style={{marginLeft:169,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />

         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 

<Text style={{
          color:"#08595D",
          marginLeft:10,
          marginTop:10,
         }}>Feedback</Text>
          <Text style={{
          color:"white",
          marginLeft:10,
          marginTop:5,
          fontSize:13
         }}>Lorem ipsum...</Text>
         <Entypo style={{marginLeft:169,marginTop:-18}} 
        name="edit" size={14}  color='white'
        />

         <Text style={{
          borderBottomWidth:0.5,
          borderBottomColor:'#08595D',
          width:'90%',
          marginLeft:10,
          marginTop:-10
         }} ></Text> 


    </View>
   
  
    </ImageBackground>  

    );
  }
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:'25%',
        backgroundColor:'#0E3137'
      },
      firstContainer:{
        marginTop:-320,
        marginLeft:180,       
        flex:4.5, 
        
         width:500
      },
      thirdContainer:{
        flex:2.5,
        marginTop:-500,
        marginLeft:400,
       
      },
 

});