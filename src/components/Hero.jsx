import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Check,
} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "./icons/BrandIcons.jsx"

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };



  return (
    <section
      id="home"
      className="
        hero-background
        relative
        min-h-screen
        overflow-hidden
        pt-[76px]
      "
    >
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F96B00]/10
          blur-[140px]
        "
      />

      {/* Red glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#C11200]/10
          blur-[120px]
        "
      />

      {/* Small orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[35%]
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#F96B00]/5
          blur-[100px]
        "
      />

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-76px)]
            items-center
            gap-16
            py-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative z-20">
            {/* Available Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-7
                flex
                items-center
                gap-3
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
                    bg-[#F96B00]
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#F96B00]
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-sm
                  font-medium
                  tracking-wide
                  text-zinc-400
                "
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                max-w-[700px]
                font-['Manrope']
                text-[3.5rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-[4.5rem]
                lg:text-[4.7rem]
                xl:text-[5.25rem]
              "
            >
              <span className="block text-white light:text-zinc-950">
                Hi, I'm
              </span>

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#F96B00]
                  via-[#F04A00]
                  to-[#C11200]
                  bg-clip-text
                  text-transparent
                "
              >
                Ananta Prasad
              </span>

              <span className="mt-2 block text-white light:text-zinc-950">
                Behera
              </span>
            </motion.h1>

            {/* Role */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-gradient-to-r
                  from-[#F96B00]
                  to-[#C11200]
                  sm:w-12
                "
              />

              <span
                className="
                  font-mono
                  text-base
                  font-semibold
                  tracking-wide
                  text-zinc-300
                  sm:text-lg
                  light:text-zinc-700
                "
              >
                Full-Stack MERN Developer
              </span>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-7
                max-w-[610px]
                text-base
                leading-7
                text-zinc-400
                sm:text-lg
                sm:leading-8
                light:text-zinc-600
              "
            >
              I build scalable, responsive and user-focused web
              applications using modern JavaScript technologies.
            </motion.p>

            {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* View Projects */}

              <button
                type="button"
                onClick={handleScrollToProjects}
                className="
                  btn
                  btn-primary
                  group
                  h-12
                  rounded-xl
                  px-6
                  text-sm
                  sm:text-base
                "
              >
                View My Work

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="
                  btn
                  btn-secondary
                  h-12
                  rounded-xl
                  px-6
                  text-sm
                  sm:text-base
                "
              >
                <Download size={17} />
                Download Resume
              </a>
            </motion.div>

            {/* Divider */}

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="
                mt-10
                h-px
                max-w-[610px]
                bg-white/[0.08]
                light:bg-black/[0.08]
              "
            />

            {/* Social Links */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="
                mt-6
                flex
                items-center
                gap-6
              "
            >
              {/* GitHub */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-white
                  light:text-zinc-500
                  light:hover:text-zinc-950
                "
              >
                <GithubIcon
                  size={18}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                <span>GitHub</span>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-white
                  light:text-zinc-500
                  light:hover:text-zinc-950
                "
              >
                <LinkedinIcon
                  size={18}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                <span>LinkedIn</span>
              </a>

              {/* Email */}

              <a
                href="mailto:anantaprasad12@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-white
                  light:text-zinc-500
                  light:hover:text-zinc-950
                "
              >
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT CODE VISUAL
          ===================================================== */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              items-center
              justify-center
              lg:min-h-[560px]
            "
          >
            {/* Main Glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[5%]
                top-1/2
                h-[400px]
                w-[400px]
                -translate-y-1/2
                rounded-full
                bg-[#F96B00]/10
                blur-[100px]
              "
            />

            {/* =================================================
                REACT BADGE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 },
                scale: { duration: 0.5, delay: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                left-0
                top-[7%]
                z-20
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-cyan-400/20
                bg-zinc-900/90
                px-4
                py-2.5
                shadow-xl
                backdrop-blur-xl
                lg:left-[2%]
              "
            >
              <span className="text-sm">⚛️</span>

              <span className="text-sm font-semibold text-zinc-200">
                React.js
              </span>
            </motion.div>

            {/* =================================================
                JAVASCRIPT BADGE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 7, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.65 },
                scale: { duration: 0.5, delay: 0.65 },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                right-0
                top-[10%]
                z-20
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-yellow-500/20
                bg-zinc-900/90
                px-4
                py-2.5
                shadow-xl
                backdrop-blur-xl
                lg:right-[0%]
              "
            >
              <span className="text-sm">⚡</span>

              <span className="text-sm font-semibold text-zinc-200">
                JavaScript
              </span>
            </motion.div>

            {/* =================================================
                CODE EDITOR
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                w-full
                max-w-[650px]
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.1]
                bg-[#0b0b0b]/95
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                backdrop-blur-xl
                light:bg-white/95
                light:border-black/[0.08]
              "
            >
              {/* Top Browser Bar */}

              <div
                className="
                  flex
                  h-12
                  items-center
                  border-b
                  border-white/[0.07]
                  bg-[#111111]
                  px-4
                  light:bg-zinc-100
                  light:border-black/[0.06]
                "
              >
                {/* Window Controls */}

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                {/* File Path */}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    font-mono
                    text-[11px]
                    text-zinc-500
                  "
                >
                  ~/ananta/developer.js
                </div>

                <Terminal
                  size={15}
                  className="ml-auto text-zinc-600"
                />
              </div>

              {/* Code Content */}

              <div
                className="
                  min-h-[350px]
                  overflow-hidden
                  px-6
                  py-7
                  font-mono
                  text-[13px]
                  leading-7
                  sm:px-8
                  sm:text-[14px]
                  sm:leading-8
                "
              >
                {/* const developer */}

                <div>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-zinc-200">
                    developer
                  </span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-zinc-200">
                    {"{"}
                  </span>
                </div>

                {/* Name */}

                <div className="pl-5">
                  <span className="text-cyan-400">
                    name
                  </span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-emerald-400">
                    "Ananta Prasad Behera"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>
                </div>

                {/* Role */}

                <div className="pl-5">
                  <span className="text-cyan-400">
                    role
                  </span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-emerald-400">
                    "Full-Stack MERN Dev"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>
                </div>

                {/* Location */}

                <div className="pl-5">
                  <span className="text-cyan-400">
                    location
                  </span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-emerald-400">
                    "Odisha, India"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>
                </div>

                {/* Stack */}

                <div className="pl-5">
                  <span className="text-cyan-400">
                    stack
                  </span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-zinc-200">
                    [
                  </span>
                </div>

                <div className="pl-10">
                  <span className="text-amber-300">
                    "MongoDB"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>{" "}
                  <span className="text-amber-300">
                    "Express"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>
                </div>

                <div className="pl-10">
                  <span className="text-amber-300">
                    "React"
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>{" "}
                  <span className="text-amber-300">
                    "Node.js"
                  </span>
                </div>

                <div className="pl-5">
                  <span className="text-zinc-200">
                    ]
                  </span>
                  <span className="text-zinc-500">
                    ,
                  </span>
                </div>

                {/* Passion */}

                <div className="pl-5">
                  <span className="text-cyan-400">
                    passion
                  </span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-emerald-400">
                    "Building great things"
                  </span>
                </div>

                {/* Closing */}

                <div className="text-zinc-200">
                  {"};"}
                </div>

                {/* Divider */}

                <div className="my-5 h-px bg-white/[0.07]" />

                {/* Output */}

                <div className="text-zinc-600">
                  // Output
                </div>

                <div>
                  <span className="text-zinc-500">
                    $
                  </span>{" "}
                  <span className="text-zinc-300">
                    npm run build
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <Check
                    size={14}
                    className="text-emerald-400"
                  />

                  <span className="text-amber-500">
                    Build complete
                  </span>

                  <span className="text-zinc-500">
                    •
                  </span>

                  <span className="text-emerald-400">
                    Ready to ship
                  </span>

                  <span className="inline-block h-4 w-1 animate-pulse bg-[#F96B00]" />
                </div>
              </div>
            </motion.div>

            {/* =================================================
                NODE BADGE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                scale: { duration: 0.5, delay: 0.8 },
                y: {
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-[8%]
                left-0
                z-20
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-green-500/20
                bg-zinc-900/95
                px-4
                py-2.5
                shadow-xl
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-green-500
                  shadow-[0_0_10px_rgba(34,197,94,0.5)]
                "
              />

              <span className="text-sm font-semibold text-zinc-200">
                Node.js
              </span>
            </motion.div>

            {/* =================================================
                MONGODB BADGE
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 7, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.95 },
                scale: { duration: 0.5, delay: 0.95 },
                y: {
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-[7%]
                right-0
                z-20
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-green-500/20
                bg-zinc-900/95
                px-4
                py-2.5
                shadow-xl
                backdrop-blur-xl
              "
            >
              <span className="text-sm">🍃</span>

              <span className="text-sm font-semibold text-zinc-200">
                MongoDB
              </span>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            SCROLL INDICATOR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            lg:flex
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            Scroll
          </span>

          <motion.span
            animate={{
              height: [16, 30, 16],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              block
              w-px
              bg-gradient-to-b
              from-[#F96B00]
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;