import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DefaultStyles from "../../constants/default-styles";
function MyButton({ title, color, bkgColor, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <View style={{ ...styles.button, backgroundColor: bkgColor }}>
        <Text
          style={{ ...styles.btnText, color: color, ...DefaultStyles.bodyText }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MyButton;
const styles = StyleSheet.create({
  button: {
    minWidth: 120,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#d3d3d3", //only works on ios
    shadowOffset: { width: 0, height: 2 }, //only works on ios,
    shadowRadius: 6,
    shadowOpacity: 0.5, //only works on ios
    elevation: 5
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#4b4b4c",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase"
  }
});
