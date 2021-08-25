import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("screen");
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Explore");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/wp4323968.png")}
        style={{ width: width, height: height }}
      >
        <View style={styles.darkLayer}></View>
        <View style={styles.iconLogo}>
          <FontAwesome5 name="seedling" color="white" size={100} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}> Welcome Back !</Text>
        </View>
        <View style={styles.tip}>
          <Text style={styles.tipText}>Sign in to start your garden </Text>
        </View>
        <View style={styles.inputArea}>
          <View style={styles.textInput}>
            <View style={styles.icon}>
              <FontAwesome name="user-o" color="gray" size={20} />
            </View>
            <TextInput
              placeholder="Your Username..."
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </View>
          {/* **************** PASSWORD **************** */}
          <View style={{ paddingTop: 18 }} />
          <View style={styles.textInput}>
            <View style={styles.icon}>
              <FontAwesome name="lock" color="gray" size={20} />
            </View>
            <TextInput
              placeholder="Your Password..."
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: 37,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(60, 179, 113)",
              width: 370,
              height: 48,
              borderRadius: 8,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  darkLayer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000000",
    opacity: 0.4,
  },
  iconLogo: {
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 59,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  tip: {
    marginLeft: 70,
    marginRight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  tipText: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingTop: 5,
  },
  textInput: {
    width: width - 60,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 15,
  },
  icon: {
    paddingLeft: 20,
  },
  inputArea: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default observer(Signin);
