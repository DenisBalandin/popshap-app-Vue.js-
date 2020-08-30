import firebase from 'firebase';
import 'firebase/firestore';

// firebase init goes here
// const config = {
//     apiKey: "AIzaSyD67NNcu9BGo51XGqGvOyVxfcJ2JUFS1io",
//     authDomain: "matto-dev.firebaseapp.com",
//     databaseURL: "https://matto-dev.firebaseio.com",
//     projectId: "matto-dev",
//     storageBucket: "matto-dev.appspot.com",
//     messagingSenderId: "1046459271258"
// }
var config = {
  apiKey: "AIzaSyDg6ZsAJEWfPOWxfyorqDL86nJdgKRi87M",
  authDomain: "popshap-app.firebaseapp.com",
  databaseURL: "https://popshap-app.firebaseio.com",
  projectId: "popshap-app",
  storageBucket: "popshap-app.appspot.com",
  messagingSenderId: "473430399270",
  appId: "1:473430399270:web:9c46cce8f869e3b14549e7"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
const currentUser = auth.currentUser;
const storage = firebase.storage();
const functions = firebase.functions();
const fieldValue = firebase.functions.FieldValue

// date issue fix according to firebase
const settings = {};
db.settings(settings);

// firebase collections

export default {
  db,
  auth,
  functions,
  currentUser,
  fieldValue,
  storage,
  // googleProvider,
  // facebookProvider,
};
