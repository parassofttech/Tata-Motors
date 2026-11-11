
import React, { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  ChevronRight,
  Zap,
  Leaf,
  ShieldCheck,
  Sparkles,
  X,
  Gauge,
  PlugZap,
  MoveUpRight,
  CarFront,
} from "lucide-react";

// ==========================================
// ELECTRIC VEHICLE DATA
// ==========================================

const electricCars = [
  {
    id: "nexon-ev",
    name: "Nexon.ev",
    category: "SUV",
    tagline: "Electric. Unmissable.",
    description:
      "Experience a new dimension of electric mobility with a bold SUV design, modern technology and an exciting driving experience.",
    image: "/images/ev/nexon-ev.jpg",
    badge: "Popular Choice",
    highlights: [
      "Modern SUV styling",
      "Connected car technology",
      "Multiple drive modes",
    ],
  },
  {
    id: "punch-ev",
    name: "Punch.ev",
    category: "Compact SUV",
    tagline: "Make every move electric.",
    description:
      "A distinctive electric SUV designed for urban adventures, everyday comfort and a confident road presence.",
    image: "/images/ev/punch-ev.jpg",
    badge: "Urban Favourite",
    highlights: [
      "Compact SUV design",
      "Smart technology",
      "Everyday practicality",
    ],
  },
  {
    id: "curvv-ev",
    name: "Curvv.ev",
    category: "SUV Coupe",
    tagline: "The future has a new shape.",
    description:
      "A futuristic electric SUV coupe combining a striking silhouette, premium character and technology-focused interiors.",
    image: "/images/ev/curvv-ev.jpg",
    badge: "Premium Design",
    highlights: [
      "SUV coupe silhouette",
      "Premium cabin experience",
      "Advanced technology",
    ],
  },
  {
    id: "tiago-ev",
    name: "Tiago.ev",
    category: "Hatchback",
    tagline: "Small car. Big electric energy.",
    description:
      "Discover electric mobility in a compact hatchback designed for convenient everyday journeys.",
    image: "/images/ev/tiago-ev.jpg",
    badge: "City Ready",
    highlights: [
      "Compact hatchback",
      "Urban-friendly design",
      "Everyday convenience",
    ],
  },
];

const filters = [
  "All EVs",
  "SUV",
  "Compact SUV",
  "SUV Coupe",
  "Hatchback",
];

// ==========================================
// BENEFITS DATA
// ==========================================

