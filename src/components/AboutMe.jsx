import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Code2, BarChart2, Layers, Atom, Server, Database, 
  FileCode2, Braces, Palette, PenTool, Github, ShieldCheck, Settings2, 
  Languages, Globe, BookOpen 
} from 'lucide-react';
import pfp from '../images/pfpwithoutbg.png';
import { NeoSpiral, NeoStar, NeoCross } from './NeoIcons';

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
    { icon: Layers, title: "Full-Stack MERN Apps", value: "3+" },
    { icon: Atom, title: "React.js", value: "Advanced" },
    { icon: Server, title: "Node.js", value: "Intermediate" },
    { icon: Database, title: "MongoDB", value: "Intermediate" },
    { icon: Code2, title: "JavaScript", value: "Advanced" },
    { icon: FileCode2, title: "HTML", value: "Advanced" },
    { icon: Braces, title: "CSS", value: "Advanced" },
    { icon: Palette, title: "Tailwind CSS & MUI", value: "Advanced" },
    { icon: PenTool, title: "Figma UI Designs", value: "Intermediate" },
    { icon: Github, title: "Git and GitHub", value: "Advanced" },
    { icon: ShieldCheck, title: "JWT Auth & Security", value: "Intermediate" },
    { icon: Settings2, title: "REST APIs", value: "Advanced" },
    { icon: Languages, title: "C, C++, JavaScript", value: "Advanced" },
    { icon: Globe, title: "Deployment", value: "Render, Vercel, Netlify" },
    { icon: BookOpen, title: "API Docs", value: "Postman" },
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
      boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
      translate: " -2px -2px"
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
      rotate: 3,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-neo-bg relative overflow-hidden flex flex-col items-center justify-center py-12 md:py-20">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 hidden md:block">
        <NeoSpiral size={60} color="#A78BFA" />
      </div>
      <div className="absolute bottom-20 right-10 hidden md:block">
        <NeoStar size={50} color="#FF6B6B" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
      </div>
      <div className="absolute top-1/2 left-4 opacity-50">
        <NeoCross size={30} />
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
            className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
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
            className="bg-white rounded-none p-6 md:p-12 border-3 border-black shadow-neo lg:max-w-4xl mx-auto"
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
                className="w-32 h-32 md:w-48 md:h-48 rounded-none object-cover border-3 border-black shadow-neo-sm shrink-0 bg-neo-accent"
              />
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Who am I?
                </motion.h3>
                <motion.p
                  className="text-black leading-relaxed text-base md:text-lg font-medium"
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
                className="bg-neo-secondary rounded-none p-8 border-3 border-black shadow-neo"
              >
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  className="mb-4 bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-neo-sm"
                >
                  <card.icon className="w-8 h-8 text-black" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-black mb-2 font-sans uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-black font-medium"
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
            className="bg-white rounded-none p-8 border-3 border-black shadow-neo"
          >
            <motion.h3
              className="text-2xl font-black text-black mb-6 text-center uppercase"
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
                  className="bg-neo-bg border-2 border-black p-6 flex flex-col items-center hover:shadow-neo-sm transition-all"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    className="mb-4"
                  >
                    <stat.icon className="w-10 h-10 text-black" />
                  </motion.div>
                  <motion.h4
                    className="text-lg font-bold text-black mb-2 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {stat.title}
                  </motion.h4>
                  <motion.p
                    className="text-black text-xl font-bold font-mono"
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
            className="bg-neo-primary rounded-none p-8 border-3 border-black shadow-neo mt-8 text-center"
          >
            <motion.h3
              className="text-2xl font-black text-black mb-4 uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Create Together
            </motion.h3>
            <motion.p
              className="text-black mb-6 font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm always excited to collaborate on new projects and bring innovative ideas to life.
            </motion.p>
            <motion.button
              className="bg-white text-black border-2 border-black px-6 py-3 font-bold tracking-wide shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              whileHover={{ 
                scale: 1.05, 
              }}
              whileTap={{ scale: 0.95 }}
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