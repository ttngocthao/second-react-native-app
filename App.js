import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = number => {
    if (number) {
      setUserNumber(number);
    }
  };
  return (
    <View style={styles.screen}>
      <Header title="Guess a numbers" />

      {userNumber ? (
        <PlayGame />
      ) : (
        <StartGame startGameHandler={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
