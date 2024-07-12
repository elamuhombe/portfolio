// src/components/shared/SectionTitle.tsx
import React from 'react';
import { SectionTitleProps } from './../../types';

// Functional component that accepts props
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`section-title ${className}`}>
      {/* Render the title inside an h2 element */}
      <h2>{title}</h2>
    </div>
  );
};

// Export the SectionTitle component for use in other files
export default SectionTitle;
