import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
 
  ExternalLink,
  Code2,
  Layers3,
  Star,
  FolderGit2,
} from "lucide-react";
import {GithubIcon} from "./icons/BrandIcons.jsx"

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Bharat Fitness Den",
    category: "Full Stack",
    featured: true,

    description:
      "A comprehensive fitness management platform with a powerful admin dashboard for managing branches, trainers, memberships, subscriptions, workouts, diet plans, offers, products and reports.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Admin Dashboard",
      "Branch Management",
      "Trainer Management",
      "Membership Management",
      "Subscription Management",
      "Workout & Diet Management",
      "Reports & Analytics",
      "Supplement Store",
    ],

    gradient:
      "from-[#F96B00]/20 via-[#C11200]/10 to-transparent",

    accent: "#F96B00",

    github: "https://github.com/",
    live: "#",

    status: "Featured",
  },

  {
    id: 2,
    title: "Personal Portfolio",
    category: "Frontend",

    description:
      "A modern, responsive personal portfolio website designed to showcase my skills, experience, projects and development journey.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    features: [
      "Responsive Design",
      "Dark / Light Theme",
      "Smooth Animations",
      "Project Showcase",
      "Contact Section",
      "Modern UI",
    ],

    gradient:
      "from-orange-500/15 via-red-500/10 to-transparent",

    accent: "#F96B00",

    github: "https://github.com/",
    live: "#",

    status: "Personal",
  },

  {
    id: 3,
    title: "Currency Converter",
    category: "Frontend",

    description:
      "A responsive currency conversion application built with React and API integration to provide real-time exchange rate information.",

    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
    ],

    features: [
      "Currency Selection",
      "API Integration",
      "Real-Time Conversion",
      "Responsive UI",
      "Clean User Experience",
    ],

    gradient:
      "from-blue-500/15 via-cyan-500/10 to-transparent",

    accent: "#38BDF8",

    github: "https://github.com/",
    live: "#",

    status: "Project",
  },

  {
    id: 4,
    title: "Fitness Admin Dashboard",
    category: "Full Stack",

    description:
      "A management dashboard concept focused on providing administrators with centralized control over fitness operations and business data.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Dashboard Analytics",
      "User Management",
      "Membership Tracking",
      "Branch Management",
      "API Integration",
    ],

    gradient:
      "from-purple-500/15 via-indigo-500/10 to-transparent",

    accent: "#A78BFA",

    github: "https://github.com/",
    live: "#",

    status: "Project",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All",
  "Full Stack",
  "Frontend",
];

/* =========================================================
   TECHNOLOGY STYLES
========================================================= */

const technologyStyles = {
  React:
    "border-cyan-400/20 bg-cyan-400/5 text-cyan-300",

  JavaScript:
    "border-yellow-400/20 bg-yellow-400/5 text-yellow-300",

  "Tailwind CSS":
    "border-sky-400/20 bg-sky-400/5 text-sky-300",

  "Framer Motion":
    "border-purple-400/20 bg-purple-400/5 text-purple-300",

  "Node.js":
    "border-green-400/20 bg-green-400/5 text-green-300",

  "Express.js":
    "border-zinc-400/20 bg-zinc-400/5 text-zinc-300",

  MongoDB:
    "border-green-500/20 bg-green-500/5 text-green-300",

  "REST API":
    "border-[#F96B00]/20 bg-[#F96B00]/5 text-[#ff9a3c]",

  CSS:
    "border-blue-400/20 bg-blue-400/5 text-blue-300",

  Vite:
    "border-purple-400/20 bg-purple-400/5 text-purple-300",
};

const getTechnologyStyle = (technology) => {
  return (
    technologyStyles[technology] ||
    "border-white/10 bg-white/[0.03] text-zinc-400"
  );
};

/* =========================================================
   PROJECT VISUAL
========================================================= */

