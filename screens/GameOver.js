import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NumDisplay from "../components/shared/NumDisplay";
import MyButton from "../components/shared/MyButton";
import Colors from "../constants/colors";
function GameOver({ guessRounds, userNumber, restartGameHandler }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 20 }}>
        Game over
      </Text>
      <Text>I've found your number. It is:</Text>
      <NumDisplay>{userNumber}</NumDisplay>
      <Text>Took me {guessRounds} rounds</Text>
      <MyButton
        bkgColor={Colors.primaryGreen}
        title="Play again?"
        color="#4b4b4c"
        onPress={restartGameHandler}
        style={{ marginTop: 40 }}
      />
    </View>
  );
}

export default GameOver;
