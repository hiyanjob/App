import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class CompanyImageCrop extends Component {
    
    static navigationOptions = {
   title: 'Company Logo' , 
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
    Create(){
      this.props.navigation.navigate('CompanyDashboard');
    }

render(){
    
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{alignItems: 'flex-end'}} >Image Picker </Text>
       
      <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.Create()
               }>
               <Text style = {styles.continButtontxt}>Save & Continue</Text>
            </TouchableOpacity>
        </LinearGradient>

       <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.Cancel()
               }>
               <Text style = {styles.continButtontxt}>Cancel</Text>
            </TouchableOpacity>
        </LinearGradient>

      </View>

    );
  }
}

const styles = StyleSheet.create({

continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:290,
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