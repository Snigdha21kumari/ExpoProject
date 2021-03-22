import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  });
  return (
    <ImageBackground
      source={require("./assets/photo.jpeg")}
      style={styles.photo}
    >
      <Text style={styles.title}>PLANTS</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  photo: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
