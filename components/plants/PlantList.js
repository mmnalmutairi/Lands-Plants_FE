import React from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";
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
      </View>
    </>
  );
};
export default observer(PlantList);
