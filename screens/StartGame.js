import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Colors from "../constants/colors";
import MyButton from "../components/shared/MyButton";
import Card from "../components/shared/Card";
import Input from "../components/shared/Input";

function StartGame({ startGameHandler }) {
  const [inputVal, setInputVal] = useState("");
  const [inputConfirmed, setInputConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(); //initial state for selectedNumber is undefined
  const setInputValHandler = val => {
    setInputVal(val.replace(/[^0-9]/g, "")); //replace any character which is not 0-9 with empty string''
  };
  const resetInputHandler = () => {
    setInputVal("");
    setInputConfirmed(false);
  };
  let confirmMsg;
  if (inputConfirmed) {
    confirmMsg = (
      <Card style={styles.confirmMsg}>
        <Text style={{ color: "#6E6E6DFF", fontSize: 16, textAlign: "center" }}>
          Your chosen number
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            textAlign: "center",
            color: "#6E6E6DFF"
          }}
        >
          {selectedNumber}
        </Text>
        <MyButton
          title="Play"
          bkgColor={Colors.primaryGreen}
          color={Colors.darkFont}
          style={{ width: "100%", marginTop: 20 }}
          onPress={() => startGameHandler(selectedNumber)}
        />
      </Card>
    );
  }
  const confirmInputHandler = () => {
    const chosenNo = parseInt(inputVal);
    if (isNaN(chosenNo) || chosenNo <= 0 || chosenNo > 99) {
      Alert.alert("Invalid input", "Input must be a number between 0-99", [
        { text: "OK", onPress: resetInputHandler, style: "destructive" }
      ]);
      return;
    }
    setInputConfirmed(true);
    setSelectedNumber(chosenNo);
    setInputVal("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.textTitle1}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Input
            placeholder="Enter a number"
            keyboardType="number-pad"
            blurOnSubmit
            maxLength={2}
            value={inputVal}
            onChangeText={setInputValHandler}
          />
          <View style={styles.buttonContainer}>
            <MyButton
              title="Reset"
              bkgColor={Colors.primaryGreen}
              color={Colors.darkFont}
              onPress={resetInputHandler}
            />
            <MyButton
              title="Confirm"
              bkgColor={Colors.darkGreen}
              color={Colors.lightFont}
              onPress={confirmInputHandler}
            />
          </View>
        </Card>
        {confirmMsg && confirmMsg}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGame;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%"
  },
  inputContainer: {
    width: 320,
    maxWidth: "90%",
    alignItems: "center",
    paddingTop: 40
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  textTitle1: {
    fontSize: 20,
    paddingVertical: 20,
    fontFamily: "bold-sand"
  },

  inputLabel: {
    color: "gray",
    fontSize: 16
  },
  confirmMsg: {
    marginVertical: 20,
    width: "80%",
    backgroundColor: Colors.pink,
    paddingTop: 40,
    paddingBottom: 40
  }
});
