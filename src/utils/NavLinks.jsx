import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Authentication state
  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove authentication status from localStorage
    navigate("/", { replace: true });
  };

  const baseClasses =
    "text-white block md:inline-block hover:text-gray-200 transition duration-300";

  return (
    <>
      <Link to="home" onClick={onLinkClick} className={baseClasses}>
        Home
      </Link>
      <Link to="about" onClick={onLinkClick} className={baseClasses}>
        About
      </Link>
      <Link to="contactUs" onClick={onLinkClick} className={baseClasses}>
        Contact
      </Link>
      <Link to="profile" onClick={onLinkClick} className={baseClasses}>
        Profile
      </Link>

      {isAuthenticated && (
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick();
            handleLogout();
          }}
          className={baseClasses}
        >
          Logout
        </Link>
      )}
    </>
  );
};

export default NavLinks;
