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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';

export default class CompanyProfile extends Component {
    
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
                color:'white'
            },
    
    headerLeft: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
            <Icon style={{marginLeft:9,}} name="menu" size={30}  color='white'
         onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                  </TouchableOpacity>,
    headerRight: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
          <Icon style={{marginLeft:9,}} name="magnifying-glass" size={30}  color='white'
            onPress={() => navigation.navigate('SearchResults')} />
                  </TouchableOpacity>,
  }
};

 tabs = [
   {
      key: 'box',
      icon: 'box',
      pressColor: 'grey',
    },
    {
      key: 'message',
      icon: 'message',
      pressColor: 'grey'
    },
    {
      key: 'bell',
      icon: 'bell',
      pressColor: 'grey'
    },
    {
      key: 'user',
      icon: 'user',
      pressColor: 'grey'
    },

  ]
 
  renderIcon = icon => ({ isActive }) => (
    <Icon size={20} color="grey" name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
  moments(){
    this.props.navigation.navigate('Moments');
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
    
    return (
    <ScrollView>
      <View style={{}}>

       <View style={{ flexDirection: 'row',marginTop:2,justifyContent:'space-around',marginLeft:0,marginBottom:15}}>
        <View style={{flex:1,marginLeft:'3%',marginTop: 35,justifyContent:'center',alignSelf:'center'}}>      
           <Image source={require('../images/Dashboard/ic_prof.png')} style={{width: 20, height: 20,marginLeft:'18%',marginRight:'8%'}} />
           <Text style={{fontWeight:"500",marginRight:"5%",marginRight:"5%",marginTop:8}}> Profile</Text>
        </View>

        <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.moments()}>
          <Image  source={require('../images/Dashboard/ic_profile_tab_relations.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
        </TouchableOpacity>

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

      <View
               style={{marginTop:10,width:'18%',marginLeft:9,borderBottomColor: 'tomato',
            borderBottomWidth: 3, }}   />

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <Icon style={{marginLeft:28,marginTop:18}}
            name='user'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Name</Text>
        <Text 
        style={{
          marginTop:18,
          marginLeft:117,
          fontWeight:'bold',
          color:'black'}}> Facebook LLC</Text>
      </View>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='public'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Website</Text>
        <Text 
        style={{
          marginTop:18,
          marginLeft:102,
          fontWeight:'bold',
          color:'black'}}> www.fb.com</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialCommunityIcons style={{marginLeft:27,marginTop:18}}
            name='home-city-outline'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Headquarters</Text>
        <Text style={{marginTop:18,marginLeft:77,fontWeight:'bold',color:'black'}}> 16 May,1996</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='heart'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9,fontSize:14}}> Orientation *</Text>
        <Text style={{marginTop:18,marginLeft:91,fontWeight:'bold',color:'black'}}>Female, Straight</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='search'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Partners Looking for *</Text>
        <Text style={{marginTop:18,marginLeft:35,fontWeight:'bold',color:'black'}}>Myself and 4+</Text>
      </View>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialCommunityIcons style={{marginLeft:27,marginTop:18}}
            name='ring'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:14}}>Marratial Status *</Text>
        <Text style={{marginTop:18,marginLeft:58,fontWeight:'bold',color:'black'}}>Single</Text>
      </View>

        <Image source={require('../images/addButton.png')} 
         style={{width: 75, height: 75,marginTop:0,justifyContent: 'flex-end',alignSelf:'flex-end',marginLeft:4,marginRight:4}} />  

       <BottomNavigation style={{marginLeft:5,marginTop:5,height:50,backgroundColor:'white'}}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />    

      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  cancelButton:{
      margin: 20,
    marginVertical: 20,
   height: hp('5%'),
    marginLeft:-25,
    width: wp('32%'),
    borderRadius:5,
   backgroundColor:'rgba(255,255,255,0.5)',
  },
  cancelButText:{
    color: 'black',
    textAlign:'center',
    justifyContent:'center',
    marginTop:'4%',
    },
  submitBut:{
    margin: 20,
    marginVertical: 20,
    height: hp('5%'),
    marginLeft:33,
    width: wp('32%'),
    borderRadius:5
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    justifyContent:'center',
    marginTop:'4%',
    },
})