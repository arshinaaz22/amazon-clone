// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhm_ZnXdxxi11TK7YhE38TXNJY35aCfUQ",
  authDomain: "clone-460b7.firebaseapp.com",
  projectId: "clone-460b7",
  storageBucket: "clone-460b7.appspot.com",
  messagingSenderId: "9827 73092062",
  appId: "1:982773092062:web:5f60fe2e3a3e2ab1137c4f",
  measurementId: "G-50TJKDE3DF"
};

// Initialize Firebase
const  firebaseApp = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth,db};