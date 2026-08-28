import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ArrowUpRight,
} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "./icons/BrandIcons.jsx"
import resume from "../../public/documents/anantaResume.pdf"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);



  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  // Smooth navigation
  const handleNavigation = (href) => {
    setIsMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Navbar Background */}
      <nav className="border-b border-white/5 bg-black/75 backdrop-blur-xl transition-colors duration-300 light:bg-white/80 light:border-black/5">
        <div className="container-custom">
          <div className="flex h-[76px] items-center justify-between">
            {/* =====================================================
                LOGO
            ===================================================== */}
            <button
              type="button"
              onClick={() => handleNavigation("#home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              {/* Logo Icon */}
              <span
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
                  text-lg
                  font-extrabold
                  text-white
                  shadow-[0_8px_25px_rgba(249,107,0,0.25)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_10px_35px_rgba(249,107,0,0.4)]
                "
              >
                A
              </span>

              {/* Name */}
              <span
                className="
                  font-['Manrope']
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  light:text-zinc-900
                "
              >
                Ananta
              </span>
            </button>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className="
                    group
                    relative
                    py-2
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-white
                    light:text-zinc-600
                    light:hover:text-zinc-950
                  "
                >
                  {item.name}

                  {/* Hover underline */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-gradient-to-r
                      from-[#F96B00]
                      to-[#C11200]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              ))}
            </div>

            {/* =====================================================
                RIGHT ACTIONS
            ===================================================== */}
            <div className="hidden items-center gap-2 md:flex">
              {/* GitHub */}
              <a
                href="https://github.com/Ananta-123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  light:text-zinc-600
                  light:hover:bg-black/5
                  light:hover:text-zinc-950
                "
              >
                <GithubIcon size={18} strokeWidth={1.8} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ananta-prasad-behera-4561ba254/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  light:text-zinc-600
                  light:hover:bg-black/5
                  light:hover:text-zinc-950
                "
              >
                <LinkedinIcon size={18} strokeWidth={1.8} />
              </a>

              {/* Theme Toggle */}
              {/* <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-white
                  light:text-zinc-600
                  light:hover:bg-black/5
                  light:hover:text-zinc-950
                "
              >
                {isLight ? (
                  <Moon size={19} strokeWidth={1.8} />
                ) : (
                  <Sun size={19} strokeWidth={1.8} />
                )}
              </button> */}

              {/* Resume Button */}
              <a
                href={resume}
                download
                className="
                  ml-3
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#F96B00]
                  to-[#C11200]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(249,107,0,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_35px_rgba(249,107,0,0.35)]
                "
              >
                <Download size={16} strokeWidth={2} />
                Resume
              </a>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                text-zinc-300
                transition-colors
                duration-300
                hover:bg-white/5
                hover:text-white
                md:hidden
                light:text-zinc-700
                light:hover:bg-black/5
                light:hover:text-black
              "
            >
              {isMenuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          className={`
            overflow-hidden
            border-t
            border-white/5
            bg-black/95
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            light:border-black/5
            light:bg-white/95
            ${
              isMenuOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >
          <div className="container-custom py-5">
            {/* Mobile Navigation */}
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    py-4
                    text-left
                    text-base
                    font-medium
                    text-zinc-300
                    transition-colors
                    duration-300
                    hover:text-[#F96B00]
                    light:border-black/5
                    light:text-zinc-700
                    light:hover:text-[#C11200]
                  "
                >
                  {item.name}

                  <span className="text-zinc-600">→</span>
                </button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-5 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-[#F96B00]/40
                  hover:text-white
                  light:border-black/10
                  light:text-zinc-600
                  light:hover:text-black
                "
              >
                <GithubIcon size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-[#F96B00]/40
                  hover:text-white
                  light:border-black/10
                  light:text-zinc-600
                  light:hover:text-black
                "
              >
                <LinkedinIcon size={19} />
              </a>

              {/* Theme */}
              {/* <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:border-[#F96B00]/40
                  hover:text-white
                  light:border-black/10
                  light:text-zinc-600
                  light:hover:text-black
                "
              >
                {isLight ? (
                  <Moon size={19} />
                ) : (
                  <Sun size={19} />
                )}
              </button> */}

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                download
                className="
                  ml-auto
                  flex
                  h-11
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#F96B00]
                  to-[#C11200]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(249,107,0,0.2)]
                "
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;