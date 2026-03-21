"use client";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">Umer.dev</h1>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>

          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Muhammad Umer
          </motion.h1>

          {/* TYPING EFFECT */}
          <ReactTyped
            strings={[
              "AI Engineer 🤖",
              "Machine Learning Expert 📊",
              "Data Scientist 📈"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-xl text-cyan-400"
          />

          <p className="mt-6 text-slate-300 max-w-xl mx-auto">
            I build intelligent AI systems using Python, Machine Learning, and Data Analysis.
          </p>

          <a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition"
          >
            View Projects
          </a>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Salary Prediction",
              tech: "Regression • ML",
              desc: "Predict salaries using machine learning.",
            },
            {
              name: "Fraud Detection",
              tech: "Classification • AI",
              desc: "Detect fraud transactions using ML.",
            },
            {
              name: "Customer Segmentation",
              tech: "Clustering",
              desc: "Segment customers using K-Means.",
            },
            {
              name: "Data Analysis",
              tech: "Pandas • NumPy",
              desc: "Analyze and visualize datasets.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-cyan-400 text-sm">{project.tech}</p>
              <p className="text-slate-300 mt-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-slate-400 mt-4">your@email.com</p>
      </section>

    </main>
  );
}
