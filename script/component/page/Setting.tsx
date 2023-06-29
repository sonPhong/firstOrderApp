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

import { SETTINGRFORM } from "../../style/StyleSheet";

export class Setting extends Component {
  ver = {
    verSion: 0.1,
  };
  render() {
    return (
      <SafeAreaView style={SETTINGRFORM.safeView}>
        <View style={SETTINGRFORM.topSett}>
          <View style={SETTINGRFORM.leftTopSett}>
            <Ionicons name="person-circle-outline" size={50} color="black" />

            <View style={SETTINGRFORM.itemLeftTop}>
              <Text style={SETTINGRFORM.textTitleTop}>Admin</Text>
              <Text style={SETTINGRFORM.textNameTop}>Phong DepZai</Text>
            </View>
          </View>

          <View style={SETTINGRFORM.rightTopSett}>
            <Pressable onPress={this.onBackUser.bind(this)}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={50}
                color="black"
              />
            </Pressable>
          </View>
        </View>

        <View style={SETTINGRFORM.bodySett}>
          <View style={SETTINGRFORM.contaiBody}>
            <Pressable
              style={SETTINGRFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={SETTINGRFORM.viewPress}>
                <Ionicons name="language-outline" size={45} color="black" />
                <Text style={SETTINGRFORM.textPress}>Ngôn Ngữ</Text>
              </View>
            </Pressable>

            <Pressable
              style={SETTINGRFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={SETTINGRFORM.viewPress}>
                <Ionicons
                  name="contrast-outline"
                  size={45}
                  color="black"
                />
                <Text style={SETTINGRFORM.textPress}>Giao Diện</Text>
              </View>
            </Pressable>

            <Pressable
              style={SETTINGRFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={SETTINGRFORM.viewPress}>
                <Ionicons
                  name="notifications-outline"
                  size={45}
                  color="black"
                />
                <Text style={SETTINGRFORM.textPress}>Thông Báo</Text>
              </View>
            </Pressable>

            <Pressable
              style={SETTINGRFORM.pressFlex}
              onPress={this.onBackUser.bind(this)}
            >
              <View style={SETTINGRFORM.viewPress}>
                <Ionicons name="settings-outline" size={45} color="black" />
                <Text style={SETTINGRFORM.textPress}>Cài Đặt Ứng Dụng</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={SETTINGRFORM.footSett}>
          <Text style={SETTINGRFORM.textVer}>
           Version {this.ver.verSion}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  onBackUser() {
    Alert.alert("back user");
  }

}
