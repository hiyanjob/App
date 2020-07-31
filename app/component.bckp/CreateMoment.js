import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'

export default class CreateMoment extends Component {
    
    static navigationOptions = {
     title: 'Create Moment' , 
     headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('./images/Mask.png')}
      />
    ), 
      headerStyle: {
        backgroundColor: '#fff',
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

render(){
    
    return (
      <View style={{marginLeft:175}}>
       <View style={{  flexDirection: 'row',marginTop:20,}}>
       <Image source={require('./images/yass-dummy-logo.png')} style={{width:100,marginLeft:-170, height:75,marginBottom: 15}} />
       <Text style={{color:'black',fontSize:17,fontWeight:'bold',marginLeft:-8}}>Ellis Perry</Text>
       <View style={{  flexDirection: 'row',marginTop:30,}}>
       <Icon style={{marginLeft:-79,}}
              name='globe'
              size={21}
              color='black'/>  
      
       </View>
       <Text style={{color:'black',fontSize:15,marginLeft:-52,marginTop:32}}>Public</Text>
       <EvilIconsIcon style={{marginTop:32.5,}}
              name='chevron-down'
              size={23}
              color='grey'/>
       </View>
       <TextInput style={{height: 50,marginLeft:-129}}
          placeholder="Create Post.."
          onChangeText={(text) => this.setState({text})}
        />

       <View  style={{marginLeft:-169, marginTop:125,borderBottomColor: '#d5d2da', borderBottomWidth: 1,width:'200%'}}/>  
       <View style={{  flexDirection: 'row',marginTop:20,}}>
       </View>

       <View style={{  flexDirection: 'row',marginTop:15,}}>
       <View style={{marginLeft:-138}}>
          <Icon style={{}}
              name='camera'
              size={25}
              color='green'/>
        </View>

        <View style={{marginLeft:68}}>
          <Icon style={{}}
              name='video-camera'
              size={25}
              color='skyblue'/>
        </View>

        <View style={{marginLeft:68}}>
          <Icon style={{}}
              name='price-tag'
              size={25}
              color='orange'/>
        </View>

        <View style={{marginLeft:68}}>
          <Icon style={{}}
              name='location-pin'
              size={25}
              color='violet'/>
        </View> 
       </View>

       <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
                activeOpacity={1.5}
                onPress = {() => this.postCmt()}>
                <Text style = {styles.LoginButtontxt}>Post moment</Text>
            </TouchableOpacity>
            </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
     marginTop: 30,
    height: 50,
    width:'180%',
    padding:10,
    marginLeft:-185,
    borderColor: 'grey', 
    marginVertical: 10
   },
  LoginButtontxt:{
    color: 'white',
    padding: 2,
    textAlign:'center'
   },
})