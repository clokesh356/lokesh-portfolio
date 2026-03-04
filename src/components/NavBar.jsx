import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">
          Lokesh Reddy C
        </h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;