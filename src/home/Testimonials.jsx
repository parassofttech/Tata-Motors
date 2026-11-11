
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Heart,
  MessageCircle,
  Award,
  ChevronRight,
  Sparkles,
  CarFront,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "New Delhi, India",
    car: "Tata Nexon",
    category: "SUV",
    rating: 5,
    date: "October 2026",
    initials: "RS",
    avatarColor: "bg-[#b99753]",
    review:
      "My experience with the Nexon has been wonderful. I really appreciate its comfortable cabin, road presence and overall driving experience. It feels like a well-thought-out car for everyday family use.",
    highlight: "Comfortable family experience",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Lucknow, India",
    car: "Tata Punch",
    category: "Compact SUV",
    rating: 5,
    date: "September 2026",
    initials: "PV",
    avatarColor: "bg-[#8d744b]",
    review:
      "I wanted a compact car that felt confident on the road and was easy to use in the city. The Punch has been a practical choice for my daily travel. I especially like its driving position and compact dimensions.",
    highlight: "Great for everyday city drives",
    verified: true,
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Jaipur, India",
    car: "Tata Harrier",
    category: "SUV",
    rating: 5,
    date: "August 2026",
    initials: "AS",
    avatarColor: "bg-[#5f625e]",
    review:
      "The overall design, cabin experience and road presence make the Harrier stand out. It has been a satisfying experience for both city commutes and longer journeys.",
    highlight: "Impressive design and road presence",
    verified: true,
  },
  {
    id: 4,
    name: "Neha Gupta",
    location: "Pune, India",
    car: "Tata Nexon.ev",
    category: "Electric SUV",
    rating: 5,
    date: "July 2026",
    initials: "NG",
    avatarColor: "bg-[#a18b67]",
    review:
      "Moving to an electric car was a new experience for me. I enjoy the quiet drive and the convenience of planning my regular city journeys around charging. It has made my daily commute feel different.",
    highlight: "Enjoyable electric driving",
    verified: true,
  },
  {
    id: 5,
    name: "Vikram Patel",
    location: "Ahmedabad, India",
    car: "Tata Safari",
    category: "SUV",
    rating: 5,
    date: "June 2026",
    initials: "VP",
    avatarColor: "bg-[#7a6548]",
    review:
      "The Safari gives me the spacious cabin and commanding seating position I was looking for. The overall experience has been comfortable for family trips and regular use.",
    highlight: "Space for family journeys",
    verified: true,
  },
  {
    id: 6,
    name: "Ananya Das",
    location: "Kolkata, India",
    car: "Tata Tiago",
    category: "Hatchback",
    rating: 5,
    date: "May 2026",
    initials: "AD",
    avatarColor: "bg-[#6d7069]",
    review:
      "The Tiago suits my everyday requirements very well. Its compact size is convenient for city driving, and I find the cabin comfortable for my regular journeys.",
    highlight: "Practical everyday choice",
    verified: true,
  },
];

const ratingHighlights = [
  {
    icon: Heart,
    title: "Customer First",
    description: "A focus on customer experience and everyday convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focus",
    description: "Safety remains an important consideration in vehicle design.",
  },
  {
    icon: Award,
    title: "Driving Experience",
    description: "Vehicles designed for different journeys and lifestyles.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function StarRating({ rating = 5, size = 16 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < rating
              ? "fill-[#b99753] text-[#b99753]"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item, compact = false }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e9e5dc] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b99753]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] ${
        compact ? "p-6" : "p-7 sm:p-8"
      }`}
    >
      <div className="absolute right-6 top-6 text-[#b99753]/15">
        <Quote size={48} fill="currentColor" />
      </div>

      <div className="relative z-10 flex items-center justify-between gap-3">
        <StarRating rating={item.rating} />

        {item.verified && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#b99753]/25 bg-[#b99753]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#987437]">
            <ShieldCheck size={13} />
            Verified
          </span>
        )}
      </div>

      <div className="mt-7 flex-1">
        <span className="inline-flex rounded-full bg-[#f5f2eb] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#987437]">
          {item.highlight}
        </span>

        <p className="mt-5 text-sm leading-8 text-gray-600">
          "{item.review}"
        </p>
      </div>

      <div className="mt-7 border-t border-[#eeeae2] pt-6">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${item.avatarColor}`}
          >
            {item.initials}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-[#171717]">
              {item.name}
            </h3>
            <p className="mt-1 truncate text-xs text-gray-400">
              {item.location}
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-xs font-semibold text-[#171717]">
              {item.car}
            </p>
            <p className="mt-1 text-[10px] text-gray-400">
              {item.date}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-100 pt-4 sm:hidden">
          <span className="text-xs font-semibold text-[#171717]">
            {item.car}
          </span>
          <span className="text-[10px] text-gray-400">{item.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused, maxIndex]);

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  const goNext = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-[#fafaf8] py-20 sm:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b99753]/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#b99753]/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b99753]/25 bg-[#b99753]/10 px-4 py-2">
              <Sparkles size={14} className="text-[#a17b39]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#987437]">
                Customer Experiences
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Real Journeys.
              <span className="block text-[#a17b39]">
                Meaningful Experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Every journey is different. Explore these sample customer
              stories about comfort, design and everyday driving.
            </p>
          </motion.div>

          {/* SLIDER CONTROLS */}
          <div className="flex items-center gap-3">
            <div className="mr-3 hidden text-right sm:block">
              <p className="text-xs font-semibold text-[#171717]">
                Customer Stories
              </p>
              <p className="mt-1 text-[10px] text-gray-400">
                Explore the experiences
              </p>
            </div>

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e3ded3] bg-white text-[#171717] transition hover:border-[#b99753] hover:bg-[#b99753] hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-white transition hover:bg-[#b99753]"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* REVIEW CARDS */}
        <div className="grid items-stretch gap-5 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* SLIDER INDICATORS */}
        <div className="mt-9 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial group ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-9 bg-[#b99753]"
                  : "w-2 bg-[#d9d4ca] hover:bg-[#a17b39]"
              }`}
            />
          ))}
        </div>

        {/* REVIEW HIGHLIGHTS */}
        <div className="mt-20 grid overflow-hidden rounded-[26px] border border-[#e9e5dc] bg-white md:grid-cols-3">
          {ratingHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex gap-4 p-6 sm:p-8 ${
                  index !== ratingHighlights.length - 1
                    ? "border-b border-[#e9e5dc] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] bg-[#171717] px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#b99753]/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#b99753]/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b99753]/30 bg-[#b99753]/10 text-[#d1ad6c]">
              <CarFront size={27} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
              Your Story Starts Here.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/55">
              Discover your favourite Tata Motors car and create
              experiences worth remembering.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/cars"
                className="inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a17b39]"
              >
                Explore Cars
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/book-test-drive"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
              >
                Book Test Drive
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
