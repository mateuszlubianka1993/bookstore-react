import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCOzpjbDlMWQLEVCLyM8ep30iwN62HxZA4",
    authDomain: "bookstore-react.firebaseapp.com",
    databaseURL: "https://bookstore-react.firebaseio.com",
    projectId: "bookstore-react",
    storageBucket: "bookstore-react.appspot.com",
    messagingSenderId: "617800879987"
  });

  const fbase = Rebase.createClass(firebaseApp.database());

  export {fbase, firebaseApp};


