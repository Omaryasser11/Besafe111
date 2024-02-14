import { useEffect } from "react";
import "./HomePage.scss";

import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import ScanQrCode from '../ScanQrCode/ScanQrCode.js';

import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import QrcodeSection from "../QrcodeSection/QrcodeSection.jsx";
import Services from "../Services/Services.jsx";
import Medicine from "../Medicine/Medicine.jsx";
import Xray from "../Xray/Xray.jsx";
import MedicalDoc from "../medicalDocumentation/medicalDoc.jsx";

import MedicalInfo from "../medicalInformation/medicalInfo.jsx";
import { $Current_Width } from "../../store/index.js";
import { useRecoilState } from "recoil";
import ServiceOne from '../../assets/ServiceOne.png';
import ServiceTwo from '../../assets/ServiceTwo.png';
import ServiceThree from '../../assets/ServiceThree.png';
import ServiceFour from '../../assets/ServiceFour.png';
import ServiceFive from '../../assets/ServiceFive.png';
import DiseaseTypes from "../DiseaseTypes/DiseaseTypes.jsx";

import Panner from "../panner/panner.jsx";




function HomePage()  {
  const [Current_Width] = useRecoilState($Current_Width);
  useEffect(() => {
    console.log(Current_Width);
    // Active WoW.js
    const wow = new WOW({ live: false });
    wow.init();
    // Active Swal[=]
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    // axios
    //   .get("https://official-joke-api.appspot.com/random_joke")
    //   .then((res) => {
    //     console.log(res.data.setup);
    //   });
  }, []);
  return (
    <>
                     
 
    
<Panner></Panner>
<Services> </Services>
<DiseaseTypes></DiseaseTypes>
<QrcodeSection></QrcodeSection>

<Xray></Xray>

<Medicine></Medicine>


<MedicalDoc></MedicalDoc>

<MedicalInfo></MedicalInfo>
<Footer></Footer>


         
        
    </>

  );
}
export default HomePage;

