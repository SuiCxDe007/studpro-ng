/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website
 *  was developed as a first step to taking StudPro to a higher elevation. You are
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *
 *  Content of the source code is not authorized to use for any commercial purpose.
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

//TODO Move firebase data to a secure key store

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);