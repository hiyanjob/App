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
         ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions,createDrawerNavigator} from 'react-navigation';
import Dropdown from 'react-native-modal-select-option';
import LinearGradient from 'react-native-linear-gradient';
import { Slider } from 'react-native-elements';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,listenOrientationChange as loc, removeOrientationListener as rol} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const propsDropdown = {
  defaultValue: {value: 5, label: 'Kebumen'},
  options: [
    {value: 1, label: 'Bandung'},
    {value: 2, label: 'Surabaya'},
    {value: 3, label: 'Palembang'},
    {value: 4, label: 'Jakarta'},
  ],
  label: 'Your City',
  animationType: 'none',
};

type State = {
  selectedOption: Object,
  isShowingOptions: boolean;
};


export default class Block extends Component {

    constructor() {
        super();
        this.state = {
            textInputValue: ''
        }
    }  

   static navigationOptions = {
     title: 'No Shame' ,
     headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('./images/Mask.png')}
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
    enableScroll = () => this.setState({ scrollEnabled: true });
    disableScroll = () => this.setState({ scrollEnabled: false });
    save(){
      this.props.navigation.navigate('Dashboard');
    }
  
render(){    
    return (
      <ScrollView>
      <View style={{}}>
         <Text style={{marginTop:17.5,textAlign:'center',fontSize:16,fontWeight:'bold'}}>Don't bump into a wrong person. Be</Text>
         <Text style={{marginTop:2.5,textAlign:'center',fontSize:16,fontWeight:'bold'}}>invisible to following people</Text>
         <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Contact Number"
            value={this.state.textInputValue} /> 

         <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Email Id"
            value={this.state.textInputValue} />  

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            placeholder="By Names"
            value={this.state.textInputValue} />  

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            editable={false}
            placeholder="By Company name & locations"
            value={this.state.textInputValue} />       

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            editable={false}
            placeholder="By Job Titles,compnaies & locations:"
            value={this.state.textInputValue} /> 

          <View style={{ flexDirection:'row',marginTop:14}}>
           <Text style={{marginLeft:32,}}>By Age range</Text>
           <Text style={{marginLeft:169,}}>18 to 24</Text>
          </View>
          <Slider style={{width:wp('80%'),marginTop:5,marginLeft:'9%'}}
            minimumValue={-10}
            maximumValue={42}
            minimumTrackTintColor='#1fb28a'
            maximumTrackTintColor='#d3d3d3'
            thumbTintColor='#1a9274'
          />
         
          <TextInput
            style={{marginTop:15,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            editable={false}
            placeholder="By School name & locations:"
            value={this.state.textInputValue} /> 

          <TextInput
            style={{marginTop:14,borderBottomWidth:1, borderColor:'#ccc',width:'85%', padding:10, height:50,marginLeft:30}}
            editable={false}
            placeholder="By College name & locations:"
            value={this.state.textInputValue} /> 

          <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.save()
               }>
               <Text style = {styles.continButtontxt}>Save</Text>
            </TouchableOpacity>
        </LinearGradient>
      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:309,
    color:'blue',
    marginLeft:31,
    marginTop:15
   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
   })