const benefits = [
  {
    icon: Zap,
    number: "01",
    title: "Instant Response",
    description:
      "Enjoy smooth and responsive acceleration with the distinctive feel of electric driving.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Electric Mobility",
    description:
      "Explore a mobility option with zero tailpipe emissions while driving.",
  },
  {
    icon: BatteryCharging,
    number: "03",
    title: "Charging Solutions",
    description:
      "Discover convenient home and public charging possibilities for your journeys.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Smart Technology",
    description:
      "Experience modern technology and connected features designed around your drive.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

const ElectricVehicles = () => {
  const [activeFilter, setActiveFilter] = useState("All EVs");
  const [selectedCar, setSelectedCar] = useState(null);

  const shouldReduceMotion = useReducedMotion();

  const filteredCars = useMemo(() => {
    if (activeFilter === "All EVs") {
      return electricCars;
    }

    return electricCars.filter(
      (car) => car.category === activeFilter
    );
  }, [activeFilter]);

  const sectionAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      };

  return (
    <section
      id="electric-vehicles"
      className="relative overflow-hidden bg-[#f8f8f6] py-20 text-[#171717] sm:py-24 lg:py-28"
    >
      {/* ==================================
          BACKGROUND DECORATION
      ================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#c5a15b]/[0.07] blur-[130px]" />

        <div className="absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#c5a15b]/[0.05] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================
            SECTION HEADER
        ================================== */}

        <motion.div
          {...sectionAnimation}
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
              <Zap
                size={14}
                className="text-[#a47c36]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#92702f] sm:text-xs">
                The Electric Revolution
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              Meet the future.
              <br />

              <span className="text-[#b18c49]">
                Feel the electric.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#666666] sm:text-base">
              Discover a new way to move. Explore the Tata electric
              vehicle range, where distinctive design meets intelligent
              technology and the excitement of electric driving.
            </p>
          </div>

          <Link
            to="/cars?fuel=electric"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#b18c49] pb-2 text-sm font-semibold text-[#92702f] transition hover:text-[#171717]"
          >
            Explore all electric cars

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* ==================================
            HIGHLIGHT STRIP
        ================================== */}

        <motion.div
          {...sectionAnimation}
          className="mb-16 grid grid-cols-2 gap-3 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_8px_35px_rgba(0,0,0,0.035)] sm:grid-cols-4 sm:gap-0 sm:p-6"
        >
          {[
            {
              icon: BatteryCharging,
              title: "Electric Power",
              subtitle: "Explore EV technology",
            },
            {
              icon: PlugZap,
              title: "Charging Solutions",
              subtitle: "Home & public options",
            },
            {
              icon: Leaf,
              title: "Electric Mobility",
              subtitle: "Zero tailpipe emissions",
            },
            {
              icon: Sparkles,
              title: "Modern Experience",
              subtitle: "Technology-led mobility",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-3 p-3 ${
                  index !== 0
                    ? "sm:border-l sm:border-black/[0.07]"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-black/[0.07] sm:border-t-0"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <Icon size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#242424] sm:text-sm">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] text-[#898989] sm:text-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ==================================
            VEHICLE SECTION HEADING
        ================================== */}

        <motion.div
          {...sectionAnimation}
          className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a17b39]">
              Find your electric drive
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
              Explore the EV range
            </h3>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#777777]">
            Find the electric vehicle that matches your lifestyle
            and makes every journey more exciting.
          </p>
        </motion.div>

        {/* ==================================
            FILTER BUTTONS
        ================================== */}

        <div className="mb-9 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#b99753] bg-[#b99753] text-white shadow-md shadow-[#b99753]/20"
                    : "border-black/10 bg-white text-[#666666] hover:border-[#b99753] hover:text-[#92702f]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ==================================
            ELECTRIC VEHICLE CARDS
        ================================== */}

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, index) => (
              <motion.article
                key={car.id}
                layout
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                        scale: 0.97,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.95,
                      }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b99753]/40 hover:shadow-[0_22px_55px_rgba(0,0,0,0.10)]"
              >

                {/* CAR IMAGE */}

                <div className="relative h-56 overflow-hidden bg-[#e9e8e4] sm:h-60">

                  <img
                    src={car.image}
                    alt={`${car.name} electric vehicle`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  {/* Badge */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {car.badge}
                    </span>
                  </div>

                  {/* EV Icon */}

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/35 text-[#e0bd79] backdrop-blur-md">
                    <Zap size={17} fill="currentColor" />
                  </div>

                  {/* Car Name */}

                  <div className="absolute bottom-5 left-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6c98e]">
                      {car.category}
                    </span>

                    <h4 className="mt-1 text-3xl font-semibold tracking-tight text-white">
                      {car.name}
                    </h4>
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="flex flex-1 flex-col p-5">

                  <p className="text-sm font-semibold text-[#242424]">
                    {car.tagline}
                  </p>

                  <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#777777]">
                    {car.description}
                  </p>

                  <div className="my-5 h-px bg-black/[0.07]" />

                  <div className="mb-6 space-y-3">
                    {car.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2.5 text-xs text-[#555555]"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b99753]/15 text-[#9a7739]">
                          <Check size={10} strokeWidth={3} />
                        </span>

                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* CARD ACTIONS */}

                  <div className="mt-auto flex items-center gap-2">
                    <Link
                      to={`/cars?search=${encodeURIComponent(car.name)}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#b99753] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#9e7b3f]"
                    >
                      Explore Vehicle

                      <ArrowRight size={15} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedCar(car)}
                      aria-label={`View details of ${car.name}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-[#555555] transition hover:border-[#b99753] hover:bg-[#b99753] hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ==================================
            BENEFITS SECTION
        ================================== */}

        <motion.div
          {...sectionAnimation}
          className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a17b39]">
              <Sparkles size={15} />
              Beyond the drive
            </div>

            <h3 className="text-3xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-4xl">
              More than electric.
              <br />

              <span className="text-[#b99753]">
                A smarter way forward.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#777777]">
              Electric mobility is about more than changing how a
              vehicle moves. It is about exploring new technology,
              thoughtful convenience and a different driving experience.
            </p>

            <Link
              to="/cars?fuel=electric"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#b99753] px-6 py-3 text-sm font-semibold text-[#92702f] transition hover:bg-[#b99753] hover:text-white"
            >
              Discover electric mobility

              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5 }
                  }
                  className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.025)] transition hover:border-[#b99753]/40 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39] transition group-hover:bg-[#b99753] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-[#b99753]/50">
                      {benefit.number}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#242424]">
                    {benefit.title}
                  </h4>

                  <p className="mt-3 text-xs leading-6 text-[#777777]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ==================================
            FINAL CTA BANNER
        ================================== */}

        <motion.div
          {...sectionAnimation}
          className="relative mt-24 overflow-hidden rounded-3xl bg-[#171717] p-8 text-white sm:p-12 lg:p-14"
        >
          {/* Decorative circles */}

          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#b99753]/15" />

          <div className="pointer-events-none absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#b99753]/15" />

          <div className="pointer-events-none absolute bottom-0 right-32 h-52 w-52 rounded-full bg-[#b99753]/10 blur-[85px]" />

          <div className="relative z-10 flex flex-col justify-between gap-9 md:flex-row md:items-center">

            <div className="max-w-xl">

              <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfbd7d]">
                <CarFront size={17} />

                Your electric journey starts here
              </div>

              <h3 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Ready to experience
                <br />

                <span className="text-[#d1ad6c]">
                  electric driving?
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                Find a vehicle that fits your lifestyle and take
                the next step towards your electric driving experience.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                to="/book-test-drive"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#d0ad69]"
              >
                Book a Test Drive

                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/dealer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#b99753] hover:text-[#dfbd7d]"
              >
                Find a Dealer

                <MoveUpRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* DISCLAIMER */}

        <p className="mx-auto mt-8 max-w-4xl text-center text-[10px] leading-5 text-[#999999]">
          Vehicle availability, specifications, features and images may
          vary by model year and variant. Please refer to official Tata
          Motors information for current details.
        </p>
      </div>

      {/* ==================================
          VEHICLE DETAILS MODAL
      ================================== */}

      <AnimatePresence>
        {selectedCar && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCar(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ev-modal-title"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
            >

              {/* Modal Image */}

              <div className="relative h-56 overflow-hidden bg-[#e9e8e4]">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                <button
                  type="button"
                  onClick={() => setSelectedCar(null)}
                  aria-label="Close details"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-[#b99753]"
                >
                  <X size={19} />
                </button>

                <div className="absolute bottom-5 left-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfbd7d]">
                    {selectedCar.category}
                  </p>

                  <h3
                    id="ev-modal-title"
                    className="mt-1 text-4xl font-semibold text-white"
                  >
                    {selectedCar.name}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}

              <div className="p-6 sm:p-8">
                <p className="text-lg font-semibold text-[#242424]">
                  {selectedCar.tagline}
                </p>

                <p className="mt-3 text-sm leading-7 text-[#777777]">
                  {selectedCar.description}
                </p>

                <div className="my-6 h-px bg-black/10" />

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#a17b39]">
                  Vehicle Highlights
                </p>

                <div className="space-y-3">
                  {selectedCar.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-[#555555]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b99753]/15 text-[#9a7739]">
                        <Check size={13} />
                      </span>

                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/cars?search=${encodeURIComponent(selectedCar.name)}`}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b99753] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#9e7b3f]"
                >
                  Explore {selectedCar.name}

                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ElectricVehicles;
