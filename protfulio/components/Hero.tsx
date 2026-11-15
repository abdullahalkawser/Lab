'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Download, Terminal, Cpu, Code, Layers, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function Hero() {
  const handleDownloadResume = () => {
    const resumeText = `
ABDULLAH AL KAWSER
Frontend Developer | Software Engineering Student (BUBT) | AI/ML Aspiring
Email: abdullah.kawser.dev@gmail.com
GitHub: https://github.com/abdullah-al-kawser
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-purple-900/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow" />
            <span>CSE Student @ BUBT &middot; Creative Developer</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Turning Ideas Into <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent glow-text">
              Digital Experiences.
            </span>
          </h1>

          {/* Name & Subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-200 tracking-wide">
              Abdullah Al Kawser
            </h2>
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            I build modern web experiences, interactive interfaces, and intelligent digital solutions with a passion for technology, clean code, and futuristic design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link href="#projects">
              <Button
                variant="default"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-xl shadow-purple-600/30"
              >
                Explore My Work
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Let&apos;s Connect
              </Button>
            </Link>

            <Button
              variant="gradient"
              size="lg"
              onClick={handleDownloadResume}
              leftIcon={<Download className="w-4 h-4 text-cyan-400" />}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </div>

          {/* Key Stats / Quick Highlights */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800/80 w-full max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BUBT
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">CSE Student</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI/ML
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">Exploring Future</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Visual & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Glowing BackDrop Orb */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 rounded-full blur-[90px] animate-pulse-slow" />

          {/* Central Glass Showcase Card */}
          <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-2xl glow-box animate-float">

            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>kawser.dev/core.ts</span>
              </div>
            </div>

            {/* Code Snippet Display */}
            <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-2 mb-6">
              <p className="text-purple-400">const developer = &#123;</p>
              <p className="pl-4 text-gray-300">name: <span className="text-cyan-300">&quot;Abdullah Al Kawser&quot;</span>,</p>
              <p className="pl-4 text-gray-300">university: <span className="text-cyan-300">&quot;BUBT (CSE)&quot;</span>,</p>
              <p className="pl-4 text-gray-300">stack: [<span className="text-green-300">&quot;Next.js&quot;</span>, <span className="text-green-300">&quot;TypeScript&quot;</span>, <span className="text-green-300">&quot;React&quot;</span>],</p>
              <p className="pl-4 text-gray-300">focus: <span className="text-cyan-300">&quot;AI/ML & Creative UI&quot;</span>,</p>
              <p className="pl-4 text-yellow-400">status: <span className="text-green-400">&quot;Ready to build the future 🚀&quot;</span></p>
              <p className="text-purple-400">&#125;;</p>
            </div>

            {/* Interactive Badge Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/60 border border-gray-800">
                <Cpu className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs font-bold text-white">Algorithm & DSA</div>
                  <div className="text-[10px] text-gray-400">C++ & Python</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/60 border border-gray-800">
                <Globe className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs font-bold text-white">Next.js 15</div>
                  <div className="text-[10px] text-gray-400">Full-Stack Web</div>
                </div>
              </div>
            </div>

          </div>

          {/* Orbiting Floating Badges */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border border-purple-500/30"
          >
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white">Frontend Dev</span>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border border-cyan-500/30"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-white">UI/UX Design</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
