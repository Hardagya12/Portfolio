import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { NeoCircle, NeoCross } from './NeoIcons';

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
    <div className="bg-neo-bg relative overflow-hidden py-8 sm:py-16 md:py-20" style={{ fontFamily: 'Outfit, sans-serif' }}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 hidden md:block">
        <NeoCircle size={40} color="#FF6B6B" className="shadow-neo" />
      </div>
      <div className="absolute bottom-20 right-10 hidden md:block">
        <NeoCross size={50} color="#000" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
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
            className="text-black text-base sm:text-lg max-w-2xl mx-auto font-bold bg-neo-accent inline-block px-4 py-1 border-2 border-black shadow-neo-sm"
            variants={itemVariants}
          >
            Have a project in mind? Let's discuss how we can work together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div variants={containerVariants} className="bg-white p-8 border-3 border-black shadow-neo">
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: Mail, title: "Email", info: "rajputhardagya@gmail.com", href: "mailto:rajputhardagya@gmail.com" },
                { icon: Phone, title: "Phone", info: "+91 9265172639", href: "tel:+919265172639" },
                { icon: MapPin, title: "Location", info: "Ahmedabad, Gujarat" },
                { icon: Linkedin, title: "LinkedIn", info: "Hardagya Rajput", href: "https://www.linkedin.com/in/hardagya-rajput/" },
                { icon: Twitter, title: "X", info: "@hardagya", href: "https://x.com/hardagya" },
                { icon: Instagram, title: "Instagram", info: "@hardagya", href: "https://www.instagram.com/hardagya/" },
                { icon: Github, title: "GitHub", info: "hardagya", href: "https://github.com/Hardagya12" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-neo-secondary border-2 border-black flex items-center justify-center shadow-neo-sm"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-black font-bold text-sm sm:text-base uppercase"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-neo-primary transition-colors">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </motion.h3>
                    <motion.p 
                      className="text-black text-sm sm:text-base font-medium"
                      whileHover={{ color: "#000000" }}
                    >
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-neo-primary transition-colors">
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
          <motion.div variants={containerVariants} className="bg-neo-primary p-8 border-3 border-black shadow-neo">
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
                  <label htmlFor={field.name} className="block text-black mb-2 text-sm sm:text-base font-bold uppercase">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 bg-white border-2 border-black text-black focus:outline-none focus:shadow-neo-sm font-medium placeholder-gray-500"
                    whileFocus={{ scale: 1.02, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                variants={formItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-black mb-2 text-sm sm:text-base font-bold uppercase">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 bg-white border-2 border-black text-black focus:outline-none focus:shadow-neo-sm font-medium placeholder-gray-500"
                  whileFocus={{ scale: 1.02, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-2 sm:py-3 bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-neo-sm font-bold uppercase tracking-wide"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                  translate: "2px 2px"
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
