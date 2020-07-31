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

export default class Profile extends Component {
    
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

       <View style={{ marginLeft:5,marginRight:15, flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:5}}>

        <Icon style={{marginLeft:29,marginTop:27}}
            name='edit'
            size={20}
            color='grey'
             onPress = {() => this.edit()} />
        <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.submit()}>
               <Text style = {styles.submitButText}>Personal Info</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.cancelButton} colors={['#ecece9', '#e3dede']} >
             <TouchableOpacity
                activeOpacity={1.5}     
                  onPress = {() => this.next() }>
              <Text style = {styles.cancelButText}>Professional Info</Text>
            </TouchableOpacity>
          </LinearGradient>

         <Icon style={{marginTop:27,marginRight:'5%',marginLeft:'-2%'}}
            name='eye'
            size={20}
            color='grey'
             onPress = {() => this.edit()} />   
       </View>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
       <Text style={{marginLeft:35,color:'#69b3f6'}}>G E N E R A L  I N F O</Text> 
       <Text style={{marginLeft:55,color:'grey'}}>B U C K E T  L I S T</Text> 
       </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <Icon style={{marginLeft:28,marginTop:18}}
            name='user'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Name *</Text>
        <Text style={{marginTop:18,marginLeft:117,fontWeight:'bold',color:'black'}}> Ellis Perry</Text>
      </View>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='venus-double'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Sex *</Text>
        <Text style={{marginTop:18,marginLeft:135,fontWeight:'bold',color:'black'}}> Female</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='child-care'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Date of Birth *</Text>
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='location-city'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Current City *</Text>
        <Text style={{marginTop:18,marginLeft:88,fontWeight:'bold',color:'black'}}>New York</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='flag'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Nationality*</Text>
        <Text style={{marginTop:18,marginLeft:98,fontWeight:'bold',color:'black'}}>Indian</Text>
      </View>

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='globe'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Citizenship, Residency</Text>
        <Text style={{marginTop:18,marginLeft:36,fontWeight:'bold',color:'black'}}>USA</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='language'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Languages Known</Text>
        <Text style={{marginTop:18,marginLeft:58,fontWeight:'bold',color:'black'}}>English, Hindi</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontAwesome5 style={{marginLeft:27,marginTop:18}}
            name='city'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Cities Lived in</Text>
        <Text style={{marginTop:18,marginLeft:75,fontWeight:'bold',color:'black'}}>Delhi, London</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='flight'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Countries Traveled </Text>
        <Text style={{marginTop:18,marginLeft:45,fontWeight:'bold',color:'black'}}>India, USA</Text>
      </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='language'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Visas</Text>
        <Text style={{marginTop:18,marginLeft:133,fontWeight:'bold',color:'black'}}>France, London</Text>
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