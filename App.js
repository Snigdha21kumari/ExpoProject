import React, { Component } from "react";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
          <Navigation />
        </NavigationContainer>
      </>
    );
  }
}
