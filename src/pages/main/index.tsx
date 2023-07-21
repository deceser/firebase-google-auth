import React from "react";

import { AuthGoogleFirebase } from "src/modules/auth-google-firebase";

type Props = {};

const MainPage: React.FC = (props: Props) => {
  return (
    <>
      <AuthGoogleFirebase />
    </>
  );
};

export default MainPage;
