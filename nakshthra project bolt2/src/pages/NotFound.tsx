import { Link } from 'react-router-dom';
import { Home as HomeIcon, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import { whatsappLink } from '../lib/site';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Nakshatra Coimbatore Travels"
        description="The page you are looking for could not be found. Explore our Coimbatore tour packages and travel services instead."
        path="/404"
      />
      <section className="not-found">
        <div className="not-found-inner">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-text">
            The page you are looking for may have been moved or no longer exists. Let's get you
            back on the road.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-home">
              <HomeIcon className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href={whatsappLink('Hi Nakshatra Coimbatore Travels, I need help finding something on your website')}
              target="_blank"
              rel="noopener noreferrer"
              className="not-found-wa"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
