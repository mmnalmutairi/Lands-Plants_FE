import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";

const Explore = () => {
  const navigation = useNavigation();
  const FilteringPlants = () => {
    // Should filter the Plants according to the categories
    // const filteredplant = plantStore.plants.filter(
    //   (plant) => plant.categoryId === categoryStore.category.id
    // );
    // const plantList = filteredplant.map((plant) => (
    //   <PlantItem plant={plant} key={plant.id} navigation={navigation} />
    // ));
  };
  const handlePress = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          marginLeft: 390,
          paddingTop: 60,
          paddingBottom: 10,
        }}
      >
        <AntDesign name="logout" size={24} color="white" />
      </TouchableOpacity>
      {/* <View style={styles.header}> */}
      <View style={{ height: "30%", backgroundColor: "white" }}>
        {/* Plants List according to categories */}
      </View>
      <View style={{ height: "45%", backgroundColor: "lightgray" }}>
        {/* What to plant these days */}
      </View>
      {/* </View> */}

      <View style={styles.footer}>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              tintColor: "red",
              marginVertical: -40,
              marginHorizontal: -10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/Vegi.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              marginVertical: -40,
              marginHorizontal: 70,
              tintColor: "green",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 70,
              borderRadius: 35,
              marginVertical: -80,
              marginHorizontal: 160,
              backgroundColor: "#00996D",
            }}
          >
            <FontAwesome name="user-o" color="#FFFFFF" size={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/wheatIcon.png")}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              marginLeft: 240,
              marginTop: -39,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/Flower.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              marginLeft: 305,
              marginTop: -70,
              tintColor: "pink",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    flex: 0.02,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 37,
  },
});
export default Explore;
