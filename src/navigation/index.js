import React from "react";
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, List } from "../screens";

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
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
    </Stack.Navigator>
  );
};

export default Navigation;
