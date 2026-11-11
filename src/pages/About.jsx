
import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BatteryCharging,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Compass,
  Factory,
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We believe every journey should begin with confidence. Safety remains an important consideration in vehicle design and engineering.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas, intelligent technologies and thoughtful engineering to create better mobility experiences.",
    number: "02",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "Understanding customer needs helps us build meaningful experiences, from choosing a vehicle to the ownership journey.",
    number: "03",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    description:
      "We support the transition towards more sustainable mobility through electric vehicles and responsible innovation.",
    number: "04",
  },
];

const milestones = [
  {
    year: "1945",
    title: "A journey begins",
    description:
      "Tata Motors began its journey as an Indian engineering and manufacturing company.",
  },
  {
    year: "1950s",
    title: "Building mobility",
    description:
      "The company expanded its presence in commercial transportation and helped shape India's mobility landscape.",
  },
  {
    year: "1990s",
    title: "Passenger vehicle journey",
    description:
      "Tata Motors strengthened its presence in passenger vehicles with a growing focus on Indian customers.",
  },
  {
    year: "Today",
    title: "Moving towards tomorrow",
    description:
      "The company continues to work across passenger vehicles, commercial vehicles, electric mobility and connected technologies.",
  },
];

const highlights = [
  {
    icon: CarFront,
    title: "Designed for journeys",
    description:
      "A diverse passenger vehicle portfolio for different lifestyles and driving needs.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering with care",
    description:
      "A continued focus on vehicle engineering, safety and dependable performance.",
  },
  {
    icon: Zap,
    title: "Electric mobility",
    description:
      "Exploring new possibilities through electric vehicles and evolving mobility solutions.",
  },
  {
    icon: Users,
    title: "Customer experience",
    description:
      "A complete ownership journey supported by sales, service and customer assistance.",
  },
];

