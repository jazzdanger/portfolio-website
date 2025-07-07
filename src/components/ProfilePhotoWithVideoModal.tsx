import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiVideo, FiX } from 'react-icons/fi';

const ProfilePhotoWithVideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    setShowThanks(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowThanks(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Profile Image */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            <img
              src="/WhatsApp Image 2025-07-07 at 17.43.01_6f47b7ce.jpg"
              alt="Jaskirat Singh Chadha"
              className="w-full h-full object-cover rounded-full border-4 border-purple-400 transition-colors duration-300 group-hover:border-pink-400"
            />
          </div>
        </div>
      </motion.div>

      {/* Video Camera Icon */}
      <motion.button
        onClick={openModal}
        className="p-4 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-200 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiVideo className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
              >
                <FiX className="w-6 h-6 text-white" />
              </button>

              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlayPause}
                onEnded={handleVideoEnd}
                autoPlay
                muted
                playsInline
              >
                <source src="/video-resume.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause overlay */}
              {!isPlaying && !showThanks && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <motion.div
                    className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    onClick={togglePlayPause}
                  >
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </motion.div>
                </div>
              )}

              {/* Thanks message */}
              {showThanks && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/70"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Thanks for watching!</h3>
                    <p className="text-gray-300">Get in touch to discuss opportunities</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePhotoWithVideoModal;