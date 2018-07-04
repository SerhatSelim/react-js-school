// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';

// Initalize and export Firebase.
const config = {
    apiKey: "<YOUR-API-KEY>",

    // Only needed if using Firebase Realtime Database (which we will be in this example)
    databaseURL: "https://school-f94ae.firebaseio.com",

    // Only needed if using Firebase Authentication
    authDomain: "<YOUR-AUTH-DOMAIN>",

    // Only needed if using Firebase Storage
    storageBucket: "<YOUR-STORAGE-BUCKET>.appspot.com"
  };

  firebase.initializeApp(config);