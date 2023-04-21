import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCC1uTXHg2707eFWKyphdKGtGKamtRBZmM",
  authDomain: "wolfer-37034.firebaseapp.com",
  projectId: "wolfer-37034",
  storageBucket: "wolfer-37034.appspot.com",
  messagingSenderId: "270299930499",
  appId: "1:270299930499:web:e5309aa0d7e63b9151a0b6",
  measurementId: "G-FNKWDY0F9T"
};
// logintodo

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service

export {auth,db,storage}