import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT US", path: "/contactus" },
  ];

  return (
    <header className="w-full px-4 md:px-6 shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="flex justify-between items-center px-6">
        {/* Logo */}
        <div className="w-24 h-24">
          <Link to='/'>
           <img src="/imgs/logoMain.png" className="w-full h-full"/>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 text-sm transition duration-200 ${
                  isActive
                    ? "text-[#C5A15C] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#C5A15C]"
                    : "text-gray-800 font-semibold  hover:text-[#C5A15C] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C5A15C] hover:after:w-full after:transition-all after:duration-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-2xl text-gray-800"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Fullscreen Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white flex flex-col z-50"
          >
            {/* Top Bar with Logo + Close */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
             <Link to='/'>
               <img src="/imgs/logoMain.png" className="w-18 h-18"/>
             </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-800"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Navigation Items with border + arrow */}
            <nav className="flex flex-col items-start px-8 mt-6 w-full">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between w-full border-b border-gray-300 py-3 text-md font-medium ${
                      isActive
                        ? "text-[#C5A15C] border-[#C5A15C]"
                        : "text-gray-800 hover:text-[#C5A15C] hover:border-[#C5A15C]"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <span className="text-gray-500">→</span>
                </NavLink>
              ))}
            </nav>

            {/* Light Footer Border */}
            <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500 mt-auto">
              ©Well Global INC 2025. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
