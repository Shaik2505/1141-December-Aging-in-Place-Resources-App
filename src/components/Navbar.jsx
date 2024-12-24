import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import NavLinks from "../utils/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full sticky top-0 bg-primary shadow-md hover:primary/50 transition duration-300 dark:bg-darkGrey" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/body/home" className="flex-shrink-0 text-white text-2xl font-bold">
            MyApp
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onLinkClick={() => setIsOpen(false)} />
            <ThemeBtn />
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <ThemeBtn />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-primary/50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className={`${isOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-y-0 right-0 w-64 bg-primary shadow-lg transform transition-transform duration-500 md:hidden z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-primary/50 p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto flex-grow">
            <NavLinks onLinkClick={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
