
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Plus,
  Trash2,
  GitCompareArrows,
  CarFront,
  Fuel,
  Settings2,
  Users,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Info,
  RotateCcw,
  ChevronDown,
  CircleCheck,
  Gauge,
  Zap,
  Scale,
} from "lucide-react";

// =====================================================
// CAR DATABASE
// Keep slugs consistent with CarDetails.jsx and Cars.jsx.
// Prices and feature descriptions are illustrative.
// Verify official specifications before publishing.
// =====================================================

const carDatabase = [
  {
    slug: "nexon",
    name: "Nexon",
    fullName: "Tata Nexon",
    category: "SUV",
    image: "/images/cars/nexon/exterior.jpg",
    price: "₹8.00 Lakh*",
    priceValue: 8,
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
      comfort: "Comfort-focused cabin",
      technology: "Modern infotainment options",
      safety: "Multiple safety features",
      design: "Distinctive SUV styling",
    },
  },
  {
    slug: "punch",
    name: "Punch",
    fullName: "Tata Punch",
    category: "SUV",
    image: "/images/cars/punch/exterior.jpg",
    price: "₹6.00 Lakh*",
    priceValue: 6,
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
      comfort: "Practical cabin layout",
      technology: "Infotainment options",
      safety: "Multiple safety features",
      design: "Bold compact SUV styling",
    },
  },
  {
    slug: "harrier",
    name: "Harrier",
    fullName: "Tata Harrier",
    category: "SUV",
    image: "/images/cars/harrier/exterior.jpg",
    price: "₹15.00 Lakh*",
    priceValue: 15,
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
      comfort: "Premium cabin experience",
      technology: "Advanced infotainment options",
      safety: "Multiple safety systems",
      design: "Strong SUV proportions",
    },
  },
  {
    slug: "safari",
    name: "Safari",
    fullName: "Tata Safari",
    category: "SUV",
    image: "/images/cars/safari/exterior.jpg",
    price: "₹16.00 Lakh*",
    priceValue: 16,
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
      comfort: "Three-row seating layout",
      technology: "Modern infotainment options",
      safety: "Multiple safety features",
      design: "Commanding SUV proportions",
    },
  },
  {
    slug: "curvv",
    name: "Curvv",
    fullName: "Tata Curvv",
    category: "SUV",
    image: "/images/cars/curvv/exterior.jpg",
    price: "₹10.00 Lakh*",
    priceValue: 10,
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
      comfort: "Modern cabin layout",
      technology: "Connected technology options",
      safety: "Multiple safety features",
      design: "Coupe-inspired silhouette",
    },
  },
  {
    slug: "tiago",
    name: "Tiago",
    fullName: "Tata Tiago",
    category: "Hatchback",
    image: "/images/cars/tiago/exterior.jpg",
    price: "₹5.00 Lakh*",
    priceValue: 5,
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
      comfort: "Comfortable seating",
      technology: "Infotainment options",
      safety: "Multiple safety features",
      design: "Contemporary hatchback design",
    },
  },
  {
    slug: "altroz",
    name: "Altroz",
    fullName: "Tata Altroz",
    category: "Hatchback",
    image: "/images/cars/altroz/exterior.jpg",
    price: "₹7.00 Lakh*",
    priceValue: 7,
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
      comfort: "Comfort-oriented cabin",
      technology: "Modern infotainment options",
      safety: "Multiple safety features",
      design: "Premium hatchback proportions",
    },
  },
  {
    slug: "tigor",
    name: "Tigor",
    fullName: "Tata Tigor",
    category: "Sedan",
    image: "/images/cars/tigor/exterior.jpg",
    price: "₹6.00 Lakh*",
    priceValue: 6,
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
      comfort: "Comfort-oriented seating",
      technology: "Infotainment options",
      safety: "Multiple safety features",
      design: "Elegant sedan styling",
    },
  },
];

// =====================================================
// COMPARISON ROWS
// Avoid unverified engine and mileage specifications.
// =====================================================

