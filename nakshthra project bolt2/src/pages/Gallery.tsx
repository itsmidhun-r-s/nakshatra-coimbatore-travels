import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

import bus1Image from "../assets/vehicles/bus1.png";
import bus2Image from "../assets/vehicles/bus2.png";
import bus3Image from "../assets/vehicles/bus3.png";

import car1Image from "../assets/vehicles/car1.jpeg";
import car2Image from "../assets/vehicles/car2.jpeg";
import car3Image from "../assets/vehicles/car3.jpeg";
import car4Image from "../assets/vehicles/car4.jpeg";
import car5Image from "../assets/vehicles/car5.jpeg";
import car6Image from "../assets/vehicles/car6.jpeg";
import car7Image from "../assets/vehicles/car7.jpeg";

import galleryBanner from "../assets/images/packages/Ooty.png"

import "./Gallery.css";

const galleryImages = [
  car1Image,
  car2Image,
  car3Image,
  car4Image,
  car5Image,
  car6Image,
  car7Image,
  bus1Image,
  bus2Image,
  bus3Image,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Seo
        title="Vehicle Gallery | Nakshatra Coimbatore Travels"
        description="View vehicle photos from Nakshatra Coimbatore Travels."
        path="/gallery"
      />

      <PageHeader
        eyebrow="Our Gallery"
        title={<>Vehicle Gallery</>}
        subtitle="Explore our cars, travellers and tourist buses."
        breadcrumb="Gallery"
        background={galleryBanner}
      />

      <section className="gallery-page-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <ScrollReveal
                key={`${image}-${index}`}
                delay={((index % 2) + 1) as 1 | 2}
                className="gallery-card-wrap"
              >
                <button
                  type="button"
                  className="gallery-photo-button"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Nakshatra Coimbatore Travels vehicle ${index + 1}`}
                    className="gallery-photo"
                    loading="lazy"
                  />

                  <span className="gallery-photo-overlay" />

                  <span className="gallery-photo-zoom" aria-hidden="true">
                    <ZoomIn size={23} />
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={25} />
            </button>

            <img
              src={selectedImage}
              alt="Selected vehicle"
              className="gallery-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}