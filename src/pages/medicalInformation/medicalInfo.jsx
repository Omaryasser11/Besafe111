import './medicalinfo.scss'
import { Link } from 'react-router-dom'
function MedicalInfo(){
return(

<>
<div className='MedicalInfo-container col-12'> 
    <div className="col-10 MedicalInfo" >
      <div className="Image-medical">  </div>
      <div className="text-medical"> 

      <h4 className='MedicalInfo-Header'> Prepare your medical ID</h4>
      
      
      <p>In the event of an emergency, first responders can look at your medical identification information for information
        Contribute to saving your life.
        </p>
        
        <button className="AddMedicalInfo">   <Link to={'/MyMedicallInfo'} className='btn'> Add Your Medical Info</Link></button> 
        
        
        
        </div>

    </div>
   
 

 
    </div>


</>
)





}
export default MedicalInfo