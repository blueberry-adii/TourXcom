import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/1 shadow-md">
      <div className="text-2xl font-semibold">Aditya Prasad</div>
      <ul className="flex items-center gap-6">
        <li className="cursor-pointer transition-all hover:text-blue-500 duration-300">
          About
        </li>
        <li className="cursor-pointer transition-all hover:text-blue-500 duration-300">
          Projects
        </li>
        <li className="cursor-pointer transition-all hover:text-blue-500 duration-300">
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Header;
