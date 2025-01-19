import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-gray-900">
            Saalim Aqueel
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile, onClick }) => {
  const links = ["Home", "Skills", "Projects", "Experience", "Contact"];

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onClick}
          className={`${
            mobile
              ? "block px-3 py-2 text-base font-medium hover:bg-gray-50"
              : "text-gray-900 hover:text-gray-600"
          } transition-colors`}
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default Navbar;

