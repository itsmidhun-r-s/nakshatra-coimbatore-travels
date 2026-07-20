import { Phone, MessageCircle } from 'lucide-react';
import { site, whatsappLink } from '../lib/site';
import './MobileBottomBar.css';

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Quick contact">
      <a href={site.tel} className="mobile-bottom-bar-call">
        <Phone className="w-5 h-5" strokeWidth={2.2} />
        <span>Call Now</span>
        <span className="mobile-bottom-bar-sub">{site.phoneDisplay}</span>
      </a>
      <a
        href={whatsappLink('Hi Nakshatra Coimbatore Travels, I want to book a trip')}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-bar-wa"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
        <span>WhatsApp</span>
        <span className="mobile-bottom-bar-sub">Book a trip</span>
      </a>
    </div>
  );
}
