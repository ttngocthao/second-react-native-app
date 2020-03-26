import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem({ text, removeItemHandler, id }) {
  return (
    <TouchableOpacity onPress={() => removeItemHandler(id)}>
      <View style={styles.itemContainer}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderStyle: "dashed",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    flex: 1
  }
});
