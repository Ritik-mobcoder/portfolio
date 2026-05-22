"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Certified",
    icon: "🐍",
  },
  {
    title: "MySQL",
    issuer: "Certified",
    icon: "🗄️",
  },
  {
    title: "Enhancing Soft Skills & Personality",
    issuer: "NPTEL",
    icon: "🎯",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-accent/30 transition-all"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-display font-bold text-text-primary mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary flex items-center justify-center gap-1">
                  <CheckCircle size={14} className="text-green-400" />
                  {cert.issuer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
