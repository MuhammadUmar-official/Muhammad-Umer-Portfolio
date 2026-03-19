"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero" className="font-semibold">Umer.dev</a>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-4">
        {/* Hero - same as before */}
        <section id="hero" className="min-h-[70vh] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">AI / ML Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm <span className="text-cyan-400">Muhammad Umer</span></h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">AI/ML Engineer and Data Scientist focused on building intelligent, data-driven solutions using Python, Machine Learning, and modern analytics tools.</p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex gap-4 flex-wrap justify-center">
              <a href="#projects" className="px-5 py-2 rounded bg-cyan-500 text-slate-950 text-sm font-medium hover:bg-cyan-400 transition">View projects</a>
              <a href="#contact" className="px-5 py-2 rounded border border-slate-600 text-sm hover:border-cyan-400 hover:text-cyan-400 transition">Contact me</a>
            </motion.div>
          </motion.div>
        </section>

        {/* About - same content */}
        <section id="about" className="py-16">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-semibold mb-4">About</motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-slate-300 leading-relaxed max-w-2xl space-y-3">
            <p>I'm an AI/ML Engineer and Data Scientist based in Lahore, Pakistan, with a strong foundation in Python and core data science libraries like NumPy, Pandas, Seaborn, Matplotlib, and Scikit-Learn.</p>
            <p>I specialize in data preprocessing (handling missing values, outliers, feature scaling, and encoding), building machine learning pipelines, and delivering end-to-end solutions from raw data to production-ready models.</p>
            <div className="mt-6 text-sm space-y-1">
              <p className="font-medium text-slate-100">Education</p>
              <p>Intermediate in Computer Science – Punjab Group Of Colleges (Aug 2025 – Jul 2026)</p>
              <p>Matric in Computer Science – Unique Academy (Mar 2024 – Oct 2025)</p>
            </div>
          </motion.div>
        </section>

        {/* Experience - same */}
        <section id="experience" className="py-16">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-2xl font-semibold mb-6">Experience</motion.h2>
          <div className="space-y-6">
            {[
              { role: "Machine Learning Project Contributor", company: "AfterQuery Experts", period: "March 2026 – Present", bullets: ["Accepted into AfterQuery Experts Network", "Participating in AI/ML training modules"] },
              { role: "Machine Learning Engineer", company: "Sysslan IT Solutions", period: "Jan 2026", bullets: ["Built regression, classification, clustering models", "End-to-end ML pipelines", "Salary prediction, fraud detection"] },
              { role: "Machine Learning Engineer", company: "CodeAlpha", period: "Dec 2025 – Jan 2026", bullets: ["Salary prediction model", "Credit card fraud detection", "Multiple classification models"] }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-slate-800 rounded-lg p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.role} · <span className="text-cyan-400">{item.company}</span></h3>
                  <span className="text-xs text-slate-400">{item.period}</span>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects + Contact - same structure */}
        <section id="contact" className="py-16 mb-10">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl font-semibold mb-4">Contact</motion.h2>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-1 text-sm text-slate-300">
            <p>Mobile: <span className="text-cyan-400">0303-6937172</span></p>
            <p>Email: <a href="mailto:hiumar937@gmail.com" className="text-cyan-400 hover:underline">hiumar937@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammadumer-a28425365" className="text-cyan-400 hover:underline" target="_blank">linkedin.com/in/muhammadumer-a28425365</a></p>
            <p>GitHub: <a href="https://github.com/Muhammadumarofficial" className="text-cyan-400 hover:underline" target="_blank">Muhammadumarofficial</a></p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
