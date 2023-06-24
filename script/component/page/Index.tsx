import { Text, View } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabsFoot } from "./TabsFoot";

export class Index extends Component {
  render() {
    return (
       <TabsFoot/>
    );
  }
}
