import React, { useState } from "react";
import MedicalTestImg from "../../assets/addoh_hero.jpg";
import "../MyMedicalTestForm/MyMedicalTestForm.scss";

function MyMedicalTestForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicalTest: "",
    comment: "",
  });
  const [animationClass, setAnimationClass] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.medicalTest) {
      alert("Please upload your medical test");
      return;
    }
    setStep((prevStep) => Math.min(prevStep + 1, 2));
    setAnimationClass('slideInRight');
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
    setAnimationClass('slideInLeft');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.medicalTest) {
      alert("Please upload your medical test");
      return;
    }

    // Submit formData to server or perform any necessary actions
    console.log(formData);

    // Optionally, you can reset the form after submission
    setFormData({
      medicalTest: "",
      comment: "",
    });
    setStep(1);
    setAnimationClass('slideInLeft');
  };

  return (
    <div className="col-12 MyMedicalTestForm-Container">
      <div className="col-12 col-md-10 col-lg-6 MedicalTestImg">
        <img src={MedicalTestImg} className="Img" alt="Medical Test" />
      </div>

      <div className="formContainer col-9 col-md-7 col-lg-5">
        <form className={`form-control-Test col-10 col-md-9 animated ${animationClass}`} onSubmit={handleSubmit}>
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
                rows="4"
                className="myComment-Input"
                placeholder="My Comment...."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </>
          )}

          <div className="button-container">
            {step !== 1 && <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>}
            {step < 2 && <button type="button" className="next-button" onClick={handleNext}>Next</button>}
            {step === 2 && <button type="submit" className="submit-button">Submit</button>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyMedicalTestForm;
