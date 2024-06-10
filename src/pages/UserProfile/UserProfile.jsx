import React, { Fragment, useEffect, useState } from "react";
import { userState } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMapMarkerAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "../UserProfile/UserProfile.scss";
import GoogleMapIframe from "../../Components/MapLocation/LocationComponent";
import Qrcode from ".././../assets/qrcode.png";
import face from "../../assets/face.jpg";
import Swal from "sweetalert2";
import { useAuth } from "../../store/auth";
import baseUrl from "../../BaseUrl";
const UserProfile = () => {
  const [user, setUser] = useState(userState);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const { data } = await baseUrl.get("/account");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getConnecteduser = async () => {
    try {
      const { data } = await baseUrl.get("/connections");
      setConnectedUsers(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getConnecteduser();
  }, []);

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
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }
    });
  };
  return (
    <div className="col-12 main-container">
      <div className="sidebar">
        <div className="profile-section">
          <h3 className="Welcome">Welcome, {user?.name}</h3>
          <div className="profile-image-circle">
            <img src={face} alt="Qrcode" />
          </div>

          <img className="Qr" src={Qrcode} alt="Qrcode" />

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="col-8 tablecontain">
        <div className=" col-12 table-container">
          <h1 className="UserInfo">User Information</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Info</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUser} /> Name
                </td>
                <td>{user?.name}</td>
                <td>
                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </td>
                <td>{user?.email}</td>
                <td>
                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </td>
                <td>{user?.address}</td>
                <td>
                  <FontAwesomeIcon icon={faEdit} />
                </td>
              </tr>
            </tbody>
          </table>

          <h1 className="ConnectedUser">Connected user</h1>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Info</th>
                {/* <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {connectedUsers.map((user) => {
                return (
                  <Fragment key={user.id}>
                    {/* <tr>
                      <td>
                        <FontAwesomeIcon icon={faUser} /> Name
                      </td>
                      <td>{user?.supervisorUser?.name}</td>
                      <td>
                        <FontAwesomeIcon icon={faEdit} />
                      </td>
                    </tr> */}
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                      </td>
                      <td>{user?.supervisorUser?.email}</td>
                      {/* <td>
                        <FontAwesomeIcon icon={faEdit} />
                      </td> */}
                    </tr>
                    {/* <tr>
                      <td>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                      </td>
                      <td>none</td>
                      <td>
                        <FontAwesomeIcon icon={faEdit} />
                      </td>
                    </tr> */}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
