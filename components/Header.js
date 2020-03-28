import React from "react";
import { View, Text, StyleSheet } from "react-native";
function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    paddingTop: 40,
    backgroundColor: "#ACF3D3",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#4b4b4c",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  }
});
