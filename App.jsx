import { Text, View, Button } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import LoginPage from "./screens/log";
import React, { useState } from "react";
import DataServer from "./data/register"
import DataTable from "./data/dataTable"

 const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationIndependentTree>
       <Stack.Navigator initialRouteName="Data">
         <Stack.Screen name="Login" component={LoginPage} />
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Data" component={DataServer} />
         <Stack.Screen name="Table" component={DataTable} />
       </Stack.Navigator>
     </NavigationIndependentTree>
   );
 }

