import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

// Directly import the image and PDF
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
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
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
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center py-12 sm:py-16 md:py-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative w-full max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 text-center font-serif italic"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          My Resume
        </motion.h2>

        <motion.div
          className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
        >
          {imageError ? (
            <div className="text-red-400 text-center text-base sm:text-lg font-light">
              <p>Failed to load resume image. Please check the file path or try refreshing.</p>
              <p className="mt-2">You can still download the resume below.</p>
            </div>
          ) : (
            <img
              src={resumeImage}
              alt="Hardagya Rajput's Resume"
              className="w-full max-w-2xl sm:max-w-3xl mx-auto rounded-lg shadow-lg"
              onError={handleImageError}
            />
          )}
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href={resumePDF}
            download="Hardagya_Rajput_Resume.pdf"
            className="inline-flex items-center bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium tracking-wide"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumeShare;