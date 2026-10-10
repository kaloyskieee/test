import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const socials = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Monogram + name */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-blue-500 font-display text-sm font-bold text-white">
              {personalInfo.monogram}
            </span>
            <span className="font-display text-sm font-semibold text-white">
              {personalInfo.name}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-accent-400/30 hover:bg-accent-500/10 hover:text-accent-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all group-hover:border-accent-400/30 group-hover:bg-accent-500/10">
              <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Designed with curiosity and built with code.
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
