import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ41iGhrh9jyAFLP_IDu2KLhxaNsyOVaA",
  authDomain: "cooking-ninja-site-ac89d.firebaseapp.com",
  projectId: "cooking-ninja-site-ac89d",
  storageBucket: "cooking-ninja-site-ac89d.appspot.com",
  messagingSenderId: "647519229975",
  appId: "1:647519229975:web:cfee939c92445c0884a452",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
