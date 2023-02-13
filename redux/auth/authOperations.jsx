import auth from '../../firebase/config';
import { getAuth } from 'firebase/auth/react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { Alert } from 'react-native';
import { authSlice } from './authReducer';

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    const user = getAuth(auth);
    try {
      await createUserWithEmailAndPassword(user, email, password);
    } catch (error) {
      Alert.alert('Sign up error', error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(getAuth(auth), email, password);
    } catch (error) {
      Alert.alert('Sign in error', error.message);
    }
  };

export const authSignOutUser = dispatch => async (dispatch, getState) => {
  try {
    await signOut(getAuth(auth));
    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    Alert.alert('Sign out error', error.message);
  }
};

export const authStateChangeUser = dispatch => async dispatch => {
  onAuthStateChanged(getAuth(auth), user => {
    if (user) {
      dispatch(
        authSlice.actions.authStateChange({
          stateChange: true,
        })
      );
    }
  });
};
