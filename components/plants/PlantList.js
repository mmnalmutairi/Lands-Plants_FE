import React from "react";
import { observer } from "mobx-react";
import { Text, FlatList } from "react-native";
// ITEM IMPORT
import PlantItem from "./PlantItem";
// AUTHSTORE
import authStore from "../stores/authStore";
// PLANTSTORE
import plantStore from "../stores/plantStore";

// ANIMATED

const PlantList = ({ plants, navigation }) => {
  if (plantStore.isLoading) return <Text> Loading... </Text>;

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={plants}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <PlantItem item={item} key={index} navigation={navigation} />
      )}
    />
  );
};
export default observer(PlantList);
