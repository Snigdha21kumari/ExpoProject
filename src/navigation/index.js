import React from "react";
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, List, HomeScreen } from "../screens";

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
