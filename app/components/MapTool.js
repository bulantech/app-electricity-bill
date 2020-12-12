import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommnunityIcons } from "@expo/vector-icons";

function MapTool({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{iconName}</Text>
        {/* <MaterialCommnunityIcons name={iconName} size={30} color="#000" /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
});

export default MapTool;
