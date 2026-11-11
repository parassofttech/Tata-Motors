
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Leaf,
  MapPin,
  Menu,
  PlugZap,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
  Gauge,
  CarFront,
  CalendarDays,
  Info,
} from "lucide-react";

const electricCars = [
  {
    id: "nexon-ev",
    name: "Nexon.ev",
    category: "Electric SUV",
    type: "SUV",
    image: "/images/ev/nexon-ev.jpg",
    badge: "Popular Choice",
    description:
      "A bold electric SUV experience with contemporary design, connected technology and everyday practicality.",
    highlights: [
      "SUV-inspired design",
      "Connected technology",
      "Multiple driving modes",
      "Comfort-focused cabin",
    ],
    link: "/cars/nexon-ev",
  },
  {
    id: "punch-ev",
    name: "Punch.ev",
    category: "Electric Compact SUV",
    type: "Compact SUV",
    image: "/images/ev/punch-ev.jpg",
    badge: "Urban Explorer",
    description:
      "A compact electric SUV designed for city journeys, confident styling and modern everyday mobility.",
    highlights: [
      "Compact SUV proportions",
      "Modern cabin experience",
      "Electric powertrain",
      "City-friendly character",
    ],
    link: "/cars/punch-ev",
  },
  {
    id: "curvv-ev",
    name: "Curvv.ev",
    category: "Electric SUV Coupe",
    type: "SUV Coupe",
    image: "/images/ev/curvv-ev.jpg",
    badge: "Distinctive Design",
    description:
      "A distinctive electric SUV coupe that brings together expressive styling and contemporary electric mobility.",
    highlights: [
      "SUV coupe styling",
      "Modern exterior design",
      "Technology-focused cabin",
      "Electric driving experience",
    ],
    link: "/cars/curvv-ev",
  },
  {
    id: "tiago-ev",
    name: "Tiago.ev",
    category: "Electric Hatchback",
    type: "Hatchback",
    image: "/images/ev/tiago-ev.jpg",
    badge: "City Companion",
    description:
      "A practical electric hatchback for customers exploring convenient and accessible urban mobility.",
    highlights: [
      "Compact hatchback design",
      "Easy urban manoeuvrability",
      "Everyday practicality",
      "Electric mobility",
    ],
    link: "/cars/tiago-ev",
  },
];

const categories = [
  "All EVs",
  "SUV",
  "Compact SUV",
  "SUV Coupe",
  "Hatchback",
];

const benefits = [
  {
    icon: Leaf,
    title: "A different way to move",
    description:
      "Explore electric mobility and discover an alternative to conventional petrol and diesel driving.",
  },
  {
    icon: Zap,
    title: "Instant electric response",
    description:
      "Electric powertrains deliver responsive acceleration characteristics for everyday journeys.",
  },
  {
    icon: PlugZap,
    title: "Charging flexibility",
    description:
      "Explore available charging solutions and understand which setup works for your driving routine.",
  },
  {
    icon: ShieldCheck,
    title: "Technology-led experience",
    description:
      "Discover vehicle technology, safety features and connected experiences across the EV range.",
  },
];

const technologies = [
  {
    icon: BatteryCharging,
    title: "Battery technology",
    description:
      "Explore the battery systems and electric powertrain technology available across different models.",
  },
  {
    icon: Gauge,
    title: "Driving experience",
    description:
      "Experience the distinctive response and driving characteristics of electric vehicles.",
  },
  {
    icon: PlugZap,
    title: "Charging ecosystem",
    description:
      "Understand home charging, compatible charging equipment and public charging options.",
  },
  {
    icon: Sparkles,
    title: "Smart features",
    description:
      "Explore digital interfaces, connected features and convenience technologies available by variant.",
  },
];

