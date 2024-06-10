import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../MyXray/MyXray.scss";
import baseUrl from "../../BaseUrl";

function MyMedicalPaper() {
  const [AddBtn, setAddbtn] = useState(true);
  const [DisplayBtn, setDisplayBtn] = useState(false);
  const [data, setData] = useState([]);
  const [patientName] = useState(
    JSON.parse(localStorage.getItem("user")).name || "none"
  );

  function Add() {
    setAddbtn(true);
    setDisplayBtn(false);
  }

  async function Display() {
    setAddbtn(false);
    setDisplayBtn(true);
    try {
      const { data } = await baseUrl.get("/medicalRecords?Type=MedicalPaper");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [copiedData, setCopiedData] = useState(null);

  const handleNext = () => {
    if (currentStep === 1 && !file) {
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

  const handleSubmit = async () => {
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
      const formData = new FormData();
      formData.append("media", file);
      formData.append("comment", text);
      formData.append("type", "MedicalPaper");
      try {
        await baseUrl.post("/medicalRecords", formData);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "All is done",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    }

    // Perform submission logic here
    setText("");
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
        <button
          onClick={() => Add()}
          className={AddBtn === true ? "SelectedOne" : "BTNA"}
        >
          {" "}
          Add Mediacal Paper
        </button>
        <button
          onClick={() => Display()}
          className={DisplayBtn === true ? "SelectedTwo" : "BTND"}
        >
          Display Info{" "}
        </button>
      </div>

      {AddBtn && (
        <div className=" col-9 form-control-Xray">
          {currentStep === 1 && (
            <>
              <label>upload your Medical Paper</label>
              {/* Step 1: File Input */}
              <input
                className="MyXray-File"
                type="file"
                onChange={handleFileChange}
              />
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
              {data?.data?.map((item) => {
                return (
                  <tr>
                    <td>{item?.id}</td>
                    <td>{patientName}</td>
                    <td>{item?.dateTimeStamp}</td>
                    <td>{item?.comment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyMedicalPaper;
