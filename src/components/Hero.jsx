import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSignature from './AnimatedSignature';

const Hero = () => {
  return (
    <div className="min-h-[100dvh] relative overflow-hidden flex flex-col items-center justify-center pt-32 sm:pt-40">
      {/* Static Background with explicit hex */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#000000', // Solid black
        }}
      />
      
      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: 'rgba(107, 114, 128, 0.3)' }} // gray-500/30
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, -20, 20],
              x: [null, -20, 20],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="relative text-center space-y-6 z-10 w-full px-4">
        <motion.p 
          className="text-gray-400 text-lg sm:text-xl md:text-2xl font-serif italic tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Design. Develop. Deliver.
        </motion.p>
        
        <div className="relative w-full flex justify-center">
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-sans font-bold tracking-tighter text-white break-words leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            HARDAGYA
          </motion.h1>
          
          {/* Light 1: Middle of "CREATIONS" Text */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 opacity-50 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(15px)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          
          {/* Light 2: Top-Left of Hero Section */}
          <motion.div 
            className="absolute top-0 left-0 md:top-10 md:left-10 w-40 h-40 md:w-[250px] md:h-[250px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 80%)',
              filter: 'blur(20px)',
              opacity: 0.4,
            }}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Light 3: Right of Hero Section (Middle-Right) */}
          <motion.div 
            className="absolute bottom-20 right-0 md:top-1/2 md:right-10 md:-translate-y-1/2 w-36 h-36 md:w-[230px] md:h-[230px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 80%)',
              filter: 'blur(18px)',
              opacity: 0.35,
            }}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <motion.div 
          className="flex justify-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <AnimatedSignature />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ height: [8, 16, 8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;