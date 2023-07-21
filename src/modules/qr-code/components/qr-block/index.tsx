import React from "react";
import QRCode from "qrcode";

import style from "./index.module.scss";

interface QRCodeProps {
  url: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ url }) => {
  const qrcodeRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (qrcodeRef.current) {
      QRCode.toCanvas(qrcodeRef.current, url, (error: any) => {
        if (error) {
          console.error("Error generating QR code:", error);
        }
      });
    }
  }, [url]);

  return <canvas ref={qrcodeRef} className={style.qrcode}></canvas>;
};

export { QRCodeComponent };
