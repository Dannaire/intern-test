// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY4GiR4MFNWWbIwuNZ01HiHuu4JvElxvE",
  authDomain: "intern-test-c4983.firebaseapp.com",
  projectId: "intern-test-c4983",
  storageBucket: "intern-test-c4983.appspot.com",
  messagingSenderId: "687825363394",
  appId: "1:687825363394:web:51b0c945551935beb6765b",
  measurementId: "G-KHTVSZS8KZ"
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
