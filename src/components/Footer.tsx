"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Rittikkgupta", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ritik-gupta352000/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ritikgupta352000@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold gradient-text">RG.</span>
            <span className="text-text-secondary">|</span>
            <span className="text-text-secondary text-sm">Ritik Gupta</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-surface border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> by Ritik Gupta
          </p>
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
