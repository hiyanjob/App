import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,ImageBackground,Alert,alert,
     View ,RefreshControl ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { createStackNavigator,createAppContainer,DrawerNavigator,createDrawerNavigator } from 'react-navigation';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
  return {
    title: 'YAASS',
    headerBackground: (
      <ImageBackground    style={{width:'100%',height:'180%'}}
        source={require('./images/header_dashboard.png')}>
      <Image source={require('./images/ceo.png')} style={{width: 120, height: 130,marginTop: 100,justifyContent:'center',textAlign:'center',alignSelf:'center',borderRadius:18}} />
      </ImageBackground>
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                color:'white'
            },
    
    headerLeft: 
      <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }>
        <Icon style={{marginLeft:9,}} name="menu" size={30}  color='white'
        onPress={() =>navigation.navigate('emptySample')}
        />
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
refreshing: false,
id:'',
firstname:'',
lastname:'',
name:'',
age:'',
dob:'',
partner:'',
Edesignation :'',
Elocation:'', 
EtoMonth:'', 
EtoYear:'', 
Wdesignation:'',
Wlocation:'',
WtoMonth:'',
WtoYear:'',

}
}

componentDidMount() {
this.getDetailsApi();
}

_onRefresh = () => {
    this.setState({refreshing: true});
    this.getDetailsApi().then(() => {
      this.setState({refreshing: false});
    });
  }


