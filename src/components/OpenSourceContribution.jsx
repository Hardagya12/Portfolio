import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const OpenSourceContribution = () => {
  const contributions = [
    {
      title: "Ai chatbot",
      description: "It's designed for a coffee website to help customers with their coffee-related queries. The chatbot is capable of understanding text inputs, and can provide responses in a human-like conversational style.",
      github: "https://github.com/Hardagya12/kofi_hub/tree/main",
      live: "https://kofi-hub-21.onrender.com/",
      image: "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=612x612&w=0&k=20&c=1Zq2sj3W0tWcpc-n1fVt4dQQOBGhtwcAk1H2eQ5MAbI="
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
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center py-12 sm:py-16 md:py-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-gray-800/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-700/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif italic"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Open Source Contributions
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-lg max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Here are some of my contributions to open source projects, showcasing my work in web development and environmental education.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <motion.img
                src={contribution.image}
                alt={contribution.title}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg mb-4"
              />
              <motion.h3
                className="text-lg sm:text-xl font-bold text-white mb-3 font-serif"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {contribution.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm sm:text-base mb-4 font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {contribution.description}
              </motion.p>
              <div className="flex gap-4">
                <motion.a
                  href={contribution.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm sm:text-base font-medium"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div variants={iconVariants} initial="rest" whileHover="hover">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  GitHub
                </motion.a>
                <motion.a
                  href={contribution.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm sm:text-base font-medium"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div variants={iconVariants} initial="rest" whileHover="hover">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceContribution;