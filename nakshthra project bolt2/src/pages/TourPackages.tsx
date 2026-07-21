import {
  useMemo,
  useState,
  type SyntheticEvent,
} from "react";

import {
  ImageOff,
  MapPin,
  MessageCircle,
  Package as PackageIcon,
  SlidersHorizontal,
} from "lucide-react";

import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import PackageCard from "../components/PackageCard";
import CtaBanner from "../components/CtaBanner";

import {
  packages,
  coimbatoreTouristPlaces,
  type PackageCategory,
} from "../lib/data";

import { whatsappLink } from "../lib/site";

import "./TourPackages.css";

import tourPackagesBanner from "../assets/images/services/weekend-package.png";

type ActiveCategory = "All" | PackageCategory;

const categories: ActiveCategory[] = [
  "All",
  "Hill Stations",
  "Pilgrimage",
  "Family Trips",
  "Weekend Trips",
  "Honeymoon",
  "Nature Trips",
];

export default function TourPackages() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("All");

  const [failedPlaceImages, setFailedPlaceImages] =
    useState<Record<string, boolean>>({});

  const filteredPackages = useMemo(() => {
    if (activeCategory === "All") {
      return packages;
    }

    return packages.filter((pkg) =>
      pkg.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  const handlePlaceImageError = (
    event: SyntheticEvent<HTMLImageElement>,
    placeId: string
  ) => {
    event.currentTarget.style.display = "none";

    setFailedPlaceImages((current) => ({
      ...current,
      [placeId]: true,
    }));
  };

  return (
    <>
      <Seo
        title="Tour Packages from Coimbatore | Nakshatra Coimbatore Travels"
        description="Browse customised tour packages from Coimbatore to Ooty, Kodaikanal, Tirupati, Madurai, Rameswaram, Valparai, Munnar and other destinations. Explore local Coimbatore sightseeing places, temples, waterfalls, dams and hill stations."
        path="/tour-packages"
      />

      <PageHeader
        eyebrow="Tour Packages"
        title={<>Tour Packages from Coimbatore</>}
        subtitle="Curated itineraries for hill stations, pilgrimage destinations, family holidays, honeymoon trips and Coimbatore local sightseeing — all customisable through WhatsApp."
        breadcrumb="Tour Packages"
        background={tourPackagesBanner}
      />

      {/* TOUR PACKAGE SECTION */}
      <section
        className="packages-page-section"
        aria-labelledby="tour-packages-title"
      >
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Browse Packages"
              title="Find Your Perfect Trip"
              subtitle="Use the filters below to explore packages by category. Tap WhatsApp on any card for a customised price quote."
            />
          </ScrollReveal>

          {/* PACKAGE FILTERS */}
          <ScrollReveal delay={1}>
            <div className="package-filter-shell">
              <div
                className="package-filter-scroll"
                role="tablist"
                aria-label="Tour package categories"
              >
                <button
                  type="button"
                  className="package-filter-settings"
                  aria-label="Package filters"
                  tabIndex={-1}
                >
                  <SlidersHorizontal
                    size={18}
                    aria-hidden="true"
                  />
                </button>

                {categories.map((category) => {
                  const isActive =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`package-filter-button ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() =>
                        setActiveCategory(category)
                      }
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* PACKAGE COUNT */}
          <div
            className="packages-results-meta"
            aria-live="polite"
          >
            <PackageIcon
              size={17}
              aria-hidden="true"
            />

            <span>
              Showing{" "}
              <strong>
                {filteredPackages.length}
              </strong>{" "}
              {filteredPackages.length === 1
                ? "package"
                : "packages"}

              {activeCategory !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <strong>{activeCategory}</strong>
                </>
              )}
            </span>
          </div>

          {/* PACKAGE CARDS */}
          {filteredPackages.length > 0 ? (
            <div className="packages-results-grid">
              {filteredPackages.map(
                (pkg, index) => (
                  <ScrollReveal
                    key={pkg.id}
                    delay={
                      ((index % 3) + 1) as
                        | 1
                        | 2
                        | 3
                    }
                    className="packages-results-card-wrap"
                  >
                    <PackageCard pkg={pkg} />
                  </ScrollReveal>
                )
              )}
            </div>
          ) : (
            <div className="packages-empty">
              <PackageIcon
                size={28}
                aria-hidden="true"
              />

              <p>
                No packages were found in this
                category. Please select another
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* COIMBATORE SIGHTSEEING SECTION */}
      <section
        className="coimbatore-places-section"
        aria-labelledby="coimbatore-places-title"
      >
        <div className="container">
          <ScrollReveal>
            <header className="coimbatore-places-heading">
              <span className="coimbatore-places-eyebrow">
                Coimbatore Sightseeing
              </span>

              <h2 id="coimbatore-places-title">
                Popular Tourist Places Near
                Coimbatore
              </h2>

              <p>
                Explore famous temples,
                waterfalls, dams, nature
                destinations and hill stations
                with customised local sightseeing
                packages from Nakshatra
                Coimbatore Travels.
              </p>
            </header>
          </ScrollReveal>

          <div className="coimbatore-places-grid">
            {coimbatoreTouristPlaces.map(
              (place, index) => {
                const placeMessage = `Hi Nakshatra Coimbatore Travels,

I want to plan a Coimbatore local sightseeing trip.

Place: ${place.name}
Pickup location:
Travel date:
Number of travellers:
Preferred vehicle:

Please share the itinerary, available vehicle options and quotation.`;

                const imageFailed =
                  failedPlaceImages[place.id];

                return (
                  <ScrollReveal
                    key={place.id}
                    delay={
                      ((index % 3) + 1) as
                        | 1
                        | 2
                        | 3
                    }
                    className="coimbatore-place-card-wrap"
                  >
                    <article className="coimbatore-place-card">
                      <div className="coimbatore-place-image-wrap">
                        {!imageFailed && (
                          <img
                            src={place.image}
                            alt={`${place.name} near Coimbatore`}
                            className="coimbatore-place-image"
                            loading="lazy"
                            decoding="async"
                            onError={(event) =>
                              handlePlaceImageError(
                                event,
                                place.id
                              )
                            }
                          />
                        )}

                        {imageFailed && (
                          <div
                            className="coimbatore-place-image-fallback"
                            aria-label={`${place.name} image unavailable`}
                          >
                            <ImageOff
                              size={34}
                              aria-hidden="true"
                            />

                            <span>
                              Image unavailable
                            </span>
                          </div>
                        )}

                        <div
                          className="coimbatore-place-image-overlay"
                          aria-hidden="true"
                        />

                        <span className="coimbatore-place-category">
                          {place.category}
                        </span>
                      </div>

                      <div className="coimbatore-place-content">
                        <h3>{place.name}</h3>

                        <a
                          href={whatsappLink(
                            placeMessage
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="coimbatore-place-button"
                          aria-label={`Enquire about ${place.name} on WhatsApp`}
                        >
                          <MessageCircle
                            size={17}
                            aria-hidden="true"
                          />

                          <span>Enquire</span>
                        </a>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              }
            )}
          </div>

          <ScrollReveal>
            <div className="coimbatore-places-note">
              <MapPin
                size={21}
                aria-hidden="true"
              />

              <p>
                Local sightseeing packages can be
                customised according to your pickup
                location, available time, number of
                travellers and preferred vehicle.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Plan Your Coimbatore Sightseeing Trip"
        subtitle="Contact us on WhatsApp for local sightseeing packages, vehicle booking and customised travel plans."
        waMessage={`Hi Nakshatra Coimbatore Travels,

I want to plan a Coimbatore local sightseeing trip.

Pickup location:
Travel date:
Number of travellers:
Places I want to visit:
Preferred vehicle:

Please share a customised itinerary and quotation.`}
      />
    </>
  );
}