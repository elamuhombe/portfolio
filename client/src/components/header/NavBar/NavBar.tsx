// src/components/NavBar.tsx
// Import React library for creating components
import React from "react";
// Import the Link type definition from the specified path
import { Link } from "../../../types";
// Import the LinkList component for rendering the list of links
import LinkList from "./LinkList";

// Define the NavBar component using React.FC (Functional Component) type
const NavBar: React.FC = () => {
  // Define an array of links with text and URL properties
  const links: Link[] = [
    { text: "About", url: "#about" },
    { text: "Skills", url: "#skills" },
    { text: "Portfolio", url: "#portfolio" },
  ];

  // Render a navigation element containing the LinkList component
  return (
    <nav>
      <LinkList links={links} />
    </nav>
  );
};

// Export the NavBar component as the default export
export default NavBar;
