import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
function CategoryGridTile({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: item.id,
          },
        })
      }
      style={{ ...styles.gridItem, backgroundColor: item.color }}
    >
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    flexDirection: "row",
    borderRadius: 20,
    margin: 15,
    justifyContent: "center",
    minHeight: 150,
  },
  itemTitle: {
    fontFamily: "Poppin-Bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
