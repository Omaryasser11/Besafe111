import React, { useState } from 'react';

export default function MyMedicine() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medicineName: '',
    medicineType: '',
    medicineForce: '',
    medicineUnit: '',
    medicineFrequncey: '',
    medicineDate: ''
  });

  const options = [
    { id: 'capsule' },
    { id: 'Topical' },
    { id: 'syrup' },
    { id: 'tablet' },
  ];

  const optionsUnit = [
    { id: 'mg' },
    { id: 'mL' },
    { id: 'Micro g' },
    { id: '%' },
  ];

  const optionsFrequncey = [
    { id: 'every day' },
    { id: 'every 2 days' },
    { id: 'every week' },
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 6)); // Adjusted for the additional steps
  };

  const handlePrevious = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    // Submit formData to server or perform any necessary actions
    console.log(formData);
  };

  return (
    <div className="col-12 Medicine-Container">
      <div className=" col-12 col-md-8 col-lg-5 MedicineImg">
        <img src={MedicineImg} className="Img" alt="Medicine" />
      </div>
      <div className="formContainer col-9 col-md-7 col-lg-5">
        <form className="form-control-Medicine col-11 col-md-10">
          {step === 1 && (
            <>
              <label htmlFor="medicineName" className="MyMedicine"> Medicine Name</label>
              <input
                type='text'
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                placeholder='Medicine Name'
              />
              <button onClick={handleNext}>Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <label htmlFor="medicineType" className="MyMedicine"> Medicine type</label>
              <select
                name="medicineType"
                value={formData.medicineType}
                onChange={handleChange}
                required
                className='Select-medicine col-10 col-md-9'
              >
                <option defaultValue>Select..</option>
                {options.map(option => (
                  <option key={option.id}>{option.id}</option>
                ))}
              </select>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </>
          )}
          {step === 3 && (
            <>
              <label htmlFor="medicineForce" className="MyMedicineForce"> Medicine Force</label>
              <input
                type='text'
                name="medicineForce"
                value={formData.medicineForce}
                onChange={handleChange}
                className='force-Input'
                placeholder='Medicine Force'
              />
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </>
          )}
          {step === 4 && (
            <>
              <label htmlFor="medicineUnit" className="MyMedicine"> Medicine unit</label>
              <select
                name="medicineUnit"
                value={formData.medicineUnit}
                onChange={handleChange}
                required
                className='Select-medicine-unit col-10 col-md-9'
              >
                <option defaultValue>Select..</option>
                {optionsUnit.map(optionUnit => (
                  <option key={optionUnit.id}>{optionUnit.id}</option>
                ))}
              </select>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </>
          )}
          {step === 5 && (
            <>
              <label htmlFor="medicineFrequncey" className="MyMedicineFrequncey"> Frequency</label>
              <select
                name="medicineFrequncey"
                value={formData.medicineFrequncey}
                onChange={handleChange}
                required
                className='Select-medicine-Frequncey col-10 col-md-9'
              >
                <option defaultValue>Select..</option>
                {optionsFrequncey.map(optionFrequncey => (
                  <option key={optionFrequncey.id}>{optionFrequncey.id}</option>
                ))}
              </select>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </>
          )}
          {step === 6 && (
            <>
              <label htmlFor="medicineDate" className="medicineDate"> When take Medicine??</label>
              <input
                type='Time'
                name="medicineDate"
                value={formData.medicineDate}
                onChange={handleChange}
                className='force-Input'
                placeholder='Medicine Time'
              />
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
