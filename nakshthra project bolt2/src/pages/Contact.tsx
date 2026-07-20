import { useState, type FormEvent } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { site, whatsappLink } from '../lib/site';
import './Contact.css';
import contactBanner from "../assets/images/services/tour-package.jpg";

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState('2');
  const [message, setMessage] = useState('');

  const waMessage = `Hi Nakshatra Coimbatore Travels, I have an enquiry.%0A%0A• Name: ${name || '—'}%0A• Phone: ${phone || '—'}%0A• Destination: ${destination || '—'}%0A• Travel date: ${date || 'Flexible'}%0A• Travellers: ${travellers}%0A• Message: ${message || '—'}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(waMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo
        title="Contact Us | Nakshatra Coimbatore Travels"
        description={`Contact Nakshatra Coimbatore Travels at ${site.phoneDisplay}. Open 24 hours near Sulur, Ravathur, Coimbatore. WhatsApp booking and phone support available.`}
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title={<>Get in Touch with Us</>}
        subtitle="We are open 24 hours, 7 days a week. Reach us on WhatsApp or phone for instant booking support."
        breadcrumb="Contact"
        background={contactBanner}
      />

      {/* CONTACT CARDS */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <ScrollReveal className="contact-card-wrap">
              <a href={site.tel} className="contact-card contact-card-gold">
                <span className="contact-card-icon">
                  <Phone className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="contact-card-label">Call Us</span>
                <span className="contact-card-value">{site.phoneDisplay}</span>
                <span className="contact-card-sub">Tap to call — open 24 hours</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={1} className="contact-card-wrap">
              <a
                href={whatsappLink('Hi Nakshatra Coimbatore Travels, I want to book a trip')}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-card-emerald"
              >
                <span className="contact-card-icon">
                  <MessageCircle className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="contact-card-label">WhatsApp</span>
                <span className="contact-card-value">+91 73739 87383</span>
                <span className="contact-card-sub">Fastest way to get a quote</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={2} className="contact-card-wrap">
              <div className="contact-card contact-card-navy">
                <span className="contact-card-icon">
                  <MapPin className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="contact-card-label">Visit Us</span>
                <span className="contact-card-value">Ravathur, Coimbatore</span>
                <span className="contact-card-sub">{site.address.full}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3} className="contact-card-wrap">
              <div className="contact-card contact-card-teal">
                <span className="contact-card-icon">
                  <Clock className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="contact-card-label">Working Hours</span>
                <span className="contact-card-value">{site.hours}</span>
                <span className="contact-card-sub">7 days a week, all holidays</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <ScrollReveal className="contact-form-wrap">
            <span className="contact-form-eyebrow">Enquiry Form</span>
            <h2 className="contact-form-title">Send Us a Booking Enquiry</h2>
            <p className="contact-form-text">
              Fill in the details below and we will send a custom quote on WhatsApp instantly.
              All fields are used only to prefill your WhatsApp message.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span className="contact-field-label">Your name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arjun Kumar"
                    className="contact-input"
                  />
                </label>
                <label className="contact-field">
                  <span className="contact-field-label">Phone number</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="contact-input"
                  />
                </label>
              </div>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span className="contact-field-label">Destination</span>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Ooty, Tirupati"
                    className="contact-input"
                  />
                </label>
                <label className="contact-field">
                  <span className="contact-field-label">Travel date</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="contact-input"
                  />
                </label>
              </div>
              <div className="contact-form-row contact-form-row-single">
                <label className="contact-field">
                  <span className="contact-field-label">Number of travellers</span>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="contact-input"
                  />
                </label>
              </div>
              <label className="contact-field">
                <span className="contact-field-label">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your trip plans, vehicle preference, budget..."
                  rows={4}
                  className="contact-input contact-textarea"
                />
              </label>
              <button type="submit" className="contact-submit">
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Send on WhatsApp
                <Send className="w-4 h-4 contact-submit-arrow" />
              </button>
              <ul className="contact-form-assurance">
                <li>
                  <CheckCircle2 className="w-4 h-4" /> No spam — we only reply to your enquiry
                </li>
                <li>
                  <CheckCircle2 className="w-4 h-4" /> We never share your details
                </li>
              </ul>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={1} className="contact-map-wrap">
            <span className="contact-form-eyebrow">Find Us</span>
            <h2 className="contact-form-title">Our Coimbatore Location</h2>
            <p className="contact-form-text">
              We are located on Trichy Main Road, Pirivu, near Sulur, Dmart, Ravathur — easy to
              reach from anywhere in Coimbatore.
            </p>
            <div className="contact-map">
              <iframe
                title="Nakshatra Coimbatore Travels location map"
                src="https://www.google.com/maps?q=Sulur,Ravathur,Coimbatore,Tamil%20Nadu%20641402&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="contact-map-info">
              <div className="contact-map-info-item">
                <MapPin className="w-5 h-5" />
                <span>{site.address.full}</span>
              </div>
              <div className="contact-map-info-item">
                <Clock className="w-5 h-5" />
                <span>{site.hours}</span>
              </div>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-directions"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
