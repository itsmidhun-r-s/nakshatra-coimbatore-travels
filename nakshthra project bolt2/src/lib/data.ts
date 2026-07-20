/* =========================================================
   OLD GALLERY IMAGE IMPORTS
========================================================= */

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

/* =========================================================
   NEW FLEET IMAGE IMPORTS
========================================================= */

import swiftDzireImage from "../assets/cars/swift dzire.png";
import hondaAmazeImage from "../assets/cars/honda amaze.jpg";
import ertigaImage from "../assets/cars/ertiga.png";
import innovaImage from "../assets/cars/innova.jpeg";
import innovaCrystaImage from "../assets/cars/innova crysta.avif";
import tempoTravellerImage from "../assets/cars/tempo traveller.avif";
import coachBusImage from "../assets/cars/22 seat bus.png";
import touristBusImage from "../assets/cars/54 seat bus.png";

/* =========================================================
   SERVICE IMAGE IMPORTS
========================================================= */

import tourPackageImage from "../assets/images/services/tour-package.jpg";
import outstationTravelImage from "../assets/images/services/outstation-travel.jpg";
import familyTripImage from "../assets/images/services/family-trip.png";
import templeTourImage from "../assets/images/services/temple-tour.png";
import airportPickupImage from "../assets/images/services/airport-pickup.png";
import weekendPackageImage from "../assets/images/services/weekend-package.png";

/* =========================================================
   PACKAGE IMAGE IMPORTS
========================================================= */

import ootyImage from "../assets/images/packages/Ooty.png";
import kodaikanalImage from "../assets/images/packages/Kodaikanal.png";
import tirupatiImage from "../assets/images/packages/Tirupati.png";
import maduraiImage from "../assets/images/packages/Madurai.png";
import rameswaramImage from "../assets/images/packages/Rameswaram.png";
import valparaiImage from "../assets/images/packages/Valparai.png";
import munnarImage from "../assets/images/packages/Munnar.png";
import alleppeyImage from "../assets/images/packages/Alleppey.png";
import wayanadImage from "../assets/images/packages/Wayanad.png";


/* =========================================================
   TOUR PACKAGE DATA
========================================================= */

export type PackageCategory =
  | "Hill Stations"
  | "Pilgrimage"
  | "Family Trips"
  | "Weekend Trips"
  | "Honeymoon"
  | "Nature Trips"
  | "Coimbatore Local";

export interface Package {
  id: string;
  title: string;
  from: string;
  to: string;
  image: string;
  description: string;
  duration: string;
  categories: PackageCategory[];
  highlights: string[];
}

