import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { globalStyles } from "../globalStyle/styles";

import { CATEGORIES } from "../data/dummyData";

function CategoriesScreen({ navigation }) {
  const renderGridItem = ({ item }) => {
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
  };
  return (
    <View style={globalStyles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderGridItem({ item })}
      />
    </View>
  );
}

export default CategoriesScreen;
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
