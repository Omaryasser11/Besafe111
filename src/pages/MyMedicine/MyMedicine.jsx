import React, { useState } from 'react';
import MedicineImg from '../../assets/MedicineForm.jpg';
import './MyMedicine.scss';

const MyMedicine = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicineName: '',
    medicineType: '',
    medicineForce: '',
    medicineUnit: '',
    medicineFrequncey: '',
    medicineDate: ''
  });

  const options = ['capsule', 'Topical', 'syrup', 'tablet'];
  const optionsUnit = ['mg', 'mL', 'Micro g', '%'];
  const optionsFrequncey = ['every day', 'every 2 days', 'every week'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    switch (step) {
      case 1:
        if (!formData.medicineName) {
          alert('Please enter medicine name');
          return;
        }
        break;
      case 2:
        if (!formData.medicineType) {
          alert('Please select medicine type');
          return;
        }
        break;
      case 3:
        if (!formData.medicineForce) {
          alert('Please enter medicine force');
          return;
        }
        break;
      case 4:
        if (!formData.medicineUnit) {
          alert('Please select medicine unit');
          return;
        }
        break;
      case 5:
        if (!formData.medicineFrequncey) {
          alert('Please select medicine frequency');
          return;
        }
        break;
      default:
        break;
    }
    setStep((prevStep) => Math.min(prevStep + 1, 6));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    if (!formData.medicineName || !formData.medicineType || !formData.medicineForce || !formData.medicineUnit || !formData.medicineFrequncey || !formData.medicineDate) {
      alert('Please fill in all fields');
      return;
    }
    console.log(formData); // Submit formData to server or perform any necessary actions
  };

  const getFieldClassName = (fieldName) => {
    return `field animated ${step === 1 ? 'slideInRight' : 'slideInLeft'} ${fieldName}`;
  };

  return (
    <>
      <div className="col-12 MyMedicalTestForm-Container">
        <div className="col-12 col-md-8 col-lg-5 MedicalTestImg">
          <img src={MedicineImg} className="Img" alt="Medicine Form" />
        </div>
        <div className="formContainer col-9 col-md-7 col-lg-5">
          <form className="form-control-Medicine col-11 col-md-10" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className={getFieldClassName('medicineName')}>
                <label className="MyMedicine"> Medicine Name</label>
                <input type="text" name="medicineName" value={formData.medicineName} onChange={handleChange} />
              </div>
            )}
            {step === 2 && (
              <div className={getFieldClassName('medicineType')}>
                <label className="MyMedicine"> Medicine type</label>
                <select name="medicineType" value={formData.medicineType} onChange={handleChange}>
                  <option value="">Select..</option>
                  {options.map(option => (
                    <option value={option} key={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}
            {step === 3 && (
              <div className={getFieldClassName('medicineForce')}>
                <label className="MyMedicine"> Medicine Force</label>
                <input type="text" name="medicineForce" value={formData.medicineForce} onChange={handleChange} />
              </div>
            )}
            {step === 4 && (
              <div className={getFieldClassName('medicineUnit')}>
                <label className="MyMedicine"> Medicine unit</label>
                <select name="medicineUnit" value={formData.medicineUnit} onChange={handleChange}>
                  <option value="">Select..</option>
                  {optionsUnit.map(optionUnit => (
                    <option value={optionUnit} key={optionUnit}>{optionUnit}</option>
                  ))}
                </select>
              </div>
            )}
            {step === 5 && (
              <div className={getFieldClassName('medicineFrequncey')}>
                <label className="MyMedicine"> Frequency</label>
                <select name="medicineFrequncey" value={formData.medicineFrequncey} onChange={handleChange}>
                  <option value="">Select..</option>
                  {optionsFrequncey.map(optionFrequncey => (
                    <option value={optionFrequncey} key={optionFrequncey}>{optionFrequncey}</option>
                  ))}
                </select>
                <label className="medicineDate"> When take Medicine??</label>
                <input type="time" name="medicineDate" value={formData.medicineDate} onChange={handleChange} />
              </div>
            )}

            <div className="button-container">
              {step !== 1 && <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>}
              {step < 5 && <button type="button" className="next-button" onClick={handleNext}>Next</button>}
              {step === 5 && <button type="submit" className="submit-button">Submit</button>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyMedicine;

