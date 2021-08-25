import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import eventStore from "../stores/eventStore";
const EventItem = ({ item, navigation }) => {
  const [checked, setchecked] = useState({
    done: false,
  });
  const MarkCompleted = (itemId) => {
    setchecked(true);
    const CheckingEvent = eventStore.getEventById(itemId);
    if (!CheckingEvent.done) {
      eventStore.updateEvent(CheckingEvent);
    }
  };

  return (
    <View>
      <View>
        <View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              elevation: 12,
              borderRadius: 7,
              marginVertical: 10,
              height: 60,
              width: 350,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {item.done ? (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <FontAwesome5 name="calendar-check" size={25} color="green" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => MarkCompleted(item.id)}
              >
                <FontAwesome5 name="calendar-check" size={25} color="orange" />
              </TouchableOpacity>
            )}

            <Text
              style={{
                marginLeft: 40,
                marginTop: 15,
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
                position: "absolute",
                textDecorationLine: item.done ? "line-through" : "none",
              }}
            >
              {item.type}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
// events.id
export default EventItem;
