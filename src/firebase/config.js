// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbUu3gTBhpxuR27451Qf124SJMGJ9rt_o",
  authDomain: "lyubov-a1bdc.firebaseapp.com",
  projectId: "lyubov-a1bdc",
  storageBucket: "lyubov-a1bdc.firebasestorage.app",
  messagingSenderId: "609120211206",
  appId: "1:609120211206:web:31318b88f7dc6906c84e87",
  measurementId: "G-8FQH4811MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

