import React from 'react';
import {
AppRegistry,
Image,
PixelRatio,
StyleSheet,
Text,
TouchableOpacity,
View,
AsyncStorage,
Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Slider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ImageUploads extends React.Component {
  
  static navigationOptions = {
        title: 'Upload Photo' , 
   headerStyle: {
      backgroundColor: '#fff',
    },
     headerTintColor: '#e3e3e5',
    headerTitleStyle: {
       fontWeight: 'bold',
      marginRight:'20%',
      fontFamily:'sans',
      color: 'black',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    },
    }
state = {
avatarSource: null,
videoSource: null,
data: null,
empty:null,
data2:null
};

constructor(props) {
super(props);

this.selectPhotoTapped = this.selectPhotoTapped.bind(this);

}

componentWillMount() {
this.onLoad();
}

onLoad = async () => {
try { 
this.setState({ 
id:await AsyncStorage.getItem('_id')
});
}
catch (error) {
Alert.alert('Error', 'There was an error.')
}
}

selectPhotoTapped() {
const options = {
quality: 1.0,
maxWidth: 500,
maxHeight: 500,
storageOptions: {
skipBackup: true,
},
};

ImagePicker.showImagePicker(options, (response) => {
console.log('Response = ', response);

if (response.didCancel) {
console.log('User cancelled photo picker');
} else if (response.error) {
console.log('ImagePicker Error: ', response.error);
} else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
} else {
let source = { uri: response.uri };

 data2 = new FormData();
data2.append("pic", response.fileName);
data2.append("_id", this.state.id);
console.log(data2);
// empty={
// _id:this.state.id,
// pic:response.fileName
// }

// You can also display the image using data:
// let source = { uri: 'data:image/jpeg;base64,' + response.data };
this.setState({
avatarSource: source,

});
}
});
}

/*imagePic(){
  this.props.navigation.navigate('GeneralInfo');
}*/

 picApi()
{
fetch('http://18.204.139.44:3003/updateprofile', {
method: 'POST',
header: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: data2,
})
.then((response) => response.json())
.then((response) => response.json())
.then((responseJson) => {

Alert.alert(JSON.stringify(responseJson));

})
.catch((error) => {
console.error(error);
}); 

}



render() {
return (
<View style={styles.container}>
<View style={{width:wp('90%'),flex: 1,marginLeft:'2%',paddingTop:0,
paddingBottom:0 }}>
 <Slider 
    thumbTintColor='#fbfbfb'
    maximumTrackTintColor='#fbfbfb' 
    minimumTrackTintColor='#25d0de'
    value={this.state.value}
    onValueChange={(value) => this.setState({value})} />


  <View style={{flex:1,height:hp('65%'),width:wp('85%'),backgroundColor:'#fbf4fb',paddingTop:0,
    paddingBottom:20,marginLeft:'5%',marginRight:'5%',flexDirection:'row'}}>
   <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
      <View style={[styles.avatar,styles.avatarContainer,{ marginBottom: 20 },]}>
        {this.state.avatarSource === null ? (<Text>Select a Photo</Text>) : (
      <Image style={styles.avatar} source={this.state.avatarSource} />)}
      </View>
    </TouchableOpacity>
 
<View style={{flex:1}}>
  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
    <View style={[styles.avatar1,styles.avatarContainer1,{ marginBottom: 5 },]}>
        {this.state.avatarSource === null ? (<Text>Select a Photo</Text>) : (
        <Image style={styles.avatar1} source={this.state.avatarSource} />)}
    </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
    <View style={[styles.avatar1,styles.avatarContainer1,{ marginBottom: 20 },]}>
        {this.state.avatarSource === null ? (<Text>Select a Photo</Text>) : (
        <Image style={styles.avatar1} source={this.state.avatarSource} />)}
    </View>
  </TouchableOpacity>
</View>
</View>

<LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
    <TouchableOpacity  activeOpacity={1.5} onPress={ () => this.picApi() } >
      <Text style = {styles.continButtontxt}>Continue</Text>
    </TouchableOpacity>
</LinearGradient>
</View>
</View>
);}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor:'#FFFFFF',
paddingTop:20,
paddingBottom:20
},
avatar: {
borderRadius: 10,
width: wp('46%'),
height:  hp('33%'),
marginLeft:'5%',
justifyContent:'flex-start',
marginTop:15
},
avatarContainer: {
borderColor: '#9B9B9B',
borderWidth: 1 / PixelRatio.get(),
justifyContent: 'center',
alignItems: 'center',
marginLeft:'5%'
},
avatar1: {
borderRadius: 5,
width: wp('30%'),
height:  hp('15%'),
marginLeft:'5%',
marginRight:'5%',
justifyContent:'flex-end',
marginTop:15
},
avatarContainer1: {
borderColor: '#9B9B9B',
borderWidth: 1 / PixelRatio.get(),
justifyContent: 'center',
alignItems: 'center',
marginLeft:'5%'
},
continuBut: {
  backgroundColor: '#87cefa',
  margin: 8,
  alignItems:'center',
  justifyContent:'center',
  height:hp('7.5%'),
  width:wp('90%'),
  color:'blue',
  marginTop: 105,
  marginLeft:'3%'
},
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center', 
    fontSize: 18,
   },
});