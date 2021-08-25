import React from "react";
// ****************** Import Styles Components ******************
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import EventItem from "./EventItem";
import eventStore from "../stores/eventStore";

const EventList = ({ events, navigation }) => {
  if (eventStore.isLoading) return <Text>Loading....</Text>;
  return (
    <View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <EventItem item={item} key={index} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
var styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#00996D",
  },
  header: {
    flex: 0.3,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#00996D",
  },
  footer: {
    flex: 0.02,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  intermediate: {
    flex: 1.5,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  scrollView: {
    backgroundColor: "transparent",
  },
});
export default EventList;
