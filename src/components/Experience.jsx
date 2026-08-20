import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Code2,
  Server,
  Database,
  Layers3,
} from "lucide-react";

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    id: 1,
    role: "Full-Stack MERN Developer",
    company: "Professional Development",
    type: "Full-Time / Project Based",
    location: "India",
    duration: "Present",
    current: true,

    description:
      "Developing full-stack web applications using the MERN stack with a strong focus on responsive interfaces, REST APIs, database integration and scalable application architecture.",

    responsibilities: [
      "Develop responsive interfaces using React.js and Tailwind CSS.",
      "Build RESTful APIs using Node.js and Express.js.",
      "Design and integrate MongoDB databases using Mongoose.",
      "Implement authentication, authorization and CRUD functionality.",
      "Develop admin dashboards and management systems.",
      "Integrate frontend applications with backend APIs.",
      "Test and debug APIs using Postman.",
      "Use Git and GitHub for version control and collaboration.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Git",
      "GitHub",
    ],

    highlights: [
      {
        icon: Code2,
        title: "Frontend",
        text: "React + Tailwind",
      },
      {
        icon: Server,
        title: "Backend",
        text: "Node + Express",
      },
      {
        icon: Database,
        title: "Database",
        text: "MongoDB",
      },
    ],
  },

  {
    id: 2,
    role: "Frontend Development Intern",
    company: "Ervon Technology",
    type: "Internship",
    location: "Mumbai · Remote",
    duration: "Internship",
    current: false,

    description:
      "Worked on responsive frontend development and gained practical experience building user interfaces using HTML, CSS, JavaScript and React.",

    responsibilities: [
      "Develop responsive web pages using HTML5 and CSS3.",
      "Build interactive interfaces using JavaScript.",
      "Create reusable React components.",
      "Implement responsive layouts across desktop and mobile devices.",
      "Use Bootstrap for UI development and responsive design.",
      "Collaborate on frontend improvements and bug fixes.",
      "Follow modern frontend development practices.",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Responsive Design",
    ],

    highlights: [
      {
        icon: Code2,
        title: "Frontend",
        text: "HTML + CSS + JS",
      },
      {
        icon: Layers3,
        title: "Framework",
        text: "React.js",
      },
      {
        icon: Code2,
        title: "UI",
        text: "Bootstrap",
      },
    ],
  },
];

/* =========================================================
   TECHNOLOGY COLOR HELPERS
========================================================= */

const technologyStyles = {
  React: "border-cyan-400/20 bg-cyan-400/5 text-cyan-300",
  "React.js": "border-cyan-400/20 bg-cyan-400/5 text-cyan-300",

  JavaScript:
    "border-yellow-400/20 bg-yellow-400/5 text-yellow-300",

  "Node.js":
    "border-green-400/20 bg-green-400/5 text-green-300",

  "Express.js":
    "border-zinc-400/20 bg-zinc-400/5 text-zinc-300",

  MongoDB:
    "border-green-500/20 bg-green-500/5 text-green-300",

  Mongoose:
    "border-green-500/20 bg-green-500/5 text-green-300",

  "Tailwind CSS":
    "border-sky-400/20 bg-sky-400/5 text-sky-300",

  Bootstrap:
    "border-purple-400/20 bg-purple-400/5 text-purple-300",

  "HTML5":
    "border-orange-400/20 bg-orange-400/5 text-orange-300",

  "CSS3":
    "border-blue-400/20 bg-blue-400/5 text-blue-300",

  "REST API":
    "border-[#F96B00]/20 bg-[#F96B00]/5 text-[#ff9a3c]",

  Git:
    "border-red-400/20 bg-red-400/5 text-red-300",

  GitHub:
    "border-zinc-400/20 bg-zinc-400/5 text-zinc-300",

  "Responsive Design":
    "border-[#F96B00]/20 bg-[#F96B00]/5 text-[#ff9a3c]",
};

const getTechnologyStyle = (technology) => {
  return (
    technologyStyles[technology] ||
    "border-white/10 bg-white/[0.03] text-zinc-400"
  );
};

