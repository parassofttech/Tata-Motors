
import React, { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  X,
  CarFront,
  Fuel,
  Settings2,
  Wallet,
  ArrowUpDown,
  ArrowRight,
  RotateCcw,
  Heart,
  GitCompareArrows,
  ChevronDown,
  LayoutGrid,
  List,
  Check,
  Sparkles,
  Gauge,
  MoveRight,
} from "lucide-react";

// =====================================================
// CAR DATA
// Update images, prices, specifications and availability
// with verified official model information before launch.
// Prices below are illustrative demo values.
// =====================================================

const carsData = [
  {
    id: 1,
    name: "Nexon",
    fullName: "Tata Nexon",
    slug: "nexon",
    category: "SUV",
    description: "Bold design. Advanced technology. Confident performance.",
    image: "/images/cars/nexon/exterior.jpg",
    price: 8,
    fuel: ["Petrol", "Diesel", "CNG", "Electric"],
    transmission: ["Manual", "Automatic"],
    badge: "Popular Choice",
    featured: true,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 1,
  },
  {
    id: 2,
    name: "Punch",
    fullName: "Tata Punch",
    slug: "punch",
    category: "SUV",
    description: "Big attitude in a compact and capable package.",
    image: "/images/cars/punch/exterior.jpg",
    price: 6,
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    badge: "Urban Favourite",
    featured: true,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 2,
  },
  {
    id: 3,
    name: "Harrier",
    fullName: "Tata Harrier",
    slug: "harrier",
    category: "SUV",
    description: "Commanding presence with premium comfort and technology.",
    image: "/images/cars/harrier/exterior.jpg",
    price: 15,
    fuel: ["Diesel"],
    transmission: ["Manual", "Automatic"],
    badge: "Premium SUV",
    featured: true,
    engine: "Diesel",
    seating: "5 Seats",
    sortPopularity: 3,
  },
  {
    id: 4,
    name: "Safari",
    fullName: "Tata Safari",
    slug: "safari",
    category: "SUV",
    description: "Make every journey memorable with space and sophistication.",
    image: "/images/cars/safari/exterior.jpg",
    price: 16,
    fuel: ["Diesel"],
    transmission: ["Manual", "Automatic"],
    badge: "Family Favourite",
    featured: true,
    engine: "Diesel",
    seating: "6 / 7 Seats",
    sortPopularity: 4,
  },
  {
    id: 5,
    name: "Curvv",
    fullName: "Tata Curvv",
    slug: "curvv",
    category: "SUV",
    description: "A striking blend of SUV presence and coupe-inspired design.",
    image: "/images/cars/curvv/exterior.jpg",
    price: 10,
    fuel: ["Petrol", "Diesel", "Electric"],
    transmission: ["Manual", "Automatic"],
    badge: "Modern Design",
    featured: false,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 5,
  },
  {
    id: 6,
    name: "Tiago",
    fullName: "Tata Tiago",
    slug: "tiago",
    category: "Hatchback",
    description: "Smart, stylish and ready for everyday adventures.",
    image: "/images/cars/tiago/exterior.jpg",
    price: 5,
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    badge: "Smart City Car",
    featured: false,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 6,
  },
  {
    id: 7,
    name: "Altroz",
    fullName: "Tata Altroz",
    slug: "altroz",
    category: "Hatchback",
    description: "Premium styling with comfort and everyday practicality.",
    image: "/images/cars/altroz/exterior.jpg",
    price: 7,
    fuel: ["Petrol", "Diesel", "CNG"],
    transmission: ["Manual", "Automatic"],
    badge: "Premium Hatchback",
    featured: false,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 7,
  },
  {
    id: 8,
    name: "Tigor",
    fullName: "Tata Tigor",
    slug: "tigor",
    category: "Sedan",
    description: "Elegant sedan design built for comfortable journeys.",
    image: "/images/cars/tigor/exterior.jpg",
    price: 6,
    fuel: ["Petrol", "CNG"],
    transmission: ["Manual", "Automatic"],
    badge: "Elegant Sedan",
    featured: false,
    engine: "Multiple options",
    seating: "5 Seats",
    sortPopularity: 8,
  },
];

