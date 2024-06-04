import React, { useState, useEffect } from "react";
import "./RequestsPage.scss"; // Import SCSS file for styling
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import useUpdateAccountStatus from "../../../hooks/admin/user/useUpdateAccountStatus";
import useUsers from "../../../hooks/admin/user/useUsers";

const RequestsPage = () => {
  const { getUsers, data: originalRequests, totalPages } = useUsers();
  const { updateAccountStatus, success } = useUpdateAccountStatus();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const token = localStorage.getItem("authToken");

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getUsers({ status: "Pending" }, token, currentPage);
  }, [token, currentPage]);

  useEffect(() => {
    if (originalRequests) setRequests(originalRequests);
  }, [originalRequests]);

  const handleChangePage = (page) => setCurrentPage(page);
  
  // Filter requests based on search query
  const filteredRequests = requests.filter(request => request.email.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleApproveRequest = (id) => {
    updateAccountStatus({ status: "Active" }, token, id);
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <div className="requests-page mainPage col-12">
      <h2>Requests</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="requests-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.status}</td>
              <td>
                <button className="ApproveBtn" onClick={() => handleApproveRequest(request.id)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default RequestsPage;
