
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  ChevronRight,
  
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  
  Zap,
} from "lucide-react";

import{ FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const vehicleLinks = [
    { label: "Nexon", path: "/cars/nexon" },
    { label: "Punch", path: "/cars/punch" },
    { label: "Harrier", path: "/cars/harrier" },
    { label: "Safari", path: "/cars/safari" },
    { label: "Curvv", path: "/cars/curvv" },
    { label: "Tiago", path: "/cars/tiago" },
    { label: "Altroz", path: "/cars/altroz" },
    { label: "Tigor", path: "/cars/tigor" },
  ];

  const evLinks = [
    { label: "Nexon.ev", path: "/cars/nexon-ev" },
    { label: "Punch.ev", path: "/cars/punch-ev" },
    { label: "Curvv.ev", path: "/cars/curvv-ev" },
    { label: "Tiago.ev", path: "/cars/tiago-ev" },
  ];

  const exploreLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Technology", path: "/technology" },
    { label: "Compare Cars", path: "/compare" },
    { label: "News & Updates", path: "/news" },
    { label: "Find a Dealer", path: "/dealer" },
    { label: "Book a Test Drive", path: "/book-test-drive" },
  ];

  const supportLinks = [
    { label: "FAQs", path: "/faq" },
    { label: "Contact Us", path: "/contact" },
    { label: "Customer Support", path: "/support" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/TataMotorsGroup/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/tatamotors/",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/user/TataMotors",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/tata-motors/",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    // Connect your newsletter API here before enabling real subscriptions.
    setSubscribed(true);
    setEmail("");
  };

  const FooterLink = ({ to, children }) => (
    <Link
      to={to}
      className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-[#d1ad6c]"
    >
      <ChevronRight
        size={13}
        className="text-[#b99753] opacity-0 -ml-3 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
      />
      <span>{children}</span>
    </Link>
  );

  return (
    <footer className="relative overflow-hidden bg-[#171717] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#b99753]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#b99753]/[0.05] blur-[110px]" />

      {/* Newsletter section */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-[#b99753]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d1ad6c]">
                  Stay Connected
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                The journey doesn't end here.
                <span className="block text-[#d1ad6c]">
                  Stay in the loop.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                Get the latest vehicle updates, exciting launches and
                automotive stories delivered to your inbox.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-2">
                <Mail size={18} className="text-[#d1ad6c]" />
                <span className="text-sm font-semibold text-white">
                  Subscribe to our newsletter
                </span>
              </div>

              {subscribed ? (
                <div className="rounded-xl border border-[#b99753]/30 bg-[#b99753]/10 p-4 text-sm text-[#e3c88f]">
                  Thank you! Your demo subscription was recorded in this
                  page session. Connect a newsletter API to receive emails.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#b99753]"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b99753] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#a17b39]"
                  >
                    Subscribe
                    <Send size={15} />
                  </button>
                </form>
              )}

              <p className="mt-3 text-[11px] leading-5 text-white/35">
                By subscribing, you agree to receive updates. You can
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#b99753]/40 bg-[#b99753]/10 text-[#d1ad6c] transition group-hover:bg-[#b99753]/20">
                <CarFront size={27} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-xl font-bold tracking-[0.12em] text-white">
                  TATA MOTORS
                </span>
                <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.28em] text-[#b99753]">
                  Connecting Aspirations
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              Explore a world of innovation, performance and design. Discover
              vehicles and experiences that move you forward.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition duration-300 hover:-translate-y-1 hover:border-[#b99753]/50 hover:bg-[#b99753] hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Our Vehicles
            </h3>

            <div className="flex flex-col gap-4">
              {vehicleLinks.map((item) => (
                <FooterLink key={item.label} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Electric vehicles */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
              <Zap size={15} className="text-[#d1ad6c]" />
              Electric
            </h3>

            <div className="flex flex-col gap-4">
              {evLinks.map((item) => (
                <FooterLink key={item.label} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#b99753]/20 bg-[#b99753]/[0.06] p-4">
              <p className="text-xs font-semibold text-[#d1ad6c]">
                Explore Electric Mobility
              </p>
              <p className="mt-2 text-xs leading-5 text-white/45">
                Discover the possibilities of electric driving.
              </p>
              <Link
                to="/cars?fuel=electric"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white transition hover:text-[#d1ad6c]"
              >
                Explore EVs <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-4">
              {exploreLinks.map((item) => (
                <FooterLink key={item.label} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Help & Support
            </h3>

            <div className="flex flex-col gap-4">
              {supportLinks.map((item) => (
                <FooterLink key={item.label} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d1ad6c]"
                />
                <p className="text-xs leading-5 text-white/45">
                  Your journey and information matter to us.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#d1ad6c] transition hover:text-white"
              >
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="mt-14 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b99753]/10 text-[#d1ad6c]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-white/35">Find your nearest dealer</p>
              <Link
                to="/dealer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#d1ad6c]"
              >
                Locate a Dealer <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b99753]/10 text-[#d1ad6c]">
              <CarFront size={18} />
            </div>
            <div>
              <p className="text-xs text-white/35">Experience your next car</p>
              <Link
                to="/book-test-drive"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#d1ad6c]"
              >
                Book a Test Drive <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b99753]/10 text-[#d1ad6c]">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-white/35">Have a question?</p>
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#d1ad6c]"
              >
                Contact Our Team <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {currentYear} Tata Motors. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            <Link
              to="/privacy-policy"
              className="transition hover:text-[#d1ad6c]"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-[#d1ad6c]">
              Terms of Use
            </Link>
            <Link to="/contact" className="transition hover:text-[#d1ad6c]">
              Contact
            </Link>
          </div>

          <p className="text-[11px] text-white/30">
            Designed for the journey ahead.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
