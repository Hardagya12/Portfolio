import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import pixabayclone from '../images/pixabay.png';
import salesforce from '../images/salesforce.png';
import etsy from '../images/etsy.png';
import environment from '../images/environment.png';

const projects = [
  {
    "title": "Culinary and Charms",
    "description": "Culinary and Charms is a unique explorer platform where users can discover delicious meals and cocktail recipes, dive into the magical world of Harry Potter, and even fetch real-time bank details using IFSC codes.",
    "image": "https://media.istockphoto.com/id/2166320051/photo/api-application-programming-interface-concept-a-programmer-types-on-a-laptop-interacting-with.jpg?s=612x612&w=0&k=20&c=f2Q5qzL9JX8f_wKkUT4FcGKVFgitrWYZaJyecKiLsAg=",
    "tags": ["React", "Tailwind", "API"],
    "github": "https://github.com/Hardagya12/REACT-API",
    "live": "https://culinary-and-charms.netlify.app/"
  },
 {
    title: "Bright Board",
    description: "Bright Board is a digital classroom platform that enables institutes to manage attendance, reports, study materials, exams, and feedback seamlessly.",
    image: "https://media.istockphoto.com/id/1224309929/photo/digital-native-students-e-learning-over-computers-at-school.jpg?s=612x612&w=0&k=20&c=RntH1W-n6oGXeyGqbufTi8Wx6cqtOuaw_Nu60lUOIBw=",
    tags: ["React", "Node", "MongoDB","Tailwind","CSS", "API"],
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
    description: "A clone of the Etsy an online marketplace , built with React and CSS",
    image: etsy,
    tags: ["React", "CSS"],
    github: "https://github.com/Hardagya12/Etsy-React",
    live: "https://etsy-react-gamma.vercel.app/"
  },

  {
    title: "Environment Impact Calculator",
    description: "A web application that helps users calculate the environmental impact of their daily activities, providing insights and tips for a more sustainable lifestyle.",
    image: environment,
    tags: ["React","Tailwind"],
    live: "https://environmentimpactcalulatorbyhardagya.netlify.app/",
  }
];

// Sample 
const basicClones = [
  {
    title: "Simple Image Gallery",
    description: "A static image gallery built to practice CSS Grid and Flexbox layouts.",
    image: "https://media.istockphoto.com/id/1153434247/photo/web-design-coding.jpg?s=612x612&w=0&k=20&c=9qIt2Lm9w6S_0j99M7_Gm0H7z2v0kG2Xg_9q4s7q1w0=",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Hardagya12/simple-image-gallery",
    live: "https://simple-image-gallery.netlify.app/"
  },
 
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  const tagVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, opacity: 1 }
  };

  // State for selected tag
  const [selectedTag, setSelectedTag] = useState('All');

  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get unique tags from all projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-20" style={{ fontFamily: 'Source Code Pro' }}>
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
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
        <div className="relative z-10 mb-8 flex flex-wrap justify-center gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
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

        {/* Basic Clones Dropdown */}
        <div className="mt-12">
          <motion.button
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Basic Clones While Learning</span>
            {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate={isDropdownOpen ? "visible" : "hidden"}
            className="mt-4 bg-white/5 rounded-xl backdrop-blur-lg border border-white/10 overflow-hidden"
          >
            {isDropdownOpen && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {basicClones.map((clone, index) => (
                  <motion.div
                    key={clone.title}
                    variants={dropdownItemVariants}
                    className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10"
                  >
                    <motion.div 
                      className="relative h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={clone.image} 
                        alt={clone.title}
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
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {clone.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-400 mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {clone.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {clone.tags.map((tag, tagIndex) => (
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
                        <motion.a
                          href={clone.github}
                          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          href={clone.live}
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
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;