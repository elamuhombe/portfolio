// src/components/shared/SectionTitle.tsx
import React from "react";
import { SectionTitleProps } from "./../../types";

// Functional component that accepts props
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`section-title ${className}`}>
      {/* Render the title inside an h2 element */}
      <h2>{title}</h2>
      {/* Introductory text */}
      <h2>
      Ensuring Seamless Integration of Design and Functionality for Cohesive, Polished Applications
      </h2>
      <p>I ensure that design and functionality are seamlessly integrated,
      resulting in cohesive and polished applications</p>
    </div>
  );
};

// Export the SectionTitle component for use in other files
export default SectionTitle;
