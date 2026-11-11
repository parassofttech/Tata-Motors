
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Fuel,
  Gauge,
  GitCompareArrows,
  Heart,
  Info,
  MapPin,
  MoveRight,
  Palette,
  Play,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
  CalendarDays,
  CarFront,
  Menu,
} from "lucide-react";

// =====================================================
// CAR DETAILS DATA
// Keep model information consistent with Cars.jsx.
// Verify official specifications, variants and prices
// before publishing this demo content.
// =====================================================

const carsDetails = {
  nexon: {
    name: "Nexon",
    fullName: "Tata Nexon",
    category: "SUV",
    tagline: "Make Every Drive Extraordinary.",
    description:
      "Meet a dynamic SUV designed for everyday journeys and memorable adventures. Discover expressive styling, thoughtful comfort and technology-focused features.",
    image: "/images/cars/nexon/exterior.jpg",
    gallery: [
      {
        label: "Exterior",
        image: "/images/cars/nexon/exterior.jpg",
      },
      {
        label: "Interior",
        image: "/images/cars/nexon/interior.jpg",
      },
      {
        label: "Side Profile",
        image: "/images/cars/nexon/side.jpg",
      },
      {
        label: "Rear Design",
        image: "/images/cars/nexon/rear.jpg",
      },
    ],
    price: "₹8.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "Diesel", "CNG", "Electric"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Distinctive SUV styling",
      "Comfort-focused cabin",
      "Multiple powertrain choices",
      "Technology-focused features",
    ],
    features: {
      Comfort: [
        "Spacious cabin layout",
        "Comfort-oriented seating",
        "Convenient storage spaces",
        "Climate comfort features",
      ],
      Technology: [
        "Modern infotainment experience",
        "Connected technology options",
        "Digital display options",
        "Convenience-focused controls",
      ],
      Safety: [
        "Multiple safety features",
        "Driver assistance technologies on selected configurations",
        "Passenger protection systems",
        "Safety-focused engineering",
      ],
      Exterior: [
        "Distinctive SUV proportions",
        "Contemporary front styling",
        "Bold body design",
        "Modern lighting design",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 8,
    related: ["punch", "curvv", "harrier"],
  },

  punch: {
    name: "Punch",
    fullName: "Tata Punch",
    category: "SUV",
    tagline: "Big Adventures. Compact Confidence.",
    description:
      "A compact SUV with a bold personality. Explore a practical design, comfortable everyday usability and features created for your daily adventures.",
    image: "/images/cars/punch/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/punch/exterior.jpg" },
      { label: "Interior", image: "/images/cars/punch/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/punch/side.jpg" },
      { label: "Rear Design", image: "/images/cars/punch/rear.jpg" },
    ],
    price: "₹6.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Compact SUV proportions",
      "Practical everyday design",
      "Comfortable cabin experience",
      "Multiple convenience features",
    ],
    features: {
      Comfort: [
        "Practical cabin layout",
        "Comfort-oriented seating",
        "Useful storage spaces",
        "Everyday convenience features",
      ],
      Technology: [
        "Infotainment options",
        "Modern cabin controls",
        "Digital display options",
        "Convenience-focused features",
      ],
      Safety: [
        "Passenger protection systems",
        "Multiple safety features",
        "Safety-focused construction",
        "Driver assistance features on selected configurations",
      ],
      Exterior: [
        "Bold compact SUV styling",
        "Distinctive front profile",
        "Contemporary body design",
        "Modern exterior detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 6,
    related: ["nexon", "tiago", "altroz"],
  },

  harrier: {
    name: "Harrier",
    fullName: "Tata Harrier",
    category: "SUV",
    tagline: "Command Your Own Journey.",
    description:
      "Discover a premium SUV experience with confident road presence, a thoughtfully designed cabin and features built around modern driving.",
    image: "/images/cars/harrier/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/harrier/exterior.jpg" },
      { label: "Interior", image: "/images/cars/harrier/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/harrier/side.jpg" },
      { label: "Rear Design", image: "/images/cars/harrier/rear.jpg" },
    ],
    price: "₹15.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Diesel"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Premium SUV presence",
      "Comfort-oriented interior",
      "Modern technology experience",
      "Confident road-focused design",
    ],
    features: {
      Comfort: [
        "Premium cabin experience",
        "Comfort-oriented seating",
        "Thoughtful cabin storage",
        "Convenience-focused features",
      ],
      Technology: [
        "Advanced infotainment options",
        "Connected technology options",
        "Digital display options",
        "Modern cabin controls",
      ],
      Safety: [
        "Multiple safety systems",
        "Passenger protection features",
        "Driver assistance options on selected configurations",
        "Safety-focused engineering",
      ],
      Exterior: [
        "Strong SUV proportions",
        "Distinctive front design",
        "Contemporary exterior styling",
        "Premium exterior detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 15,
    related: ["safari", "nexon", "curvv"],
  },

  safari: {
    name: "Safari",
    fullName: "Tata Safari",
    category: "SUV",
    tagline: "Discover More. Experience More.",
    description:
      "Make room for more experiences with a premium SUV designed around family journeys, thoughtful comfort and an unmistakable presence.",
    image: "/images/cars/safari/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/safari/exterior.jpg" },
      { label: "Interior", image: "/images/cars/safari/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/safari/side.jpg" },
      { label: "Rear Design", image: "/images/cars/safari/rear.jpg" },
    ],
    price: "₹16.00 Lakh*",
    seating: "6 / 7 Seats",
    fuel: ["Diesel"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Premium three-row SUV experience",
      "Family-focused cabin layout",
      "Comfort-oriented design",
      "Modern technology features",
    ],
    features: {
      Comfort: [
        "Three-row seating layout",
        "Family-oriented cabin",
        "Thoughtful storage spaces",
        "Comfort-focused interior",
      ],
      Technology: [
        "Modern infotainment options",
        "Connected technology features",
        "Digital display options",
        "Convenience-focused controls",
      ],
      Safety: [
        "Passenger protection systems",
        "Multiple safety features",
        "Driver assistance options on selected configurations",
        "Safety-focused engineering",
      ],
      Exterior: [
        "Commanding SUV proportions",
        "Distinctive front styling",
        "Contemporary exterior design",
        "Premium detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 16,
    related: ["harrier", "nexon", "curvv"],
  },

  curvv: {
    name: "Curvv",
    fullName: "Tata Curvv",
    category: "SUV",
    tagline: "Break Away From Ordinary.",
    description:
      "A distinctive SUV-inspired design with a coupe-influenced silhouette, contemporary styling and a modern cabin experience.",
    image: "/images/cars/curvv/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/curvv/exterior.jpg" },
      { label: "Interior", image: "/images/cars/curvv/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/curvv/side.jpg" },
      { label: "Rear Design", image: "/images/cars/curvv/rear.jpg" },
    ],
    price: "₹10.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "Diesel", "Electric"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Coupe-inspired SUV styling",
      "Contemporary exterior design",
      "Modern cabin experience",
      "Multiple powertrain choices",
    ],
    features: {
      Comfort: [
        "Modern cabin layout",
        "Comfort-oriented seating",
        "Practical storage spaces",
        "Convenience-focused features",
      ],
      Technology: [
        "Infotainment options",
        "Connected technology options",
        "Modern display features",
        "Contemporary cabin controls",
      ],
      Safety: [
        "Multiple safety features",
        "Passenger protection systems",
        "Driver assistance options on selected configurations",
        "Safety-focused engineering",
      ],
      Exterior: [
        "Coupe-inspired silhouette",
        "Distinctive SUV proportions",
        "Modern lighting design",
        "Contemporary exterior detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 10,
    related: ["nexon", "harrier", "safari"],
  },

  tiago: {
    name: "Tiago",
    fullName: "Tata Tiago",
    category: "Hatchback",
    tagline: "Small Car. Big Possibilities.",
    description:
      "Bring more fun to everyday driving with a stylish hatchback designed for city life, daily comfort and practical usability.",
    image: "/images/cars/tiago/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/tiago/exterior.jpg" },
      { label: "Interior", image: "/images/cars/tiago/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/tiago/side.jpg" },
      { label: "Rear Design", image: "/images/cars/tiago/rear.jpg" },
    ],
    price: "₹5.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Compact city-friendly design",
      "Practical everyday usability",
      "Comfortable cabin layout",
      "Convenience-focused features",
    ],
    features: {
      Comfort: [
        "Practical cabin layout",
        "Comfortable seating",
        "Useful storage spaces",
        "Everyday convenience",
      ],
      Technology: [
        "Infotainment options",
        "Modern cabin controls",
        "Digital convenience features",
        "Audio and connectivity options",
      ],
      Safety: [
        "Passenger protection features",
        "Multiple safety systems",
        "Safety-focused construction",
        "Driver support features on selected configurations",
      ],
      Exterior: [
        "Contemporary hatchback design",
        "Distinctive front styling",
        "Compact proportions",
        "Modern exterior detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 5,
    related: ["punch", "altroz", "tigor"],
  },

  altroz: {
    name: "Altroz",
    fullName: "Tata Altroz",
    category: "Hatchback",
    tagline: "Designed to Stand Apart.",
    description:
      "Experience a premium hatchback with expressive styling, thoughtful comfort and an interior designed around everyday convenience.",
    image: "/images/cars/altroz/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/altroz/exterior.jpg" },
      { label: "Interior", image: "/images/cars/altroz/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/altroz/side.jpg" },
      { label: "Rear Design", image: "/images/cars/altroz/rear.jpg" },
    ],
    price: "₹7.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "Diesel", "CNG"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Premium hatchback styling",
      "Comfortable cabin experience",
      "Practical everyday usability",
      "Multiple powertrain options",
    ],
    features: {
      Comfort: [
        "Comfort-oriented cabin",
        "Practical storage",
        "Thoughtful seating layout",
        "Everyday convenience features",
      ],
      Technology: [
        "Modern infotainment options",
        "Connectivity features",
        "Digital convenience options",
        "Contemporary cabin controls",
      ],
      Safety: [
        "Multiple safety features",
        "Passenger protection systems",
        "Safety-focused construction",
        "Driver support options on selected configurations",
      ],
      Exterior: [
        "Premium hatchback proportions",
        "Distinctive exterior styling",
        "Modern lighting design",
        "Contemporary body detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 7,
    related: ["tiago", "punch", "nexon"],
  },

  tigor: {
    name: "Tigor",
    fullName: "Tata Tigor",
    category: "Sedan",
    tagline: "Elegance for Every Journey.",
    description:
      "Discover a sedan that brings together elegant styling, everyday practicality and a comfortable cabin experience for your journeys.",
    image: "/images/cars/tigor/exterior.jpg",
    gallery: [
      { label: "Exterior", image: "/images/cars/tigor/exterior.jpg" },
      { label: "Interior", image: "/images/cars/tigor/interior.jpg" },
      { label: "Side Profile", image: "/images/cars/tigor/side.jpg" },
      { label: "Rear Design", image: "/images/cars/tigor/rear.jpg" },
    ],
    price: "₹6.00 Lakh*",
    seating: "5 Seats",
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    highlights: [
      "Elegant sedan proportions",
      "Comfortable cabin layout",
      "Practical boot space",
      "Everyday convenience features",
    ],
    features: {
      Comfort: [
        "Comfort-oriented seating",
        "Practical cabin layout",
        "Useful storage spaces",
        "Everyday convenience features",
      ],
      Technology: [
        "Infotainment options",
        "Connectivity features",
        "Modern cabin controls",
        "Audio convenience options",
      ],
      Safety: [
        "Passenger protection systems",
        "Multiple safety features",
        "Safety-focused engineering",
        "Driver support options on selected configurations",
      ],
      Exterior: [
        "Elegant sedan styling",
        "Distinctive front design",
        "Contemporary body proportions",
        "Modern exterior detailing",
      ],
    },
    colors: [
      { name: "White", color: "#e9e9e5" },
      { name: "Black", color: "#252525" },
      { name: "Silver", color: "#aeb4bb" },
      { name: "Red", color: "#a92e34" },
      { name: "Blue", color: "#263f69" },
    ],
    variants: [
      { name: "Base Configuration", label: "Entry option" },
      { name: "Mid Configuration", label: "More convenience" },
      { name: "Top Configuration", label: "Feature focused" },
    ],
    priceValue: 6,
    related: ["tiago", "altroz", "punch"],
  },
};

