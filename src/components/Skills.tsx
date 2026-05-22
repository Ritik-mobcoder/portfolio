"use client";

import { motion } from "framer-motion";
import { 
  Brain, Server, Database, Cloud, Code, Cpu, 
  Layers, Shield, Zap 
} from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML & GenAI",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "LlamaIndex", "RAG", "Embeddings", "Vector DBs", "Prompt Engineering", "OpenAI API", "Anthropic", "Gemini", "Mistral"],
    color: "accent",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Python", "FastAPI", "Django", "REST APIs", "GraphQL", "WebSockets", "JWT Auth", "RBAC", "Rate Limiting", "SQLAlchemy", "MCP"],
    color: "secondary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Qdrant", "Pinecone", "FAISS"],
    color: "accent",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git", "Firebase", "CI/CD"],
    color: "secondary",
  },
  {
    title: "CS Fundamentals",
    icon: Code,
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Multithreading", "Caching", "Unit Testing"],
    color: "accent",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to build production-grade systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 h-full border border-white/10 hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${category.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
                    <category.icon className={`w-6 h-6 ${category.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-all cursor-default ${
                        category.color === 'accent'
                          ? 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20'
                          : 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
