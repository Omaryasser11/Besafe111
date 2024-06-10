import React, { useState } from "react";
import Swal from "sweetalert2";
import "../OtherPages/OtherPages.scss";
import baseUrl from "../../BaseUrl";

function Connect() {
  const [email, setEmail] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleConnect = async () => {
    // Simple email validation
    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address",
      });
      return;
    }

    try {
      await baseUrl.post("/connectionRequests/connectByUserEmail", {
        targetUserEmail: email,
      });
    } catch (error) {
      console.log(error);
    }

    // Implement your logic to connect to the user with the provided email
    console.log(`Connecting to user with email: ${email}`);
    // Reset the email input field and show success message

    setIsConnected(true);

    // Show success message with SweetAlert
    Swal.fire({
      icon: "success",
      title: "Connected!",
      text: `Successfully connected to ${email}`,
    });
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="connect-container">
      <h2 className="connect-header">Connect with Other Users</h2>
      {!isConnected ? (
        <>
          <input
            type="email"
            className="connect-input"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          <button className="connect-button" onClick={handleConnect}>
            Connect
          </button>
        </>
      ) : (
        <p className="connect-success">Connected to: {email}</p>
      )}
    </div>
  );
}

export default Connect;
