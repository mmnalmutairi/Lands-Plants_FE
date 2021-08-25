import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import plantStore from "../stores/plantStore";

const SeasonList = ({ navigation }) => {
  const seasonFiltered = plantStore.plants.filter(
    (plant) => plant.season === "Summer"
  );
  console.log(seasonFiltered[1]);
  return (
    <View style={styles.seasonArea}>
      {/* What to plant these days */}
      <View style={styles.seasonAreaContainer}>
        <Text style={styles.seasonAreaText}> What Can You Plant Today </Text>
      </View>
      <View style={{ flexDirection: "row", height: "88%", marginTop: 8 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 5 }}
            onPress={() =>
              navigation.navigate("PlantDetails", { item: seasonFiltered[1] })
            }
          >
            <Image
              source={{ uri: seasonFiltered[1].image }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
            <View style={styles.wrapperView}>
              <Text
                style={{ color: "#00996D", fontSize: 20, fontWeight: "bold" }}
              >
                {seasonFiltered[1].name}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, marginTop: 10, marginLeft: 5 }}
            onPress={() =>
              navigation.navigate("PlantDetails", { item: seasonFiltered[2] })
            }
          >
            <Image
              source={{ uri: seasonFiltered[2].image }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
            <View style={styles.firstItemView}>
              <Text
                style={{ color: "#00996D", fontSize: 20, fontWeight: "bold" }}
              >
                {seasonFiltered[2].name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.3 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlantDetails", { item: seasonFiltered[3] })
            }
            style={{ flex: 1, marginLeft: 10, marginRight: 3 }}
          >
            <Image
              source={{ uri: seasonFiltered[3].image }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
            <View style={styles.secondItemView}>
              <Text
                style={{ color: "#00996D", fontSize: 20, fontWeight: "bold" }}
              >
                {seasonFiltered[3].name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  seasonAreaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  seasonArea: {
    height: "45%",
    backgroundColor: "#edf2f4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  seasonAreaText: {
    color: "#00996D",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  wrapperView: {
    position: "absolute",
    bottom: "19%",
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  firstItemView: {
    position: "absolute",
    bottom: "19%",
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  secondItemView: {
    position: "absolute",
    bottom: "19%",
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
export default SeasonList;
