
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CarFront,
  Zap,
  Gauge,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

// ==========================================
// FEATURED CARS DATA
// ==========================================

const featuredCars = [
  {
    id: 1,
    name: "Nexon",
    slug: "nexon",
    category: "SUV",
    subtitle: "Bold. Dynamic. Unstoppable.",
    description:
      "A distinctive SUV designed for confident drives, modern lifestyles and everyday adventures.",
    image: "/images/cars/nexon/exterior.jpg",
    imageAlt: "Tata Nexon SUV exterior front three quarter view",
    tag: "POPULAR CHOICE",
    fuel: "Petrol / Diesel / EV",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: 2,
    name: "Punch",
    slug: "punch",
    category: "SUV",
    subtitle: "Big on style. Big on attitude.",
    description:
      "Compact proportions meet a confident SUV character, ready for everyday city adventures.",
    image: "/images/cars/punch/exterior.jpg",
    imageAlt: "Tata Punch compact SUV exterior photography",
    tag: "CITY ADVENTURE",
    fuel: "Petrol / CNG / EV",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: 3,
    name: "Harrier",
    slug: "harrier",
    category: "SUV",
    subtitle: "Command every journey.",
    description:
      "Experience a commanding SUV presence with premium design, comfort and advanced technology.",
    image: "/images/cars/harrier/exterior.jpg",
    imageAlt: "Tata Harrier premium SUV exterior photography",
    tag: "PREMIUM SUV",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-slate-500/20 to-gray-500/10",
  },
  {
    id: 4,
    name: "Safari",
    slug: "safari",
    category: "SUV",
    subtitle: "Adventure has a new address.",
    description:
      "A premium SUV experience with generous space, distinctive styling and a spirit of exploration.",
    image: "/images/cars/safari/exterior.jpg",
    imageAlt: "Tata Safari premium SUV exterior side view",
    tag: "FAMILY FAVOURITE",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: 5,
    name: "Curvv",
    slug: "curvv",
    category: "SUV",
    subtitle: "The shape of new ambition.",
    description:
      "A striking SUV-coupe silhouette brings expressive design and contemporary technology together.",
    image: "/images/cars/curvv/exterior.webp",
    imageAlt: "Tata Curvv SUV coupe exterior photography",
    tag: "FUTURE INSPIRED",
    fuel: "Petrol / Diesel / EV",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: 6,
    name: "Tiago",
    slug: "tiago",
    category: "Hatchback",
    subtitle: "Make every drive count.",
    description:
      "A practical and stylish hatchback built for comfortable everyday mobility.",
    image: "/images/cars/tiago/exterior.jpg",
    imageAlt: "Tata Tiago hatchback exterior photography",
    tag: "SMART CITY DRIVE",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    icon: CarFront,
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    id: 7,
    name: "Altroz",
    slug: "altroz",
    category: "Hatchback",
    subtitle: "Premium from every angle.",
    description:
      "A premium hatchback experience with expressive styling, thoughtful comfort and versatility.",
    image: "/images/cars/altroz/exterior.png",
    imageAlt: "Tata Altroz premium hatchback exterior photography",
    tag: "PREMIUM HATCHBACK",
    fuel: "Petrol / Diesel / CNG",
    transmission: "Manual / Automatic",
    icon: CarFront,
    accent: "from-rose-500/20 to-red-500/10",
  },
  {
    id: 8,
    name: "Tigor",
    slug: "tigor",
    category: "Sedan",
    subtitle: "Elegance meets everyday comfort.",
    description:
      "A stylish compact sedan that brings together a distinctive design and everyday practicality.",
    image: "/images/cars/tigor/exterior.jpg",
    imageAlt: "Tata Tigor compact sedan exterior photography",
    tag: "ELEGANT SEDAN",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    icon: CarFront,
    accent: "from-indigo-500/20 to-violet-500/10",
  },
];

// ==========================================
// FILTER OPTIONS
// ==========================================

const categories = [
  "All Cars",
  "SUV",
  "Hatchback",
  "Sedan",
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.2,
    },
  },
};

// ==========================================
// CAR CARD COMPONENT
// ==========================================

