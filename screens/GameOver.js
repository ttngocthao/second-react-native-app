import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NumDisplay from "../components/shared/NumDisplay";
import MyButton from "../components/shared/MyButton";
import Colors from "../constants/colors";
import TrophyImg from "../assets/trophy.png";
function GameOver({ guessRounds, userNumber, restartGameHandler }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 20 }}>
        Game over
      </Text>
      <View
        style={{
          borderRadius: 100,
          width: 200,
          height: 200,
          overflow: "hidden",
          marginBottom: 20
        }}
      >
        <Image
          source={require("../assets/trophy.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

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
