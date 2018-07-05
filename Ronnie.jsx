export const Ronnie = props =>
<View style={styles.container}>
        <View>
          <TextInput
          style={styles.inputText}
          onChangeText = {username => props.alertUN(username)}
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
            onPress={props.onPressButton()}/>
        </View>
      </View>