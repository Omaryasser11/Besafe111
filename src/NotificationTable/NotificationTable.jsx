import React, { useState, useEffect } from "react"; // Importing useState and useEffect
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCalendar,
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import baseUrl from "../BaseUrl";
import { Link } from "react-router-dom";
// import { format } from "date-fns";
import "./NotificationTable.scss";
import LOC from "../assets/Location.png";
import Con from "../assets/connect.png";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal"; // Importing Modal from React Bootstrap
import Button from "react-bootstrap/Button"; // Importing Button from React Bootstrap
import LocationComponent from "../Components/MapLocation/ShowMapLocation"; // Replace with correct path to LocationComponent
import Loader from "../Components/Loadar/Loadar";

const NotificationTable = ({ notifications }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedResourceId, setSelectedResourceId] = useState(null);

  const handleRemove = async (index) => {
    try {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: `Deleting notification ${index}...`,
        showConfirmButton: false,
        timer: 3000, // Adjust as needed
      });

      await baseUrl.delete("/notifications/" + index);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Notification ${index} Deleted Successfully`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleMakeAllAsRead = async () => {
    try {
      await baseUrl.put("/notifications/markAllAsRead");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptConnect = async (id) => {
    try {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Connecting...",
        showConfirmButton: false,
        timer: 5000, // Adjust as needed
      });

      await baseUrl.put("/connectionRequests/acceptConnection/" + id);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are Connected Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Error: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  useEffect(() => {
    console.log({ notifications });
  }, [notifications]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    // return format(date, "hh:mm a MMM dd, yyyy");
  };
  const handleLocationClick = (resourceId) => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Loading location details...",
      showConfirmButton: false,
      timer: 2000, // Show alert for 2 seconds before showing the modal
    });

    // Set a timeout to show the modal after the alert
    setTimeout(() => {
      setSelectedResourceId(resourceId);
      setShowLocationModal(true);
    }, 2000); // Timeout matches the alert duration
  };
  return (
    <div className="Fixed">
      {/* Modal for Location Component */}
      <Modal
        show={showLocationModal}
        onHide={() => setShowLocationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Location Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LocationComponent resourceId={selectedResourceId} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowLocationModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {notifications.length > 0 && (
        <div className="notification-actions">
          {/* <button className="remove-all-button" onClick={handleMakeAllAsRead}>
            Make all as read
          </button> */}
        </div>
      )}

      <table className="notification-table">
        <thead className="bg-light">
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>
              <FontAwesomeIcon icon={faCalendar} className="me-1" />
              Date
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <tr
                key={index}
                className={`notification-item ${notification.type.toLowerCase()}`}
              >
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notification.type === "Location" ? LOC : Con}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1 fontTitle">
                        {notification.type}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fontTitle fw-bold mb-1">
                    {notification.content}
                  </p>
                </td>
                <td>
                  <p className="fontTitle fw-bold mb-1">
                    {/*{formatDate(notification.notifiedOn)}*/}
                  </p>
                </td>
                <td>
                  <button
                    className="iConRmv"
                    type="button"
                    onClick={() => handleRemove(notification.id)}
                  >
                    <FontAwesomeIcon className="iCon rmv" icon={faTrash} />
                  </button>
                  {notification?.type === "Location" ? (
                    <button
                      className="iConLoci"
                      type="button"
                      onClick={() =>
                        handleLocationClick(notification.resourceId)
                      }
                    >
                      <FontAwesomeIcon
                        className="iCon Loci"
                        icon={faLocationDot}
                      />
                    </button>
                  ) : (
                    <button
                      className="iConChk"
                      type="button"
                      onClick={() =>
                        handleAcceptConnect(notification?.resourceId)
                      }
                    >
                      <FontAwesomeIcon
                        className="iCon chk"
                        icon={faCircleCheck}
                      />
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="No">
                No notifications
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationTable;
