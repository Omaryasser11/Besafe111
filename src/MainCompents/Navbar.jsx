import React, { useEffect, useRef, useState } from "react";
import NotificationTable from "../NotificationTable/NotificationTable.jsx"; // Import the NotificationTable component
import LOGO from "../assets/LOGO1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faQrcode,
  faUserCircle,
  faEnvelope,
  faInfoCircle,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import "./Navbar.scss";
import { useAuth } from ".././store/auth.jsx";
import baseUrl from "../BaseUrl.js";

// // Your component code here
// export const userState = atom({
//   key: "userState",
//   default: { loggedIn: false, username: "" },
// });

// export const notificationState = atom({
//   key: "notificationState",
//   default: { click: false },
// });
export default function Navbar() {
  const auth = useAuth();

  const token = auth.Token;
  const user = auth.user;
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);


  const getNotifications = async () => {
    try {
      const { data } = await baseUrl.get("/notifications");
      setNotifications(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = auth.Token;
    const user = auth.user;
    if (token) {
      getNotifications();
    }
  }, [navigate]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleNotifications = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the document click listener
    setShowNotifications(!showNotifications);
  };

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
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
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [notifications]);

  return (
    <>
      {showNotifications && (
        <NotificationTable
          ref={notificationRef}
          notifications={notifications}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}
      <div className="col-12 navbarStyle">
        <div className="logo1">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleLinks}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`menu ${showLinks ? "active" : ""}`}>
          <Link className="m-3 m3" to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link className="m-3 m3" to="/ScanQrCode">
            <FontAwesomeIcon icon={faQrcode} /> Scan Qr
          </Link>
          <Link className="m-3 m3" to="/contact-us">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
          </Link>
          <Link className="m-3 m3" to="/about-us">
            <FontAwesomeIcon icon={faInfoCircle} /> About Us
          </Link>
          {!token && (
            <>
              <div className="Links flexR">
                <div className="Auth flexRSB">
                  <Link className="D flex " to="/login">
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Link>

                  <div className=" Cline"></div>
                  <Link className="D flex" to="/SignUp">
                    <FontAwesomeIcon icon={faUser} /> Sign Up
                  </Link>
                </div>
              </div>
            </>
          )}

          {token && (
            <>
              <Link className="m-3 m3" to="/UserProfile">
                <FontAwesomeIcon icon={faUser} /> Welcome, {user}!
              </Link>
              <Link
                className="m-3 m3 position-relative notification-link"
                to="#"
                onClick={toggleNotifications}
              >
                <FontAwesomeIcon icon={faBell} />
                {notifications.length > 0 && (
                  <span className="notification-counter">
                    {notifications.length}
                  </span>
                )}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
