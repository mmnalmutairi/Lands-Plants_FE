import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Explore from "../plants/Explore";
import PlantDetails from "../plants/PlantDetails";
import MyPlantsList from "../myplants/MyPlantsList";
import Calendar1 from "../calendar/Calendar";
import NotificationList from "../notification/NotificationList";
import schedule from "../plants/schedule";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerColor: "transparent",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar1"
          component={Calendar1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlantDetails"
          component={PlantDetails}
          options={({ route }) => {
            const { item } = route.params;
            return {
              title: item.name,
              headerShown: false,
            };
          }}
        />
        <Stack.Screen
          name="MyPlantsList"
          component={MyPlantsList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationList"
          component={NotificationList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="schedule"
          component={schedule}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
