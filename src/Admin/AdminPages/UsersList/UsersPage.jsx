import React, { useEffect, useState } from "react";
import "./UsersPage.scss";

const UsersPage = () => {

  const [users, setUsers] = useState([]);



 

  const [searchEmail, setSearchEmail] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const handleRemoveUser = (userId) => {
  //   setUsers(users.filter((user) => user.id !== userId));
  //   setSearchResults(searchResults.filter((user) => user.id !== userId));
  // };



  const handleSearch = (value) => {
    setSearchEmail(value);
    const results = users.filter((user) =>
      user.email.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    if (value === "") setSearchResults([]);
  };

  return (
    <div className="users-page mainPage">
      <h1>Users</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {(searchResults.length > 0 ? searchResults : users).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UsersPage;
