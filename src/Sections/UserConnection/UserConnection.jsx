import '../UserConnection/UserConnection.scss'
import person from "../../assets/peron.png"

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

<div className="col-10 Connection " data-aos="zoom-in">

    <div className="text">
        <h4 className='h4'> connect to other</h4>
        <p >Organize your medical tests to streamline access when needed, ensuring efficiency and ease of retrieval
             </p>
             <button className="ConnectBtn">   <Link to={'/Connect to other'} className='Link'> connect to other </Link></button>  
        
    </div>
<img src={person} alt="" />
    
    
</div>



    )
}
export default MedicalDoc;