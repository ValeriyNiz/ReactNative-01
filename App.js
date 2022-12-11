import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import RegistrationScreen from './src/components/Screens/RegistrationScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/Images/PhotoBG.png')}
        style={styles.imageBg}
      >
        <RegistrationScreen />
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