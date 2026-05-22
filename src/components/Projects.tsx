"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Cpu, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Akari-Bot",
    category: "Generative AI / Health Tech",
    description: "Production AI backend for health & knowledge workflows",
    techStack: ["FastAPI", "Qdrant", "MongoDB", "Redis", "OpenAI", "Gemini", "Anthropic", "Mistral", "JWT"],
    achievements: [
      "RAG pipeline with Semantic Scholar ingestion",
      "NL → MongoDB aggregation pipeline (chart generation)",
      "Safety/crisis classification module",
      "Multi-LLM orchestration (4 providers)",
    ],
    highlights: ["Rate limiting", "Retry mechanisms", "Multi-stage validation"],
    featured: true,
    icon: Cpu,
    github: "https://github.com/ritikgupta/akari-bot",
  },
  {
    title: "Prediction & Recommendation Analytics",
    category: "ML / Predictive Analytics / Operations",
    description: "Predictive analytics for call center resource optimization",
    techStack: ["Python", "scikit-learn", "RandomForestRegressor", "React.js", "Firebase FCM", "Pandas", "NumPy"],
    achievements: [
      "Forecasts call volume, idle time, and handling time",
      "Real-time visualization dashboard in React",
      "Background scheduler + FCM push notifications",
    ],
    highlights: ["ML Pipeline", "Real-time Analytics", "Push Notifications"],
    featured: true,
    icon: BarChart3,
    github: "https://github.com/ritikgupta/prediction-analytics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Production-grade AI systems and scalable backends I&apos;ve built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 h-full border border-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <project.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary">{project.category}</p>
                    </div>
                  </div>
                  {project.featured && (
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  )}
                </div>

                <p className="text-text-secondary mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Architecture Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-surface text-text-secondary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-primary hover:bg-accent hover:text-background transition-all"
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
