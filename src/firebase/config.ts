import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "lyubov-a1bdc.firebaseapp.com",
  databaseURL: "https://lyubov-a1bdc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lyubov-a1bdc",
  storageBucket: "lyubov-a1bdc.firebasestorage.app",
  messagingSenderId: "609120211206",
  appId: "1:609120211206:web:97b66e45b5085d11c84e87",
  measurementId: "G-J8CQ128BB6"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація та експорт сервісів
export const auth = getAuth(app);
export const db = getDatabase(app);