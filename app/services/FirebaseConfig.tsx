// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl9sCcBAzx-Quy72FAbmpLDI8sjRVBEHU",
  authDomain: "loja-projeto-mobile.firebaseapp.com",
  projectId: "loja-projeto-mobile",
  storageBucket: "loja-projeto-mobile.appspot.com",
  messagingSenderId: "741036895653",
  appId: "1:741036895653:web:46dc524690d5cd54b74c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {app, db, getFirestore, collection, addDoc}