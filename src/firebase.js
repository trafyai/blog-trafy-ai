import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCBmzJ1_boCnVCo0q03g3--s1klg0jzfJ8",
    authDomain: "trafyapp-auth.firebaseapp.com",
    projectId: "trafyapp-auth",
    storageBucket: "trafyapp-auth.firebasestorage.app",
    messagingSenderId: "300837889182",
    appId: "1:300837889182:web:c09d10df626aa3309d878f",
    measurementId: "G-9411ZVXWFQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Set persistence to localStorage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to browserLocalPersistence");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, database, storage };
