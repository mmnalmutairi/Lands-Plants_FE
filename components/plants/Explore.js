import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/core";

// ************* Import Stores *************
import authStore from "../stores/authStore";
import plantStore from "../stores/plantStore";

// ************* Import Components *************
import PlantList from "./PlantList";
import Ionicons from "react-native-vector-icons/Ionicons";
import SeasonList from "../season/SeasonList";
const Explore = () => {
  const navigation = useNavigation();
  const [plants, setPlants] = useState(plantStore.plants);

  // ****************** Handle Tab Method ******************
  const FilteringPlants = (categoryid) => {
    // Should filter the Plants according to the categories
    const filteredplant = plantStore.plants.filter(
      (plant) => plant.categoryId === categoryid
    );
    setPlants(filteredplant);
  };

  // ****************** SIGNOUT ******************
  const handlePress = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  const handleUserPlant = () => {
    navigation.navigate("MyPlantsList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Plants List according to categories */}
        <View style={styles.listContainer}>
          <TouchableOpacity
            onPress={handlePress}
            style={styles.touchableListContainer}
          >
            <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerStyle}>Plants</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("NotificationList")}
              >
                <Ionicons name="notifications" color="white" size={30} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8 }}>
              <PlantList plants={plants} navigation={navigation} />
            </View>
          </View>
        </View>
      </View>
      <SeasonList navigation={navigation} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => FilteringPlants(1)}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 50,
              borderRadius: 20,
              marginVertical: -25,
              marginHorizontal: -10,
              borderColor: "#00996D",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: "#00996D",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Fruits
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => FilteringPlants(2)}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 50,
              borderRadius: 20,
              marginVertical: -25,
              marginHorizontal: 70,
              borderColor: "#00996D",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: "#00996D",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Vegi
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUserPlant}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 70,
              borderRadius: 20,
              marginVertical: -80,
              marginHorizontal: 150,
              backgroundColor: "#00996D",
            }}
          >
            <FontAwesome5 name="seedling" color="white" size={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => FilteringPlants(3)}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 50,
              borderRadius: 20,
              marginVertical: -25,
              marginHorizontal: 230,
              borderColor: "#00996D",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: "#00996D",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Grains
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => FilteringPlants(4)}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 50,
              borderRadius: 20,
              marginVertical: -25,
              marginHorizontal: 310,
              borderColor: "#00996D",
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: "#00996D",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Roses
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f4",
  },
  footer: {
    flex: 0.02,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 37,
  },

  header: {
    height: "40%",
    backgroundColor: "white",
  },
  listContainer: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#00996D",
    marginTop: -100,
  },
  touchableListContainer: {
    marginLeft: 390,
    paddingTop: 160,
    paddingBottom: 10,
  },
  headerTitle: {
    marginTop: -29,
    marginHorizontal: 24,
  },
  headerStyle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
export default Explore;
