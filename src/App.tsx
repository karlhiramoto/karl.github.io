/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  X,
  Instagram,
  Cloud,
  ExternalLink, 
  Terminal, 
  Globe, 
  Server, 
  Cpu, 
  ChevronRight,
  Menu,
  X as CloseIcon,
  Code2,
  Network,
  Brain,
  Shield,
  Search,
  Microscope
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
}

// --- Data ---
const TIMELINE: TimelineItem[] = [
  {
    year: "2023 - Present",
    title: "Staff Software Engineer",
    company: "Google",
    description: "I work on cutting-edge technologies to build and improve products that impact users globally. My role involves AI, backend systems, static/dynamic analysis of malware at scale. ",
    tags: ["Malware Analysis", "Leadership", "Security"]
  },
  {
    year: "2019 - 2023",
    title: "Senior Software Engineer",
    company: "Google",
    description: "Advanced systems engineering and security infrastructure development within the Google/VirusTotal ecosystem.",
    tags: ["Systems", "Security", "Cloud"]
  },
  {
    year: "2014 - 2019",
    title: "Software Engineer & Consultant",
    company: "Google / VirusTotal / Chronicle",
    description: "Technical Solutions Consultant and Software Engineer focusing on security integrations and MacOS sandboxing tools.",
    tags: ["MacOS", "Integration", "Security"]
  },
  {
    year: "2013",
    title: "Principal Software Engineer",
    company: "x.o.ware, Inc.",
    description: "Developed embedded Linux product components including kernel drivers for HMAC SHA acceleration and Yocto build layers.",
    tags: ["Kernel", "Embedded", "Yocto"]
  },
  {
    year: "2010 - 2013",
    title: "Senior Programmer Analyst",
    company: "Travel Technology Systems",
    description: "Data mining and development of massive travel databases (>1B rows) using MySQL, Cassandra, and C/C++.",
    tags: ["Big Data", "NoSQL", "C++"]
  },
  {
    year: "2007 - 2010",
    title: "Senior Software Engineer",
    company: "Iron-gate",
    description: "Developed software for Linux-based embedded network appliances (Router, Firewall, VPN) on Intel XScale ARM.",
    tags: ["Networking", "ARM", "VPN"]
  },
  {
    year: "2000 - 2007",
    title: "Software / Electronics Engineer",
    company: "Degree Controls",
    description: "Developed air flow sensor products and industrial control systems. Holder of US Patent #6,829,930.",
    tags: ["Sensors", "Patents", "Control Systems"]
  },
  {
    year: "1995 - 2000",
    title: "Computer Engineering",
    company: "South Dakota Mines",
    description: "B.S. in Computer Engineering. Early career included programming for High Plains Center for Tech and managing KTEQ Radio.",
    tags: ["Education", "Engineering", "Leadership"]
  }
];
const PROJECTS: Project[] = [
  {
    title: "Open Source Networking",
    description: "Contributions to various Linux networking tools and kernel drivers, focusing on performance and reliability.",
    tags: ["C", "Linux", "Networking", "Kernel"],
    github: "https://github.com/karlhiramoto"
  },
  {
    title: "Embedded Systems Development",
    description: "Custom firmware and driver development for specialized hardware platforms.",
    tags: ["C++", "Embedded", "RTOS", "Drivers"],
  },
  {
    title: "Hiramoto Hosting",
    description: "A personal project providing managed web and email hosting services for family and small businesses.",
    tags: ["DevOps", "Linux", "Postfix", "Nginx"],
    link: "http://hiramoto.org"
  }
];

const SKILLS = [
  { name: "AI", icon: <Brain className="w-5 h-5" /> },
  { name: "Antigenic Agents", icon: <Microscope className="w-5 h-5" /> },
  { name: "Cyber Security", icon: <Shield className="w-5 h-5" /> },
  { name: "Threat Intelligence", icon: <Search className="w-5 h-5" /> },
  { name: "Linux Systems", icon: <Server className="w-5 h-5" /> },
  { name: "Embedded C/C++", icon: <Cpu className="w-5 h-5" /> },
  { name: "Networking", icon: <Network className="w-5 h-5" /> },
  { name: "Open Source", icon: <Code2 className="w-5 h-5" /> },
  { name: "System Architecture", icon: <Terminal className="w-5 h-5" /> },
  { name: "Web Infrastructure", icon: <Globe className="w-5 h-5" /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white">K</span>
            </div>
            <span>KARL HIRAMOTO</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://github.com/karlhiramoto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-orange-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
                  Software Engineer & Open Source Enthusiast
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                  BUILDING ROBUST <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                    SYSTEMS & NETWORKS
                  </span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Engineer dedicated to creating exceptional systems in software and electronics. 
                  Specializing in malware analysis, Linux/Unix systems, embedded development, and high-performance networking.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="#projects"
                    className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    View My Work
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-4">
                    <a href="https://github.com/karlhiramoto" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all" title="GitHub">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/karlhiramoto" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all" title="LinkedIn">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/karlhiramoto" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all" title="X (Twitter)">
                      <X className="w-6 h-6" />
                    </a>
                    <a href="https://bsky.app/profile/karlh.bsky.social" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all" title="Bluesky">
                      <Cloud className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/karlhiramoto/" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all" title="Instagram">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600 to-blue-600 rounded-[40px] blur-2xl opacity-20 animate-pulse" />
                  <div className="absolute inset-0 bg-zinc-900 rounded-[32px] rotate-6 border border-zinc-800 -z-10" />
                  
                  {/* Headshot Image */}
                  <div className="w-full h-full rounded-[32px] overflow-hidden border-2 border-zinc-800 shadow-2xl relative bg-zinc-900">
                    <img 
                      src="/images/karl2.png" 
                      alt="Karl Hiramoto" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Status</div>
                      <div className="text-xs font-bold text-white">Innovating @ Google</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
          </motion.div>
        </section>

        {/* About / Timeline Section */}
        <section id="about" className="py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                A timeline of technical evolution, from embedded systems to AI-driven security.
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {TIMELINE.map((item, idx) => (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2 z-10 border-4 border-[#0d0d0d] hidden md:block" />

                    {/* Content Card */}
                    <div className="w-full md:w-[45%] bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-orange-500/50 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                          {item.year}
                        </span>
                        <div className="flex gap-2">
                          {item.tags?.map(tag => (
                            <span key={tag} className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-zinc-400 font-medium mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-zinc-600" />
                        {item.company}
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Specialized technical skills developed through years of hands-on experience and open source contribution.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-orange-500/50 hover:bg-zinc-800 transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-sm">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-zinc-500 max-w-xl">
                  A selection of open source contributions and personal technical ventures.
                </p>
              </div>
              <a 
                href="https://github.com/karlhiramoto" 
                className="text-orange-500 font-bold flex items-center gap-2 hover:underline"
              >
                View all on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col"
                >
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-zinc-800 rounded-xl">
                        <Terminal className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-8 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-black rounded-full blur-[100px]" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                  Let's connect and <br /> build something great.
                </h2>
                <p className="text-orange-100 text-lg md:text-xl max-w-xl mx-auto mb-12">
                  Find me across the web or reach out via LinkedIn.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a href="https://linkedin.com/in/karlhiramoto" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-orange-700/50 hover:bg-orange-700 text-white rounded-2xl flex items-center justify-center transition-all" title="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/karlhiramoto" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-orange-700/50 hover:bg-orange-700 text-white rounded-2xl flex items-center justify-center transition-all" title="GitHub">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://x.com/karlhiramoto" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-orange-700/50 hover:bg-orange-700 text-white rounded-2xl flex items-center justify-center transition-all" title="X (Twitter)">
                    <X className="w-6 h-6" />
                  </a>
                  <a href="https://bsky.app/profile/karlh.bsky.social" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-orange-700/50 hover:bg-orange-700 text-white rounded-2xl flex items-center justify-center transition-all" title="Bluesky">
                    <Cloud className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/karlhiramoto/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-orange-700/50 hover:bg-orange-700 text-white rounded-2xl flex items-center justify-center transition-all" title="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Karl Hiramoto. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://linkedin.com/in/karlhiramoto" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