export const packages: Package[] = [
  {
    id: "ooty",
    title: "Coimbatore to Ooty",
    from: "Coimbatore",
    to: "Ooty",
    image: ootyImage,
    description:
      "Scenic hill station drive through the Nilgiri Mountains with tea gardens, Doddabetta Peak and botanical gardens.",
    duration: "2 Days / 1 Night",
    categories: [
      "Hill Stations",
      "Family Trips",
      "Nature Trips",
    ],
    highlights: [
      "Doddabetta Peak",
      "Botanical Garden",
      "Tea Estates",
      "Ooty Lake",
    ],
  },
  {
    id: "kodaikanal",
    title: "Coimbatore to Kodaikanal",
    from: "Coimbatore",
    to: "Kodaikanal",
    image: kodaikanalImage,
    description:
      "Visit the Princess of Hill Stations with Coaker’s Walk, Bryant Park, Pillar Rocks and peaceful Kodai Lake views.",
    duration: "3 Days / 2 Nights",
    categories: [
      "Hill Stations",
      "Honeymoon",
      "Nature Trips",
    ],
    highlights: [
      "Kodai Lake",
      "Coaker’s Walk",
      "Pillar Rocks",
      "Bryant Park",
    ],
  },
  {
    id: "tirupati",
    title: "Coimbatore to Tirupati",
    from: "Coimbatore",
    to: "Tirupati",
    image: tirupatiImage,
    description:
      "Comfortable pilgrimage travel to Tirumala Venkateswara Temple with darshan assistance and suitable stay options.",
    duration: "2 Days / 1 Night",
    categories: [
      "Pilgrimage",
      "Family Trips",
    ],
    highlights: [
      "Tirumala Temple",
      "Darshan Support",
      "Comfortable Stay",
      "Safe Travel",
    ],
  },
  {
    id: "madurai",
    title: "Coimbatore to Madurai",
    from: "Coimbatore",
    to: "Madurai",
    image: maduraiImage,
    description:
      "Visit the historic Meenakshi Amman Temple, Thirumalai Nayakkar Palace and the lively heritage streets of Madurai.",
    duration: "2 Days / 1 Night",
    categories: [
      "Pilgrimage",
      "Family Trips",
      "Weekend Trips",
    ],
    highlights: [
      "Meenakshi Temple",
      "Nayakkar Palace",
      "Local Cuisine",
      "Heritage Walk",
    ],
  },
  {
    id: "rameswaram",
    title: "Coimbatore to Rameswaram",
    from: "Coimbatore",
    to: "Rameswaram",
    image: rameswaramImage,
    description:
      "Sacred island pilgrimage covering Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge and Agni Theertham.",
    duration: "3 Days / 2 Nights",
    categories: [
      "Pilgrimage",
      "Family Trips",
    ],
    highlights: [
      "Ramanathaswamy Temple",
      "Dhanushkodi",
      "Pamban Bridge",
      "Agni Theertham",
    ],
  },
  {
    id: "valparai",
    title: "Coimbatore to Valparai",
    from: "Coimbatore",
    to: "Valparai",
    image: valparaiImage,
    description:
      "Explore the Anamalai Hills with scenic hairpin bends, tea estates, waterfalls and wildlife-rich surroundings.",
    duration: "2 Days / 1 Night",
    categories: [
      "Hill Stations",
      "Nature Trips",
      "Weekend Trips",
    ],
    highlights: [
      "40 Hairpin Bends",
      "Tea Estates",
      "Monkey Falls",
      "Aliyar Dam",
    ],
  },
  {
    id: "munnar",
    title: "Coimbatore to Munnar",
    from: "Coimbatore",
    to: "Munnar",
    image:munnarImage,
    description:
      "Enjoy rolling tea-covered hills, Mattupetty Dam, Echo Point and Eravikulam National Park in Kerala.",
    duration: "3 Days / 2 Nights",
    categories: [
      "Hill Stations",
      "Honeymoon",
      "Nature Trips",
    ],
    highlights: [
      "Tea Gardens",
      "Mattupetty Dam",
      "Echo Point",
      "Eravikulam Park",
    ],
  },
  {
    id: "wayanad",
    title: "Coimbatore to Wayanad",
    from: "Coimbatore",
    to: "Wayanad",
    image:wayanadImage,
    description:
      "Discover lush forests, Edakkal Caves, Banasura Sagar Dam and wildlife destinations in Wayanad.",
    duration: "3 Days / 2 Nights",
    categories: [
      "Nature Trips",
      "Family Trips",
      "Weekend Trips",
    ],
    highlights: [
      "Edakkal Caves",
      "Banasura Dam",
      "Wildlife Sanctuary",
      "Pookode Lake",
    ],
  },
  {
    id: "kerala-honeymoon",
    title: "Munnar & Alleppey Honeymoon",
    from: "Coimbatore",
    to: "Munnar & Alleppey",
    image:alleppeyImage,
    description:
      "A romantic honeymoon combination featuring Munnar tea hills and an overnight houseboat stay in Alleppey.",
    duration: "4 Days / 3 Nights",
    categories: [
      "Honeymoon",
      "Hill Stations",
      "Nature Trips",
    ],
    highlights: [
      "Houseboat Stay",
      "Tea Gardens",
      "Backwaters",
      "Candlelight Dinner",
    ],
  },
];
/* =========================================================
   COIMBATORE TOURIST PLACE DATA
========================================================= */

