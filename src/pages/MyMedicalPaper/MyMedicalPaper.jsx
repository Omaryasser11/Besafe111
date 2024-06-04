import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../MyXray/MyXray.scss';
import XrayImg from "../../assets/Xray.jpg";

function MyMedicalPaper() {
    const [AddBtn, setAddbtn] = useState(true);
    const [DisplayBtn, setDisplayBtn] = useState(false);

    function Add() {
        setAddbtn(true);
        setDisplayBtn(false);
    }

    function Display() {
        setAddbtn(false);
        setDisplayBtn(true);
    }

    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [copiedData, setCopiedData] = useState(null);

    const handleNext = () => {
        if (currentStep === 1 && (!file)) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "This field is required",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }

        // Copy data to be used in the next step
        setCopiedData({ file, text });

        setCurrentStep(currentStep + 1);
    };

    const handleSubmit = () => {
        if (!file) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "The file is required",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        } else {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "All is done",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        // Perform submission logic here
        setText('');
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

    return (
        <div className="col-12 XRay-Container">
            <div className="BtnContainer">
                <button onClick={() => Add()} className={AddBtn === true ? "SelectedOne" : "BTNA"}> Add Mediacal Paper</button>
                <button onClick={() => Display()} className={DisplayBtn === true ? "SelectedTwo" : "BTND"}>Display Info </button>
            </div>

            {AddBtn && (
                <div className=" col-9 form-control-Xray">
                    {currentStep === 1 && (
                        <>
                            <label>upload your Medical Paper</label>
                            {/* Step 1: File Input */}
                            <input className="MyXray-File" type="file" onChange={handleFileChange} />
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            {/* Step 2: Additional Inputs */}
                            {/* Render inputs based on copied data */}
                            <label>My Comment</label>
                            <textarea
                                className="MyComment-Input"
                                value={text}
                                onChange={handleTextChange}
                                rows={7}
                                placeholder="Comment..."
                            />
                        </>
                    )}

                    {/* Next Button */}
                    <button
                        className={currentStep === 1 ? "btn-next-Xray" : "btn-Submit-Xray"}
                        onClick={currentStep === 1 ? handleNext : handleSubmit}
                    >
                        {currentStep === 1 ? "Next" : "Submit"}
                    </button>
                </div>
            )}

            {DisplayBtn && (
                <div className=" col-9 table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>2023-05-01</td>
                                <td>No issues detected</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>2023-05-03</td>
                                <td>Minor fracture</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bob Johnson</td>
                                <td>2023-05-05</td>
                                <td>Clear</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MyMedicalPaper;





