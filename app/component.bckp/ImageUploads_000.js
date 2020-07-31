import React, { Component } from 'react'
import { Text, StatusBar,StyleSheet,Image,
     View ,ToastAndroid,AsyncStorage, ActivityIndicator,TouchableOpacity,ScrollView,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import t from 'tcomb-form-native'
import ImageFactory from 'react-native-image-picker-form'

const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})
 
type Props = {}
type State = {
  value: Object,
  options: Object
}


export default class ImageUploads extends Component {
    
 static navigationOptions = {
        title: 'Image Uploads' , 
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
	    super(props)
	    this.state = {
	      value: {},
	      options: {
	        fields: {
	          image: {
	            config: {
	              title: 'Select image',
	              options: ['Open camera', 'Select from gallery', 'Cancel'],
	              // Used on Android to style BottomSheet
	              style: { titleFontFamily: 'Roboto'}
            },
            error: 'No image provided',
            factory: ImageFactory
          }
        }
      }
    }
  }
 

    Continue(){
    	this.props.navigation.navigate('GeneralInfo');
    }
    

render(){
    
    return (
    	<ScrollView>
      <View style={{alignItems: 'center'}}>
        <Text style={{alignItems: 'flex-end'}} >Waiting For upload images from Image Picker</Text>

         <Form
	        ref={(ref: any) => {
	          this.form = ref}}
	        type={DocumentFormStruct}
	        value={this.state.value}
	        options={this.state.options}
      />

        <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.Continue()
               }>
               <Text style = {styles.continButtontxt}>Continue</Text>
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
    width:270,
    color:'blue',
    marginTop:350,marginBottom:15,

   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
})