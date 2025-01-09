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

  const handleLinkClick = () => {
    onLinkClick();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  const baseClasses =
    "text-white text-xs block md:inline-block hover:text-gray-200 transition duration-300";
  return (
    <>
      <Link to="home" onClick={handleLinkClick} className={baseClasses}>
        Home
      </Link>
      <Link to="resources" onClick={handleLinkClick} className={baseClasses}>
        Resources
      </Link>
      <Link to="health-monitoring" onClick={handleLinkClick} className={baseClasses}>
        Health Monitoring
      </Link>
      <Link to="appointments" onClick={handleLinkClick} className={baseClasses}>
        Appointments
      </Link>
      <Link to="profile" onClick={handleLinkClick} className={baseClasses}>
        Profile
      </Link>
      {isAuthenticated && (
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick();
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
