import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

import './ScanQrCode.Scss';
export default function ScanQrCode() {

  const [scanResult, setScanResult] = useState(null)
  useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,




      },
      fps: 5,





    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear()
      setScanResult(result);


    }
    function error(error) {
      console.warn(error);

    }
  }, []);

  return (

    <>


      <div className="QrcodeScanning">

        <h1> Qr Code Scanning in React</h1>

        {scanResult
          ? <div> success: <a href={"http://" + scanResult}>{scanResult}</a></div>
          : <div id="reader"></div>


        }

      </div>






    </>













  );



}
