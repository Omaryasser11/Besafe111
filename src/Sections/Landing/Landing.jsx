import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Landing.scss";
import { Link } from 'react-router-dom';


export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
    AOS.refresh();
  }, []);// Run the effect only once after the component mounts

  return (
    <section className='col-12 Landing' >
      <div className='Filter col-12'>
        <div className='Text col-6' data-aos="fade-right">
          <h1> Welcome to   <span className='BESAFE'>Be Safe !</span>
            <br /> Your Personal
            <br /> Healthcare </h1>
          <Link id="button" to="/login">Start Now</Link>
        </div>
        <div className='IMG' data-aos="fade-left"></div>
      </div>

    </section>
  )

}
