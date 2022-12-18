// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);