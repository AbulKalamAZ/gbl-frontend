import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let closeTimeout;

  const openDropdown = () => {
    clearTimeout(closeTimeout); // Cancel any pending close actions
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => setIsDropdownOpen(false), 150); // Small delay before closing
  };

  return (
    <li
      className="link-item cursor-pointer relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <span className="font-medium transition-opacity duration-300 ease-in-out hover:opacity-60">
        {title}
      </span>
      {isDropdownOpen && (
        <ul className="absolute top-full -left-14 bg-white text-gray-800 rounded-md shadow-lg mt-2 w-64 py-2">
          {items.map(({ id, title, href }) => (
            <li
              key={id}
              className="px-3 py-2 border-b border-gray-200 last:border-0"
            >
              <a
                href={href}
                target="_blank"
                className="block text-gray-600 text-xs uppercase hover:text-blue-600 font-medium relative hover:pl-1 transition-all duration-300 ease-in-out"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
