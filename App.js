import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./components/Navigation/index";

/**
 * GENERAL COMMENTS
 *
 * - Remove all console logs before merging to main.
 * - Find and remove all unused imports and variables.
 * - Move all your styles to a styles.js and create styled components for everything.
 */

// you don't need this Stack here, remove it
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