// =====================================================
// IMAGE WITH FALLBACK
// =====================================================

const CarImage = ({
  src,
  alt,
  className = "",
  fallbackIcon = true,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#efefed] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full min-h-32 w-full flex-col items-center justify-center gap-3 text-gray-400">
          {fallbackIcon && <CarFront size={42} strokeWidth={1.2} />}
          <span className="text-xs font-medium">
            Image coming soon
          </span>
        </div>
      )}
    </div>
  );
};

// =====================================================
// REUSABLE SECTION HEADING
// =====================================================

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-10 max-w-2xl">
    <div className="mb-4 flex items-center gap-2">
      <span className="h-px w-8 bg-[#b18a3e]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17b32]">
        {eyebrow}
      </span>
    </div>

    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </h2>

    {description && (
      <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
        {description}
      </p>
    )}
  </div>
);

// =====================================================
// SPECIFICATION CARD
// =====================================================

const SpecCard = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-[#d8c49b] hover:shadow-lg">
    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f2e8] text-[#a17b32]">
      <Icon size={20} />
    </div>

    <p className="text-xs text-gray-400">{label}</p>
    <p className="mt-2 text-base font-bold text-gray-900">{value}</p>
  </div>
);

// =====================================================
// MAIN COMPONENT
// =====================================================

