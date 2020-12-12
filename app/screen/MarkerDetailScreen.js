import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput, Alert } from "react-native";

import { create } from "apisauce";

function MarkerDetailScreen({ navigation, route }) {
  const [editMode, setEditMode] = useState(0);
  const [newName, setNewName] = useState("");

  async function updatePoint(id, name) {
    const apiClient = create({
      baseURL:
        "https://www.geo-nred.nu.ac.th/research_s/2019/food/foodapp/updatepoint.php?id=" +
        id +
        "&name=" +
        name,
    });
    const sendPoint = () => apiClient.get();
    const response = await sendPoint();
  }

  async function deletePoint(id) {
    const apiClient = create({
      baseURL:
        "https://www.geo-nred.nu.ac.th/research_s/2019/food/foodapp/deletepoint.php?id=" +
        id,
    });
    const sendDelPoint = () => apiClient.get();
    const response = await sendDelPoint();
    navigation.navigate("Maps", {
      delete: { data: true },
    });
  }

  function switchView() {
    if (editMode === 1) {
      return (
        <View>
          <Text>Name: </Text>
          <TextInput
            style={{ backgroundColor: "white" }}
            onChangeText={(value) => {
              setNewName(value);
            }}
          >
            {newName}
          </TextInput>
          <Text>Latitude : {route.params.data.location[0]} </Text>
          <Text>Longitude : {route.params.data.location[1]} </Text>
          <Button
            title="Save"
            color="dodgerblue"
            onPress={() => {
              updatePoint(route.params.data.id, newName);
              navigation.navigate("Maps", {
                postback: { data: true },
              });
            }}
          />
          <Button
            title="Cancel"
            color="tomato"
            onPress={() => {
              setEditMode(0);
            }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Name : {route.params.data.name} </Text>
          <Text>Latitude : {route.params.data.location[0]} </Text>
          <Text>Longitude : {route.params.data.location[1]} </Text>
          <Button
            title="Edit"
            onPress={() => {
              setEditMode(1);
              setNewName(route.params.data.name);
            }}
          />
          <Button
            title="Delete"
            color="red"
            onPress={() => {
              Alert.alert("Warning", "Are you sure to delete this point?", [
                {
                  text: "Yes",
                  onPress: () => {
                    deletePoint(route.params.data.id);
                  },
                },
                {
                  text: "Cancel",
                  onPress: () => {},
                  style: "cancel",
                },
              ]);
              //setNewName(route.params.data.name);
            }}
          />
          <Button
            title="Back to Map"
            color="tomato"
            onPress={() =>
              navigation.navigate("Maps", {
                postback: { data: true },
              })
            }
          />
        </View>
      );
    }
  }

  return <View style={styles.container}>{switchView()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default MarkerDetailScreen;
