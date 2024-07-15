// src/components/LinkList.tsx
import React from "react";
import { LinkListProps } from "../../../types"; // Import LinkListProps interface

// Functional component to render a list of links
const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          {" "}
          {/* Unique key for each list item */}
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {" "}
            {/* Link to the URL */}
            {link.text} {/* Text displayed for the link */}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList; // Export the LinkList component
