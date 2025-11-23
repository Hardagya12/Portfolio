import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import resumeImage from '../assets/Hardagya Rajput.jpg';
import resumePDF from '../assets/Hardagya Rajput Resume.pdf';

const ResumeShare = () => {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      rotate: 2,
      boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
      translate: "2px 2px",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const handleImageError = (e) => {
    console.error('Image load error:', {
      src: e.target.src,
      message: e.message || 'No error message provided',
      type: e.type,
    });
    setImageError(true);
  };

  return (
    <div className="bg-neo-bg relative overflow-hidden flex flex-col items-center justify-center py-12 sm:py-16 md:py-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative w-full max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 sm:mb-8 text-center uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          My Resume
        </motion.h2>

        <motion.div
          className="bg-white p-2 border-3 border-black shadow-neo"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
        >
          {imageError ? (
            <div className="text-red-500 text-center text-base sm:text-lg font-bold p-8">
              <p>Failed to load resume image. Please check the file path or try refreshing.</p>
              <p className="mt-2">You can still download the resume below.</p>
            </div>
          ) : (
            <img
              src={resumeImage}
              alt="Hardagya Rajput's Resume"
              className="w-full max-w-2xl sm:max-w-3xl mx-auto border-2 border-black"
              onError={handleImageError}
            />
          )}
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href={resumePDF}
            download="Hardagya_Rajput_Resume.pdf"
            className="inline-flex items-center bg-neo-primary text-black px-6 py-3 border-2 border-black shadow-neo-sm font-bold uppercase tracking-wide"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeShare;