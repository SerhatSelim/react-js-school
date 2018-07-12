// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage';

// Initalize and export Firebase.
var config = {
    apiKey: "AIzaSyBRV5MiTS_eynEouiMKPvt2JJ9kHxQ4wAU",
    authDomain: "school-f94ae.firebaseapp.com",
    databaseURL: "https://school-f94ae.firebaseio.com",
    projectId: "school-f94ae",
    storageBucket: "school-f94ae.appspot.com",
    messagingSenderId: "785727200715"
  };
export default firebase.initializeApp(config);