import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useRoute } from './router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const MyTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const routing = useRoute(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./components/Images/PhotoBG.png')}
        style={styles.imageBg}
      >
        <Provider store={store}>
          <NavigationContainer theme={MyTheme}>{routing}</NavigationContainer>
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

{
  /* <AuthStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      /> */
}
