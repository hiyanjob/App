import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Platform,
  Alert,
  Text,
  YellowBox,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
  import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
   <View style={[styles.scene, { backgroundColor: '#99ff9f' }]} />
  )

export default class Saved_profiles extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First', },
      { key: 'second', title: 'Second' },
      { key:'third', title:'Third'}
    ],
  };

  render() {
    return (
      <TabView style={{}}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});