const comparisonRows = [
  {
    section: "Overview",
    rows: [
      {
        label: "Body Type",
        key: "category",
        icon: CarFront,
      },
      {
        label: "Starting Price",
        key: "price",
        icon: IndianRupee,
      },
      {
        label: "Seating Capacity",
        key: "seating",
        icon: Users,
      },
    ],
  },
  {
    section: "Powertrain Options",
    rows: [
      {
        label: "Fuel Options",
        key: "fuel",
        icon: Fuel,
      },
      {
        label: "Transmission",
        key: "transmission",
        icon: Settings2,
      },
    ],
  },
  {
    section: "Features",
    rows: [
      {
        label: "Comfort",
        key: "comfort",
        icon: HeartIcon,
      },
      {
        label: "Technology",
        key: "technology",
        icon: Zap,
      },
      {
        label: "Safety",
        key: "safety",
        icon: ShieldCheck,
      },
      {
        label: "Design",
        key: "design",
        icon: Sparkles,
      },
    ],
  },
];

function HeartIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

// =====================================================
// IMAGE COMPONENT WITH FALLBACK
// =====================================================

const CompareCarImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#eeefed]">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <CarFront size={40} strokeWidth={1.3} />
          <span className="text-xs">Image coming soon</span>
        </div>
      )}
    </div>
  );
};

// =====================================================
// VALUE NORMALIZER
// =====================================================

const getRowValue = (car, key) => {
  if (!car) return "—";

  if (key === "fuel") return car.fuel.join(", ");

  if (key === "transmission") {
    return car.transmission.join(", ");
  }

  if (car.features?.[key]) {
    return car.features[key];
  }

  return car[key] ?? "—";
};

// =====================================================
// MAIN COMPONENT
// =====================================================

