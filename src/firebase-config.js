// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT5BYhz55py4ksfTTGMeAykO4ChkFomNQ",
  authDomain: "chatapp-7c20b.firebaseapp.com",
  projectId: "chatapp-7c20b",
  storageBucket: "chatapp-7c20b.appspot.com",
  messagingSenderId: "1056266718484",
  appId: "1:1056266718484:web:70e23ca245d254f139c601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); 
