import React, { Fragment, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMapMarkerAlt, faEdit, faSave, faTimes, faTrash, faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import QRCode from "qrcode.react";
import "../UserProfile/UserProfile.scss";
import face from "../../assets/face.jpg"; // Default face image
import Swal from "sweetalert2";
import { useAuth } from "../../store/auth";
import baseUrl from "../../BaseUrl";
import html2canvas from 'html2canvas'; // For saving QR code as image
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [userImage, setUserImage] = useState(null); // State for user image URL
  const [showImageOptions, setShowImageOptions] = useState(false); // State for showing image options modal
  const [showQRModal, setShowQRModal] = useState(false); // State for showing QR code modal

  const navigate = useNavigate();
  const auth = useAuth();
  const qrRef = useRef(null); // Reference for QR code element

  // Function to get user info including image
  const getUserInfo = async () => {
    try {
      const { data } = await baseUrl.get("/account");
      setUser(data);
      console.log(data);
      setUserImage(data.imageUrl); // Set user image URL from API
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch connected users
  const getConnectedUsers = async () => {
    try {
      const { data } = await baseUrl.get("/connections");
      setConnectedUsers(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getConnectedUsers();
  }, [auth.user]);

  // Edit user information handlers
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      await baseUrl.put("/account", editedUser);
      setUser(editedUser);
      setIsEditing(false);
      Swal.fire("Success", "User information updated successfully", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Failed to update user information", "error");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await baseUrl.put("/account/accountImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUserImage(data.imageUrl); // Update user image URL after successful upload
      setShowImageOptions(false); // Hide image options modal after successful upload
      Swal.fire("Success", "Image uploaded successfully", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Failed to upload image", "error");
    }
  };

  const handleDeleteImage = async () => {
    try {
      await baseUrl.delete("/account/accountImage");
      setUserImage(null); // Clear user image URL after successful deletion
      setShowImageOptions(false); // Hide image options modal after successful deletion
      Swal.fire("Success", "Image deleted successfully", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Failed to delete image", "error");
    }
  };

  const handleDeleteClick = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await baseUrl.delete(`/connections/${id}`);
          setConnectedUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
          Swal.fire("Deleted!", "The connection has been deleted.", "success");
        } catch (error) {
          console.log(error);
          Swal.fire("Error", "Failed to delete the connection", "error");
        }
      }
    });
  };

  const handleSaveQRCode = () => {
    if (!qrRef.current) {
      console.error('QR code element not found');
      return;
    }

    html2canvas(qrRef.current)
      .then((canvas) => {
        const url = canvas.toDataURL(); // Convert canvas to data URL

        // Create a temporary anchor element
        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.setAttribute('download', 'qr-code.png'); // Set the download attribute
        tempLink.click(); // Simulate click to download

        // Clean up
        tempLink.remove();
      })
      .catch((error) => {
        console.error('Error saving QR code:', error);
        // Handle error, show message to the user, etc.
      });
  };

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

  const handleClose = () => setShowImageOptions(false);
  const handleShow = () => setShowImageOptions(true);

  const handleQRModalClose = () => setShowQRModal(false);
  const handleQRModalShow = () => setShowQRModal(true);

  return (
    <div className="col-12 main-container">
      <div className="sidebar">
        <div className="profile-section">
          <h3 className="Welcome">Welcome, {user?.name}</h3>

          <div className="profile-image-circle">
            <img
              src={userImage || face}
              alt="Profile"
              className="centered-image"
              onClick={handleShow} // Show image options on click
            />

            <Modal show={showImageOptions} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Image Options</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Button variant="danger" onClick={handleDeleteImage}>
                  <FontAwesomeIcon icon={faTrash} /> Delete Image
                </Button>
                <div className="mt-3">
                  <label htmlFor="image-upload" className="btn btn-primary">
                    <FontAwesomeIcon icon={faUpload} /> Upload Image
                    <input
                      id="image-upload"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {user?.id && (
            <>
              <div onClick={handleQRModalShow} style={{ cursor: 'pointer' }}>
                <QRCode value={user.id.toString()} size={150} className="Qr" />
              </div>

              <Modal show={showQRModal} onHide={handleQRModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>QR Code</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div ref={qrRef}>
                    <QRCode value={user.id.toString()} size={250} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleQRModalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveQRCode}>
                    <FontAwesomeIcon icon={faDownload} /> Save QR Code
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="col-8 tablecontain">
        <div className="col-12 table-container">
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
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user?.name
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <FontAwesomeIcon
                        icon={faSave}
                        onClick={handleSaveClick}
                        className="action-icon save-icon"
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={handleCancelClick}
                        className="action-icon cancel-icon"
                      />

                    </>
                  ) : (
                    <FontAwesomeIcon className="fa-edit" icon={faEdit} onClick={handleEditClick} />
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user?.email
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <FontAwesomeIcon
                        icon={faSave}
                        onClick={handleSaveClick}
                        className="action-icon save-icon"
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={handleCancelClick}
                        className="action-icon cancel-icon"
                      />

                    </>
                  ) : (
                    <FontAwesomeIcon className="fa-edit" icon={faEdit} onClick={handleEditClick} />
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={editedUser.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user?.address
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <FontAwesomeIcon
                        icon={faSave}
                        onClick={handleSaveClick}
                        className="action-icon save-icon"
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={handleCancelClick}
                        className="action-icon cancel-icon"
                      />

                    </>
                  ) : (
                    <FontAwesomeIcon className="fa-edit" icon={faEdit} onClick={handleEditClick} />
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <h1 className="ConnectedUser">Connected Users</h1>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {connectedUsers.length > 0 ? (
                connectedUsers.map((user) => (
                  <Fragment key={user.id}>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faUser} />
                      </td>
                      <td>{user?.supervisorUser?.name}</td>
                      <td>{user?.supervisorUser?.email}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDeleteClick(user.id)}
                        />
                      </td>
                    </tr>
                  </Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-connections">
                    No connections found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
export default UserProfile;

