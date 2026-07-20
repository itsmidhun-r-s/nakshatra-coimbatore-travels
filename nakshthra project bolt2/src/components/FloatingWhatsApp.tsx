import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { site, whatsappLink } from '../lib/site';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    const tipT = setTimeout(() => setTip(true), 3200);
    const tipHide = setTimeout(() => setTip(false), 11000);
    return () => {
      clearTimeout(t);
      clearTimeout(tipT);
      clearTimeout(tipHide);
    };
  }, []);

  return (
    <div className={`floating-wa ${show ? 'is-visible' : ''}`} aria-hidden={!show}>
      <div className={`floating-wa-tip ${tip ? 'is-visible' : ''}`}>
        <button
          type="button"
          className="floating-wa-tip-close"
          aria-label="Dismiss"
          onClick={() => setTip(false)}
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <p>Need a trip quote? Chat with us on WhatsApp — we reply fast!</p>
      </div>
      <a
        href={whatsappLink('Hi Nakshatra Coimbatore Travels, I want to book a trip')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label={`Chat with ${site.name} on WhatsApp`}
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2.2} />
        <span className="floating-wa-pulse" />
      </a>
    </div>
  );
}
