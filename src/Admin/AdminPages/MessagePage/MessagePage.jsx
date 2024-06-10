import React, { useState, useEffect } from "react";
import "./MessagePage.scss";
import useContactMessages from "../../../hooks/admin/contact/useContactMessages";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import Swal from "sweetalert2";
const MessagePage = () => {
  const [contactRequests, setContactRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { getContactMessages, data, totalPages } = useContactMessages();
  const token = localStorage.getItem("authToken");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getContactMessages(token, currentPage);
  }, [token, currentPage]);

  useEffect(() => {
    if (data) {
      setContactRequests(data);
    }
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchEmail(value);
    if (value) {
      const results = contactRequests.filter((user) =>
        user.email.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  const handleDelete = async (id,name) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete ${name}'s message?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make API call to delete message with the given id
          const response = await fetch(`https://www.ehkey.com/api/contact-us/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Failed to delete message');
          }

          // Update contactRequests state after successful deletion
          setContactRequests(contactRequests.filter(request => request.id !== id));

          Swal.fire({
            title: "Deleted!",
            text: `${name}'s Message has been deleted.`,
            icon: "success"
          });

        } catch (error) {
          console.error("Error deleting message:", error);
          // Handle error
          Swal.fire({
            title: "Error",
            text: "Failed to delete message. Please try again later.",
            icon: "error"
          });
        }
      }
    });
  };

  const displayRequests = searchEmail ? searchResults : contactRequests;

  return (
    <div className="message-page mainPage col-12">
      <h1>Contact Requests</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {searchEmail && searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th> {/* Add this header for delete button */}
            </tr>
          </thead>
          <tbody>
            {displayRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phoneNumber}</td>
                <td>{request.message}</td>
                <td>
                  {/* Delete button */}
                  <button className="delete" onClick={() => handleDelete(request.id,request.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!searchEmail && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MessagePage;
