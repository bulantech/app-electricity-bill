import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

function MapToolSearch({ onPressGo, onPressCancel, onChangeTextInput }) {
  return (
    <View style={style.container}>
      <TextInput width={200} onChangeText={onChangeTextInput}></TextInput>
      <Button title="Go" onPress={onPressGo} />
      <Button title="X" onPress={onPressCancel} color="tomato" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MapToolSearch;
