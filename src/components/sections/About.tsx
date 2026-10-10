import { motion } from 'framer-motion';
import { Code2, Coffee, Target } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';

const approachItems = [
  { icon: Code2, label: 'Learn by building' },
  { icon: Target, label: 'Problem-solving mindset' },
  { icon: Coffee, label: 'Curiosity-driven' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={<>The person behind the code</>}
          description="Get to know who I am, how I think, and what drives me to build."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md">
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/20 to-blue-500/10 blur-3xl" />
              {/* Main visual card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8">
                <div className="absolute inset-0 grain opacity-10" />
                {/* Code window mockup */}
                <div className="relative h-full rounded-2xl border border-white/5 bg-ink-950/80 p-6 font-mono text-sm">
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/60" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <span className="h-3 w-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-600">{'// who_am_i.ts'}</p>
                    <p><span className="text-violet-400">const</span> <span className="text-blue-400">developer</span> <span className="text-gray-500">=</span> <span className="text-gray-300">{'{'}</span></p>
                    <p className="pl-4"><span className="text-cyan-400">name</span><span className="text-gray-500">:</span> <span className="text-emerald-400">'IT Student'</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-cyan-400">passion</span><span className="text-gray-500">:</span> <span className="text-emerald-400">'Web Dev'</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-cyan-400">focus</span><span className="text-gray-500">:</span> <span className="text-gray-300">[</span><span className="text-emerald-400">'React'</span><span className="text-gray-500">,</span> <span className="text-emerald-400">'Node'</span><span className="text-gray-300">]</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-cyan-400">learning</span><span className="text-gray-500">:</span> <span className="text-emerald-400">'always'</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-cyan-400">coffee</span><span className="text-gray-500">:</span> <span className="text-amber-400">true</span><span className="text-gray-500">,</span></p>
                    <p><span className="text-gray-300">{'}'}</span></p>
                    <p className="pt-2"><span className="text-violet-400">export</span> <span className="text-gray-500">default</span> <span className="text-blue-400">developer</span><span className="text-gray-500">;</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-400 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Approach tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {approachItems.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300"
                >
                  <Icon size={15} className="text-accent-400" />
                  {label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card glow-border rounded-2xl p-5 text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
