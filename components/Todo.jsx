import React from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';

const Todo = (props) => {
  return (
    <View style={styles.Todo}>
    <TouchableOpacity onPress={props.deleteTodo}>
        <Text style={styles.x}>X</Text>
    </TouchableOpacity>
        <Text style={styles.TodoText}>- {props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  x: {
    backgroundColor: 'red',
    color: 'white',
    borderWidth: 1,
    padding: 5,
    borderRadius: 100,
  },

  TodoText: {
    fontSize: 17,
    marginLeft: 10,
  },
});

export default Todo;