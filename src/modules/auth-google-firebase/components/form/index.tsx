import React from "react";

import { googleProvider, auth } from "../../firabase";
import { IUser } from "src/models/user";

import style from "./index.module.scss";

const AuthGoogleFirebase: React.FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const handleGoogleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    try {
      const result = await auth.signInWithPopup(googleProvider);
      const { uid, displayName, email, photoURL } = result.user as IUser;
      const userData: IUser = {
        uid,
        displayName,
        email,
        photoURL,
      };
      setUser(userData);
      console.log("Logged in user:", userData);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <form className={style.form}>
      <h1>Welcome test-app!</h1>
      <button className="default-btn" onClick={handleGoogleLogin}>
        Google auth
      </button>
    </form>
  );
};

export { AuthGoogleFirebase };
