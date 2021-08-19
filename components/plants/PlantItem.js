import React from "react";
import { observer } from "mobx-react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";

// AUTHSTORE

// ANIMATED
const { width, height } = Dimensions.get("screen");
const PlantItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlantDetails", { item: item })}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: -20,
      }}
    >
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={{
          width: width * 0.31,
          height: "70%",
          backgroundColor: "white",
          borderRadius: 20,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: "19%",
          right: 0,
          backgroundColor: "#00996D",
          paddingHorizontal: 12,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default observer(PlantItem);
