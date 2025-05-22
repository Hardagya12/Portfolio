import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSignature from './AnimatedSignature';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-16"> {/* Reduced pt-20 to pt-16 */}
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

      {/* Main Content */}
      <div className="relative text-center space-y-8 z-10">
        <motion.p 
          style={{ color: '#9ca3af', fontSize: '1.125rem' }} // gray-400, 18px
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Design. Develop. Deliver.


        </motion.p>
        
        <div className="relative">
          <motion.h1 
            style={{ fontSize: '150px', fontWeight: 'bold', letterSpacing: '0.25em', color: '#ffffff' }} // white
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            HARDAGYA
          </motion.h1>
          
          {/* Light 1: Middle of "CREATIONS" Text */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-50"
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
            className="absolute top-10 left-10"
            style={{
              width: '250px',
              height: '250px',
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
            className="absolute top-1/2 right-10 -translate-y-1/2"
            style={{
              width: '230px',
              height: '230px',
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
    </div>
  );
};

export default Hero;