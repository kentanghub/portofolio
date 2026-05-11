import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2, Sparkles, ArrowDown, Mail,
  ExternalLink, Globe, Zap, BookOpen,
  Terminal, Rocket, ChevronRight, Star,
  Smartphone, Briefcase, GraduationCap, Award,
  Menu, X
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
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = ['Tentang', 'Keahlian', 'Proyek', 'Pengalaman', 'Kontak'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4"
    >
      <div className="max-w-6xl mx-auto glass px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-lg md:text-xl text-gradient">Reihan</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-white transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('kontak')}
            className="hidden md:block px-4 py-2 bg-accent hover:bg-accent-glow text-white text-sm rounded-lg transition-all">
            Hubungi Saya
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-4 glass p-4 rounded-xl"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-gray-300 hover:text-white py-2 transition-colors cursor-pointer">
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('kontak')}
              className="mt-2 px-4 py-2 bg-accent hover:bg-accent-glow text-white text-sm rounded-lg transition-all">
              Hubungi Saya
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div style={{ y, opacity }} className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 glass rounded-full mb-6 md:mb-8"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent" />
          <span className="text-xs md:text-sm text-gray-300">Terbuka untuk Kerja Sama</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Mochammad Reihan<br />
          <span className="text-gradient">Fajar Lintang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto px-2"
        >
          Lulusan Teknik Informatika yang sedang belajar dan berusaha membangun
          website dan aplikasi yang bermanfaat bagi banyak orang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
        >
          <button onClick={() => document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center justify-center gap-2">
            Lihat Proyek <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass glass-hover text-white rounded-xl font-medium transition-all">
            Hubungi Saya
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 px-4"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">Web Development</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">Android</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm">SaaS</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}

