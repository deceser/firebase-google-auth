import React from "react";

import { QRCodeComponent } from "src/modules/qr-code";
import { AuthGoogleFirebase } from "src/modules/auth-google-firebase";

type Props = {};

const MainPage: React.FC = (props: Props) => {
  const [url, setUrl] = React.useState("https://www.instagram.com/");

  return (
    <>
      <AuthGoogleFirebase />
      <QRCodeComponent url={url} />
    </>
  );
};

export default MainPage;
