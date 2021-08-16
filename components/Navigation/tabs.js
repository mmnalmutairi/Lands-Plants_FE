import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import Home from "../Home";
// import PlantList from "../plants/PlantList";
import PlantItem from "../plants/PlantItem";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "red" : "gray",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PlantItem"
        component={PlantItem}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "green" : "gray",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PlantItem"
        component={PlantItem}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "pink" : "gray",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PlantItem"
        component={PlantItem}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/9f2a63d7fcf4f314800dd3f4f40c4a67.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "yellow" : "gray",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
