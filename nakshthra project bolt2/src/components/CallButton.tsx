import { Phone } from 'lucide-react';
import { site } from '../lib/site';

interface CallButtonProps {
  label?: string;
  variant?: 'solid' | 'outline' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CallButton({
  label = 'Call Now',
  variant = 'outline',
  size = 'md',
  className = '',
}: CallButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  const variants = {
    solid:
      'bg-gold-500 hover:bg-gold-600 text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'bg-white hover:bg-navy-50 text-navy-800 border-2 border-navy-200 hover:border-navy-300',
    light:
      'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur',
  };
  return (
    <a
      href={site.tel}
      className={`btn-shine inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className="w-4 h-4" strokeWidth={2.2} />
      {label}
    </a>
  );
}
