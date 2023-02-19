import auth from '../../firebase/config';
import { getAuth } from 'firebase/auth/react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { Alert } from 'react-native';
import { authSlice } from './authReducer';

export async function authSignUpUser(
  dispatch,
  { login, email, password },
  photo
) {
  const user = getAuth(auth);

  try {
    await createUserWithEmailAndPassword(user, email, password);
    await updateProfile(user.currentUser, {
      displayName: login,
      photoURL: photo,
    });
  } catch (error) {
    Alert.alert('Sign up error', error.message);
  }

  const { displayName, uid, photoURL } = user.currentUser;

  dispatch(
    authSlice.actions.updateUserProfile({
      userId: uid,
      login: displayName,
      userPhoto: photoURL,
    })
  );
}

export async function authSignInUser({ email, password }) {
  try {
    await signInWithEmailAndPassword(getAuth(auth), email, password);
  } catch (error) {
    Alert.alert('Sign in error', error.message);
  }
}

export async function authSignOutUser(dispatch) {
  try {
    await signOut(getAuth(auth));
    dispatch(authSlice.actions.authSignOut());
  } catch (error) {
    Alert.alert('Sign out error', error.message);
  }
}

export async function authStateChangeUser(dispatch) {
  onAuthStateChanged(getAuth(auth), user => {
    console.log(user);
    if (user) {
      dispatch(
        authSlice.actions.authStateChange({
          stateChange: true,
        })
      );
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          login: user.displayName,
          userPhoto: user.photoURL,
        })
      );
    }
  });
}

export async function authChangeUserPhoto(dispatch, photo) {
  try {
    const user = getAuth(auth);
    const photoResult = photo
      ? `https://firebasestorage.googleapis.com/v0/b/${
          photo._location.bucket
        }/o/${photo._location.path.replace('/', '%2F')}?alt=media`
      : '';

    await updateProfile(user.currentUser, {
      photoURL: photoResult,
    });

    const { displayName, uid, photoURL } = user.currentUser;

    dispatch(
      authSlice.actions.updateUserProfile({
        userId: uid,
        login: displayName,
        userPhoto: photoURL,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
