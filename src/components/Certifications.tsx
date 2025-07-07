import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCpu, FiCode, FiWifi, FiServer, FiMonitor } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: 'AI - Intel® Unnati Program',
      issuer: 'Intel',
      icon: FiCpu,
      description: 'Advanced AI and Machine Learning certification covering deep learning, neural networks, and Intel AI tools',
      year: '2024',
      color: 'text-blue-400',
    },
    {
      title: 'Python Programming',
      issuer: 'Infosys',
      icon: FiCode,
      description: 'Comprehensive Python programming certification covering advanced concepts and real-world applications',
      year: '2023',
      color: 'text-green-400',
    },
    {
      title: 'IoT Fundamentals',
      issuer: 'Cisco',
      icon: FiWifi,
      description: 'Internet of Things fundamentals including networking, sensors, and connected device programming',
      year: '2023',
      color: 'text-orange-400',
    },
    {
      title: 'IoT + ML Smart Agriculture',
      issuer: 'Industry Certification',
      icon: FiServer,
      description: 'Specialized certification in IoT and Machine Learning applications for smart agriculture systems',
      year: '2024',
      color: 'text-purple-400',
    },
    {
      title: 'Web Development Internship',
      issuer: 'Coder One',
      icon: FiMonitor,
      description: 'Full-stack web development internship covering modern frameworks and industry best practices',
      year: '2024',
      color: 'text-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-purple-400">Certifications</span> & Training
          </h2>
          <p className="text-gray-400 text-lg">Professional certifications and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors ${cert.color}`}>
                  <cert.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
                  <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{cert.year}</span>
                    <FiAward className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;