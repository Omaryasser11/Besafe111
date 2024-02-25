import React, { useState, useEffect } from 'react';
import '../MedIcalInfoForm/MyMedicalInfo.scss';
import MedicalInfoImg from '../../assets/MedicalInnfo.jpg';

function MyMedicalInfo() {
  const optionsDiseaseType = [
    { id: 'heartDisease' },
    { id: 'Kidney disease' },
    { id: 'Liver Disease' },
    { id: 'Blood disease' },
    { id: 'particular Virus' },
    { id: 'diabetes' },
    { id: 'pressure disease' },
    { id: 'Another disease' },
  ];

  const optionsBloodType = [
    { id: 'A' },
    { id: 'B' },
    { id: 'O' },
    { id: 'AB' },
    { id: 'A-' },
    { id: 'B-' },
    { id: 'AB-' },
    { id: 'O-' },
  ];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    length: '',
    weight: '',
    diseaseType: 'select...',
    bloodType: 'select...',
  });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (animationClass) {
      const onAnimationEnd = () => {
        setAnimationClass('');
      };
      document.querySelector('.form-control-MedicalInfo').addEventListener('animationend', onAnimationEnd);
      return () => {
        document.querySelector('.form-control-MedicalInfo').removeEventListener('animationend', onAnimationEnd);
      };
    }
  }, [animationClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    let canProceed = true;

    switch (step) {
      case 1:
        if (!formData.length) {
          alert('Please enter length');
          canProceed = false;
        }
        break;
      case 2:
        if (!formData.weight) {
          alert('Please enter weight');
          canProceed = false;
        }
        break;
      case 3:
        if (formData.diseaseType === 'select...') {
          alert('Please select disease type');
          canProceed = false;
        }
        break;
      case 4:
        if (formData.bloodType === 'select...') {
          alert('Please select blood type');
          canProceed = false;
        }
        break;
      default:
        break;
    }

    if (canProceed) {
      setStep((prevStep) => Math.min(prevStep + 1, 5));
      setAnimationClass('slideInRight');
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
    setAnimationClass('slideInLeft');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.length || !formData.weight || formData.diseaseType === 'select...' || formData.bloodType === 'select...') {
      alert('Please fill in all fields');
      return;
    }
    setAnimationClass('slideInLeft');
    // Submit formData to server or perform any necessary actions
    console.log(formData);

    // Optionally, you can reset the form after submission
    setFormData({
      length: '',
      weight: '',
      diseaseType: 'select...',
      bloodType: 'select...',
    });
    setStep(1);
  };

  return (
    <>
      <div className="col-12 MedicalInfo-Container">
        <div className="col-10 col-md-7 col-lg-5 MedicalInfoImg">
          <img src={MedicalInfoImg} className="Img-MedicalInfo" alt="Medical Info" />
        </div>
        <div className="formContainer col-9 col-md-7 col-lg-5">
          <form className={`form-control-MedicalInfo col-11 col-md-10 animated ${animationClass}`} onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <label htmlFor="length" className="MyLength">Length</label>
                <input type="text" name="length" placeholder="Length in cm" value={formData.length} onChange={handleChange} />
              </>
            )}
            {step === 2 && (
              <>
                <label htmlFor="weight" className="MyWeight">Weight</label>
                <input type="text" name="weight" placeholder="Weight in kg" value={formData.weight} onChange={handleChange} />
              </>
            )}
            {step === 3 && (
              <>
                <label htmlFor="diseaseType" className="MyDiseaseType">Disease type</label>
                <select name="diseaseType" value={formData.diseaseType} onChange={handleChange} required>
                  <option disabled>Select..</option>
                  {optionsDiseaseType.map((option) => (
                    <option key={option.id}>{option.id}</option>
                  ))}
                </select>
              </>
            )}
            {step === 4 && (
              <>
                <label htmlFor="bloodType" className="MyBloodType">Blood Type</label>
                <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
                  <option disabled>Select..</option>
                  {optionsBloodType.map((option) => (
                    <option key={option.id}>{option.id}</option>
                  ))}
                </select>
              </>
            )}
            <div className="button-container">
              {step !== 1 && (
                <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>
              )}
              {step < 4 && (
                <button type="button" className="next-button" onClick={handleNext}>Next</button>
              )}
              {step === 4 && (
                <button type="submit" className="submit-button">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyMedicalInfo;
