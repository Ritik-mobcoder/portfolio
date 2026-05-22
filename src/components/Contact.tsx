"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle, Send, FileText } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "ritikgupta352000@gmail.com", href: "mailto:ritikgupta352000@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9140633394", href: "tel:+919140633394" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ritik-gupta352000", href: "https://www.linkedin.com/in/ritik-gupta352000/" },
  { icon: Github, label: "GitHub", value: "github.com/Rittikkgupta", href: "https://github.com/Rittikkgupta" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 9140633394", href: "https://wa.me/919140633394" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ritikgupta352000@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Open to full-time roles, freelance AI/ML projects, and consulting. Let&apos;s build something remarkable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-accent/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <link.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{link.label}</p>
                    <p className="text-text-primary font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="/Ritik_Gupta_Resume_2026-03-22.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-center justify-center gap-2 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all"
            >
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Download Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-primary focus:outline-none focus:border-accent transition-colors"
                >
                  <option>Job Opportunity</option>
                  <option>Freelance Project</option>
                  <option>Consulting</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-background rounded-xl font-semibold hover:bg-opacity-90 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
