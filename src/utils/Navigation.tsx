/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import Header from "./Header";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Amar Wallet 💰"
          component={HomeScreen}
          options={{
            headerTitle: "Amar Wallet 💰",
            headerLargeTitle: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
