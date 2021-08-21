import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { observer } from "mobx-react";
import myPlantStore from "../stores/myPlantStore";

const PlantDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const handleAdd = async () => {
    const newItem = { plantId: item.id };
    // console.log(newItem);
    await myPlantStore.AddItemToSchedule(newItem);
    Alert.alert(
      "One more plant ",
      `${item.name} has been add to your GARDEN !`
    );
    navigation.navigate("Explore");
  };
  return (
    <View style={styles.container}>
      {/* PHOTO BANNER */}
      <View style={{ height: "35%" }}>
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <View style={{ position: "absolute", top: 50, left: 24, right: 24 }}>
          <View style={{ flex: 1 }}>
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
          <View style={{ flexDirection: "row", marginTop: "10%" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 50,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
            </View>
          </View>
        </View>
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
              <FontAwesome name="sun-o" color="#adb5bd" size={30} />
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
        {/* ******************* RENDER REQUIREMENTS **************** */}
        <View
          style={{
            flex: 2.5,
            marginTop: 24,
            paddingHorizontal: 24,
            paddingVertical: 50,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              {/* ************************************* */}
              <View style={{ marginLeft: 9 }}>
                <FontAwesome name="sun-o" color="#adb5bd" size={30} />
              </View>
              <Text
                style={{
                  marginLeft: 8,
                  color: "#606d87",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Sunlight
              </Text>
            </View>
            <Text
              style={{
                color: "#adb5bd",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              {item.sunLight} C
            </Text>
          </View>

          {/* ************************************* */}

          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ marginLeft: 9 }}>
                <Entypo name="water" color="#606d87" size={30} />
              </View>
              <Text
                style={{
                  marginLeft: 8,
                  color: "#606d87",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Water
              </Text>
            </View>
            <Text
              style={{
                color: "#adb5bd",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              {item.water} ML Daily
            </Text>
          </View>

          {/* ************************************* */}

          {/* ************************************* */}

          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ marginLeft: 9 }}>
                <FontAwesome5
                  name="temperature-low"
                  color="#606d87"
                  size={30}
                />
              </View>
              <Text
                style={{
                  marginLeft: 8,
                  color: "#606d87",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Temperature
              </Text>
            </View>
            <Text
              style={{
                color: "#adb5bd",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              {item.temperature}C
            </Text>
          </View>

          {/* ************************************* */}

          {/* ************************************* */}

          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ marginLeft: 9 }}>
                <FontAwesome5 name="seedling" color="#606d87" size={30} />
              </View>
              <Text
                style={{
                  marginLeft: 8,
                  color: "#606d87",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Soil
              </Text>
            </View>
            <Text
              style={{
                color: "#adb5bd",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              {item.soilType}
            </Text>
          </View>

          {/* ************************************* */}
        </View>

        {/* *********************** ACTION BUTTON ************************ */}
        <View style={{ flex: 1, flexDirection: "row", paddingVertical: 24 }}>
          <TouchableOpacity
            style={{
              width: "50%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: "#00996D",
            }}
            onPress={() => handleAdd()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                paddingRight: 3,
              }}
            >
              Take Action
            </Text>
            <FontAwesome name="chevron-right" color="white" size={25} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                color: "#606d87",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 20,
                alignContent: "center",
              }}
            >
              {item.growthPeriod}
            </Text>
            <View style={{ marginRight: 20 }}>
              <AntDesign name="arrowdown" color="#adb5bd" size={25} />
            </View>
          </View>
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
export default observer(PlantDetails);
