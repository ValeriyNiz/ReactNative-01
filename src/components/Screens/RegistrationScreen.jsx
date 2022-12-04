
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

const RegistrationScreen = () => {
  return(
  <View>
    <Text style={styles.title}>Регистрация</Text>
    <TextInput style={styles.textInput}
      placeholder="Логин"
    />
    <TextInput style={styles.textInput}
      placeholder="Адрес электронной почты"
      />
    <TextInput style={styles.textInput}
      placeholder="Пароль"
    />
    <Button style={styles.button}
      title='Зарегистрироваться'/>
    <Text>Уже есть аккаунт? Войти</Text>
  </View>
 )}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121'
  },
  textInput: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD'
  },
  button: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFF',
    backgroundColor: '#FF6C00',
    borderRadius: 100
  }
})

export default RegistrationScreen;