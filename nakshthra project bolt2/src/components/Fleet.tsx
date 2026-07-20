import {
  CheckCircle2,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

import {
  vehicles,
  type VehicleCategory,
} from "../lib/data";

import { whatsappLink } from "../lib/site";

import "./Fleet.css";

const getCategoryLabel = (
  category: VehicleCategory
): string => {
  switch (category) {
    case "Sedan":
      return "Comfort Sedan";

    case "MPV":
      return "Family MPV";

    case "Premium MPV":
      return "Premium MPV";

    case "Tempo Traveller":
      return "Group Traveller";

    case "Coach Bus":
      return "Mini Coach";

    case "Tourist Bus":
      return "Large Tourist Bus";

    default:
      return category;
  }
};

export default function Fleet() {
  return (
    <section
      className="fleet-section"
      id="fleet"
      aria-labelledby="fleet-title"
    >
      <div className="fleet-container">
        <header className="fleet-heading">
          <span className="fleet-eyebrow">
            Our Fleet
          </span>

          <h2 id="fleet-title">
            Cars and Buses for Every Journey
          </h2>

          <p>
            Choose from comfortable sedans, spacious
            MPVs, tempo travellers and tourist buses for
            airport transfers, local travel, family
            trips, pilgrimage tours and group journeys
            from Coimbatore.
          </p>
        </header>

        <div className="fleet-grid">
          {vehicles.map((vehicle) => {
            const categoryLabel =
              getCategoryLabel(vehicle.category);

            const message = `Hi Nakshatra Coimbatore Travels,

I would like to enquire about booking a vehicle.

Vehicle: ${vehicle.name}
Seating capacity: ${vehicle.capacity}
Vehicle category: ${categoryLabel}

Destination:
Travel date:
Pickup location:
Number of travellers:

Please share the availability, quotation and booking details.`;

            return (
              <article
                className="fleet-card"
                key={vehicle.id}
              >
                <div className="fleet-visual">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} available for booking at Nakshatra Coimbatore Travels`}
                    className="fleet-vehicle-image"
                    loading="lazy"
                    decoding="async"
                  />

                  <div
                    className="fleet-image-shade"
                    aria-hidden="true"
                  />

                  <span className="fleet-category">
                    {categoryLabel}
                  </span>
                </div>

                <div className="fleet-card-content">
                  <h3>{vehicle.name}</h3>

                  <div className="fleet-capacity">
                    <Users
                      size={17}
                      aria-hidden="true"
                    />

                    <span>{vehicle.capacity}</span>
                  </div>

                  <p className="fleet-description">
                    {vehicle.description}
                  </p>

                  <div className="fleet-suitable-heading">
                    Suitable for
                  </div>

                  <ul className="fleet-suitable-list">
                    {vehicle.suitableFor.map(
                      (item) => (
                        <li
                          key={`${vehicle.id}-${item}`}
                        >
                          <CheckCircle2
                            size={15}
                            aria-hidden="true"
                          />

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fleet-book-button"
                  aria-label={`Book ${vehicle.name} on WhatsApp`}
                >
                  <MessageCircle
                    size={18}
                    aria-hidden="true"
                  />

                  <span>Book on WhatsApp</span>

                  <Send
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>

        <div className="fleet-note">
          <div className="fleet-note-content">
            <h3>
              Need help choosing the right vehicle?
            </h3>

            <p>
              Share your destination, travel date and
              number of travellers. We will recommend a
              suitable car, tempo traveller or tourist
              bus for your journey.
            </p>
          </div>

          <a
            href={whatsappLink(`Hi Nakshatra Coimbatore Travels,

I need help choosing a vehicle for my trip.

Destination:
Travel date:
Pickup location:
Number of travellers:
Trip type:
Luggage details:

Please recommend a suitable vehicle and share the quotation.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="fleet-help-button"
          >
            <MessageCircle
              size={18}
              aria-hidden="true"
            />

            <span>
              Get Vehicle Recommendation
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}