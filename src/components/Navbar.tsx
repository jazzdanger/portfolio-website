import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return true;
  });
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'roles', label: 'Roles' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-white/80 backdrop-blur-md border-b border-purple-500/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0 font-mono text-lg font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open('https://github.com/jazzdanger', '_blank')}
        >
          <span className="text-purple-400">{'<'}</span>
          <span className="text-white dark:text-black">JSC</span>
          <span className="text-purple-400">{'>'}</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-300 dark:text-gray-700 hover:text-purple-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Resume Button (Desktop) */}
          <motion.a
            href="/resume.pdf"
            download
            className="resume-btn hidden md:flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="w-4 h-4 z-10 transition-all duration-300 group-hover:scale-125" />
            <span className="resume-text ml-2 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">Resume</span>
            {/* Center icon on hover */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <HiDownload className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </span>
          </motion.a>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="w-5 h-5 text-black" /> : <FiMoon className="w-5 h-5" />}
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 dark:bg-white/95 backdrop-blur-sm border-t border-purple-500/20 transition-colors duration-300"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-gray-300 dark:text-gray-700 hover:text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              className="resume-btn flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium mx-3 mt-4 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="w-4 h-4 z-10 transition-all duration-300 group-hover:scale-125" />
              <span className="resume-text ml-2 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">Download Resume</span>
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <HiDownload className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;