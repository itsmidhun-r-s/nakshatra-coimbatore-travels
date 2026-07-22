import { useEffect, useState, type SyntheticEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { coimbatoreTouristPlaces } from "../lib/data";
import { site, whatsappLink } from "../lib/site";
import "./SightseeingHero.css";

const SLIDE_DURATION = 5000;

export default function SightseeingHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const totalSlides = coimbatoreTouristPlaces.length;
  const activePlace = coimbatoreTouristPlaces[currentSlide];

  useEffect(() => {
    if (totalSlides <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) =>
        current >= totalSlides - 1 ? 0 : current + 1
      );
    }, SLIDE_DURATION);

    return () => window.clearInterval(intervalId);
  }, [totalSlides]);

  const showPreviousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const showNextSlide = () => {
    setCurrentSlide((current) =>
      current >= totalSlides - 1 ? 0 : current + 1
    );
  };

  const handleImageError = (
    event: SyntheticEvent<HTMLImageElement>,
    placeId: string
  ) => {
    event.currentTarget.style.display = "none";
    setFailedImages((current) => ({ ...current, [placeId]: true }));
  };

  const bookingMessage = `Hi Nakshatra Coimbatore Travels,

I want to plan a Coimbatore sightseeing trip.

Place: ${activePlace?.name ?? "Coimbatore sightseeing"}
Pickup location:
Travel date:
Number of travellers:
Preferred vehicle:

Please share the itinerary, vehicle options and quotation.`;

  if (!totalSlides) return null;

  return (
    <section className="sightseeing-hero" aria-label="Coimbatore sightseeing destinations">
      <div className="sightseeing-hero-slides">
        {coimbatoreTouristPlaces.map((place, index) => {
          const isActive = index === currentSlide;
          const imageFailed = failedImages[place.id];

          return (
            <div
              key={place.id}
              className={`sightseeing-hero-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              {!imageFailed ? (
                <img
                  src={place.image}
                  alt={`${place.name} near Coimbatore`}
                  className="sightseeing-hero-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(event) => handleImageError(event, place.id)}
                />
              ) : (
                <div className="sightseeing-hero-fallback">
                  <ImageOff size={42} aria-hidden="true" />
                  <span>Image unavailable</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="sightseeing-hero-overlay" aria-hidden="true" />

      <div className="container sightseeing-hero-content">
        <div className="sightseeing-hero-copy">
          <span className="sightseeing-hero-eyebrow">
            <MapPin size={15} aria-hidden="true" />
            Coimbatore Sightseeing
          </span>

          <h1>Explore Famous Tourist Places Near Coimbatore</h1>

          <p>
            Discover temples, waterfalls, dams, nature destinations and hill
            stations with customised sightseeing packages from Nakshatra
            Coimbatore Travels.
          </p>

          {activePlace && (
            <div className="sightseeing-hero-place" aria-live="polite">
              <span>Now showing</span>
              <strong>{activePlace.name}</strong>
              <small>{activePlace.category}</small>
            </div>
          )}

          <div className="sightseeing-hero-actions">
            <a
              href={whatsappLink(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="sightseeing-hero-whatsapp"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>Book on WhatsApp</span>
            </a>

            <a href={site.tel} className="sightseeing-hero-call">
              <Phone size={18} aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            type="button"
            className="sightseeing-hero-arrow sightseeing-hero-arrow-left"
            onClick={showPreviousSlide}
            aria-label="Show previous sightseeing destination"
          >
            <ChevronLeft size={25} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="sightseeing-hero-arrow sightseeing-hero-arrow-right"
            onClick={showNextSlide}
            aria-label="Show next sightseeing destination"
          >
            <ChevronRight size={25} aria-hidden="true" />
          </button>

          <div className="sightseeing-hero-dots" aria-label="Choose sightseeing destination">
            {coimbatoreTouristPlaces.map((place, index) => (
              <button
                key={place.id}
                type="button"
                className={`sightseeing-hero-dot ${index === currentSlide ? "is-active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show ${place.name}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}