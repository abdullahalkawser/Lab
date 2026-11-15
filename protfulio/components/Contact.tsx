'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, Loader2, CheckCircle2, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4']
    });

    setTimeout(() => setSuccess(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-gray-950/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
            Have an Idea? Let&apos;s Build <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Something Amazing.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
            Whether you have a project in mind, a question about my work, or just want to connect – I&apos;m always excited to hear from you.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:abdullah.kawser.dev@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>abdullah.kawser.dev@gmail.com</span>
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: <Globe />, label: 'Portfolio', href: '#' },
              { icon: <Globe />, label: 'LinkedIn', href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 border border-gray-800"
        >
          {success ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <Input
                label="Subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
              <Textarea
                label="Message"
                placeholder="Tell me about your amazing project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              <Button
                type="submit"
                className="w-full justify-center shadow-lg shadow-purple-600/20"
                isLoading={loading}
                rightIcon={!loading && <Send className="w-4 h-4 ml-2" />}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
