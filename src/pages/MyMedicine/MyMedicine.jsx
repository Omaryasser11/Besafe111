import '../MyMedicine/MyMedicine.scss'

import MedicineImg from '../../assets/MedicineForm.jpg'

import {Select} from "react-dropdown-select"
import { useState } from 'react'
function MyMedicine(){
  
    const[value,setvalue]=useState()


    const options=[{id:'capsule'},
                   {id:'Topical'},
                   {id:'syrup'},
                   {id:'tablet'},



]
const optionsUnit=[{id:'mg'},
{id:'mL'},
{id:'Micro g'},
{id:'%'},



]
const optionsFrequncey=[{id:'every day'},
{id:'every 2 days'},
{id:'every week'},




]

return(

<>



<div className="col-12 Medicine-Container">


<div className=" col-12   col-md-8 col-lg-5  MedicineImg" >

<img src={MedicineImg} className="Img"></img>

</div>


     
<div  className="formContainer col-9 col-md-7 col-lg-5">

    <form className="form-control-Medicine  col-11 col-md-10 ">
    <label for="myMedicineName" className="MyMedicine"> Medicine Name</label>
     <input type='text' placeholder='medicine Name'></input>
    <label for="myMedicineType" className="MyMedicine"> Medicine type</label>
       


   
            <select defaultValue="select..."  required className='Select-medicine col-10 col-md-9'>
            <option  selected >Select..</option>
     { options.map(option=>(
                 
                <option key={option.id}>{option.id}</option>
                ))}
            </select>
            <label for="myMedicineForce" className="MyMedicineForce"> Medicine Force</label>
            <input type='text' className='force-Input' placeholder='medicene Force'></input>
    <label for="myMedicineUnit" className="MyMedicine"> Medicine unit</label>
    <select defaultValue="select..."  required className='Select-medicine-unit col-10 col-md-9'>
            <option  selected >Select..</option>
     { optionsUnit.map(optionUnit=>(
                 
                <option key={optionsUnit.id}>{optionUnit.id}</option>
                ))}
            </select>

            <label for="myMedicineFrequncey" className="MyMedicineFrequncey"> frequncey</label>
            <select defaultValue="select..."  required className='Select-medicine-Frequncey col-10 col-md-9'>
            <option  selected >Select..</option>
     { optionsFrequncey.map(optionFrequncey=>(
                 
                <option key={optionsFrequncey.id}>{optionFrequncey.id}</option>
                ))}
            </select>
   
            <label for="medicineDate" className="medicineDate"> when take Medicine??</label>

            <input type='Time' className='force-Input' placeholder='medicene Force'></input>

 <input type="Submit" className="btn-Upload-Medicine" /> 

</form>



</div>



</div>
</>

)


    
}
export default MyMedicine;