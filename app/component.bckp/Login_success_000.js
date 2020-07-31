import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,FitImage,Button,ImageBackground,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import {NavigationActions,StackActions} from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';



export default class Login_success extends Component {
    
    static navigationOptions = {
        title: 'YAASS',
    headerTitleStyle: {
      fontWeight: '200',
      color: 'black',
      marginLeft:85,
      flex: 1,
    },
   headerRight:<Icon style={{marginRight:16,marginTop:5}}
       name='magnifying-glass'
       size={24}
       color='grey'
     />

    }
     createMoment () {
     this.props.navigation.navigate('CreateMoment');
   }

render(){
    
    return (
      <ScrollView>
      <View style={{alignItems: 'center'}}>
       <ImageBackground source={require('./images/ceo.png')} style={{width:'100%',marginLeft:1, height:300,marginTop: 5,marginBottom: 15}} >
        <View style={{  flexDirection: 'row',marginTop:15,marginLeft:-5}}>
       <Image source={require('./images/yass-dummy-logo.png')} style={{width:100,marginLeft:1, height:75,marginBottom: 15}} />
          <Text style={{color:'white',fontSize:17,marginLeft:-15}}>Ellis Perry</Text>
          <Icon style={{marginLeft:165}}
              name='dots-three-vertical'
              size={24}
              color='#fff'/>  
        </View>
        <Text style={{color:'white',fontSize:14.5,marginTop:-65,marginLeft:85}}>Solution Manager </Text>
        <Text style={{color:'white',fontSize:14.5,marginTop:5,marginLeft:85}}>12 hours ago </Text>

      <View style={{  flexDirection: 'row',marginTop:145,marginLeft:-60}}> 
             <Text style={{color:'violet',fontSize:14.5,marginTop:-65,marginLeft:85}}>#beachday  </Text>
             <Text style={{color:'white',fontSize:14.5,marginTop:-65,marginLeft:12}}> Miaomi Beach  </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginTop:-35,marginLeft:21}}> 
       <Icon style={{}}
              name='location-pin'
              size={24}
              color='#fff'/> 
             <Text style={{color:'white',fontSize:14.5,}}>Miami </Text>
             <Text style={{color:'white',fontSize:14.5,}}> Tampa Florida </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginTop:5,marginLeft:21}}> 
             <Text style={{color:'white',fontSize:14.5,marginLeft:12}}>00 </Text>
             <Text style={{color:'white',fontSize:14.5,marginLeft:25}}> 00 </Text>
             <Text style={{color:'white',fontSize:14.5,marginLeft:30}}> 00 </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginLeft:31}}>
          <Icon style={{}}
              name='share'
              size={24}
              color='#fff'/> 

          <Icon style={{marginLeft:22}}
              name='message'
              size={24}
              color='#fff'/>
          <Icon style={{marginLeft:32}}
              name='heart'
              size={24}
              color='#fff'/> 

          <Icon style={{marginLeft:163,}}
              name='bookmark'
              size={26}
              color='#fff'/> 
        </View>

     
      <View style={{  flexDirection: 'row',marginTop:55,marginLeft:0}}> 
            <Icon style={{marginLeft:165}}
              name='share'
              size={24}
              color='#fff'/> 
       </View>       
        </ImageBackground>  


        <ImageBackground source={require('./images/ceo.png')} style={{width:'100%',marginLeft:1, height:300,marginTop: 5,marginBottom: 15}} >
        <View style={{  flexDirection: 'row',marginTop:15,marginLeft:-5}}>
       <Image source={require('./images/yass-dummy-logo.png')} style={{width:100,marginLeft:1, height:75,marginBottom: 15}} />
          <Text style={{color:'white',fontSize:17,marginLeft:-15}}>Ellis Perry</Text>
          <Icon style={{marginLeft:165}}
              name='dots-three-vertical'
              size={24}
              color='#fff'/>  
        </View>
        <Text style={{color:'white',fontSize:14.5,marginTop:-65,marginLeft:85}}>Solution Manager </Text>
        <Text style={{color:'white',fontSize:14.5,marginTop:5,marginLeft:85}}>12 hours ago </Text>

      <View style={{  flexDirection: 'row',marginTop:145,marginLeft:-60}}> 
             <Text style={{color:'violet',fontSize:14.5,marginTop:-65,marginLeft:85}}>#beachday  </Text>
             <Text style={{color:'white',fontSize:14.5,marginTop:-65,marginLeft:12}}> Miaomi Beach  </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginTop:-35,marginLeft:21}}> 
       <Icon style={{}}
              name='location-pin'
              size={24}
              color='#fff'/> 
             <Text style={{color:'white',fontSize:14.5,}}>Miami </Text>
             <Text style={{color:'white',fontSize:14.5,}}> Tampa Florida </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginTop:5,marginLeft:21}}> 
             <Text style={{color:'white',fontSize:14.5,marginLeft:12}}>00 </Text>
             <Text style={{color:'white',fontSize:14.5,marginLeft:25}}> 00 </Text>
             <Text style={{color:'white',fontSize:14.5,marginLeft:30}}> 00 </Text>
       </View> 

       <View style={{  flexDirection: 'row',marginLeft:31}}>
          <Icon style={{}}
              name='share'
              size={24}
              color='#fff'/> 

          <Icon style={{marginLeft:22}}
              name='message'
              size={24}
              color='#fff'/>
          <Icon style={{marginLeft:32}}
              name='heart'
              size={24}
              color='#fff'/> 

          <Icon style={{marginLeft:170,}}
              name='bookmark'
              size={26}
              color='#fff'/> 
        </View>
 
      <ActionButton style={{marginTop:-25,marginLeft:-25}}
         buttonColor="#25d0de"
          onPress = {() => this.createMoment()}>
         >
        </ActionButton>   
        </ImageBackground>       
      </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

text: {
    padding: 9,
    margin: 8,
    marginLeft:15,
    margin:12,
    fontSize: 22,
    height: 43,
    width:282,
    color:'#fff',
    marginTop:5,
   },
})