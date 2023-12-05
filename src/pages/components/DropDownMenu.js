// DropdownMenu.jsx
import React, { useState } from 'react';

const DropdownMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleMenu}
      >
        Menu
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5-5h10l-5 5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
