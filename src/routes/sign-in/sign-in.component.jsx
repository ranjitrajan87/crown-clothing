import { signWithGooglePopup } from "../../utils/firebase/firebase.utils";

const logGoogleUser = async () => {
  const response = await signWithGooglePopup();
  console.log(response);
};

const Signin = () => {
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>signin</button>
    </div>
  );
};

export default Signin;