const faqs = [
  {
    question: "What is an electric vehicle?",
    answer:
      "An electric vehicle uses an electric motor and a battery-powered electric drivetrain instead of a conventional petrol or diesel engine. The battery is recharged using compatible charging equipment.",
  },
  {
    question: "Which Tata electric cars can I explore?",
    answer:
      "You can explore models such as Nexon.ev, Punch.ev, Curvv.ev and Tiago.ev on this page. Availability and variants may change, so check the latest details with an authorised dealership.",
  },
  {
    question: "How can I charge an electric car?",
    answer:
      "Electric vehicles can be charged using compatible home charging solutions and supported public charging stations. Charging time depends on the vehicle, charger type, battery condition and other factors.",
  },
  {
    question: "How long does EV charging take?",
    answer:
      "Charging time varies by model, battery configuration, charger power and charging conditions. Refer to the official specifications for the particular vehicle and variant.",
  },
  {
    question: "Can I book an electric vehicle test drive?",
    answer:
      "Yes. You can use the Book Test Drive page on this website to submit your preferred EV model and contact details. A real booking will require a connected backend and dealership confirmation.",
  },
  {
    question: "Are all features available in every EV variant?",
    answer:
      "No. Equipment, technology, battery options and features can vary by model and variant. Always review the latest official brochure and variant details before making a purchase decision.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] ${
        light ? "text-[#d1ad6c]" : "text-[#a17b39]"
      }`}
    >
      <span className="h-px w-9 bg-current" />
      {children}
    </div>
  );
}

function ElectricCarsPage() {
  const reduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState("All EVs");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Electric Vehicles | Explore Tata EV Range";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore the electric vehicle range, discover EV technology, learn about charging and find an electric vehicle for your next journey.";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredCars = useMemo(() => {
    return electricCars.filter((car) => {
      const matchesCategory =
        activeCategory === "All EVs" ||
        car.type === activeCategory;

      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const motionProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
      };

  return (
    <main className="overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#171717] pt-[76px] md:min-h-[690px] md:pt-[108px]">
        <div className="absolute inset-0">
          <img
            src="/images/ev/ev-hero.jpg"
            alt="Electric vehicle on a modern road"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#171717]/80 to-[#171717]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/75 via-transparent to-transparent" />
        </div>

        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full border border-[#d1ad6c]/20 md:h-[500px] md:w-[500px]" />
        <div className="absolute -right-10 top-40 h-60 w-60 rounded-full border border-[#d1ad6c]/15 md:h-[390px] md:w-[390px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <SectionLabel light>Electric Mobility</SectionLabel>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
              The future is
              <br />
              <span className="text-[#d1ad6c]">
                electric.
              </span>
              <br />
              Make it yours.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Discover a new way to experience mobility. Explore
              electric vehicles that bring together contemporary
              design, evolving technology and everyday practicality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#electric-lineup"
                className="group inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
              >
                Explore EV Range
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/book-test-drive"
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
              >
                Book Test Drive
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/65">
              <span className="flex items-center gap-2">
                <Zap size={17} className="text-[#d1ad6c]" />
                Electric mobility
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={17} className="text-[#d1ad6c]" />
                Modern technology
              </span>
              <span className="flex items-center gap-2">
                <CarFront size={17} className="text-[#d1ad6c]" />
                Multiple body styles
              </span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 lg:flex">
          <span className="h-px w-12 bg-[#d1ad6c]" />
          Discover electric
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-[#eae6de] bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              A new way to move
            </p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
              Explore the electric vehicle lineup.
            </h2>
          </div>

          <a
            href="#electric-lineup"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#a17b39] transition hover:gap-4"
          >
            View all electric cars
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* EV LINEUP */}
      <section
        id="electric-lineup"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...motionProps}
            className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <SectionLabel>Explore Our EV Range</SectionLabel>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Find your perfect
                <span className="text-[#a17b39]"> electric drive.</span>
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                From compact city-friendly vehicles to distinctive
                electric SUVs, discover a model that fits your lifestyle.
              </p>
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search electric cars..."
                className="w-full rounded-full border border-[#e5e0d6] bg-white py-4 pl-12 pr-5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10"
              />
            </div>
          </motion.div>

          {/* FILTERS */}
          <div className="mt-10 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#171717] text-white shadow-lg"
                    : "border border-[#e5e0d6] bg-white text-gray-600 hover:border-[#b99753] hover:text-[#a17b39]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* VEHICLE CARDS */}
          <motion.div
            layout
            className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <motion.article
                  layout
                  key={car.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group overflow-hidden rounded-[24px] border border-[#e9e4da] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="relative overflow-hidden bg-[#f1f0ec]">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#8e6b32] backdrop-blur">
                      {car.badge}
                    </div>

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/90 text-[#d1ad6c]">
                      <Zap size={19} />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a17b39]">
                      {car.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {car.name}
                    </h3>

                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-600">
                      {car.description}
                    </p>

                    <div className="mt-5 flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCar(car)}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-[#ded8cb] py-3 text-sm font-bold text-[#171717] transition hover:border-[#b99753] hover:bg-[#f8f5ef]"
                      >
                        Explore Features
                        <ArrowUpRight size={16} />
                      </button>

                      <Link
                        to={car.link}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] py-3 text-sm font-bold text-white transition hover:bg-[#a17b39]"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCars.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-[#d8d0c2] bg-white px-6 py-16 text-center">
              <CarFront
                size={38}
                className="mx-auto text-[#b99753]"
              />
              <h3 className="mt-4 text-xl font-semibold">
                No electric vehicles found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All EVs");
                }}
                className="mt-6 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white hover:bg-[#a17b39]"
              >
                Reset Filters
              </button>
            </div>
          )}

          <p className="mt-8 text-xs leading-6 text-gray-500">
            Vehicle images, variants, specifications, equipment and
            availability should be checked against the latest official
            model information.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f0eee8] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...motionProps}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>Why Electric</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Experience a different
              <span className="text-[#a17b39]"> kind of drive.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Electric mobility brings a different driving experience
              with new technology, charging options and ownership
              considerations.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? {} : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="rounded-[22px] border border-[#e5dfd3] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f0e6] text-[#a17b39]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[28px] bg-[#e8e5df]">
              <img
                src="/images/ev/ev-technology.jpg"
                alt="Electric vehicle technology"
                className="h-[350px] w-full object-cover sm:h-[470px]"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#171717] p-5 text-white shadow-xl sm:right-6 sm:p-7">
              <div className="flex items-center gap-3">
                <BatteryCharging
                  size={27}
                  className="text-[#d1ad6c]"
                />
                <div>
                  <p className="font-semibold">Electric innovation</p>
                  <p className="mt-1 text-xs text-white/50">
                    Technology in motion
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...motionProps}>
            <SectionLabel>Technology & Innovation</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Intelligent technology.
              <span className="text-[#a17b39]"> Electric possibilities.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              An electric vehicle is more than a different powertrain.
              It brings together battery systems, software, charging
              solutions and an evolving digital driving experience.
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {technologies.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f0e6] text-[#a17b39]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/technology"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
            >
              Discover Technology
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CHARGING SECTION */}
      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div {...motionProps}>
            <SectionLabel light>EV Charging</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Power your journey.
              <span className="text-[#d1ad6c]"> Your way.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Understanding charging is an important part of choosing
              an electric vehicle. Explore the charging options
              compatible with your vehicle and daily routine.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c]">
                  <PlugZap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Home charging</h3>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    Learn about compatible home charging equipment
                    and installation requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Public charging</h3>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    Explore public charging options and plan your
                    journeys around compatible charging locations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c]">
                  <Clock3 size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Charging planning</h3>
                  <p className="mt-2 text-sm leading-7 text-white/50">
                    Understand how charging time can vary with
                    battery size, charger power and conditions.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/dealer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
            >
              Find a Dealership
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/images/ev/ev-charging.jpg"
              alt="Electric vehicle charging"
              className="h-[350px] w-full rounded-[28px] object-cover sm:h-[480px]"
              loading="lazy"
            />

            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Understand your options
              </p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Make charging part of your plan.
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEST DRIVE CTA */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <motion.div
          {...motionProps}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#eee9df] px-7 py-14 sm:px-12 md:py-20"
        >
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#b99753]/25" />
          <div className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-[#b99753]/20" />

          <div className="relative z-10 max-w-3xl">
            <SectionLabel>Take the Next Step</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Experience electric.
              <span className="text-[#a17b39]"> Feel the difference.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-600">
              Reading about an electric vehicle is just the beginning.
              Explore your preferred model and take the opportunity
              to experience it through a test drive.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/book-test-drive"
                className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
              >
                <CalendarDays size={17} />
                Book a Test Drive
              </Link>

              <Link
                to="/dealer"
                className="inline-flex items-center gap-3 rounded-full border border-[#cfc5b4] px-7 py-4 text-sm font-bold text-[#171717] transition hover:border-[#a17b39] hover:text-[#a17b39]"
              >
                Find a Dealer
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...motionProps}>
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Everything about
              <span className="text-[#a17b39]"> electric.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Have questions about electric vehicles, charging or
              choosing your next EV? Find helpful information here.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#e9e4da] bg-[#fafaf8] p-5">
              <CircleHelp
                size={26}
                className="shrink-0 text-[#a17b39]"
              />
              <div>
                <p className="font-semibold">Need more assistance?</p>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-[#a17b39]"
                >
                  Contact us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...motionProps}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#b99753]/50 bg-[#faf9f6]"
                      : "border-[#e9e4da] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="text-sm font-semibold leading-6 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#a17b39] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm leading-7 text-gray-600 sm:px-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="border-t border-[#eae6de] bg-[#fafaf8] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-start gap-3">
          <Info
            size={19}
            className="mt-0.5 shrink-0 text-[#a17b39]"
          />
          <p className="text-xs leading-6 text-gray-500">
            Information on this page is for general discovery.
            Vehicle specifications, prices, range, charging time,
            equipment, warranties and availability may vary by model,
            variant, location and current offer. Please refer to the
            latest official vehicle brochure and authorised dealership
            for confirmed details.
          </p>
        </div>
      </section>

      {/* CAR DETAILS MODAL */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCar(null)}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[26px] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                aria-label="Close vehicle details"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#171717]/80 text-white transition hover:bg-[#a17b39]"
              >
                <X size={20} />
              </button>

              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="h-[240px] w-full bg-[#f1f0ec] object-cover sm:h-[300px]"
              />

              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a17b39]">
                  {selectedCar.category}
                </p>

                <h3 className="mt-2 text-3xl font-semibold">
                  {selectedCar.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {selectedCar.description}
                </p>

                <h4 className="mt-7 font-semibold">
                  Explore highlights
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedCar.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl bg-[#f7f5f0] p-3 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#a17b39]"
                      />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={selectedCar.link}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
                  >
                    View Full Details
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/book-test-drive"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#b99753] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
                  >
                    Book Test Drive
                    <CalendarDays size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default ElectricCarsPage;
