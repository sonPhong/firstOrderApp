import { StyleSheet, Text, View } from "react-native";

//-----------------------------HOME----------------------------------
export const HOME = StyleSheet.create({
  bgHome: {
    flex: 1,
  },
  containerHome: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingBottom: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  //-------------TOP----------
  topHome: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#CFCFCF",
  },
  leftTopHome: {
    flex: 1,
    flexDirection: "row",
  },
  rightTopHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconLeftHome: {
    flex: 1,
    //marginHorizontal: 10,
    fontSize: 50,
    width: "100%",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  itemLeftTop: {
    //alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textTitleTop: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textNameTop: {
    fontSize: 20,
    //fontWeight: "bold",
  },
  iconRightHome: {
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  //-------------BODY----------
  bodyHome: {
    flex: 10,
    marginVertical: 5,
  },
  topBody: {
    flex: 2,
  },
  botBody: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    //paddingBottom:10,
    //marginBottom:10,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
    //paddingTop: 10,
    //paddingBottom: 10,
  },
  textView: {
    fontSize: 32,
    textAlign: "justify",
    fontWeight: "bold",
  },
  lineOne: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  lineTwo: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  itemBody: {
    flex: 1,
    padding: 10,
  },
  textPress: {
    fontSize: 30,
    fontWeight: "bold",
  },
  orderBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#59FFFF",
    borderRadius: 10,
  },
  tabBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#38FA08",
    borderRadius: 10,
  },
  manaBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2E57",
    borderRadius: 10,
  },
  staBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFDC54",
    borderRadius: 10,
  },
  //-------------FOOTER----------
  footerHome: {
    flex: 1,
    flexDirection: "row",
  },
  callBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
  notiBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  homeBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  payBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    borderRadius: 10,
  },
  callText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  notiText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  homeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  payText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

//-----------------------------LOGIN----------------------------------

export const LOGIN = StyleSheet.create({
  bgLogin: {
    flex: 1,
  },
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    //alignItems:'center',
  },
  textInLogin: {
    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
  btnLogin: {
    width: "50%",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#FF8040",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "blue",
  },
  btnForgot: {
    width: "50%",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "blue",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#FF8040",
  },
  butLogin: {
    alignItems: "center",
  },
  itemBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

//-----------------------------FORGOT----------------------------------

export const FORGOT = StyleSheet.create({
  bgForgot: {
    flex: 1,
  },
  containerForgot: {
    flex: 1,
    justifyContent: "center",
    //alignItems:'center',
  },
  textForgot: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textInForgot: {
    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
  btnLogin: {
    flex: 1,
    width: "50%",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#FF8040",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "blue",
  },
  btnForgot: {
    flex: 1,
    width: "50%",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "blue",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#FF8040",
  },
  butForgot: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  itemBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

//-----------------------------MODAL USER----------------------------------
export const USERFORM = StyleSheet.create({
  safeView: {
    flex: 1,
    //backgroundColor: 'white',
  },
  //-------------TOP----------
  topUser: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#CFCFCF",
  },
  leftTopUser: {
    flex: 1,
    flexDirection: "row",
  },
  rightTopUser: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconLeftUser: {
    flex: 1,
    //marginHorizontal: 10,
    fontSize: 50,
    width: "100%",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  itemLeftTop: {
    //alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textTitleTop: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textNameTop: {
    fontSize: 20,
    //fontWeight: "bold",
  },
  iconRightUser: {
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  //-------------BODY----------
  bodyUser: {
    flex: 10,
  },
  contaiBody: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: "baseline",
  },
  pressFlex: {
    flex: 0.2,
    marginVertical: 50,
//    alignItems: 'center',
    //justifyContent: 'center' ,
   
  },
  viewPress: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 30,
    //justifyContent: "center",
  },
  textPress: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    //paddingHorizontal: 10,
  },
  //-------------FOOTER----------
  footUser: {
    flex: 2,
  },
  pressFoot: {
    flex: 1,
    alignItems: 'center',
  },
  viewPressFoot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 30,
    //justifyContent: "center",
  },
  textPressFoot: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10,
    //paddingHorizontal: 10,
  },
});

//-----------------------------MODAL SETTING----------------------------------
export const SETTINGRFORM = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  //-------------TOP----------
  topSett: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#CFCFCF",
  },
  leftTopSett: {
    flex: 1,
    flexDirection: "row",
  },
  rightTopSett: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconLeftSett: {
    flex: 1,
    //marginHorizontal: 10,
    fontSize: 50,
    width: "100%",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  itemLeftTop: {
    //alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textTitleTop: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textNameTop: {
    fontSize: 20,
    //fontWeight: "bold",
  },
  iconRightSett: {
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  //-------------BODY----------
  bodySett: {
    flex: 10,
  },
  contaiBody: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: "baseline",
  },
  pressFlex: {
    flex: 0.2,
    //marginVertical: 50,
//    alignItems: 'center',
    //justifyContent: 'center' ,
   
  },
  viewPress: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 30,
    //justifyContent: "center",
  },
  textPress: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    //paddingHorizontal: 10,
  },
  //-------------FOOTER----------
  footSett: {
    flex: 2,
  },
  pressFoot: {
    flex: 1,
    alignItems: 'center',
  },
  viewPressFoot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 30,
    //justifyContent: "center",
  },
  textPressFoot: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10,
    //paddingHorizontal: 10,
  },
  textVer: {
    fontSize: 20,
    fontWeight:'bold',
    textAlign: "center",
  },
});