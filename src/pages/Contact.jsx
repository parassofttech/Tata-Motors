
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  CarFront,
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  
  Sparkles,
  HelpCircle,
  Globe,
  FileText,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

const enquiryOptions = [
  "General Enquiry",
  "Vehicle Information",
  "Book a Test Drive",
  "Electric Vehicles",
  "Dealer Enquiry",
  "Feedback & Suggestions",
  "Website Support",
  "Other",
];

const contactFaqs = [
  {
    question: "How can I enquire about a vehicle?",
    answer:
      "You can use the contact form and select Vehicle Information. Mention the model you are interested in, and the website team can review your enquiry once the form is connected to a working backend.",
  },
  {
    question: "How can I request a test drive?",
    answer:
      "Visit the Book a Test Drive page, select your preferred vehicle and submit the form. A submitted request is not a confirmed appointment unless the relevant dealership confirms it.",
  },
  {
    question: "How can I find a nearby dealership?",
    answer:
      "Visit our Find a Dealer page to search for dealership locations using your city or PIN code.",
  },
  {
    question: "Can I ask about electric vehicles?",
    answer:
      "Yes. Select Electric Vehicles in the enquiry form and mention the EV model or information you need.",
  },
  {
    question: "How do I report a website issue?",
    answer:
      "Select Website Support in the enquiry form and describe the issue, including the page where you experienced it.",
  },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Enquiries",
    description: "Send us your questions or suggestions.",
    action: "Use Contact Form",
    href: "#contact-form",
    type: "link",
  },
  {
    icon: CalendarDays,
    title: "Book a Test Drive",
    description: "Explore your preferred vehicle in person.",
    action: "Book Now",
    href: "/book-test-drive",
    type: "route",
  },
  {
    icon: MapPin,
    title: "Find a Dealer",
    description: "Explore dealership locations near you.",
    action: "Find Dealer",
    href: "/dealer",
    type: "route",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Contact Us | Tata Motors";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Contact us for vehicle enquiries, test drive requests, dealership information and website support.";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.phone.trim() &&
      !/^[6-9]\d{9}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select an enquiry type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please accept the privacy consent.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    /*
      FRONTEND DEMO ONLY

      Connect your backend API here.

      Example:

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      Only show a successful submission after the server
      confirms that the enquiry has been saved.
    */

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: "",
      consent: false,
    });

    setErrors({});
    setSubmitted(false);
  };

  const FieldError = ({ message }) => {
    if (!message) return null;

    return (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
        <AlertCircle size={13} />
        {message}
      </p>
    );
  };

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3.5 text-sm text-[#171717] outline-none transition placeholder:text-gray-400 focus:border-[#b99753] focus:bg-white focus:ring-2 focus:ring-[#b99753]/10";

  return (
    <main className="min-h-screen overflow-hidden bg-[#fafaf8] text-[#171717]">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#171717] pt-[76px] md:pt-[108px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[120px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
              <MessageCircle size={15} className="text-[#d1ad6c]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                We're Here to Help
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Let's Start a
              <span className="block text-[#d1ad6c]">Conversation.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Have a question about our vehicles, need assistance or want
              to share your feedback? Send us a message and let us know
              how we can help.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-xl bg-[#b99753] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
              >
                Send an Enquiry
                <ArrowRight size={17} />
              </a>

              <Link
                to="/dealer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#b99753] hover:text-[#d1ad6c]"
              >
                Find a Dealer
                <MapPin size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-7">
              <div>
                <div className="flex items-center gap-2 text-[#d1ad6c]">
                  <ShieldCheck size={17} />
                  <span className="text-sm font-semibold">Your Privacy</span>
                </div>
                <p className="mt-2 text-xs text-white/40">
                  Responsible information handling
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#d1ad6c]">
                  <MessageCircle size={17} />
                  <span className="text-sm font-semibold">Easy Enquiries</span>
                </div>
                <p className="mt-2 text-xs text-white/40">
                  Multiple enquiry categories
                </p>
              </div>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-4 rounded-[35px] border border-[#b99753]/20" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#242424] p-7 sm:p-9">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#b99753]/10 blur-[65px]" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#b99753]/30 bg-[#b99753]/10 text-[#d1ad6c]">
                  <Headphones size={32} strokeWidth={1.5} />
                </div>

                <h2 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
                  We're listening.
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  Every question matters. Tell us what you need and we'll
                  help you find the right direction.
                </p>

                <div className="my-8 h-px bg-white/10" />

                <div className="space-y-5">
                  {[
                    {
                      icon: CarFront,
                      title: "Vehicle Assistance",
                      desc: "Explore models and features",
                    },
                    {
                      icon: CalendarDays,
                      title: "Test Drive Enquiries",
                      desc: "Plan your driving experience",
                    },
                    {
                      icon: MapPin,
                      title: "Dealer Assistance",
                      desc: "Find dealership information",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#d1ad6c]">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-white/40">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-xl border border-white/10 bg-[#303030] px-5 py-4 shadow-xl sm:-right-5">
              <Sparkles size={20} className="text-[#d1ad6c]" />
              <div>
                <p className="text-xs font-bold text-white">
                  Here for your journey
                </p>
                <p className="mt-1 text-[10px] text-white/40">
                  Let's connect
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#b99753] to-transparent opacity-70" />
      </section>

      {/* CONTACT METHODS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
            Connect With Us
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            How Can We Help You?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
            Choose the option that best matches what you are looking for.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#b99753]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b99753]/10 text-[#a17b39] transition group-hover:bg-[#b99753] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#a17b39] transition group-hover:gap-3">
                  {item.action}
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            );

            return item.type === "route" ? (
              <Link key={item.title} to={item.href} className="block h-full">
                {content}
              </Link>
            ) : (
              <a key={item.title} href={item.href} className="block h-full">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="scroll-mt-24 border-y border-black/[0.05] bg-white py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
          {/* FORM INTRO */}
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Contact Form
            </span>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Tell Us What
              <span className="block text-[#a17b39]">You Need.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Fill in the details below and describe your enquiry. Please
              provide accurate information so that your request can be
              handled appropriately.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Privacy Matters</h3>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    Please review our privacy policy before sharing
                    personal information.
                  </p>
                  <Link
                    to="/privacy-policy"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#a17b39] hover:text-[#171717]"
                  >
                    Privacy Policy <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Clear Communication</h3>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    Describe your request clearly and select the most
                    relevant enquiry category.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Enquiry Review</h3>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    Enquiries can be reviewed once the contact form is
                    connected to the website backend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-black/[0.06] bg-[#fafaf8] p-5 shadow-[0_12px_45px_rgba(0,0,0,0.045)] sm:p-8 lg:p-9">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[480px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b99753]/10 text-[#a17b39]">
                  <CheckCircle2 size={42} />
                </div>

                <h2 className="mt-7 text-2xl font-bold">
                  Form Validation Successful!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  Your information passed the frontend validation. This
                  demo form has not sent or saved your enquiry. Connect
                  the backend API to enable actual submissions.
                </p>

                <button
                  onClick={resetForm}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#b99753] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a17b39]"
                >
                  Send Another Enquiry
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-bold text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`${inputClass} ${
                          errors.name ? "border-red-400" : ""
                        }`}
                      />
                      <FieldError message={errors.name} />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-bold text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`${inputClass} ${
                          errors.email ? "border-red-400" : ""
                        }`}
                      />
                      <FieldError message={errors.email} />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-bold text-gray-700"
                      >
                        Mobile Number
                        <span className="ml-1 font-normal text-gray-400">
                          (Optional)
                        </span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);

                          setFormData((previous) => ({
                            ...previous,
                            phone: value,
                          }));

                          setErrors((previous) => ({
                            ...previous,
                            phone: "",
                          }));
                        }}
                        placeholder="10-digit mobile number"
                        className={`${inputClass} ${
                          errors.phone ? "border-red-400" : ""
                        }`}
                      />
                      <FieldError message={errors.phone} />
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-xs font-bold text-gray-700"
                      >
                        Enquiry Type *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputClass} ${
                          errors.subject ? "border-red-400" : ""
                        }`}
                      >
                        {enquiryOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <FieldError message={errors.subject} />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-bold text-gray-700"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      maxLength={1500}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className={`${inputClass} resize-y ${
                        errors.message ? "border-red-400" : ""
                      }`}
                    />
                    <div className="mt-2 flex items-center justify-between">
                      <FieldError message={errors.message} />
                      <span className="ml-auto text-[11px] text-gray-400">
                        {formData.message.length}/1500
                      </span>
                    </div>
                  </div>

                  {/* CONSENT */}
                  <div className="mt-6">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#b99753]"
                      />
                      <span className="text-xs leading-6 text-gray-500">
                        I have read and agree to the{" "}
                        <Link
                          to="/privacy-policy"
                          className="font-bold text-[#a17b39] underline underline-offset-2"
                        >
                          Privacy Policy
                        </Link>
                        . I understand that the information I provide may
                        be used to respond to my enquiry.
                      </span>
                    </label>
                    <FieldError message={errors.consent} />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#b99753] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#b99753]/15 transition hover:-translate-y-0.5 hover:bg-[#a17b39]"
                  >
                    Submit Enquiry
                    <Send size={17} />
                  </button>

                  <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
                    This demo form requires a backend connection before
                    enquiries can actually be submitted.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
            Explore More
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Looking for Something Else?
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Explore these useful sections of our website.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CarFront,
              title: "Explore Cars",
              description: "Discover our vehicle lineup.",
              link: "/cars",
            },
            {
              icon: CalendarDays,
              title: "Test Drive",
              description: "Plan your next driving experience.",
              link: "/book-test-drive",
            },
            {
              icon: MapPin,
              title: "Find a Dealer",
              description: "Search for a nearby dealership.",
              link: "/dealer",
            },
            {
              icon: HelpCircle,
              title: "FAQs",
              description: "Find answers to common questions.",
              link: "/faq",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={item.link}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b99753]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39] transition group-hover:bg-[#b99753] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-gray-400 transition group-hover:text-[#a17b39]"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-black/[0.05] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Quick Support
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Some quick answers before you get in touch.
            </p>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? "border-[#b99753]/40 bg-[#b99753]/[0.04]"
                      : "border-black/[0.07] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-[#222]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#a17b39] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#a17b39] transition hover:text-[#171717]"
            >
              Explore All FAQs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#171717] px-5 py-16 sm:px-8 md:py-20">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#b99753]/10 blur-[90px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-px w-7 bg-[#b99753]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Your Next Journey
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to discover your next car?
            </h2>

            <p className="mt-3 text-sm text-white/45">
              Explore our vehicles and find the one that moves you.
            </p>
          </div>

          <Link
            to="/cars"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
          >
            Explore Vehicles
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
