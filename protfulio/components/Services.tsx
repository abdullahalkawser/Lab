'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Smartphone, MonitorSmartphone, Code, Zap, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building fast, high-quality, and scalable user interfaces using the latest technologies like Next.js and React.",
      icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Responsive Web Design",
      description: "Crafting beautiful, pixel-perfect designs that adapt seamlessly to all devices, from mobile phones to large desktop screens.",
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Interactive UI Development",
      description: "Adding motion, animation, and interactive elements to websites using Framer Motion and modern CSS techniques.",
      icon: <LayoutGrid className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Web App Development",
      description: "Creating functional, secure, and robust web applications for your specific business requirements.",
      icon: <MonitorSmartphone className="w-8 h-8 text-green-400" />
    },
    {
      title: "Landing Page Development",
      description: "Converting design to high-conversion, visually stunning, and performance-optimized landing pages.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
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
            <span>SERVICES OFFERED</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-6"
          >
            Specialized Digital <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:translate-y-[-8px] group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
