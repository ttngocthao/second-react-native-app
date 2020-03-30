import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";

import DefaultStyles from "../constants/default-styles";
import MyButton from "../components/shared/MyButton";
import Card from "../components/shared/Card";
import Colors from "../constants/colors.js";
import NumDisplay from "../components/shared/NumDisplay";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNo = Math.floor(Math.random() * (max - min)) + min;
  if (rndNo === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNo;
  }
};

function PlayGame({ userChoice, gameOverHandler }) {
  const [guessNo, setGuessNo] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState([]);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (guessNo === userChoice) {
      gameOverHandler(rounds.length);
    }
  }, [guessNo, userChoice, gameOverHandler]);

  const nextGuessHandler = hint => {
    //check if the user gives the correct hint
    if (
      (userChoice > guessNo && hint === "lower") ||
      (userChoice < guessNo && hint === "higher")
    ) {
      Alert.alert(
        "Oops!",
        "It seems you are not very honest about your choice? Please play fairly",
        [{ text: "Agree?" }]
      );
      return;
    }

    if (hint === "lower") {
      currentMax.current = guessNo;
    } else {
      currentMin.current = guessNo;
    }
    const nextGuessNo = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      guessNo
    );

    setGuessNo(nextGuessNo);
    setRounds(curRounds => [guessNo, ...curRounds]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginVertical: 40 }}>
      <Card style={{ width: 350, alignItems: "center" }}>
        <Text
          style={{
            color: "#6E6E6DFF",
            fontSize: 16,
            textAlign: "center",
            ...DefaultStyles.bodyText
          }}
        >
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
            onPress={() => nextGuessHandler("lower")}
          />
          <MyButton
            title="Higher"
            color={Colors.lightFont}
            bkgColor={Colors.darkGreen}
            onPress={() => nextGuessHandler("higher")}
          />
        </View>
      </Card>
      <View>
        <FlatList
          data={rounds}
          renderItem={({ item }) => (
            <View>
              <Text>Previous guess:{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default PlayGame;
