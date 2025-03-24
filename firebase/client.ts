// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgeKQ8j8LgF7yHtpYTIMDMgj7jAw-DI14",
    authDomain: "prepwise-27559.firebaseapp.com",
    projectId: "prepwise-27559",
    storageBucket: "prepwise-27559.firebasestorage.app",
    messagingSenderId: "836198364222",
    appId: "1:836198364222:web:eb04b353c6cf5a0f060d6f",
    measurementId: "G-K4ZG4PZYNZ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
