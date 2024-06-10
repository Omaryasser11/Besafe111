import React, { useState } from 'react';
import "./Navcol.scss"
import Icon from "../../assets/LOGO1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo, faPersonCircleCheck, faCalendarPlus, faBookmark, faUserTie, faFile, faMagnifyingGlassChart, faInbox, faUsers, faMoneyBillTransfer, faHandPointUp, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function Navcol() {

    const [isMini, setIsMini] = useState(false);
    const [original, setOriginal] = useState(true); // State to track if dropdown is in original state

    const toggleMiniStyle = () => {
        // Set original to false when mini style is activated
        setIsMini(false);
        setOriginal(true);
    };

    const resetDropdown = () => {

        setIsMini(true);
        setOriginal(false); // Reset dropdown to original state
    };

    return (
        <>
            {/* {isMini && (
                <div id="NavBar" className={isMini ? 'mini' : ''}>


                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <h1>Eh</h1>
                        </div>
                    </a>


                    <hr class="sidebar-divider my-0" />
                    <ul className='companentUl'>
                        <span class="sidebar-heading">
                            Dashboard
                        </span>

                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faGaugeHigh} />

                        </Link>

                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faInbox} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faMoneyBillTransfer} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faBookmark} />

                        </Link>
                        <Link class="nav-item-mini" to="/Admin">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faHandPointUp} />

                        </Link>
                    </ul>

                    <hr class="sidebar-divider" />

                    <ul className='companentUl'>
                        <span class="sidebar-heading">
                            Add
                        </span>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faCircleInfo} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H2">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faCalendarPlus} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H2">

                            <FontAwesomeIcon className='FontAwsame-mini' icon={faPersonCircleCheck} />
                        </Link>


                    </ul>




                    <hr class="sidebar-divider" />
                    <ul className='companentUl'>


                        <span class="sidebar-heading">
                            Create Account
                        </span>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserTie} />
                        </Link>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserTie} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUserPlus} />
                        </Link>



                    </ul>


                    <hr class="sidebar-divider" />
                    <ul className='companentUl'>


                        <span class="sidebar-heading">
                            List
                        </span>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>
                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>

                        <Link class="nav-item-mini" to="/Admin/H1">
                            <FontAwesomeIcon className='FontAwsame-mini' icon={faUsers} />
                        </Link>



                    </ul>

                    <hr class="sidebar-divider d-none d-md-block" />


                    <div class="text-center d-none d-md-inline">
                        <button class="btn-mini" onClick={toggleMiniStyle}>Drob</button>
                    </div>



                </div>
            )} */}




            {/* (       {!isMini && original && */}
            <div id="NavBar" className=" fixed-content">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <img className='NavIcon' src={Icon} />
                    </div>
                </a>

                <hr class="sidebar-divider my-0" />

                <ul className='companentUl'>
                    <span class="sidebar-heading">
                        Dashboard
                    </span>

                    <Link class="nav-item" to="/HomeAdmin">

                        <FontAwesomeIcon className='FontAwsame' icon={faGaugeHigh} />
                        <span>Dashboard</span>
                    </Link>

                </ul>

                <hr class="sidebar-divider" />

                <ul className='companentUl'>
                    <span class="sidebar-heading">
                        Create Accounts
                    </span>


                    <Link class="nav-item" to="/HomeAdmin/CreateAccount">

                        <FontAwesomeIcon className='FontAwsame' icon={faUserPlus} />
                        <span>User</span>
                    </Link>



                </ul>

                <hr class="sidebar-divider" />

                <ul className='companentUl'>
                    <span class="sidebar-heading">
                        List
                    </span>
                    <Link class="nav-item" to="/HomeAdmin/UsersPage">

                        <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                        <span>Users List</span>
                    </Link>
                    <Link class="nav-item" to="/HomeAdmin/HospiatalsPage">

                        <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                        <span>Hospital Lists</span>
                    </Link>




                </ul>

                <hr class="sidebar-divider" />
                <ul className='companentUl'>
                    <span class="sidebar-heading">
                        Scan QrCode
                    </span>
                    <Link class="nav-item" to="/HomeAdmin/ScanQrCode">

                        <FontAwesomeIcon className='FontAwsame' icon={faUsers} />
                        <span>Scan Qr</span>
                    </Link>
                </ul>






                <div class="text-center d-none d-md-inline">
                    <button class="Btn_Nav" onClick={resetDropdown}>Drop</button>
                </div>



            </div >
            {/* )
            } */}
        </>
    )
}

