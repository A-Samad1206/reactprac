import firebase from 'firebase';
import 'firebase/storage';
var firebaseConfigTwo = {
  apiKey: 'AIzaSyBCo2OpeA1suJkpyIGiNXOcKXptQofwQgc',
  authDomain: 'nexom-a86d2.firebaseapp.com',
  projectId: 'nexom-a86d2',
  storageBucket: 'nexom-a86d2.appspot.com',
  messagingSenderId: '1037911015530',
  appId: '1:1037911015530:web:fc9774a9f09a1a61524a13',
  measurementId: 'G-QNXSV4BWTG',
};
// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfigTwo)
  : firebase.app();

let db = app.firestore();

// let auth = app.auth();

// if (process.env.DB_HOST === 'localhost') {
//   db.useEmulator('localhost', 8080);
//   auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
// }

// const provider = new firebase.auth.GoogleAuthProvider();

const storage = app.storage();

export { db, storage, app as default };
