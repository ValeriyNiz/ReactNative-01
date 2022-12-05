
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Button from '../Button';

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
    <Button/>
    <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
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
    color: '#212121',
    marginBottom: 16,
    marginTop: 32
  },
  textInput: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    width: 343,
    height: 50,
    marginTop: 16,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 8
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371'
  }
})

export default RegistrationScreen;