import React, { useEffect, useState } from "react";
import "./MedicalIRecords.scss";
import ScanQrCode from "../ScanQrCodeHospital/ScanQrCodeHospital";
import Xray from "../../../Sections/Xray/Xray";
import baseUrl from "../../../BaseUrl";

// const xrayData = [
//   {
//     email: "patient1@example.com",
//     patientId: 1,
//     xrayId: "X1",
//     date: "2024-01-01",
//     details: "Details of X1",
//     imageUrl:
//       "https://images.craigslist.org/00W0W_gE3ruDl8hYL_0cU0cU_600x450.jpg",
//   },
//   {
//     email: "patient2@example.com",
//     patientId: 2,
//     xrayId: "X2",
//     date: "2024-02-01",
//     details: "Details of X2",
//     imageUrl:
//       "https://images.craigslist.org/00L0L_3su23ddWbgP_0cU0cU_600x450.jpg",
//   },
//   // Add more data as needed
// ];
// const medicalTestData = [
//   {
//     email: "patient1@example.com",
//     patientId: 1,
//     testId: "T1",
//     date: "2024-01-01",
//     details: "Details of T1",
//     imageUrl: "https://example.com/xray1.jpg",
//   },
//   {
//     email: "patient2@example.com",
//     patientId: 2,
//     testId: "T2",
//     date: "2024-02-01",
//     details: "Details of T2",
//     imageUrl: "https://example.com/xray2.jpg",
//   },
//   // Add more data as needed
// ];
// const medicalPaperData = [
//   {
//     email: "patient1@example.com",
//     patientId: 1,
//     paperId: "P1",
//     date: "2024-01-01",
//     details: "Details of P1",
//     imageUrl: "https://example.com/xray1.jpg",
//   },
//   {
//     email: "patient2@example.com",
//     patientId: 2,
//     paperId: "P2",
//     date: "2024-02-01",
//     details: "Details of P2",
//     imageUrl: "https://example.com/xray2.jpg",
//   },
//   // Add more data as needed
// ];
export default function MedicalRecords() {
  const [idUser, setIdUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [xrayData, setXrayData] = useState([]);
  const [medicalTestData, setMedicalTestData] = useState([]);
  const [medicalPaperData, setMedicalPaperData] = useState([]);
  const [medicineData, setMedicineData] = useState([]);
  const [activeSection, setActiveSection] = useState("ScanQR");
  // cont[ScanQR, setScanQR] = useState(true);

  const handleSectionClick = async (section) => {
    setActiveSection(section);

    if (section === "ScanQR") {
      // setMedicalTest(false);
      // setMedicalPaper(false);
    } else if (section === "Xrays") {
      try {
        const { data } = await baseUrl.get(
          `/medicalRecords/${idUser}?Type=XRay`
        );
        setXrayData(data);
      } catch (error) {
        console.log(error);
      }
    } else if (section === "MedicalTest") {
      try {
        const { data } = await baseUrl.get(
          `/medicalRecords/${idUser}?Type=MedicalTest`
        );
        setMedicalTestData(data);
      } catch (error) {
        console.log(error);
      }
    } else if (section === "MedicalPaper") {
      try {
        const { data } = await baseUrl.get(
          `/medicalRecords/${idUser}?Type=MedicalPaper`
        );
        setMedicalPaperData(data);
      } catch (error) {
        console.log(error);
      }
    } else if (section === "Medicine") {
      try {
        const { data } = await baseUrl.get(`/medicines/${idUser}`);
        setMedicineData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Xray

  const [selectedXray, setSelectedXray] = useState(null);

  const handleXrayClick = (xrayId) => {
    const xray = xrayData?.data?.find((record) => record.id === xrayId);
    setSelectedXray(xray);
  };

  const handleBackClick = () => {
    setSelectedXray(null);
  };

  // Medical Test

  const [selectedTest, setSelectedTest] = useState(null);

  const handleTestClick = (testId) => {
    const test = medicalTestData?.data?.find((record) => record.id === testId);
    setSelectedTest(test);
  };

  const handleBackClick2 = () => {
    setSelectedTest(null);
  };

  // MedicalPaper
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handlePaperClick = (paperId) => {
    const paper = medicalPaperData?.data?.find(
      (record) => record.id === paperId
    );
    setSelectedPaper(paper);
  };

  const handleBackClick4 = () => {
    setSelectedPaper(null);
  };

  /// medicines

  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleMedicineClick = (id) => {
    const medicine = medicineData?.data?.find((record) => record.id === id);
    setSelectedMedicine(medicine);
  };

  const handleBackClick5 = () => {
    setSelectedMedicine(null);
  };

  useEffect(() => {
    setEmailUser(JSON.parse(localStorage?.getItem("user"))?.email);
    setIdUser(JSON.parse(localStorage?.getItem("user"))?.id);
    console.log(selectedXray);
  }, [selectedXray]);

  return (
    <div className="col-12 Section3Hospital">
      <div className="columan">
        <button className="btn" onClick={() => handleSectionClick("ScanQR")}>
          {" "}
          Scan Patient QR
        </button>
        <button className="btn" onClick={() => handleSectionClick("Xrays")}>
          {" "}
          Xrays
        </button>
        <button
          className="btn"
          onClick={() => handleSectionClick("MedicalTest")}
        >
          {" "}
          Medical Test{" "}
        </button>
        <button
          onClick={() => handleSectionClick("MedicalPaper")}
          className="btn"
        >
          Medical Paper
        </button>
        <button onClick={() => handleSectionClick("Medicine")} className="btn">
          Medical Paper
        </button>
      </div>
      <div className="Maino">
        {activeSection === "ScanQR" && (
          <>
            <h2>Scan Qr</h2>
            <ScanQrCode />
          </>
        )}

        {activeSection === "Xrays" && (
          <>
            <h1>Patient X-ray Records</h1>
            {!selectedXray ? (
              <table>
                <thead>
                  <tr>
                    <th>Patient Email</th>
                    <th>Patient ID</th>
                    <th>X-ray ID</th>
                    <th>Date of X-ray</th>
                  </tr>
                </thead>
                <tbody>
                  {xrayData?.data?.map((record) => (
                    <tr key={record.id}>
                      <td>{emailUser}</td>
                      <td>{idUser}</td>
                      <td>
                        <button
                          className="p-2 fs-4"
                          onClick={() => handleXrayClick(record.id)}
                        >
                          {record.id}
                        </button>
                      </td>
                      <td>{record.dateTimeStamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <button onClick={handleBackClick}>Back</button>
                <h2>X-ray Details</h2>
                <p>
                  <strong>Patient Email:</strong> {emailUser}
                </p>
                <p>
                  <strong>Patient ID:</strong> {idUser}
                </p>
                <p>
                  <strong>X-ray ID:</strong> {selectedXray.id}
                </p>
                <p>
                  <strong>Date of X-ray:</strong> {selectedXray.dateTimeStamp}
                </p>
                <p>
                  <strong>Details:</strong> {selectedXray.details}
                </p>
                <img
                  src={selectedXray.mediaUrl}
                  alt={`X-ray ${selectedXray.id}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </>
        )}

        {activeSection === "MedicalTest" && (
          <div className="MedicalTest">
            <h1>Patient Medical Test Records</h1>
            {!selectedTest ? (
              <table>
                <thead>
                  <tr>
                    <th>Patient Email</th>
                    <th>Patient ID</th>
                    <th>Test ID</th>
                    <th>Date of Test</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalTestData?.data?.map((record) => (
                    <tr key={record.id}>
                      <td>{emailUser}</td>
                      <td>{idUser}</td>
                      <td>
                        <button
                          className="p-2 fs-4"
                          onClick={() => handleTestClick(record.id)}
                        >
                          {record.id}
                        </button>
                      </td>
                      <td>{record.dateTimeStamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <button onClick={handleBackClick2}>Back</button>
                <h2>Test Details</h2>
                <p>
                  <strong>Patient Email:</strong> {emailUser}
                </p>
                <p>
                  <strong>Patient ID:</strong> {idUser}
                </p>
                <p>
                  <strong>Test ID:</strong> {selectedTest.id}
                </p>
                <p>
                  <strong>Date of Test:</strong> {selectedTest.dateTimeStamp}
                </p>
                <p>
                  <strong>Details:</strong> {selectedTest.details}
                </p>
                <img
                  src={selectedTest.mediaUrl}
                  alt={`Test ${selectedTest.id}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>
        )}
        {activeSection === "MedicalPaper" && (
          <div className="MedicalPaper">
            <h1>Patient Medical Paper Records</h1>
            {!selectedPaper ? (
              <table>
                <thead>
                  <tr>
                    <th>Patient Email</th>
                    <th>Patient ID</th>
                    <th>Paper ID</th>
                    <th>Date of Paper</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalPaperData?.data?.map((record) => (
                    <tr key={record.id}>
                      <td>{emailUser}</td>
                      <td>{idUser}</td>
                      <td>
                        <button
                          className="p-2 fs-4"
                          onClick={() => handlePaperClick(record.id)}
                        >
                          {record.id}
                        </button>
                      </td>
                      <td>{record.dateTimeStamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <button onClick={handleBackClick4}>Back</button>
                <h2>Paper Details</h2>
                <p>
                  <strong>Patient Email:</strong> {emailUser}
                </p>
                <p>
                  <strong>Patient ID:</strong> {idUser}
                </p>
                <p>
                  <strong>Paper ID:</strong> {selectedPaper.id}
                </p>
                <p>
                  <strong>Date of Paper:</strong> {selectedPaper.dateTimeStamp}
                </p>
                <p>
                  <strong>Details:</strong> {selectedPaper.details}
                </p>
                <img
                  src={selectedPaper.mediaUrl}
                  alt={`Paper ${selectedPaper.id}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>
        )}

        {activeSection === "Medicine" && (
          <div className="Medicine">
            <h1>Medicine Records</h1>
            {!selectedMedicine ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Power</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {medicineData?.data?.map((record) => (
                    <tr key={record.id}>
                      <td>
                        <a
                          href="#"
                          onClick={() => handleMedicineClick(record.id)}
                        >
                          {record.id}
                        </a>
                      </td>
                      <td>{record.name}</td>
                      <td>{record.type}</td>
                      <td>{record.power}</td>
                      <td>{record.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <button onClick={handleBackClick5}>Back</button>
                <h2>Medicine Details</h2>
                <p>
                  <strong>ID:</strong> {selectedMedicine.id}
                </p>
                <p>
                  <strong>Name:</strong> {selectedMedicine.name}
                </p>
                <p>
                  <strong>Type:</strong> {selectedMedicine.type}
                </p>
                <p>
                  <strong>Power:</strong> {selectedMedicine.power}
                </p>
                <p>
                  <strong>Time:</strong> {selectedMedicine.time}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
