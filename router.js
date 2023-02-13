import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from './screens/AuthScreens/RegistrationScreen';
import LoginScreen from './screens/AuthScreens/LoginScreen';
import PostsScreen from './screens/MainScreens/PostsScreen';
import CreatePostsScreen from './screens/MainScreens/CreatePostsScreen';
import ProfileScreen from './screens/MainScreens/ProfileScreen';

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="md-add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
