import '../medicalDocumentation/medicalDocs.scss'
import analses from "../../assets/analses.webp"


import { Link } from 'react-router-dom'
function MedicalDoc(){




    return(

<div className="col-10 medicalDoc">

    <div className="text">
        <h4 className='h4'> Upload Your Medical Test</h4>
        <p >Organize your medical tests to streamline access when needed, ensuring efficiency and ease of retrieval
             </p>
             <button className="AddMedicalDoc">   <Link to={'/MYMediclDoc'} className='btn'> Add Medical Test</Link></button>  
        
    </div>
<img src={analses} alt="" />
    
    
</div>



    )
}
export default MedicalDoc;