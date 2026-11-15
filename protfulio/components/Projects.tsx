'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, Code, Compass, BookOpen, Globe } from 'lucide-react';
import { Button } from './ui/Button';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EduVault CSE Hub",
      category: "Academic & Resource Platform",
      description: "A comprehensive digital academic resource platform engineered for Computer Science & Engineering students.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/abdullah-al-kawser/eduvault-cse-hub",
      demo: "https://eduvault-cse.vercel.app",
    },
    {
      id: 2,
      title: "BUBT Smart Campus Navigation",
      category: "Graph Algorithm & Mapping System",
      description: "An interactive campus navigation and routing system for BUBT built using graph data structures and Dijkstra's shortest path algorithm.",
      technologies: ["JavaScript", "React", "Tailwind CSS", "Graph Algorithms"],
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      github: "https://github.com/abdullah-al-kawser/bubt-smart-campus",
      demo: "https://bubt-smart-campus.vercel.app",
    },
    {
      id: 3,
      title: "Interactive Data Structure Learning Platform",
      category: "Educational Visualization Tool",
      description: "An interactive educational web platform designed to help students master data structures through real-time animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
      icon: <Code className="w-6 h-6 text-blue-400" />,
      github: "https://github.com/abdullah-al-kawser/dsa-visualizer",
      demo: "https://dsa-visualizer-kawser.vercel.app",
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="glass-card rounded-3xl p-6 border border-gray-800 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 mb-6">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-800/80">
                <a href={project.github} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full" leftIcon={<Globe className="w-4 h-4" />}>
                    Source
                  </Button>
                </a>
                <a href={project.demo} className="flex-1">
                  <Button variant="default" size="sm" className="w-full" rightIcon={<ExternalLink className="w-4 h-4" />}>
                    Demo
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
