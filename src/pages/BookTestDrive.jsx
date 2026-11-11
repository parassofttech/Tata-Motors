
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  Mail,
  Building2,
  Sparkles,
  Navigation,
  RotateCcw,
  X,
  MessageCircle,
} from "lucide-react";

const carModels = [
  {
    name: "Nexon",
    category: "Compact SUV",
    image: "/images/cars/nexon/exterior.jpg",
  },
  {
    name: "Punch",
    category: "Micro SUV",
    image: "/images/cars/punch/exterior.jpg",
  },
  {
    name: "Harrier",
    category: "SUV",
    image: "/images/cars/harrier/exterior.jpg",
  },
  {
    name: "Safari",
    category: "Premium SUV",
    image: "/images/cars/safari/exterior.jpg",
  },
  {
    name: "Curvv",
    category: "SUV Coupe",
    image: "/images/cars/curvv/exterior.jpg",
  },
  {
    name: "Tiago",
    category: "Hatchback",
    image: "/images/cars/tiago/exterior.jpg",
  },
  {
    name: "Altroz",
    category: "Premium Hatchback",
    image: "/images/cars/altroz/exterior.jpg",
  },
  {
    name: "Tigor",
    category: "Sedan",
    image: "/images/cars/tigor/exterior.jpg",
  },
  {
    name: "Nexon.ev",
    category: "Electric SUV",
    image: "/images/ev/nexon-ev.jpg",
  },
  {
    name: "Punch.ev",
    category: "Electric SUV",
    image: "/images/ev/punch-ev.jpg",
  },
  {
    name: "Curvv.ev",
    category: "Electric SUV Coupe",
    image: "/images/ev/curvv-ev.jpg",
  },
  {
    name: "Tiago.ev",
    category: "Electric Hatchback",
    image: "/images/ev/tiago-ev.jpg",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const BookTestDrive = () => {
  const reduceMotion = useReducedMotion();

  const today = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const [formData, setFormData] = useState({
    car: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    dealership: "",
    date: "",
    time: "",
    message: "",
    terms: false,
  });

  const [selectedCar, setSelectedCar] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    updateField("car", car.name);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.car) {
      newErrors.car = "Please select a car model.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.dealership.trim()) {
      newErrors.dealership = "Please enter your preferred dealership.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else if (formData.date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the consent to continue.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector(
        '[data-error="true"]'
      );

      firstError?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });

      return;
    }

    // Frontend demo only.
    // Connect your backend API here to create a real booking.
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const resetForm = () => {
    setFormData({
      car: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      dealership: "",
      date: "",
      time: "",
      message: "",
      terms: false,
    });

    setSelectedCar(null);
    setErrors({});
    setSubmitted(false);
  };

  const formattedDate = formData.date
    ? new Date(`${formData.date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not selected";

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#171717] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10 ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;

  const FieldError = ({ field }) => {
    if (!errors[field]) return null;

    return (
      <p className="mt-1.5 text-xs text-red-500" data-error="true">
        {errors[field]}
      </p>
    );
  };

  const sectionAnimation = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <main className="min-h-screen bg-[#f8f8f6] pt-[76px] md:pt-[108px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero-car-1.jpg"
            alt="Premium Tata car"
            className="h-full w-full object-cover opacity-35"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-[#171717]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Link
              to="/"
              className="mb-9 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[#d1ad6c]"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b99753]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d1ad6c]">
                Experience the Drive
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Next Drive
              <span className="block text-[#d1ad6c]">
                Starts Here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Get behind the wheel, experience the performance and discover
              the Tata car that feels right for you. Book your test drive
              today.
            </p>

            <div className="mt-9 flex flex-wrap gap-6">
              {[
                { icon: CheckCircle2, label: "Easy Booking" },
                { icon: ShieldCheck, label: "Personal Assistance" },
                { icon: CalendarDays, label: "Flexible Scheduling" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-xs font-medium text-white/75"
                  >
                    <Icon size={17} className="text-[#d1ad6c]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking section */}
      <section className="relative px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1250px]">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="booking-form"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -15 }}
                className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]"
              >
                {/* Main form */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="overflow-hidden rounded-[25px] border border-gray-200 bg-white shadow-[0_15px_55px_rgba(0,0,0,0.045)]"
                >
                  {/* Form heading */}
                  <div className="border-b border-gray-100 px-6 py-7 sm:px-9">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a17b39]">
                      Test Drive Appointment
                    </span>

                    <h2 className="mt-2 text-2xl font-semibold text-[#171717] sm:text-3xl">
                      Book Your Test Drive
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      Fill in the details below to request your preferred
                      appointment.
                    </p>
                  </div>

                  <div className="space-y-10 px-6 py-8 sm:px-9">
                    {/* Car selection */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                          <CarFront size={21} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#171717]">
                            Choose Your Car
                          </h3>
                          <p className="text-xs text-gray-500">
                            Select the model you want to experience.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {carModels.map((car) => {
                          const isSelected = formData.car === car.name;

                          return (
                            <button
                              type="button"
                              key={car.name}
                              onClick={() => handleCarSelect(car)}
                              aria-pressed={isSelected}
                              className={`group relative overflow-hidden rounded-2xl border text-left transition duration-300 ${
                                isSelected
                                  ? "border-[#b99753] bg-[#b99753]/[0.055] ring-2 ring-[#b99753]/15"
                                  : "border-gray-200 bg-white hover:border-[#b99753]/60"
                              }`}
                            >
                              <div className="relative h-24 overflow-hidden bg-[#f3f2ee] sm:h-28">
                                <img
                                  src={car.image}
                                  alt={car.name}
                                  loading="lazy"
                                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                  onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                  }}
                                />

                                {isSelected && (
                                  <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#b99753] text-white shadow">
                                    <Check size={14} />
                                  </div>
                                )}
                              </div>

                              <div className="p-3">
                                <p className="text-sm font-bold text-[#171717]">
                                  {car.name}
                                </p>
                                <p className="mt-1 text-[10px] text-gray-500">
                                  {car.category}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <FieldError field="car" />
                    </div>

                    {/* Personal details */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                          <UserRound size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#171717]">
                            Personal Information
                          </h3>
                          <p className="text-xs text-gray-500">
                            Let us know how to reach you.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                              updateField("name", e.target.value)
                            }
                            className={inputClass("name")}
                          />
                          <FieldError field="name" />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail
                              size={17}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                              type="email"
                              autoComplete="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) =>
                                updateField("email", e.target.value)
                              }
                              className={`${inputClass("email")} pl-11`}
                            />
                          </div>
                          <FieldError field="email" />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Mobile Number *
                          </label>

                          <div className="flex">
                            <div className="flex items-center gap-2 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-600">
                              +91
                            </div>

                            <input
                              type="tel"
                              inputMode="numeric"
                              autoComplete="tel-national"
                              maxLength={10}
                              placeholder="Enter 10-digit mobile number"
                              value={formData.phone}
                              onChange={(e) =>
                                updateField(
                                  "phone",
                                  e.target.value.replace(/\D/g, "").slice(0, 10)
                                )
                              }
                              className={`min-w-0 flex-1 rounded-r-xl border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b99753] focus:ring-4 focus:ring-[#b99753]/10 ${
                                errors.phone
                                  ? "border-red-400"
                                  : "border-gray-200"
                              }`}
                            />
                          </div>
                          <FieldError field="phone" />
                        </div>
                      </div>
                    </div>

                    {/* Location details */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                          <MapPin size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#171717]">
                            Location & Dealership
                          </h3>
                          <p className="text-xs text-gray-500">
                            Choose where you would like your test drive.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Your City *
                          </label>
                          <input
                            type="text"
                            autoComplete="address-level2"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={(e) =>
                              updateField("city", e.target.value)
                            }
                            className={inputClass("city")}
                          />
                          <FieldError field="city" />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Preferred Dealership *
                          </label>
                          <div className="relative">
                            <Building2
                              size={17}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                              type="text"
                              placeholder="Enter dealership name or area"
                              value={formData.dealership}
                              onChange={(e) =>
                                updateField("dealership", e.target.value)
                              }
                              className={`${inputClass("dealership")} pl-11`}
                            />
                          </div>
                          <FieldError field="dealership" />
                        </div>
                      </div>
                    </div>

                    {/* Date and time */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                          <CalendarDays size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#171717]">
                            Preferred Schedule
                          </h3>
                          <p className="text-xs text-gray-500">
                            Select your preferred date and time.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Preferred Date *
                          </label>

                          <div className="relative">
                            <CalendarDays
                              size={17}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                              type="date"
                              min={today}
                              value={formData.date}
                              onChange={(e) =>
                                updateField("date", e.target.value)
                              }
                              className={`${inputClass("date")} pl-11`}
                            />
                          </div>
                          <FieldError field="date" />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-semibold text-gray-700">
                            Preferred Time *
                          </label>

                          <div className="relative">
                            <Clock3
                              size={17}
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <select
                              value={formData.time}
                              onChange={(e) =>
                                updateField("time", e.target.value)
                              }
                              className={`${inputClass("time")} appearance-none pl-11`}
                            >
                              <option value="">Select time slot</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>

                            <ChevronDown
                              size={17}
                              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                          </div>
                          <FieldError field="time" />
                        </div>
                      </div>
                    </div>

                    {/* Additional message */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-700">
                        Additional Message
                        <span className="ml-1 font-normal text-gray-400">
                          (Optional)
                        </span>
                      </label>

                      <textarea
                        rows={4}
                        maxLength={500}
                        placeholder="Anything specific you would like us to know?"
                        value={formData.message}
                        onChange={(e) =>
                          updateField("message", e.target.value)
                        }
                        className={`${inputClass("message")} resize-none`}
                      />

                      <p className="mt-1 text-right text-[10px] text-gray-400">
                        {formData.message.length}/500
                      </p>
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.terms}
                          onChange={(e) =>
                            updateField("terms", e.target.checked)
                          }
                          className="mt-1 h-4 w-4 shrink-0 accent-[#b99753]"
                        />

                        <span className="text-xs leading-6 text-gray-500">
                          I agree to be contacted regarding my test drive
                          request and consent to the processing of my
                          information for this purpose.
                        </span>
                      </label>

                      <FieldError field="terms" />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#b99753] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#b99753]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#9e7b39] hover:shadow-xl"
                    >
                      Request Test Drive
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-[10px] leading-5 text-gray-400">
                      Your request will be submitted for dealership
                      confirmation. The appointment is not confirmed until
                      the dealership contacts you.
                    </p>
                  </div>
                </form>

                {/* Sidebar */}
                <aside className="space-y-5 lg:sticky lg:top-28">
                  {/* Booking summary */}
                  <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm">
                    <div className="bg-[#171717] px-6 py-6">
                      <div className="flex items-center gap-2 text-[#d1ad6c]">
                        <Sparkles size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                          Your Appointment
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        Booking Summary
                      </h3>

                      <p className="mt-1 text-xs text-white/50">
                        Review your selected details.
                      </p>
                    </div>

                    <div className="p-6">
                      {selectedCar ? (
                        <div className="mb-6 overflow-hidden rounded-2xl bg-[#f4f3ef]">
                          <img
                            src={selectedCar.image}
                            alt={selectedCar.name}
                            className="h-36 w-full object-cover"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />

                          <div className="px-4 py-3">
                            <p className="font-bold text-[#171717]">
                              {selectedCar.name}
                            </p>
                            <p className="mt-1 text-[10px] text-gray-500">
                              {selectedCar.category}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6 flex h-36 flex-col items-center justify-center rounded-2xl bg-[#f5f4f0] text-center">
                          <CarFront size={32} className="text-[#b99753]" />
                          <p className="mt-3 text-xs font-medium text-gray-500">
                            Your selected car will appear here.
                          </p>
                        </div>
                      )}

                      <div className="space-y-4">
                        {[
                          {
                            icon: UserRound,
                            label: "Name",
                            value: formData.name || "Not provided",
                          },
                          {
                            icon: MapPin,
                            label: "Location",
                            value: formData.city || "Not selected",
                          },
                          {
                            icon: Building2,
                            label: "Dealership",
                            value: formData.dealership || "Not selected",
                          },
                          {
                            icon: CalendarDays,
                            label: "Date",
                            value: formattedDate,
                          },
                          {
                            icon: Clock3,
                            label: "Time",
                            value: formData.time || "Not selected",
                          },
                        ].map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.label}
                              className="flex items-start gap-3"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#b99753]/10 text-[#a17b39]">
                                <Icon size={16} />
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="text-[10px] text-gray-400">
                                  {item.label}
                                </p>
                                <p className="mt-1 break-words text-xs font-semibold text-[#171717]">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 border-t border-gray-100 pt-5">
                        <div className="flex items-center gap-2 text-xs text-[#a17b39]">
                          <CheckCircle2 size={15} />
                          <span className="font-semibold">
                            No booking fee required
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support card */}
                  <div className="rounded-[22px] border border-[#e9e2d4] bg-[#f1eee7] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#a17b39] shadow-sm">
                      <MessageCircle size={21} />
                    </div>

                    <h3 className="mt-4 font-semibold text-[#171717]">
                      Need Assistance?
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500">
                      Have questions about your test drive? Our team can help
                      you with the booking process.
                    </p>

                    <a
                      href="tel:18002098282"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#a17b39] transition hover:text-[#171717]"
                    >
                      <Phone size={16} />
                      Contact Support
                      <ArrowRight size={15} />
                    </a>
                    <p className="mt-2 text-[10px] text-gray-400">
                      Verify the official contact number before publishing.
                    </p>
                  </div>

                  {/* Trust card */}
                  <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5">
                    <ShieldCheck
                      size={22}
                      className="shrink-0 text-[#b99753]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#171717]">
                        Your Details Stay Protected
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-gray-500">
                        Your information should only be used for the purpose
                        described in the consent statement.
                      </p>
                    </div>
                  </div>
                </aside>
              </motion.div>
            ) : (
              /* Success screen */
              <motion.div
                key="success"
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-gray-200 bg-white text-center shadow-[0_20px_65px_rgba(0,0,0,0.07)]"
              >
                <div className="bg-[#171717] px-6 py-12 sm:px-12">
                  <motion.div
                    initial={reduceMotion ? false : { scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 12 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#b99753] text-white shadow-lg shadow-[#b99753]/20"
                  >
                    <Check size={38} strokeWidth={2.5} />
                  </motion.div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d1ad6c]">
                    Request Submitted
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    Thank You!
                  </h2>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
                    Your test drive request has been completed in this demo.
                    Connect the backend to send it to your dealership.
                  </p>
                </div>

                <div className="p-7 sm:p-10">
                  <div className="rounded-2xl border border-gray-100 bg-[#f8f8f6] p-6 text-left">
                    <h3 className="mb-5 text-sm font-bold text-[#171717]">
                      Your Request Details
                    </h3>

                    <div className="space-y-4">
                      {[
                        ["Selected Car", formData.car],
                        ["Name", formData.name],
                        ["Email", formData.email],
                        ["Mobile", `+91 ${formData.phone}`],
                        ["City", formData.city],
                        ["Dealership", formData.dealership],
                        ["Date", formattedDate],
                        ["Time", formData.time],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex flex-wrap justify-between gap-2 border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-xs text-gray-500">
                            {label}
                          </span>
                          <span className="max-w-[65%] break-words text-right text-xs font-semibold text-[#171717]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 text-xs leading-6 text-gray-500">
                    This is a frontend confirmation only. No actual dealership
                    booking has been created or sent.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b99753] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9e7b39]"
                    >
                      <RotateCcw size={16} />
                      Book Another Test Drive
                    </button>

                    <Link
                      to="/"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-[#171717] transition hover:border-[#b99753] hover:text-[#a17b39]"
                    >
                      Back to Home
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom information */}
      <section className="border-t border-gray-200 bg-white px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "Choose Your Schedule",
              description: "Request a convenient date and time for your drive.",
            },
            {
              icon: CarFront,
              title: "Experience Your Car",
              description: "Get a closer look at the model you are interested in.",
            },
            {
              icon: Navigation,
              title: "Visit Your Dealership",
              description: "Choose your preferred dealership and location.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b99753]/10 text-[#a17b39]">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BookTestDrive;
