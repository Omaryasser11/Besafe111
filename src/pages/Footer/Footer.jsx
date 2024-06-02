import "./Footer.scss";
import { LogoNodejs } from 'react-ionicons';
import { FitnessOutline } from 'react-ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faTiktok, faSnapchat, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        AOS.refresh();
    }, []);// Run the effect only once after the component mounts


    return (
        <footer className="Footer col-12 ">
            <FitnessOutline data-aos="zoom-in"
                color={'#00000'}
                beat
                height="150px"
                width="150px"
            />
            <div className="col-10 mainF">

                <div className="col-6 LEFT">

                    <h1 className="annapurna-sil-bold" data-aos="fade-right" >Get In Touch</h1>
                    <p data-aos="fade-left">
                        Feel free to connect with us through our social media links for the latest updates and engaging content!</p>
                    <div className="IconFooter" >
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faFacebook} />
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faInstagram} />
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faXTwitter} />
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faTiktok} />
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faSnapchat} />
                        <FontAwesomeIcon className="icon" data-aos="zoom-out-right" icon={faThreads} />
                    </div>
                </div>
                <div className="col-6 RIGHT">
                    <div className="card" data-aos="fade-down-right" data-aos-duration="2000">
                        <FontAwesomeIcon className="iconCard" icon={faEnvelope} />
                        <p>BeSasfe@gmail.com</p>
                    </div>
                    <div className="card" data-aos="fade-up-left" data-aos-duration="2000">
                        <FontAwesomeIcon className="iconCard" icon={faPlus} />
                        <p>Join Now</p>
                    </div>
                </div>
            </div>

        </footer>
















    );
}
export default Footer;