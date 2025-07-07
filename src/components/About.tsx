import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            About <span className="text-purple-400">Me</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            A motivated developer passionate about solving real-world problems through clean, 
            scalable code. Skilled in full-stack development, machine learning, and IoT systems. 
            Always learning, always building. Currently pursuing my final year of BCA at Christ 
            University, Delhi NCR, where I combine academic excellence with practical experience 
            to create innovative solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;