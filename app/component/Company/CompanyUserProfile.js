import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,ImageBackground,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import DrawerLayout from 'react-native-drawer-layout';
import { DrawerActions } from 'react-navigation';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';


export default class CompanyDashboard extends Component {
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
     
    addButn(){
      this.props.navigation.navigate('CreateMoment');
    }
    edit(){
       this.props.navigation.navigate('EditDetails');
    }
    block(){
    	this.props.navigation.navigate('Block');
    }
    
   
  
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

  
render(){
    return (
   <ScrollView>
      <View style={styles.container}> 
         
          <View style={{marginLeft:42,marginTop:68}}>
             <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
               <TouchableOpacity      activeOpacity={1.1}  >
               <Text style = {styles.LoginButtontxt}>Follow</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>

            <Image source={require('../images/fb.png')} style={{width: 110, height: 115,marginTop: -118,marginLeft:135}} />

            <View style={{marginLeft:289,marginTop:-35}}>
             <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.loginButton} colors={['#69b3f6', '#25d0de']} >
               <TouchableOpacity      activeOpacity={1.1}  >
               <Text style = {styles.LoginButtontxt}>Suggest</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>

            <AntDesignIcon style={{marginLeft:185,marginTop:10}}
            name='ellipsis1'
            size={24}
            color='grey'
            />

            <View >
            <Text style={styles.signUpText}>Facebook</Text>
            </View>

            <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginLeft:0}}>
             <Text style={{marginTop:135,marginLeft:45}}>00</Text>
              <Text style={{marginTop:155,marginLeft:-29}}>Followers</Text>

              <Text style={{marginTop:135,marginLeft:45}}>00</Text>
              <Text style={{marginTop:155,marginLeft:-29}}>Photos</Text>

              <Text style={{marginTop:135,marginLeft:45}}>00</Text>
              <Text style={{marginTop:155,marginLeft:-29}}>Videos</Text>

              <Text style={{marginTop:135,marginLeft:45}}>00</Text>
              <Text style={{marginTop:155,marginLeft:-29}}> Tags</Text>
            
            </View>

            <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginLeft:0}}>
              < Icon style={{marginLeft:39,marginTop:18}}
               name='user'
                size={24}
                color='tomato'/>
            <Text style={{marginTop:45,marginLeft:-33}}> Profile</Text>

            < Icon style={{marginLeft:39,marginTop:28}}
               name='retweet'
                size={24}
                color='grey'/>

            < Icon style={{marginLeft:39,marginTop:28}}
               name='tree'
               size={22}
               color='grey'/>

            < Icon style={{marginLeft:39,marginTop:28}}
               name='heart-outlined'
               size={22}
               color='grey'/>

            < Icon style={{marginLeft:39,marginTop:28}}
               name='location-pin'
               size={22}
               color='grey'/>
            </View>

            <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginLeft:12}}>

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.submit()}>
               <Text style = {styles.submitButText}>Professional Info</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.cancelButton} colors={['#ecece9', '#e3dede']} >
             <TouchableOpacity
                activeOpacity={1.5}     
                  onPress = {() => this.next() }>
              <Text style = {styles.cancelButText}>Personal Info</Text>
             </TouchableOpacity>

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style={{width:50,height:50,marginLeft:92, borderRadius:50,}} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.addButn() }>
             <FontAwesomeIcon style={{marginLeft:19,marginTop:13}}
               name='plus'
                size={22}
                color='white'
               />

             </TouchableOpacity>
           </LinearGradient>  
         </LinearGradient>    
         </View>
          <BottomNavigation style={{marginLeft:5,marginTop:10,height:50,backgroundColor:'white'}}
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
container:{
    flex:1,
    marginVertical:10
  },
text: {
    padding: 9,
    margin: 8,
    marginLeft:135,
    margin:12,
    fontSize: 22,
    height: 43,
    width:282,
    color:'black',
    marginTop:25,
   },
   freindstxt:{
     color: 'black',
     padding: 1,
     fontSize:18,
     marginLeft:15,
     marginTop:15,
  },
  signUpText:{
    color:'black',
    marginLeft:145,
    fontSize:25,
    fontWeight:'bold',
    marginTop:5
  },
 cancelButton:{
      margin: 20,
    marginVertical: 20,
    height: 43,
    width: 140,
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
    marginLeft:10,
    width: 140,
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
  loginButton: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:70,
    color:'blue'

   },
  LoginButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
   })