import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzPt5b99JYboXfK38_WhW7MRwY3fFnvJU',
  authDomain: 'clone-411eb.firebaseapp.com',
  projectId: 'clone-411eb',
  storageBucket: 'clone-411eb.appspot.com',
  messagingSenderId: '880159746200',
  appId: '1:880159746200:web:48b636b150c8b899f008ed',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
