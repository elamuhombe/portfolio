import React from 'react';
import { DownloadCVButtonProps } from '../../types';



const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ cvUrl }) => {
  
  // Function to handle the download
  const handleDownload = () => {
    // Creating an anchor element dynamically
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'ELAINEMUHOMBECV.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadCVButton;
