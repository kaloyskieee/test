import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-accent-400">
          <span className="h-px w-8 bg-accent-400/50" />
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
