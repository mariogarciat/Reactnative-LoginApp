import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: "asdf"};
      }

    render() {
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
  }
}

const styles = StyleSheet.create({
    inputText: {
      margin: 20,
      height: 40
    },
    button: {
  
    }
  });