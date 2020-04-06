import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";

const getFonts = () => {
  return Font.loadAsync({
    "Poppins-Reg": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppin-Bold": require("./assets/fonts/Poppins-Bold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />
    );
  } else {
    return <MealsNavigator />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  text: {
    fontFamily: "Poppin-Bold",
    fontSize: 20
  }
});
