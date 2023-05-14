import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0QFPeCMprIZX_cZpV7uD9C-B642_uZt0",
  authDomain: "react-crud-f041f.firebaseapp.com",
  projectId: "react-crud-f041f",
  storageBucket: "react-crud-f041f.appspot.com",
  messagingSenderId: "160333671804",
  appId: "1:160333671804:web:42867d276b571580ec88f9",
  measurementId: "G-3JYQ78QKXJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)