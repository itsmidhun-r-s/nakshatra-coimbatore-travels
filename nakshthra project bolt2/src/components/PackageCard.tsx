import { Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import type { Package } from '../lib/data';
import { whatsappLink } from '../lib/site';
import './PackageCard.css';

export default function PackageCard({ pkg }: { pkg: Package }) {
  const message = `Hi Nakshatra Coimbatore Travels, I am interested in the "${pkg.title}" package (${pkg.duration}). Please share the price and itinerary.`;
  return (
    <article className="package-card">
      <div className="package-card-media">
        <img
          src={pkg.image}
          alt={`${pkg.from} to ${pkg.to} travel package — ${pkg.duration}`}
          loading="lazy"
        />
        <div className="package-card-overlay" />
        <span className="package-card-duration">
          <Clock className="w-3.5 h-3.5" strokeWidth={2.4} />
          {pkg.duration}
        </span>
        <div className="package-card-route">
          <span className="package-card-route-from">{pkg.from}</span>
          <ArrowRight className="w-4 h-4 package-card-route-arrow" />
          <span className="package-card-route-to">{pkg.to}</span>
        </div>
      </div>
      <div className="package-card-body">
        <h3 className="package-card-title">{pkg.title}</h3>
        <p className="package-card-desc">{pkg.description}</p>
        <ul className="package-card-highlights">
          {pkg.highlights.map((h) => (
            <li key={h}>
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.2} />
              {h}
            </li>
          ))}
        </ul>
        <div className="package-card-footer">
          <div>
            <span className="package-card-price-label">Pricing</span>
            <span className="package-card-price-value">Contact for Price</span>
          </div>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="package-card-wa"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
