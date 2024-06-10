import React, { useState } from "react";
import "./CreateAccount.scss";
import baseUrl from "../../../BaseUrl";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    password: "",
    role: "Client",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message
    setFieldErrors([]); // Clear previous field errors
    setSuccessMessage(""); // Clear previous success message
    try {
      const modal = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: formData.phone,
        address: formData.country,
        password: formData.password,
        role: formData.role,
      };
      await baseUrl.post("/users", modal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-account-form mainPage">
      <h2>Add User</h2>
      <form
        onSubmit={handleSubmit}
        className="col-10 flex flex-column align-items-center"
      >
        {errorMessage && (
          <div className="error-message text-danger col-12">{errorMessage}</div>
        )}
        {fieldErrors.length > 0 && (
          <ul className="error-list col-10">
            {fieldErrors.map((error, index) => (
              <li key={index} className="error-message text-danger ">
                {error}
              </li>
            ))}
          </ul>
        )}
        {successMessage && (
          <div className="success-message text-success col-12">
            {successMessage}
          </div>
        )}

        <div className="col-12">
          <div className="col-10">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-10">
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="Client">User</option>
              <option value="Admin">Admin</option>
              <option value="Hospital">Hospital</option>
            </select>
          </div>
        </div>
        <button className="col-7" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
