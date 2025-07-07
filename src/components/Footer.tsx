import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jazzdanger',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaskirat-singh-chadha-488662308/',
      icon: FiLinkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jaskirat_1920?igsh=MWZmcHZsNDZ4YjVyMQ%3D%3D&utm_source=qr',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:jaskirat@example.com',
      icon: FiMail,
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-500/20 transition-colors duration-200 group"
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Built with
              <FiHeart className="w-4 h-4 text-red-400 mx-1" />
              using React & Tailwind by
              <span className="text-purple-400 ml-1 font-medium">Jaskirat Singh Chadha</span>
            </p>
          </motion.div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jaskirat Singh Chadha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;