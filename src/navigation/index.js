import React from "react";
import { Image, View, Text } from "react-native";
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomDrawer from "../common/CustomDrawer";

import { SplashScreen, List, HomeScreen, Cart } from "../screens";

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerScreen() {
  return (
    <drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerType="slide"
    >
      <drawer.Screen name="HomeScreen" component={TabScreen} />
    </drawer.Navigator>
  );
}
function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: {
          borderTopWidth: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../assets/favourite.png")}
                style={{ width: 25, height: 25, tintColor: color }}
                tintColor={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Radio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../assets/antenna.png")}
                style={{ width: 25, height: 25, tintColor: color }}
                tintColor={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={require("../../assets/basket.png")}
                style={{ width: 25, height: 25, tintColor: color }}
                tintColor={color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = (props) => {
  return (
    <Stack.Navigator initialRouteName="Cart">
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
        component={DrawerScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
