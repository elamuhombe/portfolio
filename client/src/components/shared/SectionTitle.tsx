// src/components/shared/SectionTitle.tsx
import React from "react";
import { SectionTitleProps } from "./../../types";
import CTAButton from "./CTAButton";

// Functional component that accepts props
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`section-title ${className}`}>
      {/* Render the title inside an h2 element */}
      <h2>{title}</h2>
      {/* Introductory text */}
      <h2>
        Ensuring Seamless Integration of Design and Functionality for Cohesive,
        Polished Applications
      </h2>
      <p>
        I ensure that design and functionality are seamlessly integrated,
        resulting in cohesive and polished applications
      </p>
      {/* CTAButton component that redirects to the "#about" section when clicked */}
      <CTAButton
        text="Contact Me"
        onClick={() => {
          // Update the window location to navigate to the #about section
          window.location.href = "#about";
        }}
      />
    </div>
  );
};

// Export the SectionTitle component for use in other files
export default SectionTitle;
