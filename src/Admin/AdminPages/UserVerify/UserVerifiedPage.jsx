import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./UserVerifiedPage.scss";
import useGetRecommendedEmails from "../../../hooks/admin/user/useGetRecommendedEmails";
import { useEffect } from "react";
import Pagination from "../../CompentsAdmin/Pagination/Pagination";
import useAddRecommendedEmail from "../../../hooks/admin/user/useAddRecommendedEmail";

const UserVerifiedPage = ({ onBack }) => {
  const { addRecommendedEmail } = useAddRecommendedEmail();
  const { getRecommendedEmails, data, totalPages } = useGetRecommendedEmails();
  const [verifiedUsers, setVerifiedUsers] = useState([]);
  const [manualEntry, setManualEntry] = useState({ email: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const token = localStorage.getItem("authToken");
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const users = rows.map((row) => ({
          email: row[1],
        }));

        setVerifiedUsers(users);
      };

      reader.readAsBinaryString(file);
    }
  };
  useEffect(() => {
    getRecommendedEmails(token, currentPage);
  }, []);
  useEffect(() => {
    if (data.length > 0) setVerifiedUsers(data);
  }, [data]);
  useEffect(() => {
    getRecommendedEmails(token, currentPage);
  }, [currentPage]);
  const handleManualEntry = () => {
    if (manualEntry.email) {
      setVerifiedUsers([...verifiedUsers, manualEntry]);
      setManualEntry({ email: "" });
      addRecommendedEmail(manualEntry.email, token);
    }
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="user-verified-page mainPage col-12">
      <h1>User Verification</h1>
      <div className="input-section">
        <div className="file-upload">
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        </div>
        <div className="manual-entry">
          <input
            type="email"
            placeholder="Email"
            value={manualEntry.email}
            onChange={(e) =>
              setManualEntry({ ...manualEntry, email: e.target.value })
            }
          />
          <button onClick={handleManualEntry}>Add User</button>
        </div>
      </div>
      {verifiedUsers.length > 0 && (
        <div className="verified-users col-12">
          <h2>Verified Users</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {verifiedUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Pagination
        onPageChange={handleChangePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <div className="button-group">
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default UserVerifiedPage;
