import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Sparkles, ArrowDown, Mail, 
  ExternalLink, Cpu, Globe, Zap, Shield, Database,
  Terminal, Layers, Rocket, ChevronRight, Star
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
}

function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto glass px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">Portfolio</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} 
              className="hover:text-white transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} 
          className="px-4 py-2 bg-accent hover:bg-accent-glow text-white text-sm rounded-lg transition-all">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20">
      <motion.div style={{ y, opacity }} className="text-center max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-gray-300">Available for Hire</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Building <span className="text-gradient">Intelligent</span><br />
          Systems That Scale
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Full-stack engineer & AI infrastructure specialist. 
          I architect unified AI gateways, automate complex workflows, 
          and ship production-ready systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center gap-2">
            View My Work <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass glass-hover text-white rounded-xl font-medium transition-all">
            Get In Touch
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center justify-center gap-8 text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span className="text-sm">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            <span className="text-sm">AI/ML</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Cloud</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate software engineer who bridges the gap between complex AI infrastructure 
              and elegant user experiences. With deep expertise in building unified API gateways, 
              I help companies integrate multiple AI providers seamlessly.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My latest project — <strong className="text-white">Bawwab</strong> — is a production-ready 
              AI gateway supporting 45+ providers with intelligent routing, circuit breakers, 
              semantic caching, and real-time monitoring.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'System Architect', 'AI Integrator', 'Full-Stack Dev'].map((tag) => (
                <span key={tag} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                <Terminal className="w-32 h-32 text-accent/50" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl">
              <div className="text-3xl font-bold text-gradient">45+</div>
              <div className="text-sm text-gray-400">AI Providers Integrated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { icon: Code2, name: 'TypeScript / Node.js', level: 95, desc: 'Production-grade backend systems' },
    { icon: Cpu, name: 'AI Infrastructure', level: 90, desc: 'LLM routing, caching, fallback chains' },
    { icon: Layers, name: 'React / Next.js', level: 88, desc: 'Interactive dashboards & web apps' },
    { icon: Database, name: 'Databases', level: 85, desc: 'PostgreSQL, Redis, SQLite' },
    { icon: Shield, name: 'DevOps / Cloud', level: 82, desc: 'Docker, CI/CD, Cloudflare, Vercel' },
    { icon: Zap, name: 'System Design', level: 87, desc: 'Microservices, event-driven architecture' },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Deep expertise across the full stack, with specialization in AI infrastructure and system architecture.</p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.name} {...staggerItem} className="glass glass-hover p-6 group">
              <skill.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Bawwab AI Gateway',
      desc: 'Unified AI gateway supporting 45+ providers. Features intelligent routing, circuit breakers, semantic cache, virtual API keys, and real-time dashboard.',
      tags: ['TypeScript', 'Fastify', 'React', 'AI Infrastructure'],
      highlights: ['45+ Providers', 'Smart Fallback', 'OAuth Integration', 'Circuit Breaker'],
      link: 'https://github.com/kentanghub/bawwab',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      desc: 'This very website — built with React, Vite, Tailwind, and Framer Motion. Optimized for performance and deployed on Cloudflare Pages.',
      tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      highlights: ['Animations', 'Responsive', 'SEO Ready'],
      link: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Production-ready systems built with modern architecture and best practices.</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.2 }}
              className={`glass p-8 md:p-10 ${project.featured ? 'border-accent/30' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && <Star className="w-5 h-5 text-accent fill-accent" />}
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 bg-accent/10 text-accent-glow text-sm rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 glass text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="w-full md:w-64 aspect-video rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/10 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-accent/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      role: 'AI Infrastructure Engineer',
      company: 'Freelance / Personal Projects',
      period: '2024 - Present',
      desc: 'Building Bawwab — a unified AI gateway integrating 45+ LLM providers with intelligent routing, circuit breakers, and real-time monitoring.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Various Projects',
      period: '2022 - 2024',
      desc: 'Developed web applications using React, Node.js, and TypeScript. Focused on performance optimization and scalable architecture.',
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />
          
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2" />
              <div className="ml-12 md:ml-0 md:w-1/2 glass p-6">
                <div className="text-accent text-sm font-medium mb-1">{exp.period}</div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="text-gray-400 text-sm mb-3">{exp.company}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            I'm currently open to full-time opportunities and freelance projects. 
            If you're looking for someone who can architect AI infrastructure and ship fast, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:your.email@example.com" 
              className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center gap-2">
              <Mail className="w-5 h-5" /> Send Email
            </a>
            <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover text-white rounded-xl font-medium transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover text-white rounded-xl font-medium transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
            </a>
          </div>

          <div className="glass p-8 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Message</h3>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" />
              <input type="email" placeholder="Your Email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" />
              <textarea placeholder="Your Message" rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 resize-none" />
              <button type="submit" className="w-full py-3 bg-accent hover:bg-accent-glow text-white rounded-lg font-medium transition-all">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm">
          © 2025 — Built with React, Vite & Tailwind
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
