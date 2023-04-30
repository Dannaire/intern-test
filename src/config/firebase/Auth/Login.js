import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Instance/Firebase";

export const loginAction = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // Store user login data in local storage
      localStorage.setItem("isSignedIn", JSON.stringify(result));
      console.log(Date.now());
    })
    .catch((error) => {
      // Handle login errors
      console.log(error);
    });
};

export const logOut = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("success");
      // Remove user login data from local storage
      localStorage.removeItem("isSignedIn");
    })
    .catch((error) => {
      // Handle logout errors
    });
};
