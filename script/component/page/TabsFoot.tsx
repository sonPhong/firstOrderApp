import { Text, View,Alert } from "react-native";
import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from "./Home";
import { Pay } from "./Pay";
import { Noti } from "./Noti";
import { CallHelp } from "./CallHelp";

export class TabsFoot extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={30} color="#FF8040" />
            ),
          }}
        />
        <Tab.Screen
          name="Noti"
          component={Noti}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="bell-ring" size={30} color="red" />
            ),
          }}
        />

        
        <Tab.Screen
          name="CallHelp"
          component={CallHelp}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="phone" size={30} color="green" />
            ),
          }}
        />

        <Tab.Screen
          name="Pay"
          component={Pay}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={30}
                color="black"
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    );
  }
}
