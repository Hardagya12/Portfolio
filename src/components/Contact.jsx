import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const controls = useAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await controls.start({
      scale: [1, 0.9, 1.1, 1],
      transition: { duration: 0.5 }
    });
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Source Code Pro' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8
            }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind? Let's discuss how we can work together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div variants={containerVariants}>
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: Mail, title: "Email", info: "rajputhardagya@gmail.com", href: "mailto:rajputhardagya@gmail.com" },
                { icon: Phone, title: "Phone", info: "+91 9265172639", href: "tel:+919265172639" },
                { icon: MapPin, title: "Location", info: "Ahmedabad, Gujarat" },
                { icon: Linkedin, title: "LinkedIn", info: "Hardagya Rajput", href: "https://www.linkedin.com/in/hardagya-rajput/" },
                { icon: Twitter, title: "X", info: "@hardagya", href: "https://x.com/hardagya" },
                { icon: Instagram, title: "Instagram", info: "@hardagya_1211", href: "https://www.instagram.com/hardagya_1211/" },
                { icon: Github, title: "GitHub", info: "hardagya", href: "https://github.com/Hardagya12" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-white font-semibold text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm sm:text-base"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                          {item.info}
                        </a>
                      ) : (
                        item.info
                      )}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={containerVariants}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={formItemVariants}
            >
              {[
                { name: "name", type: "text", label: "Name" },
                { name: "email", type: "email", label: "Email" }
              ].map((field, index) => (
                <motion.div
                  key={index}
                  variants={formItemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor={field.name} className="block text-white mb-2 text-sm sm:text-base">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                variants={formItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={controls}
              >
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Send Message
                </motion.span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