// =====================================================
// FILTER CONFIGURATION
// =====================================================

const categories = [
  "All Cars",
  "SUV",
  "Hatchback",
  "Sedan",
];

const fuelTypes = [
  "Petrol",
  "Diesel",
  "CNG",
  "Electric",
];

const transmissionTypes = [
  "Manual",
  "Automatic",
];

const budgetOptions = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹8 Lakh", value: "under-8" },
  { label: "₹8 – ₹12 Lakh", value: "8-12" },
  { label: "₹12 – ₹18 Lakh", value: "12-18" },
  { label: "Above ₹18 Lakh", value: "above-18" },
];

const initialFilters = {
  bodyType: "",
  budget: "",
  fuel: "",
  transmission: "",
  search: "",
};

const budgetMatches = (price, budget) => {
  switch (budget) {
    case "under-8":
      return price < 8;
    case "8-12":
      return price >= 8 && price <= 12;
    case "12-18":
      return price > 12 && price <= 18;
    case "above-18":
      return price > 18;
    default:
      return true;
  }
};

const formatPrice = (price) => {
  return `₹${price.toFixed(2)} Lakh*`;
};

// =====================================================
// REUSABLE FILTER CHECKBOX
// =====================================================

const FilterOption = ({ label, checked, onChange }) => (
  <label className="group flex cursor-pointer items-center gap-3 py-2">
    <span
      className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md border transition-all ${
        checked
          ? "border-[#b18a3e] bg-[#b18a3e] text-white"
          : "border-gray-300 bg-white group-hover:border-[#b18a3e]"
      }`}
    >
      {checked && <Check size={13} strokeWidth={3} />}
    </span>

    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />

    <span
      className={`text-sm transition-colors ${
        checked
          ? "font-semibold text-gray-900"
          : "text-gray-500 group-hover:text-gray-900"
      }`}
    >
      {label}
    </span>
  </label>
);

// =====================================================
// FILTER SECTION
// =====================================================

const FilterSection = ({ title, icon: Icon, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-100 py-5 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3"
      >
        <span className="flex items-center gap-3 text-sm font-bold text-gray-900">
          <Icon size={17} className="text-[#b18a3e]" />
          {title}
        </span>

        <ChevronDown
          size={17}
          className={`text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// =====================================================
// CAR CARD
// =====================================================

const CarCard = ({
  car,
  index,
  selected,
  onCompare,
  shouldReduceMotion,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.06,
      }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_5px_25px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.09)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f1f1ef]">
        {!imageError ? (
          <img
            src={car.image}
            alt={`${car.fullName} exterior`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-400">
            <CarFront size={48} strokeWidth={1.2} />
            <span className="text-xs font-medium">
              Add {car.name} image
            </span>
          </div>
        )}

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/40 bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {car.badge}
          </span>
        </div>

        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-gray-700 shadow-sm backdrop-blur-md">
            {car.category}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ad883d]">
              Tata Motors
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {car.name}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Demo starting price
            </p>
            <p className="mt-1 text-base font-bold text-gray-900">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>

        <p className="mt-3 min-h-[44px] text-sm leading-6 text-gray-500">
          {car.description}
        </p>

        {/* Specifications */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-gray-100 border-y border-gray-100 py-4">
          <div className="pr-2">
            <Fuel size={16} className="mb-2 text-[#b18a3e]" />
            <p className="text-[10px] text-gray-400">Fuel options</p>
            <p className="mt-1 text-xs font-semibold text-gray-700">
              {car.fuel.length} Types
            </p>
          </div>

          <div className="px-3">
            <Settings2 size={16} className="mb-2 text-[#b18a3e]" />
            <p className="text-[10px] text-gray-400">Transmission</p>
            <p className="mt-1 text-xs font-semibold text-gray-700">
              {car.transmission.length} Types
            </p>
          </div>

          <div className="pl-3">
            <CarFront size={16} className="mb-2 text-[#b18a3e]" />
            <p className="text-[10px] text-gray-400">Seating</p>
            <p className="mt-1 text-xs font-semibold text-gray-700">
              {car.seating}
            </p>
          </div>
        </div>

        {/* Fuel tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {car.fuel.map((fuel) => (
            <span
              key={fuel}
              className="rounded-md bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-500"
            >
              {fuel}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          <Link
            to={`/cars/${car.slug}`}
            className="group/button flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#171717] px-3 py-3 text-xs font-bold text-white transition-all hover:bg-[#b18a3e]"
          >
            Explore Car
            <ArrowRight
              size={15}
              className="transition-transform group-hover/button:translate-x-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => onCompare(car)}
            aria-label={`${
              selected ? "Remove" : "Add"
            } ${car.name} ${selected ? "from" : "to"} comparison`}
            aria-pressed={selected}
            className={`flex h-11 w-12 shrink-0 items-center justify-center rounded-lg border transition-all ${
              selected
                ? "border-[#b18a3e] bg-[#f8f2e5] text-[#a17b32]"
                : "border-gray-200 bg-white text-gray-500 hover:border-[#b18a3e] hover:text-[#a17b32]"
            }`}
          >
            {selected ? (
              <Check size={18} />
            ) : (
              <GitCompareArrows size={18} />
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

// =====================================================
// MAIN CARS PAGE
// =====================================================

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  const [filters, setFilters] = useState(() => ({
    ...initialFilters,
    bodyType: searchParams.get("bodyType") || "",
    budget: searchParams.get("budget") || "",
    fuel: searchParams.get("fuel") || "",
    transmission: searchParams.get("transmission") || "",
    search: searchParams.get("search") || "",
  }));

  const [sortBy, setSortBy] = useState("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  // Keep filters in sync with browser back/forward navigation.
  useEffect(() => {
    setFilters({
      ...initialFilters,
      bodyType: searchParams.get("bodyType") || "",
      budget: searchParams.get("budget") || "",
      fuel: searchParams.get("fuel") || "",
      transmission: searchParams.get("transmission") || "",
      search: searchParams.get("search") || "",
    });
  }, [searchParams]);

  // Update a single filter.
  const updateFilter = (key, value) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  // Apply all filters.
  const filteredCars = useMemo(() => {
    let result = [...carsData];

    if (filters.bodyType) {
      result = result.filter(
        (car) => car.category === filters.bodyType
      );
    }

    if (filters.budget) {
      result = result.filter((car) =>
        budgetMatches(car.price, filters.budget)
      );
    }

    if (filters.fuel) {
      result = result.filter((car) =>
        car.fuel.includes(filters.fuel)
      );
    }

    if (filters.transmission) {
      result = result.filter((car) =>
        car.transmission.includes(filters.transmission)
      );
    }

    if (filters.search.trim()) {
      const search = filters.search.trim().toLowerCase();

      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(search) ||
          car.fullName.toLowerCase().includes(search) ||
          car.category.toLowerCase().includes(search)
      );
    }

    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "popular":
      default:
        result.sort(
          (a, b) => a.sortPopularity - b.sortPopularity
        );
        break;
    }

    return result;
  }, [filters, sortBy]);

  const activeFiltersCount = Object.values(filters).filter(
    Boolean
  ).length;

  // Reset all filters and URL query parameters.
  const resetFilters = () => {
    setFilters(initialFilters);
    setSearchParams({});
  };

  // Apply selected filters to URL.
  const applyFilters = () => {
    const params = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value.trim()) {
        params[key] = value;
      }
    });

    setSearchParams(params);
    setMobileFiltersOpen(false);
  };

  // Add or remove car from compare list.
  const handleCompare = (car) => {
    setCompareList((previous) => {
      const alreadySelected = previous.some(
        (item) => item.id === car.id
      );

      if (alreadySelected) {
        return previous.filter((item) => item.id !== car.id);
      }

      if (previous.length >= 3) {
        return previous;
      }

      return [...previous, car];
    });
  };

  // Compare page URL.
  const compareUrl = `/compare?${compareList
    .map((car) => `car=${encodeURIComponent(car.slug)}`)
    .join("&")}`;

  // Sidebar content shared between desktop and mobile.
  const renderFilters = () => (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Filters
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Refine your search
          </p>
        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#a17b32] hover:text-black"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      {/* Body type */}
      <FilterSection title="Body Type" icon={CarFront}>
        {categories.slice(1).map((category) => (
          <FilterOption
            key={category}
            label={category}
            checked={filters.bodyType === category}
            onChange={() =>
              updateFilter(
                "bodyType",
                filters.bodyType === category ? "" : category
              )
            }
          />
        ))}
      </FilterSection>

      {/* Budget */}
      <FilterSection title="Your Budget" icon={Wallet}>
        {budgetOptions.map((option) => (
          <FilterOption
            key={option.value || "any"}
            label={option.label}
            checked={filters.budget === option.value}
            onChange={() =>
              updateFilter("budget", option.value)
            }
          />
        ))}
      </FilterSection>

      {/* Fuel */}
      <FilterSection title="Fuel Type" icon={Fuel}>
        {fuelTypes.map((fuel) => (
          <FilterOption
            key={fuel}
            label={fuel}
            checked={filters.fuel === fuel}
            onChange={() =>
              updateFilter(
                "fuel",
                filters.fuel === fuel ? "" : fuel
              )
            }
          />
        ))}
      </FilterSection>

      {/* Transmission */}
      <FilterSection title="Transmission" icon={Settings2}>
        {transmissionTypes.map((type) => (
          <FilterOption
            key={type}
            label={type}
            checked={filters.transmission === type}
            onChange={() =>
              updateFilter(
                "transmission",
                filters.transmission === type ? "" : type
              )
            }
          />
        ))}
      </FilterSection>

      <button
        type="button"
        onClick={applyFilters}
        className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b18a3e]"
      >
        Apply Filters
        <ArrowRight size={16} />
      </button>
    </>
  );

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      {/* =========================================
          PAGE HERO
      ========================================= */}
      <section className="relative overflow-hidden bg-[#151515] px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-10 -top-32 h-[350px] w-[350px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#b18a3e]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-px w-9 bg-[#c6a052]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d5b15f]">
                Discover the Collection
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block text-[#d5b15f]">
                Perfect Drive.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Explore a collection of cars designed to match your
              lifestyle. From everyday city drives to unforgettable
              adventures, discover your next journey.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">
                  {carsData.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                  Featured Models
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold text-white">03</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                  Body Categories
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold text-white">04</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                  Filter Options
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          MAIN LISTING
      ========================================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs text-gray-400"
          >
            <Link to="/" className="transition-colors hover:text-[#a17b32]">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">
              Explore Cars
            </span>
          </nav>

          {/* Search and category */}
          <div className="mb-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#b18a3e]">
                  Find Your Match
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Explore Our Cars
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Choose a car that feels right for your journey.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative min-w-0 flex-1 sm:w-64 sm:flex-none">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="search"
                    value={filters.search}
                    onChange={(event) =>
                      updateFilter("search", event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        applyFilters();
                      }
                    }}
                    placeholder="Search cars..."
                    aria-label="Search cars"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition-all focus:border-[#b18a3e] focus:ring-4 focus:ring-[#b18a3e]/10"
                  />
                </div>

                {/* Mobile filter */}
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="relative flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 lg:hidden"
                >
                  <SlidersHorizontal size={17} />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b18a3e] px-1 text-[10px] text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Category tabs */}
            <div className="mt-8 flex gap-2 overflow-x-auto border-b border-gray-200 pb-3">
              {categories.map((category) => {
                const value =
                  category === "All Cars" ? "" : category;

                const active = filters.bodyType === value;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => updateFilter("bodyType", value)}
                    className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold transition-all ${
                      active
                        ? "bg-[#171717] text-white shadow-md"
                        : "bg-white text-gray-500 hover:bg-[#eee9dc] hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                {renderFilters()}
              </div>
            </aside>

            {/* Results */}
            <div className="min-w-0">
              {/* Results toolbar */}
              <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {filteredCars.length} Cars Found
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Explore models matching your preferences.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* View mode */}
                  <div className="hidden items-center rounded-lg bg-gray-100 p-1 sm:flex">
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      aria-label="Grid view"
                      aria-pressed={viewMode === "grid"}
                      className={`rounded-md p-2 ${
                        viewMode === "grid"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-400"
                      }`}
                    >
                      <LayoutGrid size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      aria-label="List view"
                      aria-pressed={viewMode === "list"}
                      className={`rounded-md p-2 ${
                        viewMode === "list"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-400"
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <ArrowUpDown size={15} className="text-gray-400" />

                    <label
                      htmlFor="sort-cars"
                      className="sr-only"
                    >
                      Sort cars
                    </label>

                    <select
                      id="sort-cars"
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      className="h-10 max-w-[190px] rounded-lg border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-700 outline-none focus:border-[#b18a3e]"
                    >
                      <option value="popular">Most Popular</option>
                      <option value="name">Name: A to Z</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Active filter tags */}
              {activeFiltersCount > 0 && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs font-semibold text-gray-500">
                    Active:
                  </span>

                  {Object.entries(filters).map(([key, value]) => {
                    if (!value) return null;

                    const labels = {
                      bodyType: value,
                      budget:
                        budgetOptions.find(
                          (option) => option.value === value
                        )?.label || value,
                      fuel: value,
                      transmission: value,
                      search: `Search: ${value}`,
                    };

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => updateFilter(key, "")}
                        className="inline-flex items-center gap-2 rounded-full border border-[#c6a052]/30 bg-[#f8f4e9] px-3 py-1.5 text-xs font-semibold text-[#896b30]"
                      >
                        {labels[key]}
                        <X size={12} />
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="ml-1 text-xs font-bold text-gray-500 underline underline-offset-4 hover:text-black"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Car grid */}
              {filteredCars.length > 0 ? (
                <motion.div
                  layout
                  className={`grid gap-6 ${
                    viewMode === "list"
                      ? "grid-cols-1"
                      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-2"
                  }`}
                >
                  <AnimatePresence mode="popLayout">
                    {filteredCars.map((car, index) => (
                      <CarCard
                        key={car.id}
                        car={car}
                        index={index}
                        selected={compareList.some(
                          (item) => item.id === car.id
                        )}
                        onCompare={handleCompare}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* Empty state */
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f2e8] text-[#b18a3e]">
                    <Search size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    No Cars Found
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                    We couldn't find a car matching all your selected
                    preferences. Try changing or clearing some filters.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#171717] px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-[#b18a3e]"
                  >
                    <RotateCcw size={15} />
                    Reset All Filters
                  </button>
                </div>
              )}

              {/* Disclaimer */}
              <p className="mt-8 text-xs leading-6 text-gray-400">
                *Prices shown are illustrative demo values, not official
                ex-showroom or on-road prices. Availability, variants,
                features and specifications may differ by location.
                Please confirm current details with an authorized dealer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          COMPARE BAR
      ========================================= */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#171717] p-4 text-white shadow-2xl sm:bottom-6 sm:px-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <GitCompareArrows
                    size={18}
                    className="shrink-0 text-[#d5b15f]"
                  />

                  <p className="text-sm font-bold">
                    Compare Cars ({compareList.length}/3)
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {compareList.map((car) => (
                    <span
                      key={car.id}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-gray-200"
                    >
                      {car.name}

                      <button
                        type="button"
                        onClick={() => handleCompare(car)}
                        aria-label={`Remove ${car.name} from comparison`}
                        className="text-gray-400 hover:text-white"
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                </div>

                {compareList.length === 3 && (
                  <p className="mt-2 text-[10px] text-[#d5b15f]">
                    Maximum of 3 cars selected.
                  </p>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCompareList([])}
                  className="rounded-lg px-3 py-3 text-xs font-semibold text-gray-400 hover:text-white"
                >
                  Clear
                </button>

                <Link
                  to={compareUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#d0aa58] px-5 py-3 text-xs font-bold text-[#171717] transition-colors hover:bg-white"
                >
                  Compare Now
                  <MoveRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MOBILE FILTER DRAWER
      ========================================= */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close filters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[390px] flex-col bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Car filters"
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Filter Cars
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Customize your preferences
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filter panel"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {renderFilters()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Cars;
