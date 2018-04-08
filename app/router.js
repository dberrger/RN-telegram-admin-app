import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator, SwitchNavigator } from "react-navigation";
 import screen from "./components/screens/index";
import view from "./containers/index";

export const createRootNavigator = (loggedIn) => {
  return SwitchNavigator(
    {
      MainNavigator: {
        screen: MainNavigator
      },
      Login: {
        screen: view.LoginView
      }
    },
    {
      initialRouteName: loggedIn ? "MainNavigator" : "Login"
    }
  );
};


export const MainNavigator = StackNavigator(
{
    Home: {
    	screen: view.HomeView
  	},
  	Statistics: {
    	screen: view.StatsView
  	},
  	Logs: {
    	screen: view.LogsView
  	}
}, 
{
	initialRouteName: 'Home',
  	navigationOptions :{

      headerStyle: {
        backgroundColor: '#a0b6db',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',

    	} 
  	}
}
);