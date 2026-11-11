
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Minus,
  MessageCircle,
  CarFront,
  Zap,
  ShieldCheck,
  CreditCard,
  Wrench,
  CalendarCheck,
  Headphones,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Sparkles,
  CircleHelp,
  Mail,
  Phone,
  FileText,
  Clock3,
  CheckCircle2,
  X,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "cars", label: "Cars & Models", icon: CarFront },
  { id: "booking", label: "Booking & Test Drive", icon: CalendarCheck },
  { id: "electric", label: "Electric Vehicles", icon: Zap },
  { id: "finance", label: "Finance & Payments", icon: CreditCard },
  { id: "service", label: "Service & Warranty", icon: Wrench },
];

const faqs = [
  {
    id: 1,
    category: "cars",
    question: "How can I explore the available Tata Motors car models?",
    answer:
      "Visit the Cars section of this website to explore the available model listings. You can view vehicle information, browse images and compare selected models. For the latest official specifications, variants and prices, always check the official Tata Motors website or contact an authorised dealership.",
    popular: true,
  },
  {
    id: 2,
    category: "cars",
    question: "How do I compare two or more cars?",
    answer:
      "Open the Compare Cars section and select the models you want to compare. You can review available information about design, features and specifications side by side. Vehicle features and specifications can vary by model year and variant.",
    popular: true,
  },
  {
    id: 3,
    category: "cars",
    question: "How can I find the right car for my needs?",
    answer:
      "Consider your daily driving requirements, number of passengers, luggage needs, preferred fuel type, budget and ownership costs. Explore different models and arrange a test drive before making your decision.",
    popular: false,
  },
  {
    id: 4,
    category: "booking",
    question: "How can I book a test drive?",
    answer:
      "Visit the Book Test Drive page, select your preferred car, enter your contact details and choose a convenient date and time. The current website form is a demonstration interface. A real test-drive request requires a connected backend and dealership confirmation.",
    popular: true,
  },
  {
    id: 5,
    category: "booking",
    question: "Can I choose my preferred dealership for a test drive?",
    answer:
      "You can enter your preferred dealership or location in the test-drive form. You can also visit the Find a Dealer page to search for nearby Tata Motors showroom listings through Google Maps.",
    popular: false,
  },
  {
    id: 6,
    category: "booking",
    question: "Will my test drive be confirmed immediately?",
    answer:
      "A submitted request is not the same as a confirmed appointment. The dealership needs to check vehicle availability and contact you to confirm the appointment. This website's current demonstration form does not send an actual booking request.",
    popular: false,
  },
  {
    id: 7,
    category: "electric",
    question: "What should I consider before buying an electric car?",
    answer:
      "Consider your daily driving distance, charging access, typical travel routes, available charging infrastructure, vehicle range information and total ownership costs. Check the specifications and charging guidance for the exact model and variant you are considering.",
    popular: true,
  },
  {
    id: 8,
    category: "electric",
    question: "Where can I find charging information for an EV?",
    answer:
      "Refer to the owner's manual and official vehicle information for charging recommendations. You should also check the availability, connector compatibility and operating status of charging stations along your planned routes.",
    popular: false,
  },
  {
    id: 9,
    category: "electric",
    question: "Does every electric car support the same charging speed?",
    answer:
      "No. Charging speed depends on the vehicle's charging capability, battery condition, charger output, temperature and other factors. Always refer to the official specifications for your particular vehicle and variant.",
    popular: false,
  },
  {
    id: 10,
    category: "finance",
    question: "Can I calculate my estimated monthly EMI?",
    answer:
      "Yes. You can use a car EMI calculator to estimate monthly payments based on the vehicle price, down payment, loan amount, interest rate and loan tenure. Actual EMI, fees and loan eligibility depend on the lender's terms and your application.",
    popular: true,
  },
  {
    id: 11,
    category: "finance",
    question: "What documents are generally required for a car loan?",
    answer:
      "Lenders commonly request identity proof, address proof, income documents and bank statements. Requirements differ between lenders and applicant profiles, so confirm the exact document list with your selected bank or financial institution.",
    popular: false,
  },
  {
    id: 12,
    category: "finance",
    question: "Can I make a booking payment online?",
    answer:
      "Payment options and booking procedures depend on the dealership and the official booking channel. Before paying, verify the recipient, payment terms, refund conditions and official booking confirmation.",
    popular: false,
  },
  {
    id: 13,
    category: "service",
    question: "How can I find an authorised Tata Motors service centre?",
    answer:
      "Use the Find a Dealer page to search for service centre listings on Google Maps. Verify the centre's authorisation, address, working hours and appointment availability before visiting.",
    popular: true,
  },
  {
    id: 14,
    category: "service",
    question: "How often should I service my car?",
    answer:
      "Follow the service schedule specified in your vehicle's owner's manual. Service intervals can vary by model, powertrain, usage conditions and vehicle age. Contact an authorised service centre for model-specific guidance.",
    popular: false,
  },
  {
    id: 15,
    category: "service",
    question: "Where can I check my vehicle warranty details?",
    answer:
      "Refer to your warranty booklet and the official documentation supplied with your vehicle. Coverage, exclusions, duration and conditions depend on the vehicle, variant, purchase terms and applicable warranty policy.",
    popular: false,
  },
];

