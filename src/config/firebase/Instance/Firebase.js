// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdf1W_1_2oFmCQiUhX4gepGONJRpaoJho",
  authDomain: "intern-assignment-5e693.firebaseapp.com",
  projectId: "intern-assignment-5e693",
  storageBucket: "intern-assignment-5e693.appspot.com",
  messagingSenderId: "269970902457",
  appId: "1:269970902457:web:9d0d14df7e1bc6709b7a68",
  measurementId: "G-YFGRDJT7Z8",
  databaseURL: "https://intern-assignment-5e693-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