export type TouristPlaceCategory =
  | "City"
  | "Temple"
  | "Nature"
  | "Hill Station";

export interface CoimbatoreTouristPlace {
  id: string;
  name: string;
  category: TouristPlaceCategory;
  image: string;
}

export const coimbatoreTouristPlaces: CoimbatoreTouristPlace[] = [
  {
    id: "adiyogi",
    name: "Adiyogi Shiva Statue",
    category: "Temple",
    image: "/places/adiyogi.jpg",
  },
  {
    id: "isha-yoga-center",
    name: "Isha Yoga Center",
    category: "Temple",
    image: "/places/isha-yoga-center.jpg",
  },
  {
    id: "marudhamalai",
    name: "Marudhamalai Murugan Temple",
    category: "Temple",
    image: "/places/marudhamalai.png",
  },
  {
    id: "perur-temple",
    name: "Perur Pateeswarar Temple",
    category: "Temple",
    image: "/places/perur-temple.jpg",
  },
  {
    id: "kovai-kutralam",
    name: "Kovai Kutralam Falls",
    category: "Nature",
    image: "/places/kovai-kutralam.jpg",
  },
  {
    id: "siruvani",
    name: "Siruvani Waterfalls and Dam",
    category: "Nature",
    image: "/places/siruvani.png",
  },
  {
    id: "aliyar-dam",
    name: "Aliyar Dam",
    category: "Nature",
    image: "/places/aliyar-dam.jpg",
  },
  {
    id: "monkey-falls",
    name: "Monkey Falls",
    category: "Nature",
    image: "/places/monkey-falls.jpg",
  },
{
  id: "pollachi",
  name: "Pollachi",
  category: "City",
  image: "/places/pollachi.jpeg",
},
  {
    id: "valparai-local",
    name: "Valparai",
    category: "Hill Station",
    image: "/places/valparai.jpg",
  },
  {
    id: "topslip",
    name: "Topslip",
    category: "Nature",
    image: "/places/topslip.avif",
  },
  {
    id: "anaikatti",
    name: "Anaikatti",
    category: "Nature",
    image: "/places/anaikatti.avif",
  },
];

/* =========================================================
   SERVICE DATA
========================================================= */

export interface ServiceItem {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
  points: string[];
}

export const services: ServiceItem[] = [
  {
    id: "tour-packages",
    title: "Tour Packages",
    short:
      "Curated holiday packages for popular destinations from Coimbatore.",
    description:
      "Handpicked itineraries for hill stations, pilgrimage destinations and family holidays, fully customisable to your budget and dates.",
    icon: "MapPinned",
    image: tourPackageImage,
    points: [
      "Custom itineraries",
      "Budget to premium options",
      "Stay and sightseeing included",
      "Group discounts",
    ],
  },
  {
    id: "outstation-travel",
    title: "Outstation Travel",
    short:
      "Reliable outstation taxi and cab services across South India.",
    description:
      "Comfortable one-way and round-trip outstation travel with experienced drivers and well-maintained vehicles.",
    icon: "Car",
    image: outstationTravelImage,
    points: [
      "One-way and round trips",
      "Experienced drivers",
      "Clean AC vehicles",
      "Transparent pricing",
    ],
  },
  {
    id: "family-group-trips",
    title: "Family and Group Trips",
    short:
      "Spacious vehicles and group-friendly packages for every occasion.",
    description:
      "From small family getaways to large group tours, we arrange comfortable transport, stays and coordinated itineraries.",
    icon: "Users",
    image: familyTripImage,
    points: [
      "Buses and tempo travellers",
      "Group coordination",
      "Family-friendly stops",
      "Bulk pricing",
    ],
  },
  {
    id: "temple-pilgrimage",
    title: "Temple and Pilgrimage Tours",
    short:
      "Devotional tours to Tirupati, Madurai, Rameswaram and more.",
    description:
      "Hassle-free pilgrimage travel with darshan assistance, comfortable stays and senior-friendly travel options.",
    icon: "Church",
    image: templeTourImage,
    points: [
      "Darshan assistance",
      "Custom temple routes",
      "Comfortable stays",
      "Senior-friendly travel",
    ],
  },
  {
    id: "airport-transfers",
    title: "Airport Pickup and Drop",
    short:
      "On-time Coimbatore airport transfers available 24 hours.",
    description:
      "Punctual pickup and drop service for Coimbatore International Airport with flight tracking and round-the-clock availability.",
    icon: "Plane",
    image: airportPickupImage,
    points: [
      "24-hour availability",
      "Flight tracking",
      "On-time pickup",
      "Clean AC cabs",
    ],
  },
  {
    id: "weekend-holiday",
    title: "Weekend and Holiday Packages",
    short:
      "Quick weekend getaways planned around your schedule.",
    description:
      "Short one-to-three-day trips to nearby hill stations and nature destinations, ideal for families and groups.",
    icon: "CalendarDays",
    image: weekendPackageImage,
    points: [
      "Quick planning",
      "Nearby destinations",
      "Flexible dates",
      "Custom itinerary",
    ],
  },
];

