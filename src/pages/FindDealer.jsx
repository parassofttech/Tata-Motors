
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  Navigation,
  LocateFixed,
  Building2,
  Wrench,
  Zap,
  ArrowUpRight,
  ArrowRight,
  CarFront,
  ShieldCheck,
  Clock3,
  MapPinned,
  Compass,
  CheckCircle2,
  ChevronRight,
  Phone,
  ExternalLink,
  X,
  Info,
} from "lucide-react";

const searchTypes = [
  {
    id: "showroom",
    title: "Car Showrooms",
    description: "Explore Tata Motors car showrooms near your location.",
    icon: Building2,
    mapQuery: "Tata Motors car showroom",
    accent: "gold",
  },
  {
    id: "service",
    title: "Service Centres",
    description: "Find authorised service centres for your Tata car.",
    icon: Wrench,
    mapQuery: "Tata Motors authorised car service centre",
    accent: "dark",
  },
  {
    id: "ev",
    title: "EV Experience",
    description: "Discover Tata electric vehicle dealerships.",
    icon: Zap,
    mapQuery: "Tata Motors electric vehicle showroom",
    accent: "light",
  },
];

const popularCities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Pune",
  "Lucknow",
  "Kanpur",
  "Jaipur",
  "Hyderabad",
];

const benefits = [
  {
    icon: MapPinned,
    title: "Find Nearby Locations",
    description:
      "Search for Tata Motors showrooms and service centres around your preferred location.",
  },
  {
    icon: ShieldCheck,
    title: "Explore Dealerships",
    description:
      "Open available dealership listings and check their details on Google Maps.",
  },
  {
    icon: Clock3,
    title: "Plan Your Visit",
    description:
      "Check directions, available contact details and business hours before visiting.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FindDealer() {
  const [location, setLocation] = useState("");
  const [selectedType, setSelectedType] = useState("showroom");
  const [searched, setSearched] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [searchError, setSearchError] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  useEffect(() => {
    document.title = "Find a Tata Motors Dealer | Locate Showrooms & Service Centres";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Find Tata Motors car showrooms, authorised service centres and EV dealerships near your location. Search by city or PIN code.";

    return () => {
      document.title = "Tata Motors";
    };
  }, []);

  const selectedCategory = useMemo(
    () => searchTypes.find((item) => item.id === selectedType),
    [selectedType]
  );

  const getMapsUrl = (type, searchLocation) => {
    const category = searchTypes.find((item) => item.id === type);

    if (!category || !searchLocation.trim()) return "";

    const query = `${category.mapQuery} near ${searchLocation.trim()}`;

    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const trimmedLocation = location.trim();

    if (trimmedLocation.length < 2) {
      setSearchError("Please enter a valid city or PIN code.");
      setSearched(false);
      return;
    }

    setSearchError("");
    setLocationError("");
    setSearched(true);
    setActiveSearch(trimmedLocation);
  };

  const openMaps = (type) => {
    const targetLocation = activeSearch || location.trim();

    if (!targetLocation) return;

    const url = getMapsUrl(type, targetLocation);

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleUseLocation = () => {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError(
        "Your browser does not support location detection. Please enter your city or PIN code."
      );
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation(`${latitude}, ${longitude}`);
        setSearchError("");
        setLocationError("");
        setSearched(true);
        setActiveSearch(`${latitude}, ${longitude}`);
        setLoadingLocation(false);
      },
      (error) => {
        let message =
          "Unable to access your location. Please enter your city or PIN code.";

        if (error.code === error.PERMISSION_DENIED) {
          message =
            "Location permission was denied. Please allow location access or enter your city manually.";
        } else if (error.code === error.TIMEOUT) {
          message =
            "Location request timed out. Please try again or enter your city manually.";
        }

        setLocationError(message);
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 60000,
      }
    );
  };

  const handleCitySelect = (city) => {
    setLocation(city);
    setSearchError("");
    setLocationError("");
    setSearched(false);
  };

  const clearSearch = () => {
    setLocation("");
    setSearched(false);
    setActiveSearch("");
    setSearchError("");
    setLocationError("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-[#171717] pt-28 pb-20 md:min-h-[610px] md:pt-36">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-car-2.jpg"
            alt="Tata Motors vehicle"
            className="h-full w-full object-cover object-center opacity-35"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
        </div>

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#b99753]/10 blur-[100px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b99753]/40 bg-[#b99753]/10 px-4 py-2">
              <MapPin size={15} className="text-[#d1ad6c]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Find Your Nearest Dealer
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Next Journey
              <span className="mt-2 block text-[#d1ad6c]">
                Starts Nearby.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Find a Tata Motors showroom, explore our vehicles or locate an
              authorised service centre. Your next experience is closer than
              you think.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#dealer-search"
                className="inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#b99753]/20 transition hover:-translate-y-1 hover:bg-[#a17b39]"
              >
                Find a Dealer
                <ArrowRight size={17} />
              </a>

              <Link
                to="/book-test-drive"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#d1ad6c]"
              >
                Book a Test Drive
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-sm font-semibold text-white">
                  Showrooms
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Explore car dealerships
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Service Centres
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Find service locations
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  EV Experience
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Discover electric cars
                </p>
              </div>
            </div>
          </motion.div>

          {/* HERO SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative ml-auto max-w-[440px] overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md">
              <img
                src="/images/about/tata-motors-experience.jpg"
                alt="Tata Motors customer experience"
                className="h-[310px] w-full rounded-[22px] object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#171717]/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b99753] text-white">
                    <Compass size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Your Destination Awaits
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      Discover a location near you
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto text-[#d1ad6c]"
                    size={21}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#b99753]/30 bg-[#242424] text-[#d1ad6c] shadow-xl">
              <MapPinned size={34} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section
        id="dealer-search"
        className="relative z-20 mx-auto -mt-8 max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[26px] border border-[#e9e5dc] bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10"
        >
          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Dealer Locator
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Find the Right Location for You
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your city or PIN code to explore nearby Tata Motors
              locations.
            </p>
          </div>

          <form onSubmit={handleSearch}>
            <label
              htmlFor="dealer-location"
              className="mb-3 block text-sm font-semibold text-[#252525]"
            >
              Your Location
            </label>

            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative min-w-0 flex-1">
                <MapPin
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#b99753]"
                />

                <input
                  id="dealer-location"
                  type="text"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                    setSearched(false);
                    setSearchError("");
                    setLocationError("");
                  }}
                  placeholder="Enter city name or PIN code..."
                  className="h-[58px] w-full rounded-xl border border-[#e8e5df] bg-[#fafaf8] pl-14 pr-12 text-sm text-[#171717] outline-none transition placeholder:text-gray-400 focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10"
                />

                {location && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear location"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-200 hover:text-black"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="flex h-[58px] items-center justify-center gap-3 rounded-xl bg-[#b99753] px-8 text-sm font-semibold text-white transition hover:bg-[#a17b39] active:scale-[0.98]"
              >
                <Search size={18} />
                Search Location
              </button>

              <button
                type="button"
                onClick={handleUseLocation}
                disabled={loadingLocation}
                className="flex h-[58px] items-center justify-center gap-3 rounded-xl border border-[#ded9ce] bg-white px-6 text-sm font-semibold text-[#242424] transition hover:border-[#b99753] hover:bg-[#faf8f2] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LocateFixed
                  size={18}
                  className="text-[#a17b39]"
                />
                {loadingLocation ? "Locating..." : "Use My Location"}
              </button>
            </div>

            {searchError && (
              <p className="mt-3 text-sm text-red-600">
                {searchError}
              </p>
            )}

            {locationError && (
              <p className="mt-3 text-sm leading-6 text-red-600">
                {locationError}
              </p>
            )}
          </form>

          {/* POPULAR CITIES */}
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Popular Locations
            </p>

            <div className="flex flex-wrap gap-2">
              {popularCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleCitySelect(city)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                    location === city
                      ? "border-[#b99753] bg-[#b99753] text-white"
                      : "border-[#e9e5dc] bg-[#fafaf8] text-gray-600 hover:border-[#b99753] hover:text-[#a17b39]"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEARCH RESULTS / CATEGORY OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Explore Locations
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where Would You Like to Go?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Choose the type of Tata Motors location you are looking for.
              We will open the relevant nearby listings on Google Maps.
            </p>
          </div>

          {searched && (
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2 text-xs font-semibold text-[#8d6b31] md:self-auto">
              <CheckCircle2 size={15} />
              Location selected
            </div>
          )}
        </div>

        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="flex flex-col gap-3 rounded-2xl border border-[#e9e5dc] bg-white p-5 sm:flex-row sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <MapPin size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400">
                    Searching around
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-[#171717]">
                    {activeSearch}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openMaps(selectedType)}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#333]"
                >
                  Open Google Maps
                  <ExternalLink size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchTypes.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedType === item.id;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedType(item.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[24px] border bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] ${
                  isSelected
                    ? "border-[#b99753] shadow-[0_10px_35px_rgba(185,151,83,0.12)]"
                    : "border-[#e9e5dc]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                      isSelected
                        ? "bg-[#b99753] text-white"
                        : "bg-[#f5f2eb] text-[#a17b39] group-hover:bg-[#b99753] group-hover:text-white"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
                      isSelected
                        ? "border-[#b99753] bg-[#b99753] text-white"
                        : "border-gray-200 text-transparent"
                    }`}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-xs font-semibold text-[#a17b39]">
                    {isSelected ? "Selected" : "Select Category"}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#a17b39] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#b99753]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* SEARCH ACTION */}
        <div className="mt-8 rounded-2xl bg-[#171717] p-6 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white">
              {selectedCategory?.title}
            </p>
            <p className="mt-2 text-sm text-white/55">
              {searched
                ? `Explore ${selectedCategory?.title.toLowerCase()} near ${activeSearch}.`
                : "Enter your location above to explore nearby listings."}
            </p>
          </div>

          <button
            type="button"
            disabled={!location.trim()}
            onClick={() => {
              if (!searched) {
                handleSearch({
                  preventDefault: () => {},
                });
                return;
              }

              openMaps(selectedType);
            }}
            className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#b99753] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a17b39] disabled:cursor-not-allowed disabled:opacity-40 sm:mt-0 sm:w-auto"
          >
            Find Nearby Locations
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#e9e5dc] bg-white p-4">
          <Info
            size={18}
            className="mt-0.5 shrink-0 text-[#a17b39]"
          />
          <p className="text-xs leading-6 text-gray-500">
            Dealer listings, addresses, contact details and business hours
            are provided by Google Maps. Please verify dealership
            authorisation and availability before visiting.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-[#e9e5dc] bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              A Better Experience
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything Starts With the Right Place
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Whether you are exploring a new car or maintaining your
              existing one, find a location that fits your journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-[#e9e5dc] bg-[#fafaf8] p-7 transition hover:-translate-y-1 hover:border-[#b99753]/50 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/10 text-[#a17b39]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEST DRIVE CTA */}
      <section className="relative overflow-hidden bg-[#171717] py-20">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#b99753]/10 blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#b99753]/10 blur-[100px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-9 px-5 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
              Experience the Difference
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Found Your Dream Car?
              <span className="block text-[#d1ad6c]">
                Take It for a Drive.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Book a test drive and experience the comfort, performance
              and technology of your favourite Tata Motors car.
            </p>
          </div>

          <Link
            to="/book-test-drive"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#b99753] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a17b39]"
          >
            Book a Test Drive
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
