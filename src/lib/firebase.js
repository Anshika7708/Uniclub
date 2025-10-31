import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBS_H0dC8Co6dMIBnjMxKlaxpDaiGnCEFQ",
  authDomain: "uniclub-94f7e.firebaseapp.com",
  projectId: "uniclub-94f7e",
  storageBucket: "uniclub-94f7e.appspot.com",
  messagingSenderId: "241894654867",
  appId: "1:241894654867:web:106a510c2a61749a831e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Enable offline persistence
try {
    enableIndexedDbPersistence(db).catch((err) => {
        if (err.code == 'failed-precondition') {
            console.warn('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
        } else if (err.code == 'unimplemented') {
            console.warn('The current browser doesn\'t support persistence.');
        }
    });
} catch (err) {
    console.warn('Error enabling persistence:', err);
}