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

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Journey', id: 'journey' },
    { name: 'About Me', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-14 z-[100] bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-2 sm:px-4 flex items-center justify-between shadow-lg shadow-purple-500/10">
      {/* Logo Section */}
      <div className="flex items-center gap-3 pl-2">
        <motion.div 
          className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20"
          whileHover={{ scale: 1.1 }}
        >
          <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        <span className="text-white font-bold text-lg tracking-tight hidden sm:block font-serif italic">Hardagya</span>
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-6 pr-1 flex-1 justify-end min-w-0">
        <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto px-2 flex-nowrap scrollbar-none">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors whitespace-nowrap px-2 py-1 font-medium"
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        
        <motion.a
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
          className="bg-white text-black px-4 py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-200 transition-colors whitespace-nowrap shrink-0 ml-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;