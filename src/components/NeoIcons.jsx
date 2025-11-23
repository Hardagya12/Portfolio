import React from 'react';
import { motion } from 'framer-motion';

export const NeoStar = ({ className, size = 40, color = "#FFE66D" }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    whileHover={{ scale: 1.2, rotate: 180 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <path
      d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
      fill={color}
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const NeoSparkle = ({ className, size = 40, color = "#FF6B6B" }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    whileHover={{ scale: 1.2, rotate: 90 }}
  >
    <path
      d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
      fill={color}
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const NeoSpiral = ({ className, size = 40, color = "#4ECDC4" }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
  >
    <path
      d="M12 12C12 12 14 8 18 8C22 8 22 14 18 18C14 22 8 22 4 18C0 14 0 6 6 2C12 -2 20 0 22 6"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const NeoCircle = ({ className, size = 30, color = "#A78BFA" }) => (
  <motion.div
    className={`rounded-full border-3 border-black ${className}`}
    style={{ width: size, height: size, backgroundColor: color }}
    whileHover={{ scale: 1.2 }}
  />
);

export const NeoSquare = ({ className, size = 30, color = "#A3E635" }) => (
  <motion.div
    className={`border-3 border-black ${className}`}
    style={{ width: size, height: size, backgroundColor: color }}
    whileHover={{ rotate: 45 }}
  />
);

export const NeoCross = ({ className, size = 40, color = "#000" }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    whileHover={{ rotate: 90 }}
  >
    <path
      d="M12 2V22M2 12H22"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </motion.svg>
);
