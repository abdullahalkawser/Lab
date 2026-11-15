'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Rocket, Award, BookOpen, UserCheck, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "BUBT CSE Student",
      description: "Pursuing Bachelor of Science in Computer Science and Engineering at Bangladesh University of Business and Technology."
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Frontend Engineering",
      description: "Crafting blazing-fast, responsive web interfaces with Next.js, React, TypeScript, and Tailwind CSS."
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "AI/ML Exploration",
      description: "Passionate about artificial intelligence, machine learning algorithms, and intelligent automated problem-solving."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "Creative Developer",
      description: "Blending rigorous computer science theory with award-winning creative UI/UX design and motion graphics."
    }
  ];

  const stats = [
    { label: "University", value: "BUBT", sub: "CSE Department" },
    { label: "Core Stack", value: "Next.js", sub: "TypeScript & React" },
    { label: "DSA Focus", value: "C++ / Python", sub: "Problem Solving" },
    { label: "Dedication", value: "100%", sub: "Passion & Innovation" },
  ];

  return (
    <section id="about" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>WHO I AM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-6"
          >
            Architecting the Future <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Through Code & Creativity
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            I am <strong className="text-white font-semibold">Abdullah Al Kawser</strong>, a dedicated software engineering undergraduate at BUBT with an unyielding fascination for how software shapes human experiences.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

          {/* Left: Glass Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span>My Journey & Philosophy</span>
            </h3>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                My journey into computer science began with curiosity about how complex systems work under the hood. As a CSE student at the <strong className="text-white">Bangladesh University of Business and Technology (BUBT)</strong>, I build a rigorous foundation in Data Structures, Algorithms, Object-Oriented Programming, and Software Architecture.
              </p>
              <p>
                Beyond standard coursework, I dive deep into modern frontend engineering and creative development. I believe that an exceptional application must not only be algorithmically efficient and robust but also visually breathtaking and delightfully responsive.
              </p>
              <p>
                Currently, I am expanding my expertise into Artificial Intelligence and Machine Learning (AI/ML), bridging the gap between intelligent backend models and immersive, cutting-edge user interfaces.
              </p>
            </div>
          </motion.div>

          {/* Right: 4 Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 border border-gray-800 text-center hover:border-purple-500/30 transition-all">
              <div className="text-xs uppercase font-mono text-purple-400 mb-1">{stat.label}</div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
