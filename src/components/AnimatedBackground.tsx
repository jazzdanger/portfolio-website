import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated lines */}
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="800"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 100}
            x2="1200"
            y2={i * 100}
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={200 + i * 150}
            cy={200 + (i % 2) * 300}
            r="3"
            fill="rgba(147, 51, 234, 0.3)"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;