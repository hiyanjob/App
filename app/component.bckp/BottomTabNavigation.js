import { createBottomTabNavigator } from 'react-navigation';
import Suggestions from './Suggestions';
import Chats from './Chats'
import Notifications from './Notifications'
import LifePartner from './LifePartner'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo';

  
  export default createBottomTabNavigator(
    {
       
        Suggestions:{
          screen:Suggestions,
        },
        Chats: {
          screen:Chats,
          
        },
        Notifications: {
          screen:Notifications,
          
        },
        LifePartner: {
          screen:LifePartner,
        },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Suggestions') {
            iconName = `box`;
          }else if (routeName === 'Notifications') {
            iconName = `bell`;
          } else if (routeName === 'Chats') {
            iconName = `message`;
          }else if (routeName === 'LifePartner') {
            iconName = `LifePartner`;
          }
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <SimpleLineIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];

        // You can do whatever you like here to pick the title based on the route name
        const headerTitle = routeName;
        const headerLeft = null;

        return {headerTitle,headerLeft};
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        elevation:8,
      },
    }
  );