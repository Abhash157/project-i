import React, { useState } from "react";
import Backs from "./backs";
import { ScrollView, TextInput, Button, View, Text } from "react-native";

function DataTable({ route }) {
  // Initialize state with data passed from the route
  const { usersData: initialUsersData } = route.params || { usersData: [] };
  const [usersData, setUsersData] = useState(initialUsersData);
  const [editingUser, setEditingUser] = useState(null); // Tracks the user being edited
  const [formValues, setFormValues] = useState({}); // Tracks form input values

  // Handle deletion
  const handleDelete = (id) => {
    const filteredData = usersData.filter((user) => user.id !== id);
    setUsersData(filteredData);
    alert(`User with ID ${id} has been deleted.`);
  };

  // Handle update
  const handleUpdate = (id) => {
    const user = usersData.find((user) => user.id === id);
    setEditingUser(id);
    setFormValues(user);
  };

  const saveUpdatedUser = () => {
    const updatedData = usersData.map((user) =>
      user.id === editingUser ? { ...formValues } : user
    );
    setUsersData(updatedData);
    setEditingUser(null); // Reset editing state
    alert(`User with ID ${editingUser} has been updated.`);
  };

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView>
      {editingUser ? (
        <View style={{ padding: 20, backgroundColor: "#f0f0f0", borderRadius: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Edit User</Text>

          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, borderRadius: 5 }}
            placeholder="First Name"
            value={formValues.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
          />
          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, borderRadius: 5 }}
            placeholder="Last Name"
            value={formValues.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
          />s
          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, borderRadius: 5 }}
            placeholder="Address"
            value={formValues.address}
            onChangeText={(text) => handleChange("address", text)}
          />
          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, borderRadius: 5 }}
            placeholder="Gender"
            value={formValues.gender}
            onChangeText={(text) => handleChange("gender", text)}
          />

          <Button title="Save Changes" onPress={saveUpdatedUser} />
          <Button title="Cancel" color="red" onPress={() => setEditingUser(null)} />
        </View>
      ) : (
        <Backs
          data={usersData}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </ScrollView>
  );
}

export default DataTable;
