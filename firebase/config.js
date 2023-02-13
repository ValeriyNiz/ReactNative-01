import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCpoU8ZZ9t4PzaCVTy_Be1AeAfJxIuCYuY',
  authDomain: 'reactnative-app-b6406.firebaseapp.com',
  projectId: 'reactnative-app-b6406',
  storageBucket: 'reactnative-app-b6406.appspot.com',
  messagingSenderId: '500393967212',
  appId: '1:500393967212:web:c21f6d2930a418f2a5a249',
  measurementId: 'G-E42R02SV9W',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
