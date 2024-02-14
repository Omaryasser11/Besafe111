

import { Link } from 'react-router-dom';

import '../Medicine/Medicine.scss'
import ImfMidicine from '../../assets/medicine.png';
function Medicine(){


    return(
     
<div className='medicine-container col-12'>
        <div className="col-10 medicine">

<img src={ImfMidicine} alt="" />
       <div className="text">
        <h4 className='MedicineHeader'>add the name of medicine</h4>
        <p>Lorem ipsum dolor sit amet consectetur, <br></br>
            adipisicing elit.
         Fuga aspernatur molestias ducimus ea optio
          </p>


             <button className="AddMedicine">   <Link to={'/MyMedicine'} className='btn'> Add Your Medicine</Link></button>  
       </div>
       
        </div>
        
 



        </div>


    )






}
export default Medicine;