const ProjectVisual = ({ project, featured = false }) => {
  return (
    <div
      className={`
        group/visual
        relative
        overflow-hidden
        ${
          featured
            ? "min-h-[300px] lg:min-h-[390px]"
            : "min-h-[240px]"
        }
        bg-gradient-to-br
        ${project.gradient}
      `}
    >
      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/5
          blur-[70px]
          transition-transform
          duration-700
          group-hover/visual:scale-150
        "
      />

      {/* Browser Window */}

      <motion.div
        initial={{ y: 10 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={`
          absolute
          left-1/2
          top-1/2
          w-[82%]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#0b0b0b]/90
          shadow-[0_25px_70px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          transition-transform
          duration-500
          group-hover/visual:scale-[1.03]
          ${
            featured
              ? "max-w-[570px]"
              : "max-w-[420px]"
          }
        `}
      >
        {/* Browser Header */}

        <div
          className="
            flex
            h-9
            items-center
            gap-1.5
            border-b
            border-white/[0.07]
            bg-white/[0.025]
            px-3
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />

          <div
            className="
              ml-3
              h-4
              flex-1
              rounded-md
              bg-white/[0.04]
            "
          />
        </div>

        {/* Fake Dashboard */}

        <div
          className={`
            grid
            ${
              featured
                ? "min-h-[230px]"
                : "min-h-[175px]"
            }
            grid-cols-[55px_1fr]
          `}
        >
          {/* Sidebar */}

          <div
            className="
              border-r
              border-white/[0.06]
              bg-white/[0.015]
              p-2
            "
          >
            <div
              className="
                mb-5
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-[#F96B00]
                to-[#C11200]
                text-[10px]
                font-bold
              "
            >
              A
            </div>

            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map(
                (item) => (
                  <div
                    key={item}
                    className={`
                      h-6
                      rounded-md
                      ${
                        item === 1
                          ? "bg-[#F96B00]/15"
                          : "bg-white/[0.025]"
                      }
                    `}
                  />
                )
              )}
            </div>
          </div>

          {/* Main */}

          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2.5 w-24 rounded bg-white/10" />

                <div className="mt-2 h-2 w-16 rounded bg-white/5" />
              </div>

              <div className="h-7 w-20 rounded-lg bg-[#F96B00]/15" />
            </div>

            {/* Cards */}

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map(
                (item) => (
                  <div
                    key={item}
                    className="
                      rounded-lg
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      p-3
                    "
                  >
                    <div className="h-2 w-8 rounded bg-white/10" />

                    <div className="mt-3 h-4 w-12 rounded bg-white/10" />

                    <div className="mt-3 h-1.5 w-full rounded bg-[#F96B00]/20">
                      <div
                        className="
                          h-full
                          w-[65%]
                          rounded
                          bg-[#F96B00]
                        "
                      />
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Chart */}

            <div
              className="
                mt-3
                flex
                h-20
                items-end
                gap-2
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-3
              "
            >
              {[35, 55, 45, 70, 52, 80, 65, 90].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                    }}
                    className="
                      flex-1
                      rounded-t
                      bg-gradient-to-t
                      from-[#C11200]
                      to-[#F96B00]
                      opacity-60
                    "
                  />
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Number */}

      <div
        className="
          absolute
          bottom-5
          left-5
          font-mono
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-white/30
        "
      >
        PROJECT / {String(project.id).padStart(2, "0")}
      </div>
    </div>
  );
};

/* =========================================================
   FEATURED PROJECT
========================================================= */

const FeaturedProject = ({ project }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.7,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.02]
        light:border-black/[0.08]
        light:bg-black/[0.015]
      "
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Visual */}

        <ProjectVisual
          project={project}
          featured
        />

        {/* Content */}

        <div className="relative p-7 sm:p-9">
          {/* Featured Label */}

          <div className="flex items-center gap-3">
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#F96B00]/20
                bg-[#F96B00]/5
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-[#F96B00]
              "
            >
              <Star
                size={12}
                fill="currentColor"
              />

              Featured Project
            </span>

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                text-zinc-600
              "
            >
              Full Stack
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              mt-5
              font-['Manrope']
              text-2xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-3xl
              light:text-zinc-950
            "
          >
            {project.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-zinc-400
              sm:text-[15px]
              light:text-zinc-600
            "
          >
            {project.description}
          </p>

          {/* Features */}

          <div className="mt-6">
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
              Key Features
            </div>

            <div className="grid grid-cols-2 gap-2">
              {project.features.slice(0, 6).map(
                (feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-zinc-500
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#F96B00]
                      "
                    />

                    {feature}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technologies */}

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className={`
                    rounded-lg
                    border
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-medium
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

          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn
                btn-primary
                h-11
                rounded-xl
                px-5
                text-sm
              "
            >
              <GithubIcon size={16} />

              GitHub

              <ArrowUpRight size={15} />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn
                btn-secondary
                h-11
                rounded-xl
                px-5
                text-sm
              "
            >
              <ExternalLink size={16} />

              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.02]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/[0.14]
        hover:bg-white/[0.025]
        light:border-black/[0.08]
        light:bg-black/[0.015]
      "
    >
      {/* Visual */}

      <ProjectVisual project={project} />

      {/* Content */}

      <div className="p-6">
        {/* Category */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-[#F96B00]
            "
          >
            {project.category}
          </span>

          <span
            className="
              text-[10px]
              text-zinc-600
            "
          >
            {project.status}
          </span>
        </div>

        {/* Title */}

        <h3
          className="
            mt-3
            font-['Manrope']
            text-xl
            font-bold
            text-white
            light:text-zinc-950
          "
        >
          {project.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-zinc-500
            light:text-zinc-600
          "
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <span
                key={technology}
                className={`
                  rounded-md
                  border
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  ${getTechnologyStyle(
                    technology
                  )}
                `}
              >
                {technology}
              </span>
            ))}
        </div>

        {/* Buttons */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-white/[0.07]
            pt-5
            light:border-black/[0.07]
          "
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-zinc-400
              transition-colors
              duration-300
              hover:text-white
              light:text-zinc-600
              light:hover:text-zinc-950
            "
          >
            <GithubIcon size={15} />

            <span>Source Code</span>

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-[#F96B00]
            "
          >
            <span>Live Demo</span>

            <ExternalLink
              size={14}
              className="
                transition-transform
                duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((project) => !project.featured)
      : projects.filter(
          (project) =>
            !project.featured &&
            project.category === activeFilter
        );

  const featuredProject = projects.find(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* =======================================================
          BACKGROUND GLOWS
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
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
          right-[5%]
          bottom-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#02045D]/10
          blur-[130px]
        "
      />

      <div className="container-custom relative z-10">
        {/* =======================================================
            HEADER
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
            mb-12
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
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
                Selected Work
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
              Things I've
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
                built.
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
                light:text-zinc-600
              "
            >
              A selection of projects that showcase my
              experience across frontend, backend and
              full-stack development.
            </p>
          </div>

          {/* Project Count */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-3
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-4
              py-3
              light:border-black/[0.08]
              light:bg-black/[0.015]
            "
          >
            <FolderGit2
              size={18}
              className="text-[#F96B00]"
            />

            <div>
              <div
                className="
                  font-['Manrope']
                  text-lg
                  font-bold
                  text-white
                  light:text-zinc-950
                "
              >
                {projects.length}+
              </div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-zinc-600
                "
              >
                Projects
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURED PROJECT
        ======================================================= */}

        {featuredProject && (
          <div className="mb-10">
            <FeaturedProject
              project={featuredProject}
            />
          </div>
        )}

        {/* =======================================================
            FILTER BAR
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-7
            flex
            flex-wrap
            items-center
            gap-2
          "
        >
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={`
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  px-4
                  py-2
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#F96B00]/30 bg-[#F96B00]/10 text-[#F96B00]"
                      : "border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:border-white/[0.12] hover:text-zinc-300 light:border-black/[0.07] light:bg-black/[0.015] light:hover:text-zinc-900"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* =======================================================
            PROJECT GRID
        ======================================================= */}

        <motion.div
          layout
          className="
            grid
            gap-5
            md:grid-cols-2
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        {/* =======================================================
            GITHUB CTA
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
            mt-8
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.015]
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
            light:border-black/[0.07]
            light:bg-black/[0.015]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-zinc-300
                light:border-black/[0.08]
                light:bg-black/[0.02]
                light:text-zinc-700
              "
            >
              <GithubIcon size={21} />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-zinc-200
                  light:text-zinc-900
                "
              >
                Want to see more?
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-zinc-500
                "
              >
                Explore more projects and experiments
                on my GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn
              btn-secondary
              h-11
              w-fit
              rounded-xl
              px-5
              text-sm
            "
          >
            Visit GitHub

            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;