import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './src/components/Screens/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();
const MyTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/Images/PhotoBG.png')}
        style={styles.imageBg}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}/>
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}/>

          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  }
});

export default App;