import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import AppButton from "../components/AppButton";

function DetailScreen({ navigation, route }) {
  const [editMode, setEditMode] = useState(0);
  const [newName, setNewName] = useState("");

  function switchView() {
    if (editMode === 0) {
      return (
        <View>
          <Text style={{ fontSize: 25 }}>Name: {route.params.data.name} </Text>
          <Text>Latitude: {route.params.data.coordinates[0]} </Text>
          <Text>Longitude: {route.params.data.coordinates[1]} </Text>

          <Button
            title="Edit"
            color="dodgerblue"
            onPress={() => {
              setEditMode(1);
              setNewName(route.params.data.name);
            }}
          />
          <Button
            title="Back to Map"
            color="tomato"
            onPress={() => {
              navigation.navigate("Map", {
                date: { newName, id: route.params.data.id },
              });
            }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{ fontSize: 25 }}>Name: </Text>
          <TextInput style={{ backgroundColor: "gold" }}>{newName}</TextInput>
          <Text>Latitude: {route.params.data.coordinates[0]} </Text>
          <Text>Longitude: {route.params.data.coordinates[1]} </Text>

          <Button title="Save" color="dodgerblue" onPress={() => {
              navigation.navigate("Map", {
                date: { newName, id: route.params.data.id },)
          }} />
          <Button title="Cancel" color="tomato" onPress={() => {}} />
        </View>
      );
    }
  }

  return <View style={styles.container}> {switchView()} </View>;

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DetailScreen;
