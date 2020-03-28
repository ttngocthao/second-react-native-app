import React from "react";
import { View, Text } from "react-native";

function NumDisplay({ children }) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "center",
        color: "#6E6E6DFF"
      }}
    >
      {children}
    </Text>
  );
}

export default NumDisplay;
