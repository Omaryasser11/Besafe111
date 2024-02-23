import { Link } from "react-router-dom";
import '../MyXray/MyXray.scss'

import XrayImg from "../.././assets/Xray.jpg";
function MyXray() {

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




    return (




        <div className="col-12 XRay-Container">


            <div className=" col-12  col-md-10 col-lg-6  xrayImg" >
  
                <img src={XrayImg} className="Img"></img>


            </div>



            <div className="formContainer col-9 col-md-7 col-lg-5">

                <form className="form-control-Xray  col-10 col-md-9 ">

                    <label for="myXray" className="MyXray">upload your xray</label>
                    <input type="file" id="myXray" name="myXray" className="MyXray-File" />
                    <label for="MyComment" className="MyComment"> My Comment</label>
                    <textarea id="MyComment" name="MyComment" rows="4" className="MyComment-Input" placeholder="MyComment..."></textarea>

                    <input type="Submit" className="btn-Upload-Xray" />




                </form>







            </div>






        </div>








    )











}


export default MyXray