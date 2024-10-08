import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC06Sq5fYaQxPLmKwM4ORU0DIzY6A8I6X0',
  authDomain: 'tubis-cakes.firebaseapp.com',
  projectId: 'tubis-cakes',
  storageBucket: 'tubis-cakes.appspot.com',
  messagingSenderId: '632530573355',
  appId: '1:632530573355:web:6869bf67f46e709361726e',
  measurementId: 'G-6NXWRWV66D',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
