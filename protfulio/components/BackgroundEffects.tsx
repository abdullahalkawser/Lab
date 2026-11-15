'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Radial Gradient Glow in Center */}
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/6 w-[450px] h-[450px] rounded-full bg-cyan-600/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 60, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px]"
      />

      {/* Mouse Following Glow (Desktop) */}
      <motion.div
        className="hidden md:block absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 45,
          stiffness: 120,
          mass: 0.5,
        }}
      />
    </div>
  );
}
