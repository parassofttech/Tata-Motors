
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Search,
  CarFront,
  Compass,
  Gauge,
  MapPin,
  RefreshCw,
} from "lucide-react";

const quickLinks = [
  {
    title: "Explore Cars",
    description: "Discover the complete car lineup.",
    icon: CarFront,
    path: "/cars",
  },
  {
    title: "Electric Vehicles",
    description: "Explore the electric range.",
    icon: Gauge,
    path: "/electric-vehicles",
  },
  {
    title: "Compare Cars",
    description: "Find the right car for you.",
    icon: Compass,
    path: "/compare",
  },
  {
    title: "Find a Dealer",
    description: "Locate a dealership near you.",
    icon: MapPin,
    path: "/dealer",
  },
];

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found | Tata Motors";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "The page you are looking for could not be found. Explore cars, electric vehicles and more.";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#b99753]/[0.07] blur-3xl" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-[#b99753]/[0.06] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#171717 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Main 404 Section */}
      <section className="relative flex min-h-[calc(100vh-76px)] items-center px-5 pb-16 pt-28 md:min-h-[calc(100vh-108px)] md:px-8 md:pb-20 md:pt-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#b99753]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#927039]">
                  Error 404 · Page Not Found
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-[88px]">
                Looks like
                <br />
                you're on the
                <br />
                <span className="relative inline-block text-[#b99753]">
                  wrong road.
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#b99753]/30" />
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-gray-500 sm:text-base lg:mx-0">
                The page you're trying to reach doesn't exist, may have been
                moved, or is temporarily unavailable. Don't worry, let's get
                you back on the right track.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  to="/"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#b99753] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#b99753]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#9e7b39] hover:shadow-xl"
                >
                  <Home size={18} />
                  Back to Home
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:border-[#b99753] hover:text-[#9e7b39]"
                >
                  <ArrowLeft size={18} />
                  Go Back
                </button>
              </div>

              {/* Helpful Text */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-gray-400 lg:justify-start">
                <span className="flex items-center gap-2">
                  <Search size={14} className="text-[#b99753]" />
                  Looking for something?
                </span>
                <Link
                  to="/cars"
                  className="font-semibold text-[#927039] underline decoration-[#b99753]/40 underline-offset-4 transition hover:text-[#171717]"
                >
                  Explore our vehicles
                </Link>
              </div>
            </motion.div>

            {/* Right 404 Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative w-full max-w-[540px]">
                {/* Decorative Circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#b99753]/30"
                />

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 rounded-[35px] border border-white bg-white/80 p-7 shadow-[0_25px_90px_rgba(23,23,23,0.09)] backdrop-blur-sm sm:p-12"
                >
                  {/* 404 Typography */}
                  <div className="relative text-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-3">
                      <span className="text-[100px] font-black leading-none tracking-tighter text-[#171717] sm:text-[150px]">
                        4
                      </span>

                      <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border-[9px] border-[#b99753] bg-[#171717] shadow-xl shadow-[#b99753]/20 sm:h-[145px] sm:w-[145px] sm:border-[12px]">
                        <div className="absolute inset-3 rounded-full border border-white/10" />
                        <CarFront
                          className="h-12 w-12 text-[#d1ad6c] sm:h-20 sm:w-20"
                          strokeWidth={1.3}
                        />

                        <motion.div
                          animate={{ rotate: [0, -8, 8, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -right-2 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#b99753] text-white shadow-lg"
                        >
                          <Compass size={19} />
                        </motion.div>
                      </div>

                      <span className="text-[100px] font-black leading-none tracking-tighter text-[#171717] sm:text-[150px]">
                        4
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="inline-flex rounded-full bg-[#171717] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d1ad6c]">
                        Destination Unknown
                      </span>

                      <p className="mt-4 text-sm font-medium text-gray-400">
                        This road doesn't lead anywhere.
                      </p>
                    </div>
                  </div>

                  {/* Road Illustration */}
                  <div className="relative mt-9 h-16 overflow-hidden rounded-2xl bg-[#171717]">
                    <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-around gap-4">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <motion.div
                          key={index}
                          animate={{ x: [0, -20, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                            ease: "linear",
                          }}
                          className="h-[3px] w-10 shrink-0 rounded-full bg-[#b99753]"
                        />
                      ))}
                    </div>

                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#d1ad6c]">
                      <CarFront size={26} />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Labels */}
                <motion.div
                  animate={{ y: [0, -9, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -left-3 top-8 z-20 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block md:-left-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171717]">
                        Lost your way?
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        Let's find a route.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 9, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-5 -right-2 z-20 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block md:-right-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#171717] text-[#d1ad6c]">
                      <RefreshCw size={19} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171717]">
                        New direction
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        Start a fresh journey.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="relative border-t border-gray-200/80 bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17b39]">
                Find Your Way
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#171717] sm:text-3xl">
                Where would you like to go?
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Explore some of the most visited sections of our website.
              </p>
            </div>

            <Link
              to="/"
              className="hidden items-center gap-2 text-sm font-bold text-[#a17b39] transition hover:gap-3 sm:inline-flex"
            >
              Visit Homepage <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-gray-100 bg-[#fafaf8] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b99753]/40 hover:bg-white hover:shadow-xl hover:shadow-[#171717]/[0.05]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-[#d1ad6c] transition-colors duration-300 group-hover:bg-[#b99753] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-[#171717]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-gray-400">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#b99753]"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
