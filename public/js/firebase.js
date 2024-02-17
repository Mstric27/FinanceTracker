// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDR6jSEeiGYd8cle2sYVKbzBWdc99TXtNM",
  authDomain: "budgetaway.firebaseapp.com",
  projectId: "budgetaway",
  storageBucket: "budgetaway.appspot.com",
  messagingSenderId: "854485873301",
  appId: "1:854485873301:web:8d2f9b4708845e0282619c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }
