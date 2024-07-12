// SectionTitle.tsx
import React from 'react';

// Define the props interface for the SectionTitle component
interface SectionTitleProps {
  title: string;       // The main title to display
  className?: string;  // Optional additional class names for styling
}

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
