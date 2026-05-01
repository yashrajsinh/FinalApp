import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD7JuV5iPJP8Q3fdjURsVY2S6ixxsOCtis',
  authDomain: 'final-app-d9efc.firebaseapp.com',
  projectId: 'final-app-d9efc',
  storageBucket: 'final-app-d9efc.appspot.com',
  messagingSenderId: '911519315260',
  appId: '1:911519315260:android:7556d12d658cc8c3df5a39',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
