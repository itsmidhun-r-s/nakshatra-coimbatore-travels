import { Helmet } from 'react-helmet-async';
import { site } from '../lib/site';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  faqSchema?: { question: string; answer: string }[];
}

export default function Seo({ title, description, path = '', faqSchema }: SeoProps) {
  const canonical = `https://nakshatracoimbatoretravels.com${path}`;

  const travelAgencySchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.name,
    telephone: site.phoneRaw,
    url: canonical,
    image: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg',
    priceRange: '₹₹',
    openingHours: 'Mo-Su 00:00-24:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.line1 + ', ' + site.address.line2,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: 'IN',
    },
    areaServed: site.serviceAreas,
  };

  const faqSchemaObj = faqSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchema.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(travelAgencySchema)}</script>
      {faqSchemaObj && (
        <script type="application/ld+json">{JSON.stringify(faqSchemaObj)}</script>
      )}
    </Helmet>
  );
}
