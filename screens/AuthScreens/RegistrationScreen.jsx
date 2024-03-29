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
import { useDispatch } from 'react-redux';

import { authSignUpUser } from '../../redux/auth/authOperations';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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

  async function onRegister() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await authSignUpUser(dispatch, formData);
    setFormData(initialState);
    setIsLoading(false);
    Keyboard.dismiss();
  }

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
                style={styles.addBtn}
                source={require('../../components/Images/add.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Логин"
            value={formData.login}
            onChangeText={value =>
              setFormData(prevState => ({ ...prevState, login: value }))
            }
          />
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
            onPress={() => onRegister()}
            activeOpacity={0.6}
            style={styles.regBtn}
          >
            <Text style={styles.textRegBtn}>Зарегистрироваться</Text>
          </TouchableOpacity>
          {isKeyboardShown ? null : (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
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
  addBtn: {
    top: 84,
    left: 107,
    width: 25,
    height: 25,
  },
  regBtn: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    width: 343,
    height: 50,
  },
  textRegBtn: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  },
});

export default RegistrationScreen;
