import React from "react";
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens/SplashScreen";

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default Navigation;
