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
      <ImageBackground
       style={{width:'100%',height:'160%'}}
        source={require('../images/header_dashboard.png')} >
      <Image source={require('../images/fb.png')} style={{width: 110, height: 110,marginTop: 70,justifyContent:'center',textAlign:'center',alignSelf:'center',borderRadius:18}} />
     </ImageBackground>
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                justifyContent:'center',
                color:'white',
                
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
  companyProfile(){
    this.props.navigation.navigate('CompanyProfile');
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
          <View style={{marginTop:105,flexDirection: 'row',justifyContent: 'space-around',}}>
          <TouchableOpacity  onPress = {() => this.edit()}>
          <Image source={require('../images/Dashboard/profile_edit.png')} 
          style={{width: 120, height: 120,}} />
          </TouchableOpacity>
        
          <AntDesignIcon style={{marginTop:30,justifyContent:'center',textAlign:'center',alignSelfL:'center',marginRight:50}}
            name='ellipsis1'
            size={24}
            color='grey'   />
      <TouchableOpacity  onPress = {() => this.block()}>
        <EvilIcons style={{marginTop:25,marginRight:'15%'}}
            name='gear'
            size={24}
            color='#69b3f6'
            onPress = {() => this.settings()}/>
      </TouchableOpacity>  
        </View>  

     <View style={{marginTop:-45,justifyContent: 'space-around',flexDirection:'row',textAlign:'center',}} >

            <Text style={{color:'black',fontSize:21,fontWeight:'bold',marginLeft:'35%'}}>
            Facebook</Text>
            <Icon style={{marginRight:'30%',marginTop:5}}
             name='dots-three-vertical'
             size={17.5}
             color='black' />
      </View>

       <View style={{flexDirection:'row',textAlign:'center',marginLeft:-25,justifyContent:'center'}}>  
          <Text style={{marginLeft:14,marginTop:11,fontWeight:'400'}}>
           Information Technology</Text>
       </View>

        <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',marginTop:12}}>
           <EvilIcons style={{marginLeft:'-5%'}}
             name='location'
             size={19}
             color='black'  />
          <Text style={{marginLeft:'2%',fontWeight:"400"}}>France, Germay</Text>
        </View>

        <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',marginTop:10}}>
          <FontAwesomeIcon style={{marginLeft:'-10%'}}
            name='briefcase'
            size={19}
            color='grey'/>
          <Text style={{marginLeft:12,fontWeight:"200"}}>Public </Text>
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
            <Text style={{color:'#a5b1b7',fontWeight:"400"}} onPress = {() => this.familyFrds()}>Followers</Text>
      </View>  
      <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
            height:'60%',}}/>

        <View style={{marginTop:30,marginLeft:'8%'}}>    
            <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
              <Text  style={{color:'#a5b1b7',fontWeight:"400"}} onPress = {() => this.photo()} >Photos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'8%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text  style={{color:'#a5b1b7',fontWeight:"400"}} onPress = {() => this.videos()} >Videos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'9%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text style={{color:'#a5b1b7',fontWeight:"400"}} onPress = {() => this.tags()} >Tags</Text>
             </View>
             
            </View>
           
        <View style={{ marginTop:'-25%',flexDirection: 'row',marginTop:2,justifyContent:'space-around',marginLeft:0,marginBottom:8}}>
            <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.companyProfile()}>
               <Image source={require('../images/Dashboard/ic_prof.png')} style={{width: 20, height: 20,marginTop: 35,marginLeft:'25%',}} />
               <Text style={{marginLeft:'12.5%',fontWeight:"500"}}> Profile</Text>
          </TouchableOpacity>

          <Image source={require('../images/Dashboard/ic_profile_tab_relations.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
            
          <Image source={require('../images/Dashboard/ic_profile_tab_tree.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />

             
          <Image source={require('../images/Dashboard/ic_profile_tab_location.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
  
         
       </View>
        <Image source={require('../images/addButton.png')} 
         style={{width: 60, height: 65,marginTop:-30,justifyContent: 'flex-end',alignSelf:'flex-end',marginLeft:4,marginRight:4}} />      
       

    <BottomNavigation style={{marginLeft:5,marginTop:5,marginBottom:15,height:50,backgroundColor:'white'}}
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
     fontFamily:'Proximanova',
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
    fontFamily:'Proximanova',
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
    fontFamily:'Proximanova',
    marginTop:10
    },
})