import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EnterOTP.scss";
import baseUrl from "../../BaseUrl";
import Swal from 'sweetalert2';
export default function EnterOTP() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(null);

  // Retrieve the email from the location state
  const email = location.state?.email;

  if (!email) {
    navigate("/forgot-password"); // Redirect if email is missing
  }

  const handleChange = (index, value) => {
    if (!isNaN(value) && value !== "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index === 0 && value !== "") input2.current.focus();
      else if (index === 1 && value !== "") input3.current.focus();
      else if (index === 2 && value !== "") input4.current.focus();
    }
  };

  const handleClick = async () => {
    setError(null);
    const formattedOtp = otp.join("");

    try {
      const response = await baseUrl.post("/account/verifyEmail", {
        email: email,
        otp: formattedOtp,
      });

      if (response.status === 200) {
        // Navigate to Change Password page with email and otp
        navigate("/ChangePasswordForm", {
          state: { email: email, otp: formattedOtp },
          replace: true,
        });
      } else {
        const errorData = response.data;
        setError(errorData.message || "Verification failed");
        console.error("Server response:", errorData); // Log server response for debugging
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          Swal.fire({
            title: "Good job!",
            text: "Please Add New Password",
            icon: "success"
          });;
          setTimeout(() => {
            navigate("/ChangePasswordForm", {
              state: { email: email, otp: formattedOtp },
              replace: true,
            });
          }, 3000); // Redirect after 3 seconds
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error during OTP verification! Please try again.",

          });
          setError(
            error.response.data.message ||
            "Error during OTP verification. Please try again."
          );
        }
        console.error("Server error response:", error.response.data); // Log the error response
      } else {
        Swal.fire({
          title: "Network error?",
          text: "Please try again.",
          icon: "question"
        });
        setError("Network error. Please try again.");
        console.error("Network error:", error); // Log the network error
      }
    }
  };

  return (
    <div className="BIg col-12">
      <h1>Enter Verification Code</h1>
      <p>OTP sent to {email}</p>

      <div className="otp-field">
        <input
          type="text"
          maxLength="1"
          ref={input1}
          value={otp[0]}
          onChange={(e) => handleChange(0, e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          ref={input2}
          value={otp[1]}
          onChange={(e) => handleChange(1, e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          ref={input3}
          value={otp[2]}
          onChange={(e) => handleChange(2, e.target.value)}
        />
        <input
          type="text"
          maxLength="1"
          ref={input4}
          value={otp[3]}
          onChange={(e) => handleChange(3, e.target.value)}
        />
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <button className="btn" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
}
