import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../globalStyle/styles";
function MealDetailScreen({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <Text>Meal Details Screen</Text>
      <Button
        color="pink"
        title="Go back to Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({});
