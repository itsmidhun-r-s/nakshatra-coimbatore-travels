import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHeader.css';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumb: string;
  background?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  background,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div
        className="page-header-bg"
        style={
          background
            ? { backgroundImage: `url(${background})` }
            : undefined
        }
      />
      <div className="page-header-overlay" />
      <div className="page-header-inner">
        <nav className="page-header-crumb" aria-label="Breadcrumb">
          <Link to="/" className="page-header-crumb-link">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="page-header-crumb-current">{breadcrumb}</span>
        </nav>
        {eyebrow && <span className="page-header-eyebrow">{eyebrow}</span>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
