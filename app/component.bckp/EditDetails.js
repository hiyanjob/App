import React, { Component } from 'react'
import { Text, 
         StatusBar,
         StyleSheet,
         Image,
         View ,
         ToastAndroid,
         AsyncStorage, 
         ActivityIndicator,
         TouchableOpacity,
         TextInput,
         Alert,
         alert,
         ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import Dropdown from 'react-native-modal-select-option';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class EditDetails extends Component { 
   static navigationOptions = {
     title: 'Edit Details' ,
      headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('./images/Mask.png')}
      />
    ), 
      
  headerTintColor: 'white',
 
    headerTitleStyle:{
      fontWeight: '500',
      color: 'white',
      marginLeft:80,
      marginRight:80,
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center'
    },
    }
constructor() {
        super();
        this.state = {
            textInputValue: '',
            id:'',
            firstname:'',
            lastname:'',
            name:'',
            age:'',
            partner:'',
            Edesignation :'',
            Elocation:'', 
            EtoMonth:'', 
            EtoYear:'', 
            Wdesignation:'',
            Wlocation:'',
            WtoMonth:'',
            WtoYear:'',
            bio:'',
            location:''
        }
    }


    name = (text) => 
   {
      this.setState({ name: text })
   }
    age = (text) => 
   {
      this.setState({ age: text })
   }
   partner = (text) => 
   {
      this.setState({ partner: text })
   }
   Wlocation = (text) => 
   {
      this.setState({ Wlocation: text })
   }
    Wdesignation = (text) => 
   {
      this.setState({ Wdesignation: text })
   }
    Edesignation = (text) => 
   {
      this.setState({ Edesignation: text })
   }
    bio = (text) => 
   {
      this.setState({ bio: text })
   }
    location = (text) => 
   {
      this.setState({ location: text })
   }


componentDidMount() {
this.getDetailsApi();
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

console.log(responseJson); 


this.setState({
  firstname:responseJson.personal[0].firstName,
  lastname:responseJson.personal[0].lastName,
  name:responseJson.personal[0].name,
  age:responseJson.personal[0].dob,
  partner:responseJson.personal[0].partnerLooking,
  location:responseJson.personal[0].location,


  Edesignation:responseJson.profession[0].designation,
  Elocation:responseJson.profession[0].location,
  EtoMonth:responseJson.profession[0].toMonth,
  EtoYear:responseJson.profession[0].toYear,


 Wdesignation:responseJson.profession[1].designation,
 Wlocation:responseJson.profession[1].location,
 WtoMonth:responseJson.profession[1].toMonth,
 WtoYear:responseJson.profession[1].toYear,


})

console.log(this.state.firstname);

})
.catch((error) => {
console.error(error);
}); 
}

async saveExit(){
   var id2 = await AsyncStorage.getItem('_id');
   console.log(id2);

   var data1={
       _id:id2,
      "name":this.state.name,
      "pPrivacy":"2",
      "dob":this.state.age,
      "location":this.state.location,
      "partnerforme":this.state.partner,
      "bio":this.state.bio,
      "cmpypost":this.state.Wdesignation,
      "eduname":this.state.Edesignation

}


fetch('http://18.204.139.44:3003/editUserDetails', {
method: 'POST',
headers: {
   Accept: "application/json",
'Content-Type': 'application/json',
},
body: JSON.stringify(data1),
}).then((response) => response.json())
.then((responseJson) => {


// Alert.alert(JSON.stringify(responseJson));
 this.props.navigation.navigate('Dashboard');

})
.catch((error) => {
console.error(error);
}); 
}


