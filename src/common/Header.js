// import React from "react";
// import { View, Text, Image } from "react-native";

// export default function Header() {
//   return (
//     <View>
//       <Image source={require("../../assets/back.png")} />
//     </View>
//   );
// }

import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import { back } from "../../assets/back.png";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10, width: 20, backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={this.props.navigation1}
            style={{ backgroundColor: "red", padding: 20 }}
          >
            <Image source={back} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
