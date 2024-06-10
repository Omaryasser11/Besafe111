import React, { useState } from "react";
import baseUrl from "../../BaseUrl";
import "./SignUP.scss"
import Img from "../../assets/SignUp.png"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Last } from "react-bootstrap/esm/PageItem";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await baseUrl.post("/account/registerPatient", formData);
      alert("Registration successful!");
      try {
        await baseUrl.post("/account/sendEmailVerification", {
          email: formData.email,
        });

        navigate(`/EnterOTP?email=${formData.email}`);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      alert("Network error: " + error?.message);
      console.error("Network error:", error);
    }
  };

  return (
    <div className="col-12 SignPage">
      <div className="col-6 flex" id="Sign-up">
        <img className="SignImage" src={Img}></img>
      </div>

      <form onSubmit={handleSubmit} className="col-6 formSignUp">

        <h2>Sign Up</h2>
        <div className="col-12 Inputs ">
          <div className="INPO">
            <label className="lab"> User Name</label>
            <input
              className='input3 col-12'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="INPO">
            <label className="lab">Email</label>
            <input
              className='input3 col-12'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="INPO">
            <label className="lab">phone Number</label>
            <input
              className='input3 col-12'
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>


          <div className="INPO">
            <label className="lab">password</label>
            <input
              className='input3 col-12'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="INPO">
            <label className="lab">Address</label>
            <input
              className='input3 col-12'
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