async getDetailsApi()
{

var id1 = await AsyncStorage.getItem('_id');

var data={
_id:id1
}

fetch('http://18.204.139.44:3003/dashboardUser', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {

this.setState({
  firstname:responseJson.personal[0].firstName,
  lastname:responseJson.personal[0].lastName,
  name:responseJson.personal[0].name,
  age:responseJson.personal[0].age,
  partner:responseJson.personal[0].partnerLooking,
  dob:responseJson.personal[0].dob,

  Edesignation:responseJson.profession[0].designation,
  Elocation:responseJson.profession[0].location,
  EtoMonth:responseJson.profession[0].toMonth,
  EtoYear:responseJson.profession[0].toYear,


 Wdesignation:responseJson.profession[1].designation,
 Wlocation:responseJson.profession[1].location,
 WtoMonth:responseJson.profession[1].toMonth,
 WtoYear:responseJson.profession[1].toYear,

})

})
.catch((error) => {
console.error(error);
}); 
}

     
  addButn(){
    this.props.navigation.navigate('CreateMoment');
  }
  edit(){
     this.props.navigation.navigate('EditDetails');
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

  box(){
    this.props.navigation.navigate('box')
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
      pressColor: 'grey',
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
    
   <ScrollView   refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}/>    }>

      <View style={styles.container}> 
       <View style={{marginTop:135,flexDirection: 'row',justifyContent: 'space-around',}}>
          <TouchableOpacity  onPress = {() => this.edit()}>
          <Image source={require('./images/Dashboard/profile_edit.png')} 
          style={{width: 120, height: 120,}} />
          </TouchableOpacity>
        
          <AntDesignIcon style={{marginTop:45,justifyContent:'center',textAlign:'center',alignSelfL:'center',marginRight:50}}
            name='ellipsis1'
            size={24}
            color='grey'   />
      <TouchableOpacity  onPress = {() => this.block()}>
        <Image  source={require('./images/Dashboard/profile_block.png')} 
          style={{width: 20, height: 20,marginTop:25,marginRight:60}} />
      </TouchableOpacity>  
        </View>    
   
        <View style={{marginTop:-25,justifyContent: 'space-around',flexDirection:'row',textAlign:'center',}} >
            <Text style={{color:'black',marginLeft:'33%',justifyContent:'center',alignSelf:'center',textAlign:'center',fontSize:21,fontWeight:'bold',}}>
            {this.state.name}</Text>
           
            <Text style={{color:'black',fontSize:21,marginLeft:10,fontWeight:'bold',marginTop:0}}>
            {this.state.age}</Text>

      <MenuContext >
        <View>   
          <Menu>
            <MenuTrigger>
            <MaterialIcons style={{marginLeft:'6%',marginRight:'6%',color:'#69b3f6',marginTop:2}} 
                name='public'
                size={22.5}
                color='grey'/> 
            </MenuTrigger>
            <MenuOptions>

          <MenuOption style={{flexDirection:'row'}}>
             <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
             <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text> 
             <AntDesignIcon style={{marginLeft:'52%'}} name='check'
               size={18} color='#69b3f6'/>

               </MenuOption>

              <MenuOption style={{flexDirection:'row'}}>
                <MaterialIcons name='people-outline'
                  size={16}
                  color='grey'/>
                <Text style={{ color: 'grey',marginLeft:19  }}>Connected Members</Text>
              </MenuOption>
            
            <MenuOption style={{flexDirection:'row'}}>
              <MaterialIcons 
                 name='remove-red-eye'
                 size={16}
                 color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19  }}>Invisible</Text>
             </MenuOption>

            </MenuOptions>
          </Menu>  
      </View>
      </MenuContext>
            </View>

            <View style={{flexDirection:'row'}}>
                 <EvilIcons style={{marginLeft:118,marginTop:20}}
                name='heart'
                size={20}
                color='black'
                />
                <Text style={{marginLeft:14,marginTop:17}}>{this.state.partner}</Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <Icon style={{marginLeft:68,marginTop:17}}
                name='briefcase'
                size={19}
                color='black'  />
              <Text style={{marginLeft:14,marginTop:17}}>{this.state.Edesignation}</Text>
            </View>

             <View style={{flexDirection:'row'}}>
                 <FontAwesomeIcon style={{marginLeft:62,marginTop:17}}
                name='graduation-cap'
                size={19}
                color='black'/>
                <Text style={{marginLeft:14,marginTop:17}}>{this.state.Wdesignation} </Text>
             </View>
            <Text style={{marginLeft:14,marginTop:17,textAlign:'center'}}>"A software engineer is a person who applies the principles of software engineering to the design" </Text>

            <View style={{  flexDirection: 'row',marginLeft:0,marginBottom:'5%'}}>
              <View style={{marginTop:30,marginLeft:'7%'}}>
               <Text style={{fontWeight:'bold',color:'black',textAlign:'center',fontSize:19}}>00</Text>
                <Text style={{color:'#a5b1b7',fontWeight:"400"}} onPress = {() => this.familyFrds()}>Friends</Text>
            </View>  
            <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'8%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text style={{color:'#a5b1b7',fontWeight:"400"}}  onPress = {() => this.photo()} >Photos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'8%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text style={{color:'#a5b1b7',fontWeight:"400"}}  onPress = {() => this.videos()} >Videos</Text>
             </View>
              <View style={{marginTop:35,marginLeft:'6%',borderLeftWidth: 1,borderLeftColor: '#c5c2cc',
                height:'60%',}}/>

            <View style={{marginTop:30,marginLeft:'9%'}}>    
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black',fontSize:19}}>00</Text>
                <Text style={{color:'#a5b1b7',fontWeight:"400"}}  onPress = {() => this.tags()} >Tags</Text>
             </View>
             
            </View>
           
            <View style={{ flexDirection: 'row',marginTop:2,justifyContent:'space-around',marginLeft:0,marginBottom:15}}>
              <TouchableOpacity  activeOpacity={1.5} onPress = {() => this.profile()}>
               <Image source={require('./images/Dashboard/ic_prof.png')} style={{width: 20, height: 20,marginTop: 35,marginLeft:'20%',}} />
               <Text style={{marginTop:2,marginLeft:'12.5%',fontWeight:"500"}}> Profile</Text>
            </TouchableOpacity>

          <Image source={require('./images/Dashboard/ic_profile_tab_relations.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />
            
          <Image source={require('./images/Dashboard/ic_profile_tab_tree.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />

             
          <Image source={require('./images/Dashboard/ic_profile_tab_heart.png')} 
          style={{width: 20, height: 20,marginRight:'16%',marginTop: 42,}} />

          <Image source={require('./images/Dashboard/ic_profile_tab_location.png')} 
          style={{width: 20, height: 20,marginRight:'8%',marginTop: 42,}} />  

          </View>
          <View
               style={{marginTop:10,width:'18%',marginLeft:9,borderBottomColor: 'tomato',
            borderBottomWidth: 3, }}   />
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
 
        <View style={{  flexDirection: 'row',marginTop:-9,justifyContent:'center',marginLeft:'5%',marginVertical:25}}>
          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.getDetailsApi()}>
               <Text style = {styles.submitButText}>Personal Info </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.cancelButton} colors={['#ecece9', '#e3dede']} >
             <TouchableOpacity
                activeOpacity={1.5}     
                  onPress = {() => this.next() }>
              <Text style = {styles.cancelButText}>Professional Info</Text>
             </TouchableOpacity>
              <Image source={require('./images/addButton.png')} 
         style={{width: 80, height: 90,marginTop:0,justifyContent: 'flex-end',alignSelf:'flex-end',marginLeft:4,marginRight:4}} />  
         </LinearGradient> 
         </View>


        <BottomNavigation style={{marginLeft:5,marginTop:25,marginBottom:15,height:70,backgroundColor:'white'}}
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
    backgroundColor:'#FFFFFF',
    alignSelf:'stretch'
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
     color: '#a5b1b7',
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