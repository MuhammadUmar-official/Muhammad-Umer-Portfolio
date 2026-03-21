"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Umer.dev
          </h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm uppercase tracking-wider text-cyan-300">AI/ML Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Muhammad Umer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building intelligent data-driven solutions with Python, Machine Learning, 
            and modern analytics tools. Lahore, Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-full text-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-200 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                I'm an AI/ML Engineer and Data Scientist based in Lahore, Pakistan. 
                I specialize in building end-to-end machine learning pipelines from 
                raw data preprocessing to production-ready models.
              </p>
              <div className="space-y-4 text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Data preprocessing expert (missing values, outliers, scaling)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Regression, Classification, Clustering models</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Python • Pandas • NumPy • Scikit-Learn</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <div className="space-y-2 text-slate-400">
                <div>Intermediate Computer Science</div>
                <div className="text-sm opacity-75">Punjab Group Of Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              { role: "Machine Learning Contributor", company: "AfterQuery Experts", period: "Mar 2026 - Present", desc: "Accepted into AI experts network" },
              { role: "Machine Learning Engineer", company: "Sysslan IT Solutions", period: "Jan 2026", desc: "Salary prediction, fraud detection models" },
              { role: "Machine Learning Engineer", company: "CodeAlpha", period: "Dec 2025 - Jan 2026", desc: "Credit card fraud detection systems" },
              { role: "Data Analyst", company: "Al Bahria Institute", period: "Jun - Jul 2025", desc: "Data analysis & insights" }
            ].map((job, index) => (
              <div key={index} className="group border border-white/10 rounded-2xl p-8 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <span className="text-sm text-slate-400">{job.period}</span>
                </div>
                <div className="text-slate-300">{job.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Salary Prediction", tech: "Regression • Scikit-Learn", desc: "Built ML model to predict salaries using feature engineering" },
              { name: "Fraud Detection", tech: "Classification • Anomaly Detection", desc: "Credit
