import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import React from 'react';



export default class App extends React.Component {
  state = {
    value: '',
    todoList: [],

  }

  addTodoHandler = () => {
    if(this.state.value.trim() === ""){
      alert('Scrivi qualcosa!')
      return;
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat(prevState.value),
        value: ''
      }
    })
    
  }

  onChangeTextHandler = (text) => {
    this.setState({value: text})
  }
  render () {
    
    

  return (
    <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder='Scrivi qualcosa' style={styles.Input}/>
          <Button title='invio' onPress={this.addTodoHandler}/>
        </View>
        <FlatList
          data={this.state.todoList}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.Todo}>- {item.trim()}</Text>
            </View>
          )}
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

  Input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
  },

  InputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },

  Output: {
    marginTop: 20,
    
  },

  Todo: {
    fontSize:17,
    borderWidth: 1,
    padding: 5,
    borderRadius:5,
    backgroundColor: 'gray',
    margin: 10,
  },
});
