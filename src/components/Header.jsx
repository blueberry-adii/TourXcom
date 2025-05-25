import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/1 shadow-md">
      <div className="flex text-2xl font-semibold">
        <div>Aditya</div>&nbsp;
        <div className="text-rose-500">Prasad</div>
      </div>
      <ul className="text-sm flex items-center gap-4">
        <li className="transition-all hover:text-blue-400 duration-300">
          <a href="">About</a>
        </li>
        <li className="transition-all hover:text-blue-400 duration-300">
          <a href="">Projects</a>
        </li>
        <li className="transition-all hover:text-blue-400 duration-300">
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  );
};
