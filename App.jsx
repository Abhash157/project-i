import React from "react";
import { Text, View, Button } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import LoginPage from "./screens/log";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
