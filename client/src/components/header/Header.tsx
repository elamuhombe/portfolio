// src/components/Header/Header.tsx
import React from 'react';
import NavBar from './NavBar/NavBar';
import DownloadCVButton from './DownloadCVButton';

// Define the Header component
const Header: React.FC = () => {
    return (
        <header>
            {/* Add header title */}
          <h1>Elaine Muhombe resume</h1>
          {/* Render NavBar component */}
          <NavBar />
          {/* Render DownloadCVButton component */}
          <DownloadCVButton cvUrl={''} />
        </header>
    );
};

// Export the Header component for use in other parts of the app
export default Header;
