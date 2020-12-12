import React from "react";
import { View, Text, TextBase, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 24,
  },
});

export default AppText;
