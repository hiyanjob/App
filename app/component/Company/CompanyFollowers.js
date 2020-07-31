import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Platform,
  Alert,
  Text,
  YellowBox,
  TouchableOpacity,
} from 'react-native';

export default class CompanyFollowers extends Component {
  static navigationOptions = {
     title: 'Followers' ,
      headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('../images/Mask.png')}
      />
    ), 
      
  headerTintColor: '#000',
 
    headerTitleStyle:{
      fontWeight: '200',
      color: 'white',
      textAlign: 'center',
      flex: 1,
    },
    }

   constructor(props) {
      super(props);
   this.state = {
     isLoading: true
   }
 
   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);
 }
 
GetItem (flower_name) { 
 Alert.alert(flower_name);
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "50%",
         backgroundColor: "#0ff909",
       }}
     />
   );
 }
 
 webCall=()=>{ 
  return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
           });
         })
         .catch((error) => {
           console.error(error);
         });
 }
 
 componentDidMount(){
  this.webCall();
 }
 
 render() {
   if (this.state.isLoading) {
     return (
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
         <ActivityIndicator size="large" />
       </View>   
     );
   }
 
   return (
     <View style={styles.MainContainer}>
       <FlatList data={ this.state.dataSource }       
       ItemSeparatorComponent = {this.FlatListItemSeparator} 
        renderItem={({item}) =>        
          <View style={{flex:1,justifyContent:'center',marginTop:15}}>  
              <Image source = {{ uri: item.flower_image_url }} style={styles.imageView} />          
              
            </View>        
          }
        keyExtractor={(item, index) => index.toString()}   
        numColumns={2}    
        />
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
},
imageView: {
    width: '90%',
    height:'200%' ,
    marginTop:10,
    marginBottom:10,
    marginVertical:10,
    borderRadius : 10
}, 
textView: {
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
} 
});