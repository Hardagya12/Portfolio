import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSignature from './AnimatedSignature';
import { NeoStar, NeoSparkle, NeoSpiral, NeoCross } from './NeoIcons';

const Hero = () => {
  return (
    <div className="min-h-[100dvh] relative overflow-hidden flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-40 bg-neo-bg">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Geometric Decorations - Optimized for Mobile */}
      <motion.div 
        className="absolute top-12 left-4 sm:top-20 sm:left-10"
        initial={{ rotate: -10, x: -50 }}
        animate={{ rotate: 10, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <NeoStar size={60} className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 right-4 sm:bottom-40 sm:right-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        <NeoSparkle size={80} color="#4ECDC4" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
      </motion.div>
      
      <motion.div 
        className="absolute top-24 right-6 sm:top-40 sm:right-20"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      >
        <NeoSpiral size={50} color="#FF6B6B" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-10 hidden sm:block"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <NeoCross size={40} />
      </motion.div>

      <div className="relative text-center space-y-4 sm:space-y-6 z-10 w-full px-4">
        <motion.p 
          className="text-black text-sm sm:text-2xl md:text-3xl font-bold font-mono tracking-tight bg-neo-accent inline-block px-3 py-1 sm:px-4 border-2 border-black shadow-neo-sm transform -rotate-2"
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8 }}
        >
          Design. Develop. Deliver.
        </motion.p>
        
        <div className="relative w-full flex justify-center">
          <motion.h1 
            className="text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-black break-words leading-none drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            HARDAGYA
          </motion.h1>
        </div>
        
        <motion.div 
          className="flex justify-center pt-4 sm:pt-8 scale-75 sm:scale-100 origin-top"
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
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 sm:border-3 border-black rounded-full flex justify-center p-1 bg-white shadow-neo-sm">
          <motion.div 
            className="w-1.5 h-2 sm:w-2 sm:h-3 bg-black rounded-full"
            animate={{ height: [6, 12, 6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;