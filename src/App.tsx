import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Sparkles, ArrowDown, Mail,
  ExternalLink, Globe, Zap, BookOpen,
  Terminal, Rocket, ChevronRight, Star,
  Smartphone, Briefcase, GraduationCap, Award, User
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
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
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
        <div className="font-bold text-xl text-gradient">Reihan</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {['Tentang', 'Keahlian', 'Proyek', 'Pengalaman', 'Kontak'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-white transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => scrollTo('kontak')}
          className="px-4 py-2 bg-accent hover:bg-accent-glow text-white text-sm rounded-lg transition-all">
          Hubungi Saya
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
          <span className="text-sm text-gray-300">Terbuka untuk Kerja Sama</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Mochammad Reihan<br />
          <span className="text-gradient">Fajar Lintang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Lulusan Teknik Informatika yang sedang belajar dan berusaha membangun
          website dan aplikasi yang bermanfaat bagi banyak orang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <button onClick={() => document.getElementById('proyek')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center gap-2">
            Lihat Proyek <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass glass-hover text-white rounded-xl font-medium transition-all">
            Hubungi Saya
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
            <span className="text-sm">Web Development</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm">Android</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="text-sm">SaaS</span>
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

function Tentang() {
  return (
    <section id="tentang" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Tentang <span className="text-gradient">Saya</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Saya lulusan Teknik Informatika dari Universitas Serang Raya dengan IPK 3,85.
              Saya memiliki ketertarikan pada dunia pemrograman dan pengembangan aplikasi,
              terutama di bidang web dan mobile.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Saya terbiasa belajar secara mandiri dan senang mengeksplorasi teknologi baru.
              Saat ini saya sedang mendalami pengembangan website menggunakan berbagai teknologi
              modern seperti React, Supabase, dan Vercel.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Meski masih dalam tahap belajar, saya berkomitmen untuk membangun produk digital
              yang sederhana namun bermanfaat bagi penggunanya.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Fast Learner', 'Adaptable', 'Team Player', 'Problem Solver', 'Curious'].map((tag) => (
                <span key={tag} className="px-4 py-2 glass rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/20 to-emerald-500/20 flex items-center justify-center">
                <User className="w-32 h-32 text-accent/50" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl">
              <div className="text-3xl font-bold text-gradient">3.85</div>
              <div className="text-sm text-gray-400">IPK / 4.00</div>
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
    <section id="keahlian" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Keahlian <span className="text-gradient">Teknis</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berikut adalah beberapa kemampuan teknis yang saya miliki.
            Saya terus belajar dan mengembangkan diri di bidang-bidang ini.
          </p>
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
                  className="h-full bg-gradient-to-r from-accent to-emerald-300 rounded-full"
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
    <section id="proyek" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proyek <span className="text-gradient">Saya</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa proyek yang pernah saya kerjakan, baik secara mandiri maupun sebagai bahan belajar.
          </p>
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
                    Kunjungi Proyek <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="w-full md:w-64 aspect-video rounded-xl bg-gradient-to-br from-accent/10 to-emerald-500/10 flex items-center justify-center">
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
      detail: 'IPK 3,85 / 4,00',
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
    <section id="pengalaman" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pengalaman & <span className="text-gradient">Pendidikan</span></h2>
        </motion.div>

        {/* Pengalaman Kerja */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-accent" /> Pengalaman Kerja
          </h3>
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

        {/* Pendidikan */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-accent" /> Pendidikan
          </h3>
          <motion.div {...fadeInUp} className="glass p-6">
            {educations.map((edu) => (
              <div key={edu.degree}>
                <div className="text-accent text-sm font-medium mb-1">{edu.period}</div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-gray-400 text-sm mb-2">{edu.school}</div>
                <div className="text-gray-300 text-sm">{edu.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sertifikasi */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-accent" /> Sertifikasi
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <motion.div key={cert.name} {...fadeInUp} className="glass p-5">
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <div className="text-gray-400 text-sm">{cert.issuer}</div>
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
    <section id="kontak" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-4">Mari <span className="text-gradient">Terhubung</span></h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Saya terbuka untuk kesempatan kerja, proyek freelance, atau sekadar berdiskusi
            tentang teknologi. Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:muhammadraihanfl@gmail.com"
              className="px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-xl font-medium transition-all glow flex items-center gap-2">
              <Mail className="w-5 h-5" /> Kirim Email
            </a>
            <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover text-white rounded-xl font-medium transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
            </a>
          </div>

          <div className="glass p-8 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-4">Kirim Pesan</h3>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nama Anda"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" />
              <input type="email" placeholder="Email Anda"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500" />
              <textarea placeholder="Pesan Anda" rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-500 resize-none" />
              <button type="submit" className="w-full py-3 bg-accent hover:bg-accent-glow text-white rounded-lg font-medium transition-all">
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
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm">
          © 2025 — Dibuat dengan React, Vite & Tailwind oleh Reihan
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/kentanghub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="mailto:muhammadraihanfl@gmail.com" className="text-gray-500 hover:text-white transition-colors">
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
