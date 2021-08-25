import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { observer } from "mobx-react";
import plantStore from "../stores/plantStore";
const MyPlantsItem = ({ item, navigation }) => {
  // HandleTodo = () => {
  //   if (plantStore.plants.id === 1) {
  //     navigation.navigate("Todo", { item: item });
  //   }
  // };
  //   console.log(item);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Todo")}>
      <View
        style={{
          flex: 2,
          paddingHorizontal: 20,
          paddingVertical: 30,
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 50,
            height: 100,
            borderWidth: 1,
            borderColor: "lightgreen",
            backgroundColor: "#00996D",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* ************************************* */}
            <View style={{ marginLeft: 9 }}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 70, width: 70, borderRadius: 30 }}
              />
            </View>
            <Text
              style={{
                marginLeft: 8,
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Ionicons name="chevron-forward" color="white" size={30} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default observer(MyPlantsItem);
