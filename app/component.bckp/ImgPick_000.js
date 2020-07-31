import React, {PureComponent} from 'react';
import {StyleSheet, Button, View, Image,Platform,TouchableOpacity,Text} from 'react-native';
import RNImagepickerAndroid from 'react-native-imagepicker-android';
import LinearGradient from 'react-native-linear-gradient'

 
export default class ImgPick extends PureComponent {
    
    state = {
        imageUri: null
    };

    pickImage = async () => {
        const imageSource = await RNImagepickerAndroid.pickImage();
        this.setState({
            imageUri: imageSource
        })
    }

    
    Continue(){
        this.props.navigation.navigate('GeneralInfo');
    }
         
    render() {
        return (
          <View style={styles.container}>
            <Button title="Pick" onPress={this.pickImage} />
            { this.state.imageUri &&
            <Image style={{borderRadius: 50,marginTop:15, width: 150, height: 150,}} source={{uri: this.state.imageUri}}  />}
          
           <LinearGradient style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.Continue()
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
  continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:270,
    color:'blue',
    marginTop:350

   },
continButtontxt:{
    color: 'white',
    padding: 2,
    alignItems:'center',
    justifyContent:'center'
   },
});