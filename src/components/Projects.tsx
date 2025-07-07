import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Web', 'AI/ML', 'IoT'];

  const projects = [
    {
      id: 1,
      title: 'Food Recommender System',
      description: 'AI-powered food recommendation system built with Python and Gradio',
      category: 'AI/ML',
      tech: ['Python', 'Gradio', 'Machine Learning', 'Pandas'],
      github: 'https://github.com/jaskirat/food-recommender',
      demo: null,
      fullDescription: 'A comprehensive food recommendation system that uses machine learning algorithms to suggest meals based on user preferences, dietary restrictions, and nutritional requirements. Built with Python and deployed using Gradio for an interactive web interface.',
    },
    {
      id: 2,
      title: 'Price Comparator',
      description: 'Web scraping application for comparing prices across multiple e-commerce platforms',
      category: 'Web',
      tech: ['Python', 'Streamlit', 'BeautifulSoup', 'Selenium'],
      github: 'https://github.com/jaskirat/price-comparator',
      demo: null,
      fullDescription: 'A comprehensive price comparison tool that scrapes multiple e-commerce websites to find the best deals. Features real-time price tracking, historical price data, and automated alerts for price drops.',
    },
    {
      id: 3,
      title: 'COVID X-ray Classifier',
      description: 'Deep learning model for COVID-19 detection from chest X-rays',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      github: 'https://github.com/jaskirat/covid-xray-classifier',
      demo: null,
      fullDescription: 'A convolutional neural network model trained to detect COVID-19 from chest X-ray images. Achieved 94% accuracy using transfer learning and custom preprocessing techniques.',
    },
    {
      id: 4,
      title: 'Java Seating System',
      description: 'Object-oriented seating management system for venues and events',
      category: 'Web',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/jaskirat/java-seating-system',
      demo: null,
      fullDescription: 'A comprehensive seating management system built with Java Swing for GUI and MySQL for database management. Features include seat booking, cancellation, and real-time availability tracking.',
    },
    {
      id: 5,
      title: 'IoT Smart Lights',
      description: 'Smart lighting system with IoT integration and mobile control',
      category: 'IoT',
      tech: ['Arduino', 'ESP32', 'Python', 'MQTT'],
      github: 'https://github.com/jaskirat/iot-smart-lights',
      demo: null,
      fullDescription: 'An IoT-based smart lighting system that allows remote control via mobile app. Features include automated scheduling, energy monitoring, and voice control integration.',
    },
    {
      id: 6,
      title: 'Recipe Web App',
      description: 'Full-stack web application for recipe sharing and management',
      category: 'Web',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/jaskirat/recipe-web-app',
      demo: 'https://recipe-app-demo.vercel.app',
      fullDescription: 'A full-stack recipe sharing platform where users can create, share, and discover recipes. Features include user authentication, recipe rating system, and advanced search functionality.',
    },
    {
      id: 7,
      title: 'Elemental Clash',
      description: 'Mobile game developed with engaging gameplay mechanics',
      category: 'Web',
      tech: ['Unity', 'C#', 'Mobile Development'],
      github: 'https://github.com/jaskirat/elemental-clash',
      demo: null,
      fullDescription: 'A mobile strategy game featuring elemental battles with unique mechanics. Developed using Unity engine with custom shaders and particle effects.',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/80 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <FiX className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;