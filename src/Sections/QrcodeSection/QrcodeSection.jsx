
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import Graph from "../../assets/graph.png";
import scanQr from "../../assets/QrCodeScan.png";
import Qr from "../../assets/my Profile.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
function QrcodeSection() {
  
  useEffect(() => {
    AOS.init({
      duration:3000,
      once: false,
    });
  
}, []);
  return (
    <div className=' col-12 container-Qrcode' data-aos="zoom-in">
      <div className=" scanQrCodeSection col-12">
      
        <div className="ScanQrCode-text-btn-Image">
          <h4>Scan Qr Code Fature</h4>
          <p>Scan my Qr code or load my Qrcode to know my profile  </p>

          <button className="ScanQrCode-btn  ">
            <Link to="/ScanQrCode" className='btn'> Scan My Qr Code</Link>
          </button>

          {/* <img src={Qr} className='MyQrCode' alt="" /> */}

        </div>
        <img src={Graph} className='Graph' alt="" />
        <img src={scanQr} className='ScanQrCodeImage' alt="" />
      </div>
    </div>
  );
}

export default QrcodeSection;

































