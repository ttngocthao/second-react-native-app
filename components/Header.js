import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        <AntDesign name="home" size={32} color="black" />
        <Text style={{ paddingLeft: 20 }}>{title}</Text>
      </Text>
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
    paddingBottom: 10,
    fontFamily: "bold-sand"
  }
});
