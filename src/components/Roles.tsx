import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBook, FiCamera, FiCalendar } from 'react-icons/fi';

const Roles = () => {
  const roles = [
    {
      title: 'Core Member',
      organization: 'Adikala',
      duration: '2 years',
      icon: FiUsers,
      description: 'Active core member contributing to cultural and technical events, organizing workshops and mentoring juniors',
      responsibilities: ['Event planning and coordination', 'Technical workshop organization', 'Mentoring junior members'],
      color: 'text-purple-400',
    },
    {
      title: 'Peer Educator',
      organization: 'CCHS',
      duration: '1 year',
      icon: FiBook,
      description: 'Peer educator helping fellow students with academic concepts and providing guidance on technical subjects',
      responsibilities: ['Academic tutoring', 'Study group facilitation', 'Technical concept explanation'],
      color: 'text-blue-400',
    },
    {
      title: 'CSA - Media Team',
      organization: 'Christ University',
      duration: '2 years',
      icon: FiCamera,
      description: 'Media team member responsible for content creation, event coverage, and digital marketing initiatives',
      responsibilities: ['Content creation and curation', 'Event photography and videography', 'Social media management'],
      color: 'text-green-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="roles" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Leadership <span className="text-purple-400">Roles</span>
          </h2>
          <p className="text-gray-400 text-lg">Active involvement in academic and extracurricular activities</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/80 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className={`p-4 rounded-lg bg-gray-800 ${role.color}`}>
                  <role.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{role.title}</h3>
                    <div className="flex items-center space-x-2 text-purple-400">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm">{role.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-purple-400 font-medium mb-3">{role.organization}</p>
                  <p className="text-gray-300 mb-4">{role.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {role.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm">{responsibility}</li>
                      ))}
                    </ul>
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

export default Roles;