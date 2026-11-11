
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Scale,
  ShieldCheck,
  UserCheck,
  CarFront,
  AlertTriangle,
  Copyright,
  Globe,
  LockKeyhole,
  CreditCard,
  Gavel,
  ChevronDown,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Clock,
  Ban,
  Info,
} from "lucide-react";

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      {
        heading: "Agreement to These Terms",
        text: "By accessing or using this website, you acknowledge that you have read and understood these Terms and Conditions. If you do not agree with these terms, please discontinue using the website.",
      },
      {
        heading: "Changes to These Terms",
        text: "These Terms and Conditions may be updated periodically. Updated terms will be published on this page with a revised effective date. Your continued use of the website after publication of changes will be subject to the updated terms, as permitted by applicable law.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility & User Responsibilities",
    icon: UserCheck,
    content: [
      {
        heading: "Eligibility",
        text: "You must be legally capable of entering into an agreement under applicable law to use features that require a contractual commitment. If you are under the age of majority, you should use the website with the involvement of a parent or legal guardian.",
      },
      {
        heading: "Accurate Information",
        text: "You agree to provide accurate and complete information when submitting enquiries, requesting a test drive or using any other website form.",
      },
      {
        heading: "Responsible Use",
        text: "You must not misuse the website, attempt unauthorised access, interfere with its operation, upload malicious content or use it for unlawful purposes.",
      },
    ],
  },
  {
    id: "website",
    title: "Website Usage",
    icon: Globe,
    content: [
      {
        heading: "Permitted Use",
        text: "You may use this website for lawful personal browsing, exploring vehicle information, comparing available models and submitting legitimate enquiries.",
      },
      {
        heading: "Prohibited Activities",
        text: "You must not copy, scrape, reproduce, reverse engineer, disrupt or exploit website content or functionality without appropriate permission.",
      },
      {
        heading: "Availability",
        text: "We may modify, suspend, restrict or discontinue any part of the website at any time for maintenance, security, operational or other legitimate reasons.",
      },
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle Information",
    icon: CarFront,
    content: [
      {
        heading: "Specifications and Features",
        text: "Vehicle descriptions, images, specifications, features, colours and equipment displayed on this website are provided for general informational purposes. Actual specifications may vary by model, variant, location and production configuration.",
      },
      {
        heading: "Prices and Offers",
        text: "Any displayed prices, estimated costs, offers or finance information should be treated as indicative unless expressly confirmed by an authorised seller. Taxes, registration, insurance, accessories and other charges may apply.",
      },
      {
        heading: "Images and Illustrations",
        text: "Images, graphics, renders and videos may be illustrative. The actual vehicle, colour, equipment or accessories may differ from what is displayed.",
      },
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries & Test Drives",
    icon: CheckCircle2,
    content: [
      {
        heading: "Submitting a Request",
        text: "Submitting an enquiry or test-drive request through this website does not automatically create a confirmed appointment, purchase agreement or vehicle reservation.",
      },
      {
        heading: "Confirmation",
        text: "Any appointment, test drive, booking or purchase arrangement is subject to confirmation by the relevant authorised dealership or service provider.",
      },
      {
        heading: "Contact Details",
        text: "You are responsible for ensuring that the contact details you provide are correct so that responses to your requests can be delivered.",
      },
    ],
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    icon: Copyright,
    content: [
      {
        heading: "Ownership of Content",
        text: "Unless otherwise stated, website layouts, text, graphics, design elements, software and other materials are protected by applicable intellectual property laws and belong to their respective owners.",
      },
      {
        heading: "Trademarks",
        text: "Brand names, logos, vehicle names, trademarks and other identifying marks displayed on the website belong to their respective owners. Their appearance does not grant you any ownership or usage rights.",
      },
      {
        heading: "Limited Permission",
        text: "You may view and use website content for personal, non-commercial purposes. Reproduction, redistribution, commercial use or modification requires appropriate permission from the relevant rights holder.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Personal Information",
    icon: LockKeyhole,
    content: [
      {
        heading: "Privacy Policy",
        text: "Your use of this website may involve the collection or processing of information. Please review our Privacy Policy to understand the applicable privacy practices.",
      },
      {
        heading: "Information Accuracy",
        text: "You are responsible for the accuracy of information submitted through forms and other website features.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services & Links",
    icon: Globe,
    content: [
      {
        heading: "External Websites",
        text: "This website may contain links to third-party websites, social media platforms, mapping services or other external resources for convenience.",
      },
      {
        heading: "Third-Party Terms",
        text: "External services are governed by their own terms, privacy policies and operating practices. We do not control or guarantee the availability, accuracy or security of third-party websites.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Financial Information",
    icon: CreditCard,
    content: [
      {
        heading: "Indicative Calculations",
        text: "Any EMI calculator, loan estimate, price comparison or financial illustration available on the website is for general guidance only and does not constitute a loan offer, financial advice or guarantee of approval.",
      },
      {
        heading: "Final Financial Terms",
        text: "Actual finance rates, eligibility, payment schedules, fees and other conditions are determined by the relevant financial institution or authorised provider.",
      },
    ],
  },
  {
    id: "liability",
    title: "Disclaimer & Limitation of Liability",
    icon: AlertTriangle,
    content: [
      {
        heading: "Information Provided As Available",
        text: "The website and its content are provided on an as-available basis. To the extent permitted by applicable law, we do not guarantee that all information will always be accurate, complete, current or uninterrupted.",
      },
      {
        heading: "No Guarantee",
        text: "We do not guarantee uninterrupted access, error-free operation, compatibility with every device or that the website will always be free from technical issues.",
      },
      {
        heading: "Liability",
        text: "To the extent permitted by applicable law, we will not be liable for indirect or consequential losses arising from the use of, or inability to use, this website. Nothing in these terms excludes liability that cannot legally be excluded.",
      },
    ],
  },
  {
    id: "termination",
    title: "Suspension & Termination",
    icon: Ban,
    content: [
      {
        heading: "Restriction of Access",
        text: "Access to all or part of the website may be restricted or suspended if misuse, unlawful activity, security risks or violations of these terms are identified.",
      },
      {
        heading: "Effect of Termination",
        text: "Suspension or termination of website access does not affect rights or obligations that have already arisen or provisions that are intended to continue after termination.",
      },
    ],
  },
  {
    id: "law",
    title: "Governing Law & Disputes",
    icon: Gavel,
    content: [
      {
        heading: "Applicable Law",
        text: "These terms are intended to be interpreted in accordance with applicable laws of India, subject to any mandatory consumer protection or other legal rights that apply.",
      },
      {
        heading: "Dispute Resolution",
        text: "If a concern arises regarding these terms or the website, we encourage you to contact us first so that the matter can be discussed and, where possible, resolved amicably.",
      },
    ],
  },
];

const termsFaqs = [
  {
    question: "Does submitting a test-drive form confirm my appointment?",
    answer:
      "No. Submitting a request does not itself confirm an appointment. The relevant dealership or service provider must confirm the date and availability.",
  },
  {
    question: "Are vehicle prices and specifications final?",
    answer:
      "Not necessarily. Displayed information may be indicative and can vary by variant, location, taxes, offers and vehicle configuration. Confirm details with an authorised seller.",
  },
  {
    question: "Can I use images and content from this website?",
    answer:
      "Website content may be protected by intellectual property laws. You should obtain permission from the relevant rights holder before reproducing or commercially using protected materials.",
  },
  {
    question: "Can these terms be changed?",
    answer:
      "Yes. The terms may be revised from time to time. Please check this page for the latest published version.",
  },
  {
    question: "Where can I read about data collection?",
    answer:
      "Please visit the Privacy Policy page for information about how personal information may be collected and handled.",
  },
];

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Terms & Conditions | Tata Motors";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Read the Terms and Conditions governing access to and use of this vehicle discovery website.";

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#171717]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#171717] pt-[76px] md:pt-[108px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[110px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
              <Scale size={15} className="text-[#d1ad6c]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Clear & Transparent Guidelines
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Terms &
              <span className="text-[#d1ad6c]"> Conditions.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Please review these terms before using our website. They
              explain your responsibilities, website usage guidelines and
              important information about the services provided.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#d1ad6c]" />
                Website Usage Guidelines
              </span>
              <span className="h-1 w-1 rounded-full bg-[#b99753]" />
              <span>Effective date: 10 November 2026</span>
            </div>
          </motion.div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#b99753] to-transparent opacity-70" />
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:grid-cols-3">
          {[
            {
              icon: Scale,
              title: "Fair Guidelines",
              description: "Understand the rules of website usage.",
            },
            {
              icon: ShieldCheck,
              title: "Your Responsibilities",
              description: "Know your rights and obligations.",
            },
            {
              icon: FileText,
              title: "Clear Information",
              description: "Review important website conditions.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-5 sm:p-6 ${
                  index !== 2
                    ? "border-b border-black/[0.06] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#a17b39]">
                On This Page
              </h2>

              <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                {termsSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition-all duration-300 lg:w-full ${
                        isActive
                          ? "bg-[#171717] text-[#d1ad6c]"
                          : "text-gray-500 hover:bg-[#b99753]/10 hover:text-[#171717]"
                      }`}
                    >
                      <Icon size={16} />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-5 rounded-2xl bg-[#171717] p-5 text-white">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b99753]/15 text-[#d1ad6c]">
                <Mail size={20} />
              </div>
              <h3 className="text-base font-semibold">
                Need Assistance?
              </h3>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Get in touch if you have any questions about these terms.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#d1ad6c] transition hover:text-white"
              >
                Contact Us <ArrowUpRight size={14} />
              </Link>
            </div>
          </aside>

          {/* SECTIONS */}
          <div className="min-w-0">
            <div className="mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
                Legal Information
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Terms of Website Usage
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                These sections describe general conditions for accessing
                and using this website and its features.
              </p>
            </div>

            <div className="space-y-5">
              {termsSections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45 }}
                    onViewportEnter={() => setActiveSection(section.id)}
                    className="scroll-mt-28 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_5px_25px_rgba(0,0,0,0.025)] sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-bold tracking-widest text-[#b99753]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg font-bold sm:text-xl">
                            {section.title}
                          </h3>
                        </div>

                        <div className="mt-5 space-y-5">
                          {section.content.map((item) => (
                            <div key={item.heading}>
                              <h4 className="text-sm font-bold text-[#262626]">
                                {item.heading}
                              </h4>
                              <p className="mt-2 text-sm leading-7 text-gray-500">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>

            {/* IMPORTANT NOTICE */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-[#b99753]/25 bg-[#b99753]/[0.07] p-5 sm:p-6">
              <Info
                size={21}
                className="mt-0.5 shrink-0 text-[#a17b39]"
              />
              <div>
                <h3 className="text-sm font-bold text-[#171717]">
                  Important Legal Notice
                </h3>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  This is a general website terms template, not an official
                  Tata Motors legal document. Before publishing, customise
                  it to identify the actual website owner, business model,
                  services, applicable jurisdiction and dispute resolution
                  process. Obtain legal review to ensure compliance with
                  applicable Indian laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-black/[0.05] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
              Quick Answers
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Terms & Conditions FAQs
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Answers to common questions about using this website.
            </p>
          </div>

          <div className="space-y-3">
            {termsFaqs.map((faq, index) => {
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-px w-7 bg-[#b99753]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                We're Here to Help
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Have questions about our terms?
            </h2>

            <p className="mt-3 text-sm text-white/45">
              Our contact page is the place to start your enquiry.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#b99753] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a17b39]"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
