import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  variant?: RevealVariant;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === 'up' ? '' : ` reveal-${variant}`;
  const delayClass = delay ? ` reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal${variantClass}${visible ? ' is-visible' : ''}${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
