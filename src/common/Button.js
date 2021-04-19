import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ label, style }) {
  return (
    <View>
      <TouchableOpacity style={style}>
        <Text style={styles.third}> {label}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  //   button: {
  //     backgroundColor: "#3377ff",
  //     width: 100,
  //     alignItems: "center",
  //     borderRadius: 10,
  //     height: 30,
  //     justifyContent: "center",
  //   },
  third: { color: "white", fontWeight: "bold", fontSize: 20 },
});
