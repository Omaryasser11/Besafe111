import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../MyMedicalTestForm/MyMedicalTestForm.scss";
import baseUrl from "../../BaseUrl";

function MyMedicalTestForm() {
  const [AddBtn, setAddBtn] = useState(true);
  const [DisplayBtn, setDisplayBtn] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicalTest: "",
    comment: "",
  });
  const [data, setData] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [patientName, setPatientName] = useState("none");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setPatientName(user.name);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "medicalTest") {
      const file = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleNext = () => {
    if (step === 1 && !formData.medicalTest) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Please upload your medical test",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.medicalTest) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Please upload your medical test",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const modal = new FormData();
    modal.append("media", formData.medicalTest);
    modal.append("comment", formData.comment);
    modal.append("type", "MedicalTest");
    try {
      await baseUrl.post("/medicalRecords", modal);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "All is done",
        showConfirmButton: false,
        timer: 1500,
      });

      // Perform submission logic here
      setFormData({
        medicalTest: "",
        comment: "",
      });
      setStep(1);
      // Refresh the display data
      handleDisplayClick();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddClick = () => {
    setAddBtn(true);
    setDisplayBtn(false);
    setSelectedTest(null);
  };

  const handleDisplayClick = async () => {
    setAddBtn(false);
    setDisplayBtn(true);
    setSelectedTest(null);

    try {
      const { data } = await baseUrl.get("/medicalRecords?type=MedicalTest");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRowClick = (test) => {
    setSelectedTest(test);
  };

  const handleRemove = async (id) => {
    try {
      await baseUrl.delete(`/medicalRecords/${id}`);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Medical test removed",
        showConfirmButton: false,
        timer: 1500,
      });
      // Refresh the display data
      handleDisplayClick();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-12 MyMedicalTestForm-Container">
      <div className="BtnContainer">
        <button
          onClick={handleAddClick}
          className={AddBtn ? "SelectedOne" : "BTNA"}
        >
          Add Medical Test
        </button>
        <button
          onClick={handleDisplayClick}
          className={DisplayBtn ? "SelectedTwo" : "BTND"}
        >
          Display Info
        </button>
      </div>

      {AddBtn && (
        <form className=" col-9 form-control-Test" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <label htmlFor="MyMedicalTest" className="MyMedicalTest">
                Upload your Medical test
              </label>
              <input
                type="file"
                id="myMedicalTest"
                name="medicalTest"
                className="MyMedicalTest-File"
                onChange={handleChange}
              />
            </>
          )}
          {step === 2 && (
            <>
              <label htmlFor="MyComment" className="MyComment">
                My Comment
              </label>
              <textarea
                id="MyComment"
                name="comment"
                rows="6"
                className="myComment-Input"
                placeholder="My Comment...."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </>
          )}

          <div className=" col-12 button-container">
            {step !== 1 && (
              <button
                type="button"
                className="previous-button"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {step < 2 && (
              <button
                type="button"
                className="next-button"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {step === 2 && (
              <button type="submit" className="submit-button">
                Submit
              </button>
            )}
          </div>
        </form>
      )}

      {DisplayBtn && !selectedTest && (
        <div className=" col-9 table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item) => (
                <tr key={item.id} onClick={() => handleRowClick(item)}>
                  <td>{item.id}</td>
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

      {selectedTest && (
        <div className="col-9 xray-details-container">
          <h2>Medical Test Details</h2>
          <p><strong>ID:</strong> {selectedTest.id}</p>
          <p><strong>Patient Name:</strong> {patientName}</p>
          <p><strong>Date:</strong> {selectedTest.dateTimeStamp}</p>
          <p><strong>Comment:</strong> {selectedTest.comment}</p>
          <img src={selectedTest.mediaUrl} alt="Medical Test" />
          <button onClick={() => setSelectedTest(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default MyMedicalTestForm;
