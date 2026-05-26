"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle, Send, FileText, CheckCircle2, X } from "lucide-react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using Web3Forms - Using environment variable for security
    const formPayload = {
      ...formData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "Job Opportunity",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-background rounded-xl font-semibold transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md p-8 rounded-2xl bg-surface border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary hover:text-text-primary" />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </motion.div>
                
                <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary mb-8">
                  Thank you for reaching out, <span className="text-accent font-medium">Ritik</span> will get back to you as soon as possible.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-3 bg-accent text-background rounded-xl font-semibold hover:bg-opacity-90 transition-all"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
