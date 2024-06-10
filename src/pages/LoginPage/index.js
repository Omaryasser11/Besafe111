import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import appLogo from "../../assets/LOGO1.png";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import baseUrl from "../../BaseUrl";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhoneNumber: "",
    password: "",
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
      const { data } = await baseUrl.post("/account/login", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="col-12" id="LoginPage">
      <div className="content">
        <div className="col-12 col-md-7" id="imageSection">
          <div className="filter">
            <div className="col-12">
              <img className="LogoLogin" src={appLogo} alt="App Logo" />
            </div>
            <div className="col-12" id="mainContent">
              <h1 className="col-12">Welcome back!</h1>
              <p className="col-12">
                Get access to your Orders, Wishlist and Recommendations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-6" id="formSection">
          <div>
            <h2 className="H2">Login</h2>
          </div>
          <form onSubmit={handleSubmit} className="col-10 login12">
            <div className=" col-10">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                className="input2 col-12"
                type="email"
                name="emailOrPhoneNumber"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className=" col-10">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                className="input2 col-12"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-10">
              <button type="submit" variant="contained" className="col-12 btn">
                Login
              </button>
            </div>
          </form>
          <div className="col-12">
            <span className="Forget col-12">
              <Link className="Linko" to="/ForgetPassword">
                Forget Password
              </Link>
              <span className="margin">Or</span>
              <Link className="Linko" to="/SignUp">
                Not Have An Account?
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
