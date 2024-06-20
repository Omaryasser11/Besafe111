import React from "react";
// import "./Modal.scss";

const Modal = ({ isOpen, onClose, notification }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{notification.type}</h2>
                <p>{notification.content}</p>
                <p>Date: {notification.date}</p>
            </div>
        </div>
    );
};

export default Modal;