const fadeProps = (reduceMotion) =>
  reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
      };

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] ${
        light ? "text-[#d1ad6c]" : "text-[#a17b39]"
      }`}
    >
      <span className="h-px w-9 bg-current" />
      {children}
    </div>
  );
}

function About() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "About Us | Tata Motors";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Discover the story, vision, values and innovation behind Tata Motors. Explore our approach to mobility, technology and electric vehicles.";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#171717] pt-[76px] md:min-h-[680px] md:pt-[108px]">
        <div className="absolute inset-0">
          <img
            src="/images/about/about-hero.jpg"
            alt="Premium automobile on a scenic road"
            className="h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#171717]/85 to-[#171717]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/75 via-transparent to-[#171717]/15" />
        </div>

        <div className="absolute -right-32 top-28 h-96 w-96 rounded-full border border-[#d1ad6c]/20" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full border border-[#d1ad6c]/15" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <SectionLabel light>About Tata Motors</SectionLabel>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-7xl">
              Moving India.
              <br />
              <span className="text-[#d1ad6c]">
                Inspiring the world.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Every journey begins with an idea. Our story is shaped by
              engineering, innovation and a commitment to creating
              meaningful mobility experiences for generations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
              >
                Discover Our Story
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/cars"
                className="inline-flex items-center gap-3 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
              >
                Explore Vehicles
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex">
          <span className="h-px w-12 bg-[#d1ad6c]" />
          Driven by purpose
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="our-story"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fadeProps(reduceMotion)}>
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              More than just vehicles.
              <span className="text-[#a17b39]">
                {" "}A journey of possibilities.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Tata Motors is an Indian automotive manufacturer with a
              long-standing presence in the mobility industry. Its work
              spans passenger vehicles, commercial vehicles and electric
              mobility solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              From everyday city drives to long-distance journeys, the
              company continues to develop vehicles and technologies
              shaped around changing customer expectations and the
              future of transportation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="rounded-xl border border-[#e8e4db] bg-white px-5 py-4">
                <p className="text-sm font-bold text-[#171717]">
                  Indian Heritage
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Built on engineering
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e4db] bg-white px-5 py-4">
                <p className="text-sm font-bold text-[#171717]">
                  Future Focused
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Evolving mobility
                </p>
              </div>
            </div>

            <Link
              to="/cars"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#9b7535] transition hover:gap-4"
            >
              Explore our vehicle range
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 45 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-36 w-36 rounded-tl-[55px] border-l-2 border-t-2 border-[#b99753]" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#e8e5de]">
              <img
                src="/images/about/tata-motors-experience.jpg"
                alt="Automotive design and engineering"
                className="h-[380px] w-full object-cover sm:h-[490px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e3c58e]">
                  Our philosophy
                </p>
                <h3 className="mt-2 max-w-sm text-2xl font-semibold text-white sm:text-3xl">
                  Creating progress through mobility.
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 -z-10 h-36 w-36 rounded-br-[55px] border-b-2 border-r-2 border-[#b99753]" />
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeProps(reduceMotion)}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel light>Our Journey</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              A legacy of moving
              <span className="text-[#d1ad6c]"> forward.</span>
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Every chapter has brought new challenges, new ideas and
              new opportunities to shape the future of mobility.
            </p>
          </motion.div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/15 lg:block" />

            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#b99753] bg-[#171717]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d1ad6c]" />
                </div>

                <p className="text-3xl font-semibold text-[#d1ad6c]">
                  {item.year}
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeProps(reduceMotion)}
            className="mb-14 max-w-2xl"
          >
            <SectionLabel>Our Direction</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Driven by purpose.
              <span className="text-[#a17b39]"> Guided by vision.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              {...fadeProps(reduceMotion)}
              className="group relative overflow-hidden rounded-[26px] bg-[#171717] p-8 text-white sm:p-11"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d1ad6c]/20 transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/15 text-[#d1ad6c]">
                  <Compass size={27} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#d1ad6c]">
                  Our Vision
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  To shape the future of mobility.
                </h3>

                <p className="mt-5 max-w-lg leading-8 text-white/60">
                  To contribute to a world where mobility is more
                  accessible, innovative and sustainable, creating
                  opportunities for people and communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeProps(reduceMotion)}
              className="group relative overflow-hidden rounded-[26px] border border-[#e9e3d7] bg-white p-8 sm:p-11"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#b99753]/20 transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/10 text-[#a17b39]">
                  <Target size={27} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#a17b39]">
                  Our Mission
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Engineering better experiences.
                </h3>

                <p className="mt-5 max-w-lg leading-8 text-gray-600">
                  To develop thoughtful products and mobility solutions
                  through customer understanding, responsible
                  engineering and continuous innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#f0eee8] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeProps(reduceMotion)}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>What We Believe</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Values that move us
              <span className="text-[#a17b39]"> forward.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The principles that influence how we think, create and
              work towards better mobility experiences.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? {} : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  variants={fadeUp}
                  className="group rounded-[22px] border border-[#e4dfd4] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f0e6] text-[#a17b39] transition group-hover:bg-[#b99753] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-semibold text-[#c9c2b5]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* INNOVATION SECTION */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-[28px] bg-[#e5e2dc]">
              <img
                src="/images/about/innovation.jpg"
                alt="Automotive innovation and vehicle technology"
                className="h-[350px] w-full object-cover sm:h-[470px]"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-[#e9e3d7] bg-white p-5 shadow-xl sm:right-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#171717] text-[#d1ad6c]">
                  <Sparkles size={23} />
                </div>
                <div>
                  <p className="font-bold text-[#171717]">
                    Think ahead
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Create what comes next
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeProps(reduceMotion)}
            className="order-1 lg:order-2"
          >
            <SectionLabel>Innovation & Technology</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Technology with
              <span className="text-[#a17b39]"> a purpose.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              The future of mobility is shaped by smarter engineering,
              evolving digital experiences and new ways to move. We
              believe technology should make journeys more intuitive,
              convenient and confident.
            </p>

            <div className="mt-9 space-y-6">
              {[
                "Connected vehicle experiences",
                "Advanced driver assistance technologies",
                "Thoughtful cabin and infotainment features",
                "Evolving electric vehicle technology",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#a17b39]"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-gray-500">
              Technology and features vary by vehicle model and variant.
            </p>

            <Link
              to="/technology"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
            >
              Explore Technology
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ELECTRIC MOBILITY */}
      <section className="relative overflow-hidden bg-[#171717] text-white">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#b99753]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#b99753]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:px-12">
          <motion.div {...fadeProps(reduceMotion)}>
            <SectionLabel light>Electric Mobility</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A new chapter in
              <span className="text-[#d1ad6c]"> electric mobility.</span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/60">
              Electric mobility is an important part of the evolving
              automotive landscape. Tata Motors continues to develop
              electric vehicle options that bring together modern
              design, technology and everyday usability.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <BatteryCharging
                  size={27}
                  className="text-[#d1ad6c]"
                />
                <h3 className="mt-4 font-semibold">
                  Electric innovation
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Exploring evolving electric powertrain solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <Globe2 size={27} className="text-[#d1ad6c]" />
                <h3 className="mt-4 font-semibold">
                  Future mobility
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Supporting the transition towards new mobility choices.
                </p>
              </div>
            </div>

            <Link
              to="/cars?fuel=electric"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
            >
              Explore Electric Vehicles
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[32px] border border-[#d1ad6c]/20" />

            <img
              src="/images/about/electric-mobility.jpg"
              alt="Electric vehicle on a modern road"
              className="relative h-[330px] w-full rounded-[26px] object-cover sm:h-[470px]"
              loading="lazy"
            />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-[#171717]/85 px-5 py-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[#d1ad6c]">
                The road ahead
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Rethinking mobility
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY TATA MOTORS */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeProps(reduceMotion)}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>Why Tata Motors</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Built around what
              <span className="text-[#a17b39]"> matters.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every vehicle and ownership experience is an opportunity
              to bring together design, engineering and customer needs.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? {} : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-[22px] border border-[#e9e4da] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f0e6] text-[#a17b39]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <motion.div
          {...fadeProps(reduceMotion)}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#171717] px-7 py-16 text-center text-white sm:px-12 md:py-20"
        >
          <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full border border-[#d1ad6c]/15" />
          <div className="absolute -bottom-36 -right-20 h-96 w-96 rounded-full border border-[#d1ad6c]/15" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/15 text-[#d1ad6c]">
              <Factory size={27} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#d1ad6c]">
              Your journey starts here
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Find the vehicle that
              <span className="text-[#d1ad6c]"> moves you.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Explore our range of vehicles, discover new possibilities
              and take the next step towards your driving journey.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/cars"
                className="inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
              >
                Explore All Cars
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/book-test-drive"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
              >
                Book a Test Drive
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default About;
