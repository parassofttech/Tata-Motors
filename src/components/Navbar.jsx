
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  CarFront,
  Zap,
  MapPin,
  GitCompareArrows,
  ArrowUpRight,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";

const carCategories = [
  {
    title: "SUV",
    description: "Adventure meets performance",
    href: "/cars?category=suv",
  },
  {
    title: "Hatchback",
    description: "Smart cars for everyday journeys",
    href: "/cars?category=hatchback",
  },
  {
    title: "Sedan",
    description: "Comfort and elegance",
    href: "/cars?category=sedan",
  },
  {
    title: "Electric Vehicles",
    description: "Experience the electric future",
    href: "/electric-cars",
  },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Our Cars", href: "/cars", dropdown: true },
  { label: "Electric", href: "/electric-cars" },
  { label: "Compare", href: "/compare" },
  { label: "About Us", href: "/about" },
  { label: "Find a Dealer", href: "/dealer" },
   { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [carsDropdown, setCarsDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus whenever route changes
  useEffect(() => {
    setMobileOpen(false);
    setCarsDropdown(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  // Prevent background scrolling on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    navigate(`/cars?search=${encodeURIComponent(query)}`);

    setSearchQuery("");
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCarsDropdown(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-[13px] font-semibold tracking-[0.04em] transition-colors duration-300 ${
      isActive
        ? "text-[#D4A84F]"
        : "text-slate-700 hover:text-[#B68A37]"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-[1000] w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/95 shadow-[0_8px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-b border-white/30 bg-white"
        }`}
      >
        {/* Top announcement bar */}
        <div className="hidden bg-[#101B2A] text-white md:block">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 lg:px-12">
            <p className="text-[10px] font-medium tracking-[0.16em] text-slate-300">
              ENGINEERED FOR EXCELLENCE. BUILT FOR INDIA.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/dealer"
                className="flex items-center gap-1.5 text-[11px] text-slate-300 transition hover:text-white"
              >
                <MapPin size={13} />
                Find a Dealer
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-[11px] text-slate-300 transition hover:text-white"
              >
                <Phone size={12} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Brand Logo */}
          <Link
            to="/"
            aria-label="Tata Motors - Home"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#101B2A] transition duration-300 group-hover:rotate-[-5deg] group-hover:bg-[#C69B45]">
              <CarFront
                size={25}
                strokeWidth={1.8}
                className="text-white"
              />
              <span className="absolute -bottom-1 h-[3px] w-5 rounded-full bg-[#D4A84F]" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-black tracking-[0.12em] text-[#101B2A]">
                TATA
              </span>

              <span className="mt-1 text-[9px] font-bold tracking-[0.23em] text-slate-500">
                MOTORS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex"
          >
            {navigationLinks.map((item) => (
              <div
                key={item.label}
                className="relative flex h-[76px] items-center"
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setCarsDropdown(!carsDropdown)}
                      aria-expanded={carsDropdown}
                      aria-haspopup="true"
                      className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.04em] text-slate-700 transition hover:text-[#B68A37]"
                    >
                      {item.label}

                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          carsDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {carsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-[45px] z-50 w-[360px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.15)]"
                        >
                          <div className="mb-2 flex items-center justify-between px-3 py-2">
                            <div>
                              <p className="text-sm font-bold text-[#101B2A]">
                                Explore Our Cars
                              </p>
                              <p className="mt-1 text-[11px] text-slate-400">
                                Find your perfect drive
                              </p>
                            </div>

                            <CarFront
                              size={25}
                              className="text-[#C69B45]"
                            />
                          </div>

                          {carCategories.map((category) => (
                            <Link
                              key={category.title}
                              to={category.href}
                              onClick={() => setCarsDropdown(false)}
                              className="group flex items-center justify-between rounded-xl p-3 transition hover:bg-[#F8F6F1]"
                            >
                              <div>
                                <p className="text-[13px] font-bold text-slate-800 transition group-hover:text-[#B68A37]">
                                  {category.title}
                                </p>

                                <p className="mt-1 text-[11px] text-slate-400">
                                  {category.description}
                                </p>
                              </div>

                              <ChevronRight
                                size={17}
                                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#C69B45]"
                              />
                            </Link>
                          ))}

                          <Link
                            to="/cars"
                            onClick={() => setCarsDropdown(false)}
                            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#101B2A] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#C69B45]"
                          >
                            View All Cars
                            <ArrowUpRight size={15} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink to={item.href} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setCarsDropdown(false);
              }}
              aria-label="Search cars"
              aria-expanded={searchOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-[#C69B45]"
            >
              <Search size={19} />
            </button>

            <Link
              to="/book-test-drive"
              className="group flex items-center gap-2 rounded-full bg-[#101B2A] px-5 py-3 text-[11px] font-bold tracking-[0.08em] text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#C69B45]"
            >
              BOOK A TEST DRIVE

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Open car search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
            >
              <Search size={20} />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101B2A] text-white transition hover:bg-[#C69B45]"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Search Panel */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white"
            >
              <form
                onSubmit={handleSearch}
                role="search"
                className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-5"
              >
                <Search className="shrink-0 text-[#C69B45]" size={21} />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Tata cars, models..."
                  aria-label="Search car models"
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#101B2A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#C69B45]"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 top-[76px] z-[-1] bg-black/40 xl:hidden"
              />

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 right-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-7 pt-4 shadow-2xl xl:hidden"
              >
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col"
                >
                  {navigationLinks.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-slate-100"
                    >
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setCarsDropdown(!carsDropdown)
                            }
                            aria-expanded={carsDropdown}
                            className="flex w-full items-center justify-between py-4 text-sm font-bold text-slate-800"
                          >
                            {item.label}

                            <ChevronDown
                              size={17}
                              className={`transition-transform ${
                                carsDropdown ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {carsDropdown && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mb-3 space-y-1 rounded-xl bg-slate-50 p-2">
                                  {carCategories.map((category) => (
                                    <Link
                                      key={category.title}
                                      to={category.href}
                                      onClick={closeMobileMenu}
                                      className="flex items-center justify-between rounded-lg px-3 py-3 text-xs font-semibold text-slate-600 transition hover:bg-white hover:text-[#B68A37]"
                                    >
                                      {category.title}
                                      <ChevronRight size={15} />
                                    </Link>
                                  ))}

                                  <Link
                                    to="/cars"
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-2 rounded-lg bg-[#101B2A] px-3 py-3 text-xs font-bold text-white"
                                  >
                                    Explore All Cars
                                    <ArrowRight size={14} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink
                          to={item.href}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            `block py-4 text-sm font-bold transition ${
                              isActive
                                ? "text-[#C69B45]"
                                : "text-slate-800 hover:text-[#C69B45]"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </div>
                  ))}

                  {/* Additional mobile links */}
                  <Link
                    to="/find-dealer"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
                  >
                    <MapPin size={18} className="text-[#C69B45]" />
                    Find a Dealer
                  </Link>

                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
                  >
                    <Phone size={18} className="text-[#C69B45]" />
                    Contact Us
                  </Link>

                  <Link
                    to="/book-test-drive"
                    onClick={closeMobileMenu}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#101B2A] px-5 py-4 text-xs font-bold tracking-wider text-white shadow-lg transition hover:bg-[#C69B45]"
                  >
                    <CalendarDays size={17} />
                    BOOK A TEST DRIVE
                    <ArrowUpRight size={15} />
                  </Link>
                </nav>

                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.15em] text-slate-400">
                  <Sparkles size={13} className="text-[#C69B45]" />
                  ENGINEERED FOR EXCELLENCE
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
