import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import { FORGOT } from "../../style/StyleSheet";
import { Login } from "./Login";

export class Forgot extends Component {
  render() {
    return (
      <ImageBackground
        style={FORGOT.bgForgot}
        resizeMode="cover"
        source={require("../../../assets/v904-nunny-010-f.jpg")}
      >
        <View style={FORGOT.containerForgot}>
          <View style={FORGOT.textForgot}>
            <TextInput
              placeholder="Your Name"
              style={FORGOT.textInForgot}
            ></TextInput>

            <TextInput placeholder="ID" style={FORGOT.textInForgot}></TextInput>

            <TextInput
              placeholder="SDT - MAIL"
              style={FORGOT.textInForgot}
            ></TextInput>
          </View>

          <View style={FORGOT.butForgot}>
            <Pressable onPress={this.onLogin.bind(this)} style={FORGOT.btnLogin}>
              <Text style={FORGOT.itemBtn}>Login Now</Text>
            </Pressable>
            <Pressable onPress={this.onForgot.bind(this)} style={FORGOT.btnForgot}>
              <Text style={FORGOT.itemBtn}>Accept</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    );
  }

  onLogin() {
     const props = this.props as any;
    props.navigation.navigate(Login);
    alert("LOGIN DONE");
  }
  onForgot() {
    alert("Forgot Accept");
  }
}
