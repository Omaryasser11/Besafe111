import React, { useEffect, useState } from "react";
import "./UsersPage.scss";
import baseUrl from "../../../BaseUrl";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  // const handleRemoveUser = (userId) => {
  //   setUsers(users.filter((user) => user.id !== userId));
  //   setSearchResults(searchResults.filter((user) => user.id !== userId));
  // };

  const handleSearch = async (value) => {
    if (value === "") {
      getUsers();
    } else {
      try {
        const { data } = await baseUrl.get(
          `/users?role=Hospital&email=${value}`
        );
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await baseUrl.get("/users?role=Hospital");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-page mainPage">
      <h1>Users</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Email"
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
          {users?.data?.map((user) => (
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
