import React, { useState } from "react";
import Backs from "./backs";
import { ScrollView } from "react-native-gesture-handler";

function DataTable() {
    const [usersData, setUsersData] = useState([]);
  return (
    <ScrollView>
      <Backs data={usersData} />\
    </ScrollView>
  );
}

export default DataTable;
