import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { globalStyles } from "../globalStyle/styles";

import { CATEGORIES } from "../data/dummyData";

function CategoriesScreen({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

export default CategoriesScreen;
const styles = StyleSheet.create({});
