import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  
  Mail,
  Code2,
  Heart,
} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "./icons/BrandIcons.jsx"

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const navigationLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/feed/",
  },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     SMOOTH NAVIGATION
  ======================================================= */

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const targetId = href.replace("#", "");

    const targetElement =
      document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[var(--bg-primary)]
        light:border-black/[0.07]
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-0
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#F96B00]/5
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          bottom-0
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#02045D]/10
          blur-[110px]
        "
      />

      <div className="container-custom relative z-10">
        {/* ===================================================
            MAIN FOOTER
        =================================================== */}

        <div
          className="
            grid
            gap-12
            py-14
            md:grid-cols-[1.3fr_0.7fr_0.7fr]
            lg:py-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

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
            }}
            className="max-w-md"
          >
            {/* Logo */}

            <a
              href="#home"
              onClick={(event) =>
                handleNavigation(
                  event,
                  "#home"
                )
              }
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#F96B00]
                  to-[#C11200]
                  text-white
                  shadow-[0_8px_25px_rgba(249,107,0,0.15)]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Code2
                  size={20}
                  strokeWidth={2}
                />
              </div>

              <span
                className="
                  font-['Manrope']
                  text-lg
                  font-extrabold
                  tracking-tight
                  text-white
                  light:text-zinc-950
                "
              >
                Ananta
                <span className="text-[#F96B00]">
                  .
                </span>
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-zinc-500
                light:text-zinc-600
              "
            >
              Full-Stack MERN Developer focused on building
              modern, responsive and scalable web
              applications with clean code and thoughtful
              user experiences.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex items-center gap-2">
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
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

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
              delay: 0.1,
            }}
          >
            <div
              className="
                mb-5
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#F96B00]
              "
            >
              Navigation
            </div>

            <nav className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      link.href
                    )
                  }
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1.5
                    text-xs
                    text-zinc-500
                    transition-colors
                    duration-300
                    hover:text-[#F96B00]
                    light:text-zinc-600
                  "
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={11}
                    className="
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================= */}

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
              delay: 0.2,
            }}
          >
            <div
              className="
                mb-5
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#F96B00]
              "
            >
              Let's Connect
            </div>

            <p
              className="
                max-w-xs
                text-xs
                leading-6
                text-zinc-500
              "
            >
              Have an opportunity or project in mind?
              Let's talk.
            </p>

            {/* Email */}

            <a
              href="mailto:anantaprasad12@gmail.com"
              className="
                group
                mt-4
                flex
                items-center
                gap-2
                text-xs
                font-medium
                text-zinc-300
                transition-colors
                duration-300
                hover:text-[#F96B00]
                light:text-zinc-700
              "
            >
              <Mail
                size={15}
                className="
                  text-[#F96B00]
                "
              />

              <span>
                anantaprasad12@gmail.com
              </span>

              <ArrowUpRight
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            {/* CTA */}

            <a
              href="#contact"
              onClick={(event) =>
                handleNavigation(
                  event,
                  "#contact"
                )
              }
              className="
                btn
                btn-primary
                mt-5
                h-10
                w-fit
                rounded-lg
                px-4
                text-xs
              "
            >
              Start a Conversation

              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            h-px
            bg-white/[0.07]
            light:bg-black/[0.07]
          "
        />

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-1.5
              text-[11px]
              text-zinc-600
            "
          >
            <span>
              © {currentYear} Ananta Prasad Behera.
            </span>

            <span className="hidden sm:inline">
              All rights reserved.
            </span>
          </div>

          {/* Built With */}

          <div
            className="
              flex
              items-center
              gap-1.5
              text-[11px]
              text-zinc-600
            "
          >
            <span>Built with</span>

            <Code2
              size={12}
              className="text-[#F96B00]"
            />

            <span className="text-zinc-500">
              React
            </span>

            <span>+</span>

            <span className="text-zinc-500">
              Tailwind
            </span>

            <span className="mx-1">·</span>

            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={11}
                className="text-[#F96B00]"
                fill="currentColor"
              />
            </span>
          </div>

          {/* Back To Top */}

          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="
              group
              flex
              h-9
              w-9
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
            <ArrowUp
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;