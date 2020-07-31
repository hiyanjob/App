import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, AsyncStorage,ImageBackground } from 'react-native';
import { Container, Content, } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { toastMsg, } from "../component/assets/scripts/helper";


export default class Splash extends Component {

  static navigationOptions = {
    header: null
  }


  componentDidMount = () => {

    
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        // setTimeout(() => {
        //   this.props.navigation.navigate('Login');
        // }, 4000)

        this.onetimelogin();
      }
    );
  }



  async onetimelogin() {
debugger;
    var id1 = await AsyncStorage.getItem('userID');
    var data = { userId: id1, }
    if (data.userId == null) {
      console.log("data", data.userId)
      this.props.navigation.navigate('Login');
    } else {
      var data1 = {
        userId: await AsyncStorage.getItem('userID'),
      }

      fetch('http://18.204.139.44:3005/SplashScreen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNTUyNDczOTQxfQ.RMCTA6kusTuGAmKqN12ByEgAlu0m3Un18NEQejSmFz4'
        },
        body: JSON.stringify(data1),
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == "True") {

            this.props.navigation.navigate('home');

          } else if (responseJson.status == "False") {
            toastMsg("danger", responseJson.message);
            this.props.navigation.navigate('Login');
          }

        })
        .catch(function (error) {
          reject(new Error(`Unable to retrieve events.\n${error.message}`));
        });

    }

  }

  render() {
    return (
      <Container>
      <Content>
        <View>
        <ImageBackground source={require('../component/images_000/Splash_bg.png')} style={{ width: wp('100%'), height: hp('100%') }}>
          <Image source={require('../component/images_000/Aalap-Final-logo.png')} style={{
            width: wp('25%'),
            height: hp('20%'),
            marginLeft: 150,
            marginTop: 150,
            marginBottom: 15
          }}
          />
          </ImageBackground>
        </View>
      </Content>
    </Container>
    );
  }
}

const SplashStyles = StyleSheet.create({

});

