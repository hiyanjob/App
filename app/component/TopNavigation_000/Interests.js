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

export default class Interests extends Component {
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'YAASS',
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
  tree(){
    this.props.navigation.navigate('Tree');
  }
  moment(){
     this.props.navigation.navigate('Moments');
  }
  location(){
    this.props.navigation.navigate('Location');
  }


render(){
    
    return (
    <ScrollView>
      <View style={{}}>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'space-between',marginTop:5}}>
              < Icon style={{marginLeft:35,marginTop:28}}
               name='user'
                size={22}
                color='grey'/>
               < Icon style={{marginLeft:39,marginTop:28}}
               name='retweet'
                size={22}
                 onPress = {() => this.moments()}
                color='grey'/>
            < Icon style={{marginRight:'4%',marginTop:28}}
               name='tree'
               size={22}
               onPress = {() => this.tree()}
               color='grey'/>
           
           <View>
            < Icon style={{marginRight:'4%',marginTop:18}}
               name='heart-outlined'
               size={26}
               onPress = {() => this.intersts()}
               color='#3c1351'/>
            <Text style={{marginLeft:-14,marginTop:8,fontWeight:'bold'}} >Interests</Text>
           <View   style={{borderBottomColor: '#69b3f6',marginTop:9,width:65,
            marginLeft:-18,  borderBottomWidth: 2, }}   />
            </View>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='location-pin'
               size={22}
               onPress = {() => this.location()}
               color='grey'/>
       </View> 
      </View>
    </ScrollView>
    );
  }
}

