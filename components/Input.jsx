import React from 'react'
import {TextInput, Button, View, StyleSheet} from 'react-native'

class Input extends React.Component {
    state = {
        value: '',
    }

    onChangeTextHandler = (text) => {
        this.setState({ value: text });
      }
      
    render(){
  return (
    <View style={styles.InputContainer}>
          <TextInput 
          value={this.state.value} 
          onChangeText={this.onChangeTextHandler} 
          placeholder='Scrivi qualcosa' 
          style={styles.Input} />
          <Button title='invio' onPress={this.props.addTodoHandler.bind(this, this.state.value)} />
    </View>
  )
}
}

const styles = StyleSheet.create({
   
    InputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    Input: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 4,
      },
  
  });



export default Input;
