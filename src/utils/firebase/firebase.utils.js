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
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signWithGooglePopup = () =>
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged In", user);
      return { user }; // Return the user object
    })
    .catch((error) => {
      console.error("Error during sign-in", error);
      throw error; // Rethrow the error for the caller to handle
    });

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(" error is", error.message);
    }
  }

  return userDocRef;
};
