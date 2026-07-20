import { Star, Quote } from 'lucide-react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  location: string;
  trip: string;
  rating: number;
  text: string;
  initials: string;
}

export default function TestimonialCard({
  name,
  location,
  trip,
  rating,
  text,
  initials,
}: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <Quote className="testimonial-card-quote" />
      <div className="testimonial-card-stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4" fill="#c8902b" stroke="#c8902b" />
        ))}
      </div>
      <p className="testimonial-card-text">{text}</p>
      <div className="testimonial-card-meta">
        <div className="testimonial-card-avatar">{initials}</div>
        <div>
          <p className="testimonial-card-name">{name}</p>
          <p className="testimonial-card-loc">
            {location} &middot; {trip}
          </p>
        </div>
      </div>
    </article>
  );
}
