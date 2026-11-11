
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  MoveDown,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ==========================================
// HERO SLIDER DATA
// ==========================================

const heroSlides = [
  {
    id: 1,
    name: "Harrier",
    eyebrow: "THE ART OF COMMANDING",
    title: "OWN EVERY",
    highlight: "HORIZON.",
    description:
      "Discover a bold expression of design, confidence and capability. Experience a drive that makes every journey extraordinary.",
    category: "PREMIUM SUV",
    image: "/images/hero/hero-car-1.jpg",
    alt: "Tata Harrier premium SUV exterior cinematic view",
    accent: "01",
    search: "Harrier",
    theme: "light",
  },
  {
    id: 2,
    name: "Safari",
    eyebrow: "ADVENTURE REDEFINED",
    title: "GO BEYOND",
    highlight: "LIMITS.",
    description:
      "Make every road an opportunity for discovery. Explore comfort, space and a spirit of adventure in every journey.",
    category: "LUXURY SUV",
    image: "/images/hero/hero-car-2.jpg",
    alt: "Tata Safari premium SUV exterior on an open road",
    accent: "02",
    search: "Safari",
    theme: "light",
  },
  {
    id: 3,
    name: "Nexon",
    eyebrow: "MAKE YOUR OWN WAY",
    title: "DRIVE YOUR",
    highlight: "DREAM.",
    description:
      "A distinctive design, modern technology and everyday versatility come together to make every drive memorable.",
    category: "COMPACT SUV",
    image: "/images/hero/hero-car-3.jpg",
    alt: "Tata Nexon compact SUV exterior premium photography",
    accent: "03",
    search: "Nexon",
    theme: "light",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.35,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// MAIN HERO COMPONENT
// ==========================================

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const currentSlide = heroSlides[activeSlide];

  const totalSlides = heroSlides.length;

  // ------------------------------------------
  // SLIDER NAVIGATION
  // ------------------------------------------

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // ------------------------------------------
  // AUTO SLIDER
  // ------------------------------------------

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion, totalSlides]);

  // ------------------------------------------
  // KEYBOARD NAVIGATION
  // ------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ------------------------------------------
  // RENDER
  // ------------------------------------------

  return (
    <section
      id="home"
      aria-label="Discover Tata Motors cars"
      className="relative isolate min-h-[680px] h-[calc(100svh-76px)] max-h-[1000px] w-full overflow-hidden bg-[#101820] text-white md:h-[calc(100svh-108px)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* ===================================
          BACKGROUND IMAGES
      =================================== */}

      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.09 }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.9 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="absolute inset-0 -z-20"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            loading={activeSlide === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-center"
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111D]/95 via-[#07111D]/65 to-[#07111D]/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07111D]/80 via-transparent to-[#07111D]/20" />

      {/* Decorative light */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-[#C69B45]/10 blur-[130px]" />

      {/* ===================================
          HERO CONTENT
      =================================== */}

      <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 pb-28 pt-16 sm:px-8 md:pb-32 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-[760px]"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#D4A84F]" />

              <span className="text-[10px] font-bold tracking-[0.27em] text-[#E3BD72] sm:text-xs">
                {currentSlide.eyebrow}
              </span>

              <Sparkles
                size={14}
                className="text-[#D4A84F]"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.3rem,8vw,7.7rem)] font-black uppercase leading-[0.91] tracking-[-0.065em]"
            >
              <span className="block text-white">
                {currentSlide.title}
              </span>

              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#F3D99D] via-[#D4A84F] to-[#A97929]">
                {currentSlide.highlight}
              </span>
            </motion.h1>

            {/* Car category */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-3"
            >
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md sm:text-[10px]">
                {currentSlide.category}
              </span>

              <span className="h-px w-10 bg-white/30" />

              <span className="text-sm font-semibold tracking-wider text-white/90">
                TATA {currentSlide.name.toUpperCase()}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[520px] text-sm leading-7 text-slate-200 sm:text-base sm:leading-8"
            >
              {currentSlide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to={`/cars?search=${encodeURIComponent(currentSlide.search)}`}
                className="group flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E3C17D] to-[#BC8E3B] px-8 text-xs font-extrabold tracking-[0.1em] text-[#101820] shadow-[0_12px_35px_rgba(198,155,69,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(198,155,69,0.35)]"
              >
                EXPLORE {currentSlide.name.toUpperCase()}

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/book-test-drive"
                className="group flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 text-xs font-bold tracking-[0.1em] text-white backdrop-blur-md transition duration-300 hover:border-[#E3C17D] hover:bg-white/20"
              >
                BOOK A TEST DRIVE

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Small trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={17}
                  className="text-[#E3BD72]"
                />

                <span className="text-[10px] font-semibold tracking-wider text-white/75">
                  SAFETY & INNOVATION
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Zap
                  size={16}
                  className="text-[#E3BD72]"
                />

                <span className="text-[10px] font-semibold tracking-wider text-white/75">
                  FUTURE-READY TECHNOLOGY
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===================================
          SLIDER CONTROLS
      =================================== */}

      <div className="absolute bottom-8 left-5 right-5 z-20 mx-auto flex max-w-[1440px] items-center justify-between sm:left-8 sm:right-8 lg:bottom-10 lg:left-12 lg:right-12">

        {/* Slide Numbers */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-light tracking-tight text-white">
            0{activeSlide + 1}
          </span>

          <div className="flex items-center gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.name}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className="group flex h-8 items-center"
              >
                <span
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    activeSlide === index
                      ? "w-10 bg-[#E3BD72]"
                      : "w-5 bg-white/40 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-white/50">
            / 0{totalSlides}
          </span>
        </div>

        {/* Previous / Next / Pause */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous car slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:border-[#E3BD72] hover:bg-[#C69B45] sm:h-12 sm:w-12"
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next car slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:border-[#E3BD72] hover:bg-[#C69B45] sm:h-12 sm:w-12"
          >
            <ChevronRight size={21} />
          </button>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Play automatic slider" : "Pause automatic slider"}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
          >
            {isPaused ? (
              <Play size={16} />
            ) : (
              <Pause size={16} />
            )}
          </button>
        </div>
      </div>

      {/* ===================================
          SCROLL INDICATOR
      =================================== */}

      <div className="absolute bottom-[112px] right-6 hidden flex-col items-center gap-3 lg:flex">
        <span className="rotate-90 text-[9px] font-bold tracking-[0.25em] text-white/65">
          SCROLL TO EXPLORE
        </span>

        <div className="mt-5 h-10 w-px overflow-hidden bg-white/20">
          <motion.div
            animate={
              shouldReduceMotion
                ? { y: 0 }
                : { y: [0, 40, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-5 w-px bg-[#E3BD72]"
          />
        </div>

        <MoveDown size={14} className="text-[#E3BD72]" />
      </div>

      {/* Decorative Slide Label */}
      <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
        <span className="text-[9px] font-bold tracking-[0.4em] text-white/35">
          TATA MOTORS • EXPERIENCE THE DIFFERENCE
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
