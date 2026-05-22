"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, Calendar, Briefcase, CheckCircle, Layers } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Calendar, value: 2, suffix: "+", label: "Years Experience", sublabel: "Years" },
  { icon: Briefcase, value: 10, suffix: "+", label: "AI/ML Projects", sublabel: "Projects" },
  { icon: CheckCircle, value: 3, suffix: "", label: "Production AI Systems", sublabel: "Systems" },
  { icon: Layers, value: 5, suffix: "+", label: "LLM Integrations", sublabel: "Integrations" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              AI/ML and Backend Engineer with{" "}
              <span className="text-accent font-semibold">2.5+ years</span> building end-to-end
              intelligent systems. I specialize in RAG pipelines, agentic workflows, and scalable
              FastAPI backends — from architecture to production.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;ve shipped real AI products at{" "}
              <span className="text-accent font-semibold">Mobcoder</span> and{" "}
              <span className="text-accent font-semibold">Ionicx Digital</span>, and I&apos;m obsessed
              with bridging the gap between AI research and working software.
            </p>
            <motion.a
              href="/Ritik_Gupta_Resume_2026-03-22.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
