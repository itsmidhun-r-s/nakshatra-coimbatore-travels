import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Send,
} from "lucide-react";

import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import Fleet from "../components/Fleet";
import CtaBanner from "../components/CtaBanner";

import { whatsappLink } from "../lib/site";
import { services, vehicles } from "../lib/data";

import "./Services.css";

import serviceBanner from "../assets/images/services/airport-pickup.png";

export default function Services() {
  const [name, setName] = useState("");
  const [service, setService] = useState(
    services[0]?.title ?? ""
  );
  const [vehicle, setVehicle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [notes, setNotes] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanDestination = destination.trim();
    const cleanNotes = notes.trim();
    const travellerCount = Number(travellers);

    if (!cleanName) {
      alert("Please enter your name.");
      return;
    }

    if (!service) {
      alert("Please select a service.");
      return;
    }

    if (!cleanDestination) {
      alert("Please enter your destination.");
      return;
    }

    if (!date) {
      alert("Please select your travel date.");
      return;
    }

    if (
      !travellers ||
      Number.isNaN(travellerCount) ||
      travellerCount < 1
    ) {
      alert("Please enter a valid number of travellers.");
      return;
    }

    const formattedDate = new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const message = `Hi Nakshatra Coimbatore Travels,

I have a service enquiry.

Name: ${cleanName}
Service: ${service}
Vehicle: ${
      vehicle ||
      "Please recommend a suitable vehicle"
    }
Destination: ${cleanDestination}
Travel date: ${formattedDate}
Number of travellers: ${travellers}
Notes: ${cleanNotes || "No special requests"}

Please share the availability, quotation and booking details.`;

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Seo
        title="Travel Services in Coimbatore | Nakshatra Coimbatore Travels"
        description="Book tour packages, outstation travel, airport pickup and drop, pilgrimage trips, family tours, cars, tempo travellers and tourist buses from Coimbatore."
        path="/services"
      />

      <PageHeader
        eyebrow="Our Services"
        title={<>Travel Services from Coimbatore</>}
        subtitle="A complete range of travel services — from customised tour packages to 24-hour airport transfers, pilgrimage tours and group travel."
        breadcrumb="Services"
        background={serviceBanner}
      />

      {/* DETAILED SERVICES */}
      <section className="services-detail-section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Detailed Travel Services"
              subtitle="Each service is fully customisable to your budget, dates and group size. Tap WhatsApp on any card to get a custom quote."
            />
          </ScrollReveal>

          <div className="services-detail-list">
            {services.map(
              (currentService, index) => {
                const serviceMessage = `Hi Nakshatra Coimbatore Travels,

I am interested in your ${currentService.title} service.

Destination:
Travel date:
Number of travellers:
Preferred vehicle:

Please share the details, availability and quotation.`;

                return (
                  <ScrollReveal
                    key={currentService.id}
                    delay={
                      ((index % 2) + 1) as 1 | 2
                    }
                    className="services-detail-card-wrap"
                  >
                    <article
                      className={`services-detail-card ${
                        index % 2 === 1
                          ? "is-reversed"
                          : ""
                      }`}
                    >
                      <div className="services-detail-media">
                        <img
                          src={currentService.image}
                          alt={`${currentService.title} service from Nakshatra Coimbatore Travels`}
                          className="services-detail-image"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="services-detail-body">
                        <h3 className="services-detail-title">
                          {currentService.title}
                        </h3>

                        <p className="services-detail-desc">
                          {
                            currentService.description
                          }
                        </p>

                        <ul className="services-detail-points">
                          {currentService.points.map(
                            (point) => (
                              <li key={point}>
                                <CheckCircle2
                                  size={17}
                                  aria-hidden="true"
                                />

                                <span>{point}</span>
                              </li>
                            )
                          )}
                        </ul>

                        <a
                          href={whatsappLink(
                            serviceMessage
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="services-detail-wa"
                          aria-label={`Enquire about ${currentService.title} on WhatsApp`}
                        >
                          <MessageCircle
                            size={18}
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />

                          <span>
                            Enquire on WhatsApp
                          </span>
                        </a>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* VEHICLE FLEET */}
      <Fleet />

      {/* ENQUIRY FORM */}
      <section className="services-enquiry-section">
        <div className="container services-enquiry-grid">
          <ScrollReveal className="services-enquiry-intro">
            <span className="services-enquiry-eyebrow">
              Quick Enquiry
            </span>

            <h2 className="services-enquiry-title">
              Send a Service Enquiry
            </h2>

            <p className="services-enquiry-text">
              Enter your travel details and continue
              through WhatsApp. Your information is used
              only to prepare the booking message.
            </p>

            <ul className="services-enquiry-benefits">
              <li>
                <CheckCircle2
                  size={20}
                  aria-hidden="true"
                />

                <span>Fast WhatsApp response</span>
              </li>

              <li>
                <CheckCircle2
                  size={20}
                  aria-hidden="true"
                />

                <span>
                  No spam or unwanted calls
                </span>
              </li>

              <li>
                <CheckCircle2
                  size={20}
                  aria-hidden="true"
                />

                <span>
                  Clear and transparent quotation
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            delay={1}
            className="services-enquiry-form-wrap"
          >
            <form
              className="services-enquiry-form"
              onSubmit={handleSubmit}
            >
              <div className="services-enquiry-row">
                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Your name
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="e.g. Arjun Kumar"
                    className="services-enquiry-input"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Service
                  </span>

                  <select
                    value={service}
                    onChange={(event) =>
                      setService(event.target.value)
                    }
                    className="services-enquiry-input"
                    required
                  >
                    {services.map(
                      (currentService) => (
                        <option
                          key={currentService.id}
                          value={
                            currentService.title
                          }
                        >
                          {
                            currentService.title
                          }
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>

              <div className="services-enquiry-row">
                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Vehicle
                  </span>

                  <select
                    value={vehicle}
                    onChange={(event) =>
                      setVehicle(event.target.value)
                    }
                    className="services-enquiry-input"
                  >
                    <option value="">
                      Recommend a suitable vehicle
                    </option>

                    {vehicles.map(
                      (currentVehicle) => (
                        <option
                          key={currentVehicle.id}
                          value={`${currentVehicle.name} - ${currentVehicle.capacity}`}
                        >
                          {currentVehicle.name} -{" "}
                          {
                            currentVehicle.capacity
                          }
                        </option>
                      )
                    )}
                  </select>
                </label>

                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Destination
                  </span>

                  <input
                    type="text"
                    value={destination}
                    onChange={(event) =>
                      setDestination(
                        event.target.value
                      )
                    }
                    placeholder="e.g. Ooty, Tirupati"
                    className="services-enquiry-input"
                    required
                  />
                </label>
              </div>

              <div className="services-enquiry-row">
                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Travel date
                  </span>

                  <input
                    type="date"
                    value={date}
                    min={today}
                    onChange={(event) =>
                      setDate(event.target.value)
                    }
                    className="services-enquiry-input"
                    required
                  />
                </label>

                <label className="services-enquiry-field">
                  <span className="services-enquiry-label">
                    Number of travellers
                  </span>

                  <input
                    type="number"
                    min="1"
                    max="54"
                    value={travellers}
                    onChange={(event) =>
                      setTravellers(
                        event.target.value
                      )
                    }
                    className="services-enquiry-input"
                    required
                  />
                </label>
              </div>

              <label className="services-enquiry-field services-enquiry-field-full">
                <span className="services-enquiry-label">
                  Notes (optional)
                </span>

                <textarea
                  value={notes}
                  onChange={(event) =>
                    setNotes(event.target.value)
                  }
                  placeholder="Pickup location, return date, luggage or other special requests"
                  className="services-enquiry-input services-enquiry-textarea"
                  rows={4}
                />
              </label>

              <button
                type="submit"
                className="services-enquiry-submit"
              >
                <MessageCircle
                  size={20}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />

                <span>Send on WhatsApp</span>

                <Send
                  size={17}
                  className="services-enquiry-arrow"
                  aria-hidden="true"
                />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to Book Your Coimbatore Trip?"
        subtitle="Open 24 hours with quick WhatsApp booking. Get a customised quotation in minutes."
        waMessage={`Hi Nakshatra Coimbatore Travels,

I want to book a trip.

Destination:
Travel date:
Number of travellers:
Preferred vehicle:

Please share the availability and quotation.`}
      />
    </>
  );
}