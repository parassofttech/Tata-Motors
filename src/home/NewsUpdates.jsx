
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  X,
  ChevronRight,
  Newspaper,
  CarFront,
  Zap,
  Trophy,
  Lightbulb,
  Bookmark,
  Share2,
  ExternalLink,
  Sparkles,
  Filter,
} from "lucide-react";

const categories = [
  "All Stories",
  "Latest Updates",
  "Electric Vehicles",
  "Technology",
  "Car Reviews",
  "Industry",
];

const articles = [
  {
    id: 1,
    category: "Latest Updates",
    title: "The Future of Driving: Exploring the Next Generation of SUVs",
    excerpt:
      "Discover how modern SUV design, advanced technology and thoughtful engineering are shaping the next chapter of mobility.",
    image: "/images/news/future-suv.jpg",
    date: "November 10, 2026",
    readTime: "5 min read",
    featured: true,
    tag: "Editor's Pick",
    author: "Editorial Team",
    content: [
      "The automotive industry is continuously evolving. Modern SUVs are increasingly focused on combining everyday comfort, practical space, thoughtful design and technology.",
      "Customers today expect more than just transportation. They want vehicles that fit their lifestyles, support their journeys and provide a comfortable driving experience.",
      "From digital interfaces to improved safety technologies, the next generation of vehicles is being shaped by changing customer expectations and engineering innovation.",
    ],
  },
  {
    id: 2,
    category: "Electric Vehicles",
    title: "Electric Mobility: A New Chapter in Urban Transportation",
    excerpt:
      "Explore how electric vehicles are changing the way people think about everyday mobility and city travel.",
    image: "/images/news/electric-mobility.jpg",
    date: "November 06, 2026",
    readTime: "4 min read",
    featured: false,
    tag: "EV Insights",
    author: "Editorial Team",
    content: [
      "Electric mobility is becoming an important part of conversations about the future of transportation.",
      "Electric vehicles offer a different ownership experience, with considerations such as home charging, public charging infrastructure, driving patterns and running costs.",
      "As charging networks develop and technology advances, EV adoption will continue to depend on accessibility, affordability and customer awareness.",
    ],
  },
  {
    id: 3,
    category: "Technology",
    title: "Smart Technology That Is Transforming the Driving Experience",
    excerpt:
      "A closer look at connected features, digital interfaces and driver assistance technologies in modern vehicles.",
    image: "/images/news/smart-technology.jpg",
    date: "November 02, 2026",
    readTime: "6 min read",
    featured: false,
    tag: "Innovation",
    author: "Editorial Team",
    content: [
      "Technology has become an important part of the modern driving experience.",
      "Digital instrument displays, connected vehicle services and intuitive infotainment systems can make everyday journeys more convenient.",
      "Driver assistance technologies may also support drivers in specific situations. Their availability and functionality depend on the vehicle and variant.",
    ],
  },
  {
    id: 4,
    category: "Car Reviews",
    title: "What Makes a Great Family SUV? Features Worth Considering",
    excerpt:
      "Space, comfort, safety, practicality and everyday usability are important factors when choosing a family SUV.",
    image: "/images/news/family-suv.jpg",
    date: "October 28, 2026",
    readTime: "7 min read",
    featured: false,
    tag: "Buying Guide",
    author: "Editorial Team",
    content: [
      "Choosing a family SUV requires considering how the vehicle will be used every day.",
      "Cabin space, seating comfort, boot capacity, visibility and ease of access can all influence the ownership experience.",
      "It is also useful to compare safety equipment, service support, running costs and available features across variants before making a decision.",
    ],
  },
  {
    id: 5,
    category: "Industry",
    title: "The Changing Landscape of India's Automotive Industry",
    excerpt:
      "Understand the trends influencing customer expectations, vehicle technology and the future of mobility in India.",
    image: "/images/news/automotive-industry.jpg",
    date: "October 22, 2026",
    readTime: "5 min read",
    featured: false,
    tag: "Industry Insight",
    author: "Editorial Team",
    content: [
      "India's automotive industry is influenced by changing customer preferences, technology and evolving mobility requirements.",
      "Demand for different vehicle categories, improved safety expectations and interest in electric mobility are important industry themes.",
      "The future will depend on continued innovation, customer experience, infrastructure and the development of accessible mobility solutions.",
    ],
  },
  {
    id: 6,
    category: "Latest Updates",
    title: "A Closer Look at Modern Automotive Design",
    excerpt:
      "Explore the relationship between exterior styling, interior comfort and practical vehicle engineering.",
    image: "/images/news/car-design.jpg",
    date: "October 16, 2026",
    readTime: "4 min read",
    featured: false,
    tag: "Design",
    author: "Editorial Team",
    content: [
      "Automotive design is about more than appearance. It combines visual identity, ergonomics, aerodynamics and everyday usability.",
      "Interior layouts, material choices, lighting and storage solutions all contribute to the experience of spending time inside a vehicle.",
      "The best design balances visual appeal with practical needs and the requirements of vehicle engineering.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const categoryIcons = {
  "Latest Updates": Newspaper,
  "Electric Vehicles": Zap,
  Technology: Lightbulb,
  "Car Reviews": CarFront,
  Industry: Trophy,
};

const getCategoryIcon = (category) => {
  return categoryIcons[category] || Newspaper;
};

const NewsCard = ({ article, onRead }) => {
  const Icon = getCategoryIcon(article.category);

  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-[22px] border border-[#e9e5dc] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#b99753]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-[225px] overflow-hidden bg-[#eae7df]">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#171717]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          <Icon size={13} className="text-[#d1ad6c]" />
          {article.category}
        </span>

        <span className="absolute bottom-5 right-5 rounded-full bg-[#b99753] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {article.tag}
        </span>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-gray-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} className="text-[#b99753]" />
            {article.date}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-[#b99753]" />
            {article.readTime}
          </span>
        </div>

        <h3 className="mt-5 min-h-[60px] text-lg font-semibold leading-7 text-[#171717] transition group-hover:text-[#9d783b]">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 min-h-[66px] text-sm leading-6 text-gray-500">
          {article.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-xs font-medium text-gray-400">
            By {article.author}
          </span>

          <button
            type="button"
            onClick={() => onRead(article)}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#a17b39] transition hover:gap-3"
          >
            Read Article
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default function NewsUpdates() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    document.title = "News & Updates | Automotive Stories and Insights";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore automotive stories, electric vehicle insights, technology updates, car reviews and industry articles.";

    return () => {
      document.title = "Tata Motors";
    };
  }, []);

  useEffect(() => {
    if (!selectedArticle) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedArticle(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Stories" ||
        article.category === activeCategory;

      const query = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesSearch &&
        article.id !== featuredArticle?.id
      );
    });
  }, [activeCategory, searchTerm, featuredArticle]);

  const toggleSave = (articleId) => {
    setSavedArticles((previous) =>
      previous.includes(articleId)
        ? previous.filter((id) => id !== articleId)
        : [...previous, articleId]
    );
  };

  const handleShare = async (article) => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(
          `${article.title}\n${window.location.href}`
        );
        window.alert("Article link copied!");
      } else {
        window.alert("Sharing is not supported in this browser.");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        window.alert("Unable to share this article.");
      }
    }
  };

  return (
    <main className="overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#171717] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/news/news-hero.jpg"
            alt="Automotive news and stories"
            className="h-full w-full object-cover opacity-25"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent" />
        </div>

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#b99753]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b99753]/35 bg-[#b99753]/10 px-4 py-2">
              <Sparkles size={15} className="text-[#d1ad6c]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                News, Stories & Insights
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Stories That
              <span className="block text-[#d1ad6c]">
                Move You Forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Explore automotive stories, discover new technologies,
              understand electric mobility and stay connected with the
              changing world of automobiles.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#latest-news"
                className="inline-flex items-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a17b39]"
              >
                Explore Stories
                <ArrowRight size={17} />
              </a>

              <Link
                to="/cars"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
              >
                Explore Cars
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-12">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Featured Story
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              The Story of the Moment
            </h2>
          </div>

          <span className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 sm:flex">
            <Sparkles size={15} className="text-[#b99753]" />
            Editor's Selection
          </span>
        </div>

        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden rounded-[28px] border border-[#e9e5dc] bg-white shadow-sm lg:grid-cols-2"
          >
            <div className="relative min-h-[290px] overflow-hidden bg-[#e9e5dc] lg:min-h-[460px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute left-6 top-6 rounded-full bg-[#b99753] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                {featuredArticle.tag}
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#a17b39]">
                {featuredArticle.category}
              </span>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {featuredArticle.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-[#b99753]" />
                  {featuredArticle.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} className="text-[#b99753]" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(featuredArticle)}
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b99753]"
              >
                Read Full Story
                <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* NEWS GRID */}
      <section
        id="latest-news"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mb-9">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17b39]">
            Latest Stories
          </span>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore What's New
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Discover insights and stories from the automotive world.
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:max-w-[320px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a17b39]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles..."
                className="h-12 w-full rounded-xl border border-[#e9e5dc] bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10"
              />
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <div className="mr-2 flex items-center gap-2 text-xs font-semibold text-gray-400">
            <Filter size={15} />
            Filter:
          </div>

          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                activeCategory === category
                  ? "bg-[#171717] text-white shadow-md"
                  : "border border-[#e9e5dc] bg-white text-gray-500 hover:border-[#b99753] hover:text-[#a17b39]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ARTICLE COUNT */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-400">
            Showing{" "}
            <span className="font-bold text-[#171717]">
              {filteredArticles.length}
            </span>{" "}
            stories
          </p>

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-xs font-semibold text-[#a17b39] hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onRead={setSelectedArticle}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#ded8ca] bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5f2eb] text-[#a17b39]">
              <Search size={27} />
            </div>

            <h3 className="mt-5 text-lg font-semibold">
              No Stories Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another keyword or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Stories");
              }}
              className="mt-6 rounded-full bg-[#171717] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#b99753]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* NEWSLETTER CTA */}
      <section className="relative overflow-hidden bg-[#171717] py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#b99753]/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b99753]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b99753]/30 bg-[#b99753]/10 text-[#d1ad6c]">
            <Newspaper size={29} />
          </div>

          <span className="mt-7 block text-xs font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
            Stay Informed
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Stay Connected With
            <span className="block text-[#d1ad6c]">
              The World of Mobility.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
            Discover new automotive stories, technology insights and
            updates as the world of mobility continues to evolve.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/cars"
              className="inline-flex items-center gap-3 rounded-full bg-[#b99753] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a17b39]"
            >
              Explore Our Cars
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/book-test-drive"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#d1ad6c] hover:text-[#d1ad6c]"
            >
              Book Test Drive
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE DETAIL MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedArticle(null);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-modal-title"
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[24px] bg-[#fafaf8] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#b99753]"
              >
                <X size={20} />
              </button>

              <div className="relative h-[240px] overflow-hidden bg-[#e9e5dc] sm:h-[330px]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute bottom-6 left-6 rounded-full bg-[#b99753] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  {selectedArticle.category}
                </span>
              </div>

              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-5 text-xs text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-[#b99753]" />
                    {selectedArticle.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={14} className="text-[#b99753]" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2
                  id="article-modal-title"
                  className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl"
                >
                  {selectedArticle.title}
                </h2>

                <p className="mt-4 border-l-2 border-[#b99753] pl-4 text-sm leading-7 text-gray-500">
                  {selectedArticle.excerpt}
                </p>

                <div className="mt-8 space-y-5">
                  {selectedArticle.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-8 text-gray-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-[#e9e5dc] pt-6">
                  <span className="text-xs text-gray-400">
                    By {selectedArticle.author}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSave(selectedArticle.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                        savedArticles.includes(selectedArticle.id)
                          ? "border-[#b99753] bg-[#b99753] text-white"
                          : "border-[#ded8ca] bg-white text-gray-600 hover:border-[#b99753]"
                      }`}
                    >
                      <Bookmark size={14} />
                      {savedArticles.includes(selectedArticle.id)
                        ? "Saved"
                        : "Save"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShare(selectedArticle)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#b99753]"
                    >
                      <Share2 size={14} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
