// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv8gRCUT9vq7AJuUWI7vkqNGMKVh_cOnM",
  authDomain: "crown-clothing-db-9eefe.firebaseapp.com",
  projectId: "crown-clothing-db-9eefe",
  storageBucket: "crown-clothing-db-9eefe.appspot.com",
  messagingSenderId: "190347550514",
  appId: "1:190347550514:web:7c4505e0d5fb6fee9b412b",
};

// Initialize Firebase
const firebaseAapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signWithGooglePopup = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Logged In", result);
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
    });
