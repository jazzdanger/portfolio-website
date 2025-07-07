import React from 'react';
import { motion } from 'framer-motion';
import TypingIntroCodeBlock from './TypingIntroCodeBlock';
import ProfilePhotoWithVideoModal from './ProfilePhotoWithVideoModal';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Name below navbar */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center pointer-events-none select-none">
        <span className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text drop-shadow-lg" style={{letterSpacing: '0.04em'}}>Jaskirat Singh Chadha</span>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Typing Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <TypingIntroCodeBlock />
          </motion.div>

          {/* Right Side - Profile Photo & Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <ProfilePhotoWithVideoModal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;