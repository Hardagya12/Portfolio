import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    image: "https://media.istockphoto.com/id/1257023144/photo/certificate-template-background.jpg?s=612x612&w=0&k=20&c=9a0q5X5a5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5",
    verification: "https://coursera.org/verify/react-developer-cert",
    tags: ["React", "JavaScript"],
    date: "June 2023"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    image: "https://media.istockphoto.com/id/1257023144/photo/certificate-template-background.jpg?s=612x612&w=0&k=20&c=9a0q5X5a5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5",
    verification: "https://udemy.com/certificate/full-stack-web",
    tags: ["Node.js", "React", "MongoDB"],
    date: "March 2023"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://media.istockphoto.com/id/1257023144/photo/certificate-template-background.jpg?s=612x612&w=0&k=20&c=9a0q5X5a5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5",
    verification: "https://aws.amazon.com/verification/cloud-practitioner",
    tags: ["AWS", "Cloud Computing"],
    date: "January 2023"
  }
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.2)",
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
    hover: { scale: 1.1 }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12" style={{ fontFamily: 'Source Code Pro' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-10"
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            Certificates
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My professional certifications and achievements
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 mx-auto"
            style={{ maxWidth: '500px' }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-4">
              <motion.h3
                className="text-lg font-bold text-white mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {certificates[currentIndex].title}
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-2 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Issued by: {certificates[currentIndex].issuer}
              </motion.p>
              <motion.p
                className="text-gray-400 mb-3 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Date: {certificates[currentIndex].date}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-3">
                {certificates[currentIndex].tags.map((tag, tagIndex) => (
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
                href={certificates[currentIndex].verification}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                <span>Verify Certificate</span>
              </motion.a>
            </div>
          </motion.div>

          <div className="flex justify-between mt-4 px-2">
            <motion.button
              onClick={handlePrev}
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={handleNext}
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

export default Certificates;