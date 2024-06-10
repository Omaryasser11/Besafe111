import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import "./Table.scss";
import CustomerBill from "../CompentsAdmin/CustomerBill/CustomerBill";
import useGetPayments from "../../hooks/admin/payment/useGetPayments";
import Pagination from "../CompentsAdmin/Pagination/Pagination";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const MyTableComponent = () => {
  const [selectedBillData, setSelectedBillData] = useState(null);
  const { data: originalData, getPayments, success, totalPages } = useGetPayments();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    getPayments(token, currentPage, fromDate, toDate);
  }, [token, currentPage, fromDate, toDate]);

  const handleExitCustomerBill = () => {
    setSelectedBillData(null);
  };

  const handleBillClick = (billData) => {
    setSelectedBillData(billData);
  };

  function formatTimeToHHMM(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Define filteredData using all filter criteria
  const filteredData = originalData.filter((item) =>
    item.user.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!fromDate || new Date(item.dateTimeStamp).toISOString().slice(0, 10) >= fromDate) &&
    (!toDate || new Date(item.dateTimeStamp).toISOString().slice(0, 10) <= toDate) &&
    (!selectedStatus || item.status === selectedStatus)
  );

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  const exportToExcel = () => {
    const filteredData = originalData.filter((item) =>
      item.user.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!fromDate || new Date(item.dateTimeStamp).toISOString().slice(0, 10) >= fromDate) &&
      (!toDate || new Date(item.dateTimeStamp).toISOString().slice(0, 10) <= toDate) &&
      (!selectedStatus || item.status === selectedStatus)
    );

    // Calculate total amount
    const totalAmount = filteredData.reduce((total, item) => total + item.amount, 0);

    // Prepare data for export
    const exportData = filteredData.map(item => ({
      id: item.id,
      username: item.user.name,
      email: item.user.email,
      total: item.amount,
      status: item.status,
      date: new Date(item.dateTimeStamp).toLocaleDateString(),
      time: formatTimeToHHMM(item.dateTimeStamp)
    }));

    // Add total amount row
    exportData.push({
      id: 'Total',
      username: '',
      email: '',
      total: totalAmount,
      status: '',
      date: '',
      time: ''
    });

    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Create workbook and save
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'FilteredData');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'filtered_data.xlsx');
  };

  const totalAmount = filteredData.reduce((total, item) => total + item.amount, 0).toFixed(2);
  return (
    <div className="col-12">


      {selectedBillData ? (
        <div>
          <CustomerBill data={selectedBillData} />
          <button onClick={handleExitCustomerBill}>Exit</button>
        </div>
      ) : (
        <div className="col-12">
          <div className="col-12 flex Hedar">
            <Form.Group controlId="dateRange" className="search2 flexR col-12">
              <div className="col-4 flexR">
                <label>From</label>
                <Form.Control
                  className="col-8"
                  type="date"
                  placeholder="From"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="col-4 flexR">
                <label>To</label>
                <Form.Control
                  className="col-8"
                  type="date"
                  placeholder="To"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>



              <Form.Group controlId="statusFilter" className="col-4 flexR">
                <label>Status</label>
                <Form.Control
                  as="select"
                  className="col-8"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="Successful">Successful</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Failed">Failed</option>
                </Form.Control>
              </Form.Group>

            </Form.Group>
            <div className="col-12 flexR col-12 search3">
              <Form.Group controlId="searchEmail" className="col-5 flexR">
                <label>Email</label>
                <Form.Control
                  className="col-112"
                  type="text"
                  placeholder="Search by email"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
              <div className="col-6 Print">
                <div className="col-6 flexR">
                  <label>Total Amount</label>
                  <p className="col-6">${totalAmount}</p>
                </div>
                <button className="col-6" onClick={exportToExcel}>Export to Excel</button>

              </div>


            </div>
          </div>



          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Bill No</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button className="A" onClick={() => handleBillClick(item)}>
                      #{item.id}
                    </button>
                  </td>
                  <td>{item.user.name}</td>
                  <td>{item.user.email}</td>
                  <td>{item.status}</td>
                  <td>{new Date(item.dateTimeStamp).toLocaleDateString()}</td>
                  <td>{formatTimeToHHMM(item.dateTimeStamp)}</td>
                  <td>{item.amount} EGP</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            onPageChange={handlePageChange}
            currentPage={
              currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default MyTableComponent;
