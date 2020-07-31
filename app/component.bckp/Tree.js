import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import {NavigationActions,StackActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerActions } from 'react-navigation';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';

export default class Tree extends Component {
    
      static navigationOptions = ({ navigation }) => {
    return {
      title: 'YAASS',
        headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
            },
    
    headerLeft: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
            <Icon style={{marginLeft:9,}} name="menu" size={30}  color='black'
         onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                  </TouchableOpacity>,
    headerRight: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
          <Icon style={{marginLeft:9,}} name="magnifying-glass" size={30}  color='black'
            onPress={() => navigation.navigate('SearchResults')} />
                  </TouchableOpacity>,
  }
};

profile(){
    this.props.navigation.navigate('Profile');
  }
  moments(){
    this.props.navigation.navigate('Moments');
  }
  intersts(){
     this.props.navigation.navigate('Interests');
  }
  location(){
    this.props.navigation.navigate('Location');
  }


render(){
    
    return (
    <ScrollView>
      <View style={{}}>

        <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:5}}>
              < Icon style={{marginLeft:35,marginTop:28}}
               name='user'
               onPress = {() => this.profile()}
                size={24}
                color='grey'/>
              
              < Icon style={{marginLeft:39,marginTop:28}}
                name='retweet'
                onPress = {() => this.moments()}
                size={24}
                color='grey'/>
             
            < Icon style={{marginLeft:39,marginTop:18}}
               name='tree'
               size={26}
               color='tomato'/>
             <Text style={{marginLeft:-50,marginTop:57}}> Family & Freinds</Text>

            < Icon style={{marginLeft:-10,marginTop:28}}
               name='heart-outlined'
                onPress = {() => this.intersts()}
               size={22}
               color='grey'/>

            < Icon style={{marginLeft:39,marginTop:28}}
               name='location-pin'
               onPress = {() => this.location()}
               size={22}
               color='grey'/>
       </View>       
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  cancelButton:{
      margin: 20,
    marginVertical: 20,
    height: 43,
    marginLeft:-25,
    width: 110,
   backgroundColor:'rgba(255,255,255,0.5)',
  },
  cancelButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
  submitBut:{
    margin: 20,
    marginVertical: 20,
    height: 43,
    marginLeft:33,
    width: 110,
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
})