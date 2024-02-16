
import '../MedIcalInfoForm/MyMedicalInfo.scss'
import MedicalInfoImg from '../../assets/MedicalInnfo.jpg'

function MyMedicalInfo(){
    const optionsDiseaseType=[{id:'heartDisease'},
    {id:'Kidney disease'},
    {id:'Liver Disease'},
    {id:'Blood disease'},
    {id:'particular Virus'},
    {id:'diabets'},
    {id:'pressure disease'},
    {id:'Another disease'},
    
    
    
    
    ]
    const optionsBloodType=[{id:'A'},
    {id:'B'},
    {id:'O'},
    {id:'AB'},
    {id:'A-'},
    {id:'B-'},
    {id:'AB-'},
    {id:'O-'},
    
    

    
    ]

return(

<>



<div className="col-12 MedicalInfo-Container">


<div className=" col-10   col-md-7 col-lg-5  MedicalInfoImg" >

<img src={ MedicalInfoImg} className="Img-MedicalInfo"></img>

</div>


     
<div  className="formContainer col-9 col-md-7 col-lg-5">

    <form className="form-control-MedicalInfo  col-11 col-md-10 ">
    <label for="myLenght" className="MyLenght"> Lenght</label>
     <input type='text' placeholder='Lenght in cm' ></input>
     <label for="myWeight" className="MyWeight"> Weight</label>
     <input type='text' placeholder='Weight in kg' ></input>
    <label for="myDiseaseType" className="MyDiseaseType"> Disease type</label>
       


   
            <select defaultValue="select..."  required  >
            <option  selected >Select..</option>
     { optionsDiseaseType.map(option=>(
                 
                <option key={option.id}>{option.id}</option>
                ))}
            </select>
            <label for="Another Disease" > Another disease</label>
            <input type='text' placeholder='Another Disease' ></input>
            <label for="myBloodType" className="MyBloodType"> Blood Type</label>
            <select defaultValue="select..."  required >

            <option  selected >Select..</option>
     { optionsBloodType.map(option=>(
                 
                <option key={option.id}>{option.id}</option>
                ))}
            </select>

    

 <input type="Submit" className="btn-Upload-Medicine" /> 

</form>



</div>



</div>
</>



)


}
export default MyMedicalInfo