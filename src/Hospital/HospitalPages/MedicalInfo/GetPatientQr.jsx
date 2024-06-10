import React from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

import "../../../pages/ScanQrCode/ScanQrCode.scss";
// import QrInformation from "../Qr-Info-In-Scan/QrInformation";
import baseUrl from "../../../BaseUrl";
import QrInformation from "../../../pages/Qr-Info-In-Scan/QrInformation";

const GetPatientQr = () => {
  const [scanResult, setScanResult] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);

    async function success(result) {
      scanner.clear();
      setScanResult(result);
      try {
        const { data } = await baseUrl.get(`/medicalInfos/${result}`);
        setUser(data);
        try {
          const modal = {
            userId: result,
            latitude: localStorage.getItem("latitude"),
            longitude: localStorage.getItem("longitude"),
          };
          await baseUrl.post(`/locations`, modal);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    function error(error) {
      console.warn(error);
    }
  }, []);

  return (
    <>
      <div className="QrcodeScanning">
        <h1> Qr Code Scanning in React</h1>

        {scanResult ? (
          <>
            <QrInformation data={user} />
          </>
        ) : (
          <div id="reader"></div>
        )}
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </>
  );
};

export default GetPatientQr;
