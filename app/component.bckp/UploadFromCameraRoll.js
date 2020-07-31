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
import LinearGradient from 'react-native-linear-gradient'

export default class ImageUploads extends React.Component {
  
  static navigationOptions = {
        title: 'Upload Photo' , 
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
state = {
avatarSource: null,
videoSource: null,
data: null,
empty:null,
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

const data2 = new FormData();

   data2.append('pic', {
    //uri : response.uri,
    name: response.fileName,
    type: response.type,
  
 });

  var str3 = response.fileName;

empty={
_id:this.state.id,
pic:response.fileName
}

 Alert.alert(JSON.stringify(empty));



// You can also display the image using data:
// let source = { uri: 'data:image/jpeg;base64,' + response.data };


this.setState({
avatarSource: source,

});
}
});
}


 picApi()
{

var newValuable = empty;
Alert.alert(JSON.stringify(newValuable));


fetch('http://18.204.139.44:3003/updateprofile', {
method: 'POST',
header: {
  'Accept': 'application/json',
  'Content-Type': 'multipart/form-data'
},
body: JSON.stringify(empty),
}).then((response) => response.json())
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
<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
<View
style={[
styles.avatar,
styles.avatarContainer,
{ marginBottom: 20 },
]}
>
{this.state.avatarSource === null ? (
<Text>Select a Photo</Text>
) : (
<Image style={styles.avatar} source={this.state.avatarSource} />
)}
</View>
</TouchableOpacity>

<LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.picApi()
               }>
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
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
avatarContainer: {
borderColor: '#9B9B9B',
borderWidth: 1 / PixelRatio.get(),
justifyContent: 'center',
alignItems: 'center',
},
avatar: {
borderRadius: 75,
width: 150,
height: 150,
},
  continuBut: {
    backgroundColor: '#87cefa',
   margin: 8,
    alignItems:'center',
    height: 43,
    width:270,
    color:'blue',
   marginTop: 105,
   

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