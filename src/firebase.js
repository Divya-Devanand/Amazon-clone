import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIaHKy0VTxKLim8etC9NKUIRI5vVG6yNQ",
  authDomain: "clone-f8380.firebaseapp.com",
  projectId: "clone-f8380",
  storageBucket: "clone-f8380.appspot.com",
  messagingSenderId: "39819970133",
  appId: "1:39819970133:web:9045dc79f7e65fed1af6dc",
  measurementId: "G-F5V3N8K0H6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
