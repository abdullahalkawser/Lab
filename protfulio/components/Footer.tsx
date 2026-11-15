'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Code2, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#030712] border-t border-gray-800 pt-16 pb-8">
      {/* Animated Gradient Separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <span className="font-black text-xl tracking-wider text-white">KAWSER.DEV</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              Building digital experiences through code, creativity & innovation. Dedicated to frontend development, creative interfaces, and intelligent engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/abdullah-al-kawser" className="text-gray-400 hover:text-white transition-colors"><Globe /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-800 text-xs text-gray-500">
          <p>© 2026 KAWSER.DEV. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}