// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC14HpMq_9ji9H5Ee5RYXukF9aNHVdA1jk",
  authDomain: "prepwise-2ca44.firebaseapp.com",
  projectId: "prepwise-2ca44",
  storageBucket: "prepwise-2ca44.firebasestorage.app",
  messagingSenderId: "545845341005",
  appId: "1:545845341005:web:cd77037480294930156504",
  measurementId: "G-T76PHL0KHB",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
