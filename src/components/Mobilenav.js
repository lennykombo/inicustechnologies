import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Import the logo

const Mobilenav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden bg-gray-900 text-white py-4 px-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8" />
        <button className="text-white" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Conditionally render the navigation links based on isOpen state */}
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-gray-300">
            About Us
          </li>
          <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-gray-300">
            Services
          </li>
          <li onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-gray-300">
            Projects
          </li>
          <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-gray-300">
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mobilenav;
