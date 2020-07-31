import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage,
  ListView, 
  ActivityIndicator, 
   Alert,
   FlatList,
   BackHandler
} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class testingProfile extends Component {

static navigationOptions = ({ navigation }) => {
  return {

    headerBackground: (
      <Image
        style={{marginLeft:45,marginTop:5,width:'20%',height:'80%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}
        source={require('./images/logo_web.png')}
      />
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                color:'white',
            },
    
    headerLeft: 
      
      <View style={{flexDirection:'row'}}>
      <Button title='About' onPress={() => navigation.navigate('Login')} >
        <Icon style={{marginLeft:17,}} 
        name="users" size={26}  color='#69b3f6'
        />
        </Button>
        <Text style={{
           color:"red",
            marginLeft:10,
            textAlign:'center',
            fontSize:12
         }}>Friends </Text>
        

        <TouchableOpacity  onPress={navigation.navigate('') }>
        <Icon style={{marginLeft:17}} 
        name="gift" size={26}  color='#69b3f6'
        />
         <Text style={{
           color:"red",
            textAlign:'center',
            fontSize:12,
            marginLeft:7
         }} >Rewards </Text>
         </TouchableOpacity>

       <TouchableOpacity  onPress={navigation.navigate('') }>
        <FontAwesome style={{marginLeft:15}} 
        name="envelope-o" size={26}  color='#69b3f6'
        />
         <Text style={{
           color:"red",
            textAlign:'center',
            fontSize:12,
            marginLeft:5
         }} >Messages </Text>
          </TouchableOpacity>

        <TouchableOpacity  onPress={navigation.navigate('') }>  
        <AntDesign style={{marginLeft:30}} 
        name="select1" size={26}  color='#69b3f6'
        />
         <Text style={{
           color:"red",   
           textAlign:'center',
           fontSize:12,
           marginLeft:5
         }} >Room Selection </Text>
         </TouchableOpacity>

        </View>,
     
  headerRight: 
   
         <View style={{flexDirection:'row',justifyContent:'space-around'}}>

          <TouchableOpacity  onPress={navigation.navigate('') }>
        <Ionicons style={{marginLeft:65}} 
        name="md-search" size={28}  color='#69b3f6'
        />
        <Text style={{
           color:"red",   
           textAlign:'center',
           fontSize:12,
           marginRight:-95
         }} > Search </Text>
        </TouchableOpacity>


         <TouchableOpacity  onPress={navigation.navigate('') }>
        <Ionicons style={{marginRight:25
        }} 
        name="ios-notifications-outline" size={28}  color='#69b3f6'
        />
          <Text style={{
           color:"red",   
           textAlign:'center',
           fontSize:12,
           marginLeft:25
         }} > Notifications </Text>
        </TouchableOpacity>


         <TouchableOpacity  onPress={navigation.navigate('') }>
        <AntDesign style={{marginLeft:15,}} 
        name="setting" size={28}  color='#69b3f6'
        />
          <Text style={{
           color:"red",   
           textAlign:'center',
           fontSize:12,
           marginLeft:15
         }} > Settings </Text>
        </TouchableOpacity>


         <TouchableOpacity  onPress={navigation.navigate('') }>
        <Icon style={{marginLeft:25}} 
        name="user-circle" size={28}  color='#69b3f6'
        />
          <Text style={{
           color:"red",   
           textAlign:'center',
           fontSize:12,
           marginLeft:10
         }} > Profile </Text>
        </TouchableOpacity>


        </View>
  }
};

constructor() {
super();
this.state = {

id:'',
email:'',
mobile_no:'',
password:'',
age:'',
dob:'',
screenName :'',
profilePic1:'',
profilePic:'',
referalCode:'', 
gender:'', 
city:'', 
country:'',
tagline:'',
      isLoading: true,
      text: '',
      img : [],
      usersimg: [],
      usersimg1:[],
      count:'',

}
 this.arrayholder = [] ;
}

screenName = (text) => 
  {
        this.setState({ screenName: text })
  }
  city = (text) => 
  {
        this.setState({ city: text })
  }

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {

    return true;  // Do nothing when back button is pressed
  }

componentWillMount() {
  this.getDetailsApi();
  this.userflatApi();
  this.joinflatApi();
  }




  userflatApi(){
fetch('http://18.204.139.44:3005/usersList')
      .then((response) => response.json())
      .then((responseJson) => {

  

        this.setState({
          isLoading: false,
          dataSource: responseJson.list,  
          count : responseJson.usercount,

        } 
        );
      })
      .catch((error) => {
        console.error(error);
      
 }); 
}




joinflatApi(){
    fetch('http://18.204.139.44:3005/usersList')
      .then((response) => response.json())
      .then((responseJson) => {
   
        this.setState({
          isLoading: false,
          dataSource1: responseJson.list,
         
        } 
        );
      })
      .catch((error) => {
        console.error(error);
      
 }); 
}
  
  async getDetailsApi()
{

var id1 = await AsyncStorage.getItem('_id');

var data={
// _id:id1
_id:"5ca1e21b61e49d13e49c81c1"
}
console.log(data);
fetch('http://18.204.139.44:3005/usersignupdetail', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}).then((response) => response.json())
.then((responseJson) => {
console.log(responseJson);


this.setState({
  screenName:responseJson.Result[0].screenName,
  profilePic1:responseJson.Result[0].profilePic,

})


})
.catch((error) => {
console.error(error);
}); 
}




_onRefresh = () => {
    this.setState({refreshing: true});
    this.getDetailsApi().then(() => {
      this.setState({refreshing: false});
    });
  }

 GetListViewItem (screenName) {
    
   Alert.alert(screenName);
  
  }

    ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 


  render() {
     if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
 <ImageBackground source={require('./images/Splash_bg.png')} 
 style={{
  width: '100%', 
  height: '100%'}}>

  <View style={{flexDirection:"row"}}>
<Text style={{
          color:"white",
          marginLeft:10,
          marginTop:10

         }}>Online Users</Text> 
<Text style={{
          color:"white",
            marginLeft:10,
            marginTop:10,
            width: 30,
            height: 25,
            textAlign:'center',
            backgroundColor: "#CC5B88"
         }}>{this.state
          .count}</Text>
</View>


      <View style={styles.container}>
     
      <FlatList

          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          
<View style={styles.firstContainer}>
<View style={{flexDirection:"row"}}>

        <Image
          style={{
            width: 50, 
            height: 50,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: '10%',
            marginLeft:"3%",
            borderRadius:25,
            marginBottom:10}}
           source={{uri: 'http://18.204.139.44/AalapApi/uploads/'+item.profilePic}}
         />
<View style={{marginLeft:5,marginTop:7}} >  

        <Text style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:15}}>{item.screenName}</Text>
       <Text style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:15}}>{item.city}</Text>
         
  </View>
  </View>
   </View>
          }
          keyExtractor={item => item.screenName}
        />


      




      <View style={styles.secondContainer}>
       <View style={{flexDirection:"row"}}>
        <Image source={require('./images/message.png')} 
          style={{
            width: 25, 
            height: 30,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"3%",
            marginBottom:10}} />
        <View style={{marginLeft:15,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:8,
          }}>Clarke</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Welcome to aalap...</Text>
        </View>
        <Entypo style={{marginLeft:"15%",marginTop: "6%",}} 
        name="attachment" size={20}  color='white'   />
        </View>
        
        <View style={{width:"100%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />

         <View style={{flexDirection:"row"}}>
        <Image source={require('./images/message.png')} 
          style={{
            width: 25, 
            height: 30,
            justifyContent:'flex-start',
            marginTop:"5%",
            alignItems:"center",
            marginTop: "5%",
            marginLeft:"3%",
            marginBottom:10}} />
        <View style={{marginLeft:15,marginTop:7}} >    
        <Text 
         style={{
          color:"white",
          marginTop:"10%",
          marginLeft:"4%",
          fontSize:8,
          }}>Paul</Text>
        <Text 
         style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>Hai, how are you?</Text>
        </View>
        </View>
        
        <View style={{width:"100%", height: 1,marginTop:"2%", backgroundColor: '#4065a5'}} />
      </View>





    <FlatList
          data={this.state.dataSource1}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          
   
<View style={{flex:1, flexDirection: 'column', margin: 10,}}>


     <Image
          style={{
            width: 50, 
            height: 50,
            justifyContent:'center',
            textAlign:'center',
            marginTop:"10%",
            alignItems:'center',
            marginTop: '18%',
            borderRadius:25,
            marginLeft:"35%",
            borderRadius:25,
            marginBottom:10}}
           source={{uri: 'http://18.204.139.44/AalapApi/uploads/'+item.profilePic}}
         />
        <Text style={{
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          marginLeft:"4%",
          fontSize:15}}>{item.screenName}</Text>
         <Text  style={{
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          marginLeft:"4%",
          fontSize:15}}>{item.city}</Text>

         
         
         </View>
          }
          keyExtractor={item => item.city}
        />

   
       
          
      </View>
    </ImageBackground>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
  },
  firstContainer:{
    flex:.7,
    

  },
  secondContainer:{
    flex:1.5,
  
  },
  thirdContainer:{
    flex:.7,
      backgroundColor:'#25344c',
  },
  input: {
    margin: 5,
    height: 40,
    width:320,
    padding:10,
    justifyContent:'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid', 
    overflow: 'hidden', 
    borderColor: 'grey',
    backgroundColor:'#1f2c3f',
    marginVertical: 12,
    marginTop:25
},

});