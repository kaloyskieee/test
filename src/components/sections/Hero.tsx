import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Sparkles, Code2, Terminal, Cpu, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const terminalLines = [
  { text: '$ whoami', delay: 0.8, type: 'cmd' as const },
  { text: '> IT student & aspiring developer', delay: 1.2, type: 'out' as const },
  { text: '$ cat skills.json', delay: 1.6, type: 'cmd' as const },
  { text: '> { "frontend": ["React", "TS"], "backend": ["Node"] }', delay: 2.0, type: 'out' as const },
  { text: '$ echo "Let\'s build something great"', delay: 2.4, type: 'cmd' as const },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prefersReducedMotion]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid animate-grid-pan opacity-40" />
      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050508_75%)]" />

      {/* Floating orbs with parallax */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]"
        animate={prefersReducedMotion ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: prefersReducedMotion ? 0 : mousePos.x * 30,
          y: prefersReducedMotion ? 0 : mousePos.y * 20,
        }}
      />
      <motion.div
        className="absolute right-[15%] top-[30%] h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]"
        animate={prefersReducedMotion ? {} : { x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: prefersReducedMotion ? 0 : mousePos.x * -25,
          y: prefersReducedMotion ? 0 : mousePos.y * -15,
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={prefersReducedMotion ? {} : { x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mouse-following glow */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-accent-500/[0.07] blur-[80px] transition-transform duration-300 ease-out"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${mousePos.x * 80}px), calc(-50% + ${mousePos.y * 80}px))`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Turning Ideas Into
            <br />
            <span className="gradient-text">Digital Experiences.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg text-balance"
          >
            {personalInfo.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToProjects();
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-500 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:shadow-accent-500/50 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Explore My Work
              <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="group inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </motion.div>

          {/* Social proof quick links */}
          <motion.div variants={item} className="mt-8 flex items-center gap-6 text-gray-500">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <span className="h-4 w-px bg-white/10" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <span className="h-4 w-px bg-white/10" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="transition-colors hover:text-white"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Animated terminal visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="mt-14 w-full max-w-lg"
        >
          <div className="relative rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-md shadow-2xl shadow-black/40">
            {/* Glow behind terminal */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-500/10 to-blue-500/5 blur-xl" />
            {/* Terminal header */}
            <div className="relative flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-gray-500">developer@portfolio: ~</span>
            </div>
            {/* Terminal body */}
            <div className="relative p-5 text-left font-mono text-sm">
              {terminalLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : line.delay, duration: 0.3 }}
                  className={line.type === 'cmd' ? 'text-gray-300' : 'text-accent-400/80'}
                >
                  {line.text}
                  {line.type === 'cmd' && !prefersReducedMotion && i === terminalLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 inline-block"
                    >
                      ▋
                    </motion.span>
                  )}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-gray-300 focus:outline-none focus-visible:text-gray-300"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Decorative floating icons */}
      <motion.div
        className="absolute right-[6%] top-[18%] hidden md:block"
        animate={prefersReducedMotion ? {} : { y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Code2 size={22} className="text-accent-400/60" />
        </div>
      </motion.div>
      <motion.div
        className="absolute left-[8%] bottom-[20%] hidden md:block"
        animate={prefersReducedMotion ? {} : { y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Terminal size={22} className="text-blue-400/60" />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[12%] bottom-[25%] hidden md:block"
        animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Cpu size={22} className="text-cyan-400/60" />
        </div>
      </motion.div>

      {/* Sparkle accent */}
      <motion.div
        className="absolute right-[8%] top-[15%]"
        animate={prefersReducedMotion ? {} : { opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkles size={24} className="text-accent-400/50" />
      </motion.div>
    </section>
  );
}
