import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntyIcon from 'react-native-vector-icons/Entypo';
import {NavigationActions,StackActions} from 'react-navigation';

export default class SearchResults extends Component {
    
    static navigationOptions = ({ navigation }) => {
  return {
    title: 'Search Results',
    headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('./images/Mask.png')}
      />
    ), 
    headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
            },
    
    headerRight: 
       <TouchableOpacity style={ [{paddingHorizontal:15,marginLeft:-5}] }
          onPress={() => navigation.navigate({ routeName: 'SearchResults'})}>
            <Icon style={{marginLeft:9,}} name="cog" size={30}  color='black'
         onPress={() => navigation.navigate('SearchResults')} />
                  </TouchableOpacity>,
  }
};

render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.RectangleShapeView}>
          <Text style={{alignItems:'center',marginLeft:21,marginTop:18,fontWeight:'bold'}}>Partner looking for</Text>
          <AntDesignIcon style={{marginTop:15,marginLeft:17}}
            name='caretdown'
            size={22}
            color='grey'/>

            <Text style={{alignItems:'center',marginLeft:24,marginTop:18,fontWeight:'bold'}}>Myself</Text>
          <AntDesignIcon style={{marginTop:15,marginLeft:15}}
            name='caretdown'
            size={22}
            color='grey'/>
        </View>

        <View style={styles.card}>
            <Image source={require('./images/ceo.png')} style={styles.cardImage} />
              <Text style={{marginTop:-128,color:'white',marginLeft:22,fontSize:18}}>Sean ortiz, 10</Text>
              <View style={{flexDirection:'row'}}>
              <Icon style={{marginLeft:17}} name='map-marker' size={18} color='white'/>
              <Text style={{color:'white'}} > Chicago</Text>
              </View>

              <View style={{flexDirection:'row'}}>
              <Icon style={{marginLeft:17}} name='briefcase' size={18} color='white'/>
              <Text style={{color:'white'}} > Global services </Text>
              </View>

              <View style={{flexDirection:'row'}}>
              <Icon style={{marginLeft:17}} name='mortar-board' size={18} color='white'/>
              <Text style={{color:'white'}} > Perosoft Global </Text>
              </View>

               <View style={{flexDirection:'row',marginTop:12}}>
               <Text style={{marginLeft:15,color:'white'}} > CONNECT </Text>
              <Icon style={{marginLeft:67}} name='close' size={20.5} color='red'/>
              <EntyIcon style={{marginLeft:57}} name='align-bottom' size={20.5} color='white'/>
              
              </View>
        </View>
 
      </View>

    );
  }
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4d0d0',
  },
 
  RectangleShapeView: {
    flexDirection:'row',
  marginBottom:75,
  width: 155 * 2,
  height: 60,
  backgroundColor: 'white'
  },
  card: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10
  },
  cardImage: {
    marginTop:-12,
    marginLeft:-9,
    height: 295,
    width:295
  },
 
});