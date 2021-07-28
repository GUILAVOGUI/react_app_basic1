import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])

    setIsAddMode(false)
  }

  const removeGoaldHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoaldAdditiionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goad"
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoaldAdditiionHandler} />


      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoaldHandler}
            title={itemData.item.value} />} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50
  },


});
