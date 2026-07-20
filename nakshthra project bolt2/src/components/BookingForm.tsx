import { useState, type FormEvent } from 'react';
import { MessageCircle, MapPin, CalendarDays, Users, Compass, Send, Phone } from 'lucide-react';
import { whatsappLink } from '../lib/site';
import './BookingForm.css';

const tripTypes = [
  'Hill Station',
  'Pilgrimage',
  'Family Trip',
  'Honeymoon',
  'Weekend Trip',
  'Outstation Taxi',
  'Airport Transfer',
  'Group / Corporate',
];

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState('2');
  const [tripType, setTripType] = useState(tripTypes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const message = `
Hi Nakshatra Coimbatore Travels, I want to book a trip.

 Destination: ${destination || 'To be decided'}
 Travel Date: ${date || 'Flexible'}
 Phone Number: ${phoneNumber}
 Travellers: ${travellers}
 Trip Type: ${tripType}

Please share the quote and itinerary.
`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Validate phone number
    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={`booking-form ${compact ? 'is-compact' : ''}`} onSubmit={handleSubmit}>
      <div className="booking-form-grid">
        <label className="booking-field">
          <span className="booking-field-label">
            <MapPin className="w-3.5 h-3.5" /> Destination
          </span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Ooty, Kodaikanal, Tirupati"
            className="booking-input"
          />
        </label>
        <label className="booking-field">
          <span className="booking-field-label">
            <CalendarDays className="w-3.5 h-3.5" /> Travel date
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="booking-input"
          />
        </label>
        <label className="booking-field">
          <span className="booking-field-label">
            <Phone className="w-3.5 h-3.5" /> Phone Number
          </span>
          <input
    type="tel"
    inputMode="numeric"
    pattern="[0-9]{10}"
    maxLength={10}
    value={phoneNumber}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, '');
      if (value.length <= 10) {
        setPhoneNumber(value);
      }
    }}
    placeholder="Enter 10-digit mobile number"
    className="booking-input"
    required
  />
        </label>
        <label className="booking-field">
          <span className="booking-field-label">
            <Users className="w-3.5 h-3.5" /> Travellers
          </span>
          <input
            type="number"
            min="1"
            max="50"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="booking-input"
          />
        </label>
        <label className="booking-field">
          <span className="booking-field-label">
            <Compass className="w-3.5 h-3.5" /> Trip type
          </span>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="booking-input"
          >
            {tripTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" className="booking-submit">
        <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
        Book on WhatsApp
        <Send className="w-4 h-4 booking-submit-arrow" />
      </button>
      <p className="booking-form-note">
        Your details are used only to prefill a WhatsApp message. We never share your data.
      </p>
    </form>
  );
}
