// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdg3pbRcqmenqYOEpPmd9asJYkMJQ3thY",
  authDomain: "a-saas-project.firebaseapp.com",
  projectId: "a-saas-project",
  storageBucket: "a-saas-project.firebasestorage.app",
  messagingSenderId: "932563809904",
  appId: "1:932563809904:web:29dadb4e6efe70aac8e6b5",
  measurementId: "G-WD028W1KT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);