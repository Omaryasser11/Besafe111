import './medicalinfo.scss'
import { Link } from 'react-router-dom'

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function MedicalInfo(){
  useEffect(() => {
    AOS.init({
      duration:3000,
      once: false,
  
    });
    AOS.refresh();
}, []);

return(

<>
<div className='MedicalInfo-container col-12' data-aos="zoom-in"> 
    <div className="col-10 MedicalInfo" >
      <div className="Image-medical">  </div>
      <div className="text-medical"> 

      <h4 className='MedicalInfo-Header'> Prepare your medical ID</h4>
      
      
      <p>In the event of an emergency, first responders can look at your medical identification information for information
        Contribute to saving your life.
        </p>
        
        <button className="AddMedicalInfo">   <Link className='Link' to={'/MyMedicalInfo'} > Add Your Medical Info</Link></button> 
        
        
        
        </div>

    </div>
   
 

 
    </div>


</>
)





}
export default MedicalInfo