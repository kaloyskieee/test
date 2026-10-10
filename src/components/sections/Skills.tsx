import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowOrb from '@/components/ui/GlowOrb';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title={<>Tools I use to build</>}
          description="A growing toolkit of languages, frameworks, and platforms I've explored and use to bring ideas to life."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <GlowOrb className="h-full rounded-2xl">
                  <div className="glass-card glow-border h-full rounded-2xl p-6 transition-colors hover:border-white/15">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/10 text-accent-400">
                        <Icon size={22} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-300 transition-all hover:border-accent-400/30 hover:bg-accent-500/10 hover:text-white"
                        >
                          <span className="text-xs">{skill.icon}</span>
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </GlowOrb>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
