import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

function AppCard({ image, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" style={styles.image} source={image} />
      <AppText style={{ fontWeight: "bold" }}>{title}</AppText>
      <AppText style={{ color: "tomato" }}>{subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default AppCard;
