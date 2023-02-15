import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCpoU8ZZ9t4PzaCVTy_Be1AeAfJxIuCYuY',
  authDomain: 'reactnative-app-b6406.firebaseapp.com',
  projectId: 'reactnative-app-b6406',
  storageBucket: 'reactnative-app-b6406.appspot.com',
  messagingSenderId: '500393967212',
  appId: '1:500393967212:web:c21f6d2930a418f2a5a249',
  measurementId: 'G-E42R02SV9W',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = firebase.auth;
export const storage = getStorage(firebaseApp);
export const uploadImage = async (fileName, file) => {
  const storageRef = ref(storage, `images/${fileName}`);

  console.log(storageRef);

  try {
    const test = await uploadBytes(storageRef, file);
    console.log('test', test);
  } catch (err) {
    console.log('err', err);
  }

  return storageRef;
};
