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

export default class Rewards extends Component {

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
            borderBottomWidth: 2,
            borderBottomColor: 'white',
            marginBottom: -750
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
    
   
   
   
         <View style={styles.container}>
         
          <ScrollView >
   <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:13
   
            }}>EARN</Text> 
   
   <View style={{flexDirection:'row'}}>
         <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:20,
             fontSize:12
            }}>Refer a Friend*</Text> 
           <Text style={{
             color:"#218B90",
             marginLeft:84,
             marginTop:20,
             fontSize:12
            }}
            >10 Coins</Text>
           </View>
   
   
   
   <View style={{flexDirection:'row'}}>
         <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:12
            }}>Share your Phone Book*</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:36,
             marginTop:12,
             fontSize:12
            }}
            >10 Coins</Text>
            </View>
          
   <View style={{flexDirection:'row'}}>
             <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:12
            }}>Rate us 5 on Appstore</Text>
               <Text style={{
             color:"#218B90",
             marginLeft:45,
             marginTop:12,
             fontSize:12
            }}
            >25 Coins</Text>
            </View>
           
   <View style={{flexDirection:'row'}}>
         <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:12
            }}>Like&Share us on Facebook</Text>
                <Text style={{
             color:"#218B90",
             marginLeft:14,
             marginTop:11,
             fontSize:12
            }}
            >25 Coins</Text>
            </View>
           
   <View style={{flexDirection:'row'}}>
             <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:12
            }}>Like&Share us on Instagram</Text> 
                <Text style={{
             color:"#218B90",
             marginLeft:14,
             marginTop:11,
             fontSize:12
            }}
            >25 Coins</Text>
            </View>
           
  
         
   
   <Text>    </Text>
   
   
   <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:11
   
            }}>*Invite Your friends to join AALAP</Text> 
           
   <View style={{flexDirection:'row'}}>
         <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:10,
             fontSize:11

            }}>*When your lead downloads and registers in AALAP,you earn 10Chat days</Text> 
             
            </View>
           

            <View style={{flexDirection:'row',width:180,height:100,backgroundColor:'#153540',marginLeft:20,marginTop:20}}>
            
            <Image
            style={{width:20,height:20,marginLeft:20,marginTop:10}}
            source={require('./images/giftbox.png')}/>

            <Text style={{
             color:"white",
             marginLeft:10,
             marginTop:10,
             fontSize:11,
            }}>Usage Bonus</Text>

         
          
            </View>
            
            <Text></Text>
            <Text></Text>
            <Text></Text>
   
            </ScrollView>
            </View>
   
   
   
         <View style={styles.firstContainer}>
           <ScrollView>
         <Text style={{
             color:"#218B90",
             marginLeft:25,
             marginTop:50,
             fontSize:13,
            }}>PURCHASE -Buy ChatDays*</Text>
        <View style={{flexDirection:'row',width:160,height:230,backgroundColor:'#153540',marginLeft:20,marginTop:20}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:5,
             fontSize:11,
            }}>Days</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:20,
             marginTop:5,
             fontSize:11,
            }}>Price</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:5,
             fontSize:11,
            }}>Rewards</Text>
            </View>
            
            <Text style={{
             color:"#218B90",
             marginLeft:-135,
             marginTop:35,
             fontSize:11,
            }}>1</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:35,
             fontSize:11,
            }}>INR 5</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:35,
             fontSize:11,
            }}>1Coin</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-123,
             marginTop:65,
             fontSize:11,
            }}>5</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:65,
             fontSize:11,
            }}>INR 18</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:65,
             fontSize:11,
            }}>5Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-136,
             marginTop:90,
             fontSize:11,
            }}>10</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:90,
             fontSize:11,
            }}>INR 36</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:28,
             marginTop:90,
             fontSize:11,
            }}>10Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-140,
             marginTop:120,
             fontSize:11,
            }}>15</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:120,
             fontSize:11,
            }}>INR 55</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:25,
             marginTop:120,
             fontSize:11,
            }}>15Coins</Text>






