import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUNUBPgyij9PaZ-Mg9BLF7OVx9L_vUcLw",
  authDomain: "gestion-empresa-5859f.firebaseapp.com",
  projectId: "gestion-empresa-5859f",
  storageBucket: "gestion-empresa-5859f.appspot.com",
  messagingSenderId: "722641406715",
  appId: "1:722641406715:web:b9ad876c4f1500d4ee7e5e"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithEmailAndPassword = (email,password) => auth.signInWithEmailAndPassword(email,password);

export default firebase;