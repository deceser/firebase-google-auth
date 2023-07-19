import React from "react";
import { googleProvider, auth } from "../../firabase";
import style from "./index.module.scss";
import { IUser } from "src/models/user";

const AuthGoogleFirebase: React.FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const handleGoogleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    console.log("sdasdasd");

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
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <img src={user.photoURL} alt="Profile" />
        </div>
      ) : (
        <button className="default-btn" onClick={handleGoogleLogin}>
          Google
        </button>
      )}
    </form>
  );
};

export { AuthGoogleFirebase };
