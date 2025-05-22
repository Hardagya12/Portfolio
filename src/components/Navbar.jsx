import React from 'react';
import { motion } from 'framer-motion';
import pfp from '../images/pfpwithbg.png';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar fixed top-0 left-1/2 -translate-x-1/2 w-2/3 h-12 z-50">
      <div className="flex items-center justify-between h-full px-4 py-1">
        {/* PFP and Hardagya at Extreme Left */}
        <div className="flex items-center space-x-2">
          <motion.img
            src={pfp}
            alt="Profile Picture"
            className="w-8 h-8 rounded-full object-cover"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="text-white text-lg font-bold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hardagya
          </motion.div>
        </div>

        {/* Navigation Links at Extreme Right */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="#home"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'home')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#journey"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'journey')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Journey
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'about')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="#projects"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'projects')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#resume"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'resume')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-gray-800 text-white px-3 py-0.5 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
            onClick={(e) => handleScroll(e, 'contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Let's Connect
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;