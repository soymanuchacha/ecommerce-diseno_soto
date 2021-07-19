import firebase from "firebase/app";
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxOUwF260l9wNsm1QQ9GEjkRCvI8SU6N0",
    authDomain: "ecommerce-soto.firebaseapp.com",
    projectId: "ecommerce-soto",
    storageBucket: "ecommerce-soto.appspot.com",
    messagingSenderId: "631898223805",
    appId: "1:631898223805:web:513cd896ce77e32654b3d4"
}

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

// Enable globally
export const dataBase = fb.firestore()

