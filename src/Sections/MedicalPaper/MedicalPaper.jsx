import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import '../Xray/Xray.scss';


import Ximg from "../../assets/paper.jpg";

function Xray() {

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,

        });
        AOS.refresh();
    }, []);

    return (


        <div className="Xray col-12" data-aos="zoom-in">


            <div className="text">

                <h4 className="XrayHeader">Uploade Your Medical Paper</h4>
                <p>Upload all your Papers scans here so that they cannot be found when needed  <br></br>


                </p>

                <button className="AddXray">   <Link to={'/MyMedicalPaper'} className='btn1'> Add Your Medical Paper</Link></button>

            </div>
            <img src={Ximg} alt="" />


        </div>





    )






}
export default Xray;