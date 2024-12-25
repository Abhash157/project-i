import View from "react-native";
import React, { useState } from "react";

import DataPage from "./data";
import Data from "./data";
import Backs from "./backs";
import { ScrollView } from "react-native-gesture-handler";

function Apps({navigation}) {
  const [usersData, setUsersData] = useState([]);

  const handleRegister = (newUser) => {
    const updatedUsers = [...usersData, newUser];
    setUsersData(updatedUsers);
    navigation.navigate("Home", {usersData: updatedUsers})
  };

  return (
    <ScrollView>
      {/* <Backs data={usersData} /> */}
      <Data onRegister={handleRegister} />
    </ScrollView>
  );
}

export default Apps;
