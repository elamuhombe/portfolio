// src/components/hero/ProfilePhoto.tsx
import React from 'react';

// Define the ProfilePhoto component as a functional component
const ProfilePhoto: React.FC = () => {
  return (
    <div>
      {/* Render an image element */}
      {/* The src attribute points to the path of the profile photo */}
      <img src="/images/elaine-photo.png" alt="elaine-profile-photo" />
    </div>
  );
};

// Export the ProfilePhoto component for use in other parts of the application
export default ProfilePhoto;
