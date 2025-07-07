import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiPython, SiMysql, 
  SiGit, SiCplusplus, SiReact, SiNodedotjs, SiTailwindcss, SiDocker 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', level: 'Expert' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500', level: 'Expert' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 'Advanced' },
    { name: 'Python', icon: SiPython, color: 'text-blue-400', level: 'Advanced' },
    { name: 'Java', icon: FaJava, color: 'text-red-500', level: 'Intermediate' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', level: 'Intermediate' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600', level: 'Advanced' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-700', level: 'Intermediate' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400', level: 'Advanced' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 'Advanced' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500', level: 'Beginner' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <skill.icon className={`w-12 h-12 mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;