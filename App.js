import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './components/Main/Main';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./components/Images/PhotoBG.png')}
        style={styles.imageBg}
      >
        <Provider store={store}>
          <Main />
        </Provider>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});

export default App;
