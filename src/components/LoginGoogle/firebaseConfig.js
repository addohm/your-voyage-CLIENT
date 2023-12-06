import { initializeApp } from "firebase/app";
// auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBCcXPCeUUdZfQiMAemXnJVfcJ1TnsrDR8",
    authDomain: "your-voyage.firebaseapp.com",
    projectId: "your-voyage",
    storageBucket: "your-voyage.appspot.com",
    messagingSenderId: "463027424070",
    appId: "1:463027424070:web:d69dc22ba1e95ad8b27347"
};

const app = initializeApp(firebaseConfig);
// auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();