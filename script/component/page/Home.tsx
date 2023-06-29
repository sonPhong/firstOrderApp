import { Component, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import { HOME } from "../../style/StyleSheet";
import { Order } from "./Order";
import { Login } from "./Login";
import { Forgot } from "./Forgot";
import { TabsFoot } from "./TabsFoot";
import { User } from "./User";
import { Setting } from "./Setting";

export class Home extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    isVisibleUser: false,
    isVisibleSett: false,
  };
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <ImageBackground
        resizeMode="cover"
        style={HOME.bgHome}
        source={require("../../../assets/v904-nunny-010-f.jpg")}
      >
        <View style={HOME.containerHome}>
          <View style={HOME.topHome}>
            <View style={HOME.leftTopHome}>
              <Pressable onPress={this.onUser.bind(this)}>
                <Ionicons
                  name="person-circle-outline"
                  size={50}
                  color="black"
                />

                <Modal
                  transparent={false}
                  animationType="fade"
                  visible={this.state.isVisibleUser}
                >
                  <User></User>
                </Modal>
                
              </Pressable>

              <View style={HOME.itemLeftTop}>
                <Text style={HOME.textTitleTop}>Admin</Text>
                <Text style={HOME.textNameTop}>Phong DepZai</Text>
              </View>
            </View>

            <View style={HOME.rightTopHome}>
              <Pressable onPress={this.onSett.bind(this)}>
                <Ionicons
                  name="reorder-three-outline"
                  size={50}
                  color="black"
                />
                <Modal
                  transparent={false}
                  animationType="fade"
                  visible={this.state.isVisibleSett}
                >
                  <Setting></Setting>
                </Modal>
              </Pressable>
            </View>
          </View>

          <View style={HOME.bodyHome}>
            <View style={HOME.topBody}>
              <View style={HOME.lineOne}>
                <View style={HOME.itemBody}>
                  <Pressable
                    style={HOME.orderBtn}
                    onPress={this.onOrder.bind(this)}
                  >
                    <Text style={HOME.textPress}>ORDER</Text>
                  </Pressable>
                </View>

                <View style={HOME.itemBody}>
                  <Pressable
                    style={HOME.tabBtn}
                    onPress={this.onTable.bind(this)}
                  >
                    <Text style={HOME.textPress}>TABLE</Text>
                  </Pressable>
                </View>
              </View>

              <View style={HOME.lineTwo}>
                <View style={HOME.itemBody}>
                  <Pressable
                    style={HOME.manaBtn}
                    onPress={this.onManager.bind(this)}
                  >
                    <Text style={HOME.textPress}>MANAGER</Text>
                  </Pressable>
                </View>

                <View style={HOME.itemBody}>
                  <Pressable
                    style={HOME.staBtn}
                    onPress={this.onStatis.bind(this)}
                  >
                    <Text style={HOME.textPress}>STATIS</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={HOME.botBody}>
              <SafeAreaView style={HOME.safeView}>
                <ScrollView style={HOME.scrollView}>
                  <Text style={HOME.textView}>This is Noti 1</Text>
                  <Text style={HOME.textView}>This is Noti 2</Text>
                  <Text style={HOME.textView}>This is Noti 3</Text>
                  <Text style={HOME.textView}>This is Noti 4</Text>
                  <Text style={HOME.textView}>This is Noti 5</Text>
                  <Text style={HOME.textView}>This is Noti 6</Text>
                  <Text style={HOME.textView}>This is Noti 7</Text>
                  <Text style={HOME.textView}>This is Noti 8</Text>
                  <Text style={HOME.textView}>This is Noti 9</Text>
                  <Text style={HOME.textView}>This is Noti 10</Text>
                  <Text style={HOME.textView}>This is Noti 1</Text>
                  <Text style={HOME.textView}>This is Noti 2</Text>
                  <Text style={HOME.textView}>This is Noti 3</Text>
                  <Text style={HOME.textView}>This is Noti 4</Text>
                  <Text style={HOME.textView}>This is Noti 5</Text>
                  <Text style={HOME.textView}>This is Noti 6</Text>
                  <Text style={HOME.textView}>This is Noti 7</Text>
                  <Text style={HOME.textView}>This is Noti 8</Text>
                  <Text style={HOME.textView}>This is Noti 9</Text>
                  <Text style={HOME.textView}>This is Noti 10</Text>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>

          {/* <View style={HOME.footerHome}>
            <View style={HOME.callBtn}>
              <Pressable style={HOME.callBtn}>
                <Text style={HOME.callText}>Call Help</Text>
              </Pressable>
            </View>
            <View style={HOME.notiBtn}>
              <Pressable style={HOME.notiBtn}>
                <Text style={HOME.notiText}>Noti</Text>
              </Pressable>
            </View>
            <View style={HOME.homeBtn}>
              <Pressable style={HOME.homeBtn} onPress={this.onHome.bind(this)}>
                <Text style={HOME.homeText}>Home</Text>
              </Pressable>
            </View>
            <View style={HOME.payBtn}>
              <Pressable style={HOME.payBtn}>
                <Text style={HOME.payText}>Pay</Text>
              </Pressable>
            </View>
          </View>
          */}
        </View>
      </ImageBackground>
    );
  }

  // onHome() {
  //   const props = this.props as any;
  //   props.navigation.navigate(Home);
  //   alert("Back Home");
  // }

  onUser() {
    this.setState({ isVisibleUser: !this.state.isVisibleUser });
  }

  onSett() {
    this.setState({ isVisibleSett: !this.state.isVisibleSett });
  }

  onOrder() {
    const props = this.props as any;
    props.navigation.navigate(Order);
    Alert.alert("This is ORDER page");
  }

  onTable() {
    Alert.alert("Co CLG DAU MA XEM");
  }

  onManager() {
    Alert.alert("Co CLG DAU MA XEM");
  }

  onStatis() {
    Alert.alert("Co CLG DAU MA XEM");
  }

  changeModalVisible() {
    Alert.alert("this is modal");
  }
}
