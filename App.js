import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TextInput placeholder='Scrivi qualcosa' style={{borderBottomWidth: 2, marginBottom: 30,}}/>
        <Button title='invio' onPress={() => {}}/>
      </View>

      <View>

      <Text>Ciao sto lavorando su react native</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
