import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

import "./ScanQrCode.scss";
import baseUrl from "../../BaseUrl";
import QrInformation from "../Qr-Info-In-Scan/QrInformation";

export default function ScanQrCode() {
  const [scanResult, setScanResult] = useState(null);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showScanner, setShowScanner] = useState(true); // State to control rendering of scanner

  useEffect(() => {
    let scanner = null;

    if (showScanner) {
      scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });
      scanner.render(success, error);
    }

    async function success(result) {
      scanner.clear();
      setScanResult(result);
      try {
        const { data } = await baseUrl.get(`/users/${result}`);
        if (!data) {
          handleInvalidQrCode("Invalid QR code or data does not exist.");
        } else {
          setUser(data);
          setErrorMessage(null); // Clear any previous error messages
          try {
            const modal = {
              userId: result,
              latitude: localStorage.getItem("latitude"),
              longitude: localStorage.getItem("longitude"),
            };
            await baseUrl.post(`/locations`, modal);
            setShowScanner(false); // Hide the scanner after successful scan and data posting
          } catch (error) {
            console.log(error);
            handleInvalidQrCode("Error posting location data.");
          }
        }
      } catch (error) {
        console.log(error);
        handleInvalidQrCode("Error fetching user data.");
      }
    }

    function handleInvalidQrCode(message) {
      setErrorMessage(message);
      setUser(null);
      setTimeout(() => {
        setScanResult(null);
        setErrorMessage(null);
      }, 5000); // Hide the error message after 5 seconds
    }

    function error(error) {
      console.warn(error);
      handleInvalidQrCode("QR code scan failed.");
    }

    return () => {
      if (scanner) {
        scanner.clear(); // Clean up the scanner on component unmount or when showScanner changes
      }
    };
  }, [showScanner]);

  const handleScanAgain = () => {
    setShowScanner(true);
    setScanResult(null);
    setUser(null);
    setErrorMessage(null);
  };

  return (
    <div className="QrcodeScanning">
      <h1>Scan Qr Code Now!</h1>
      {showScanner ? (
        <div id="reader"></div>
      ) : (
        <>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          {user && <QrInformation data={user} />}
          <button onClick={handleScanAgain}>Scan Again</button>
        </>
      )}
    </div>
  );
}
