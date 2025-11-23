import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedSignature = () => {
  const controls = useAnimation();
  const text = "PORTFOLIO";

  // Define variants for the animation
  const textVariants = {
    hidden: { 
      clipPath: "inset(0 100% 0 0)",
      opacity: 0
    },
    visible: { 
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      }
    },
    exit: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      // Initial delay before starting animation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      while (isMounted) {
        await controls.start("visible");
        await new Promise(resolve => setTimeout(resolve, 2000)); // Display duration
        await controls.start("exit");
        await new Promise(resolve => setTimeout(resolve, 1000)); // Pause duration
      }
    };

    sequence();

    // Cleanup function to stop animation on unmount
    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.svg
      viewBox="0 0 300 100"
      initial="hidden"
      className="w-[200px] sm:w-[300px] h-auto"
      style={{
        overflow: 'visible',
      }}
    >
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="48"
        fontFamily="'Playfair Display', serif"
        fontStyle="italic"
        fill="#000000"
        variants={textVariants}
        animate={controls}
      >
        {text}
      </motion.text>
    </motion.svg>
  );
};

export default AnimatedSignature;