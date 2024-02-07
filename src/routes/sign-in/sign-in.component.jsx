import {
  signWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signWithGooglePopup();
      const userDocRef = await createUserDocFromAuth(user);
    } catch (error) {
      console.error("Error during sign-in or user document creation", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>signin</button>
    </div>
  );
};

export default Signin;
