'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white px-4"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[2px] mb-8 shadow-2xl shadow-purple-500/30"
            >
              <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  KD
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-wider mb-2"
            >
              KAWSER<span className="text-purple-400">.DEV</span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 text-sm mb-8 tracking-wide font-mono"
            >
              Initializing Digital Experience...
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-900/80 border border-gray-800 rounded-full h-2 p-[2px] overflow-hidden mb-4 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex justify-between w-full text-xs font-mono text-gray-500">
              <span>LOADING SYSTEM</span>
              <span className="text-purple-400 font-bold">{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