function Tentang() {
  return (
    <section id="tentang" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Tentang <span className="text-gradient">Saya</span></h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Saya lulusan Teknik Informatika dari Universitas Serang Raya.
              Saya memiliki ketertarikan pada dunia pemrograman dan pengembangan aplikasi,
              terutama di bidang web dan mobile.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Saya terbiasa belajar secara mandiri dan senang mengeksplorasi teknologi baru.
              Saat ini saya sedang mendalami pengembangan website menggunakan berbagai teknologi
              modern seperti React, Supabase, dan Vercel.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Meski masih dalam tahap belajar, saya berkomitmen untuk membangun produk digital
              yang sederhana namun bermanfaat bagi penggunanya.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Fast Learner', 'Adaptable', 'Team Player', 'Problem Solver', 'Curious'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 glass rounded-full text-xs md:text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden glass p-1.5 md:p-2">
              <img
                src="/MochReihanFL.png"
                alt="Mochammad Reihan Fajar Lintang"
                className="w-full h-full rounded-xl md:rounded-2xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Keahlian() {
  const skills = [
    { icon: Globe, name: 'Web Development', level: 70, desc: 'HTML, CSS, JavaScript, React, Supabase, Vercel' },
    { icon: Smartphone, name: 'Android Development', level: 60, desc: 'Android Studio, Java, aplikasi mobile berbasis Android' },
    { icon: Code2, name: 'C# & Unity', level: 55, desc: 'Pemula dalam pengembangan game dan aplikasi dengan Unity Engine' },
    { icon: BookOpen, name: 'Database', level: 65, desc: 'MySQL, PostgreSQL, dasar pengelolaan database' },
    { icon: Terminal, name: 'Git & GitHub', level: 70, desc: 'Version control, kolaborasi tim, deployment' },
    { icon: Zap, name: 'Problem Solving', level: 80, desc: 'Kemampuan analisis dan mencari solusi secara kreatif' },
  ];

  return (
    <section id="keahlian" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Keahlian <span className="text-gradient">Teknis</span></h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Berikut adalah beberapa kemampuan teknis yang saya miliki.
            Saya terus belajar dan mengembangkan diri di bidang-bidang ini.
          </p>
        </motion.div>

        <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.name} {...staggerItem} className="glass glass-hover p-5 md:p-6 group">
              <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{skill.desc}</p>
              <div className="w-full bg-white/5 rounded-full h-1.5 md:h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-accent-glow rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Proyek() {
  const projects = [
    {
      title: 'Dokin.id',
      desc: 'Platform SaaS untuk pembuatan slip gaji secara digital dan otomatis. Dibangun dengan teknologi modern untuk memudahkan perusahaan dalam mengelola payroll.',
      tags: ['SaaS', 'Web App', 'Payroll'],
      highlights: ['Slip Gaji Digital', 'Otomatisasi', 'SaaS'],
      link: 'https://dokin.id',
      featured: true,
    },
    {
      title: 'Carebrum',
      desc: 'Proyek open-source yang dikembangkan sebagai sarana belajar dan eksplorasi teknologi baru. Tersedia secara publik di GitHub.',
      tags: ['Open Source', 'Learning Project'],
      highlights: ['Open Source', 'Belajar'],
      link: 'https://github.com/kentanghub/carebrum',
      featured: false,
    },
    {
      title: 'Bawwab',
      desc: 'Proyek open-source yang berfokus pada pengembangan infrastruktur AI gateway. Dibuat untuk memahami cara kerja sistem gateway dan routing.',
      tags: ['Open Source', 'AI Gateway'],
      highlights: ['AI Gateway', 'Open Source'],
      link: 'https://github.com/kentanghub/bawwab',
      featured: false,
    },
    {
      title: 'BuatSlip',
      desc: 'Website berbasis SaaS untuk pembuatan slip gaji digital. Dikerjakan secara mandiri sebagai sarana belajar membangun produk digital dari nol.',
      tags: ['SaaS', 'Supabase', 'Vercel'],
      highlights: ['Produk Mandiri', 'Belajar'],
      link: 'https://buatslip.vercel.app',
      featured: false,
    },
  ];

  return (
    <section id="proyek" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Proyek <span className="text-gradient">Saya</span></h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Beberapa proyek yang pernah saya kerjakan, baik secara mandiri maupun sebagai bahan belajar.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.2 }}
              className={`glass p-5 md:p-8 lg:p-10 ${project.featured ? 'border-accent/30' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    {project.featured && <Star className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.highlights.map((h) => (
                      <span key={h} className="px-2 py-0.5 md:px-3 md:py-1 bg-accent/10 text-accent-glow text-xs md:text-sm rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1 glass text-gray-300 text-xs md:text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 text-accent hover:text-accent-glow transition-colors text-sm md:text-base">
                    Kunjungi Proyek <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                </div>
                <div className="w-full md:w-48 lg:w-64 aspect-video rounded-lg md:rounded-xl bg-gradient-to-br from-accent/10 to-accent-glow/10 flex items-center justify-center">
                  <Rocket className="w-10 h-10 md:w-16 md:h-16 text-accent/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pengalaman() {
  const experiences = [
    {
      role: 'Pengembang Proyek Mandiri',
      company: 'BuatSlip & Dokin.id',
      period: '2026 — Sekarang',
      desc: 'Membangun website berbasis SaaS untuk pembuatan slip gaji digital secara mandiri sebagai sarana belajar dan berlatih membangun produk digital dari nol.',
    },
    {
      role: 'Dropshipping',
      company: 'han.collections (Tokopedia ke Shopee)',
      period: '2020 — ±3 Bulan',
      desc: 'Mengelola toko online dengan melakukan optimasi tampilan dan deskripsi produk. Berhasil menjual lebih dari 50 produk dengan nilai kepuasan pelanggan rata-rata 4,8 dari 5,0.',
    },
    {
      role: 'Magang — Operasional & IT Support',
      company: 'Bank BSI KC Cilegon',
      period: '2020 — 1 Bulan',
      desc: 'Memproses data SLIK nasabah, input data dan pemindaian dokumen jaminan, serta membantu kebutuhan teknis karyawan seperti pengeditan foto dan pembersihan file.',
    },
  ];

  const educations = [
    {
      degree: 'S1 Teknik Informatika',
      school: 'Universitas Serang Raya',
      period: '2018 — 2022',
    },
  ];

  const certifications = [
    {
      name: 'Virtual Internship Backend Developer',
      issuer: 'Investree',
    },
    {
      name: 'PHP and MySQL',
      issuer: 'Preinexus',
    },
  ];

  return (
    <section id="pengalaman" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Pengalaman & <span className="text-gradient">Pendidikan</span></h2>
        </motion.div>

        {/* Pengalaman Kerja */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Pengalaman Kerja
          </h3>
          <div className="space-y-6 md:space-y-0">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot - hidden on mobile, shown on md+ */}
                <div className="hidden md:block absolute left-0 top-2 w-3 h-3 bg-accent rounded-full -translate-x-1.5" />
                {/* Mobile connector line */}
                {idx !== experiences.length - 1 && (
                  <div className="hidden md:block absolute left-0 top-5 bottom-[-24px] w-px bg-gradient-to-b from-accent/50 to-transparent" />
                )}
                <div className="glass p-4 md:p-6">
                  <div className="text-accent text-xs md:text-sm font-medium mb-1">{exp.period}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{exp.company}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pendidikan */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Pendidikan
          </h3>
          <motion.div {...fadeInUp} className="glass p-4 md:p-6">
            {educations.map((edu) => (
              <div key={edu.degree}>
                <div className="text-accent text-xs md:text-sm font-medium mb-1">{edu.period}</div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-gray-400 text-xs md:text-sm">{edu.school}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sertifikasi */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" /> Sertifikasi
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {certifications.map((cert) => (
              <motion.div key={cert.name} {...fadeInUp} className="glass p-4 md:p-5">
                <h4 className="font-semibold text-sm md:text-base mb-1">{cert.name}</h4>
                <div className="text-gray-400 text-xs md:text-sm">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  return (
    <section id="kontak" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Mari <span className="text-gradient">Terhubung</span></h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-12 max-w-xl mx-auto px-2">
            Saya terbuka untuk kesempatan kerja, proyek freelance, atau sekadar berdiskusi
            tentang teknologi. Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
            <a href="mailto:muhammadraihanfl@gmail.com"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Kirim Email
            </a>
            <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass glass-hover text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
            </a>
          </div>

          <div className="glass p-5 md:p-8 max-w-lg mx-auto">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Kirim Pesan</h3>
            <form className="space-y-3 md:space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nama Anda"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 text-sm md:text-base" />
              <input type="email" placeholder="Email Anda"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 text-sm md:text-base" />
              <textarea placeholder="Pesan Anda" rows={4}
                className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 resize-none text-sm md:text-base" />
              <button type="submit" className="w-full py-2.5 md:py-3 bg-accent hover:bg-accent-glow text-white rounded-lg font-medium transition-all text-sm md:text-base">
                Kirim Pesan
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
    <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
          © 2025 — Dibuat dengan React, Vite & Tailwind oleh Reihan
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="mailto:muhammadraihanfl@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
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
        <Tentang />
        <Keahlian />
        <Proyek />
        <Pengalaman />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}
