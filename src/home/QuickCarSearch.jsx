
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  CarFront,
  Wallet,
  Fuel,
  Settings2,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const initialFilters = {
  bodyType: "",
  budget: "",
  fuel: "",
  transmission: "",
};

const bodyTypes = [
  { label: "All Types", value: "" },
  { label: "SUV", value: "SUV" },
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan", value: "Sedan" },
];

const budgetOptions = [
  { label: "Any Budget", value: "" },
  { label: "Under ₹8 Lakh", value: "under-8" },
  { label: "₹8 – ₹12 Lakh", value: "8-12" },
  { label: "₹12 – ₹18 Lakh", value: "12-18" },
  { label: "Above ₹18 Lakh", value: "above-18" },
];

const fuelOptions = [
  { label: "All Fuel Types", value: "" },
  { label: "Petrol", value: "Petrol" },
  { label: "Diesel", value: "Diesel" },
  { label: "CNG", value: "CNG" },
  { label: "Electric", value: "Electric" },
];

const transmissionOptions = [
  { label: "Any Transmission", value: "" },
  { label: "Manual", value: "Manual" },
  { label: "Automatic", value: "Automatic" },
];

const filterFields = [
  {
    name: "bodyType",
    label: "Body Type",
    placeholder: "Select body type",
    icon: CarFront,
    options: bodyTypes,
  },
  {
    name: "budget",
    label: "Your Budget",
    placeholder: "Select your budget",
    icon: Wallet,
    options: budgetOptions,
  },
  {
    name: "fuel",
    label: "Fuel Type",
    placeholder: "Select fuel type",
    icon: Fuel,
    options: fuelOptions,
  },
  {
    name: "transmission",
    label: "Transmission",
    placeholder: "Select transmission",
    icon: Settings2,
    options: transmissionOptions,
  },
];

const QuickCarSearch = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = (name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      }
    });

    navigate(`/cars${query.toString() ? `?${query.toString()}` : ""}`);
  };

  const handleReset = () => {
    setFilters(initialFilters);
  };

  const selectedCount = Object.values(filters).filter(Boolean).length;

  const animation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.65, ease: "easeOut" },
      };

  return (
    <section
      id="quick-car-search"
      className="relative overflow-hidden bg-[#f5f5f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="quick-search-heading"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d5a94d]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-300/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          {...animation}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c69b43]/30 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={15} className="text-[#b58b37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8b6929]">
              Find Your Perfect Drive
            </span>
          </div>

          <h2
            id="quick-search-heading"
            className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl"
          >
            Find the Car That
            <span className="block mt-2 text-[#b18a3e]">
              Moves You Forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Your perfect car is just a few clicks away. Choose your preferences
            and discover a car that fits your lifestyle.
          </p>
        </motion.div>

        {/* Search panel */}
        <motion.div
          {...animation}
          transition={{
            ...(animation.transition || {}),
            delay: shouldReduceMotion ? 0 : 0.12,
          }}
          className="overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Panel header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#171717] text-[#d7b15f]">
                <SlidersHorizontal size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Customize Your Search
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Select your preferences to explore available cars.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-[#f7f4ec] px-4 py-2 sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-[#b28b3d]" />
              <span className="text-xs font-semibold text-[#8b6929]">
                {selectedCount} filters selected
              </span>
            </div>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="p-6 sm:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filterFields.map((field, index) => {
                const Icon = field.icon;

                return (
                  <motion.div
                    key={field.name}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 15 }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? {}
                        : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    className="group"
                  >
                    <label
                      htmlFor={`car-filter-${field.name}`}
                      className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800"
                    >
                      <Icon
                        size={17}
                        className="text-[#b18a3e]"
                      />
                      {field.label}
                    </label>

                    <div className="relative">
                      <select
                        id={`car-filter-${field.name}`}
                        name={field.name}
                        value={filters[field.name]}
                        onChange={(event) =>
                          updateFilter(field.name, event.target.value)
                        }
                        className="h-[58px] w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-[#fafafa] px-4 pr-11 text-sm font-medium text-gray-700 outline-none transition-all duration-300 hover:border-[#c6a052] focus:border-[#b18a3e] focus:bg-white focus:ring-4 focus:ring-[#c6a052]/10"
                      >
                        {field.options.map((option) => (
                          <option
                            key={option.value || "all"}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>

                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m5 7.5 5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Selected filters */}
            {selectedCount > 0 && (
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold text-gray-500">
                  Selected:
                </span>

                {Object.entries(filters).map(([key, value]) => {
                  if (!value) return null;

                  const field = filterFields.find(
                    (item) => item.name === key
                  );

                  const option = field?.options.find(
                    (item) => item.value === value
                  );

                  return (
                    <span
                      key={key}
                      className="rounded-full border border-[#c6a052]/30 bg-[#f8f4e9] px-3 py-1.5 text-xs font-semibold text-[#896b30]"
                    >
                      {option?.label}
                    </span>
                  );
                })}
              </div>
            )}

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-4 border-t border-gray-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleReset}
                disabled={selectedCount === 0}
                className="inline-flex items-center justify-center gap-2 self-start rounded-lg px-3 py-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#a17b32] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCcw size={15} />
                Reset Filters
              </button>

              <button
                type="submit"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[#171717] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#b18a3e] hover:shadow-xl hover:shadow-[#b18a3e]/20 focus:outline-none focus:ring-4 focus:ring-[#b18a3e]/30"
              >
                <Search size={18} />
                Explore Matching Cars
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>

          {/* Bottom strip */}
          <div className="flex flex-col gap-3 bg-[#171717] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <CarFront size={18} className="text-[#d5b15f]" />
              </div>

              <p className="text-xs leading-5 text-gray-300 sm:text-sm">
                Discover a car designed around your everyday journey.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/cars")}
              className="inline-flex items-center gap-2 self-start text-xs font-bold text-[#d7b15f] transition-colors hover:text-white sm:self-auto"
            >
              View All Cars
              <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>

        {/* Trust note */}
        <p className="mt-6 text-center text-xs leading-6 text-gray-400">
          Explore available models and configurations. Prices and specifications
          should be confirmed with an authorized dealer.
        </p>
      </div>
    </section>
  );
};

export default QuickCarSearch;
