import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Braces,
  Globe,
  Layers3,
  Terminal,
  Cloud,
  ShieldCheck,
  Cpu,
} from "lucide-react";

/* =========================================================
   SKILL DATA
========================================================= */

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible and interactive user interfaces.",
    icon: Code2,
    accent: "orange",
    skills: [
      {
        name: "HTML5",
        level: "Advanced",
        percentage: 90,
        icon: Globe,
      },
      {
        name: "CSS3",
        level: "Advanced",
        percentage: 88,
        icon: Layers3,
      },
      {
        name: "JavaScript",
        level: "Advanced",
        percentage: 88,
        icon: Braces,
      },
      {
        name: "React.js",
        level: "Advanced",
        percentage: 85,
        icon: Code2,
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        percentage: 88,
        icon: Layers3,
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        percentage: 80,
        icon: Layers3,
      },
      {
        name: "Vite",
        level: "Intermediate",
        percentage: 78,
        icon: Terminal,
      },
    ],
  },

  {
    id: "backend",
    title: "Backend Development",
    description:
      "Building secure APIs and scalable server-side applications.",
    icon: Server,
    accent: "red",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        percentage: 85,
        icon: Server,
      },
      {
        name: "Express.js",
        level: "Advanced",
        percentage: 85,
        icon: Braces,
      },
      {
        name: "REST APIs",
        level: "Advanced",
        percentage: 88,
        icon: Globe,
      },
      {
        name: "JWT Authentication",
        level: "Intermediate",
        percentage: 78,
        icon: ShieldCheck,
      },
      {
        name: "CRUD Operations",
        level: "Advanced",
        percentage: 90,
        icon: Cpu,
      },
    ],
  },

  {
    id: "database",
    title: "Database",
    description:
      "Working with structured and document-based data storage.",
    icon: Database,
    accent: "blue",
    skills: [
      {
        name: "MongoDB",
        level: "Advanced",
        percentage: 85,
        icon: Database,
      },
      {
        name: "Mongoose",
        level: "Advanced",
        percentage: 82,
        icon: Database,
      },
      {
        name: "MySQL",
        level: "Intermediate",
        percentage: 72,
        icon: Database,
      },
    ],
  },

  {
    id: "tools",
    title: "Tools & Workflow",
    description:
      "Tools that help me build, test, manage and deploy applications.",
    icon: Wrench,
    accent: "purple",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        percentage: 85,
        icon: GitBranch,
      },
      {
        name: "GitHub",
        level: "Advanced",
        percentage: 88,
        icon: GitBranch,
      },
      {
        name: "Postman",
        level: "Advanced",
        percentage: 85,
        icon: Terminal,
      },
      {
        name: "VS Code",
        level: "Advanced",
        percentage: 95,
        icon: Code2,
      },
      {
        name: "Firebase",
        level: "Intermediate",
        percentage: 70,
        icon: Cloud,
      },
      {
        name: "Cloudinary",
        level: "Intermediate",
        percentage: 72,
        icon: Cloud,
      },
    ],
  },
];

/* =========================================================
   ACCENT CONFIG
========================================================= */

const accentStyles = {
  orange: {
    icon: "text-[#F96B00]",
    iconBg: "bg-[#F96B00]/10",
    iconBorder: "border-[#F96B00]/20",
    progress: "from-[#F96B00] to-[#ff9a3c]",
    hover: "hover:border-[#F96B00]/30",
    glow: "bg-[#F96B00]/10",
  },

  red: {
    icon: "text-[#C11200]",
    iconBg: "bg-[#C11200]/10",
    iconBorder: "border-[#C11200]/20",
    progress: "from-[#C11200] to-[#F96B00]",
    hover: "hover:border-[#C11200]/30",
    glow: "bg-[#C11200]/10",
  },

  blue: {
    icon: "text-blue-400",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-400/20",
    progress: "from-blue-500 to-cyan-400",
    hover: "hover:border-blue-400/30",
    glow: "bg-blue-500/10",
  },

  purple: {
    icon: "text-purple-400",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-400/20",
    progress: "from-purple-500 to-pink-400",
    hover: "hover:border-purple-400/30",
    glow: "bg-purple-500/10",
  },
};

/* =========================================================
   SKILL CARD
========================================================= */

