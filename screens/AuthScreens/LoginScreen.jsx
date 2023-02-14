import { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { authSignInUser } from '../../redux/auth/authOperations';

const initialState = {
  email: null,
  password: null,
};

const LoginScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const onLogin = () => {
    authSignInUser(formData);
    setFormData(initialState);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.fotoFrame}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                style={styles.delBtn}
                source={require('../../components/Images/delFoto.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Войти</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Адрес электронной почты"
            value={formData.email}
            onChangeText={value =>
              setFormData(prevState => ({ ...prevState, email: value }))
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Пароль"
            value={formData.password}
            onChangeText={value =>
              setFormData(prevState => ({ ...prevState, password: value }))
            }
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => onLogin()}
            activeOpacity={0.6}
            style={styles.signInBtn}
          >
            <Text style={styles.textSignInBtn}>Войти</Text>
          </TouchableOpacity>

          {isKeyboardShown ? null : (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
              >
                <Text style={styles.text}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

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
    marginTop: 80,
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
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  fotoFrame: {
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  delBtn: {
    top: 75,
    left: 102,
    width: 35,
    height: 35,
  },
  signInBtn: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    width: 343,
    height: 50,
  },
  textSignInBtn: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
