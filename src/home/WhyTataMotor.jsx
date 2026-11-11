
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Lightbulb,
  Award,
  HeartHandshake,
  CarFront,
  Gauge,
  Leaf,
  Sparkles,
  CheckCircle2,
  MoveUpRight,
  Star,
  Target,
  Zap,
} from "lucide-react";

// ==========================================
// WHY TATA MOTORS DATA
// ==========================================

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Safety Comes First",
    description:
      "Explore vehicles designed with a strong focus on safety engineering, thoughtful protection and driver confidence.",
    tag: "SAFETY",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innovation That Moves You",
    description:
      "Discover technology-led features, connected experiences and intelligent solutions designed around modern mobility.",
    tag: "INNOVATION",
  },
  {
    number: "03",
    icon: Award,
    title: "Distinctive Design",
    description:
      "Experience expressive styling, carefully crafted details and vehicle designs that make a lasting impression.",
    tag: "DESIGN",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Customer Experience",
    description:
      "From exploring a vehicle to ownership, discover support and services designed around customer needs.",
    tag: "EXPERIENCE",
  },
];

const highlights = [
  {
    icon: CarFront,
    title: "A Diverse Vehicle Range",
    description:
      "Explore hatchbacks, SUVs, sedans and electric vehicles.",
  },
  {
    icon: Zap,
    title: "Electric Mobility",
    description:
      "Discover a growing range of electric mobility solutions.",
  },
  {
    icon: Gauge,
    title: "Driving Experience",
    description:
      "Find a vehicle that matches your lifestyle and driving needs.",
  },
  {
    icon: Leaf,
    title: "Future Focused",
    description:
      "Explore evolving technologies and more sustainable mobility.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const WhyTataMotor = () => {
  const shouldReduceMotion = useReducedMotion();

  const sectionAnimation = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.15,
        },
        variants: containerVariants,
      };

  return (
    <section
      id="why-tata-motors"
      className="relative overflow-hidden bg-white py-20 text-[#171717] sm:py-24 lg:py-28"
    >
      {/* ==================================
          BACKGROUND DECORATION
      ================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-[#b99753]/[0.07] blur-[130px]" />

        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#b99753]/[0.05] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================
            SECTION HEADER
        ================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#a17b39]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#92702f] sm:text-xs">
              The Tata Motors Difference
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
            More than just a car.
            <br />

            <span className="text-[#b99753]">
              A legacy of moving forward.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#777777] sm:text-base">
            Discover what makes the Tata Motors experience distinctive.
            From thoughtful design to evolving technology, explore a
            world built around the way people move.
          </p>
        </motion.div>

        {/* ==================================
            MAIN FEATURE SECTION
        ================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT IMAGE */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: -35 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-3xl bg-[#e9e7e1]">

              <img
                src="/images/about/tata-motors-experience.jpg"
                alt="Tata Motors vehicle showcasing automotive design"
                loading="lazy"
                className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[490px] lg:h-[560px]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Image label */}

              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Driven by purpose
                </span>
              </div>

              {/* Image text */}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b99753] text-white">
                  <Star size={23} />
                </div>

                <h3 className="max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Engineering experiences.
                  <br />
                  Inspiring journeys.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                  A focus on design, engineering and innovation that
                  continues to shape the future of mobility.
                </p>
              </div>
            </div>

            {/* Floating gold card */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -bottom-7 right-4 hidden max-w-[235px] rounded-2xl bg-[#b99753] p-5 text-white shadow-2xl sm:block lg:-right-7"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10">
                <Target size={21} />
              </div>

              <p className="text-lg font-semibold">
                Moving Forward
              </p>

              <p className="mt-2 text-xs leading-5 text-white/80">
                Focused on creating meaningful mobility experiences.
              </p>
            </motion.div>

            {/* Decorative border */}

            <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-full w-full rounded-3xl border border-[#b99753]/30" />
          </motion.div>

          {/* RIGHT CONTENT */}

          <div>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a17b39]">
                Why choose Tata Motors
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl">
                Built around what
                <br />
                matters to you.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#777777]">
                Every journey is different. Explore a range of
                vehicles and experiences designed to meet changing
                expectations, preferences and everyday needs.
              </p>
            </motion.div>

            {/* Reasons */}

            <motion.div
              {...sectionAnimation}
              className="mt-9 space-y-3"
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.number}
                    variants={itemVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { x: 5 }
                    }
                    className="group flex gap-4 rounded-2xl border border-black/[0.06] bg-[#fafaf8] p-4 transition duration-300 hover:border-[#b99753]/40 hover:bg-white hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39] transition duration-300 group-hover:bg-[#b99753] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#242424] sm:text-base">
                          {reason.title}
                        </h4>

                        <span className="text-[9px] font-bold tracking-[0.18em] text-[#b99753]">
                          {reason.tag}
                        </span>
                      </div>

                      <p className="text-xs leading-6 text-[#777777]">
                        {reason.description}
                      </p>
                    </div>

                    <span className="hidden text-xs font-bold text-[#b99753]/50 sm:block">
                      {reason.number}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b99753]"
            >
              Discover our story

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ==================================
            DARK HIGHLIGHT STRIP
        ================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-3xl bg-[#171717] p-7 text-white sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#b99753]/15" />

          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#b99753]/15" />

          <div className="pointer-events-none absolute bottom-0 right-32 h-40 w-40 rounded-full bg-[#b99753]/10 blur-[80px]" />

          <div className="relative z-10 mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d1ad6c]">
                The difference in every detail
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Designed for today's journeys.
                <br />

                <span className="text-[#d1ad6c]">
                  Ready for tomorrow.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Discover a vehicle range that brings together different
              body styles, powertrain choices and driving experiences.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-[#b99753]/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c] transition group-hover:bg-[#b99753] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d1ad6c]">
                    Explore more

                    <ArrowRight size={13} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ==================================
            BOTTOM CTA
        ================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-black/[0.08] pt-12 text-center sm:flex-row sm:text-left"
        >
          <div>
            <div className="mb-3 flex items-center justify-center gap-2 text-[#a17b39] sm:justify-start">
              <CheckCircle2 size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Find your next journey
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-[#171717] sm:text-3xl">
              Your perfect drive is waiting.
            </h3>

            <p className="mt-2 text-sm text-[#777777]">
              Explore the range and find a car that feels right for you.
            </p>
          </div>

          <Link
            to="/cars"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#b99753] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#b99753]/15 transition hover:bg-[#9e7b3f]"
          >
            Explore All Cars

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTataMotor;
