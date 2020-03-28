import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const restartGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler = number => {
    if (number) {
      setUserNumber(number);
      setGuessRounds(0);
    }
  };
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let displayScreen = <StartGame startGameHandler={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    displayScreen = (
      <PlayGame userChoice={userNumber} gameOverHandler={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    displayScreen = (
      <GameOver
        guessRounds={guessRounds}
        userNumber={userNumber}
        restartGameHandler={restartGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a numbers" />
      {displayScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
