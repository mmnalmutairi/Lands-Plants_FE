import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import authStore from "../stores/authStore";

const Explore = () => {
  const navigation = useNavigation();
  const [plants, setPlants] = useState([
    {
      id: 0,
      name: "Apples",
      image: require("../../assets/Apples.jpeg"),
      categoryId: 1,
    },
    {
      id: 1,
      name: "Banana's",
      image: require("../../assets/Banana.jpeg"),
      categoryId: 1,
    },
    {
      id: 2,
      name: "Cherries",
      image: require("../../assets/Cherries.jpeg"),
      categoryId: 1,
    },
    {
      id: 3,
      name: "Coriander",
      image: require("../../assets/Coriander.jpeg"),
      categoryId: 2,
    },
    {
      id: 4,
      name: "Oranges",
      image: require("../../assets/Oranges.jpeg"),
      categoryId: 1,
    },
    {
      id: 5,
      name: "Watermelon",
      image: require("../../assets/Watermelon.jpeg"),
      categoryId: 1,
    },
  ]);
  const FilteringPlants = () => {
    // Should filter the Plants according to the categories
    // const filteredplant = plantStore.plants.filter(
    //   (plant) => plant.categoryId === categoryStore.category.id
    // );
    // const plantList = filteredplant.map((plant) => (
    //   <PlantItem plant={plant} key={plant.id} navigation={navigation} />
    // ));
  };
  const handlePress = async () => {
    await authStore.signout();
    navigation.navigate("Home");
  };

  const renderPlants = (item, index) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          marginVertical: -20,
        }}
      >
        <Image
          source={item.image}
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      <View style={{ height: "40%", backgroundColor: "white" }}>
        {/* Plants List according to categories */}
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00996D",
            marginTop: -100,
          }}
        >
          <TouchableOpacity
            onPress={handlePress}
            style={{
              marginLeft: 390,
              paddingTop: 160,
              paddingBottom: 10,
            }}
          >
            <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ marginTop: -29, marginHorizontal: 24 }}>
            <View>
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Plants
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("Focus on filteration");
                }}
              >
                <Image />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={plants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => renderPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: "45%", backgroundColor: "#edf2f4" }}>
        {/* What to plant these days */}
      </View>
      {/* </View> */}

      <View style={styles.footer}>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              tintColor: "red",
              marginVertical: -40,
              marginHorizontal: -10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/Vegi.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              marginVertical: -40,
              marginHorizontal: 70,
              tintColor: "green",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 70,
              borderRadius: 35,
              marginVertical: -80,
              marginHorizontal: 160,
              backgroundColor: "#00996D",
            }}
          >
            <FontAwesome name="user-o" color="#FFFFFF" size={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/wheatIcon.png")}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
              marginLeft: 240,
              marginTop: -39,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={FilteringPlants}>
          <Image
            source={require("../../assets/Flower.png")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              marginLeft: 305,
              marginTop: -70,
              tintColor: "pink",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f4",
  },
  footer: {
    flex: 0.02,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 37,
  },
});
export default Explore;
