import React from "react";

import style from "./index.module.scss";

type Props = {};

const TheHeader: React.FC<Props> = ({ ...props }) => {
  const {} = props;
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>Logo</h1>
      </div>
      <div>
        <nav className={style.navbar}>
          <button className="default-btn">About Project</button>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