/* =========================================================
   VEHICLE AND FLEET DATA
========================================================= */

export type VehicleCategory =
  | "Sedan"
  | "MPV"
  | "Premium MPV"
  | "Tempo Traveller"
  | "Coach Bus"
  | "Tourist Bus";

export interface Vehicle {
  id: string;
  name: string;
  capacity: string;
  category: VehicleCategory;
  image: string;
  gallery?: string[];
  description: string;
  suitableFor: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    capacity: "4 + 1 Seats",
    category: "Sedan",
    image: swiftDzireImage,
    gallery: [car1Image, car7Image],
    description:
      "A comfortable and economical sedan suitable for local rides, airport transfers and small family trips.",
    suitableFor: [
      "Airport transfers",
      "Local travel",
      "Couple trips",
      "Small families",
    ],
  },
  {
    id: "honda-amaze",
    name: "Honda Amaze",
    capacity: "4 + 1 Seats",
    category: "Sedan",
    image: hondaAmazeImage,
    gallery: [car2Image],
    description:
      "A spacious and comfortable sedan ideal for city travel, business trips and outstation journeys.",
    suitableFor: [
      "City travel",
      "Outstation trips",
      "Airport transfers",
      "Business travel",
    ],
  },
  {
    id: "ertiga",
    name: "Ertiga",
    capacity: "6 + 1 Seats",
    category: "MPV",
    image: ertigaImage,
    gallery: [car3Image],
    description:
      "A spacious multi-purpose vehicle suitable for medium-sized families and small travel groups.",
    suitableFor: [
      "Family trips",
      "Group travel",
      "Outstation journeys",
      "Tour packages",
    ],
  },
  {
    id: "innova",
    name: "Innova",
    capacity: "7 + 1 Seats",
    category: "MPV",
    image: innovaImage,
    gallery: [car4Image],
    description:
      "A reliable and comfortable vehicle for long-distance travel, pilgrimage tours and family holidays.",
    suitableFor: [
      "Long-distance travel",
      "Pilgrimage tours",
      "Family holidays",
      "Group trips",
    ],
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    capacity: "7 + 1 Seats",
    category: "Premium MPV",
    image: innovaCrystaImage,
    gallery: [car5Image],
    description:
      "A premium MPV with spacious interiors and excellent comfort for long-distance, executive and family travel.",
    suitableFor: [
      "Premium travel",
      "Executive trips",
      "Long journeys",
      "Family tours",
    ],
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    capacity: "14 Seats",
    category: "Tempo Traveller",
    image: tempoTravellerImage,
    gallery: [car6Image],
    description:
      "A spacious group vehicle suitable for pilgrimage tours, corporate outings, family functions and group holidays.",
    suitableFor: [
      "Group tours",
      "Corporate outings",
      "Pilgrimage trips",
      "Family functions",
    ],
  },
  {
    id: "coach-bus-22",
    name: "22-Seat Coach Bus",
    capacity: "22 Seats",
    category: "Coach Bus",
    image: coachBusImage,
    gallery: [bus1Image, bus2Image],
    description:
      "A comfortable coach bus suitable for tourist groups, corporate outings, wedding transport and college trips.",
    suitableFor: [
      "Tour groups",
      "Corporate travel",
      "Wedding transport",
      "College trips",
    ],
  },
  {
    id: "tourist-bus-54",
    name: "54-Seat Tourist Bus",
    capacity: "54 Seats",
    category: "Tourist Bus",
    image: touristBusImage,
    gallery: [bus3Image],
    description:
      "A large-capacity tourist bus suitable for school tours, college trips, corporate travel and large group journeys.",
    suitableFor: [
      "Large group tours",
      "School trips",
      "College trips",
      "Corporate travel",
    ],
  },
];

