import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
function GoalInput({ addItemHandler, visible, closeModal }) {
  const [enteredGoal, setGoal] = useState("");
  const inputHandler = val => {
    setGoal(val);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter you goal here"
            onChangeText={inputHandler}
            value={enteredGoal}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Add"
                onPress={() => {
                  addItemHandler(enteredGoal);
                  setGoal("");
                }}
              />
            </View>
            <View style={styles.btn}>
              <Button
                style={styles.btn}
                title="Cancel"
                color="crimson"
                onPress={closeModal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginVertical: 20
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: "navy",
    marginBottom: 10,
    width: "70%"
  },
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 20
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  btn: {
    minWidth: 100
  }
});
