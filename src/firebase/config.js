// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "lyubov-a1bdc.firebaseapp.com",
  projectId: "lyubov-a1bdc",
  storageBucket: "lyubov-a1bdc.firebasestorage.app",
  messagingSenderId: "609120211206",
  appId: "1:609120211206:web:97b66e45b5085d11c84e87",
  measurementId: "G-J8CQ128BB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);