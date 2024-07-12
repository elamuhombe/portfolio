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