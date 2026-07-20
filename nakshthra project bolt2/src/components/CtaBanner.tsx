import { MessageCircle, Phone } from 'lucide-react';
import { site, whatsappLink } from '../lib/site';
import ScrollReveal from './ScrollReveal';
import './CtaBanner.css';

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  waMessage?: string;
}

export default function CtaBanner({
  title,
  subtitle,
  waMessage = 'Hi Nakshatra Coimbatore Travels, I want to book a trip',
}: CtaBannerProps) {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-inner">
        <ScrollReveal>
          <div className="cta-banner">
            <div className="cta-banner-bg" />
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">{title}</h2>
              {subtitle && <p className="cta-banner-subtitle">{subtitle}</p>}
              <div className="cta-banner-actions">
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-banner-wa"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  Book on WhatsApp
                </a>
                <a href={site.tel} className="cta-banner-call">
                  <Phone className="w-5 h-5" strokeWidth={2.2} />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
