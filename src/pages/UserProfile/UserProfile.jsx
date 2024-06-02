import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from "../../store/index";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faImage, faQrcode, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../UserProfile/UserProfile.scss';
import GoogleMapIframe from '../../Components/MapLocation/LocationComponent';
import Qrcode from '.././../assets/qrcode.png';
import face from '../../assets/face.jpg'
import Swal from 'sweetalert2';
import { useAuth } from "../../store/auth";
const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const { patientName, email, address, profileImage } = userData || { patientName: '', email: '', address: '' };
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();


  const auth = useAuth();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logged Out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout",
          text: "Your is Logged Out",
          icon: "success",
        });
        auth.logout();
        navigate("/");
      }
    });
  };
  return (
    <div className=' col-12 main-container'>
      <div className='sidebar'>
        <div className='profile-section'>
          <h3 className='Welcome'>Welcome, {patientName}</h3>
          <div className="profile-image-circle">
            <img src={face} alt="Qrcode" />
          </div>

          <img className='Qr' src={Qrcode} alt="Qrcode" />

          <button className='logout-button' onClick={handleLogout}>Logout</button>
        </div>

      </div>

      <div className='col-8 tablecontain'>
        <div className=" col-12 table-container">
          <h1 className='UserInfo'>User Information</h1>
          <table className='styled-table'>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Info</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faUser} /> Name</td>
                <td>{patientName}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faEnvelope} /> Email</td>
                <td>{email}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</td>
                <td>{address}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
            </tbody>
          </table>

          <h1 className='ConnectedUser'>Connected user</h1>

          <table className='styled-table'>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Info</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faUser} /> Name</td>
                <td>{patientName}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faEnvelope} /> Email</td>
                <td>{email}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</td>
                <td>{address}</td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserProfile;
