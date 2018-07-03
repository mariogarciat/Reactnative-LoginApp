import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput 
          style={styles.inputText}
          placeholder="Ingrese usuario"/>
          <TextInput 
          style={styles.inputText}
          secureTextEntry = {true}
          placeholder="Ingrese contraseña"/>
        </View>
        <View>
          <Button 
          title='Acceder'
          onPress={this._onPressButton}/>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputText: {
    margin: 20,
    height: 40
  },
  button: {

  }
});
/*
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <TextInput 
        style={styles.inputText}
        placeholder="Ingrese usuario"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    margin: 20,
    backgroundColor: '#c8c8c8'
  }
});

*/ 