const CarDetails = () => {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();

  const car = carsDetails[slug?.toLowerCase()];

  const [activeImage, setActiveImage] = useState(0);
  const [activeFeature, setActiveFeature] = useState("Comfort");
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const gallery = useMemo(
    () => car?.gallery || [],
    [car]
  );

  // Reset page state when the route changes between cars.
  useEffect(() => {
    setActiveImage(0);
    setActiveFeature("Comfort");
    setSelectedColor(0);
    setActiveVariant(0);
    setShowAllGallery(false);
  }, [slug]);

  // Dynamic page title and meta description.
  useEffect(() => {
    if (!car) {
      document.title = "Car Not Found | Explore Cars";
      return;
    }

    const previousTitle = document.title;
    const descriptionMeta = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription =
      descriptionMeta?.getAttribute("content");

    document.title = `${car.fullName} - Features, Gallery & Details | Explore Cars`;

    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        `${car.fullName}: explore exterior, interior, features, specifications, available fuel options and book a test drive.`
      );
    }

    return () => {
      document.title = previousTitle;

      if (descriptionMeta && previousDescription !== null) {
        descriptionMeta.setAttribute(
          "content",
          previousDescription
        );
      }
    };
  }, [car]);

  if (!car) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center bg-[#f7f7f5] px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-[#b18a3e] shadow-sm">
            <CarFront size={38} />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a17b32]">
            Model unavailable
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Car Not Found
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            The car you are looking for may not exist or may have
            been moved. Explore our available models instead.
          </p>

          <Link
            to="/cars"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#171717] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#b18a3e]"
          >
            <ArrowLeft size={17} />
            Explore All Cars
          </Link>
        </div>
      </main>
    );
  }

  const relatedCars = car.related
    .map((relatedSlug) => carsDetails[relatedSlug])
    .filter(Boolean);

  const featureCategories = Object.keys(car.features);

  const nextImage = () => {
    setActiveImage((previous) =>
      previous === gallery.length - 1 ? 0 : previous + 1
    );
  };

  const previousImage = () => {
    setActiveImage((previous) =>
      previous === 0 ? gallery.length - 1 : previous - 1
    );
  };

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5]">
      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section className="relative overflow-hidden bg-[#151515]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#b18a3e]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 lg:pt-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-xs text-gray-500"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/cars" className="hover:text-white">
              Explore Cars
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#d5b15f]">
              {car.name}
            </span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Hero content */}
            <motion.div
              {...animationProps}
              className="relative z-10"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#d5b15f]/30 bg-[#d5b15f]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d5b15f]">
                  {car.category}
                </span>

                <span className="text-xs text-gray-500">
                  Discover the {car.fullName}
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d5b15f]">
                Tata Motors
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {car.name}
                <span className="mt-3 block text-2xl font-normal leading-snug text-gray-400 sm:text-3xl">
                  {car.tagline}
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
                {car.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to={`/book-test-drive?car=${encodeURIComponent(
                    car.slug
                  )}`}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#d5b15f] px-7 py-4 text-sm font-bold text-[#171717] transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Book a Test Drive
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to={`/compare?car=${encodeURIComponent(car.slug)}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#d5b15f] hover:text-[#d5b15f]"
                >
                  <GitCompareArrows size={17} />
                  Compare
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Indicative starting price
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {car.price}
                  </p>
                </div>

                <div className="h-11 w-px bg-white/10" />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Seating
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">
                    {car.seating}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.96 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
              }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[35px] border border-white/5" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-[#242424] shadow-2xl">
                <CarImage
                  src={car.image}
                  alt={`${car.fullName} exterior view`}
                  className="h-full w-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <Sparkles size={14} className="text-[#d5b15f]" />
                  Designed to inspire
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#242424] p-4 shadow-xl sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d5b15f]/10 text-[#d5b15f]">
                    <CarFront size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {car.fullName}
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      Explore the experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          QUICK SPECIFICATION BAR
      ================================================= */}
      <section className="relative z-10 border-b border-gray-100 bg-white px-4 py-7 shadow-sm sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Fuel size={21} className="shrink-0 text-[#b18a3e]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Fuel Options
              </p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {car.fuel.join(" / ")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Settings2 size={21} className="shrink-0 text-[#b18a3e]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Transmission
              </p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {car.transmission.join(" / ")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users size={21} className="shrink-0 text-[#b18a3e]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Seating Capacity
              </p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {car.seating}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CarFront size={21} className="shrink-0 text-[#b18a3e]" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Body Type
              </p>
              <p className="mt-1 text-sm font-bold text-gray-900">
                {car.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          IMAGE GALLERY
      ================================================= */}
      <section
        id="gallery"
        className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A closer look"
            title={`Explore the ${car.name}.`}
            description="Take a closer look at the design, proportions and details that make this car stand out."
          />

          <motion.div
            {...animationProps}
            className="grid gap-5 lg:grid-cols-[1.5fr_0.5fr]"
          >
            {/* Main gallery image */}
            <div className="relative overflow-hidden rounded-[25px] bg-[#eaeae7]">
              <div className="aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={gallery[activeImage]?.image}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, scale: 1.025 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full"
                  >
                    <CarImage
                      src={gallery[activeImage]?.image}
                      alt={`${car.fullName} ${gallery[activeImage]?.label}`}
                      className="h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#e4c477]">
                    {car.fullName}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    {gallery[activeImage]?.label}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous gallery image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next gallery image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery thumbnails */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {gallery.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${item.label} image`}
                  aria-pressed={activeImage === index}
                  className={`group relative overflow-hidden rounded-2xl text-left ${
                    activeImage === index
                      ? "ring-2 ring-[#b18a3e] ring-offset-2"
                      : ""
                  }`}
                >
                  <div className="aspect-[16/9] lg:aspect-auto lg:h-[120px]">
                    <CarImage
                      src={item.image}
                      alt={`${car.fullName} ${item.label}`}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    {item.label}
                  </span>

                  {activeImage === index && (
                    <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#b18a3e] text-white">
                      <Check size={14} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          OVERVIEW / HIGHLIGHTS
      ================================================= */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...animationProps}>
            <SectionHeading
              eyebrow="The experience"
              title={`More than a car. It's a ${car.name}.`}
              description={car.description}
            />

            <div className="space-y-4">
              {car.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-[#fafaf9] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4eddd] text-[#a17b32]">
                    <Check size={17} />
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    {highlight}
                  </p>

                  <span className="ml-auto text-xs font-semibold text-gray-300">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...animationProps}
            className="relative"
          >
            <div className="overflow-hidden rounded-[25px] bg-[#efefed]">
              <div className="aspect-[4/5]">
                <CarImage
                  src={gallery[1]?.image}
                  alt={`${car.fullName} interior`}
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 max-w-[230px] rounded-2xl bg-[#171717] p-5 shadow-xl sm:-left-6">
              <Sparkles size={21} className="text-[#d5b15f]" />
              <p className="mt-3 text-sm font-bold text-white">
                Designed around your journey.
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                Discover a cabin and driving experience made for everyday life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          FEATURES
      ================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Made for you"
            title="Explore the Features."
            description={`Discover the different areas of the ${car.name} experience, from everyday comfort to thoughtful technology and safety.`}
          />

          <motion.div {...animationProps}>
            <div className="mb-8 flex gap-2 overflow-x-auto border-b border-gray-200 pb-3">
              {featureCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFeature(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold transition-all ${
                    activeFeature === category
                      ? "bg-[#171717] text-white"
                      : "bg-white text-gray-500 hover:bg-[#eee9dc] hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-10 rounded-[25px] border border-gray-100 bg-white p-6 shadow-sm sm:p-9 lg:grid-cols-2 lg:p-12">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f2e8] text-[#a17b32]">
                  {activeFeature === "Comfort" && <Heart size={25} />}
                  {activeFeature === "Technology" && <Zap size={25} />}
                  {activeFeature === "Safety" && <ShieldCheck size={25} />}
                  {activeFeature === "Exterior" && <CarFront size={25} />}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {activeFeature}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Explore the {activeFeature.toLowerCase()} experience
                  available across the {car.name} range. Specific features
                  depend on the selected variant and configuration.
                </p>
              </div>

              <div className="grid content-center gap-3">
                {car.features[activeFeature].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-[#fafaf9] p-4"
                  >
                    <CircleCheck
                      size={18}
                      className="shrink-0 text-[#b18a3e]"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          SPECIFICATIONS
      ================================================= */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Know your car"
            title="Explore the Specifications."
            description="Get an overview of the available configuration choices. Exact technical specifications depend on the selected variant."
          />

          <motion.div
            {...animationProps}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <SpecCard
              icon={CarFront}
              label="Body Type"
              value={car.category}
            />

            <SpecCard
              icon={Users}
              label="Seating Capacity"
              value={car.seating}
            />

            <SpecCard
              icon={Fuel}
              label="Fuel Options"
              value={car.fuel.join(", ")}
            />

            <SpecCard
              icon={Settings2}
              label="Transmission"
              value={car.transmission.join(", ")}
            />
          </motion.div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#e7dfcb] bg-[#fbf8f0] p-5">
            <Info size={18} className="mt-0.5 shrink-0 text-[#a17b32]" />
            <p className="text-xs leading-6 text-gray-600">
              This page currently displays model-level overview information.
              Engine displacement, power, torque, mileage, dimensions, battery
              capacity and charging figures should be populated from verified
              official variant specifications before publication.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          COLORS
      ================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div {...animationProps}>
            <SectionHeading
              eyebrow="Make it yours"
              title="Choose Your Style."
              description={`Explore illustrative color choices for the ${car.name}. Actual color availability may vary by variant and model year.`}
            />

            <div className="flex flex-wrap gap-4">
              {car.colors.map((color, index) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(index)}
                  aria-label={`Select ${color.name} color`}
                  aria-pressed={selectedColor === index}
                  className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all ${
                    selectedColor === index
                      ? "border-[#b18a3e] ring-4 ring-[#b18a3e]/10"
                      : "border-white shadow-md hover:border-gray-300"
                  }`}
                >
                  <span
                    className="h-10 w-10 rounded-full border border-black/10"
                    style={{ backgroundColor: color.color }}
                  />

                  {selectedColor === index && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b18a3e] text-white">
                      <Check size={12} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <Palette size={19} className="text-[#a17b32]" />
              <p className="text-sm font-semibold text-gray-800">
                Selected: {car.colors[selectedColor]?.name}
              </p>
            </div>
          </motion.div>

          <motion.div
            {...animationProps}
            className="relative overflow-hidden rounded-[25px] bg-[#ececea]"
          >
            <div className="aspect-[16/10]">
              <CarImage
                src={car.image}
                alt={`${car.fullName} exterior`}
                className="h-full w-full"
              />
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-widest text-gray-300">
                Your selected color
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                {car.colors[selectedColor]?.name}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          VARIANTS
      ================================================= */}
      <section className="bg-[#171717] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div {...animationProps}>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-[#d5b15f]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5b15f]">
                  Find your fit
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Explore the
                <span className="block text-[#d5b15f]">
                  Configurations.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Explore different configuration levels and find the
                combination that suits your preferences.
              </p>

              <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Info size={18} className="mt-0.5 shrink-0 text-[#d5b15f]" />
                <p className="text-xs leading-6 text-gray-400">
                  These are demonstration configuration labels, not official
                  variant names or confirmed prices. Replace them with the
                  current official variant list.
                </p>
              </div>
            </motion.div>

            <motion.div {...animationProps} className="space-y-4">
              {car.variants.map((variant, index) => {
                const active = activeVariant === index;

                return (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => setActiveVariant(index)}
                    aria-pressed={active}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all sm:p-6 ${
                      active
                        ? "border-[#d5b15f] bg-[#d5b15f]/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          active
                            ? "bg-[#d5b15f] text-[#171717]"
                            : "bg-white/10 text-gray-300"
                        }`}
                      >
                        <CarFront size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {variant.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {variant.label}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                        active
                          ? "border-[#d5b15f] bg-[#d5b15f] text-[#171717]"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      <Check size={15} />
                    </div>
                  </button>
                );
              })}

              <Link
                to={`/book-test-drive?car=${encodeURIComponent(
                  car.slug
                )}&configuration=${encodeURIComponent(
                  car.variants[activeVariant].name
                )}`}
                className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#d5b15f] px-6 py-4 text-sm font-bold text-[#171717] transition-all hover:bg-white"
              >
                Enquire About This Configuration
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          TEST DRIVE CTA
      ================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          {...animationProps}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#e9e2d3] p-7 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#b18a3e]/20" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-[#b18a3e]/20" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#97712f]">
                Experience it yourself
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                Ready to meet your
                <span className="block">{car.name}?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600">
                Get behind the wheel and experience the car yourself.
                Schedule a test drive and take the next step towards
                your new journey.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to={`/book-test-drive?car=${encodeURIComponent(car.slug)}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#171717] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#a17b32]"
              >
                <CalendarDays size={17} />
                Book Test Drive
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/cars"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#171717]/20 px-7 py-4 text-sm font-bold text-[#171717] transition-colors hover:bg-white"
              >
                Explore Other Cars
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =================================================
          RELATED CARS
      ================================================= */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Explore more"
              title="You May Also Like."
              description="Discover other models that could be the perfect match for your next journey."
            />

            <Link
              to="/cars"
              className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#a17b32] transition-colors hover:text-black"
            >
              View All Cars
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCars.map((related, index) => (
              <motion.article
                key={related.name}
                {...animationProps}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Link to={`/cars/${related.name.toLowerCase()}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-[#efefed]">
                    <CarImage
                      src={related.image}
                      alt={`${related.fullName} exterior`}
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#a17b32]">
                      {related.category}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {related.name}
                      </h3>

                      <ArrowRight
                        size={18}
                        className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[#a17b32]"
                      />
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      {related.description}
                    </p>

                    <p className="mt-4 text-sm font-bold text-gray-900">
                      {related.price}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          PRICE DISCLAIMER
      ================================================= */}
      <section className="border-t border-gray-100 bg-[#f7f7f5] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-start gap-3">
          <Info size={17} className="mt-0.5 shrink-0 text-[#a17b32]" />

          <p className="text-xs leading-6 text-gray-500">
            *All prices and configuration details shown on this demo page are
            illustrative and should not be treated as official offers.
            Actual prices, specifications, colors, features and availability
            may vary by city, model year and variant. Contact an authorized
            Tata Motors dealer for current information.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CarDetails;