<Text style={{
             color:"#218B90",
             marginLeft:-140,
             marginTop:148,
             fontSize:11,
            }}>30</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:30,
             marginTop:148,
             fontSize:11,
            }}>INR 99</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:25,
             marginTop:148,
             fontSize:11,
            }}>30Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-140,
             marginTop:180,
             fontSize:11,
            }}>180</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:25,
             marginTop:180,
             fontSize:11,
            }}>INR 549</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:18,
             marginTop:180,
             fontSize:11,
            }}>200Coins</Text>
            <Text style={{
             color:"#218B90",
             marginLeft:-145,
             marginTop:210,
             fontSize:11,
            }}>365</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:25,
             marginTop:210,
             fontSize:11,
            }}>INR 999</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:210,
             fontSize:11,
            }}>500Coins</Text>

            </View>

            <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>Ad free version (Half-yearly)Rs.599/-150Coins</Text>
            <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>Ad free version (Half-yearly)Rs.999/-500Coins</Text>
            <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>180 days Unlimited**@Rs.999/-300Coins,</Text>
            <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>1year Unlimited**@Rs.999/-550Coins</Text>
            <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>(*For Ad free versions,please buy Ad free options</Text>
<Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:20,
             fontSize:7,
            }}>separately 
            **Unlimited version is ad free)</Text>




       </ScrollView>
       </View>

      <View style={styles.thirdContainer}>
      
         <Text style={{
             color:"#218B90",
             marginLeft:35,
             marginTop:25,
             fontSize:13,
            }}>REDEEM</Text>
             <Text style={{
             color:"#218B90",
             marginLeft:100,
             marginTop:-18,
             fontSize:13,
            }}>+ Credit INR 15</Text>
             
       <View style={{flexDirection:'row',width:170,height:230,backgroundColor:'#153540',marginLeft:25,marginTop:20}}>
        <View style={{flexDirection:'row'}}>
       
        <Text style={{
             color:"#218B90",
             marginLeft:5,
             marginTop:5,
             fontSize:10,
            }}>ChatDays</Text>
              <Text style={{
             color:"#218B90",



             marginLeft:10,
             marginTop:5,
             fontSize:10,
            }}>Purchased Date</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:5,
             fontSize:11,
            }}>Credit</Text>
            
            </View>
            <Text style={{
             color:"#218B90",
             marginLeft:-163,
             marginTop:35,
             fontSize:10,
            }}>1Day @ INR5</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:35,
             fontSize:10,
            }}>10/08/2018</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:15,
             marginTop:35,
             fontSize:10,
            }}>1Coin</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-163,
             marginTop:70,
             fontSize:10,
            }}>5Days @ INR18</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:70,
             fontSize:10,
            }}>12/08/2018</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:9,
             marginTop:70,
             fontSize:9,
            }}>5Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-170,
             marginTop:100,
             fontSize:10,
            }}>15Days @ INR55</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:100,
             fontSize:10,
            }}>24/08/2018</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:5,
             marginTop:100,
             fontSize:9,
            }}>15Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-170,
             marginTop:130,
             fontSize:10,
            }}>Friends Referral</Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:10,
             marginTop:130,
             fontSize:10,
            }}>27/08/2018</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:5,
             marginTop:130,
             fontSize:10,
            }}>10Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-175,
             marginTop:160,
             fontSize:10,
            }}>Like on Facebook </Text>
           
           <Text style={{
             color:"#218B90",
             marginLeft:3,
             marginTop:160,
             fontSize:10,
            }}>30/08/2018</Text>
              <Text style={{
             color:"#218B90",
             marginLeft:3,
             marginTop:160,
             fontSize:9,
            }}>10Coins</Text>

<Text style={{
             color:"#218B90",
             marginLeft:-170,
             marginTop:200,
             fontSize:10,
            }}>TOTAL CREDITS*</Text>
           
         
              <Text style={{
             color:"#218B90",
             marginLeft:55,
             marginTop:200,
             fontSize:10,
            }}>41Coins</Text>


          </View>

        
         
        </View> 

      
     
       </ImageBackground>  
   
       );
     }
   }
   
   const styles = StyleSheet.create({
       container: {
           height:280,
           
           width:'38%',
          // backgroundColor:'#0E3137'
         },
         firstContainer:{
           marginTop:-320,
           marginLeft:240,       
           flex:4.5, 
           
            width:500
         },
         thirdContainer:{
           flex:2.5,
           marginTop:-500,
           marginLeft:400,
           width:500
         },
    
   
   });