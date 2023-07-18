import React from "react";

import style from "./index.module.scss";

type Props = {};

const AuthGoogleFirebase = (props: Props) => {
  return (
    <form className={style.form}>
      <button className="default-btn">Google</button>
    </form>
  );
};

export { AuthGoogleFirebase };
