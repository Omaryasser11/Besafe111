import React from "react";
import "./pagination.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  if (totalPages === 1) return;
  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage === 1} className="BTN flex"     >
        <FontAwesomeIcon className="btnIcon" icon={faCircleArrowLeft} />
      </button>


      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="BTN flex"      >
        <FontAwesomeIcon className="btnIcon" icon={faCircleArrowRight} />
      </button>



    </div>
  );
};

export default Pagination;
