import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import {NavigationActions,StackActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from 'react-navigation';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';

export default class Moments extends Component {
    
   static navigationOptions = ({ navigation }) => {
    return {
      title: 'YAASS',
       headerStyle: {
          backgroundColor: '#fff',
           height:80,
        },
      headerTintColor: '#a5b1b7',
       headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('../images/Mask.png')}
      />
    ), 
        headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                color: 'white',
            },
    
    headerLeft: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
            <Icon style={{marginLeft:9,}} name="menu" size={30}   color='white'
         onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                  </TouchableOpacity>,
    headerRight: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
          <Icon style={{marginLeft:9,}} name="magnifying-glass" size={30}   color='white'
            onPress={() => navigation.navigate('SearchResults')} />
                  </TouchableOpacity>,
  }
};

profile(){
    this.props.navigation.navigate('Profile');
  }
  tree(){
    this.props.navigation.navigate('Tree');
  }
  intersts(){
     this.props.navigation.navigate('Interests');
  }
  location(){
    this.props.navigation.navigate('Location');
  }


render(){
    <Text style={{textAlign:'center',marginLeft:16,marginTop:8}} > Moments</Text>
    return (
    <ScrollView>
      <View style={{}}>
 <View style={{ flexDirection: 'row',marginTop:2,justifyContent:'space-around',marginLeft:0,marginBottom:15}}>
            <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.profile()}>   
            <Image source={require('../images/Dashboard/ic_prof.png')} style={{width: 20, height: 20,marginLeft:'18%',marginTop:35,marginRight:'8%'}} />
          </TouchableOpacity>
       
          <Image  source={require('../images/Dashboard/ic_profile_tab_relations.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
        

        <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.tree()}>
          <Image  source={require('../images/Dashboard/ic_profile_tab_tree.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
        </TouchableOpacity>
        
        <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.intersts()}>     
          <Image  source={require('../images/Dashboard/ic_profile_tab_heart.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
        </TouchableOpacity>

        <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.location()}>
          <Image  source={require('../images/Dashboard/ic_profile_tab_location.png')} 
          style={{width: 20, height: 20,marginRight:'8%',marginTop: 42,}} />  
        </TouchableOpacity>
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