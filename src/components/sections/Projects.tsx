import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowOrb from '@/components/ui/GlowOrb';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.accentIcon;
  const isFeatured = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={isFeatured ? 'lg:col-span-2' : ''}
    >
      <GlowOrb className="group h-full rounded-3xl">
        <div className="glass-card glow-border relative h-full overflow-hidden rounded-3xl transition-all duration-300 hover:border-white/20">
          {/* Preview area */}
          <div className={`relative overflow-hidden ${isFeatured ? 'h-56 sm:h-64 lg:h-72' : 'h-44 sm:h-48'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`} />
            <div className="absolute inset-0 bg-grid-fine opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 grain opacity-10" />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

            {/* Browser mockup bar */}
            <div className="absolute left-4 right-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/60 px-3 py-2 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
              <span className="ml-2 h-4 flex-1 rounded bg-white/5" />
            </div>

            {/* Featured badge */}
            {isFeatured && (
              <span className="absolute right-4 top-16 inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-300 backdrop-blur-md">
                <Star size={11} className="fill-accent-300" />
                Featured
              </span>
            )}

            {/* Center icon with hover scale */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-shadow group-hover:shadow-lg group-hover:shadow-accent-500/20"
              >
                <Icon size={28} className="text-white" />
              </motion.div>
            </div>

            {/* Project number */}
            <span className="absolute bottom-4 left-4 font-mono text-xs font-medium text-white/30">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors hover:border-accent-400/20 hover:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-5">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
              >
                View Project
                <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
              >
                <Github size={15} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </GlowOrb>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Things I've built</>}
          description="A selection of projects that showcase my skills and passion for building useful digital products. Replace these placeholders with your real work."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
