// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7TUEFjNlDeCVQ0euZrf0TMFpWUVKFv-o",
    authDomain: "bitcoin-orderbook-mobile.firebaseapp.com",
    projectId: "bitcoin-orderbook-mobile",
    storageBucket: "bitcoin-orderbook-mobile.appspot.com",
    messagingSenderId: "1008708711667",
    appId: "1:1008708711667:web:cdfb33b3621aaacf513386",
    measurementId: "G-8ZE356HK4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);


