import React, { useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  });
  return (
    <ImageBackground
      source={require("./assets/photo.jpeg")}
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>PLANTS</Text>
    </ImageBackground>
  );
}
