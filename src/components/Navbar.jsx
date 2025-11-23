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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-16 z-[100] bg-neo-bg border-3 border-black px-2 sm:px-4 flex items-center justify-between shadow-neo">
      {/* Logo Section */}
      <div className="flex items-center gap-3 pl-2">
        <motion.div 
          className="relative w-10 h-10 overflow-hidden border-2 border-black bg-neo-accent"
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        <span className="text-black font-black text-xl tracking-tighter hidden sm:block font-sans uppercase">Hardagya</span>
      </div>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-6 pr-1 flex-1 justify-end min-w-0">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto px-2 flex-nowrap scrollbar-none">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-xs sm:text-sm text-black hover:bg-neo-primary hover:text-white transition-none border-2 border-transparent hover:border-black px-3 py-1 font-bold uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        
        <motion.a
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
          className="bg-neo-secondary text-black border-2 border-black shadow-neo-sm px-4 py-2 text-xs sm:text-sm font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all whitespace-nowrap shrink-0 ml-2 uppercase"
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