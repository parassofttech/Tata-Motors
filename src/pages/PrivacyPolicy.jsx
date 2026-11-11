
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  Database,
  Cookie,
  UserCheck,
  FileText,
  ChevronDown,
  ChevronRight,
  Mail,
  ArrowUpRight,
  Shield,
  Globe,
  Settings,
  Clock,
  CarFront,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: FileText,
    content: [
      {
        heading: "Our Commitment to Privacy",
        text: "We respect your privacy and are committed to protecting the personal information you share while using this website. This Privacy Policy explains how information may be collected, used, stored and protected when you browse our website or use its features.",
      },
      {
        heading: "Scope of This Policy",
        text: "This policy applies to information collected through this website, including vehicle browsing, comparison tools, dealer searches, test-drive enquiry forms and contact forms.",
      },
    ],
  },
  {
    id: "information",
    title: "Information We Collect",
    icon: Database,
    content: [
      {
        heading: "Personal Information",
        text: "Depending on the features you use, you may provide information such as your name, email address, mobile number, city, preferred vehicle and other details submitted through enquiry or test-drive forms.",
      },
      {
        heading: "Technical Information",
        text: "We may collect technical information such as browser type, device information, operating system, IP address, pages visited and approximate usage information to understand how visitors use the website.",
      },
      {
        heading: "Information You Choose to Share",
        text: "Any additional information you voluntarily provide through messages, feedback or other website interactions may also be processed for the purpose for which it was submitted.",
      },
    ],
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      {
        heading: "Website Experience",
        text: "To operate, maintain and improve website functionality, vehicle discovery features, search tools and overall browsing experience.",
      },
      {
        heading: "Enquiries and Requests",
        text: "To respond to your messages, process enquiries and assist with requests submitted through available website forms.",
      },
      {
        heading: "Communication",
        text: "Where appropriate and permitted, information may be used to send updates or respond to communications you have requested.",
      },
      {
        heading: "Security and Analytics",
        text: "To monitor website performance, detect suspicious activity, prevent misuse and understand general visitor behaviour.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: Cookie,
    content: [
      {
        heading: "What Are Cookies?",
        text: "Cookies are small text files stored by your browser that can help websites remember preferences and understand website usage.",
      },
      {
        heading: "How We May Use Them",
        text: "Cookies or similar technologies may be used to maintain website functionality, remember preferences, measure performance and improve the user experience.",
      },
      {
        heading: "Managing Cookies",
        text: "You can manage or disable cookies through your browser settings. Some website features may not function as intended if certain cookies are disabled.",
      },
    ],
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: Globe,
    content: [
      {
        heading: "Service Providers",
        text: "Information may be shared with trusted service providers that help operate website infrastructure, hosting, analytics, communication or other technical services, where applicable.",
      },
      {
        heading: "Legal Requirements",
        text: "Information may be disclosed where required by applicable law, regulation, legal process or a valid request from an authorised public authority.",
      },
      {
        heading: "No Unauthorised Sale",
        text: "We do not intend to sell personal information collected through this website. Any sharing of information should be limited to legitimate operational, legal or consent-based purposes.",
      },
    ],
  },
  {
    id: "security",
    title: "Data Security",
    icon: LockKeyhole,
    content: [
      {
        heading: "Security Measures",
        text: "Reasonable technical and organisational measures should be used to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      },
      {
        heading: "Limitations",
        text: "No method of internet transmission or electronic storage is completely secure. While appropriate precautions are important, absolute security cannot be guaranteed.",
      },
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: Clock,
    content: [
      {
        heading: "How Long We Keep Information",
        text: "Personal information should be retained only for as long as reasonably necessary for the purpose for which it was collected, unless a longer retention period is required or permitted by applicable law.",
      },
      {
        heading: "Deletion Requests",
        text: "You may contact us to request information about your personal data or request its deletion, subject to applicable legal and operational requirements.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    icon: UserCheck,
    content: [
      {
        heading: "Access and Correction",
        text: "You may request access to personal information you have provided and ask for corrections where information is inaccurate or incomplete.",
      },
      {
        heading: "Withdrawal of Consent",
        text: "Where processing is based on your consent, you may withdraw that consent, subject to applicable law and any consequences of doing so.",
      },
      {
        heading: "Privacy Questions",
        text: "If you have questions or concerns about the handling of your personal information, you can contact us using the contact details provided on this website.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Websites",
    icon: Globe,
    content: [
      {
        heading: "External Links",
        text: "Our website may contain links to external websites, map services, social media platforms or other third-party services. These services operate under their own privacy policies.",
      },
      {
        heading: "Third-Party Responsibility",
        text: "We are not responsible for the privacy practices, content or security of external websites. Please review their policies before sharing personal information.",
      },
    ],
  },
  {
    id: "updates",
    title: "Policy Updates",
    icon: Settings,
    content: [
      {
        heading: "Changes to This Policy",
        text: "This Privacy Policy may be updated from time to time to reflect changes in website functionality, business practices or applicable legal requirements.",
      },
      {
        heading: "Effective Date",
        text: "Any revised policy should display its updated effective date. Continued use of the website after changes are published may be subject to the updated policy, as permitted by applicable law.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What personal information can this website collect?",
    answer:
      "Information you submit through forms may include your name, email address, mobile number, city and vehicle preferences. Technical information may also be collected depending on the website configuration.",
  },
  {
    question: "Does this website use cookies?",
    answer:
      "The website may use cookies or similar technologies for functionality, preferences and analytics, depending on the services configured by the website owner.",
  },
  {
    question: "Can I request deletion of my information?",
    answer:
      "You can contact the website administrator to request deletion or correction of personal information, subject to applicable legal requirements.",
  },
  {
    question: "Is my personal information shared?",
    answer:
      "Information may be shared with service providers where necessary to operate the website, respond to requests or meet legal obligations. The actual sharing practices depend on the services configured.",
  },
  {
    question: "How can I contact the website about privacy?",
    answer:
      "Use the Contact Us page to send a privacy-related enquiry. Include enough information to help the website administrator understand your request.",
  },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Privacy Policy | Tata Motors";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Read our Privacy Policy to understand how information may be collected, used, stored and protected when you use this website.";

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
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[110px]" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#b99753]/10 blur-[110px]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b99753]/30 bg-[#b99753]/10 px-4 py-2">
              <ShieldCheck size={15} className="text-[#d1ad6c]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1ad6c]">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Privacy
              <span className="text-[#d1ad6c]"> Policy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Your trust matters to us. Learn how information may be
              collected, used and protected when you explore our website
              and its services.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <Shield size={15} className="text-[#d1ad6c]" />
                Privacy & Data Protection
              </span>
              <span className="h-1 w-1 rounded-full bg-[#b99753]" />
              <span>Effective date: 10 November 2026</span>
            </div>
          </motion.div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#b99753] to-transparent opacity-70" />
      </section>

      {/* PRIVACY HIGHLIGHTS */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:grid-cols-3">
          {[
            {
              icon: LockKeyhole,
              title: "Data Protection",
              description: "Responsible handling of information.",
            },
            {
              icon: Eye,
              title: "Transparency",
              description: "Understand how information is used.",
            },
            {
              icon: UserCheck,
              title: "Your Control",
              description: "Know your privacy choices and rights.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-5 sm:p-6 ${
                  index !== 2 ? "border-b sm:border-b-0 sm:border-r border-black/[0.06]" : ""
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

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#a17b39]">
                On This Page
              </h2>

              <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                {sections.map((section) => {
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
              <h3 className="text-base font-semibold">Have a question?</h3>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Contact us if you have any questions about this privacy
                policy or your information.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#d1ad6c] transition hover:text-white"
              >
                Contact Us <ArrowUpRight size={14} />
              </Link>
            </div>
          </aside>

          {/* POLICY SECTIONS */}
          <div className="min-w-0">
            <div className="mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
                Privacy Documentation
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Understanding Our Privacy Practices
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                Please read the following sections carefully to understand
                the general privacy practices described for this website.
              </p>
            </div>

            <div className="space-y-5">
              {sections.map((section, index) => {
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

            {/* DISCLAIMER */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-[#b99753]/25 bg-[#b99753]/[0.07] p-5 sm:p-6">
              <AlertCircle
                size={21}
                className="mt-0.5 shrink-0 text-[#a17b39]"
              />
              <div>
                <h3 className="text-sm font-bold text-[#171717]">
                  Important Information
                </h3>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  This page provides a general privacy policy template.
                  The actual data collection, storage, sharing, cookies and
                  security practices must match the services implemented
                  on your website. Review this policy with a qualified
                  legal professional before publishing it.
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
              Need Clarity?
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Privacy FAQs
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Quick answers to common privacy-related questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
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
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
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

      {/* BOTTOM CTA */}
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
              Your privacy deserves attention.
            </h2>
            <p className="mt-3 text-sm text-white/45">
              Reach out if you have any questions about your information.
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

export default PrivacyPolicy;
