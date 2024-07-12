// src/types.ts

// Define the props interface for the Link component
export interface Link {
    text: string;
    url: string;
  }
// Define the props interface for the SectionTitle component
export interface SectionTitleProps {
    title: string;       // The main title to display
    className?: string;  // Optional additional class names for styling
  }
  // Define the props interface for the CTAButton component
export interface CTAButtonProps {
    text: string;      // The text to be displayed on the button
    onClick: () => void; // Function to be called when the button is clicked
  } 