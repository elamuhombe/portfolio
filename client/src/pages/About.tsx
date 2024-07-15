import React from "react";
import { AboutStoryLine, ProfilePhoto } from "../components";


// Define the About component
const About: React.FC = () => {
  return (
    <div>
      <AboutStoryLine />
      <ProfilePhoto />
    </div>
  );
};

// Export the About component for use in other parts of the app
export default About;
