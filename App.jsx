import React from "react";
import { Text, View, Button } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Login from "./screens/log";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => <Home />;

const LoginPage = ({ navigation }) => <Login />;

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
