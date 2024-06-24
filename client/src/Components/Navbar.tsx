// src/components/Navbar.jsx

import React from "react";

const Navbar = () => {
  return (
    <nav
      className="py-4 sticky top-0 z-50"
      style={{ backgroundColor: "#3A387A" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-lg">Logo</div>
          {/* Navigation links */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
