import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultPostsScreen from '../NestedScreens/DefaultPostsScreen';
import CommentsScreen from '../NestedScreens/CommentsScreen';
import MapScreen from '../NestedScreens/MapScreen';

const NestedScreen = createNativeStackNavigator();

const PostsScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator
      screenListeners={{
        state: e => {
          e.data.state.routes.length === 2
            ? navigation.setOptions({
                tabBarStyle: {
                  height: 0,
                },
              })
            : navigation.setOptions({
                tabBarStyle: {
                  paddingHorizontal: '15%',
                  paddingVertical: 9,
                  height: 58,
                },
              });
        },
      }}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
