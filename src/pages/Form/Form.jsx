
import { useState } from "react";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
 import "./Form.scss";

function Form(){


    const SelectionOne=[
      
        {label:"male"},
        {label:"female"},
     
    
    
    ]
    const SelectionTwo=[
        
        {label:"diabets"},
        {label:"heart"},
        {label:"cancer"},
        {label:"Elzahimer"},
     
    
    

    ]


 

 





    return(
    
        <div className="medical_information">


         <h1>medical information</h1>

      <form className="form-css">
       
      
  
        <select> 
        <option disabled  selected > gender</option>
        { SelectionOne.map(option=>(
            <option >{option.label}</option>

    ))}
    
         


        </select>
        <select>
            <option disabled   selected > disease</option>
        { SelectionTwo.map(option=>(
       
            <option>{option.label}</option>

    ))}
    

        </select>

      
       

        <input type="age"placeholder="age" ></input>   
<input  type="text"placeholder="lenght in meter" ></input>
<input type="text"placeholder="weight  in kg" ></input>



        </form>
        
      

      


</div>




    )
















}
export default Form;