import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Wallet,
  Headphones,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import WhatsAppButton from '../components/WhatsAppButton';
import './About.css';
import aboutImage from "../assets/images/About-image.jpeg";
import aboutBanner from "../assets/images/services/family-trip.png";

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Nakshatra Coimbatore Travels"
        description="Learn about Nakshatra Coimbatore Travels — a 24-hour Coimbatore travel agency offering custom tour packages, outstation travel, airport transfers, and pilgrimage tours."
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        title={<>Your Trusted Coimbatore Travel Partner</>}
        subtitle="Nakshatra Coimbatore Travels is a Coimbatore-based travel agency offering reliable, custom, and affordable travel services 24 hours a day."
        breadcrumb="About Us"
        background={aboutBanner}
      />

      {/* INTRO */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          <ScrollReveal className="about-intro-text">
            <span className="about-intro-eyebrow">Who We Are</span>
            <h2 className="about-intro-title">
              A Local Coimbatore Travel Agency Built on Trust
            </h2>
            <p className="about-intro-para">
              Nakshatra Coimbatore Travels is based near Sulur, Ravathur on Trichy Main Road and
              has been helping travellers explore South India with comfort and confidence. From
              quick weekend getaways to multi-day pilgrimage tours and on-time airport transfers,
              we handle every trip with the same care.
            </p>
            <p className="about-intro-para">
              We believe travel should be simple. That is why we run our entire booking flow on
              WhatsApp — share your destination, dates, and traveller count, and you get a clear,
              custom quote in minutes. No long phone calls, no hidden charges, no surprises.
            </p>
            <ul className="about-intro-list">
              <li>
                <CheckCircle2 className="w-5 h-5" /> Open 24 hours, 7 days a week
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5" /> Coimbatore-based local support
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5" /> Transparent, all-inclusive pricing
              </li>
              <li>
                <CheckCircle2 className="w-5 h-5" /> Experienced, verified drivers
              </li>
            </ul>
            <WhatsAppButton
              message="Hi Nakshatra Coimbatore Travels, I want to know more about your travel services"
              label="Chat with us on WhatsApp"
              size="lg"
            />
          </ScrollReveal>
          <ScrollReveal delay={1} className="about-intro-media">
            <div className="about-intro-img-wrap">
              <img
                src={aboutImage}
                alt="A Local Coimbatore Travel Agency Built on Trust"
                loading="lazy"
              />
              <div className="about-intro-badge">
                <span className="about-intro-badge-num">24/7</span>
                <span className="about-intro-badge-label">Open Hours</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSION VISION PROMISE */}
      <section className="mvp-section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Foundation"
              title="Mission, Vision & Promise"
              subtitle="The principles that guide every trip we plan and every traveller we serve."
            />
          </ScrollReveal>
          <div className="mvp-grid">
            <ScrollReveal className="mvp-card-wrap">
              <div className="mvp-card">
                <span className="mvp-card-icon mvp-card-icon-navy">
                  <Target className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="mvp-card-title">Our Mission</h3>
                <p className="mvp-card-text">
                  To make travel from Coimbatore simple, reliable, and affordable — with quick
                  WhatsApp booking, transparent pricing, and well-maintained vehicles for every
                  traveller.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1} className="mvp-card-wrap">
              <div className="mvp-card">
                <span className="mvp-card-icon mvp-card-icon-teal">
                  <Eye className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="mvp-card-title">Our Vision</h3>
                <p className="mvp-card-text">
                  To be the most trusted travel agency in Coimbatore — known for 24-hour support,
                  custom packages, and genuine care for every trip we handle.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2} className="mvp-card-wrap">
              <div className="mvp-card">
                <span className="mvp-card-icon mvp-card-icon-gold">
                  <HeartHandshake className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="mvp-card-title">Our Promise</h3>
                <p className="mvp-card-text">
                  On-time pickups, honest pricing, and real human support on WhatsApp — before,
                  during, and after every trip. If something goes wrong, we fix it fast.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Stand For"
              title="The Values Behind Every Trip"
            />
          </ScrollReveal>
          <div className="values-grid">
            {[
              { icon: ShieldCheck, title: 'Reliability', text: 'On-time pickups and well-maintained vehicles, every single trip.' },
              { icon: Zap, title: 'Quick Response', text: 'WhatsApp quotes in minutes — no waiting, no long phone calls.' },
              { icon: Wallet, title: 'Fair Pricing', text: 'Transparent, all-inclusive quotes with no hidden charges.' },
              { icon: Headphones, title: '24-Hour Support', text: 'Real humans available any time, day or night, before and during your trip.' },
              { icon: MapPin, title: 'Local Expertise', text: 'Coimbatore-based team that knows the best routes, stops, and stays.' },
              { icon: HeartHandshake, title: 'Genuine Care', text: 'We treat every traveller like family and every trip like our own.' },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={((i % 3) + 1) as 1 | 2 | 3} className="values-card-wrap">
                <div className="values-card">
                  <span className="values-card-icon">
                    <v.icon className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <h3 className="values-card-title">{v.title}</h3>
                  <p className="values-card-text">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Plan Your Next Trip Together"
        subtitle="Message us on WhatsApp or call now — we are open 24 hours and happy to help."
      />
    </>
  );
}
