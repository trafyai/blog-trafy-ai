// import { initializeApp } from 'firebase/app';
// import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBXHcoGhI6oOX_63RIcWerh5oGFjdoP-w0",
//   authDomain: "apitesting-6694b.firebaseapp.com",
//   projectId: "apitesting-6694b",
//   storageBucket: "apitesting-6694b.appspot.com",
//   messagingSenderId: "387990035960",
//   appId: "1:387990035960:web:c1ba24cb745c1874894a0d",
//   measurementId: "G-82B6DP33G6"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const database = getDatabase(app);
// const storage = getStorage(app);

// // Set persistence to localStorage
// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     console.log("Persistence set to browserLocalPersistence");
//   })
//   .catch((error) => {
//     console.error("Error setting persistence:", error);
//   });

// export { auth, database, storage };


// Import required functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHcoGhI6oOX_63RIcWerh5oGFjdoP-w0",
  authDomain: "apitesting-6694b.firebaseapp.com",
  projectId: "apitesting-6694b",
  storageBucket: "apitesting-6694b.appspot.com",
  messagingSenderId: "387990035960",
  appId: "1:387990035960:web:c1ba24cb745c1874894a0d",
  measurementId: "G-82B6DP33G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export default db;