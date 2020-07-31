import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,TextInput,
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
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class ProfileEdit extends Component {
    
   static navigationOptions = ({ navigation }) => {
    return {
      title: 'YAASS',
      headerBackground: (
      <Image
        style={{width: wp('100%'), height: hp('8.5%')}}
        source={require('./images/Mask.png')}
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

        <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'space-between',marginTop:5}}>
              <View>
                < Icon style={{marginLeft:35,marginTop:18}}
                  name='user'
                  size={26}
                  color='tomato'/>
             <Text style={{marginTop:8,fontWeight:'bold',marginLeft:26}} >Profile</Text>
            <View   style={{borderBottomColor: '#69b3f6',marginTop:9,width:72,
            marginLeft:12,  borderBottomWidth: 2, }}   />
              </View>

               < Icon style={{marginLeft:15,marginTop:28}}
               name='retweet'
                size={22}
                 onPress = {() => this.moments()}
                color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='tree'
               size={22}
               onPress = {() => this.tree()}
               color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='heart-outlined'
               size={22}
               onPress = {() => this.intersts()}
               color='grey'/>

            < Icon style={{marginRight:'4%',marginTop:28}}
               name='location-pin'
               size={22}
               onPress = {() => this.location()}
               color='grey'/>
       </View> 

        <View style={{ marginLeft:'5%',marginRight:15,textAlign:'center',justifyContent:'center', flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:5}}>
        <Icon style={{marginLeft:29,marginTop:32}}
            name='edit'
            size={20}
            color='grey'
             onPress = {() => this.edit()} />
        <LinearGradient style = {styles.submitBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.submit()}>
               <Text style = {styles.submitButText}>Personal Info</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient style = {styles.cancelButton} colors={['#ecece9', '#e3dede']} >
             <TouchableOpacity
                activeOpacity={1.5}     
                  onPress = {() => this.next() }>
              <Text style = {styles.cancelButText}>Professional Info</Text>
            </TouchableOpacity>
          </LinearGradient>

         <Icon style={{marginTop:32,marginLeft:'2%'}}
            name='eye'
            size={20}
            color='grey'
             onPress = {() => this.edit()} />   
       </View>


       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'center',marginTop:18}}>
       <Text style={{marginLeft:'-5%',color:'#69b3f6'}}>G E N E R A L  I N F O</Text> 
       <Text style={{marginLeft:35,color:'grey'}}>B U C K E T  L I S T</Text> 
       </View>

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <Icon style={{marginLeft:28,marginTop:18}}
            name='user'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Name *</Text>
        <TextInput style={styles.input}> Ellis Perry</TextInput>
      
          <MenuContext style={styles.container}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='venus-double'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Sex *</Text>
        <TextInput style={styles.input1}> Female</TextInput>
          <MenuContext style={styles.container}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons style={{justifyContent:'center',marginLeft:'2%',marginTop:5}}
              name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='child-care'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}> Date of Birth *</Text>
        <TextInput style={styles.input2}> 16 May,1996</TextInput>
        < FontIcon style={{marginLeft:-25,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
           <MenuContext style={{marginLeft:'29%',marginRight:'2%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='heart'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9,fontSize:14}}> Orientation *</Text>
        <TextInput style={styles.input3}> male,Straight</TextInput>
          <MenuContext style={styles.container1}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='search'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Partners Looking for *</Text>
        <TextInput style={styles.input4}>Myself and 4+</TextInput>
          <MenuContext style={styles.container1}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons style={{marginLeft:'15%',marginRight:'-1%',}} name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialCommunityIcons style={{marginLeft:27,marginTop:18}}
            name='ring'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:14}}>Marratial Status *</Text>
        <TextInput style={styles.input5}>Single</TextInput>
        < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
          <MenuContext style={{marginLeft:'33%',marginRight:'2%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row',}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='location-city'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Current City *</Text>
        <TextInput style={styles.input6}>New York</TextInput>
        < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
          <MenuContext style={styles.container}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons style={{marginLeft:'33%',marginRight:'2%',justifyContent:'center'}} name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='flag'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Nationality*</Text>
        <TextInput style={styles.input7}>Indian</TextInput>
        < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
          <MenuContext style={{marginLeft:'25%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

       <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='globe'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Citizenship, Residency</Text>
        <TextInput style={styles.input8}>USA</TextInput>
        < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
          <MenuContext style={{marginLeft:'37%',marginRight:'2%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='language'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Languages Known</Text>
        <TextInput style={styles.input9}>English, Hindi</TextInput>
     
          <MenuContext style={styles.container1}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontAwesome5 style={{marginLeft:27,marginTop:18}}
            name='city'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Cities Lived in</Text>
         <TextInput style={styles.input10}>Delhi, London</TextInput>
         < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
           <MenuContext style={{marginLeft:'25%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <MaterialIcons style={{marginLeft:27,marginTop:18}}
            name='flight'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Countries Traveled </Text>
        <TextInput style={styles.input11}>India, USA</TextInput>
          < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
          <MenuContext style={{marginLeft:'33%',marginRight:'2%',justifyContent:'center'}}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

      <View style={{  flexDirection: 'row',marginTop:2,justifyContent:'flex-start',marginTop:18}}>
        <FontIcon style={{marginLeft:27,marginTop:18}}
            name='language'
            size={16}
            color='grey'/>
        <Text style={{marginTop:18,marginLeft:9}}>Visas</Text>
        <TextInput style={styles.input12}> London</TextInput>
         < FontIcon style={{marginLeft:-28,marginTop:18}}
               name='sort'
               size={22}
               color='black'/>
           <MenuContext style={styles.container}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons style={{marginLeft:'25%',justifyContent:'center'}} name='public'
                size={16}
                color='grey'/>              
            </MenuTrigger>
            <MenuOptions style={{}} >
              <MenuOption style={{flexDirection:'row'}}>
               <MaterialIcons name='public'
                size={16}
                color='#69b3f6'/>
                <Text style={{ color: '#69b3f6',marginLeft:19 }}>Public</Text>  
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

       <LinearGradient style={{width:50,height:50,marginLeft:292, borderRadius:50,marginTop:-25}} colors={['#69b3f6', '#25d0de']} >
           <TouchableOpacity
              activeOpacity={1.5}     
               onPress = {() => this.addButn() }>
            <FontIcon style={{marginLeft:17.5,marginTop:15}}
               name='plus'
                size={22}
                color='white'
               />
         </TouchableOpacity>
       </LinearGradient>   

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
 input: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'23%',
    fontWeight:'bold',
    color:'black',
    margin: 5,
    width:wp('30%'),
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    marginVertical: 8
  },
  input1: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'27%',
    width:wp('30%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input2: {
    marginTop:3,
     marginRight:'0%',
    marginLeft:'14%',
    width:wp('34%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input3: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'16%',
    width:wp('34%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input4: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'4%',
    width:wp('38%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input5: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'9%',
    width:wp('35%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input6: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'16%',
    width:wp('33%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input7: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'18%',
    width:wp('33%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
   input8: {
   marginTop:3,
    marginLeft:'3%',
    width:wp('39%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
   input9: {
    marginTop:3,
    marginLeft:'9%',
    width:wp('35%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
   input10: {
    marginTop:3,
    marginLeft:'15%',
    width:wp('33%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
   input11: {
   marginTop:3,
    marginLeft:'8%',
    width:wp('35%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },
  input12: {
    marginTop:3,
    marginRight:'0%',
    marginLeft:'29%',
    width:wp('29%'),
    fontWeight:'bold',
    color:'black',
    margin: 5,
    height: 30,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#fbfbfb',
    height:50,
    marginVertical: 8
  },

  cancelButton:{
      margin: 20,
    marginVertical: 20,
    height: 43,
    marginLeft:-25,
    borderRadius:5,
    width: '33%',
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
    borderRadius:5,
   width: '33%',
  },
  submitButText:{
    color: 'white',
    textAlign:'center',
    marginTop:10
    },
  container: {
    flex: 1,
    marginLeft:'15%',
    marginRight:'-1%',
    flexDirection:'row',
    backgroundColor: '#fff',
    marginTop:19,
  },
  container1: {
    flex: 1,
    marginRight:'0%',
    marginLeft:'15%',
    flexDirection:'row',
    backgroundColor: '#fff',
    marginTop:19,
  },
})