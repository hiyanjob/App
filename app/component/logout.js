import React, { Component } from "react";
import { View, Image, BackHandler } from "react-native";
import { clearData } from "./assets/scripts/helper";

export default class logout extends Component {
  static navigationOptions = {
    header: null
  };

  async componentWillMount() {
    let clearlogin = await clearData();
  }

  render() {
    const { navigation } = this.props;
    return  navigation.replace("Login");
  }
}
