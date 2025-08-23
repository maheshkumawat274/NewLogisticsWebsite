import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SUPPLY CHAIN & LOGISTICS", path: "/aboutus" },
    { name: "RESPONSIBILITY & SUSTAINABILITY", path: "/responsibility" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT US", path: "/contactus" },
    { name: "CAREER", path: "/career" },
  ];

  return (
    <header className="w-full px-4 md:px-6 shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <img src="/imgs/WGI1.png" className="w-16 h-16"/>
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
                    ? "text-[#385768] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#385768]"
                    : "text-gray-800 font-semibold  hover:text-[#385768] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#385768] hover:after:w-full after:transition-all after:duration-300"
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
              <img src="/imgs/WGI1.png" className="w-16 h-16"/>
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
                        ? "text-[#385768] border-[#385768]"
                        : "text-gray-800 hover:text-[#385768] hover:border-[#385768]"
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
              © 2025 MyCompany. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
