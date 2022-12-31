// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoHkGDYam56m5AogIxbmzpHCtNr57TzaI",
    authDomain: "website-3feaf.firebaseapp.com",
    databaseURL: "https://website-3feaf-default-rtdb.firebaseio.com",
    projectId: "website-3feaf",
    storageBucket: "website-3feaf.appspot.com",
    messagingSenderId: "761731705723",
    appId: "1:761731705723:web:d2694f14a69af018a4ebde",
    measurementId: "G-HDRL0HLG6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);