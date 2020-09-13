import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPx2Md-raCEG5SfUAobPSQUoqQkhxQ3g4",
  authDomain: "clone-b6fcc.firebaseapp.com",
  databaseURL: "https://clone-b6fcc.firebaseio.com",
  projectId: "clone-b6fcc",
  storageBucket: "clone-b6fcc.appspot.com",
  messagingSenderId: "848403731016",
  appId: "1:848403731016:web:8d6d707c5830b9401ebe7d",
  measurementId: "G-7G2505TZVS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
