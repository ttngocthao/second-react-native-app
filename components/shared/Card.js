import React from "react";
import { View, StyleSheet } from "react-native";
function Card({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

export default Card;
const styles = StyleSheet.create({
  card: {
    elevation: 8,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});
