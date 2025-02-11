import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1VMHRfGe7NxUmZ-AAQ25RHemtStlmsSI",
  authDomain: "reactlinks-4074d.firebaseapp.com",
  projectId: "reactlinks-4074d",
  storageBucket: "reactlinks-4074d.firebasestorage.app",
  messagingSenderId: "880105264651",
  appId: "1:880105264651:web:dfe1f5adb53be53d3c590e",
  measurementId: "G-MPV1SY7TRR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db};

