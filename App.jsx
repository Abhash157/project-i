import { Text, View, Button } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Login from "./screens/log";
import React, { useState } from "react";
import Data from "./data/data";
import Backs from "./data/backs";

function Apps() {
  const [usersData, setUsersData] = useState([]);

  const handleRegister = (newUser) => {
    setUsersData((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <Data onRegister={handleRegister} />
      <Backs data={usersData} />
    </div>
  );
}

export default Apps;


//  const Stack = createStackNavigator();

//  const HomeScreen = ({ navigation }) => <Home />;

//  const LoginPage = ({ navigation }) => <Login />;

//  export default function App() {
//    return (
//      <NavigationIndependentTree>
//        <Stack.Navigator initialRouteName="Home">
//          <Stack.Screen name="Login" component={LoginPage} />
//          <Stack.Screen name="Home" component={HomeScreen} />
//        </Stack.Navigator>
//      </NavigationIndependentTree>
//    );
//  }
