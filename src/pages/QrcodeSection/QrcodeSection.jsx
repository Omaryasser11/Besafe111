
import { Link } from 'react-router-dom';


import scanQr from "../../assets/QrCodeScan.png";
import Qr from "../../assets/my Profile.png";


function QrcodeSection() {
  return (
<div className=' col-12 container-Qrcode'>
    <div className=" scanQrCodeSection col-12">
      <img src={scanQr} className='ScanQrCodeImage' alt="" />
      <div className="ScanQrCode-text-btn-Image">
    <h4>Scan Qr Code Fature</h4>
        <p>Scan my Qr code or load my Qrcode to know my profile  </p>
       
        <button className="ScanQrCode-btn  ">
          <Link to="/ScanQrCode" className='btn'> Scan My Qr Code</Link>
        </button>
    
          {/* <img src={Qr} className='MyQrCode' alt="" /> */}
      
      </div>
    </div>
</div>
  );
}

export default QrcodeSection;

































