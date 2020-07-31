import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, } from 'native-base';
import Common_Style from '../../Assets/Styles/Common_Style';

export default class Splash extends Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount = () => {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        setTimeout(() => {
          this.props.navigation.navigate('Register');
        }, 2000)
      }
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={Common_Style.Splash_View}>
            <Image source={require('../../Assets/Images/Logo.png')} style={Common_Style.Splash_Logo} />
          </View>
        </Content>
      </Container>
    );
  }
}