const CompareCars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  const initialCars = useMemo(() => {
    const first = searchParams.get("car");
    const second = searchParams.get("car2");
    const third = searchParams.get("car3");

    const requested = [first, second, third].filter(Boolean);

    const valid = requested.filter((slug) =>
      carDatabase.some((car) => car.slug === slug)
    );

    return [...new Set(valid)].slice(0, 3);
  }, [searchParams]);

  const [selectedCars, setSelectedCars] = useState(() => {
    return initialCars.length > 0
      ? initialCars
      : ["nexon", "punch"];
  });

  const [showDifferences, setShowDifferences] = useState(false);
  const [showAddCar, setShowAddCar] = useState(false);
  const [selectedToAdd, setSelectedToAdd] = useState("");

  const comparedCars = useMemo(
    () =>
      selectedCars
        .map((slug) =>
          carDatabase.find((car) => car.slug === slug)
        )
        .filter(Boolean),
    [selectedCars]
  );

  const availableCars = useMemo(
    () =>
      carDatabase.filter(
        (car) => !selectedCars.includes(car.slug)
      ),
    [selectedCars]
  );

  // Sync comparison selection to URL.
  useEffect(() => {
    const params = new URLSearchParams();

    selectedCars.forEach((slug, index) => {
      if (index === 0) params.set("car", slug);
      if (index === 1) params.set("car2", slug);
      if (index === 2) params.set("car3", slug);
    });

    setSearchParams(params, { replace: true });
  }, [selectedCars, setSearchParams]);

  // Update SEO title and description.
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription =
      descriptionMeta?.getAttribute("content");

    document.title = "Compare Cars - Features, Prices & Specifications";

    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Compare car models side by side. Explore prices, fuel options, transmission, seating and features to find the right car."
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
  }, []);

  const addCar = () => {
    if (
      !selectedToAdd ||
      selectedCars.includes(selectedToAdd) ||
      selectedCars.length >= 3
    ) {
      return;
    }

    setSelectedCars((previous) => [
      ...previous,
      selectedToAdd,
    ]);

    setSelectedToAdd("");
    setShowAddCar(false);
  };

  const removeCar = (slug) => {
    if (selectedCars.length <= 2) return;

    setSelectedCars((previous) =>
      previous.filter((item) => item !== slug)
    );
  };

  const resetComparison = () => {
    setSelectedCars(["nexon", "punch"]);
    setShowDifferences(false);
    setShowAddCar(false);
    setSelectedToAdd("");
  };

  const getDifferent = (row) => {
    const values = comparedCars.map((car) =>
      getRowValue(car, row.key)
    );

    return new Set(values).size > 1;
  };

  const visibleSections = comparisonRows
    .map((section) => ({
      ...section,
      rows: section.rows.filter(
        (row) => !showDifferences || getDifferent(row)
      ),
    }))
    .filter((section) => section.rows.length > 0);

  const animation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5 },
      };

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      {/* =================================================
          HERO
      ================================================= */}
      <section className="relative overflow-hidden bg-[#171717]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center gap-2 text-xs text-gray-500"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/cars" className="transition-colors hover:text-white">
              Explore Cars
            </Link>
            <span>/</span>
            <span className="text-[#d5b15f]">Compare Cars</span>
          </nav>

          <motion.div {...animation} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d5b15f]/25 bg-[#d5b15f]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b15f]">
              <GitCompareArrows size={14} />
              Smart Car Comparison
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compare Cars.
              <span className="mt-2 block text-[#d5b15f]">
                Choose Confidently.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
              Not sure which car is right for you? Compare different
              models side by side, explore their features and make
              a more informed choice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-[#d5b15f]" />
                Side-by-side comparison
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-[#d5b15f]" />
                Up to 3 cars
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-[#d5b15f]" />
                Highlight differences
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          SELECT CARS
      ================================================= */}
      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[25px] border border-gray-100 bg-white p-5 shadow-xl sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a17b32]">
                Your comparison
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Select Your Cars
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                Choose at least 2 and up to 3 models.
              </p>
            </div>

            <button
              type="button"
              onClick={resetComparison}
              className="inline-flex items-center gap-2 self-start rounded-xl border border-gray-200 px-4 py-3 text-xs font-bold text-gray-600 transition-colors hover:border-[#b18a3e] hover:text-[#a17b32] sm:self-center"
            >
              <RotateCcw size={15} />
              Reset Comparison
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {comparedCars.map((car, index) => (
              <motion.div
                layout={!shouldReduceMotion}
                key={car.slug}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#fafaf9]"
              >
                <div className="absolute left-4 top-4 z-10 rounded-full bg-[#171717] px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
                  Car 0{index + 1}
                </div>

                {selectedCars.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeCar(car.slug)}
                    aria-label={`Remove ${car.name} from comparison`}
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:bg-red-50 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                )}

                <div className="aspect-[16/9] overflow-hidden">
                  <CompareCarImage
                    src={car.image}
                    alt={`${car.fullName} exterior`}
                  />
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#a17b32]">
                    {car.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {car.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-gray-900">
                    {car.price}
                  </p>

                  <Link
                    to={`/cars/${car.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#a17b32] transition-colors hover:text-black"
                  >
                    View Car Details
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Add car card */}
            {selectedCars.length < 3 && (
              <button
                type="button"
                onClick={() => setShowAddCar(true)}
                className="group flex min-h-[260px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-[#fafaf9] p-6 transition-all hover:border-[#b18a3e] hover:bg-[#fbf8f0]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#a17b32] shadow-sm transition-all group-hover:bg-[#b18a3e] group-hover:text-white">
                  <Plus size={25} />
                </div>

                <p className="mt-5 text-sm font-bold text-gray-800">
                  Add Another Car
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Compare up to 3 cars
                </p>
              </button>
            )}
          </div>

          <AnimatePresence>
            {showAddCar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 rounded-2xl border border-[#e7dfcb] bg-[#fbf8f0] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-gray-900">
                      Choose a car to compare
                    </h3>

                    <button
                      type="button"
                      onClick={() => setShowAddCar(false)}
                      aria-label="Close add car panel"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 hover:text-black"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <select
                        value={selectedToAdd}
                        onChange={(event) =>
                          setSelectedToAdd(event.target.value)
                        }
                        className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-800 outline-none transition-all focus:border-[#b18a3e]"
                      >
                        <option value="">Select a car model</option>

                        {availableCars.map((car) => (
                          <option key={car.slug} value={car.slug}>
                            {car.fullName} — {car.category}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>

                    <button
                      type="button"
                      disabled={!selectedToAdd}
                      onClick={addCar}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#171717] px-7 text-sm font-bold text-white transition-all hover:bg-[#a17b32] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus size={17} />
                      Add Car
                    </button>
                  </div>

                  {availableCars.length === 0 && (
                    <p className="mt-3 text-xs text-gray-500">
                      All available cars have already been selected.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =================================================
          COMPARISON TABLE
      ================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-[#b18a3e]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17b32]">
                  Detailed Comparison
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Compare Every Detail.
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Explore the differences between your selected models.
              </p>
            </div>

            <label className="inline-flex cursor-pointer items-center gap-3 self-start rounded-xl border border-gray-200 bg-white px-4 py-3">
              <input
                type="checkbox"
                checked={showDifferences}
                onChange={(event) =>
                  setShowDifferences(event.target.checked)
                }
                className="h-4 w-4 accent-[#a17b32]"
              />

              <span className="text-xs font-bold text-gray-700">
                Show only differences
              </span>
            </label>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-gray-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#171717]">
                    <th className="w-[220px] p-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                      Comparison
                    </th>

                    {comparedCars.map((car) => (
                      <th
                        key={car.slug}
                        className="min-w-[175px] p-5 text-sm font-bold text-white"
                      >
                        {car.fullName}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {visibleSections.length > 0 ? (
                    visibleSections.map((section) => (
                      <React.Fragment key={section.section}>
                        <tr className="bg-[#f7f5ef]">
                          <td
                            colSpan={comparedCars.length + 1}
                            className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7634]"
                          >
                            {section.section}
                          </td>
                        </tr>

                        {section.rows.map((row) => {
                          const different = getDifferent(row);
                          const Icon = row.icon;

                          return (
                            <tr
                              key={row.key}
                              className={`border-b border-gray-100 transition-colors hover:bg-[#fafaf8] ${
                                showDifferences && different
                                  ? "bg-[#fbf8ef]"
                                  : ""
                              }`}
                            >
                              <td className="p-5">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f6f1e6] text-[#a17b32]">
                                    <Icon size={17} />
                                  </div>

                                  <span className="text-xs font-bold text-gray-700">
                                    {row.label}
                                  </span>
                                </div>
                              </td>

                              {comparedCars.map((car) => (
                                <td
                                  key={`${car.slug}-${row.key}`}
                                  className="p-5"
                                >
                                  <div className="flex items-start gap-2">
                                    <span className="text-sm font-medium leading-6 text-gray-700">
                                      {getRowValue(car, row.key)}
                                    </span>

                                    {different && (
                                      <span
                                        title="This value differs between selected cars"
                                        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#b18a3e]"
                                      />
                                    )}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={comparedCars.length + 1}
                        className="p-12 text-center"
                      >
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f2e8] text-[#a17b32]">
                          <Scale size={22} />
                        </div>

                        <p className="mt-4 text-sm font-bold text-gray-800">
                          No differences found
                        </p>

                        <p className="mt-2 text-xs text-gray-500">
                          Try turning off the differences filter.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 bg-[#fafaf9] px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-[#b18a3e]" />
              <p className="text-[10px] text-gray-500">
                Highlighted dots indicate values that differ between the selected cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          HIGHLIGHTS
      ================================================= */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#b18a3e]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17b32]">
                Quick Overview
              </span>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              What Makes Each Car Different?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {comparedCars.map((car, index) => (
              <motion.div
                key={car.slug}
                {...animation}
                className="rounded-2xl border border-gray-100 bg-[#fafaf9] p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#a17b32]">
                      Comparison 0{index + 1}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#a17b32] shadow-sm">
                    <CarFront size={22} />
                  </div>
                </div>

                <div className="space-y-4">
                  {car.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-[#b18a3e]"
                      />

                      <p className="text-xs leading-6 text-gray-600">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/cars/${car.slug}`}
                  className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5 text-xs font-bold text-gray-900 transition-colors hover:text-[#a17b32]"
                >
                  Explore {car.name}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          TEST DRIVE CTA
      ================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#e9e2d3] p-7 sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#97712f]">
                Your next journey starts here
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                Found Your Favourite?
                <span className="block">Take the Next Step.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600">
                Explore your favourite model in detail or book a test
                drive to experience it yourself.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {comparedCars.slice(0, 1).map((car) => (
                <React.Fragment key={car.slug}>
                  <Link
                    to={`/book-test-drive?car=${car.slug}`}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#171717] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#a17b32]"
                  >
                    Book a Test Drive
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to={`/cars/${car.slug}`}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#171717]/20 px-7 py-4 text-sm font-bold text-[#171717] transition-colors hover:bg-white"
                  >
                    View Car Details
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          DISCLAIMER
      ================================================= */}
      <section className="border-t border-gray-100 bg-[#f7f7f5] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-start gap-3">
          <Info
            size={17}
            className="mt-0.5 shrink-0 text-[#a17b32]"
          />

          <p className="text-xs leading-6 text-gray-500">
            *Prices, features and configuration information displayed here
            are illustrative demo data, not official quotations or a verified
            specification sheet. Actual prices, features, variants, fuel
            options and availability may vary by city and model year.
            Please verify details with an authorized dealer before making
            a purchase decision.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CompareCars;
