import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const PlantDetails = () => {
  return (
    <View style={styles.container}>
      {/* PHOTO BANNER */}
      <View style={{ height: "35%", backgroundColor: "red" }}>
        <Image
          source={require("../../assets/wp4323968.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      {/* REQUIRMENTS */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: "#eff2f5",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: 24,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 24,
            color: "#606d87",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Requirements
        </Text>

        {/* ********************* RENDER ICONS ********************* */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 24,
            paddingHorizontal: 24,
            justifyContent: "space-between",
          }}
        >
          {/* ********************* SUN ICONS ********************* */}
          <View style={{ height: 60, alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <FontAwesome name="sun-o" color="#606d87" size={30} />
            </View>
          </View>
          {/* ********************* BAR ********************* */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 30,
              width: "10%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#BEC1D2",
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 30,
              width: "5%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#00996D",
            }}
          ></View>

          {/* ********************* WATER RATE ********************* */}

          <View style={{ height: 60, alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Entypo name="water" color="#606d87" size={30} />
            </View>
          </View>
          {/* ********************* BAR ********************* */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 140,
              width: "10%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#BEC1D2",
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 140,
              width: "7%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#00996D",
            }}
          ></View>

          {/* ********************* TEMPRETURE ICONS ********************* */}
          <View style={{ height: 60, alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <FontAwesome5 name="temperature-low" color="#606d87" size={30} />
            </View>
          </View>
          {/* ********************* BAR ********************* */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 250,
              width: "10%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#BEC1D2",
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 250,
              width: "9%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#00996D",
            }}
          ></View>
          {/* ********************* SOIL ICONS ********************* */}
          <View style={{ height: 60, alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <FontAwesome5 name="seedling" color="#606d87" size={30} />
            </View>
          </View>
          {/* ********************* BAR ********************* */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 360,
              width: "10%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#BEC1D2",
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 360,
              width: "3%",
              height: 3,
              marginTop: 8,
              backgroundColor: "#00996D",
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PlantDetails;
