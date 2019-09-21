import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCye9vkBJSBVzEHw2rKOFCC7vlUITBrOug",
    authDomain: "centerpoint-fd557.firebaseapp.com",
    databaseURL: "https://centerpoint-fd557.firebaseio.com",
    projectId: "centerpoint-fd557",
    storageBucket: "",
    messagingSenderId: "284298958733",
    appId: "1:284298958733:web:d57ac9eecc0d72d1f60fc4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;