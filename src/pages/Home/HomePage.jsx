
import "./HomePage.scss";
import Landing from "../../Sections/Landing/Landing.jsx"
import Footer from "../Footer/Footer.jsx";
import QrcodeSection from "../../Sections/QrcodeSection/QrcodeSection.jsx";
import Services from "../Services/Services.jsx";
import Medicine from "../../Sections/Medicine/Medicine.jsx";

import Xray from "../../Sections/Xray/Xray.jsx";
import MedicalDoc from "../../Sections/medicalDocumentation/medicalDoc.jsx";
import MedicalInfo from "../../Sections/medicalInformation/medicalInfo.jsx";
import DiseaseTypes from "../DiseaseTypes/DiseaseTypes.jsx";
import Map from "../../Components/LocationComponent.jsx"
import Panner from "../panner/panner.jsx";
import MultipleQuestionForm from "../multibleForm/MultibleForm.jsx";

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  return (
    <>
      <Landing />
      <QrcodeSection/>
      <Xray/>
      <Medicine/>
      <MedicalInfo/>
      <MedicalDoc/>
      {/* 
      <Panner></Panner>
      <Services> </Services>
      <DiseaseTypes></DiseaseTypes>
       */}






      

    
      <Map />
      <Footer></Footer>


<<<<<<< HEAD


=======
<MedicalDoc></MedicalDoc>

<MedicalInfo></MedicalInfo>
<Map/>

<Footer></Footer>

<MultipleQuestionForm></MultipleQuestionForm>
        
>>>>>>> 6c02007cd4c67f345778e2411b6c546ec701e432
    </>

  );
}
export default HomePage;

