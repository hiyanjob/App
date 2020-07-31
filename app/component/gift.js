import React, {Component} from 'react';
import { AppRegistry, Button, Text, StatusBar, View, Image,ImageBackground, 
  StyleSheet, TextInput, TouchableOpacity ,Alert,AsyncStorage,ScrollView,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class gift extends Component {


 constructor() {
        super();
        this.state = {

            
              isLoading: true,
            
            
            }
 }

 componentWillMount() {

    this.getMessageList();
    

 }
 

 async getMessageList()  {

    var id1 = await AsyncStorage.getItem('userID');
    var receiverid = await AsyncStorage.getItem('receiverId');

    // var data ={
    //     userID:"5cc86792e8de18198b51790b",
    //     receiverId:"5cc84e9fe8de18198b5178ef"
    // }

    
    var data ={
        userID:id1,
        receiverId:receiverid
    }

    console.log(data);

    fetch('http://18.204.139.44:3005/messageListBasedRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          }).then((response) => response.json())
          .then((responseJson) => {

let list=responseJson.result;
console.log('this is',list);

            this.setState({
                isLoading: false,
                dataSource: responseJson.result,
               
              } 
              );
             
        //  if (responseJson.message ===  "message List")
        //    this.setState({
        //      messages: responseJson.list
        //    });

        // console.log("message2=>", this.state.messages);
      })
      .then(error => {
        console.log(error);
      });
  };

  async actionOnRow(_id) {
  } 



 
  render() {
    return (
 
        <View style={{backgroundColor:'red'}} >
                  <FlatList
              data={this.state.dataSource}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) =>
              
              <TouchableOpacity onPress={this.actionOnRow
                .bind(this, item._id)}
        >
        
            <View style={{marginLeft:5,marginTop:7}} >    
        
            <Text 
             style={{
              color:"black",
              marginTop:"5%",
              marginLeft:"4%",
              fontSize:15}}>{item.content}</Text>
        
              </View>
        
          
         </TouchableOpacity>
            }
               keyExtractor={(item,index)=>item.index}
            />
            </View> 
    );
  }
}


const styles = StyleSheet.create({
    backgroundImage: {
           flex: 1,         
     },
  forgetTxt:{
      textAlign: 'center', 
      fontSize: 17,
      marginVertical: 20,
      color: 'white',
     marginLeft:30,
     marginTop:20,
     fontWeight:'600'

  },

  Emailtxt: {
      textAlign: 'center', 
      fontSize: 14,
      color: 'white',
      marginTop:30,
     marginBottom:10
    
  },

 loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    marginLeft:"15%",
    margin: 5,
    height: 40,
    width:275,
    padding:10,
    borderColor: 'grey', 
    marginVertical: 10,

    marginTop:70,
    borderRadius:18,
   },

  LoginButtontxt:{
   
    color: 'white',
    padding: 3,
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",

   },

  
});

