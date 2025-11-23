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
      boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
      translate: "-2px -2px"
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
    <div className="bg-neo-bg relative overflow-hidden flex flex-col items-center justify-center py-8 sm:py-16 md:py-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Open Source Contributions
          </motion.h2>
          <motion.p
            className="text-black text-base sm:text-lg md:text-lg max-w-2xl mx-auto font-bold bg-neo-accent inline-block px-4 py-1 border-2 border-black shadow-neo-sm"
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
              className="bg-white rounded-none p-6 sm:p-8 border-3 border-black shadow-neo"
            >
              <motion.div
                className="border-3 border-black shadow-neo-sm mb-4 overflow-hidden bg-neo-secondary"
              >
                <motion.img
                  src={contribution.image}
                  alt={contribution.title}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover"
                />
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-black text-black mb-3 uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {contribution.title}
              </motion.h3>
              <motion.p
                className="text-black text-sm sm:text-base mb-4 font-medium"
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
                  className="flex items-center gap-2 bg-black text-white px-3 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-neo-sm text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
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
                  className="flex items-center gap-2 bg-neo-primary text-black px-3 py-2 font-bold border-2 border-black shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
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