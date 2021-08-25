import React from "react";
import authStore from "./stores/authStore";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
const { height, width } = Dimensions.get("screen");
const Home = ({ navigation }) => {
  console.log(authStore.user);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Swiper autoplay={true}>
        <View style={styles.slide}>
          <Image
            source={require("../assets/Wallpaper1.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/Wallpaper4.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/Wallpaper3.jpeg")}
            style={styles.image}
          />
        </View>
      </Swiper>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Weeds Are Flowers too, Once you get to know them !
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.signupText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signinContainer}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signinText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const height_logo = height * 0.9 * 0.4;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: height,
    width: width,
  },
  textContainer: {
    position: "absolute",
    bottom: 270,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: 350,
    height: 100,
    backgroundColor: "rgba(37,37,37,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFFFFF",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 20,
    color: "#43aa8b",
  },
  signinContainer: {
    width: 180,
    height: 60,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  signinText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
export default Home;
