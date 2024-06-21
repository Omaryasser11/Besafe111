import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../MyXray/MyXray.scss";
import baseUrl from "../../BaseUrl";

function MyXray() {
  const [AddBtn, setAddbtn] = useState(true);
  const [DisplayBtn, setDisplayBtn] = useState(false);
  const [data, setData] = useState([]);
  const [patientName, setPatientName] = useState("none");
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [copiedData, setCopiedData] = useState(null);
  const [selectedXray, setSelectedXray] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setPatientName(user.name);
    }
  }, []);

  function Add() {
    setAddbtn(true);
    setDisplayBtn(false);
    setSelectedXray(null);
  }

  async function Display() {
    setAddbtn(false);
    setDisplayBtn(true);
    setSelectedXray(null);

    try {
      const response = await baseUrl.get("/medicalRecords?Type=XRay");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      formData.append("DateTimeStamp", new Date().toISOString());
      formData.append("type", "XRay");

      console.log(file);
      try {
        await baseUrl.post("/medicalRecords", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "All is done",
          showConfirmButton: false,
          timer: 1500,
        });
        // Refresh the display data
        Display();
      } catch (error) {
        console.log(error);
      }
    }

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

  const handleRowClick = (xray) => {
    setSelectedXray(xray);
  };

  const handleRemove = async (id) => {
    try {
      await baseUrl.delete(`/medicalRecords/${id}`);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "X-ray removed",
        showConfirmButton: false,
        timer: 1500,
      });
      // Refresh the display data
      Display();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-12 XRay-Container">
      <div className="BtnContainer">
        <button
          onClick={() => Add()}
          className={AddBtn === true ? "SelectedOne" : "BTNA"}
        >
          Add Xray
        </button>
        <button
          onClick={() => Display()}
          className={DisplayBtn === true ? "SelectedTwo" : "BTND"}
        >
          Display Info
        </button>
      </div>

      {AddBtn && (
        <div className="col-9 form-control-Xray">
          {currentStep === 1 && (
            <>
              <label>Upload your X-ray</label>
              <input
                className="MyXray-File"
                type="file"
                onChange={handleFileChange}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
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

          <button
            className={currentStep === 1 ? "btn-next-Xray" : "btn-Submit-Xray"}
            onClick={currentStep === 1 ? handleNext : handleSubmit}
          >
            {currentStep === 1 ? "Next" : "Submit"}
          </button>
        </div>
      )}

      {DisplayBtn && !selectedXray && (
        <div className="col-9 table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                {/* <th>Patient Name</th> */}
                <th>Date</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item) => (
                <tr key={item.id} onClick={() => handleRowClick(item)}>
                  <td>{item.id}</td>
                  {/* <td>{patientName}</td> */}
                  <td>{item.dateTimeStamp}</td>
                  <td>{item.comment}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedXray && (
        <div className="col-9 xray-details-container">
          <h2>X-ray Details</h2>
          <p>
            <strong>ID:</strong> {selectedXray.id}
          </p>
          <p>
            <strong>Patient Name:</strong> {patientName}
          </p>
          <p>
            <strong>Date:</strong> {selectedXray.dateTimeStamp}
          </p>
          <p>
            <strong>Comment:</strong> {selectedXray.comment}
          </p>
          <img src={selectedXray.mediaUrl} alt="" />
          <button onClick={() => setSelectedXray(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default MyXray;