const SkillCard = ({ skill, accent, index }) => {
  const Icon = skill.icon;
  const styles = accentStyles[accent];

  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.02]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        ${styles.hover}
        light:border-black/[0.07]
        light:bg-black/[0.015]
      `}
    >
      {/* Hover Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          blur-[35px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          ${styles.glow}
        `}
      />

      <div className="relative">
        {/* Top */}

        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {/* Icon */}

            <div
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                ${styles.iconBorder}
                ${styles.iconBg}
                ${styles.icon}
              `}
            >
              <Icon size={17} strokeWidth={1.8} />
            </div>

            {/* Name */}

            <span
              className="
                truncate
                text-sm
                font-semibold
                text-zinc-200
                light:text-zinc-900
              "
            >
              {skill.name}
            </span>
          </div>

          {/* Level */}

          <span
            className="
              shrink-0
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-zinc-600
            "
          >
            {skill.level}
          </span>
        </div>

        {/* Progress */}

        <div className="mt-4">
          <div
            className="
              h-1
              overflow-hidden
              rounded-full
              bg-white/[0.06]
              light:bg-black/[0.06]
            "
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${skill.percentage}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.04,
                ease: "easeOut",
              }}
              className={`
                h-full
                rounded-full
                bg-gradient-to-r
                ${styles.progress}
              `}
            />
          </div>
        </div>

        {/* Percentage */}

        <div className="mt-2 flex justify-end">
          <span
            className="
              text-[10px]
              font-medium
              text-zinc-600
            "
          >
            {skill.percentage}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   CATEGORY CARD
========================================================= */

const SkillCategory = ({ category, index }) => {
  const Icon = category.icon;
  const styles = accentStyles[category.accent];

  return (
    <motion.div
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
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.02]
        p-6
        backdrop-blur-sm
        light:border-black/[0.08]
        light:bg-black/[0.015]
      "
    >
      {/* Category Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          blur-[80px]
          opacity-30
          ${styles.glow}
        `}
      />

      {/* Category Header */}

      <div className="relative mb-6">
        <div className="flex items-start gap-4">
          {/* Category Icon */}

          <div
            className={`
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              ${styles.iconBorder}
              ${styles.iconBg}
              ${styles.icon}
            `}
          >
            <Icon size={22} strokeWidth={1.7} />
          </div>

          {/* Title */}

          <div className="min-w-0">
            <h3
              className="
                font-['Manrope']
                text-lg
                font-bold
                text-white
                light:text-zinc-950
              "
            >
              {category.title}
            </h3>

            <p
              className="
                mt-1
                max-w-md
                text-xs
                leading-5
                text-zinc-500
              "
            >
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className="relative grid gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            accent={category.accent}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* =========================================================
   SKILLS COMPONENT
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* =======================================================
          BACKGROUND
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#F96B00]/5
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[5%]
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
            mb-14
            flex
            flex-col
            justify-between
            gap-6
            lg:flex-row
            lg:items-end
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
                Technical Skills
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                font-['Manrope']
                text-4xl
                font-extrabold
                tracking-tight
                text-white
                sm:text-5xl
                light:text-zinc-950
              "
            >
              Tools I use to
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
                build things.
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
              A practical stack focused on building modern,
              scalable and maintainable web applications from
              frontend to backend.
            </p>
          </div>

          {/* Stack Badge */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-3
              rounded-xl
              border
              border-[#F96B00]/15
              bg-[#F96B00]/5
              px-4
              py-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-[#F96B00]/10
                text-[#F96B00]
              "
            >
              <Code2 size={17} />
            </div>

            <div>
              <div className="text-xs font-semibold text-zinc-200 light:text-zinc-900">
                MERN Stack
              </div>

              <div className="text-[10px] text-zinc-500">
                MongoDB · Express · React · Node
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            SKILL CATEGORIES
        ======================================================= */}

        <div
          className="
            grid
            gap-5
            md:grid-cols-2
          "
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* =======================================================
            BOTTOM STACK STRIP
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
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <div
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-zinc-600
                "
              >
                Core Stack
              </div>

              <div
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-zinc-300
                  light:text-zinc-700
                "
              >
                JavaScript ecosystem
              </div>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:border-[#F96B00]/25
                    hover:bg-[#F96B00]/5
                    hover:text-[#F96B00]
                    light:border-black/[0.07]
                    light:bg-black/[0.02]
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

export default Skills;