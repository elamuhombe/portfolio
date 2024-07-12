// src/components/shared/CTAButton.tsx
import React from 'react';
import { CTAButtonProps } from './../../types';


// Functional component definition
const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    // Button element with onClick event handler
    <button onClick={onClick}>
      {text} {/* Display the button text */}
    </button>
  );
};

// Export the CTAButton component for use in other parts of the application
export default CTAButton;