render(){ 
    return (
      <ScrollView>
       <View style={{}}>
        <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:29,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Name</Text>  
          <MenuContext style={styles.container}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

              <MenuOption  style={{flexDirection:'row'}}>
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
      <TextInput style = {styles.input}
         placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value={this.state.name}
         onChangeText = {this.name}/>

      <Text style={{marginLeft:29,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Profile Privacy</Text> 
        <View style={{flexDirection:'row'}}>
         <TextInput style = {styles.input}
           placeholder = "Invisible"
           placeholderTextColor = "grey"
           autoCapitalize = "none"
            returnKeyType="next"
           onChangeText = {this.handleEmail}/> 
       <Icon style={{marginLeft:-25,marginTop:21}}
         name='sort'
         size={16}
         color='black'/>
      </View>  
     
     <View style={{  flexDirection: 'row',marginTop:2,}}>
        <Text style={{marginLeft:29,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Date of Birth</Text>  
        <MenuContext style={styles.container1}>
           <View>       
            <Menu>
            <MenuTrigger >
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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
    <View style={{flexDirection:'row'}}>
      <TextInput style = {styles.input}
          placeholderTextColor = "grey"
           autoCapitalize = "none"
            returnKeyType="next"
            value={this.state.age}
           onChangeText = {this.age}/> 
      <Icon style={{marginLeft:-25,marginTop:21}}
         name='sort'
         size={16}
         color='black'/>
    </View>  

    <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:29,marginTop:19,fontWeight:'bold',fontSize:13.5,color:'black'}}>Location</Text>  
          <MenuContext style={styles.container2}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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
      <TextInput style = {styles.input}
         placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value={this.state.location}
         onChangeText = {this.location}/>


     <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:29,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Are you looking for a Life Partner?</Text>  
          <MenuContext style={styles.container3}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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
      <TextInput style = {styles.input}
         placeholder = "Yes"
         placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         onChangeText = {this.handleEmail}/>

    <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:23,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Suggesting a Life Partner for your family</Text>  
          <MenuContext style={styles.container4}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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
     <Text style={{marginLeft:25,fontWeight:'bold',fontSize:11.5,color:'black'}}>and freinds?</Text>
      <TextInput style = {styles.input}
         placeholder = "Yes"
         placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         onChangeText = {this.handleEmail}/>


     <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:23,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Current Designation</Text>  
          <MenuContext style={styles.container5}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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

      <TextInput style = {styles.input}
        placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value={this.state.Wdesignation}
         onChangeText = {this.Wdesignation}/>


     <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:23,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Education</Text>  
          <MenuContext style={styles.container6}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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

      <TextInput style = {styles.input}
        placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value={this.state.Edesignation}
         onChangeText = {this.Edesignation}/>

    <View style={{  flexDirection: 'row',marginTop:2,}}>
         <Text style={{marginLeft:27,marginTop:19,fontWeight:'bold',fontSize:11.5,color:'black'}}>Bio</Text>  
          <MenuContext style={styles.container7}>
           <View>       
            <Menu>
            <MenuTrigger>
              <MaterialIcons name='public'
                size={16}
                color='grey'/>
              <Text style={{ color: 'grey',marginLeft:19,marginTop:-18 }}>Public</Text>
              <MaterialIcons style={{marginLeft:65,marginTop:-16.5}}
                 name='expand-more'
                 size={16}
                 color='grey'/>
            </MenuTrigger>
            <MenuOptions>

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

      <TextInput style = {styles.input}
         placeholderTextColor = "grey"
         autoCapitalize = "none"
         returnKeyType="next"
         value = {this.state.bio}
         onChangeText = {this.bio}/>


    <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.finisBut} colors={['#69b3f6', '#25d0de']} >
      <TouchableOpacity
            activeOpacity={1.5}               
               onPress = { () => this.saveExit() }>
               <Text style = {styles.contifinishButtontxt}>Save & Exit</Text>
      </TouchableOpacity>
    </LinearGradient>

      </View>
    </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    marginLeft:'65%',
    marginRight:'5%',
    marginTop:19,
  },
  container1: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
     marginLeft:'61%',
      marginRight:'5%',
    marginTop:19,
  },
  container2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    marginLeft:'61%',
    marginRight:'5%',
    marginTop:19,
  },
  container3: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
     marginLeft:'35%',
    marginRight:'5%',
    marginTop:19,
  },
  container4: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
     marginLeft:'30%',
     marginRight:'8%',
    marginTop:19,
  },
  container5: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
     marginLeft:'58%',
    marginTop:19,
  },
  container6: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
     marginLeft:'65%',
    marginTop:19,
  },
  container7: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    marginLeft:'68%',
    marginTop:19,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  input: {
    height: 40,
    width:'86.5%',
    marginLeft:22.5,
    padding:10,
    borderBottomWidth:1,
    borderColor: 'grey',
    fontSize:12,
    color:'grey',
    height:50,
  },
  finisBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:'86%',
    color:'blue',
    marginTop:25,
    marginLeft:25
   },
});