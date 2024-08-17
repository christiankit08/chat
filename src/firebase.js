import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAQaqJ_f6gi3GcxEBqXuEkgwUalCmlPOIU",
    authDomain: "chat-app-58ff4.firebaseapp.com",
    projectId: "chat-app-58ff4",
    storageBucket: "chat-app-58ff4.appspot.com",
    messagingSenderId: "493954727774",
    appId: "1:493954727774:web:4431130e1d6205bd6699cf",
    measurementId: "G-E568G3S3SM"
}).auth()
