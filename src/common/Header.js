import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/pre.png")} style={styles.header} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    width: 40,
    margin: 10,
    position: "absolute",
    left: 0,
    tintColor: "white",
  },
});