/* =========================================================
   FAQ DATA
========================================================= */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question:
      "How do I book a trip with Nakshatra Coimbatore Travels?",
    answer:
      "You can book by sending a WhatsApp message to 917373987383, calling 073739 87383, or filling in the enquiry form. Share your destination, travel date, number of travellers, trip type and preferred vehicle.",
  },
  {
    question: "Are you open 24 hours?",
    answer:
      "Yes. Nakshatra Coimbatore Travels operates 24 hours a day, seven days a week, including weekends and public holidays.",
  },
  {
    question:
      "Which destinations do you cover from Coimbatore?",
    answer:
      "We cover Ooty, Kodaikanal, Valparai, Munnar, Wayanad, Tirupati, Madurai, Rameswaram, Kerala and many other destinations.",
  },
  {
    question:
      "Do you provide customised tour packages?",
    answer:
      "Yes. Every package can be customised according to your budget, number of travellers, trip duration and preferred destinations.",
  },
  {
    question: "How are your prices calculated?",
    answer:
      "Pricing depends on the destination, vehicle, number of travellers, duration, tolls, parking and accommodation preferences.",
  },
  {
    question: "What types of vehicles do you offer?",
    answer:
      "We offer Swift Dzire, Honda Amaze, Ertiga, Innova, Innova Crysta, Tempo Traveller, 22-seat coach bus and 54-seat tourist bus.",
  },
  {
    question: "Can I book an airport taxi at night?",
    answer:
      "Yes. Coimbatore airport pickup and drop services are available 24 hours.",
  },
  {
    question:
      "Do you arrange pilgrimage tours with darshan assistance?",
    answer:
      "Yes. We arrange pilgrimage tours to Tirupati, Madurai, Rameswaram, Sabarimala and other temples.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms depend on the package and the number of days remaining before the trip.",
  },
  {
    question:
      "Do you provide group and corporate travel?",
    answer:
      "Yes. We arrange family groups, corporate outings, college tours, school trips and wedding transport.",
  },
  {
    question: "How early should I book my trip?",
    answer:
      "Booking three to five days in advance is recommended, especially during peak seasons.",
  },
  {
    question: "Is WhatsApp booking confirmed?",
    answer:
      "After itinerary approval and advance payment, booking confirmation and vehicle details are shared through WhatsApp.",
  },
];

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

export interface Testimonial {
  name: string;
  location: string;
  trip: string;
  rating: number;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Karthik Ramanathan",
    location: "Coimbatore",
    trip: "Family trip to Ooty",
    rating: 5,
    text:
      "Booked an Ooty trip through WhatsApp and received a quote within minutes. The driver was professional and the Innova was clean and comfortable.",
    initials: "KR",
  },
  {
    name: "Priya Sundaram",
    location: "Sulur, Coimbatore",
    trip: "Tirupati pilgrimage",
    rating: 5,
    text:
      "The Tirupati package was organised properly. Darshan assistance was arranged and the driver knew the route well.",
    initials: "PS",
  },
  {
    name: "Mohan Krishnan",
    location: "Ravathur",
    trip: "Airport transfer at 2 AM",
    rating: 5,
    text:
      "The cab arrived before the requested time for my early-morning airport transfer. The driver was polite and drove safely.",
    initials: "MK",
  },
];