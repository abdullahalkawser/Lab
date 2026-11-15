'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Download, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    // Generate text/blob resume download or open placeholder
    const resumeText = `
ABDULLAH AL KAWSER
Frontend Developer | Software Engineering Student (BUBT) | AI/ML Aspiring
Email: abdullah.kawser.dev@gmail.com
GitHub: https://github.com/abdullah-al-kawser

SKILLS:
- Frontend: JavaScript, TypeScript, React, Next.js, Tailwind CSS, HTML, CSS
- Programming: C, C++, Python
- CS Fundamentals: Data Structures, Algorithms, OOP, Problem Solving
- Tools: Git, GitHub, VS Code, Linux, Firebase

PROJECTS:
1. EduVault CSE Hub - Academic resource platform for CSE students.
2. BUBT Smart Campus Navigation - Campus navigation using Dijkstra's algorithm.
3. Interactive Data Structure Learning Platform - Visualizing data structures.
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Abdullah_Al_Kawser_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-purple-400 transition-colors group-hover:text-cyan-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-wider bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
              KAWSER<span className="text-purple-400">.DEV</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900/40 border border-gray-800/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/20 rounded-lg transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="gradient"
            size="sm"
            onClick={handleDownloadResume}
            leftIcon={<Download className="w-4 h-4 text-purple-400" />}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-gray-800/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-4 h-4 text-purple-500/50" />
                </Link>
              ))}

              <div className="pt-2">
                <Button
                  variant="default"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadResume();
                  }}
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
