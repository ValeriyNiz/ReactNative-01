
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, Platform, TouchableOpacity } from 'react-native';

const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboard}
      keyboardVerticalOffset={150}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.fotoFrame}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image style={styles.addBtn} source={require('../../Images/add.png')}></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput style={styles.textInput}
              placeholder="Логин"/>
          <TextInput style={styles.textInput}
              placeholder="Адрес электронной почты"/>
          <TextInput style={styles.textInput}
              placeholder="Пароль"
              secureTextEntry={ true }/>
          {isKeyboardShown ? null : (
              <>
                <TouchableOpacity activeOpacity={0.6} style={styles.regBtn}>
                  <Text style={styles.textRegBtn}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>

              </>
            )
          }
        </View>
      </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    minWidth: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 30,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
    marginBottom: 10,
    marginTop: 80
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
  },
  fotoFrame: {
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6'
  },
  addBtn: {
    top: 84,
    left: 107,
    width: 25,
    height: 25
  },
  regBtn: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    width: 343,
    height: 50
  },
  textRegBtn: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlign: 'center'
  }
})

export default RegistrationScreen;