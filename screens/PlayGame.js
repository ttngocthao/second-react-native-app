import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/shared/MyButton";
import Card from "../components/shared/Card";
import Colors from "../constants/colors.js";
import NumDisplay from "../components/shared/NumDisplay";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNo = Math.floor(Math.random() * (max - min) + min);
  if (rndNo === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNo;
  }
};
function PlayGame({ userChoice }) {
  const [guessNo, setGuessNo] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  return (
    <View style={{ flex: 1, alignItems: "center", marginVertical: 40 }}>
      <Card style={{ width: 350, alignItems: "center" }}>
        <Text style={{ color: "#6E6E6DFF", fontSize: 16, textAlign: "center" }}>
          Is this your chosen number
        </Text>
        <NumDisplay>{guessNo}</NumDisplay>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            paddingTop: 40
          }}
        >
          <MyButton
            title="Lower"
            color={Colors.darkFont}
            bkgColor={Colors.pink}
          />
          <MyButton
            title="Higher"
            color={Colors.lightFont}
            bkgColor={Colors.darkGreen}
          />
        </View>
      </Card>
    </View>
  );
}

export default PlayGame;
