import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";
import GameOver from "./screens/GameOver";

//for customised font

const getFonts = () => {
  //remember to return. without that, it wont run
  return Font.loadAsync({
    "bold-sand": require("./assets/fonts/Quicksand-Bold.ttf"),
    "reg-sand": require("./assets/fonts/Quicksand-Regular.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={err => console.log(err)}
        onFinish={() => setFontLoaded(true)}
      />
    );
  } else {
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
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
