import { HelpCircle, MessageCircle, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import CtaBanner from '../components/CtaBanner';
import { site, whatsappLink } from '../lib/site';
import { faqs } from '../lib/data';
import './Faq.css';
import faqBanner from "../assets/images/packages/Valparai.png";

export default function Faq() {
  return (
    <>
      <Seo
        title="FAQ | Nakshatra Coimbatore Travels"
        description="Frequently asked questions about booking, pricing, destinations, vehicles, airport transfers, pilgrimage tours, and 24-hour travel support from Coimbatore."
        path="/faq"
        faqSchema={faqs}
      />
      <PageHeader
        eyebrow="FAQ"
        title={<>Frequently Asked Questions</>}
        subtitle="Quick answers to the most common questions from our Coimbatore travellers. Still have a question? Message us on WhatsApp."
        breadcrumb="FAQ"
        background={faqBanner}
      />

      <section className="faq-page-section">
        <div className="container faq-page-grid">
          <ScrollReveal className="faq-page-aside">
            <div className="faq-page-help">
              <span className="faq-page-help-icon">
                <HelpCircle className="w-7 h-7" strokeWidth={2} />
              </span>
              <h2 className="faq-page-help-title">Still have questions?</h2>
              <p className="faq-page-help-text">
                We are open 24 hours and reply fast on WhatsApp. Reach out anytime — we are
                happy to help you plan your trip.
              </p>
              <a
                href={whatsappLink('Hi Nakshatra Coimbatore Travels, I have a question about booking a trip')}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-page-help-wa"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Ask on WhatsApp
              </a>
              <a href={site.tel} className="faq-page-help-call">
                <Phone className="w-5 h-5" strokeWidth={2.2} />
                {site.phoneDisplay}
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1} className="faq-page-main">
            <SectionHeading
              eyebrow="Questions & Answers"
              title="Everything You Need to Know"
              center={false}
            />
            <div className="faq-page-accordion">
              <FaqAccordion items={faqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to Book Your Trip?"
        subtitle="Get a custom quote on WhatsApp in minutes — we are open 24 hours, 7 days a week."
      />
    </>
  );
}
