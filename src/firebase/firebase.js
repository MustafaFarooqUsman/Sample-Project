import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnJE165WW-8RWatOuomTLtuX82s3aZLho",
  authDomain: "sampleproject-21846.firebaseapp.com",
  databaseURL: "https://sampleproject-21846-default-rtdb.firebaseio.com",
  projectId: "sampleproject-21846",
  storageBucket: "sampleproject-21846.appspot.com",
  messagingSenderId: "535622324950",
  appId: "1:535622324950:web:21050c73aad41a75f2ef77",
  measurementId: "G-SBE8FX9QMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);