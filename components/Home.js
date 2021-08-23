import React from "react";
import authStore from "./stores/authStore";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

/**
 * Move your styles into styles.js and create styled components.
 * This code is too cluttered like this.
 */

const Home = ({ navigation }) => {
  console.log(authStore.user);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/icon-veggies.png")}
          style={styles.logo}
          resizeMode={"stretch"}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>
          Weeds Are Flowers too, Once you get to know them !
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <View style={styles.button}>
            <View style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="white" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};
const { height } = Dimensions.get("screen");
const height_logo = height * 0.9 * 0.4;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43aa8b",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
  },
  title: {
    color: "#43aa8b",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-start",
    marginTop: 30,
    marginLeft: 200,
    backgroundColor: "#43aa8b",
    borderRadius: 50,
    width: 150,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
export default Home;
