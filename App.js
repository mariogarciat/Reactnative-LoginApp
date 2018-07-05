import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Login } from './src/components/Login';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "asdf"};
  }

  alertUN = userName => {
    this.setState({username: userName})
  }
  _onPressButton() {
    const user = this.state.username
    Alert.alert(user)
  }

  /*onPressButton = () => {
    const user = this.state.username
    Alert.alert(user)
  }*/
  render() {
    

    return (
      <View style={styles.container}>
        <View>
          <TextInput 
          style={styles.inputText}
          onChangeText = {username => this.setState({username})}
          placeholder="Ingrese usuario"/>
          <Text>{this.state.username}</Text>
          <TextInput 
          style={styles.inputText}
          secureTextEntry = {true}
          placeholder="Ingrese contraseña"/>
        </View>
        <View>
          <Button 
            title='Acceder'
            onPress={this._onPressButton.bind(this)}/>
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