import { signInWithPopup, } from "firebase/auth";
import { auth, provider } from "../Instance/Firebase";


export const loginAction = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {

      localStorage.setItem("isSignedIn", JSON.stringify(result));
      console.log(Date.now());
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);


      // ...
    });
};

export const logOut = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("success");
      localStorage.removeItem("isSignedIn");
    })
    .catch((error) => {
      // An error happened.
    });
};
