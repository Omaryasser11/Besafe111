import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faInfoCircle, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import './NotificationTable.scss';

const NotificationTable = forwardRef(({ notifications, onRemove, onRemoveAll }, ref) => {
  const handleRemove = (index) => {
    if (typeof onRemove === 'function') {
      onRemove(index);
    }
  };

  const handleRemoveAll = () => {
    if (typeof onRemoveAll === 'function') {
      onRemoveAll();
    }
  };

  return (
    <div ref={ref} className="notification-table">
      {notifications.length > 0 && (
        <div className="notification-actions">
          <button className="remove-all-button" onClick={handleRemoveAll}>
            <FontAwesomeIcon icon={faTrash} /> Remove All
          </button>
        </div>
      )}
      <table>
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
              <tr key={index} className={`notification-item ${notification.type.toLowerCase()}`}>
                <td>
                  {notification.type === 'Info' && <FontAwesomeIcon icon={faInfoCircle} className="info-icon" style={{ color: '#3498db' }} />}
                  {notification.type === 'Alert' && <FontAwesomeIcon icon={faExclamationCircle} className="alert-icon" style={{ color: '#e74c3c' }} />}
                  {notification.type === 'Success' && <FontAwesomeIcon icon={faCheckCircle} className="success-icon" style={{ color: '#2ecc71' }} />}
                </td>
                <td>{notification.message}</td>
                <td>{notification.date}</td>
                <td><button className="remove-button" onClick={() => handleRemove(index)}><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="No">No notifications</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

export default NotificationTable;

