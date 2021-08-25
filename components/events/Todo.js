import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EventItem from "./EventItem";
import eventStore from "../stores/eventStore";
import EventList from "./EventList";
import plantStore from "../stores/plantStore";

const Todo = ({ navigation }) => {
  const [events, setEvents] = useState(eventStore.events);

  // const eventListFiltered = eventStore.events.filter(
  //   (event) => event.plantId === plantStore.plants.id
  // );
  // // console.log(eventListFiltered);
  // const eventList = eventListFiltered.map((event) => (
  //   <EventItem event={event} key={event.id} navigation={navigation} />
  // ));
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.paragraph}>What To Do</Text>
      </View>
      <View style={styles.section}>
        <EventList events={events} key={events.id} navigation={navigation} />
      </View>
    </View>
  );
};

{
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginTop: 200,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 40,
    fontWeight: "bold",
    paddingLeft: 20,
  },
});
export default Todo;
