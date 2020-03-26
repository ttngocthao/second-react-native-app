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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addItemHandler = enteredGoal => {
    setGoalList(currentList => [
      ...currentList,
      { id: Math.random().toString(), text: enteredGoal }
    ]);
    setModalVisible(false);
    Keyboard.dismiss();
  };

  const removeItemHandler = id => {
    setGoalList(currentList => currentList.filter(item => item.id !== id));
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />

      <GoalInput
        addItemHandler={addItemHandler}
        visible={modalVisible}
        closeModal={closeModal}
      />
      <FlatList
        style={styles.itemList}
        data={goalList}
        keyExtractor={itemData => itemData.id}
        renderItem={({ item }) => {
          //console.log(item);
          return (
            <GoalItem
              id={item.id}
              text={item.text}
              removeItemHandler={removeItemHandler}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center"
  },

  itemList: {
    marginTop: 10
  }
});
