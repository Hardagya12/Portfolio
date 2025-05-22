import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BarChart2, } from 'lucide-react';
import {
  Atom,
  Server,
  Database,
  Github,
  Palette,
  PenTool,
  FileCode2,
  Braces,
  TerminalSquare,   // General programming or command line
  Globe,            // Web deployments / hosting
  Layers,           // MERN stack or full-stack
  Settings2,        // API / backend tools
  BookOpen,         // Documentation / learning
  GitBranch,        // Version control / Git
  ShieldCheck,      // Security / Auth
  LayoutDashboard,  // Dashboards
       // Deployment
  Languages,        // Programming languages
} from "lucide-react";

import pfp from '../images/pfpwithoutbg.png';

const AboutMe = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: "University",
      description: "CodingGita X Rai University, Ahmedabad. 1st Sem CGPA: 9.95",
    },
    {
      icon: Code2,
      title: "Tech Stack",
      description: "10+ Technologies",
    },
    {
      icon: BarChart2,
      title: "Progress",
      description: "Completed 3+ Projects",
    },
  ];
const techStats = [
    {
    icon: Layers,
    title: "Full-Stack MERN Apps",
  },
  {
    icon: Atom,
    title: "React.js",
  },
  {
    icon: Server,
    title: "Node.js",
  },
  {
    icon: Database,
    title: "MongoDB",
  },
  {
    icon: Code2,
    title: "JavaScript",
  },
  {
    icon: FileCode2,
    title: "HTML",
  },
  {
    icon: Braces,
    title: "CSS",
  },
  {
    icon: Palette,
    title: "Tailwind CSS & MUI",
  },
  {
    icon: PenTool,
    title: "Figma UI Designs",
  },
  {
    icon: Github,
    title: "Git and GitHub ",
  },

  {
    icon: ShieldCheck,
    title: "JWT Auth & Security",
  },
  {
    icon: Settings2,
    title: "REST APIs",
  },



  {
    icon: Languages,
    title: "C, C++, JavaScript",
  },
  {
    icon: Globe,
    title: " Deployment (Render, Vercel, Netlify , Firebase)",
  },

  {
    icon: BookOpen,
    title: "API Docs (Postman)",
  },
];


  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }
    },
    hover: { 
      scale: 1.05, 
      borderColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
    }
  };

  const iconVariants = {
    rest: { y: 0, rotate: 0, scale: 1 },
    hover: { 
      y: [-5, 5, -5, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1.1, 1],
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1],
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.3 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center py-32">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 z-10 lg:max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.img
                src={pfp}
                alt="Hardagya Rajput"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/20"
              />
              <div className="flex-1">
                <motion.h3
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Who am I?
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I'm Hardagya Rajput, a first-year B.Tech student and a passionate full-stack developer who learns fast, adapts even faster, and loves turning ideas into sleek, functional web apps. I thrive on exploring new technologies and crafting smooth, user-focused digital experiences that make an impact.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 z-10"
              >
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  className="mb-4"
                >
                  <card.icon className="w-12 h-12 text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stats Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 z-10"
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Tech Stats
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 flex flex-col items-center"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    className="mb-4"
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.h4
                    className="text-lg font-semibold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {stat.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-300 text-xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 z-10 mt-8"
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Create Together
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm always excited to collaborate on new projects and bring innovative ideas to life.
            </motion.p>
            <motion.button
              className="bg-gray-800 text-white px-6 py-3 rounded-full"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                backgroundColor: "#374151"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;