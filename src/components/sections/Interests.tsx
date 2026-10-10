import { motion } from 'framer-motion';
import { interests } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowOrb from '@/components/ui/GlowOrb';

export default function Interests() {
  return (
    <section id="interests" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Drives Me"
          title={<>Beyond the code</>}
          description="The interests and habits that fuel my creativity and keep me curious."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowOrb className="h-full rounded-2xl">
                  <div className="glass-card glow-border group h-full rounded-2xl p-6 transition-all hover:border-white/15">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/10 text-accent-400 transition-transform group-hover:scale-110">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">
                      {interest.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {interest.description}
                    </p>
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
