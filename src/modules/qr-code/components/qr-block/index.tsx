// QRCodeComponent.tsx
import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

interface QRCodeProps {
  url: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ url }) => {
  const qrcodeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (qrcodeRef.current) {
      QRCode.toCanvas(qrcodeRef.current, url, (error: any) => {
        if (error) {
          console.error("Error generating QR code:", error);
        }
      });
    }
  }, [url]);

  return <canvas ref={qrcodeRef}></canvas>;
};

export { QRCodeComponent };
