import Swal from "sweetalert2";
import "../multibleForm/MultibleForm.scss"
import { useState } from "react";
import WOW from 'wowjs';


const questions = [
  { question: "What is your name?", required: true },
  { question: "Where are you from?", required: true },
  { question: "What is your favorite color?", required: true },
  // Add more questions as needed
];


const MultipleQuestionForm = () => {
   
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(Array(questions.length).fill(''));
  const [errors, setErrors] = useState(Array(questions.length).fill(''));
  const [AnimationClass, setAnimationClass] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[currentPage] = value;
    setFormData(updatedFormData);
  };
   


  const handleNext = () => {
    const currentFormData = formData[currentPage];
    const currentQuestionObj = questions[currentPage];

   
    if (currentQuestionObj.required && !currentFormData.trim()) {
      const updatedErrors = [...errors];
      updatedErrors[currentPage] = 'This field is required.';
      setErrors(updatedErrors);
    } else {
      const updatedErrors = [...errors];
      updatedErrors[currentPage] = '';
      setErrors(updatedErrors);
      setCurrentPage(currentPage + 1);
      const wow = new WOW.WOW();
      wow.init();
      setAnimationClass('wow slideInLeft');
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    const wow = new WOW.WOW();
    wow.init();
    setAnimationClass('wow slideInRight');
 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    // Additional validation if needed
    const isValid = formData.every((data, index) => (
      !questions[index].required || data.trim()
    ));

    if (isValid) {
      console.log(formData);
      setCurrentPage(0);
      setFormData(Array(questions.length).fill(''));
      setErrors(Array(questions.length).fill(''));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "all is done thanks for you",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "please this filed is required",
            showConfirmButton: false,
            timer: 1500,
          });
    }
  };
  

  return (
    <div className="medical-form ">
      <form onSubmit={handleSubmit}>
        <div  className={`question-container ${AnimationClass} `} >
          <label className="question-label">{questions[currentPage].question}</label>
          <input
            type="text"
            value={formData[currentPage]}
            onChange={handleInputChange}
            className="question-input"
          />
          <div className="error-message">{errors[currentPage]}</div>
        </div>
        <div className="pagination">
          {currentPage > 0 && (
            <button type="button" onClick={handlePrevious} className="previous-button">
              Previous
            </button>
          )}
          {currentPage < questions.length - 1 && (
            <button type="button" onClick={handleNext} className="next-button">
              Next
            </button>
          )}
          {currentPage === questions.length - 1 && (
            <button type="submit" className="submit-button">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultipleQuestionForm;
