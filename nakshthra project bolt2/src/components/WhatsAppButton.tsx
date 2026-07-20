import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../lib/site';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: 'solid' | 'soft' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({
  message,
  label = 'Book on WhatsApp',
  variant = 'solid',
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  const variants = {
    solid:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5',
    soft:
      'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200',
    light:
      'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur',
  };
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-shine inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
      {label}
    </a>
  );
}
