import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzupcb_QGC0FdzSierTehWdSd7UuGlnXA",
  authDomain: "wise-87410.firebaseapp.com",
  databaseURL: "https://wise-87410.firebaseio.com",
  projectId: "wise-87410",
  storageBucket: "wise-87410.appspot.com",
  messagingSenderId: "471693010573",
  appId: "1:471693010573:web:ec1df2244808459a0164c4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
 