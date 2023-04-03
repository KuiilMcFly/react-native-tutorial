import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, } from 'react-native';
import React from 'react';
import Todo from './components/Todo';
import Input from './components/Input';

export default class App extends React.Component {
  state = {
    todoList: [],
  }

  deleteTodoHandler = (id) => {
    console.warn(id)
  }

  addTodoHandler = (value) => {
    if (value.trim() === "") {
      alert('Scrivi qualcosa!');
      return;
    }
    this.setState(prevState => {
      return {
        todoList: [...prevState.todoList, { item: value, id: Math.random().toString() }],
        value: ''
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Input addTodoHandler={this.addTodoHandler}/>
        <FlatList
          data={this.state.todoList}
          renderItem={({ item }) => <Todo deleteTodo={() => this.deleteTodoHandler(item.item.id)} title={item.item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Output: {
    marginTop: 20,

  },


});