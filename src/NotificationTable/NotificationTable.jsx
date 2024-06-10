import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./NotificationTable.scss";
import { useEffect } from "react";
import baseUrl from "../BaseUrl";
import { Link } from "react-router-dom";

const NotificationTable = ({ notifications }) => {
  const handleRemove = async (index) => {
    try {
      await baseUrl.delete("/notifications/" + index);
    } catch (error) {
      console.log(error);
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
      await baseUrl.put("/connectionRequests/acceptConnection/" + id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log({ notifications });
  }, []);

  return (
    <div className="notification-table" style={{ width: "700px" }}>
      {notifications.length > 0 && (
        <div className="notification-actions">
          <button className="remove-all-button" onClick={handleMakeAllAsRead}>
            Make all as read
          </button>
        </div>
      )}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <tr
                key={index}
                className={`notification-item ${notification.type.toLowerCase()}`}
              >
                <td>{notification.type}</td>
                <td>{notification.content}</td>
                <td>{notification.date}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(notification.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="remove-button"
                    onClick={() =>
                      handleAcceptConnect(notification?.resourceId)
                    }
                  >
                    Ac
                  </button>
                  {notification?.type === "Location" && (
                    <Link
                      to={`/LocationComponent/${notification?.resourceId}`}
                      className="btn btn-primary bg-primary"
                    >
                      Location
                    </Link>
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
