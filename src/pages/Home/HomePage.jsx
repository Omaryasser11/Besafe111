import "./HomePage.scss";
import Landing from "../../Sections/Landing/Landing.jsx";
import Footer from "../Footer/Footer.jsx";
import QrcodeSection from "../../Sections/QrcodeSection/QrcodeSection.jsx";
import Medicine from "../../Sections/Medicine/Medicine.jsx";
// import QRCodeGenerator from "../../Components/Qr-code/QRCodeGenerator"
import Xray from "../../Sections/Xray/Xray.jsx";
import MedicalDoc from "../../Sections/medicalDocumentation/medicalDoc.jsx";
import MedicalInfo from "../../Sections/medicalInformation/medicalInfo.jsx";

import UserConnection from "../../Sections/UserConnection/UserConnection.jsx";
import MedicalPaper from "../../Sections/MedicalPaper/MedicalPaper.jsx";

import React from "react";

function HomePage() {
  return (
    <>
      <Landing />
      <QrcodeSection />
      <Xray />
      <Medicine />
      <MedicalInfo />
      <MedicalDoc />
      <MedicalPaper />
      <UserConnection />

      {/* <Map />
      <Qrinfo /> */}
      <Footer></Footer>
    </>
  );
}
export default HomePage;
