import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingIntroCodeBlock = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const codeLines = [
    'const jaskirat = {',
    '  name: "Jaskirat Singh Chadha",',
    '  title: "Full Stack Developer",',
    '  focus: ["Python", "AI/ML", "Web Dev"],',
    '  status: "Final-Year BCA Student"',
    '}'
  ];

  const fullText = codeLines.join('\n');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const formatCode = (text: string) => {
    return text.split('\n').map((line, index) => {
      let formattedLine = line;
      
      // Color const keyword
      formattedLine = formattedLine.replace(/\bconst\b/g, '<span class="text-purple-400">const</span>');
      
      // Color string values
      formattedLine = formattedLine.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>');
      
      // Color object keys
      formattedLine = formattedLine.replace(/(\w+):/g, '<span class="text-yellow-400">$1</span>:');
      
      // Color brackets
      formattedLine = formattedLine.replace(/[{}[\]]/g, '<span class="text-blue-400">$&</span>');

      return (
        <div key={index} className="leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
    >
      {/* VSCode-style header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-300 ml-4 font-mono">portfolio.jsx</span>
        </div>
      </div>

      {/* Code content */}
      <div className="p-6 font-mono text-sm">
        <div className="text-gray-300">
          {formatCode(typedText)}
          {showCursor && !isComplete && (
            <span className="inline-block w-2 h-5 bg-purple-400 ml-1 animate-pulse"></span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIntroCodeBlock;