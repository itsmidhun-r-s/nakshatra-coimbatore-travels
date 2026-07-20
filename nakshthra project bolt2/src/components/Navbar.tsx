import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import {
  navLinks,
  site,
  whatsappLink,
} from "../lib/site";

import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const toggleButtonRef =
    useRef<HTMLButtonElement | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement | null>(null);

  const bookingMessage = `Hi Nakshatra Coimbatore Travels,

I want to book a trip.

Please share the available vehicles, quotation and booking details.`;

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  /*
   * Add navbar background/shadow after scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * Close menu whenever the page route changes.
   */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /*
   * Prevent the background page from scrolling
   * while the mobile menu is open.
   */
  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  /*
   * Close the menu using the Escape key.
   */
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  /*
   * Focus the close button after opening.
   */
  useEffect(() => {
    if (open) {
      window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }
  }, [open]);

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">
          <Link
  to="/"
  className="navbar-logo"
  aria-label={`${site.name} home`}
  onClick={closeMenu}
>
  <span className="navbar-logo-icon">
  <img
    src="/places/logo.png"
    alt="Nakshatra Travels logo"
    className="navbar-logo-image"
  />
</span>

  <span className="navbar-logo-text">
    <span className="navbar-logo-name">
      Nakshatra
    </span>

    <span className="navbar-logo-sub">
      Coimbatore Travels
    </span>
  </span>
</Link>

          <nav
            className="navbar-links"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar-link ${
                    isActive ? "is-active" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href={site.tel}
              className="navbar-call"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone
                size={17}
                strokeWidth={2.2}
                aria-hidden="true"
              />

              <span>Call Now</span>
            </a>

            <a
              href={whatsappLink(
                bookingMessage
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-whatsapp"
              aria-label="Book a trip on WhatsApp"
            >
              <MessageCircle
                size={17}
                strokeWidth={2.2}
                aria-hidden="true"
              />

              <span>WhatsApp</span>
            </a>

            <button
              ref={toggleButtonRef}
              type="button"
              className="navbar-toggle"
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
            >
              {open ? (
                <X
                  size={25}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  size={25}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          open ? "is-open" : ""
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
        />

        <aside
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-menu-header">
  <Link
  to="/"
  className="mobile-menu-brand"
  onClick={closeMenu}
  aria-label={`${site.name} home`}
>
 <span className="mobile-menu-brand-icon">
  <img
    src="/places/logo.png"
    alt="Nakshatra Travels logo"
    className="mobile-menu-brand-image"
  />
</span>

  <span className="mobile-menu-brand-text">
    <span className="mobile-menu-brand-name">
      Nakshatra
    </span>

    <span className="mobile-menu-brand-sub">
      Coimbatore Travels
    </span>
  </span>
</Link>

  <button
    ref={closeButtonRef}
    type="button"
    onClick={closeMenu}
    aria-label="Close navigation menu"
    className="mobile-menu-close"
    tabIndex={open ? 0 : -1}
  >
    <X
      size={24}
      strokeWidth={2.2}
      aria-hidden="true"
    />
  </button>
</div>

          <nav
            className="mobile-menu-navigation"
            aria-label="Mobile navigation"
          >
            <ul className="mobile-menu-list">
              {navLinks.map(
                (link, index) => (
                  <li
                    key={link.to}
                    className={`mobile-menu-item ${
                      open ? "is-in" : ""
                    }`}
                    style={{
                      animationDelay: open
                        ? `${
                            index * 0.045 +
                            0.08
                          }s`
                        : "0s",
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={closeMenu}
                      tabIndex={open ? 0 : -1}
                      className={({
                        isActive,
                      }) =>
                        `mobile-menu-link ${
                          isActive
                            ? "is-active"
                            : ""
                        }`
                      }
                    >
                      <span>
                        {link.label}
                      </span>

                      <span
                        className="mobile-menu-arrow"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="mobile-menu-cta">
            <a
              href={site.tel}
              className="mobile-menu-call"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              <span className="mobile-cta-icon">
                <Phone
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </span>

              <span className="mobile-cta-text">
                <strong>Call Now</strong>
                <small>
                  {site.phoneDisplay}
                </small>
              </span>
            </a>

            <a
              href={whatsappLink(
                bookingMessage
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-whatsapp"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              <span className="mobile-cta-icon">
                <MessageCircle
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </span>

              <span className="mobile-cta-text">
                <strong>
                  Book on WhatsApp
                </strong>
                <small>
                  Get a quick response
                </small>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}