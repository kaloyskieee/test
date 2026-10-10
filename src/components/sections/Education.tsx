import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education & Journey"
          title={<>My learning path</>}
          description="The academic background and self-directed learning that shaped my development journey."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-white/10 to-transparent lg:left-1/2" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Pulsing dot */}
                <div className="absolute left-4 top-1 z-10 -translate-x-1/2 lg:left-1/2">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-accent-400/30 bg-ink-900">
                    {!prefersReducedMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400/20" />
                    )}
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-accent-400 to-blue-500" />
                  </span>
                </div>

                {/* Card */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="glass-card glow-border rounded-2xl p-6 transition-colors hover:border-white/15">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono font-medium text-accent-400">
                      <GraduationCap size={13} />
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors hover:border-accent-400/20 hover:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
