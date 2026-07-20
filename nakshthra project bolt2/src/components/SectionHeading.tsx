import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      {eyebrow && (
        <span
          className={`section-heading-eyebrow inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3.5 py-1.5 rounded-full ${
            light ? 'bg-white/10 text-gold-300' : 'bg-gold-100 text-gold-700'
          }`}
        >
          <span className="section-heading-eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        } ${center ? 'heading-underline-center' : 'heading-underline'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-navy-100' : 'text-navy-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
