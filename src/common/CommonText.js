import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CommonText({ label, striketext, color, style }) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.second, { color: color }, style]}>{label} </Text>
        <Text style={styles.twice}>{striketext} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  second: {
    fontSize: 20,
    color: "#00e673",
    fontWeight: "bold",
    color: "green",
  },
  twice: {
    fontSize: 20,
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
