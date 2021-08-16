import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import plantStore from "../stores/plantStore";
import PlantItem from "./PlantItem";

const Explore = () => {
  const FilteringPlants = () => {
    // Should filter the Plants according to the categories
    // const filteredplant = plantStore.plants.filter(
    //   (plant) => plant.categoryId === categoryStore.category.id
    // );
    // const plantList = filteredplant.map((plant) => (
    //   <PlantItem plant={plant} key={plant.id} navigation={navigation} />
    // ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              tintColor: "red",
              marginVertical: -30,
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/3823393.png")}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              marginVertical: -34,
              marginHorizontal: 100,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/wheatIcon.png")}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              marginVertical: -34,
              marginHorizontal: 200,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/Roses.png")}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              marginVertical: -31,
              marginHorizontal: 300,
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
  },
});
export default Explore;
