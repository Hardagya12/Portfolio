import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Book, Code, GraduationCap, Laptop } from 'lucide-react'; // Icons for each milestone

const timelineData = [
  {
    year: "2025",
    title: "Pursuing B.Tech",
    company: "1st Year (II Semester)",
    description: "Currently pursuing B.Tech, diving into coding and design fundamentals.",
    icon: Laptop,
    type: "education",
  },
  {
    year: "2024",
    title: "Started Web Dev and DSA",
    company: "Self-Learning",
    description: "Began exploring web development with HTML, CSS, JavaScript, and Data Structures & Algorithms.",
    icon: Code,
    type: "learning",
  },
  {
    year: "2024",
    title: "Completed 12th Standard",
    company: "Higher Secondary School",
    description: "Explored advanced subjects and prepared for a career in technology.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2022",
    title: "Completed 10th Standard",
    company: "High School",
    description: "Laid the foundation with a strong focus on academics and creativity.",
    icon: Book,
    type: "education",
  },
];

const Journey = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

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

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 italic"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8,
            }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A timeline of my educational milestones and learning path
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white/10"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 
                    ? 'md:ml-auto md:pl-8 pl-12' 
                    : 'md:mr-auto md:pr-8 pl-12'
                }`}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`flex items-center mb-4 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}>
                  <motion.div
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border border-white/20 rounded-full flex items-center justify-center z-10"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <motion.div 
                  className={`bg-white/5 rounded-xl p-6 border border-white/10 max-w-md mx-auto md:mx-0 ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12 md:ml-auto'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span 
                      className="text-sm text-white/60 font-mono"
                      whileHover={{ scale: 1.1, color: "#ffffff" }}
                    >
                      {item.year}
                    </motion.span>
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'education' ? 'bg-green-500/20 text-green-300' :
                        item.type === 'learning' ? 'bg-blue-500/20 text-blue-300' : ''
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.type}
                    </motion.span>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 font-serif"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 mb-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {item.company}
                  </motion.p>
                  <motion.p 
                    className="text-gray-500 font-light text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Journey;