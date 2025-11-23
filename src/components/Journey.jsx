import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, GraduationCap, Laptop } from 'lucide-react';
import { NeoStar, NeoSpiral } from './NeoIcons';

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
    <div className="bg-neo-bg relative overflow-hidden py-10 md:py-16" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Floating Icons */}
      <div className="absolute top-10 right-10 hidden md:block">
        <NeoStar size={60} color="#FF6B6B" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
      </div>
      <div className="absolute bottom-20 left-10 hidden md:block">
        <NeoSpiral size={50} color="#A3E635" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
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
            className="text-black max-w-2xl mx-auto font-bold bg-neo-accent inline-block px-4 py-1 border-2 border-black shadow-neo-sm"
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
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-black"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-neo-primary border-2 border-black flex items-center justify-center z-10 shadow-neo-sm"
                    variants={iconVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-6 h-6 text-black" />
                  </motion.div>
                </div>

                <motion.div 
                  className={`bg-white rounded-none p-6 border-3 border-black shadow-neo max-w-md mx-auto md:mx-0 ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12 md:ml-auto'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span 
                      className="text-sm text-black font-mono font-bold bg-neo-accent px-2 py-1 border-2 border-black"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.span>
                    <motion.span 
                      className={`px-3 py-1 border-2 border-black text-xs font-bold text-black ${
                        item.type === 'education' ? 'bg-neo-green' :
                        item.type === 'learning' ? 'bg-neo-secondary' : ''
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.type}
                    </motion.span>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-black text-black mb-2 uppercase"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-black mb-2 font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {item.company}
                  </motion.p>
                  <motion.p 
                    className="text-black font-medium text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Journey;