import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import appLogo from "../../assets/LOGO1.png";
import "./index.scss";
import TextField from "@mui/material/TextField";
import baseUrl from "../../BaseUrl";
import { useAuth } from "../../store/auth";

const LoginForm = () => {
  const { login1 } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const { data } = await baseUrl.post("/account/login", formData);
        const { token, name, role } = data;

        // localStorage.setItem("user", JSON.stringify(data));
        // localStorage.setItem("userName", name);
        localStorage.setItem("token", token);

        login1(token, name, role);

        if (role === "Admin") {
          navigate("/HomeAdmin");
        } else if (role === "Hospital") {
          navigate("/Hospital");
        } else {
          navigate(redirectPath);
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("An error occurred during login");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Check if data is defined and is an object
    if (typeof data !== "object" || data === null) {
      errors.general = "Invalid data";
      return errors;
    }

    // Validate emailOrPhoneNumber
    if (!data.emailOrPhoneNumber || typeof data.emailOrPhoneNumber !== "string" || !data.emailOrPhoneNumber.trim()) {
      errors.emailOrPhoneNumber = "Email or phone number is required";
    }

    // Validate password
    if (!data.password || typeof data.password !== "string" || !data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
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
            <div className="col-10">
              <TextField
                id="emailOrPhoneNumber"
                label="Email or Phone Number"
                variant="outlined"
                className="input2 col-12"
                type="text"
                name="emailOrPhoneNumber"
                placeholder="Email or Phone Number"
                onChange={handleChange}
                value={formData.emailOrPhoneNumber}
                error={!!errors.emailOrPhoneNumber}
                helperText={errors.emailOrPhoneNumber}
              />
            </div>
            <div className="col-10">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                className="input2 col-12"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            {loginError && <div className="col-10 error">{loginError}</div>}
            <div className="col-10">
              <button type="submit" className="col-12 btn">
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
