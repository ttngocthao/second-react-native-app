import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Keyboard,
  FlatList,
  Modal,
  Text
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess numbers" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
