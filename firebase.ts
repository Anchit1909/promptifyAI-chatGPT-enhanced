// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_nGxoCbdBj9SgMmVQqqm5fXryqQ-B5mM",
  authDomain: "chagpt-advance.firebaseapp.com",
  projectId: "chagpt-advance",
  storageBucket: "chagpt-advance.appspot.com",
  messagingSenderId: "400235549450",
  appId: "1:400235549450:web:528158380ceec7fba420f3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); //this is known as singleton pattern, i.e., we want to initialize our app only once.
const db = getFirestore(app);

export { db };
