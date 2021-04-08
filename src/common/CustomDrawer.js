import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.container}
      >
        <Text style={styles.word}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccffcc",
  },
  word: { fontSize: 30, color: "#006600", fontWeight: "500" },
});
