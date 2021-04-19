import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View>
        <Image source={require("../../assets/pre.png")} style={styles.header} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 20,
    width: 25,
    margin: 10,
    tintColor: "white",
    justifyContent: "flex-end",
  },
});
