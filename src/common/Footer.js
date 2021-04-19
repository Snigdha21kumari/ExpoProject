import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Footer() {
  return (
    <View>
      <Image source={require("../../assets/front.png")} style={styles.photo} />
    </View>
  );
}
export default Footer;
const styles = StyleSheet.create({
  photo: {
    height: 10,
    width: 20,
    padding: 10,
    justifyContent: "flex-end",
    tintColor: "white",
  },
});
