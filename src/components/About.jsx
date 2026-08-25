import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  Rocket,
  UserRound,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    value: "1.5+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "MERN",
    label: "Primary Stack",
  },
  {
    value: "100%",
    label: "Learning Mindset",
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with React, JavaScript and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Developing REST APIs and server-side applications using Node.js, Express.js and MongoDB.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Creating reusable components, clean API structures and maintainable application architecture.",
  },
  {
    icon: Rocket,
    title: "Product Focus",
    description:
      "Turning ideas into practical, user-focused applications with attention to performance and usability.",
  },
];

const highlights = [
  "Responsive and mobile-first development",
  "REST API development and integration",
  "Authentication and authorization",
  "MongoDB database integration",
  "Reusable React components",
  "Admin dashboards and management systems",
];

const About = () => {
  return (
    <section
      id="about"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
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
          -right-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#02045D]/10
          blur-[130px]
        "
      />

      <div className="container-custom relative z-10">

        {/* =======================================================
            SECTION HEADER + PROFILE PHOTO
        ======================================================= */}

        <div
          className="
            mb-14
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_360px]
            lg:gap-16
          "
        >
          {/* LEFT — SECTION INTRO */}

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
            className="max-w-3xl"
          >
            {/* Small Label */}

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
                About Me
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                font-['Manrope']
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
                light:text-zinc-950
              "
            >
              Building digital experiences
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
                that matter.
              </span>
            </h2>

            {/* Description */}

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
              I'm a Full-Stack MERN Developer passionate about creating
              modern, scalable and user-focused web applications. I enjoy
              transforming ideas into clean, functional and responsive
              digital products.
            </p>
          </motion.div>

          {/* =====================================================
              RIGHT — PROFILE PHOTO
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Large Background Glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-64
                w-64
                rounded-full
                bg-[#F96B00]/10
                blur-[70px]
              "
            />

            {/* Decorative Outer Ring */}

            <div
              className="
                relative
                flex
                h-[280px]
                w-[280px]
                items-center
                justify-center
                rounded-full
                border
                border-[#F96B00]/20
                sm:h-[300px]
                sm:w-[300px]
              "
            >
              {/* Rotating Dashed Ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-[-10px]
                  rounded-full
                  border
                  border-dashed
                  border-[#F96B00]/25
                "
              />

              {/* Decorative Orange Dot */}

              <span
                className="
                  absolute
                  right-2
                  top-8
                  z-20
                  h-3
                  w-3
                  rounded-full
                  bg-[#F96B00]
                  shadow-[0_0_15px_rgba(249,107,0,0.7)]
                "
              />

              {/* Decorative Orange Dot */}

              <span
                className="
                  absolute
                  bottom-8
                  left-1
                  z-20
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#C11200]
                  shadow-[0_0_15px_rgba(193,18,0,0.6)]
                "
              />

              {/* Photo Container */}

              <div
                className="
                  relative
                  h-[250px]
                  w-[250px]
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#F96B00]/70
                  bg-zinc-900
                  shadow-[0_0_45px_rgba(249,107,0,0.16)]
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                  hover:border-[#F96B00]
                  hover:shadow-[0_0_60px_rgba(249,107,0,0.25)]
                  sm:h-[270px]
                  sm:w-[270px]
                "
              >
                <img
                  src="https://res.cloudinary.com/dl58sdjnk/image/upload/v1773810370/Gemini_Generated_Image_l2ec1ol2ec1ol2ec_uwzstz.png"
                  alt="Ananta Prasad Behera"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                  loading="lazy"
                />

                {/* Subtle Image Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            MAIN ABOUT GRID
        ======================================================= */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* =====================================================
              LEFT — ABOUT CARD
          ===================================================== */}

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
              amount: 0.2,
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
              p-7
              backdrop-blur-sm
              sm:p-9
              light:border-black/[0.08]
              light:bg-black/[0.015]
            "
          >
            {/* Decorative Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#F96B00]/10
                blur-[80px]
              "
            />

            {/* Icon */}

            <div
              className="
                relative
                mb-7
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#F96B00]/20
                bg-[#F96B00]/10
                text-[#F96B00]
              "
            >
              <UserRound
                size={25}
                strokeWidth={1.7}
              />
            </div>

            {/* Heading */}

            <h3
              className="
                relative
                font-['Manrope']
                text-2xl
                font-bold
                text-white
                light:text-zinc-950
              "
            >
              Who I Am
            </h3>

            {/* Paragraphs */}

            <div
              className="
                relative
                mt-5
                space-y-4
                text-[15px]
                leading-7
                text-zinc-400
                light:text-zinc-600
              "
            >
              <p>
                I'm Ananta Prasad Behera, a Full-Stack MERN Developer
                based in Odisha, India. I enjoy working across both
                frontend and backend development to build complete web
                applications.
              </p>

              <p>
                My development journey focuses on JavaScript
                technologies, especially React, Node.js, Express.js
                and MongoDB. I care about writing clean code,
                building reusable components and creating interfaces
                that are simple to use.
              </p>

              <p>
                I'm continuously improving my skills by working on
                real-world projects and exploring modern development
                practices.
              </p>
            </div>

            {/* Highlight List */}

            <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-sm
                    text-zinc-400
                    light:text-zinc-600
                  "
                >
                  <CheckCircle2
                    size={17}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#F96B00]
                    "
                    strokeWidth={1.8}
                  />

                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — STATS + FOCUS
          ===================================================== */}

          <div className="grid gap-6">

            {/* =================================================
                STATS
            ================================================= */}

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F96B00]/25
                    hover:bg-white/[0.035]
                    light:border-black/[0.08]
                    light:bg-black/[0.015]
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-24
                      w-24
                      rounded-full
                      bg-[#F96B00]/10
                      opacity-0
                      blur-[35px]
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      font-['Manrope']
                      text-3xl
                      font-extrabold
                      tracking-tight
                      text-white
                      sm:text-4xl
                      light:text-zinc-950
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      relative
                      mt-2
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      text-zinc-500
                    "
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CURRENT FOCUS CARD
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
                amount: 0.2,
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
                p-7
                light:border-black/[0.08]
                light:bg-black/[0.015]
              "
            >
              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-24
                  bg-gradient-to-r
                  from-[#F96B00]
                  to-transparent
                "
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-[#F96B00]
                    "
                  >
                    What I Do
                  </span>

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
                    My Development Focus
                  </h3>
                </div>

                <div
                  className="
                    hidden
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F96B00]/10
                    text-[#F96B00]
                    sm:flex
                  "
                >
                  <Code2 size={20} />
                </div>
              </div>

              {/* Focus Areas */}

              <div className="mt-6 space-y-5">
                {focusAreas.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                        gap-4
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
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          text-zinc-400
                          transition-all
                          duration-300
                          group-hover:border-[#F96B00]/25
                          group-hover:bg-[#F96B00]/10
                          group-hover:text-[#F96B00]
                          light:border-black/[0.07]
                          light:bg-black/[0.02]
                        "
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* Content */}

                      <div className="min-w-0">
                        <h4
                          className="
                            font-['Manrope']
                            text-sm
                            font-semibold
                            text-zinc-200
                            light:text-zinc-900
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-zinc-500
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Link */}

              <div
                className="
                  mt-7
                  border-t
                  border-white/[0.07]
                  pt-5
                  light:border-black/[0.07]
                "
              >
                <button
                  type="button"
                  onClick={() => {
                    const skillsSection =
                      document.querySelector("#skills");

                    if (skillsSection) {
                      skillsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#F96B00]
                  "
                >
                  Explore my technical skills

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM TECH STRIP
        ======================================================= */}

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
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.015]
            px-6
            py-5
            light:border-black/[0.07]
            light:bg-black/[0.015]
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
            <span
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.16em]
                text-zinc-500
              "
            >
              Technologies I Work With
            </span>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
              "
            >
              {[
                "React",
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-colors
                    duration-300
                    hover:text-[#F96B00]
                    light:text-zinc-600
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;