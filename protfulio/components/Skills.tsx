'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'programming' | 'cs' | 'tools'>('all');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'HTML5', level: 'Advanced', experience: 'Expert structure & semantics' },
        { name: 'CSS3 / Tailwind', level: 'Expert', experience: 'Modern responsive UI & animations' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', experience: 'Asynchronous programming & DOM' },
        { name: 'TypeScript', level: 'Advanced', experience: 'Type-safe scalable applications' },
        { name: 'React.js', level: 'Advanced', experience: 'Component architecture & hooks' },
        { name: 'Next.js 15', level: 'Advanced', experience: 'App router, SSR & optimization' },
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'C Programming', level: 'Advanced', experience: 'System fundamentals & memory' },
        { name: 'C++', level: 'Advanced', experience: 'STL, OOP & competitive coding' },
        { name: 'Python', level: 'Advanced', experience: 'Scripting, AI/ML foundations' },
      ]
    },
    {
      id: 'cs',
      name: 'Computer Science',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: 'Data Structures', level: 'Strong', experience: 'Trees, graphs, heaps & hash tables' },
        { name: 'Algorithms', level: 'Strong', experience: 'Sorting, searching & shortest path' },
        { name: 'OOP', level: 'Strong', experience: 'Encapsulation, inheritance & design' },
        { name: 'Problem Solving', level: 'Advanced', experience: 'Logical debugging & optimization' },
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Ecosystem',
      icon: <Wrench className="w-5 h-5 text-green-400" />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', experience: 'Version control & collaboration' },
        { name: 'VS Code', level: 'Expert', experience: 'Extensions, debugging & shortcuts' },
        { name: 'Linux / Unix', level: 'Intermediate', experience: 'Command line operations & shell' },
        { name: 'Firebase', level: 'Intermediate', experience: 'Auth, database & hosting' },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills.map(s => ({ ...s, category: cat.name })));

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : skillCategories.find(c => c.id === activeTab)?.skills.map(s => ({ ...s, category: skillCategories.find(c => c.id === activeTab)?.name })) || [];

  return (
    <section id="skills" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-gray-950/40">
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
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-6"
          >
            Skills & Core <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Competencies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            A comprehensive overview of my technical stack, programming languages, and computer science foundations.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'programming', label: 'Programming' },
            { id: 'cs', label: 'Computer Science' },
            { id: 'tools', label: 'Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 border border-transparent'
                  : 'bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    {activeTab === 'all' && 'category' in skill && (
                      <span className="text-[11px] text-purple-400 font-mono">{(skill as any).category}</span>
                    )}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-mono text-cyan-400">
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{skill.experience}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