const categoryNames = {
  cars: "Cars & Models",
  booking: "Booking & Test Drive",
  electric: "Electric Vehicles",
  finance: "Finance & Payments",
  service: "Service & Warranty",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border transition duration-300 ${
        isOpen
          ? "border-[#b99753]/60 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.045)]"
          : "border-[#e9e5dc] bg-white hover:border-[#b99753]/40"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
            isOpen
              ? "bg-[#b99753] text-white"
              : "bg-[#f5f2eb] text-[#a17b39]"
          }`}
        >
          {isOpen ? <Minus size={19} /> : <Plus size={19} />}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-6 text-[#171717] sm:text-base">
            {item.question}
          </span>

          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wider text-[#a17b39]">
            {categoryNames[item.category]}
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#a17b39]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-[60px] border-t border-[#eeeae2] px-5 pb-6 pt-5 sm:ml-[72px] sm:mr-5 sm:px-6">
              <p className="text-sm leading-8 text-gray-500">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState(1);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = "Frequently Asked Questions | Tata Motors";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Find answers to common questions about car models, test drives, electric vehicles, finance, servicing and warranty.";

    return () => {
      document.title = "Tata Motors";
    };
  }, []);

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return faqs.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        categoryNames[item.category].toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedFAQs =
    showAll || searchQuery || activeCategory !== "all"
      ? filteredFAQs
      : filteredFAQs.slice(0, 7);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenId(null);
    setShowAll(false);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setOpenId(null);
    setShowAll(true);
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setOpenId(1);
    setShowAll(false);
  };

  const popularFAQs = faqs.filter((item) => item.popular).slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#171717] pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/faq/faq-hero.jpg"
            alt="Frequently asked questions"
            className="h-full w-full object-cover opacity-20"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent" />
        </div>

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#b99753]/10 blur-[110px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b99753]/35 bg-[#b99753]/10 px-4 py-2">
              <Sparkles size={15} className="text-[#d1ad6c]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Help & Support
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Got Questions?
              <span className="block text-[#d1ad6c]">
                We've Got Answers.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Find helpful answers about cars, test drives, electric
              mobility, financing and vehicle ownership.
            </p>

            <a
              href="#faq-content"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a17b39]"
            >
              Explore FAQs
              <ArrowRight size={17} />
            </a>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold text-white">15+</p>
                <p className="mt-1 text-xs text-white/45">
                  Helpful Answers
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">6</p>
                <p className="mt-1 text-xs text-white/45">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  Anytime
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Browse Information
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAIN FAQ AREA */}
      <section
        id="faq-content"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[22px] border border-[#e9e5dc] bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <FileText size={19} />
                </div>

                <div>
                  <h2 className="text-sm font-bold">Browse Topics</h2>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Select a category
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;

                  const count =
                    category.id === "all"
                      ? faqs.length
                      : faqs.filter(
                          (faq) => faq.category === category.id
                        ).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleCategoryChange(category.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                        isActive
                          ? "bg-[#171717] text-white shadow-md"
                          : "text-gray-500 hover:bg-[#f5f2eb] hover:text-[#987437]"
                      }`}
                    >
                      <Icon
                        size={17}
                        className={
                          isActive ? "text-[#d1ad6c]" : "text-[#a17b39]"
                        }
                      />

                      <span className="flex-1 text-xs font-semibold">
                        {category.label}
                      </span>

                      <span
                        className={`rounded-full px-2 py-1 text-[10px] ${
                          isActive
                            ? "bg-white/10 text-white/80"
                            : "bg-[#f5f2eb] text-gray-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-[#eeeae2] pt-5">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="w-full rounded-xl border border-[#e9e5dc] px-4 py-3 text-xs font-semibold text-gray-500 transition hover:border-[#b99753] hover:text-[#a17b39]"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* QUICK SUPPORT CARD */}
            <div className="mt-5 overflow-hidden rounded-[22px] bg-[#171717] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c]">
                <MessageCircle size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Still Need Help?
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/50">
                Find a dealership or use the available support
                information to get assistance.
              </p>

              <Link
                to="/dealer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#d1ad6c] transition hover:gap-3"
              >
                Find a Dealer
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>

          {/* QUESTIONS */}
          <div className="min-w-0">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
                Frequently Asked Questions
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                How Can We Help You?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Browse common questions or search for a specific topic.
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative mb-7">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#a17b39]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search questions, topics or keywords..."
                className="h-14 w-full rounded-xl border border-[#e9e5dc] bg-white pl-14 pr-12 text-sm outline-none transition focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-black"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* RESULTS INFO */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                Showing{" "}
                <span className="font-bold text-[#171717]">
                  {displayedFAQs.length}
                </span>{" "}
                of {filteredFAQs.length} questions
              </p>

              <span className="rounded-full bg-[#b99753]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#987437]">
                {categories.find(
                  (category) => category.id === activeCategory
                )?.label}
              </span>
            </div>

            {/* ACCORDION */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {displayedFAQs.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FAQItem
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() =>
                        setOpenId((current) =>
                          current === item.id ? null : item.id
                        )
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* EMPTY STATE */}
            {filteredFAQs.length === 0 && (
              <div className="rounded-[24px] border border-dashed border-[#ded8ca] bg-white px-5 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5f2eb] text-[#a17b39]">
                  <Search size={27} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  No Questions Found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try a different keyword or browse another category.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#b99753]"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* VIEW MORE */}
            {filteredFAQs.length > 7 &&
              !showAll &&
              !searchQuery &&
              activeCategory === "all" && (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-[#e9e5dc] bg-white py-4 text-sm font-semibold text-[#171717] transition hover:border-[#b99753] hover:text-[#a17b39]"
                >
                  View All Questions
                  <ChevronDown size={18} />
                </button>
              )}

            {showAll &&
              filteredFAQs.length > 7 &&
              !searchQuery &&
              activeCategory === "all" && (
                <button
                  type="button"
                  onClick={() => {
                    setShowAll(false);
                    setOpenId(null);
                  }}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-[#e9e5dc] bg-white py-4 text-sm font-semibold text-gray-500 transition hover:border-[#b99753] hover:text-[#a17b39]"
                >
                  Show Less
                  <ChevronDown size={18} className="rotate-180" />
                </button>
              )}
          </div>
        </div>
      </section>

      {/* POPULAR QUESTIONS */}
      <section className="border-y border-[#e9e5dc] bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Quick Answers
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Popular Questions
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Start with the questions customers commonly explore.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularFAQs.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveCategory(item.category);
                  setSearchQuery("");
                  setOpenId(item.id);
                  setShowAll(true);

                  document
                    .getElementById("faq-content")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-[#e9e5dc] bg-[#fafaf8] p-6 text-left transition hover:-translate-y-1 hover:border-[#b99753] hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39] transition group-hover:bg-[#b99753] group-hover:text-white">
                  <CircleHelp size={21} />
                </div>

                <h3 className="mt-5 min-h-[68px] text-sm font-semibold leading-6 text-[#171717]">
                  {item.question}
                </h3>

                <div className="mt-5 flex items-center justify-between border-t border-[#e9e5dc] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a17b39]">
                    Read Answer
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#a17b39] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}
