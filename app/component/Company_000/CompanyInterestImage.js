import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,FlatList,Alert,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import { Slider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class CompanyInterestImage extends Component {

   static navigationOptions = {
     title: 'Create Interest' , 
      headerStyle: {
      backgroundColor: '#fff',
    },
      headerTintColor: '#000',
      headerTitleStyle: {
      fontWeight: '200',
      color: 'black',
      textAlign: 'center',
      flex: 1,
    },
    }
    
    constructor(props) {
      super(props);

    this.state = {
      GridListItems: [
        { key: "EVENT" },
        { key: "GOVERNMENT" },
        { key: "BOOK" },
        { key: "EVENT" },
        { key: "GOVERNMENT" },
        { key: "BOOK" },
        { key: "EVENT" },
        { key: "GOVERNMENT" },
        { key: "BOOK" },
        { key: "EVENT" },
        { key: "GOVERNMENT" },
        { key: "BOOK" },
        { key: "EVENT" },
        { key: "GOVERNMENT" },
        { key: "BOOK" },
      ]
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }
  CotinueImagecrop(){
      this.props.navigation.navigate('CompanyImageCrop');
    }

  render() {
     return (
       <View style={styles.container}>
       <View style={{flex: 1, marginTop:19,width:'85%',marginLeft:20, justifyContent: 'center'}}>
         <Slider 
          thumbTintColor='#fbfbfb'
          maximumTrackTintColor='grey' 
          minimumTrackTintColor='#25d0de'
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
      </View>
        <Text style={{marginTop:19,textAlign:'center',justifyContent:'center'}}>What are you into?</Text>
         <FlatList 
            data={ this.state.GridListItems }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View> }
            numColumns={3}
         />

         <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {() => this.CotinueImagecrop()}>
               <Text style = {styles.continButtontxt}>Continue</Text>
            </TouchableOpacity>
        </LinearGradient>

       </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex:1,
   textAlign:'center',
   justifyContent:'center',
   height: 128,
   margin: 5,
   marginTop:15,
   backgroundColor: '#7B1FA2'
},
GridViewTextLayout: {
   fontSize: 16,  
   color: '#fff',
   padding: 1,
   justifyContent:'center',
   textAlign:'center'
 },
 continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:330,
    color:'blue',
    marginLeft:14,
    marginTop:15
   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
})
