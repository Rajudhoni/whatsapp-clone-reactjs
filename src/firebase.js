import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAva7zza4-QwaMxpJvqewZRfBkz44dw3ZA",
    authDomain: "rtc-whatsapp-clone.firebaseapp.com",
    databaseURL: "https://rtc-whatsapp-clone.firebaseio.com",
    projectId: "rtc-whatsapp-clone",
    storageBucket: "rtc-whatsapp-clone.appspot.com",
    messagingSenderId: "344550271387",
    appId: "1:344550271387:web:c805a26215504d97bd193e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;