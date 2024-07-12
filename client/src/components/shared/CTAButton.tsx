import React from 'react';

// Define the props interface for the CTAButton component
interface CTAButtonProps {
  text: string;      // The text to be displayed on the button
  onClick: () => void; // Function to be called when the button is clicked
}

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
