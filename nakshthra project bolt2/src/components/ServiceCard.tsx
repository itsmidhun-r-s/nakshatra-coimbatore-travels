import {
  ArrowRight,
  CalendarDays,
  Car,
  Church,
  MapPinned,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ServiceItem } from "../lib/data";
import "./ServiceCard.css";

const iconMap: Record<string, LucideIcon> = {
  MapPinned,
  Car,
  Users,
  Church,
  Plane,
  CalendarDays,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? MapPinned;

  return (
    <article className="service-card">
      <div
        className="service-card-background"
        style={{
          backgroundImage: `url("${service.image}")`,
        }}
        aria-hidden="true"
      />

      <div
        className="service-card-overlay"
        aria-hidden="true"
      />

      <div className="service-card-content">
        <div className="service-card-icon">
          <Icon
            size={29}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <h3 className="service-card-title">
          {service.title}
        </h3>

        <p className="service-card-desc">
          {service.short}
        </p>

        <Link
          to="/services"
          className="service-card-link"
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Learn more</span>

          <ArrowRight
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}