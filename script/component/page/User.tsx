import {
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { USERFORM } from "../../style/StyleSheet";
import { Login } from "./Login";

export class User extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    //const [value, setVale] = useState(10);

    return (
      <SafeAreaView style={USERFORM.safeView}>
        <View style={USERFORM.topUser}>
          <View style={USERFORM.leftTopUser}>
            <Ionicons name="person-circle-outline" size={50} color="black" />

            <View style={USERFORM.itemLeftTop}>
              <Text style={USERFORM.textTitleTop}>Admin</Text>
              <Text style={USERFORM.textNameTop}>Phong DepZai</Text>
            </View>
          </View>

          <View style={USERFORM.rightTopUser}>
            <Pressable onPress={this.onBackUser.bind(this)}>
              <Ionicons
                name="chevron-back-circle-outline"
                size={50}
                color="black"
              />
            </Pressable>
          </View>
        </View>

        <View style={USERFORM.bodyUser}>
          <View style={USERFORM.contaiBody}>
            <Pressable
              style={USERFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={USERFORM.viewPress}>
                <Ionicons name="time-outline" size={45} color="black" />
                <Text style={USERFORM.textPress}>Chấm Công</Text>
              </View>
            </Pressable>

            <Pressable
              style={USERFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={USERFORM.viewPress}>
                <Ionicons
                  name="information-circle-outline"
                  size={45}
                  color="black"
                />
                <Text style={USERFORM.textPress}>Thông Tin Cá Nhân</Text>
              </View>
            </Pressable>

            <Pressable
              style={USERFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={USERFORM.viewPress}>
                <Ionicons name="keypad-outline" size={45} color="black" />
                <Text style={USERFORM.textPress}>Đổi Mật Khẩu</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={USERFORM.footUser}>
          <Pressable
            style={USERFORM.pressFoot}
            onPress={this.onLogOut.bind(this)}
          >
            <View style={USERFORM.viewPressFoot}>
              <Text style={USERFORM.textPressFoot}>Đăng Xuất</Text>
              <Ionicons name="log-out-outline" size={35} color="black" />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  onBackUser() {
    //const props = this.props as any;
    //props.navigation.goBack();
  }
  
  onLogOut() {
    const props = this.props as any;
    props.navigation.navigate(Login);
     Alert.alert("LogOut");
  }
}
