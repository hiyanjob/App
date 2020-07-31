import React, {PureComponent} from 'react';
import {StyleSheet, Button, View, Image,Platform,TouchableOpacity,Text} from 'react-native';
import RNImagepickerAndroid from 'react-native-imagepicker-android';
import LinearGradient from 'react-native-linear-gradient'

 
export default class thanks extends PureComponent {
    static navigationOptions = {
        title: 'Thanks' , 
         headerBackground: (
      <Image
        style={{width:'100%',height:'100%'}}
        source={require('./images/Mask.png')}
      />
    ), 
   headerStyle: {
      backgroundColor: '#fff',
      height:80
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginRight:'20%',
      fontFamily:'sans',
      color: 'white',
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    },
    }

    state = {
        imageUri: null
    };

 
    
    Continue(){
        this.props.navigation.navigate('Dashboard');
    }
         
    render() {
        return (
          <View style={styles.container}>
            
             <Text style={styles.resetText}> "YAASS" </Text>
        <Text style={styles.passwordText}> Thanks for Signing up </Text>

          
           <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.continuBut} colors={['#69b3f6', '#25d0de']} >
            <TouchableOpacity  activeOpacity={1.5}
               onPress = {
                  () => this.Continue()
               }>
               <Text style = {styles.continButtontxt}>Take me to home screen</Text>
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
   resetText: {
    textAlign: 'center', 
    fontSize: 22,
  },
  passwordText: {
    textAlign: 'center', 
    fontSize: 22,
    marginBottom:22,
  },
  continuBut: {
    backgroundColor: '#87cefa',
    padding: 9,
    alignItems:'center',
    margin: 8,
    height: 43,
    width:300,
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