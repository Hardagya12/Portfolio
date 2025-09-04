import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import pixabayclone from '../images/pixabay.png';
import salesforce from '../images/salesforce.png';
import etsy from '../images/etsy.png';
import environment from '../images/environment.png';
import cssBasic from '../images/certificates/cssBasic.png';
import javascriptbasic from '../images/certificates/jsbasic.png';
import reactbasic from '../images/certificates/reactbasic.png';
import nodebasic from '../images/certificates/nodebasic.png';
import javascriptintermediate from '../images/certificates/jsintermediate.png';
import psbasic from '../images/certificates/psbasic.png';
import psintermediate from '../images/certificates/psintermediate.png';
import restapiintermediate from '../images/certificates/restapiintermediate.png';
import { title } from 'framer-motion/client';


const projects = [
  {
    title: "Culinary and Charms",
    description: "Culinary and Charms is a unique explorer platform where users can discover delicious meals and cocktail recipes, dive into the magical world of Harry Potter, and even fetch real-time bank details using IFSC codes.",
    image: "https://media.istockphoto.com/id/2166320051/photo/api-application-programming-interface-concept-a-programmer-types-on-a-laptop-interacting-with.jpg?s=612x612&w=0&k=20&c=f2Q5qzL9JX8f_wKkUT4FcGKVFgitrWYZaJyecKiLsAg=",
    tags: ["React", "Tailwind", "API"],
    github: "https://github.com/Hardagya12/REACT-API",
    live: "https://culinary-and-charms.netlify.app/"
  },
  {
    title: "Bright Board",
    description: "Bright Board is a digital classroom platform that enables institutes to manage attendance, reports, study materials, exams, and feedback seamlessly.",
    image: "https://media.istockphoto.com/id/1224309929/photo/digital-native-students-e-learning-over-computers-at-school.jpg?s=612x612&w=0&k=20&c=RntH1W-n6oGXeyGqbufTi8Wx6cqtOuaw_Nu60lUOIBw=",
    tags: ["React", "Node", "MongoDB", "Tailwind", "CSS", "API"],
    github: "https://github.com/Hardagya12/bright_board",
    live: "https://brightboard-seven.vercel.app/"
  },
  {
    title: "Pixabay clone",
    description: "A clone of the popular image and video sharing platform, built with HTML and CSS",
    image: pixabayclone,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Hardagya12/pixbay-clone",
    live: "https://pixabay-clone-by-hardagya.netlify.app/"
  },
  {
    title: "Salesforce Clone",
    description: "A clone of the Salesforce platform, built with HTML and CSS",
    image: salesforce,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Hardagya12/salesforce-clone",
    live: "https://salesforce-clone-by-hardagya.netlify.app/"
  },
  {
    title: "Etsy Clone",
    description: "A clone of the Etsy an online marketplace, built with React and CSS",
    image: etsy,
    tags: ["React", "CSS"],
    github: "https://github.com/Hardagya12/Etsy-React",
    live: "https://etsy-react-gamma.vercel.app/"
  },
  {
    title: "Environment Impact Calculator",
    description: "A web application that helps users calculate the environmental impact of their daily activities, providing insights and tips for a more sustainable lifestyle.",
    image: environment,
    tags: ["React", "Tailwind"],
    live: "https://environmentimpactcalulatorbyhardagya.netlify.app/"
  }
];



const certificates = [
  {
    title: "CSS Basic",
    issuer: "HackerRank",
    image: cssBasic,
    verification: "https://www.hackerrank.com/certificates/0da502354716",
    tags: ["CSS Basic"]
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    image: javascriptbasic,
    verification: "https://www.hackerrank.com/certificates/c7f6f6ccf1eb",
    tags: ["JavaScript Basic"]
  },
    {
    title: "React Basic",
    issuer: "HackerRank",
    image: reactbasic,
    verification: "https://www.hackerrank.com/certificates/bf3d8655f5ad",
    tags: ["React Basic"]
  },
  {
    title: "Node.js Basic",
    issuer: "HackerRank",
    image: nodebasic,
    verification: "https://www.hackerrank.com/certificates/a76b887c4bb5",
    tags: ["Node.js Basic"]
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    image: javascriptintermediate,
    verification: "https://www.hackerrank.com/certificates/41ca4562298a",
    tags: ["JavaScript Intermediate"]
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    image: psbasic,
    verification: "https://www.hackerrank.com/certificates/470eac169d61",
    tags: ["Problem Solving Basic"]
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    image: psintermediate,
    verification: "https://www.hackerrank.com/certificates/d88f8f5076d2",
    tags: ["Problem Solving Intermediate"]
  },
  {
    title : "REST API (Intermediate)",
    issuer: "HackerRank",
    image: restapiintermediate,
    verification: "https://www.hackerrank.com/certificates/5a4fc7b84f0c",
    tags: ["REST API Intermediate"]
  }
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [selectedTag, setSelectedTag] = useState('All');
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  const handleCertPrev = () => {
    setCurrentCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleCertNext = () => {
    setCurrentCertIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: i * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const certCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (i) => ({
      opacity: i === 1 ? 1 : 0.7,
      scale: i === 1 ? 1.1 : 0.9,
      rotate: 0,
      zIndex: i === 1 ? 10 : 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        delay: i * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.15,
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const tagVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16" style={{ fontFamily: 'Source Code Pro' }}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/30 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, -20, 20],
              x: [null, -20, 20],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8
            }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A showcase of my creative work and technical expertise
          </motion.p>
        </motion.div>

        {/* Keywords Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                selectedTag === tag
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => setSelectedTag(tag)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: allTags.indexOf(tag) * 0.1 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10"
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex}
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                      style={{ originX: 0 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       

        {/* Certificates Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8
            }}
          >
            Certificates
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My professional certifications and achievements
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 justify-center">
            {[
              certificates[(currentCertIndex - 1 + certificates.length) % certificates.length],
              certificates[currentCertIndex],
              certificates[(currentCertIndex + 1) % certificates.length]
            ].map((certificate, index) => (
              <motion.div
                key={`${certificate.title}-${currentCertIndex}`}
                custom={index}
                variants={certCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.4 }}
                className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 flex-1"
                style={{ maxWidth: '320px' }}
              >
                <motion.div 
                  className="relative h-40 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="p-4">
                  <motion.p 
                    className="text-gray-400 mb-3 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    Issued by: {certificate.issuer}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {certificate.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white"
                        style={{ originX: 0 }}
                        transition={{ delay: tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={certificate.verification}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Verify Certificate</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-2">
            <motion.button
              onClick={handleCertPrev}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={handleCertNext}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;