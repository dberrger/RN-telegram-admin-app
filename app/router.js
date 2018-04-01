import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator, SwitchNavigator } from "react-navigation";

import screen from "./components/screens/index";

export const createRootNavigator = (loggedIn) => {
  return SwitchNavigator(
    {
      MainNavigator: {
        screen: MainNavigator
      },
      SignIn: {
        screen: screen.SignInScreen
      }
    },
    {
      initialRouteName: loggedIn ? "MainNavigator" : "SignIn"
    }
  );
};


export const MainNavigator = StackNavigator({
  Home: {
    screen: screen.HomeScreen
  },
  Statistics: {
    screen: screen.StatisticsScreen
  },
  Logs: {
    screen: screen.LogsScreen
  }

});