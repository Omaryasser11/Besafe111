
import "./HospitalNav.scss"
import React, { useEffect, useRef, useState } from "react";
import NotificationTable from "../../NotificationTable/NotificationTable.jsx"; // Import the NotificationTable component
import LOGO from "../../assets/LOGO1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faQrcode, faUserCircle, faEnvelope, faInfoCircle, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import "../../MainCompents/Navbar.scss"
import { useAuth } from "../../store/auth.jsx";

// Your component code here
export const userState = atom({
    key: 'userState',
    default: { loggedIn: false, username: '' }
});

export const notificationState = atom({
    key: 'notificationState',
    default: { click: false }
});

export default function HospitalNaV() {



    const [user, setUser] = useRecoilState(userState);

    const [showLinks, setShowLinks] = useState(false);
    const [notifications, setNotifications] = useState([
        { type: 'Info', message: 'You have a new message.', date: '2023-05-01' },
        { type: 'Alert', message: 'Your appointment is tomorrow.', date: '2023-05-02' }
    ]);
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);
    // const handleLogin = (username) => {
    //     setUser({ loggedIn: true, username });
    // };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const toggleNotifications = (event) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the document click listener
        setShowNotifications(!showNotifications);
    };

    const handleClickOutside = (event) => {
        if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setShowNotifications(false);
        }
    };

    const handleRemove = (index) => {
        // Remove the notification at the specified index from the notifications state
        const updatedNotifications = [...notifications];
        updatedNotifications.splice(index, 1);
        setNotifications(updatedNotifications);
    };

    const handleRemoveAll = () => {
        setNotifications([]);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const userData = JSON.parse(localStorage.getItem('userData'));
    const userName = userData ? userData.patientName : '';
    const auth = useAuth();



    return (
        <>
            {showNotifications && (
                <NotificationTable ref={notificationRef} notifications={notifications} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            )}
            <div className="col-12 navbarStyle">
                <div className="logo1"><img src={LOGO} alt="Logo" /></div>
                <div className="menu-toggle" onClick={toggleLinks}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`menu ${showLinks ? 'active' : ''}`}>

                    <Link className="m-3 m3" to="/Hoaptial"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    <Link className="m-3 m3" to="/Hoaptial/ScanQrCodeHospital"><FontAwesomeIcon icon={faQrcode} /> Scan Qr</Link>
                    <Link className="m-3 m3" to="/Hoaptial/MedicalInfo"><FontAwesomeIcon icon={faEnvelope} />Medical Information</Link>
                    <Link className="m-3 m3" to="/Hoaptial/MedicalRecords"><FontAwesomeIcon icon={faInfoCircle} /> MedicalRecords</Link>
                    {
                        auth.isAuthenticated === false && (

                            <>

                                <div className='Links flexR'>
                                    <div className='Auth flexRSB'>
                                        <Link className="D flex m-3" to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link>

                                        <div className=' Cline'></div>

                                    </div>
                                </div>

                            </>
                        )
                    }






                    {auth.isAuthenticated === true && (
                        <>
                            <Link className="m-3" to="/UserProfile">
                                <FontAwesomeIcon icon={faUser} /> Welcome, {auth.user}!
                            </Link>
                            <Link className="m-3 position-relative notification-link" to="#" onClick={toggleNotifications}>
                                <FontAwesomeIcon icon={faBell} />
                                {notifications.length > 0 && (
                                    <span className="notification-counter">{notifications.length}</span>
                                )}
                            </Link>
                        </>

                    )



                    }
                </div>
            </div>
        </>
    )
}


