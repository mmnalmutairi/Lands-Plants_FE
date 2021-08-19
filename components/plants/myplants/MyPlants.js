import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const MyPlants = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, marginTop: 60 }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate("Explore")}
          >
            <Ionicons name="chevron-back" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            paddingTop: 20,
            paddingLeft: 10,
          }}
        >
          My Plants
        </Text>
      </View>
      <View style={styles.intermediate}>
        <ScrollView style={styles.scrollView}>
          {/* ******************* RENDER REQUIREMENTS **************** */}
          <View
            style={{
              flex: 2,
              paddingHorizontal: 20,
              paddingVertical: 30,
              justifyContent: "space-between",
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                borderWidth: 1,
                borderColor: "lightgreen",
                backgroundColor: "#00996D",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* ************************************* */}
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Apples.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 180,
                  }}
                >
                  {" "}
                  Apple
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>

            {/* ************************************* */}

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Mango.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 170,
                  }}
                >
                  {" "}
                  Mango
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>

            {/* ************************************* */}

            {/* ************************************* */}

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Palm.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 190,
                  }}
                >
                  {" "}
                  Palm
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Cherries.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 150,
                  }}
                >
                  {" "}
                  Cherries
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Banana.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 160,
                  }}
                >
                  {" "}
                  Banana
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Peach.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 170,
                  }}
                >
                  {" "}
                  Peach
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>
            {/* ************************************* */}

            {/* ************************************* */}

            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                height: 100,
                backgroundColor: "#00996D",
                borderWidth: 1,
                borderColor: "lightgreen",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ marginLeft: 9 }}>
                  <Image
                    source={require("../../../assets/Watermelon.jpeg")}
                    style={{ height: 70, width: 70, borderRadius: 30 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 8,
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    paddingRight: 110,
                  }}
                >
                  {" "}
                  Watermelon
                </Text>
                <Ionicons name="chevron-forward" color="white" size={30} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
var styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#00996D",
  },
  header: {
    flex: 0.3,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#00996D",
  },
  footer: {
    flex: 0.02,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  intermediate: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  scrollView: {
    backgroundColor: "transparent",
  },
});
export default MyPlants;
