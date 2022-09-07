// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD2V56dKjKoxdI723BFm9T5Do-jmA8XD0Q",
    authDomain: "chat-app-8e087.firebaseapp.com",
    projectId: "chat-app-8e087",
    storageBucket: "chat-app-8e087.appspot.com",
    messagingSenderId: "287458996622",
    appId: "1:287458996622:web:0f34d918ef29a7949034df",
    measurementId: "G-BJ9PFW8D11"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
  
export {auth,provider};
export default db ;