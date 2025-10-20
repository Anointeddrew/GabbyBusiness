
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgH6CvRrlx8XAZBzVTfa5vfPYFtDfk72o",
  authDomain: "gabbyenterprise-c4a8b.firebaseapp.com",
  projectId: "gabbyenterprise-c4a8b",
  storageBucket: "gabbyenterprise-c4a8b.firebasestorage.app",
  messagingSenderId: "950537494129",
  appId: "1:950537494129:web:df2b89d21a96a4c63f45d0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;