"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Mobcoder",
    role: "AI/ML Engineer",
    period: "Sep 2024 – Present",
    location: "Remote",
    description: [
      "End-to-end AI systems: POC to production",
      "RAG pipelines, vector DBs (Qdrant, Vertex AI), agentic workflows",
      "FastAPI backends with JWT, RBAC, rate limiting",
      "LLM orchestration at scale",
    ],
    tags: ["FastAPI", "RAG", "Qdrant", "LangChain", "GenAI", "Python"],
  },
  {
    company: "Ionicx Digital",
    role: "Software Engineer",
    period: "Aug 2023 – Aug 2024",
    location: "Remote",
    description: [
      "RESTful API platform for travel/excursion booking",
      "User auth, trip scheduling, real-time data APIs",
      "OOP & modular architecture",
    ],
    tags: ["Django", "REST API", "PostgreSQL", "Python", "OOP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 hover:border-accent/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-text-secondary" />
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
