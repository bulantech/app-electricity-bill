import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen1({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://lh3.googleusercontent.com/proxy/uiVNcAl9VG--tSR5RujpNsL9pYeeypeSF412X4PMuWgXSa511sMXn1MN5NhO_xp5HDEhHt-eUUFaRdD2Myi55czFUX01CMZ8UyGcM40BFyudNA",
      }}
      style={styles.background}
    >
      {/* <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://www.nu.ac.th/wp-content/uploads/2018/01/NULOGO-Download-EN.png",
          }}
        />
        <Text style={styles.logoText}>SEVEN ELEVEN</Text>
      </View> */}

      {/* <AppButton
        title="Map"
        color="black"
        onPress={() => {
          navigation.navigate("Maps");
        }}
      /> */}

        <AppButton
            title="คำนวนค่าน้ำ"
            color="black"
            onPress={() => {
                navigation.navigate("Waterworks");
            }}
        />
        <AppButton
            title="คำนวนค่านไฟ"
            color="black"
            onPress={() => {
                navigation.navigate("Electricity");
            }}
        />


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#B2BABB'
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: "#fff",
  },
});

export default WelcomeScreen1;
