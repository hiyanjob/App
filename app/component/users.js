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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header, Container } from 'native-base';

export default class users extends Component {


  static navigationOptions = {
    header: null
  }

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
}

screenName = (text) => 
  {
    
        this.setState({ screenName: text })
  }


componentWillMount() {
  //this.getDetailsApi();
  this.userflatApi();
  
  }


  async userflatApi(){
    var id1 = await AsyncStorage.getItem('userID');
   
   var data={
   userID:id1
   }
   
   console.log(data);
   
   fetch('http://18.204.139.44:3005/usersList', {
   method: 'POST',
   headers: {
   'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
   }).then((response) => response.json())
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
//   async getDetailsApi()
// {

// var id1 = await AsyncStorage.getItem('userID');

// var data={
// userID:id1
// }
// console.log(data);
// fetch('http://18.204.139.44:3005/usersignupdetail', {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// }).then((response) => response.json())
// .then((responseJson) => {
// console.log(responseJson);
// this.setState({
//   screenName:responseJson.Result[0].screenName,
//   profilePic:responseJson.Result[0].profilePic 

// })


// })
// .catch((error) => {
// console.error(error);
// }); 
// }

async actionOnRow(_id) {
  this.props.navigation.navigate('RoomSelection');

}

_onRefresh = () => {
    this.setState({refreshing: true});
    this.getDetailsApi().then(() => {
      this.setState({refreshing: false});
    });
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

      <Container>
      <Header style={{ height: 65, backgroundColor: "#009dae" }} >
        <View style={styles.textWrapper}   >



          {/* <View style={{ width: '100%', height: "100%", flexDirection: 'row', marginTop: "5%" }}> */}
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', width: '35%', marginLeft: 25, marginTop: 10 }}>

              <Image
                style={{ marginLeft: -14, height: 22, width: 22, marginTop: 10 }}
                source={require('./images/back.png')}
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomSelection')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 20, height: 22, width: 22, marginTop: 10 }}
                    source={require('./images/roomselection.png')}
                  />

                  <Text style={{
                    color: "#aadae0",
                    //marginLeft: 10,
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: -50,
                    marginTop: 30
                  }}> Room Selection </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('users')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 10, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/chat.png')}
                  />
                  <Text style={{
                    color: "#aadae0",
                    textAlign: 'center',
                    fontSize: 10,
                    // marginLeft: 7,
                    marginLeft: -23,
                    marginTop: 30,
                    borderBottomWidth: 2,
                    borderBottomColor: 'white',
                    // marginBottom: -750,
                  }} > Chat </Text>
                </View>
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('map')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                <EvilIcons style={{ marginLeft: 15, height: 60, width: 30, marginTop: 5 }}
                      name="sc-telegram" size={35} color='#69b3f6'
                    />
                  {/* <Image
                    style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/messag.png')}
                  /> */}
                  <Text style={{
                    color: "#aadae0",
                    textAlign: 'center',
                    fontSize: 10,
                    // marginLeft: 7,
                    marginLeft: -28,
                    marginTop: 30
                  }} > Map View </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => this.props.navigation.navigate('users')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 5, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/view-list.png')}
                  />
                  <Text style={{
                    color: "#aadae0",
                    textAlign: 'center',
                    fontSize: 10,
                    // marginLeft: 7,
                    marginLeft: -25,
                    marginTop: 30
                  }} > List View </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Image
              style={{ marginTop: 5, width: '15%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
              source={require('./images/logo_web.png')}
            />

            <View style={{ flexDirection: 'row', width: '50%', marginLeft: 10, marginTop: 10 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/search.png')}
                  />
                  <Text style={{
                    color: "#aadae0",
                    marginLeft: -30,
                    marginTop: 30,
                    textAlign: 'center',
                    fontSize: 10
                  }}> Search </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 25, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/notification.png')}
                  />
                  <Text style={{
                    color: "#aadae0",
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: -40,
                    marginTop: 30
                  }} >Notification </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/settings.png')}
                  />
                  <Text
                    style={{
                      color: "#aadae0",
                      textAlign: 'center',
                      fontSize: 10,
                      marginLeft: -30,
                      marginTop: 30
                    }}
                  >Settings </Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginLeft: 5, flexDirection: 'row', width: '35%', height: 35, marginTop: 10, borderWidth: .8, borderColor: '#fff' }}>
                {/* <TouchableOpacity onPress={() => this.flat()}> */}
                  <TextInput
                    placeholder="Select Room"
                    editable={false}
                    placeholderTextColor='#fff'
                    style={{ backgroundColor: 'transparent',fontSize:10 }}
                  // onChangeText={this.onchangetext}
                  />
                  <View style={{}}>
                    <Image style={{ width: 20, height: 20, marginTop: 10 }}
                      soure={require('./images/downarrow.png')} /></View>
                {/* </TouchableOpacity> */}

              </View>

            </View>
          </View>
        </View>

        {/* </View> */}
      </Header>

 <ImageBackground source={require('./images/Splash_bg.png')} 
 style={{
  width: '100%', 
  height: '100%'}}>



      <View style={styles.container}>
     
      <FlatList
       numColumns={4}
          data={this.state.dataSource}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <TouchableOpacity onPress={this.actionOnRow
            .bind(this, item._id)}>
          
<View style={styles.firstContainer}>
<View style={{flexDirection:"row",marginLeft:10}}>

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
          fontSize:10}}>{item.screenName}</Text>
       <Text style={{
          color:"white",
          marginTop:"5%",
          marginLeft:"4%",
          fontSize:10}}>{item.city}</Text>
         
  </View>
  </View>
   </View>
     
     </TouchableOpacity>
          }
          keyExtractor={item => item.screenName}
        />


           
      </View>
    </ImageBackground>   
    </Container>
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