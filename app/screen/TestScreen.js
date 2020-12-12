import React from "react";
import { View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function TestScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>Hello AppText</AppText>
      <AppText>Hello AppText again!!</AppText>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          paddingTop: 20,

          //borderRadius
        }}
      ></View>

      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons name="email" size={24} color="#fff" />
      </View>
      <AppButton
        title="Button1"
        onPress={() => {
          console.log("Button1 pressed");
        }}
      />
      <AppButton
        title="Button2"
        color="gold"
        onPress={() => {
          console.log("Button2 pressed");
        }}
      />
      <AppButton
        title="Button3"
        color="tomato"
        onPress={() => {
          console.log("Button3 pressed");
        }}
      />
    </View>
  );
}

export default TestScreen;
