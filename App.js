import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, View, ImageBackground } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import PlayGame from "./screens/PlayGame";
import GameOver from "./screens/GameOver";
const bkgImg = {
  uri:
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v567-mynt-doodles-01_1.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=6a8abc713949e2f010acba0b3532ae04"
};
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
        <ImageBackground
          style={styles.screen}
          source={bkgImg}
          resizeMode="cover"
        >
          <Header title="Guess a numbers" />
          {displayScreen}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
