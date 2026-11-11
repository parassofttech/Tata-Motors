

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  Gauge,
  Zap,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CarFront,
  Radar,
  Wifi,
  BatteryCharging,
  Settings2,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All Technology" },
  { id: "safety", label: "Safety" },
  { id: "connectivity", label: "Connectivity" },
  { id: "performance", label: "Performance" },
  { id: "electric", label: "Electric Mobility" },
];

const technologies = [
  {
    id: 1,
    category: "safety",
    number: "01",
    title: "Safety That Inspires Confidence",
    subtitle: "Protection for every journey",
    description:
      "Explore intelligent safety technologies and driver assistance systems designed to support awareness and confidence on the road.",
    icon: ShieldCheck,
    tags: ["Driver Assistance", "Smart Protection"],
    highlights: [
      "Driver assistance technologies",
      "Parking and surrounding awareness",
      "Intelligent safety systems",
    ],
    image: "/images/technology/safety-technology.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "connectivity",
    number: "02",
    title: "Connected Car Experience",
    subtitle: "Your car, connected to your world",
    description:
      "Discover connected-car experiences that bring useful vehicle information and selected smart features closer to you.",
    icon: Smartphone,
    tags: ["Smart Connectivity", "Digital Experience"],
    highlights: [
      "Connected vehicle experience",
      "Smartphone-based interactions",
      "Convenient vehicle information",
    ],
    image: "/images/technology/connected-car.jpg",
  },
  {
    id: 3,
    category: "performance",
    number: "03",
    title: "Engineered for Every Drive",
    subtitle: "A balance of control and performance",
    description:
      "Explore technologies focused on responsive driving, vehicle control and a more engaging experience behind the wheel.",
    icon: Gauge,
    tags: ["Driving Dynamics", "Vehicle Control"],
    highlights: [
      "Responsive driving experience",
      "Drive-focused engineering",
      "Comfort and vehicle control",
    ],
    image: "/images/technology/performance.jpg",
  },
  {
    id: 4,
    category: "electric",
    number: "04",
    title: "The Future of Electric Mobility",
    subtitle: "Smarter journeys, electric possibilities",
    description:
      "Discover electric mobility technology, battery intelligence and charging-focused innovations across the EV range.",
    icon: Zap,
    tags: ["Electric Mobility", "Smart Energy"],
    highlights: [
      "Electric powertrain technology",
      "Battery and energy management",
      "Charging ecosystem experience",
    ],
    image: "/images/technology/electric-mobility.jpg",
  },
  {
    id: 5,
    category: "safety",
    number: "05",
    title: "Awareness Around You",
    subtitle: "Technology that supports your attention",
    description:
      "Explore camera, sensor and assistance-based technologies that can help drivers understand their surroundings.",
    icon: Radar,
    tags: ["Surround Awareness", "Assistance"],
    highlights: [
      "Camera and sensor-based systems",
      "Parking assistance features",
      "Additional driving awareness",
    ],
    image: "/images/technology/driver-assistance.jpg",
  },
  {
    id: 6,
    category: "connectivity",
    number: "06",
    title: "A Smarter Digital Cabin",
    subtitle: "A more intuitive in-car experience",
    description:
      "Discover how modern infotainment and digital interfaces can make everyday journeys more convenient and engaging.",
    icon: Wifi,
    tags: ["Infotainment", "Digital Cabin"],
    highlights: [
      "Digital infotainment experience",
      "Intuitive in-car controls",
      "Connected entertainment features",
    ],
    image: "/images/technology/digital-cabin.jpg",
  },
  {
    id: 7,
    category: "electric",
    number: "07",
    title: "Intelligent Energy Management",
    subtitle: "Making every unit of energy count",
    description:
      "Learn about the technology behind electric power delivery, energy monitoring and battery-focused vehicle systems.",
    icon: BatteryCharging,
    tags: ["Battery Intelligence", "Energy"],
    highlights: [
      "Battery monitoring technology",
      "Energy management systems",
      "Electric drive control",
    ],
    image: "/images/technology/battery-technology.jpg",
  },
  {
    id: 8,
    category: "performance",
    number: "08",
    title: "Technology in Every Detail",
    subtitle: "Designed around the driving experience",
    description:
      "Explore the engineering and vehicle technologies that contribute to comfort, convenience and everyday usability.",
    icon: Settings2,
    tags: ["Engineering", "Convenience"],
    highlights: [
      "Driver-focused controls",
      "Comfort-oriented technology",
      "Integrated vehicle systems",
    ],
    image: "/images/technology/vehicle-engineering.jpg",
  },
];

