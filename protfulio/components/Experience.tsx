'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Code, Sparkles, Terminal } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      year: "2025 - Present",
      title: "Aspiring AI/ML Engineer & Advanced Creative Developer",
      organization: "Personal Research & Advanced Projects",
      description: "Exploring machine learning models, intelligent automated scripts, neural network foundations, and next-generation Next.js 15 UI animations.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />
    },
    {
      year: "2024 - 2025",
      title: "Full-Stack Frontend & Next.js Specialization",
      organization: "KAWSER.DEV Ecosystem",
      description: "Mastered Next.js App Router, TypeScript, Tailwind CSS, and state management. Built production-grade web apps like EduVault CSE Hub.",
      icon: <Code className="w-5 h-5 text-cyan-400" />
    },
    {
      year: "2023 - 2024",
      title: "Computer Science & Engineering Undergraduate",
      organization: "Bangladesh University of Business and Technology (BUBT)",
      description: "Engaged in rigorous academic study covering Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />
    },
    {
      year: "2022 - 2023",
      title: "Programming Foundation & C/C++ Mastery",
      organization: "Competitive Programming & Logic Building",
      description: "Started core programming with C and C++, solving algorithmic puzzles, mastering STL, and understanding memory management.",
      icon: <Terminal className="w-5 h-5 text-green-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-gray-950/40">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>LEARNING JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-6"
          >
            Experience & Milestone <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            The chronological evolution of my academic milestones, programming proficiency, and software development path.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-purple-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-2xl bg-[#030712] border-2 border-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-gray-800 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">{item.organization}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
