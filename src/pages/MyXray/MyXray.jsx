import { Link } from "react-router-dom";
import '../MyXray/MyXray.scss';
import { useState } from "react";


import XrayImg from "../.././assets/Xray.jpg";
<<<<<<< HEAD
import Swal from "sweetalert2";
function MyXray(){
=======
function MyXray() {
>>>>>>> ed383559c07b39f0838918eb87ab3d74fe5c3870

    //     <div className="xray col-12">


    //     <div className="text">

    //         <h4>Uploade Your Xray</h4>
    //         <p>Lorem ipsum dolor sit amet consectetur <br></br>
    //              quod natus placeat quas ratione labore 
    //              doloremque nobis 
    //              </p>

    //             <button className="AddXray">   <Link to={'/MYXray'} className='btn'> Add Your Xray</Link></button>  

    //     </div>

    //     <div className="xray-image">

    //           </div>

    // </div>

const [currentStep, setCurrentStep] = useState(1);
const [file, setFile] = useState(null);
const [text, setText] = useState('');
const [copiedData, setCopiedData] = useState(null);
const handleNext = () => {
    if (currentStep === 1 && (!file )) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "this filed is required",
            showConfirmButton: false,
            timer: 1500,
          });
      return;
    }

    // Copy data to be used in the next step
    setCopiedData({ file, text });

    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    if (!file ) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: " the file is required ",
            showConfirmButton: false,
            timer: 1500,
          });
      return;
    }
    else{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "all is done",
            showConfirmButton: false,
            timer: 1500,
          });

          

    }
    
    // Perform submission logic here
   
    setText('')
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    
  };


  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };




    return (




        <div className="col-12 XRay-Container">


            <div className=" col-12  col-md-10 col-lg-6  xrayImg" >
  
                <img src={XrayImg} className="Img"></img>


            </div>

<<<<<<< HEAD
    {/* <form className="form-control-Xray  col-10 col-md-9 ">

    <label for="myXray" className="MyXray">upload your xray</label>
    <input type="file" id="myXray" name="myXray"  className="MyXray-File"  onChange={handleFileChange}/>
    <label for="MyComment" className="MyComment"> My Comment</label>
    <textarea onChange={handleTextChange}  value={text} id="MyComment" name="MyComment" rows="4" className="MyComment-Input" placeholder="MyComment..."></textarea>

    <input onClick={ handleSubmit} type="Submit" className="btn-Upload-Xray" /> 
    <button onClick={handleNext}>Next</button>
=======


            <div className="formContainer col-9 col-md-7 col-lg-5">

                <form className="form-control-Xray  col-10 col-md-9 ">

                    <label for="myXray" className="MyXray">upload your xray</label>
                    <input type="file" id="myXray" name="myXray" className="MyXray-File" />
                    <label for="MyComment" className="MyComment"> My Comment</label>
                    <textarea id="MyComment" name="MyComment" rows="4" className="MyComment-Input" placeholder="MyComment..."></textarea>

                    <input type="Submit" className="btn-Upload-Xray" />
>>>>>>> ed383559c07b39f0838918eb87ab3d74fe5c3870




<<<<<<< HEAD
</form> */}
<div className="form-control-Xray">
      {currentStep === 1 && (
        <>
          {/* Step 1: File Input */}
          <input className="MyXray-File" type="file" onChange={handleFileChange} />
           
       
      
        </>
      )}

      {currentStep === 2 && (
        <>
          {/* Step 2: Additional Inputs */}
          {/* Render inputs based on copied data */}
          <label > my comment</label>
          
          <textarea className="MyComment-Input" value={text} onChange={handleTextChange} rows={5}  placeholder="comment..."  />
        </>
      )}

      {/* Next Button */}
      <button className={currentStep === 1 ? "btn-next-Xray" : "btn-Submit-Xray"} onClick={currentStep === 1 ? handleNext : handleSubmit}>
        {currentStep === 1 ? "Next" : "Submit"}
      </button>
    </div>
=======
                </form>
>>>>>>> ed383559c07b39f0838918eb87ab3d74fe5c3870







            </div>






        </div>








    )











}


export default MyXray