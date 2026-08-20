import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  Code2,
  ArrowRight,
  CheckCircle2,
  Award,
  Cpu,
  Wrench,
} from "lucide-react";

/* =========================================================
   EDUCATION DATA
========================================================= */

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Mechanical Engineering",
    institution:
      "Ajaya Binay Institute of Technology",
    location: "Cuttack, Odisha, India",
    duration: "Bachelor's Degree",
    type: "Undergraduate",

    description:
      "Completed a Bachelor of Technology in Mechanical Engineering, developing a strong foundation in engineering principles, analytical thinking, problem solving and technical concepts.",

    highlights: [
      "Engineering fundamentals",
      "Analytical problem solving",
      "Technical drawing & design",
      "Engineering mathematics",
      "Project-based learning",
    ],

    skills: [
      "Mechanical Engineering",
      "Engineering Mathematics",
      "Problem Solving",
      "Technical Analysis",
      "Project Management",
    ],
  },
];

/* =========================================================
   EDUCATION CARD
========================================================= */

const EducationCard = ({ education }) => {
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
        backdrop-blur-sm
        light:border-black/[0.08]
        light:bg-black/[0.015]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          -top-28
          h-72
          w-72
          rounded-full
          bg-[#F96B00]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3
          h-40
          w-40
          rounded-full
          bg-[#02045D]/10
          blur-[90px]
        "
      />

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div
        className="
          relative
          border-b
          border-white/[0.07]
          p-6
          sm:p-8
          light:border-black/[0.07]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          {/* Left */}

          <div className="flex items-start gap-4">
            {/* Icon */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-[#F96B00]/20
                bg-[#F96B00]/10
                text-[#F96B00]
              "
            >
              <GraduationCap
                size={27}
                strokeWidth={1.6}
              />
            </div>

            {/* Degree */}

            <div>
              <div
                className="
                  mb-2
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#F96B00]
                "
              >
                <span>Education</span>

                <span className="text-zinc-700">
                  /
                </span>

                <span>{education.type}</span>
              </div>

              <h3
                className="
                  font-['Manrope']
                  text-xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-2xl
                  light:text-zinc-950
                "
              >
                {education.degree}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-zinc-300
                  light:text-zinc-700
                "
              >
                {education.institution}
              </p>
            </div>
          </div>

          {/* Education Badge */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-3
              py-2
              light:border-black/[0.07]
              light:bg-black/[0.02]
            "
          >
            <Award
              size={15}
              className="text-[#F96B00]"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Bachelor's Degree
            </span>
          </div>
        </div>

        {/* Metadata */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-x-6
            gap-y-3
          "
        >
          {/* Location */}

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-zinc-500
            "
          >
            <MapPin
              size={14}
              className="text-[#F96B00]"
            />

            <span>{education.location}</span>
          </div>

          {/* Duration */}

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-zinc-500
            "
          >
            <CalendarDays
              size={14}
              className="text-[#F96B00]"
            />

            <span>{education.duration}</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BODY
      ===================================================== */}

      <div className="relative p-6 sm:p-8">
        {/* Description */}

        <div className="max-w-3xl">
          <div
            className="
              mb-3
              flex
              items-center
              gap-2
            "
          >
            <BookOpen
              size={16}
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
              Academic Background
            </h4>
          </div>

          <p
            className="
              text-sm
              leading-7
              text-zinc-400
              sm:text-[15px]
              light:text-zinc-600
            "
          >
            {education.description}
          </p>
        </div>

        {/* =================================================
            HIGHLIGHTS
        ================================================= */}

        <div
          className="
            mt-8
            grid
            gap-3
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {education.highlights.map(
            (highlight, index) => (
              <motion.div
                key={highlight}
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
                  delay: index * 0.06,
                }}
                className="
                  flex
                  items-start
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  px-3
                  py-3
                  text-xs
                  leading-5
                  text-zinc-500
                  light:border-black/[0.06]
                  light:bg-black/[0.015]
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

                <span>{highlight}</span>
              </motion.div>
            )
          )}
        </div>

        {/* =================================================
            KNOWLEDGE / SKILLS
        ================================================= */}

        <div
          className="
            mt-8
            border-t
            border-white/[0.07]
            pt-7
            light:border-black/[0.07]
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              gap-2
            "
          >
            <Cpu
              size={16}
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
              Core Academic Skills
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#F96B00]/25
                  hover:bg-[#F96B00]/5
                  hover:text-[#F96B00]
                  light:border-black/[0.07]
                  light:bg-black/[0.02]
                  light:text-zinc-600
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   CAREER TRANSITION CARD
========================================================= */

const CareerTransition = () => {
  return (
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
        delay: 0.15,
      }}
      className="
        relative
        mt-6
        overflow-hidden
        rounded-2xl
        border
        border-[#F96B00]/10
        bg-gradient-to-r
        from-[#F96B00]/5
        via-transparent
        to-[#02045D]/5
        p-6
        sm:p-7
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F96B00]/5
          blur-[70px]
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>
          <div
            className="
              flex
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
                bg-[#F96B00]/10
                text-[#F96B00]
              "
            >
              <Wrench
                size={19}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#F96B00]
                "
              >
                Career Journey
              </span>

              <h3
                className="
                  mt-1
                  font-['Manrope']
                  text-lg
                  font-bold
                  text-white
                  light:text-zinc-950
                "
              >
                From Engineering to Software
              </h3>
            </div>
          </div>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-zinc-500
            "
          >
            My engineering background developed my analytical
            and problem-solving mindset, which I now apply to
            software development and building modern web
            applications.
          </p>
        </div>

        {/* Right Flow */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {/* Mechanical */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-4
              py-2.5
              light:border-black/[0.07]
              light:bg-black/[0.02]
            "
          >
            <Wrench
              size={15}
              className="text-zinc-500"
            />

            <span
              className="
                text-xs
                font-medium
                text-zinc-400
                light:text-zinc-600
              "
            >
              Engineering
            </span>
          </div>

          {/* Arrow */}

          <ArrowRight
            size={17}
            className="text-[#F96B00]"
          />

          {/* Software */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#F96B00]/20
              bg-[#F96B00]/5
              px-4
              py-2.5
            "
          >
            <Code2
              size={15}
              className="text-[#F96B00]"
            />

            <span
              className="
                text-xs
                font-semibold
                text-[#F96B00]
              "
            >
              Software Development
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   EDUCATION SECTION
========================================================= */

const Education = () => {
  return (
    <section
      id="education"
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
          right-[5%]
          bottom-0
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
          className="mb-14 max-w-3xl"
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
              Education
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
            My academic
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
              foundation.
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
            An engineering background that shaped my analytical
            thinking, technical problem solving and approach to
            building software.
          </p>
        </motion.div>

        {/* =======================================================
            EDUCATION
        ======================================================= */}

        <div>
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
            />
          ))}
        </div>

        {/* =======================================================
            CAREER TRANSITION
        ======================================================= */}

        <CareerTransition />
      </div>
    </section>
  );
};

export default Education;