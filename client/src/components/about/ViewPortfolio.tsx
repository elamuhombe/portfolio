import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";


const ViewPortfolio: React.FC= () => {
  const handleButtonClick = () => {
    // Logic to handle button click to navigate to the portfolio section
    window.location.href = '#portfolio';
  };

  return (
    <div className="view-portfolio">
      <button onClick={handleButtonClick}>View Portfolio<HiArrowUpRight /></button>
    </div>
  );
};

export default ViewPortfolio;
