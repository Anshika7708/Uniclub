import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBS_H0dC8Co6dMIBnjMxKlaxpDaiGnCEFQ",
  authDomain: "uniclub-94f7e.firebaseapp.com",
  projectId: "uniclub-94f7e",
  storageBucket: "uniclub-94f7e.firebasestorage.app",
  messagingSenderId: "241894654867",
  appId: "1:241894654867:web:106a510c2a61749a831e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);