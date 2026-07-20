import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

import {
  navLinks,
  site,
  whatsappLink,
} from "../lib/site";

import { services } from "../lib/data";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-col-about">
            <Link
              to="/"
              className="footer-logo"
              aria-label={`${site.name} home`}
            >
              <span className="footer-logo-icon">
                <img
                  src="/places/logo.png"
                  alt="Nakshatra Travels logo"
                  className="footer-logo-image"
                />
              </span>

              <span className="footer-logo-text">
                <span className="footer-logo-name">
                  Nakshatra
                </span>

                <span className="footer-logo-sub">
                  Coimbatore Travels
                </span>
              </span>
            </Link>

            <p className="footer-desc">
              Your trusted travel partner in Coimbatore for
              tour packages, outstation travel, airport
              transfers, and pilgrimage tours. Open 24 hours
              with quick WhatsApp booking support.
            </p>

            <div className="footer-badges">
              <span className="footer-badge">
                <Clock size={14} />
                Open 24 Hours
              </span>

              <span className="footer-badge footer-badge-gold">
                Coimbatore Based
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">
              Quick Links
            </h3>

            <ul className="footer-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="footer-link"
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">
              Services
            </h3>

            <ul className="footer-list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="footer-link"
                  >
                    <ChevronRight size={14} />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">
              Get in Touch
            </h3>

            <ul className="footer-contact">
              <li>
                <a
                  href={site.tel}
                  className="footer-contact-link"
                >
                  <span className="footer-contact-icon">
                    <Phone size={16} />
                  </span>

                  <span>
                    <span className="footer-contact-label">
                      Phone
                    </span>

                    <span className="footer-contact-value">
                      {site.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={whatsappLink(
                    "Hi Nakshatra Coimbatore Travels, I want to book a trip"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <span className="footer-contact-icon footer-contact-icon-emerald">
                    <MessageCircle size={16} />
                  </span>

                  <span>
                    <span className="footer-contact-label">
                      WhatsApp
                    </span>

                    <span className="footer-contact-value">
                      +91 73739 87383
                    </span>
                  </span>
                </a>
              </li>

              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={16} />
                </span>

                <span>
                  <span className="footer-contact-label">
                    Address
                  </span>

                  <span className="footer-contact-value">
                    {site.address.full}
                  </span>
                </span>
              </li>

              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Clock size={16} />
                </span>

                <span>
                  <span className="footer-contact-label">
                    Hours
                  </span>

                  <span className="footer-contact-value">
                    {site.hours}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>

          <p className="footer-bottom-meta">
            Travel Agency in Coimbatore &middot; WhatsApp
            Booking Available
          </p>
        </div>
      </div>
    </footer>
  );
}