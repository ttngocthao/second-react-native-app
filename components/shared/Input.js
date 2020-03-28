import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#3FB488",
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
    textAlign: "center"
  }
});
