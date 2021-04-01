import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  });
  return (
    <ImageBackground
      source={require("../screens/assets/photo.jpeg")}
      style={styles.photo}
    ></ImageBackground>
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
