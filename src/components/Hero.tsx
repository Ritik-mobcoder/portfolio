"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="text-text-primary">Hello, I&apos;m </span>
            <span className="gradient-text">Ritik Gupta</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-8 h-12">
            <Typewriter
              texts={["AI/ML Engineer", "Backend Architect", "RAG & LLM Systems Builder"]}
              className="font-display font-semibold"
            />
          </div>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            I build production-grade AI systems — from model selection to deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-background rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all glow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/Ritik_Gupta_Resume_2026-03-22.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-accent text-accent rounded-full font-semibold text-lg hover:bg-accent/10 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-text-secondary text-text-primary rounded-full font-semibold text-lg hover:bg-surface transition-all"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="https://github.com/Rittikkgupta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-surface border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ritik-gupta352000/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-surface border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:ritikgupta352000@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-surface border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-text-secondary hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
