import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';

type FormData = { name: string; email: string; subject: string; message: string };
type FormStatus = 'idle' | 'error' | 'success';

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email';
    if (!form.subject.trim()) next.subject = 'Please enter a subject';
    if (!form.message.trim()) next.message = 'Please enter a message';
    else if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    // Note: Connect this to a real submission service (e.g. Supabase, Formspree, or an API route)
    // For now, it opens the user's email client as a fallback.
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Github, label: 'GitHub', value: 'yourusername', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'yourusername', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Gradient glow background */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-500/10 via-blue-500/5 to-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Have an idea? <span className="gradient-text">Let's build something great.</span>
            </>
          }
          description="Whether you want to collaborate, discuss an opportunity, or just say hello — I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass-card glow-border rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold text-white">
                Let's connect
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Feel free to reach out through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to learn.
              </p>

              <div className="mt-8 space-y-4">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-accent-400/30 hover:bg-accent-500/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-blue-500/10 text-accent-400 transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {label}
                      </div>
                      <div className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={15} className="text-accent-400" />
                Available for remote collaboration
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card glow-border rounded-3xl p-8" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Name"
                  value={form.name}
                  onChange={(v) => handleChange('name', v)}
                  error={errors.name}
                  placeholder="John Doe"
                />
                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>
              <div className="mt-5">
                <FormField
                  label="Subject"
                  value={form.subject}
                  onChange={(v) => handleChange('subject', v)}
                  error={errors.subject}
                  placeholder="Let's work together"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="field-message" className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="field-message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  placeholder="Tell me about your idea or opportunity..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'field-message-error' : undefined}
                  className={`w-full resize-none rounded-xl border bg-ink-950/50 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/10 focus:border-accent-400/50 focus:ring-accent-400/20'
                  }`}
                />
                {errors.message && (
                  <p id="field-message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:shadow-accent-500/40 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:w-auto"
              >
                <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                Send Message
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                  >
                    <CheckCircle2 size={16} />
                    Your email client should now be open. If not, email me directly at {personalInfo.email}.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  >
                    <AlertCircle size={16} />
                    Please fix the errors above and try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
};

function FormField({ label, value, onChange, error, placeholder, type = 'text' }: FormFieldProps) {
  const fieldId = `field-${label.toLowerCase().replace(/\s/g, '')}`;
  const errorId = `${fieldId}-error`;
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-gray-300">{label}</label>
      <input
        id={fieldId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border bg-ink-950/50 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500/50 focus:ring-red-500/30'
            : 'border-white/10 focus:border-accent-400/50 focus:ring-accent-400/20'
        }`}
      />
      {error && <p id={errorId} className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
