import { Component, ReactNode, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LOGIN } from "../../style/StyleSheet";
import { Home } from "./Home";
import { Forgot } from "./Forgot";
import { Index } from "./Index";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Tab } from "@rneui/base";
import {User} from "./User";
import { Setting } from "./Setting";

const { account_admin, account_member } = require("../json/Login.json");

type Interface_AccountMember = {
  account_member: { id: number; name: string; pass: string };
};

type Interface_AccountAdmin = {
  account_admin: { id: number; name: string; pass: string };
};



export class Login extends Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    id: "",
    pass: "",
  };

  render() {
    


    return (
      <ImageBackground
        style={LOGIN.bgLogin}
        resizeMode="cover"
        source={require("../../../assets/v904-nunny-010-f.jpg")}
      >
        <View style={LOGIN.containerLogin}>
          <TextInput
            //onKeyPress={}
            placeholder="ID"
            style={LOGIN.textInLogin}
            returnKeyType={'next'}
            autoFocus = {true}
            textContentType={"oneTimeCode"}
            autoCapitalize={"none"}
            onChangeText={this.onInputId.bind(this)}
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            placeholder="PASS"
            textContentType={"oneTimeCode"}
            autoCapitalize={"none"}
            onChangeText={this.onInputPass.bind(this)}
            style={LOGIN.textInLogin}
          ></TextInput>
          <View style={LOGIN.butLogin}>
            <Pressable onPress={this.onLogin.bind(this)} style={LOGIN.btnLogin}>
              <Text style={LOGIN.itemBtn}>Login Now</Text>
            </Pressable>
          </View>
          <View style={LOGIN.butLogin}>
            <Pressable
              onPress={this.onForgot.bind(this)}
              style={LOGIN.btnForgot}
            >
              <Text style={LOGIN.itemBtn}>Forgot password</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    );
  }

  onForgot() {
    const props = this.props as any;
    props.navigation.navigate(Forgot);
    alert("FORGOT GO");
  }

  onInputId(txt: string) {
    this.setState({ id: txt });
  }

  onInputPass(txt: string) {
    this.setState({ pass: txt });
  }

  onLogin() {
    const props = this.props as any;
    //----------------------------------Test---------------
    console.log(this.state.id);
    console.log(this.state.pass);

    // let acc = this.state.id;
    // let pass = this.state.pass;
    // if (acc === "admin" && pass === "1234") {
    //   props.navigation.navigate(Index);
    //   alert("LOGIN DONE");
    // } else {
    //   alert("Wrong ID or PASS");
    // }

    //----------------------------------Real---------------
    const { id, pass } = this.state;
    if (id.includes("admin")) {
      if (this.onCheckAccount(id, pass, "admin")) {
        props.navigation.navigate(Index);
        Alert.alert("LOGIN DONE", "Login Success With Admin");
        return;
      }
    } else if (id.includes("member")) {
      //this.onCheckAccount(id, pass, "member");
      if (this.onCheckAccount(id, pass, "member")) {
        props.navigation.navigate(Index);
        Alert.alert("LOGIN DONE", "Login Success With Member");
        return;
      }
    }
    Alert.alert("Wrong, Login False");
  }

  onCheckAccount(txt: string, pass: string, type: string) {
    let isExistAccount = false;
    switch (type) {
      case "admin":
        {
          const account: Interface_AccountAdmin =
            account_admin as Interface_AccountAdmin;
          if (account.hasOwnProperty(txt)) {
            // @ts-ignore
            if (pass === account[txt].pass) {
              isExistAccount = true;
            }
          }
        }
        break;
      case "member":
        {
          const account: Interface_AccountMember =
            account_member as Interface_AccountMember;
          if (account.hasOwnProperty(txt)) {
            //@ts-ignore
            if (pass === account[txt].pass) {
              isExistAccount = true;
            }
          }
        }
        break;
    }
    return isExistAccount;
  }
}
