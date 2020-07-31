import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,ImageBackground,Alert,alert,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { DrawerActions } from 'react-navigation';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';


export default class CompanyDashboard extends Component {
  static navigationOptions = ({ navigation }) => {
   return {
    title: 'YAASS',
    headerBackground: (
      <Image
        style={{width:'100%',height:'100%',}}
        source={require('../images/Mask.png')}
      />
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                color:'white',
                marginLeft:'-5%'
            },
    
    headerLeft: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          >
            <Icon style={{marginLeft:9,}} name="menu" size={30}  color='white' />
                  </TouchableOpacity>,
    headerRight: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
            <Icon style={{marginLeft:9,}} name="magnifying-glass" size={30}  color='white'
         onPress={() => navigation.navigate('SearchResults')} />
                  </TouchableOpacity>,
  }
};



constructor() {
super();
this.state = {

id:'',
}
}


     
  addButn(){
    this.props.navigation.navigate('CreateMoment');
  }
  edit(){
     this.props.navigation.navigate('EditCompanyInterest');
  }
  block(){
    this.props.navigation.navigate('Block');
  }
  profile(){
    this.props.navigation.navigate('Profile');
  }
  freinds(){
    this.props.navigation.navigate('Profile');
  }
  photo(){
    this.props.navigation.navigate('Photos');
  }
  videos(){
    this.props.navigation.navigate('Videos');
  }
  familyFrds(){
    this.props.navigation.navigate('Tree');
  }
  tags(){
    this.props.navigation.navigate('Tags');
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
          <Icon style={{marginLeft:'17%',marginTop:164}}
            name='edit'
            size={22}
            color='#69b3f6'
             onPress = {() => this.edit()} />

            <Image source={require('../images/fb.png')} style={{width: 125,marginLeft:'2%',borderRadius:15, height: 130,marginTop: -148,marginLeft:135}} />

             <AntDesignIcon style={{marginLeft:185,marginTop:10}}
            name='ellipsis1'
            size={24}
            color='grey'
            />

            <EvilIcons style={{marginLeft:289,marginTop:-35}}
            name='gear'
            size={24}
            color='#69b3f6'
            onPress = {() => this.settings()}/>

            <View style={{flexDirection:'row',textAlign:'center',marginTop:5}} >

            <Text style={{color:'black',textAlign:'center',marginLeft:'35%',fontSize:21,fontWeight:'bold',marginTop:25}}>
            Facebook</Text>
            <Icon style={{marginTop:32,marginLeft:'2%'}}
             name='dots-three-vertical'
             size={17.5}
             color='black' />
      </View>

       <View style={{flexDirection:'row',textAlign:'center',marginLeft:-25,justifyContent:'center'}}>  
          <Text style={{marginLeft:14,marginTop:11,fontWeight:'500'}}>
           Information Technology</Text>
       </View>

        <View style={{flexDirection:'row',fontWeight:'500',textAlign:'center',justifyContent:'center',marginTop:12}}>
           <EvilIcons style={{marginLeft:'-5%'}}
             name='location'
             size={19}
             color='black'  />
          <Text style={{marginLeft:'2%'}}>France, Germay</Text>
        </View>

        <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',marginTop:10}}>
          <FontAwesomeIcon style={{marginLeft:'-10%'}}
            name='briefcase'
            size={19}
            color='grey'/>
          <Text style={{marginLeft:12}}>Public </Text>
        </View>

       <View style={{flexDirection:'row',textAlign:'center',marginTop:10,justifyContent:'center',}}>
          <AntDesignIcon style={{marginLeft:'-5%'}}
              name='user'
              size={19}
              color='black' />
          <Text style={{marginLeft:'1%'}}>100K Employees </Text>
       </View>

       <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',marginTop:10}}>
         <Feather style={{marginLeft:'-5%'}}
            name='globe'
            size={19}
            color='black'   />
         <Text style={{marginLeft:'1%'}}>facebook.com </Text>
      </View>
<Text style={{marginLeft:14,marginRight:14,marginTop:17,textAlign:'center'}}>American online social media and social networking service company. It is based in Menlo Park, California. Its was founded by Mark Zuckerberg and devoled with freinds</Text>

    

      <View style={{  flexDirection: 'row',marginLeft:0,marginBottom:'5%'}}>
         <View style={{marginTop:30,marginLeft:'7%'}}>
          <Text style={{fontWeight:'bold',color:'black',textAlign:'center',fontSize:19}}>00</Text>
            <Text onPress = {() => this.familyFrds()}>Followers</Text>
      </View>  
      <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
            height:'60%',}}/>

        <View style={{marginTop:30,marginLeft:'8%'}}>    
            <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
              <Text  onPress = {() => this.photo()} >Photos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'8%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text  onPress = {() => this.videos()} >Videos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'9%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text  onPress = {() => this.tags()} >Tags</Text>
             </View>
             
            </View>
           
            <View style={{  marginLeft:'2%',flexDirection: 'row',marginTop:2,justifyContent:'space-between',marginLeft:0}}>
              <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.profile()}>
              < Icon style={{marginLeft:39,marginTop:18}}
               name='user'
                size={24}
                color='tomato'/>
              <Text style={{marginTop:12,marginLeft:30}}> Profile</Text>
              <View
               style={{marginTop:1,width:'95%',marginLeft:19,borderBottomColor: 'tomato',
            borderBottomWidth: 1, }}   />
            </TouchableOpacity>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='retweet'
                size={24}
                color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='tree'
               size={22}
               color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='heart-outlined'
               size={22}
               color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='location-pin'
               size={22}
               color='grey'/>
            </View>
      <View style={{backgroundColor:'#e7e7e7'}}>
        
        <View
           style={{
            marginTop:1,
            width:'95%',
            marginLeft:19,
            borderBottomColor: '#c5c2cc',
            borderBottomWidth: 1,
          }}
        />
      </View> 
 
        <View style={{  flexDirection: 'row',marginTop:-9,justifyContent:'center',marginLeft:'5%'}}>
          <LinearGradient style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.getDetailsApi()}>
               <Text style = {styles.submitButText}>Personal Info </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient style = {styles.cancelButton} colors={['#ecece9', '#e3dede']} >
             <TouchableOpacity
                activeOpacity={1.5}     
                  onPress = {() => this.next() }>
              <Text style = {styles.cancelButText}>Professional Info</Text>
             </TouchableOpacity>
         </LinearGradient> 
         </View>

        <LinearGradient style={{width:50,height:50,marginLeft:'85%',marginTop:-23, borderRadius:40,}} colors={['#69b3f6', '#25d0de']} >
          <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.addButn() }>
          <FontAwesomeIcon style={{marginLeft:19,marginTop:15}}
               name='plus'  size={22}    color='white'  />
          </TouchableOpacity>
        </LinearGradient> 

          <BottomNavigation style={{marginLeft:5,marginTop:10,marginBottom:15,height:50,backgroundColor:'white'}}
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
    marginVertical:10,
    textAlign:'center',
    justifyContent:'center'
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
cancelButton:{
    marginVertical: 20,
    marginLeft:-25,
    height: 43,
    width: '45%',
    borderRadius:5,
   backgroundColor:'rgba(255,255,255,0.5)',
  },
cancelButText:{
    color: 'black',
    textAlign:'center',
    marginTop:10
    },
submitBut:{
    margin: 20,
    marginVertical: 20,
    height: 43,
    marginLeft:'1%',
    width: '45%',
    borderRadius:8,
  },
submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
})