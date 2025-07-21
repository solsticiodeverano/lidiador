"use client";

import { useState, useEffect } from "react";
import { FaBiohazard } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Activar/desactivar modo oscuro en el documento
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
  <header className="w-full fixed top-0 left-0 z-50 bg-bg/70 backdrop-blur-md shadow-md border-b border-border">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    {/* Logo */}
    <a
      href="#home"
      className="flex items-center gap-2 text-xl font-bold text-accent"
    >
      <FaBiohazard size={24} />
      <span>LIDIADOR</span>
    </a>

    {/* Nav Links */}
    <nav className="hidden md:flex gap-6 text-text">
      <a href="#home" className="hover:text-accent-hover">
        Home
      </a>
      <a href="#skills" className="hover:text-accent-hover">
        Skills
      </a>
      <a href="#projects" className="hover:text-accent-hover">
        Projects
      </a>
      <a href="#contact" className="hover:text-accent-hover">
        Contact
      </a>
    </nav>

    {/* Light/Dark Toggle */}
    <div className="flex items-center gap-2">
      <BsSun className="text-yellow-500" />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent rounded-full peer dark:bg-border peer-checked:bg-accent relative">
          <div className="absolute left-1 top-1 w-4 h-4 bg-bg rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
        </div>
      </label>
      <BsMoon className="text-gray-800 dark:text-gray-100" />
    </div>
  </div>
</header>

  );
}
