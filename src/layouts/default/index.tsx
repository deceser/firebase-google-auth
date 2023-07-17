import React from "react";

import TheHeader from "src/components/block/header";
import TheFooter from "src/components/block/footer";

import style from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children, ...props }) => {
  const {} = props;
  return (
    <>
      <TheHeader />
      <main className={style.layoutDefault}>{children}</main>
      <TheFooter />
    </>
  );
};

export default DefaultLayout;
