// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgH6CvRrlx8XAZBzVTfa5vfPYFtDfk72o",
  authDomain: "gabbyenterprise-c4a8b.firebaseapp.com",
  projectId: "gabbyenterprise-c4a8b",
  storageBucket: "gabbyenterprise-c4a8b.firebasestorage.app",
  messagingSenderId: "950537494129",
  appId: "1:950537494129:web:df2b89d21a96a4c63f45d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;