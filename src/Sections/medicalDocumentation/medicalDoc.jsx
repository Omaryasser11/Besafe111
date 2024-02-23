import '../medicalDocumentation/medicalDocs.scss'
import analses from "../../assets/analses.webp"

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
function MedicalDoc(){

    useEffect(() => {
        AOS.init({
          duration:3000,
          once: false,
      
        });
        AOS.refresh();
    }, []);

    return(

<div className="col-10 medicalDoc" data-aos="zoom-in">

    <div className="text">
        <h4 className='h4'> Upload Your Medical Test</h4>
        <p >Organize your medical tests to streamline access when needed, ensuring efficiency and ease of retrieval
             </p>
             <button className="AddMedicalDoc">   <Link to={'/MyMedicalTestForm'} className='btn'> Add Medical Test</Link></button>  
        
    </div>
<img src={analses} alt="" />
    
    
</div>



    )
}
export default MedicalDoc;