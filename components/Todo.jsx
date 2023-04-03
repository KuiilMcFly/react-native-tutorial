import React from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';

const Todo = (props) => {
  return (
    <TouchableOpacity onPress={props.deleteTodo}>
      <View style={styles.Todo}>
        <Text style={styles.TodoText}>- {props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Todo: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 10,
  },
  TodoText: {
    fontSize: 17,
  },
});

export default Todo;