/* =========================================================
   EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
      }}
      className="
        relative
        grid
        gap-6
        lg:grid-cols-[210px_1fr]
      "
    >
      {/* =====================================================
          TIMELINE SIDE
      ===================================================== */}

      <div className="relative">
        {/* Timeline Dot */}

        <div
          className="
            absolute
            left-[19px]
            top-1
            z-20
            hidden
            h-5
            w-5
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#F96B00]/40
            bg-[#080808]
            lg:flex
          "
        >
          <span
            className={`
              h-2
              w-2
              rounded-full
              ${
                experience.current
                  ? "bg-[#F96B00] shadow-[0_0_12px_rgba(249,107,0,0.8)]"
                  : "bg-zinc-500"
              }
            `}
          />
        </div>

        {/* Date */}

        <div
          className="
            hidden
            pl-10
            lg:block
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-xs
              uppercase
              tracking-wider
              text-zinc-500
            "
          >
            <CalendarDays size={14} />

            <span>{experience.duration}</span>
          </div>

          {experience.current && (
            <span
              className="
                mt-3
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#F96B00]/20
                bg-[#F96B00]/5
                px-2.5
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-[#F96B00]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#F96B00]
                "
              />

              Current
            </span>
          )}
        </div>
      </div>

      {/* =====================================================
          EXPERIENCE CONTENT
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-white/[0.02]
          p-6
          transition-all
          duration-300
          hover:border-[#F96B00]/20
          hover:bg-white/[0.025]
          sm:p-8
          light:border-black/[0.08]
          light:bg-black/[0.015]
          light:hover:border-[#F96B00]/30
        "
      >
        {/* Card Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-[#F96B00]/5
            blur-[80px]
          "
        />

        {/* ===================================================
            MOBILE DATE
        =================================================== */}

        <div
          className="
            relative
            mb-5
            flex
            items-center
            justify-between
            gap-3
            lg:hidden
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-xs
              uppercase
              tracking-wider
              text-zinc-500
            "
          >
            <CalendarDays size={14} />

            <span>{experience.duration}</span>
          </div>

          {experience.current && (
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#F96B00]/20
                bg-[#F96B00]/5
                px-2.5
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-[#F96B00]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#F96B00]
                "
              />

              Current
            </span>
          )}
        </div>

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="relative">
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div>
              {/* Role */}

              <h3
                className="
                  font-['Manrope']
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-2xl
                  light:text-zinc-950
                "
              >
                {experience.role}
              </h3>

              {/* Company */}

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1
                  text-sm
                "
              >
                <span className="font-semibold text-[#F96B00]">
                  {experience.company}
                </span>

                <span className="hidden text-zinc-700 sm:inline">
                  /
                </span>

                <span className="text-zinc-500">
                  {experience.type}
                </span>
              </div>

              {/* Location */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-1.5
                  text-xs
                  text-zinc-600
                "
              >
                <MapPin size={13} />

                <span>{experience.location}</span>
              </div>
            </div>

            {/* Experience Icon */}

            <div
              className="
                hidden
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#F96B00]/15
                bg-[#F96B00]/5
                text-[#F96B00]
                sm:flex
              "
            >
              <BriefcaseBusiness
                size={20}
                strokeWidth={1.7}
              />
            </div>
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-zinc-400
              sm:text-[15px]
              light:text-zinc-600
            "
          >
            {experience.description}
          </p>
        </div>

        {/* ===================================================
            HIGHLIGHT CARDS
        =================================================== */}

        <div
          className="
            relative
            mt-7
            grid
            gap-3
            sm:grid-cols-3
          "
        >
          {experience.highlights.map((highlight, highlightIndex) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
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
                  delay: highlightIndex * 0.08,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-3
                  py-3
                  light:border-black/[0.06]
                  light:bg-black/[0.015]
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#F96B00]/10
                    text-[#F96B00]
                  "
                >
                  <Icon size={15} />
                </div>

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
                    {highlight.title}
                  </div>

                  <div
                    className="
                      mt-0.5
                      truncate
                      text-xs
                      font-medium
                      text-zinc-300
                      light:text-zinc-700
                    "
                  >
                    {highlight.text}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            RESPONSIBILITIES
        =================================================== */}

        <div
          className="
            relative
            mt-7
            border-t
            border-white/[0.07]
            pt-6
            light:border-black/[0.07]
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h4
              className="
                font-['Manrope']
                text-sm
                font-semibold
                text-zinc-200
                light:text-zinc-900
              "
            >
              Key Responsibilities
            </h4>

            <span
              className="
                font-mono
                text-[10px]
                text-zinc-600
              "
            >
              {String(
                experience.responsibilities.length
              ).padStart(2, "0")}{" "}
              ITEMS
            </span>
          </div>

          <div
            className="
              grid
              gap-x-8
              gap-y-3
              md:grid-cols-2
            "
          >
            {experience.responsibilities.map(
              (responsibility, responsibilityIndex) => (
                <motion.div
                  key={responsibility}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      responsibilityIndex * 0.04,
                  }}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-xs
                    leading-5
                    text-zinc-500
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#F96B00]
                    "
                    strokeWidth={1.8}
                  />

                  <span>{responsibility}</span>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* ===================================================
            TECHNOLOGIES
        =================================================== */}

        <div
          className="
            relative
            mt-7
            border-t
            border-white/[0.07]
            pt-6
            light:border-black/[0.07]
          "
        >
          <div className="mb-4 flex items-center gap-2">
            <Code2
              size={15}
              className="text-[#F96B00]"
            />

            <h4
              className="
                text-sm
                font-semibold
                text-zinc-200
                light:text-zinc-900
              "
            >
              Technologies
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className={`
                    rounded-lg
                    border
                    px-2.5
                    py-1.5
                    text-[11px]
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    ${getTechnologyStyle(
                      technology
                    )}
                  `}
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        {/* ===================================================
            OPTIONAL COMPANY LINK
        =================================================== */}

        {experience.company === "Ervon Technology" && (
          <div className="relative mt-6">
            <a
              href="#"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-[#F96B00]
              "
            >
              View company

              <ExternalLink
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* =======================================================
          BACKGROUND GLOW
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
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
          bottom-20
          left-[5%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#02045D]/10
          blur-[130px]
        "
      />

      <div className="container-custom relative z-10">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

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
              Experience
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
            Where I've
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
              worked & built.
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
            My experience spans frontend development,
            full-stack application development and building
            real-world digital products.
          </p>
        </motion.div>

        {/* =======================================================
            TIMELINE
        ======================================================= */}

        <div className="relative">
          {/* Vertical Timeline Line */}

          <div
            className="
              absolute
              bottom-0
              left-[19px]
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-[#F96B00]/40
              via-white/[0.08]
              to-transparent
              lg:block
            "
          />

          {/* Experience Items */}

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM CTA
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
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-[#F96B00]/10
            bg-gradient-to-r
            from-[#F96B00]/5
            via-transparent
            to-[#C11200]/5
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
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
              Interested in working together?
            </p>

            <p
              className="
                mt-1
                text-xs
                text-zinc-500
              "
            >
              Let's build something meaningful.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const contactSection =
                document.querySelector("#contact");

              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="
              btn
              btn-primary
              h-11
              w-fit
              rounded-xl
              px-5
              text-sm
            "
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;