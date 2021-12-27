import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJjWw7mwMTLZSt0AqDHcN_KFJvHRDtjFs",
    authDomain: "facebook-clone-59e1f.firebaseapp.com",
    projectId: "facebook-clone-59e1f",
    storageBucket: "facebook-clone-59e1f.appspot.com",
    messagingSenderId: "536596891412",
    appId: "1:536596891412:web:5f6cb69484913761346401",
    measurementId: "G-NRR26HKJB4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
