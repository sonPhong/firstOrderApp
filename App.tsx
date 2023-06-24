import { Component, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "./script/component/page/Home";
import { Login } from "./script/component/page/Login";
import { Forgot } from "./script/component/page/Forgot";
import { Order } from "./script/component/page/Order";
import { TabsFoot } from "./script/component/page/TabsFoot";
import { Index } from "./script/component/page/Index";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitleAlign: "center",
              headerBackTitleVisible: false,
              title: "LOGIN",
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
