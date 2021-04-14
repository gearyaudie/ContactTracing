import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6BzIY0MsgpVb4RKVA7-io0wosZN0cU74",
  authDomain: "fir-devworld.firebaseapp.com",
  projectId: "fir-devworld",
  storageBucket: "fir-devworld.appspot.com",
  messagingSenderId: "60162259915",
  appId: "1:60162259915:web:97cb726ef34837b3c0144e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
