import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../Medicine/Medicine.scss'
import ImfMidicine from '../../assets/medicine.png';

function Medicine() {
    
    useEffect(() => {
        AOS.init({
          duration:3000,
          once: false,
      
        });
        AOS.refresh();
    }, []);
    return (
        <div className='medicine-container col-12' data-aos="zoom-in">
            <div className="col-10 medicine">
                <img src={ImfMidicine} alt="" />
                <div className="text">
                    <h4 className='MedicineHeader'>add the name of medicine</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, <br></br>
                        adipisicing elit.
                        Fuga aspernatur molestias ducimus ea optio
                    </p>
                    <button className="AddMedicine">   <Link className="Link"  to={'/MyMedicine'} > Add Your Medicine</Link></button>
                </div>

            </div>





        </div>


    )






}
export default Medicine;
