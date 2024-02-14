
import { Link } from "react-router-dom";
import '../Xray/Xray.scss';
import Ximg from "../../assets/XRAY (2).png";

function Xray() {



    return (


        <div className="Xray col-12">


            <div className="text">

                <h4 className="XrayHeader">Uploade Your Xray</h4>
                <p>Upload all your medical scans here so that they cannot be found when needed  <br></br>
                    
                   
                </p>

                <button className="AddXray">   <Link to={'/MYXray'} className='btn'> Add Your Xray</Link></button>

            </div>
            <img src={Ximg} alt="" />


        </div>





    )






}
export default Xray;