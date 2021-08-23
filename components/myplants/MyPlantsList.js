import React from "react";
import { observer } from "mobx-react";
// ****************** Import Styles Components ******************
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// ****************** Import Stores ******************
import plantStore from "../stores/plantStore";
import myPlantStore from "../stores/myPlantStore";

// commenting your imports is good to organize things,
// but this comment is longer than the code it's for.
// ****************** Import Components ******************
import MyPlantsItem from "./MyPlantsItem";

const MyPlantsList = ({ navigation }) => {
  if (plantStore.isLoading) return <Text>Loading....</Text>;

  const myplantlist = myPlantStore.items
    .map((item) => ({ ...plantStore.getPlantById(item.plantId) }))
    .map((item) => <MyPlantsItem item={item} key={item.id} />);
  // console.log(myplantlist);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, marginTop: 60 }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate("Explore")}
          >
            <Ionicons name="chevron-back" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            paddingTop: 30,
            paddingLeft: 10,
          }}
        >
          My Plants
        </Text>
      </View>
      <View style={styles.intermediate}>
        <ScrollView style={styles.scrollView}>
          {/* ******************* RENDER REQUIREMENTS **************** */}
          <View>
            {myplantlist}
            {/* ************************************* */}
          </View>
        </ScrollView>
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
export default observer(MyPlantsList);
