
import "./HomePage.scss";
import Landing from "../../Sections/Landing/Landing.jsx"
import Footer from "../Footer/Footer.jsx";
import QrcodeSection from "../../Sections/QrcodeSection/QrcodeSection.jsx";
import Services from "../Services/Services.jsx";
import Medicine from "../../Sections/Medicine/Medicine.jsx";
// import QRCodeGenerator from "../../Components/Qr-code/QRCodeGenerator"
import Xray from "../../Sections/Xray/Xray.jsx";
import MedicalDoc from "../../Sections/medicalDocumentation/medicalDoc.jsx";
import MedicalInfo from "../../Sections/medicalInformation/medicalInfo.jsx";
import DiseaseTypes from "../DiseaseTypes/DiseaseTypes.jsx";
import Map from "../../Components/MapLocation/LocationComponent"
import Panner from "../panner/panner.jsx";
import Qrinfo from "../Qr-Info-In-Scan/QrInformation"
import QRCodeGenerator from "../GenerateQrPage/GenerateQRpage";
import UserConnection from "../../Sections/UserConnection/UserConnection.jsx"

import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


function HomePage() {
  return (
    <>

      <Landing />
      <QrcodeSection />
      <Xray />
      <Medicine />
      <MedicalInfo />
      <MedicalDoc />
      <UserConnection/>
    
    
      {/* <Map />
      <Qrinfo /> */}
      <Footer></Footer>

         


    </>

  );
}
export default HomePage;