const categoryLabels = {
  safety: "Safety",
  connectivity: "Connectivity",
  performance: "Performance",
  electric: "Electric Mobility",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const TechnologyFeatures = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const reduceMotion = useReducedMotion();

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "all") return technologies;

    return technologies.filter(
      (technology) => technology.category === activeCategory
    );
  }, [activeCategory]);

  const sectionAnimation = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#f8f8f6] py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#b99753]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-black/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          {...sectionAnimation}
          variants={containerVariants}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div
            variants={cardVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/[0.08] px-4 py-2"
          >
            <Sparkles size={15} className="text-[#a17b39]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Innovation & Technology
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-4xl md:text-5xl"
          >
            Technology That
            <span className="mt-1 block text-[#b99753]">
              Moves You Forward.
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base"
          >
            Discover intelligent innovations designed to make every journey
            safer, smarter and more enjoyable. Explore the technology shaping
            the future of mobility.
          </motion.p>
        </motion.div>

        {/* Featured technology banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-14 min-h-[390px] overflow-hidden rounded-[28px] bg-[#171717] shadow-[0_25px_70px_rgba(0,0,0,0.13)] md:min-h-[440px]"
        >
          <img
            src="/images/technology/technology-banner.jpg"
            alt="Premium car interior showcasing modern automotive technology"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />

          <div className="relative flex min-h-[390px] items-center px-7 py-12 sm:px-12 md:min-h-[440px] md:px-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b99753]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d1ad6c]">
                  Driving Innovation
                </span>
              </div>

              <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                The future of driving
                <span className="block text-[#d1ad6c]">
                  starts with innovation.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                From intelligent safety to connected experiences, explore
                technologies created around the needs of modern drivers.
              </p>

              <a
                href="#technology-grid"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#9e7b3f] hover:shadow-lg hover:shadow-[#b99753]/20"
              >
                Explore Technology
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 right-7 hidden items-center gap-2 text-white/60 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d1ad6c]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Innovation in Motion
            </span>
          </div>
        </motion.div>

        {/* Category filters */}
        <div
          id="technology-grid"
          className="mb-9 flex flex-wrap items-center justify-center gap-2.5"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "border-[#171717] bg-[#171717] text-white shadow-lg shadow-black/10"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#b99753] hover:text-[#a17b39]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Technology cards */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <motion.article
                  key={technology.id}
                  layout
                  variants={cardVariants}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                  exit={reduceMotion ? undefined : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.35 }}
                  className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-gray-200/80 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-[#b99753]/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] ${
                    technology.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Card image */}
                  <div
                    className={`relative overflow-hidden bg-[#e9e8e3] ${
                      technology.featured ? "h-60 sm:h-64" : "h-48"
                    }`}
                  >
                    <img
                      src={technology.image}
                      alt={technology.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white backdrop-blur-md">
                      {technology.number} / 08
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-[#e4c78f] backdrop-blur-md">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="absolute bottom-6 right-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                      {categoryLabels[technology.category]}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#a17b39]">
                      {technology.subtitle}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug text-[#171717]">
                      {technology.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                      {technology.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {technology.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5f3ee] px-3 py-1.5 text-[10px] font-medium text-[#8c713e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedTechnology(technology)}
                      className="mt-6 flex w-full items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-[#171717] transition hover:text-[#a17b39]"
                    >
                      Discover More
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-all group-hover:border-[#b99753] group-hover:bg-[#b99753] group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredTechnologies.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No technology found in this category.
          </p>
        )}

        {/* Bottom highlight strip */}
        <div className="mt-16 grid grid-cols-1 gap-4 rounded-[24px] border border-[#e8e4da] bg-white p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Safety Focus",
              description: "Technology designed around driver confidence.",
            },
            {
              icon: Smartphone,
              title: "Connected World",
              description: "Digital experiences for modern journeys.",
            },
            {
              icon: Gauge,
              title: "Driving Experience",
              description: "Engineering focused on everyday driving.",
            },
            {
              icon: Zap,
              title: "Electric Future",
              description: "Explore the possibilities of electric mobility.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index !== 0 ? "lg:border-l lg:border-gray-100 lg:pl-6" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <Icon size={21} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#171717]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[26px] bg-[#171717] px-7 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#b99753]/20" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border border-[#b99753]/20" />

          <div className="relative mx-auto max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d1ad6c]">
              Experience the Difference
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Find the technology that
              <span className="text-[#d1ad6c]"> fits your drive.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
              Explore the Tata Motors range and discover the features available
              across different cars and variants.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/cars"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b99753] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9e7b39]"
              >
                Explore All Cars
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/book-test-drive"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:bg-white/5"
              >
                Book a Test Drive
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-7 text-center text-[11px] leading-5 text-gray-400">
          Note: Technology and features may vary by model, variant, market and
          availability. Please refer to the official vehicle details for
          confirmed specifications.
        </p>
      </div>

      {/* Technology details modal */}
      <AnimatePresence>
        {selectedTechnology && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedTechnology(null)}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="technology-modal-title"
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[26px] bg-white p-7 shadow-2xl sm:p-9"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedTechnology(null)}
                aria-label="Close technology details"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-[#171717] hover:text-white"
              >
                <X size={19} />
              </button>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/10 text-[#a17b39]">
                {React.createElement(selectedTechnology.icon, {
                  size: 28,
                  strokeWidth: 1.7,
                })}
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
                {categoryLabels[selectedTechnology.category]}
              </span>

              <h3
                id="technology-modal-title"
                className="mt-3 pr-8 text-2xl font-semibold text-[#171717] sm:text-3xl"
              >
                {selectedTechnology.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {selectedTechnology.description}
              </p>

              <div className="mt-7">
                <h4 className="text-sm font-bold text-[#171717]">
                  Explore the highlights
                </h4>

                <div className="mt-4 space-y-3">
                  {selectedTechnology.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#b99753]"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/cars"
                onClick={() => setSelectedTechnology(null)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b99753]"
              >
                Explore Tata Cars
                <ArrowRight size={17} />
              </Link>

              <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                Feature availability may differ by model and variant.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechnologyFeatures;
