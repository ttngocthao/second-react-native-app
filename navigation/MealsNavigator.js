import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LinearGradient } from "expo-linear-gradient";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
//actually a react component
const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },

    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: {
      headerBackground: () => {
        return (
          <LinearGradient
            colors={["#0b0742", "#120c6e", "#5e72eb", "#ff9190", "#fdc094"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        );
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealNavigator);
/*(
        <LinearGradient
          colors={["#0b0742", "#120c6e", "#5e72eb", "#ff9190", "#fdc094"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ) */
