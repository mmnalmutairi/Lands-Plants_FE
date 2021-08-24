import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

const NotificationItem = () => {
  return (
    <TouchableOpacity>
      <View style={styles.notiArea}>
        <View style={styles.notiHeader}>
          <Image
            source={require("../../assets/wateringicon.jpeg")}
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>WATER TIME</Text>
          <View>
            <Text style={styles.headerTime}> Today, 03: 01 AM</Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Watering Time</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>
            This message is a random message that test the notification view for
            now.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

var styles = StyleSheet.create({
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
  headerIcon: { width: 20, height: 20, borderRadius: 5, marginRight: 8 },
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
  title: { marginLeft: 10 },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: -0.08,
    lineHeight: 20,
  },
  message: { marginLeft: 10, justifyContent: "flex-start" },
  messageText: {
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: -0.04,
    lineHeight: 20,
  },
});
export default NotificationItem;
