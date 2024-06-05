import React, { useState } from 'react'
import "./MedicalIRecords.scss"
import ScanQrCode from '../ScanQrCodeHospital/ScanQrCodeHospital';
import Xray from '../../../Sections/Xray/Xray';

const xrayData = [
    { email: "patient1@example.com", patientId: 1, xrayId: "X1", date: "2024-01-01", details: "Details of X1", imageUrl: "https://images.craigslist.org/00W0W_gE3ruDl8hYL_0cU0cU_600x450.jpg" },
    { email: "patient2@example.com", patientId: 2, xrayId: "X2", date: "2024-02-01", details: "Details of X2", imageUrl: "https://images.craigslist.org/00L0L_3su23ddWbgP_0cU0cU_600x450.jpg" },
    // Add more data as needed
];
const medicalTestData = [
    { email: "patient1@example.com", patientId: 1, testId: "T1", date: "2024-01-01", details: "Details of T1", imageUrl: "https://example.com/xray1.jpg" },
    { email: "patient2@example.com", patientId: 2, testId: "T2", date: "2024-02-01", details: "Details of T2", imageUrl: "https://example.com/xray2.jpg" },
    // Add more data as needed
];
const medicalPaperData = [
    { email: "patient1@example.com", patientId: 1, paperId: "P1", date: "2024-01-01", details: "Details of P1", imageUrl: "https://example.com/xray1.jpg" },
    { email: "patient2@example.com", patientId: 2, paperId: "P2", date: "2024-02-01", details: "Details of P2", imageUrl: "https://example.com/xray2.jpg" },
    // Add more data as needed
];
export default function MedicalRecords() {
    // const [Xrays, setXrays] = useState(false);
    // const [MedicalTest, setMedicalTest] = useState(false);
    // const [MedicalPaper, setMedicalPaper] = useState(false);
    const [activeSection, setActiveSection] = useState("ScanQR");
    // cont[ScanQR, setScanQR] = useState(true);


    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    // Xray 

    const [selectedXray, setSelectedXray] = useState(null);

    const handleXrayClick = (xrayId) => {
        const xray = xrayData.find(record => record.xrayId === xrayId);
        setSelectedXray(xray);
    };

    const handleBackClick = () => {
        setSelectedXray(null);
    }


    // Medical Test 


    const [selectedTest, setSelectedTest] = useState(null);

    const handleTestClick = (testId) => {
        const test = medicalTestData.find(record => record.testId === testId);
        setSelectedTest(test);
    };

    const handleBackClick2 = () => {
        setSelectedTest(null);


    };

    // MedicalPaper
    const [selectedPaper, setSelectedPaper] = useState(null);

    const handlePaperClick = (paperId) => {
        const paper = medicalPaperData.find(record => record.paperId === paperId);
        setSelectedPaper(paper);
    };

    const handleBackClick4 = () => {
        setSelectedPaper(null);
    };

    return (
        <div className='col-12 Section3Hospital'>
            <div className="columan">
                <button
                    className='btn'
                    onClick={() => handleSectionClick("ScanQR")}
                >  Scan Patient QR
                </button>
                <button
                    className='btn'
                    onClick={() => handleSectionClick("Xrays")}
                >  Xrays
                </button>
                <button
                    className='btn'
                    onClick={() => handleSectionClick("MedicalTest")}
                >  Medical Test </button>
                <button
                    onClick={() => handleSectionClick("MedicalPaper")}
                    className='btn'
                >Medical Paper</button>
            </div>
            <div className='Maino'>
                {activeSection === "ScanQR" && (
                    <>
                        <h2>Scan Qr</h2>
                        <ScanQrCode />
                    </>
                )

                }


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
                                    {xrayData.map((record) => (
                                        <tr key={record.xrayId}>
                                            <td>{record.email}</td>
                                            <td>{record.patientId}</td>
                                            <td>
                                                <a href="#" onClick={() => handleXrayClick(record.xrayId)}>
                                                    {record.xrayId}
                                                </a>
                                            </td>
                                            <td>{record.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <button onClick={handleBackClick}>Back</button>
                                <h2>X-ray Details</h2>
                                <p><strong>Patient Email:</strong> {selectedXray.email}</p>
                                <p><strong>Patient ID:</strong> {selectedXray.patientId}</p>
                                <p><strong>X-ray ID:</strong> {selectedXray.xrayId}</p>
                                <p><strong>Date of X-ray:</strong> {selectedXray.date}</p>
                                <p><strong>Details:</strong> {selectedXray.details}</p>
                                <img src={selectedXray.imageUrl} alt={`X-ray ${selectedXray.xrayId}`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}

                    </>
                )
                }

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
                                    {medicalTestData.map((record) => (
                                        <tr key={record.testId}>
                                            <td>{record.email}</td>
                                            <td>{record.patientId}</td>
                                            <td>
                                                <a href="#" onClick={() => handleTestClick(record.testId)}>
                                                    {record.testId}
                                                </a>
                                            </td>
                                            <td>{record.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <button onClick={handleBackClick2}>Back</button>
                                <h2>Test Details</h2>
                                <p><strong>Patient Email:</strong> {selectedTest.email}</p>
                                <p><strong>Patient ID:</strong> {selectedTest.patientId}</p>
                                <p><strong>Test ID:</strong> {selectedTest.testId}</p>
                                <p><strong>Date of Test:</strong> {selectedTest.date}</p>
                                <p><strong>Details:</strong> {selectedTest.details}</p>
                                <img src={selectedTest.imageUrl} alt={`Test ${selectedTest.testId}`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}
                    </div>
                )

                }
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
                                    {medicalPaperData.map((record) => (
                                        <tr key={record.paperId}>
                                            <td>{record.email}</td>
                                            <td>{record.patientId}</td>
                                            <td>
                                                <a href="#" onClick={() => handlePaperClick(record.paperId)}>
                                                    {record.paperId}
                                                </a>
                                            </td>
                                            <td>{record.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <button onClick={handleBackClick4}>Back</button>
                                <h2>Paper Details</h2>
                                <p><strong>Patient Email:</strong> {selectedPaper.email}</p>
                                <p><strong>Patient ID:</strong> {selectedPaper.patientId}</p>
                                <p><strong>Paper ID:</strong> {selectedPaper.paperId}</p>
                                <p><strong>Date of Paper:</strong> {selectedPaper.date}</p>
                                <p><strong>Details:</strong> {selectedPaper.details}</p>
                                <img src={selectedPaper.imageUrl} alt={`Paper ${selectedPaper.paperId}`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}
                    </div>
                )

                }
            </div>
        </div>
    )
}
