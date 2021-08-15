import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

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
          options={{ title: "Signup" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
