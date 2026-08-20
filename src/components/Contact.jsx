import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  
  Send,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Clock3,
  Copy,
  Check,
} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "./icons/BrandIcons.jsx"

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anantaprasad12@gmail.com",
    href: "mailto:anantaprasad12@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8249109450",
    href: "tel:+918249109450",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Odisha, India",
    href: "#",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    icon: GithubIcon,
    name: "GitHubIcon",
    href: "https://github.com/",
  },
  {
    icon: LinkedinIcon,
    name: "LinkedinIcon",
    href: "https://www.linkedin.com/feed/",
  },
];

/* =========================================================
   CONTACT COMPONENT
========================================================= */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  /* =======================================================
     HANDLE INPUT
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear individual field error
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    // Hide success state when user edits again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     SUBMIT FORM
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    /*
      Frontend success state.

      This does NOT actually send an email.
      Connect this handler to your backend,
      Formspree, EmailJS, Resend, etc. later.
    */

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  /* =======================================================
     COPY EMAIL
  ======================================================= */

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "anantaprasad12@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy email:",
        error
      );
    }
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="contact"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#F96B00]/5
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#02045D]/10
          blur-[140px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="container-custom relative z-10">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-14
            max-w-3xl
          "
        >
          {/* Label */}

          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-[#F96B00]
                to-[#C11200]
              "
            />

            <span
              className="
                font-mono
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#F96B00]
              "
            >
              Contact
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              font-['Manrope']
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
              light:text-zinc-950
            "
          >
            Let's build something
            <span
              className="
                bg-gradient-to-r
                from-[#F96B00]
                to-[#C11200]
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              great together.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-zinc-400
              sm:text-lg
              sm:leading-8
              light:text-zinc-600
            "
          >
            Have a project, job opportunity or idea you'd
            like to discuss? Send me a message and I'll
            get back to you.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT GRID
        =================================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* =================================================
              LEFT — CONTACT DETAILS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              p-6
              sm:p-8
              light:border-black/[0.08]
              light:bg-black/[0.015]
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-[#F96B00]/10
                blur-[80px]
              "
            />

            {/* Header */}

            <div className="relative">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#F96B00]/20
                  bg-[#F96B00]/10
                  text-[#F96B00]
                "
              >
                <MessageCircle
                  size={22}
                  strokeWidth={1.7}
                />
              </div>

              <h3
                className="
                  mt-5
                  font-['Manrope']
                  text-2xl
                  font-bold
                  text-white
                  light:text-zinc-950
                "
              >
                Get in touch
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-zinc-500
                "
              >
                I'm currently open to new opportunities,
                freelance projects and interesting
                collaborations.
              </p>
            </div>

            {/* Contact Information */}

            <div className="relative mt-8 space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-white/[0.06]
                      bg-white/[0.015]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[#F96B00]/20
                      hover:bg-[#F96B00]/[0.03]
                      light:border-black/[0.06]
                      light:bg-black/[0.01]
                    "
                  >
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#F96B00]/10
                        text-[#F96B00]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">
                      <div
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-zinc-600
                        "
                      >
                        {item.label}
                      </div>

                      <div
                        className="
                          mt-1
                          truncate
                          text-sm
                          font-medium
                          text-zinc-300
                          transition-colors
                          duration-300
                          group-hover:text-[#F96B00]
                          light:text-zinc-700
                        "
                      >
                        {item.value}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        ml-auto
                        shrink-0
                        text-zinc-700
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#F96B00]
                      "
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Copy Email */}

            <div className="relative mt-6">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.015]
                  px-4
                  py-3
                  text-left
                  transition-all
                  duration-300
                  hover:border-[#F96B00]/20
                  light:border-black/[0.06]
                  light:bg-black/[0.01]
                "
              >
                <div>
                  <div
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-zinc-600
                    "
                  >
                    Quick Contact
                  </div>

                  <div
                    className="
                      mt-1
                      text-xs
                      text-zinc-400
                      light:text-zinc-600
                    "
                  >
                    Copy my email address
                  </div>
                </div>

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.04]
                    text-zinc-500
                    transition-colors
                    duration-300
                    group-hover:bg-[#F96B00]/10
                    group-hover:text-[#F96B00]
                  "
                >
                  {copied ? (
                    <Check
                      size={15}
                      className="text-emerald-400"
                    />
                  ) : (
                    <Copy size={15} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 5,
                    }}
                    className="
                      mt-2
                      text-center
                      text-[11px]
                      text-emerald-400
                    "
                  >
                    Email copied to clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Availability */}

            <div
              className="
                relative
                mt-6
                flex
                items-center
                gap-3
                border-t
                border-white/[0.07]
                pt-6
                light:border-black/[0.07]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2.5
                  w-2.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-500
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              <div>
                <div
                  className="
                    text-xs
                    font-semibold
                    text-zinc-300
                    light:text-zinc-700
                  "
                >
                  Available for opportunities
                </div>

                <div
                  className="
                    mt-0.5
                    flex
                    items-center
                    gap-1
                    text-[10px]
                    text-zinc-600
                  "
                >
                  <Clock3 size={11} />

                  Usually responds within 24–48 hours
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div
              className="
                relative
                mt-6
                border-t
                border-white/[0.07]
                pt-6
                light:border-black/[0.07]
              "
            >
              <div
                className="
                  mb-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-zinc-600
                "
              >
                Find me online
              </div>

              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/[0.07]
                        bg-white/[0.02]
                        text-zinc-500
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#F96B00]/25
                        hover:bg-[#F96B00]/5
                        hover:text-[#F96B00]
                        light:border-black/[0.07]
                        light:bg-black/[0.015]
                        light:text-zinc-600
                      "
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              p-6
              sm:p-8
              light:border-black/[0.08]
              light:bg-black/[0.015]
            "
          >
            {/* Top Gradient */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-[2px]
                bg-gradient-to-r
                from-[#F96B00]
                via-[#C11200]
                to-transparent
              "
            />

            {/* Form Header */}

            <div className="relative mb-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-[#F96B00]
                    "
                  >
                    Send a message
                  </div>

                  <h3
                    className="
                      mt-2
                      font-['Manrope']
                      text-2xl
                      font-bold
                      text-white
                      light:text-zinc-950
                    "
                  >
                    Tell me about your idea.
                  </h3>
                </div>

                <div
                  className="
                    hidden
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F96B00]/10
                    text-[#F96B00]
                    sm:flex
                  "
                >
                  <Send size={19} />
                </div>
              </div>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================= */}

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  className="
                    flex
                    min-h-[420px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      text-emerald-400
                    "
                  >
                    <CheckCircle2 size={30} />
                  </div>

                  <h3
                    className="
                      mt-6
                      font-['Manrope']
                      text-2xl
                      font-bold
                      text-white
                      light:text-zinc-950
                    "
                  >
                    Message ready to send!
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-zinc-500
                    "
                  >
                    Your message has been validated successfully.
                    Connect this form to your preferred email service
                    to send it directly.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setIsSubmitted(false)
                    }
                    className="
                      mt-7
                      text-sm
                      font-medium
                      text-[#F96B00]
                      transition-colors
                      hover:text-[#ff9a3c]
                    "
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="
                    relative
                    space-y-5
                  "
                >
                  {/* =================================================
                      NAME + EMAIL
                  ================================================= */}

                  <div
                    className="
                      grid
                      gap-5
                      sm:grid-cols-2
                    "
                  >
                    {/* Name */}

                    <div>
                      <label
                        htmlFor="name"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-zinc-400
                          light:text-zinc-600
                        "
                      >
                        Your Name
                        <span className="ml-1 text-[#F96B00]">
                          *
                        </span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`
                          h-12
                          px-4
                          text-sm
                          placeholder:text-zinc-700
                          ${
                            errors.name
                              ? "border-red-500/50 focus:border-red-500"
                              : ""
                          }
                        `}
                      />

                      {errors.name && (
                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            text-red-400
                          "
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}

                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-2
                          block
                          text-xs
                          font-medium
                          text-zinc-400
                          light:text-zinc-600
                        "
                      >
                        Email Address
                        <span className="ml-1 text-[#F96B00]">
                          *
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`
                          h-12
                          px-4
                          text-sm
                          placeholder:text-zinc-700
                          ${
                            errors.email
                              ? "border-red-500/50 focus:border-red-500"
                              : ""
                          }
                        `}
                      />

                      {errors.email && (
                        <p
                          className="
                            mt-1.5
                            text-[11px]
                            text-red-400
                          "
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      SUBJECT
                  ================================================= */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-zinc-400
                        light:text-zinc-600
                      "
                    >
                      Subject
                      <span className="ml-1 text-[#F96B00]">
                        *
                      </span>
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Let's work together"
                      className={`
                        h-12
                        px-4
                        text-sm
                        placeholder:text-zinc-700
                        ${
                          errors.subject
                            ? "border-red-500/50 focus:border-red-500"
                            : ""
                        }
                      `}
                    />

                    {errors.subject && (
                      <p
                        className="
                          mt-1.5
                          text-[11px]
                          text-red-400
                        "
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div>
                    <label
                      htmlFor="message"
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-zinc-400
                        light:text-zinc-600
                      "
                    >
                      Message
                      <span className="ml-1 text-[#F96B00]">
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about your project, opportunity or idea..."
                      className={`
                        min-h-[150px]
                        px-4
                        py-3
                        text-sm
                        leading-6
                        placeholder:text-zinc-700
                        ${
                          errors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : ""
                        }
                      `}
                    />

                    <div className="mt-1.5 flex justify-between">
                      {errors.message ? (
                        <p
                          className="
                            text-[11px]
                            text-red-400
                          "
                        >
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}

                      <span
                        className="
                          text-[10px]
                          text-zinc-700
                        "
                      >
                        {formData.message.length}/1000
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================= */}

                  <button
                    type="submit"
                    className="
                      btn
                      btn-primary
                      group
                      h-12
                      w-full
                      rounded-xl
                      text-sm
                      sm:w-auto
                      sm:px-7
                    "
                  >
                    Send Message

                    <Send
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                  {/* Privacy Note */}

                  <p
                    className="
                      text-[10px]
                      leading-5
                      text-zinc-700
                    "
                  >
                    Your information is only used to respond to
                    your message and will not be shared with
                    third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-gradient-to-r
            from-[#F96B00]/5
            via-transparent
            to-[#C11200]/5
            px-6
            py-6
            light:border-black/[0.07]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-zinc-200
                  light:text-zinc-900
                "
              >
                Prefer email?
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-zinc-500
                "
              >
                Reach me directly at
                {" "}
                <span className="text-[#F96B00]">
                  anantaprasad12@gmail.com
                </span>
              </p>
            </div>

            <a
              href="mailto:anantaprasad12@gmail.com"
              className="
                btn
                btn-secondary
                h-10
                w-fit
                rounded-lg
                px-4
                text-xs
              "
            >
              <Mail size={15} />

              Email Me

              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;