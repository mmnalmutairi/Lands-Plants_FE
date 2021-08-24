import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotificationItem from "./NotificationItem";
const NotificationList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/greenWallpaper.jpeg")}
        style={styles.wallpaper}
      >
        <TouchableOpacity
          style={styles.backIcon}
          // onPress={() => navigation.navigate("Explore")}
        >
          <Ionicons name="chevron-back" color="white" size={30} />
        </TouchableOpacity>
        <Text style={styles.header}>Notification Center</Text>
        <TouchableOpacity onPress={navigation.navigate("Explore")}>
          <Image
            source={require("../../assets/ios-close-circle.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43aa8b",
  },
  wallpaper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
    marginLeft: 80,
    marginBottom: 20,
  },
  notiArea: {
    height: 105,
    margin: 10,
    backgroundColor: "rgba(37,37,37,0.5)",
    borderRadius: 13,
  },
  notiHeader: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: 10,
  },
  message: {},
  headerIcon: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 8,
  },
  closeIcon: {
    width: 35,
    height: 35,
    tintColor: "rgba(37,37,37,0.5)",
    marginLeft: 380,
  },
  headerText: {
    fontSize: 13,
    color: "#FFFFFF",
    letterSpacing: -0.08,
    lineHeight: 18,
  },
  headerTime: {
    fontSize: 13,
    color: "#FFFFFF",
    letterSpacing: -0.08,
    lineHeight: 18,
    textAlign: "center",
    marginLeft: 175,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: -0.08,
    lineHeight: 20,
  },
  message: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  messageText: {
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: -0.04,
    lineHeight: 20,
  },
  scrollView: {
    backgroundColor: "transparent",
  },
  backIcon: {
    width: 40,
    height: 40,
    marginTop: 50,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(37,37,37,0.5)",
    borderRadius: 20,
  },
});

export default NotificationList;
