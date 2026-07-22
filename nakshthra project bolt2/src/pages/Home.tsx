import { useEffect, useState, type SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  Wallet,
  Headphones,
  ArrowRight,
  Share2,
  FileText,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import BookingForm from '../components/BookingForm';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqAccordion from '../components/FaqAccordion';
import CtaBanner from '../components/CtaBanner';
import CallButton from '../components/CallButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { site } from '../lib/site';
import { services, packages, testimonials, faqs } from '../lib/data';
import './Home.css';

import hero7 from "../assets/images/packages/Alleppey.png";
import hero8 from "../assets/images/packages/Ooty.png";
import hero9 from "../assets/images/packages/Kodaikanal.png";
import hero10 from "../assets/images/packages/Munnar.png";
import travelVideo from "../assets/videos/video.mp4";

type HeroImage = {
  src: string;
  position: string;
  alt: string;
};

const heroImages: HeroImage[] = [
  {
    src: "/places/adiyogi.jpg",
    position: "center 38%",
    alt: "Adiyogi Shiva Statue at Isha Yoga Center near Coimbatore",
  },
  {
    src: "/places/siruvani.png",
    position: "center 45%",
    alt: "Siruvani waterfalls near Coimbatore",
  },
  {
    src: "/places/kovai-kutralam.jpg",
    position: "center 45%",
    alt: "Kovai Kutralam waterfalls",
  },
  {
    src: "/places/marudhamalai.png",
    position: "center 40%",
    alt: "Marudhamalai Murugan Temple",
  },
  {
    src: "/places/pollachi.jpeg",
    position: "center 55%",
    alt: "Pollachi tourist destination",
  },
  {
    src: "/places/valparai.jpg",
    position: "center 50%",
    alt: "Valparai hill station",
  },
  {
    src: hero7,
    position: "center",
    alt: "Alleppey tour package",
  },
  {
    src: hero8,
    position: "center",
    alt: "Ooty tour package",
  },
  {
    src: hero9,
    position: "center",
    alt: "Kodaikanal tour package",
  },
  {
    src: hero10,
    position: "center",
    alt: "Munnar tour package",
  },
];




const homeFaqs = faqs.slice(0, 5);

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    heroImages.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });

    const timer = window.setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handleHeroImageError = (
    event: SyntheticEvent<HTMLImageElement>,
  ) => {
    const image = event.currentTarget;

    if (image.src !== hero8) {
      image.src = hero8;
      image.style.objectPosition = 'center';
    }
  };
  return (
    <>
      <Seo
        title="Nakshatra Coimbatore Travels | Travel Agency in Coimbatore"
        description="Nakshatra Coimbatore Travels offers tour packages, outstation trips, airport transfers, and pilgrimage travel in Coimbatore. Open 24 hours with WhatsApp booking."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img
            key={heroImages[currentImage].src}
            src={heroImages[currentImage].src}
            alt=""
            className="hero-bg-image"
            style={{
              objectPosition: heroImages[currentImage].position,
            }}
            onError={handleHeroImageError}
          />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-badge hero-animate-badge">
              <span className="hero-badge-dot" />
              Open 24 Hours &middot; WhatsApp Booking Available
            </span>

            <h1 className="hero-title hero-animate-title">
              Trusted Travel Agency in{' '}
              <span className="text-gradient-gold">Coimbatore</span>
            </h1>

            <p className="hero-text hero-animate-text">
              Nakshatra Coimbatore Travels provides reliable travel services,
              custom tour packages, outstation trips, airport transfers, and
              pilgrimage travel from Coimbatore. We are open 24 hours and
              provide quick WhatsApp booking support.
            </p>

            <div className="hero-actions hero-animate-actions">
              <WhatsAppButton
                message="Hi Nakshatra Coimbatore Travels, I want to book a trip"
                label="Book on WhatsApp"
                size="lg"
              />
              <CallButton label="Call Now" variant="light" size="lg" />
            </div>

            <div className="hero-trust hero-animate-trust">
              <div className="hero-trust-item">
                <span className="hero-trust-num">500+</span>
                <span className="hero-trust-label">Happy Travellers</span>
              </div>

              <span className="hero-trust-divider" />

              <div className="hero-trust-item">
                <span className="hero-trust-num">20+</span>
                <span className="hero-trust-label">Destinations</span>
              </div>

              <span className="hero-trust-divider" />

              <div className="hero-trust-item">
                <span className="hero-trust-num">24/7</span>
                <span className="hero-trust-label">Support</span>
              </div>
            </div>
          </div>

          <div className="hero-booking-wrap hero-animate-booking">
            <div className="hero-booking">
              <div className="hero-booking-head">
                <span className="hero-booking-eyebrow">Quick Booking</span>
                <h2 className="hero-booking-title">Plan Your Trip</h2>
                <p className="hero-booking-sub">
                  Share your trip details and get a custom quote on WhatsApp
                  instantly.
                </p>
              </div>

              <BookingForm />
            </div>
          </div>
        </div>

        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="quick-info" aria-label="Quick information">
        <div className="quick-info-inner">
          <ScrollReveal className="quick-info-card">
            <span className="quick-info-icon quick-info-icon-gold">
              <Phone className="w-5 h-5" />
            </span>
            <div>
              <span className="quick-info-label">Phone</span>
              <span className="quick-info-value">{site.phoneDisplay}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1} className="quick-info-card">
            <span className="quick-info-icon quick-info-icon-teal">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <span className="quick-info-label">Hours</span>
              <span className="quick-info-value">{site.hours}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2} className="quick-info-card">
            <span className="quick-info-icon quick-info-icon-navy">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <span className="quick-info-label">Location</span>
              <span className="quick-info-value">Near Sulur, Ravathur, Coimbatore</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={3} className="quick-info-card">
            <span className="quick-info-icon quick-info-icon-emerald">
              <MessageCircle className="w-5 h-5" />
            </span>
            <div>
              <span className="quick-info-label">Booking</span>
              <span className="quick-info-value">WhatsApp &amp; phone support</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT / WHY CHOOSE */}
      <section className="why-section" id="why">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Choose Nakshatra Coimbatore Travels"
              subtitle="A Coimbatore-based travel agency focused on reliable service, transparent pricing, and 24-hour WhatsApp support for every trip."
            />
          </ScrollReveal>
          <div className="why-grid">
            {[
              {
                icon: ShieldCheck,
                title: 'Local Coimbatore Support',
                text: 'Based near Sulur, Ravathur — we know Coimbatore routes, drivers, and stays inside out for a smooth trip.',
                color: 'navy',
              },
              {
                icon: Zap,
                title: 'Fast WhatsApp Booking',
                text: 'Send a message and get a custom quote in minutes. No long calls, no waiting — just quick answers.',
                color: 'emerald',
              },
              {
                icon: Wallet,
                title: 'Custom Budget Packages',
                text: 'Every package is tailored to your budget and dates — from budget-friendly to premium stays.',
                color: 'gold',
              },
              {
                icon: Headphones,
                title: '24-Hour Assistance',
                text: 'Open 24 hours, 7 days a week — airport transfers, emergency travel, and on-trip support anytime.',
                color: 'teal',
              },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={(i + 1) as 1 | 2 | 3 | 4} className="why-card-wrap">
                <div className="why-card">
                  <span className={`why-card-icon why-card-icon-${f.color}`}>
                    <f.icon className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <h3 className="why-card-title">{f.title}</h3>
                  <p className="why-card-text">{f.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Our Travel Services"
              subtitle="From hill station holidays to pilgrimage tours and airport transfers — everything you need to travel from Coimbatore."
            />
          </ScrollReveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.id} delay={(i + 1) as 1 | 2 | 3 | 4} className="services-card-wrap">
                <ServiceCard service={s} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="services-cta">
              <Link to="/services" className="services-cta-link">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* POPULAR PACKAGES */}
      <section className="packages-section" id="packages">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Popular Packages"
              title="Popular Tour Packages from Coimbatore"
              subtitle="Handpicked itineraries for the most loved destinations. Tap WhatsApp on any card for a custom price quote."
            />
          </ScrollReveal>
          <div className="packages-grid">
            {packages.slice(0, 6).map((pkg, i) => (
              <ScrollReveal
                key={pkg.id}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="packages-card-wrap"
              >
                <PackageCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="packages-cta">
              <Link to="/tour-packages" className="packages-cta-link">
                Explore all tour packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
{/* VIDEO SECTION */}
      <section className="travel-video-section" id="travel-video">
  <div className="container">
    <ScrollReveal>
      <SectionHeading
        eyebrow="Travel Video"
        title="Experience Our Travel Adventures"
        subtitle="Take a glimpse of the beautiful destinations and memorable journeys with Nakshatra Coimbatore Travels."
      />
    </ScrollReveal>

    <ScrollReveal delay={1}>
      <div className="travel-video-wrap">
        <video
    className="travel-video"
    autoPlay
    muted
    loop
    playsInline
  >
          <source src={travelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={2}>
      <div className="travel-video-cta">
        <WhatsAppButton
          message="Hi Nakshatra Coimbatore Travels, I would like to know more about your tour packages."
          label="Book Your Trip"
          size="lg"
        />
      </div>
    </ScrollReveal>
  </div>
</section>

      {/* HOW BOOKING WORKS */}
      <section className="how-section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Simple Process"
              title="How Booking Works"
              subtitle="Three easy steps from enquiry to departure — all handled on WhatsApp."
              light
            />
          </ScrollReveal>
          <div className="how-grid">
            {[
              {
                step: '01',
                icon: Share2,
                title: 'Share Trip Details',
                text: 'Send your destination, dates, traveller count, and trip type on WhatsApp.',
              },
              {
                step: '02',
                icon: FileText,
                title: 'Receive Custom Quote',
                text: 'We share a tailored itinerary and transparent all-inclusive price quote.',
              },
              {
                step: '03',
                icon: CheckCircle2,
                title: 'Confirm on WhatsApp',
                text: 'Confirm the plan, make the advance, and get driver details before departure.',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={(i + 1) as 1 | 2 | 3} className="how-card-wrap">
                <div className="how-card">
                  <span className="how-card-step">{s.step}</span>
                  <span className="how-card-icon">
                    <s.icon className="w-7 h-7" strokeWidth={2} />
                  </span>
                  <h3 className="how-card-title">{s.title}</h3>
                  <p className="how-card-text">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Traveller Stories"
              title="What Our Travellers Say"
              subtitle="Real feedback from customers who travelled with us from Coimbatore."
            />
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={t.name}
                delay={(i + 1) as 1 | 2 | 3}
                className="testimonials-card-wrap"
              >
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="faq-preview-section">
        <div className="container faq-preview-grid">
          <ScrollReveal className="faq-preview-intro">
            <span className="faq-preview-eyebrow">FAQ</span>
            <h2 className="faq-preview-title">Questions Before You Book?</h2>
            <p className="faq-preview-text">
              Quick answers to the most common questions our Coimbatore travellers ask before
              booking a trip with us.
            </p>
            <Link to="/faq" className="faq-preview-link">
              See all FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={1} className="faq-preview-accordion">
            <FaqAccordion items={homeFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBanner
        title="Ready to Plan Your Next Trip from Coimbatore?"
        subtitle="Message us on WhatsApp or call now — we are open 24 hours and reply fast with a custom quote."
      />
    </>
  );
}