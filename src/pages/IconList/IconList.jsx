// IconList.js

import React from 'react';
import { Link } from 'react-router-dom';


const IconList = ({ isOpen }) => {
  return isOpen ? (
    <ul className="icon-list">
      <li className="icon-item">
        <Link to="/home">
          <i className="fas fa-home"></i> {/* Example icon */}
        </Link>
      </li>
      <li className="icon-item">
        <Link to="/ScanMyQrCode">
          <i className="fas fa-qrcode"></i> {/* Example icon */}
        </Link>
      </li>
      <li className="icon-item">
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> {/* Example icon */}
        </Link>
      </li>
      <li className="icon-item">
        <Link to="/SignUp">
          <i className="fas fa-user-plus"></i> {/* Example icon */}
        </Link>
      </li>
      {/* Add more icons/links as needed */}
    </ul>
  ) : null;
};

export default IconList;
