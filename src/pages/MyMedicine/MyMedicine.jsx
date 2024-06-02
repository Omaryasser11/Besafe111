import React, { useState } from 'react';
import './MyMedicine.scss';
import MedicineImg from '../../assets/MedicineForm.jpg';
import Swal from "sweetalert2";

function MyMedicine() {
    const [AddBtn, setAddBtn] = useState(true);
    const [DisplayBtn, setDisplayBtn] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        medicineName: '',
        medicineType: '',
        medicineForce: '',
        medicineUnit: '',
        medicineFrequncey: '',
        medicineDate: ''
    });

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

    const handleAdd = () => {
        setAddBtn(true);
        setDisplayBtn(false);
    };

    const handleDisplay = () => {
        setAddBtn(false);
        setDisplayBtn(true);
    };

    return (
        <div className="col-12 Medicine-Container">
            <div className=" BtnContainer">
                <button onClick={handleAdd} className={AddBtn ? "SelectedOne" : "BTNA"}>Add Medicine</button>
                <button onClick={handleDisplay} className={DisplayBtn ? "SelectedTwo" : "BTND"}>Display Info</button>
            </div>

            {AddBtn && (
                
                    <form className=" col-9  form-control-Medicine" onSubmit={handleSubmit}>
                        {step === 1 && (
                         <>
                                <label>Medicine Name</label>
                                <input placeholder='medicine name' className='in' type="text" name="medicineName" value={formData.medicineName} onChange={handleChange} />
                                </>
                        )}
                        {step === 2 && (
                          <>
                                <label>Medicine type</label>
                                <select name="medicineType" value={formData.medicineType} onChange={handleChange}>
                                    <option value="">Select..</option>
                                    {options.map(option => (
                                        <option value={option} key={option}>{option}</option>
                                    ))}
                                </select>
                            </>
                        )}
                        {step === 3 && (
                          <>
                                <label>Medicine Force</label>
                                <input placeholder='medicine force'  type="text" name="medicineForce" value={formData.medicineForce} onChange={handleChange} />
                                </>
                        )}
                        {step === 4 && (
                        <>
                                <label>Medicine unit</label>
                                <select name="medicineUnit" value={formData.medicineUnit} onChange={handleChange}>
                                    <option value="">Select..</option>
                                    {optionsUnit.map(optionUnit => (
                                        <option value={optionUnit} key={optionUnit}>{optionUnit}</option>
                                    ))}
                                </select>
                            </>
                        )}
                        {step === 5 && (
                            <>
                                <label>Frequency</label>
                                <select name="medicineFrequncey" value={formData.medicineFrequncey} onChange={handleChange}>
                                    <option value="">Select..</option>
                                    {optionsFrequncey.map(optionFrequncey => (
                                        <option value={optionFrequncey} key={optionFrequncey}>{optionFrequncey}</option>
                                    ))}
                                </select>
                                <label>When take Medicine??</label>
                                <input type="time" name="medicineDate" value={formData.medicineDate} onChange={handleChange} />
                                </>
                        )}

                        <div className=" col-12 button-container">
                            {step !== 1 && <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>}
                            {step < 5 && <button type="button" className="next-button" onClick={handleNext}>Next</button>}
                            {step === 5 && <button type="submit" className="submit-button">Submit</button>}
                        </div>
                    </form>
                
            )}

            {DisplayBtn && (
                <div className=" col-9 table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Medicine Name</th>
                                <th>Type</th>
                                <th>Force</th>
                                <th>Unit</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* You can map through your data here to display */}
                            <tr>
                                <td>1</td>
                                <td>Medicine 1</td>
                                <td>Capsule</td>
                                <td>10 mg</td>
                                <td>mg</td>
                                <td>Every day</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Medicine 1</td>
                                <td>Capsule</td>
                                <td>10 mg</td>
                                <td>mg</td>
                                <td>Every day</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MyMedicine;


