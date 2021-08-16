import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
import Tabs from "../Navigation/tabs";
// ITEM IMPORT
import PlantItem from "./PlantItem";
// AUTHSTORE
import authStore from "../stores/authStore";
// PLANTSTORE
import plantStore from "../stores/plantStore";

// ANIMATED

const PlantList = () => {
  if (plantStore.isLoading) return <Text> Loading... </Text>;

  // const tripListFiltered = tripStore.trips.filter(
  //   (trip) => trip.userId !== authStore.user.id
  // );

  // const tripList = tripListFiltered.map((trip) => (
  //   <TripItem trip={trip} key={trip.id} navigation={navigation} />
  // ));

  return (
    <>
      <View>
        <Text>PLANT LIST</Text>
        <Tabs />
      </View>
    </>
  );
};
export default observer(PlantList);
