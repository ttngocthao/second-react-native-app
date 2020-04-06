import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../globalStyle/styles";
import { CATEGORIES } from "../data/dummyData";

function CategoryMeal(props) {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);
  return (
    <View style={globalStyles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Read Recipe"
        color="coral"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
}
//ADD DYNAMIC TITLE TO HEADER
CategoryMeal.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId); //return an object
  return {
    headerTitle: selectedCategory.title,
  };
};
export default CategoryMeal;
const styles = StyleSheet.create({});