const CarCard = ({ car, index, shouldReduceMotion }) => {
  const Icon = car.icon;

  return (
    <motion.article
      layout={!shouldReduceMotion}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{
        layout: { duration: 0.3 },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white transition-shadow duration-500 hover:border-[#D5B36A]/50 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
    >
      {/* Image Container */}
      <div className="relative aspect-[1.42/1] overflow-hidden bg-[#F1F2F3]">

        {/* Car Image */}
        <motion.img
          src={car.image}
          alt={car.imageAlt}
          loading="lazy"
          decoding="async"
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.07 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101820]/30 via-transparent to-transparent" />

        {/* Category Tag */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-2 backdrop-blur-md">
          <Icon size={13} className="text-[#B68A37]" />

          <span className="text-[9px] font-extrabold tracking-[0.12em] text-[#101820]">
            {car.category.toUpperCase()}
          </span>
        </div>

        {/* Featured Tag */}
        <div className="absolute right-4 top-4 rounded-full bg-[#101820]/80 px-3 py-2 backdrop-blur-md">
          <span className="text-[8px] font-bold tracking-[0.13em] text-[#F0D59A]">
            {car.tag}
          </span>
        </div>

        {/* Bottom Image Text */}
        <div className="absolute bottom-4 left-5">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-white/90">
            TATA MOTORS
          </span>
        </div>

        {/* Hover Detail Icon */}
        <Link
          to={`/cars/${car.slug}`}
          aria-label={`View ${car.name} details`}
          className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-[#101820] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          <ArrowUpRight size={19} />
        </Link>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Name and Index */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[27px] font-black tracking-[-0.05em] text-[#101820] sm:text-[30px]">
              Tata {car.name}
            </h3>

            <p className="mt-1 text-[11px] font-semibold tracking-wide text-[#B68A37]">
              {car.subtitle}
            </p>
          </div>

          <span className="pt-1 text-xs font-semibold tracking-widest text-slate-300">
            0{index + 1}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 min-h-[66px] text-[12px] leading-[1.9] text-slate-500">
          {car.description}
        </p>

        {/* Specifications */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">

          <div className="flex items-start gap-2">
            <Zap
              size={16}
              className="mt-0.5 shrink-0 text-[#B68A37]"
            />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Fuel Options
              </p>

              <p className="mt-1 text-[10px] font-semibold leading-4 text-slate-700">
                {car.fuel}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Gauge
              size={16}
              className="mt-0.5 shrink-0 text-[#B68A37]"
            />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Transmission
              </p>

              <p className="mt-1 text-[10px] font-semibold leading-4 text-slate-700">
                {car.transmission}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center gap-2 pt-5">
          <Link
            to={`/cars/${car.slug}`}
            className="group/btn flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full bg-[#101820] px-3 text-[10px] font-bold tracking-[0.08em] text-white transition duration-300 hover:bg-[#B68A37]"
          >
            EXPLORE DETAILS

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>

          <Link
            to={`/compare?car=${car.slug}`}
            aria-label={`Compare Tata ${car.name}`}
            title={`Compare Tata ${car.name}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#D1AD65] hover:bg-[#FBF7EE] hover:text-[#A8792D]"
          >
            <SlidersHorizontal size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

// ==========================================
// MAIN FEATURED CARS COMPONENT
// ==========================================

const FeaturedCars = () => {
  const [activeCategory, setActiveCategory] = useState("All Cars");

  const [showAllCars, setShowAllCars] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // ------------------------------------------
  // FILTER CARS
  // ------------------------------------------

  const filteredCars = useMemo(() => {
    if (activeCategory === "All Cars") {
      return featuredCars;
    }

    return featuredCars.filter(
      (car) => car.category === activeCategory
    );
  }, [activeCategory]);

  // ------------------------------------------
  // DISPLAY CARS
  // ------------------------------------------

  const displayedCars = showAllCars
    ? filteredCars
    : filteredCars.slice(0, 4);

  // ------------------------------------------
  // CATEGORY HANDLER
  // ------------------------------------------

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAllCars(false);
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section
      id="featured-cars"
      aria-labelledby="featured-cars-heading"
      className="relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D5B36A]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-slate-300/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =================================
            SECTION HEADER
        ================================= */}

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col justify-between gap-7 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <motion.div
              variants={cardVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#B68A37]" />

              <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#B68A37]">
                DISCOVER YOUR NEXT JOURNEY
              </span>

              <Sparkles
                size={14}
                className="text-[#B68A37]"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="featured-cars-heading"
              variants={cardVariants}
              className="text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.04] tracking-[-0.065em] text-[#101820]"
            >
              Find Your Perfect
              <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-[#A77B32] via-[#C9A45C] to-[#D9BE84]">
                Drive.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={cardVariants}
              className="mt-5 max-w-[530px] text-sm leading-7 text-slate-500 sm:text-base"
            >
              Explore the Tata Motors car range. From stylish
              hatchbacks to powerful SUVs, discover a vehicle
              that matches your lifestyle and every journey.
            </motion.p>
          </div>

          {/* View All */}
          <motion.div variants={cardVariants}>
            <Link
              to="/cars"
              className="group inline-flex items-center gap-3 border-b-2 border-[#C9A45C] pb-2 text-[11px] font-extrabold tracking-[0.13em] text-[#101820] transition hover:text-[#B68A37]"
            >
              EXPLORE ALL CARS

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* =================================
            CATEGORY FILTERS
        ================================= */}

        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div
            role="group"
            aria-label="Filter cars by category"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-3 text-[10px] font-bold tracking-[0.08em] transition-all duration-300 sm:text-[11px] ${
                    isActive
                      ? "border-[#101820] bg-[#101820] text-white shadow-lg shadow-slate-900/10"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#C9A45C] hover:text-[#A77B32]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-slate-400">
            <CarFront size={16} className="text-[#B68A37]" />

            SHOWING {filteredCars.length} MODELS
          </div>
        </div>

        {/* =================================
            CAR GRID
        ================================= */}

        <motion.div
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedCars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <CarFront
              size={36}
              className="mx-auto mb-4 text-slate-300"
            />

            <h3 className="text-lg font-bold text-[#101820]">
              No cars found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try selecting another car category.
            </p>
          </div>
        )}

        {/* =================================
            VIEW MORE
        ================================= */}

        {filteredCars.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCars((prev) => !prev)}
              className="group flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 text-[10px] font-extrabold tracking-[0.12em] text-[#101820] shadow-sm transition duration-300 hover:border-[#C9A45C] hover:bg-[#101820] hover:text-white"
            >
              {showAllCars ? "SHOW LESS" : "VIEW ALL FEATURED CARS"}

              <ChevronRight
                size={16}
                className={`transition-transform duration-300 ${
                  showAllCars
                    ? "rotate-[-90deg]"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}

        {/* =================================
            BOTTOM CTA BANNER
        ================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[26px] bg-[#101820] px-6 py-10 sm:px-10 lg:mt-24 lg:px-16 lg:py-14"
        >
          {/* Decoration */}
          <div className="pointer-events-none absolute -right-10 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-2 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#C69B45]/10 blur-[80px]" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-[570px]">

              <div className="mb-4 flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-[#D5B36A]"
                />

                <span className="text-[9px] font-bold tracking-[0.25em] text-[#D5B36A]">
                  YOUR JOURNEY STARTS HERE
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Still Looking for
                <span className="block text-[#D5B36A]">
                  The Perfect Car?
                </span>
              </h3>

              <p className="mt-4 max-w-[470px] text-sm leading-7 text-slate-400">
                Explore our complete car range, compare your
                favourite models and find the right vehicle
                for your next adventure.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/cars"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#D5B36A] px-7 py-4 text-[10px] font-extrabold tracking-wider text-[#101820] transition hover:bg-white"
              >
                FIND YOUR CAR

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/compare"
                className="flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-[10px] font-bold tracking-wider text-white transition hover:border-[#D5B36A] hover:bg-white/10"
              >
                COMPARE CARS

                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Trust / Information Note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#B68A37]" />

            <span className="text-[9px] font-semibold tracking-wider text-slate-400">
              EXPLORE FEATURES
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Zap size={15} className="text-[#B68A37]" />

            <span className="text-[9px] font-semibold tracking-wider text-slate-400">
              DISCOVER TECHNOLOGY
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CarFront size={15} className="text-[#B68A37]" />

            <span className="text-[9px] font-semibold tracking-wider text-slate-400">
              FIND YOUR NEXT CAR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
