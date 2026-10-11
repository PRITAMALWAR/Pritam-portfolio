import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaMicrosoft,
  FaGoogle,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiJsonwebtokens,
  SiFramer,
  SiPostman,
  SiFirebase,
  SiPython,
  SiGmail,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend Development",
    shortTitle: "Frontend",
    icon: FaReact,
    color: "text-cyan-500",
    activeColor: "border-cyan-300 bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
    skills: [
      ["React.js", FaReact, "text-cyan-500", "bg-cyan-50", "border-cyan-200"],
      ["Next.js", SiNextdotjs, "text-slate-800", "bg-slate-100", "border-slate-200"],
      ["JavaScript", FaJs, "text-yellow-600", "bg-yellow-50", "border-yellow-200"],
      ["TypeScript", SiTypescript, "text-blue-600", "bg-blue-50", "border-blue-200"],
      ["HTML5", FaHtml5, "text-orange-600", "bg-orange-50", "border-orange-200"],
      ["CSS3", FaCss3Alt, "text-blue-500", "bg-blue-50", "border-blue-200"],
      ["Tailwind CSS", SiTailwindcss, "text-cyan-500", "bg-cyan-50", "border-cyan-200"],
      ["Chakra UI", SiChakraui, "text-teal-600", "bg-teal-50", "border-teal-200"],
      ["Redux", SiRedux, "text-violet-600", "bg-violet-50", "border-violet-200"],
      ["Context API", TbApi, "text-indigo-600", "bg-indigo-50", "border-indigo-200"],
      ["Framer Motion", SiFramer, "text-pink-600", "bg-pink-50", "border-pink-200"],
    ],
  },
  {
    title: "Backend Development",
    shortTitle: "Backend",
    icon: FaNodeJs,
    color: "text-emerald-500",
    activeColor: "border-emerald-300 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    skills: [
      ["Node.js", FaNodeJs, "text-green-600", "bg-green-50", "border-green-200"],
      ["Express.js", SiExpress, "text-slate-700", "bg-slate-100", "border-slate-200"],
      ["Python", SiPython, "text-blue-600", "bg-blue-50", "border-blue-200"],
      ["REST APIs", TbApi, "text-indigo-600", "bg-indigo-50", "border-indigo-200"],
      ["JWT", SiJsonwebtokens, "text-purple-600", "bg-purple-50", "border-purple-200"],
      ["Firebase", SiFirebase, "text-orange-500", "bg-orange-50", "border-orange-200"],
    ],
  },
  {
    title: "Generative AI & RAG",
    shortTitle: "AI & RAG",
    icon: FaBrain,
    color: "text-violet-600",
    activeColor: "border-violet-300 bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
    skills: [
      ["Generative AI", FaBrain, "text-violet-600", "bg-violet-50", "border-violet-200"],
      ["OpenAI", FaRobot, "text-emerald-600", "bg-emerald-50", "border-emerald-200"],
      ["Gemini", FaGoogle, "text-blue-600", "bg-blue-50", "border-blue-200"],
      ["Ollama", FaRobot, "text-orange-600", "bg-orange-50", "border-orange-200"],
      ["Tokenization", TbApi, "text-pink-600", "bg-pink-50", "border-pink-200"],
      ["RAG", TbApi, "text-indigo-600", "bg-indigo-50", "border-indigo-200"],
      ["Vector DBs", TbApi, "text-teal-600", "bg-teal-50", "border-teal-200"],
      ["Pinecone", TbApi, "text-green-600", "bg-green-50", "border-green-200"],
    ],
  },
  {
    title: "Databases",
    shortTitle: "Databases",
    icon: SiMongodb,
    color: "text-green-600",
    activeColor: "border-green-300 bg-green-50",
    badge: "bg-green-100 text-green-700",
    skills: [
      ["MongoDB", SiMongodb, "text-green-600", "bg-green-50", "border-green-200"],
      ["PostgreSQL", SiPostgresql, "text-blue-600", "bg-blue-50", "border-blue-200"],
      ["SQL", TbApi, "text-indigo-600", "bg-indigo-50", "border-indigo-200"],
    ],
  },
  {
    title: "Tools & Productivity",
    shortTitle: "Tools",
    icon: FaGitAlt,
    color: "text-orange-500",
    activeColor: "border-orange-300 bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    skills: [
      ["Git", FaGitAlt, "text-orange-600", "bg-orange-50", "border-orange-200"],
      ["Postman", SiPostman, "text-orange-600", "bg-orange-50", "border-orange-200"],
      ["MS Word", FaMicrosoft, "text-blue-600", "bg-blue-50", "border-blue-200"],
      ["MS Excel", FaMicrosoft, "text-green-600", "bg-green-50", "border-green-200"],
      ["Google Sheets", FaGoogle, "text-green-600", "bg-green-50", "border-green-200"],
      ["Gmail", SiGmail, "text-red-500", "bg-red-50", "border-red-200"],
    ],
  },
];

function SkillCard({ group, active, onClick }) {
  const GroupIcon = group.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        active
          ? `${group.activeColor} border-2 shadow-md`
          : "border-blue-100 bg-white hover:border-blue-200"
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
          <GroupIcon className={`text-xl ${group.color}`} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-slate-800 sm:text-base">
            {group.title}
          </h3>
          <p className="mt-0.5 text-[11px] text-slate-500">
            {active ? "Currently exploring" : "Click to rotate these skills"}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${group.badge}`}
        >
          {group.skills.length} Skills
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map(([name, Icon, iconColor, bgColor, borderColor]) => (
          <span
            key={name}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[11px] font-semibold text-slate-700 transition-colors ${bgColor} ${borderColor}`}
          >
            <Icon className={`shrink-0 text-sm ${iconColor}`} />
            {name}
          </span>
        ))}
      </div>
    </button>
  );
}

function SkillsOrbit({ group }) {
  const count = group.skills.length;
  const GroupIcon = group.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center">
      {/* Orbit rings */}
      <div className="pointer-events-none absolute h-[88%] w-[88%] rounded-full border border-blue-200" />
      <div className="pointer-events-none absolute h-[64%] w-[64%] rounded-full border border-cyan-300" />
      <div className="pointer-events-none absolute h-[40%] w-[40%] rounded-full border border-indigo-200" />

      {/* Each category's skill icons */}
      <div key={group.title} className="skills-orbit absolute inset-0">
        {group.skills.map((skill, index) => {
          const [name, Icon, iconColor, bgColor, borderColor] = skill;

          return (
            <div
              key={name}
              className="skills-orbit-position"
              style={{
                "--angle": `${(360 / count) * index}deg`,
              }}
            >
              <div className="skills-orbit-counter">
                <div
                  title={name}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-md sm:h-12 sm:w-12 ${bgColor} ${borderColor}`}
                >
                  <Icon className={`text-xl sm:text-2xl ${iconColor}`} />
                </div>

                <span className="max-w-[84px] rounded-md bg-white/95 px-1.5 py-1 text-center text-[9px] font-bold leading-tight text-slate-700 shadow-sm sm:max-w-[100px] sm:text-[10px]">
                  {name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center globe */}
      <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-indigo-400 bg-gradient-to-br from-blue-500 to-violet-500 text-center text-white shadow-[0_0_40px_rgba(79,70,229,0.3)] sm:h-36 sm:w-36">
        <GroupIcon className="mb-2 text-3xl" />

        <span className="max-w-[112px] px-2 text-sm font-extrabold">
          {group.shortTitle || group.title}
        </span>

        <span className="mt-1 text-[10px]">
          {count} Skills
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedGroup = skillGroups[selectedIndex];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-16 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600">
            Explore My Stack
          </p>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Technologies and tools I use to build modern web applications and
            AI-powered experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Skill categories */}
          <div className="flex flex-col gap-3">
            {skillGroups.map((group, index) => (
              <SkillCard
                key={group.title}
                group={group}
                active={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {/* Animated orbit */}
          <div className="min-w-0 lg:sticky lg:top-24">
            <div className="mb-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                Explore My Stack
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                {selectedGroup.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {selectedGroup.skills.length} skills orbiting the globe
              </p>
            </div>

            <SkillsOrbit group={selectedGroup} />
          </div>
        </div>
      </div>

      <style>{`
        .skills-orbit {
          border-radius: 50%;
          transform-origin: center center;
          animation: skills-earth-rotation 18s linear infinite;
          will-change: transform;
        }

        .skills-orbit-position {
          position: absolute;
          inset: 0;
          transform: rotate(var(--angle));
        }

        .skills-orbit-counter {
          position: absolute;
          top: 6%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          transform: translate(-50%, -50%);
          animation: skills-icon-counter-rotation 18s linear infinite;
          will-change: transform;
        }

        @keyframes skills-earth-rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes skills-icon-counter-rotation {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-orbit,
          .skills-orbit-counter {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}



// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
//   FaMicrosoft,
//   FaGoogle,
//   FaBrain,
//   FaRobot,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiTypescript,
//   SiTailwindcss,
//   SiChakraui,
//   SiRedux,
//   SiJsonwebtokens,
//   SiFramer,
//   SiPostman,
//   SiFirebase,
//   SiPython,
//   SiGmail,
// } from "react-icons/si";

// import { TbApi } from "react-icons/tb";

// const Skills = () => {
//   const skillGroups = [
//     {
//       title: "Frontend Development",
//       description: "Building responsive and interactive user interfaces",
//       skills: [
//         { name: "React.js", icon: FaReact, color: "text-cyan-500" },
//         { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
//         { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-500" },
//         { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
//         { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
//         { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//         { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
//         { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
//         { name: "Redux", icon: SiRedux, color: "text-purple-600" },
//         { name: "Context API", icon: FaReact, color: "text-cyan-500" },
//         { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
//       ],
//     },
//     {
//       title: "Backend Development",
//       description: "Developing APIs and server-side applications",
//       skills: [
//         { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
//         { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
//         { name: "Python", icon: SiPython, color: "text-yellow-600" },
//         { name: "RESTful APIs", icon: TbApi, color: "text-blue-600" },
//         { name: "JWT", icon: SiJsonwebtokens, color: "text-orange-500" },
//         { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
//       ],
//     },
//     {
//       title: "Generative AI & RAG",
//       description: "Building AI-powered applications and retrieval systems",
//       skills: [
//         { name: "Generative AI", icon: FaBrain, color: "text-purple-600" },
//         { name: "OpenAI", icon: FaRobot, color: "text-gray-900" },
//         { name: "Gemini", icon: FaGoogle, color: "text-blue-500" },
//         { name: "Ollama", icon: FaRobot, color: "text-gray-800" },
//         { name: "Tokenization", icon: TbApi, color: "text-purple-600" },
//         { name: "RAG", icon: TbApi, color: "text-cyan-600" },
//         { name: "Vector Databases", icon: TbApi, color: "text-blue-600" },
//         { name: "Pinecone", icon: TbApi, color: "text-green-600" },
//       ],
//     },
//     {
//       title: "Databases",
//       description: "Working with data storage and management",
//       skills: [
//         { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
//         { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
//         { name: "SQL", icon: SiPostgresql, color: "text-blue-500" },
//       ],
//     },
//     {
//       title: "Tools & Productivity",
//       description: "Tools for development and everyday productivity",
//       skills: [
//         { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
//         { name: "Postman", icon: SiPostman, color: "text-orange-500" },
//         { name: "MS Word", icon: FaMicrosoft, color: "text-blue-700" },
//         { name: "MS Excel", icon: FaMicrosoft, color: "text-green-700" },
//         { name: "Google Sheets", icon: FaGoogle, color: "text-green-600" },
//         { name: "Gmail", icon: SiGmail, color: "text-red-500" },
//       ],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-14">
//           <span className="inline-block mb-4 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 shadow-sm">
//             WHAT I WORK WITH
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
//             Skills &{" "}
//             <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
//               Technologies
//             </span>
//           </h2>

//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-5" />
//         </div>

//         {/* Skill Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
//           {skillGroups.map((group) => (
//             <div
//               key={group.title}
//               className="group rounded-2xl border border-blue-100 bg-white/90 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-100/60"
//             >
//               {/* Category Heading */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

//                   <h3 className="text-xl font-bold text-gray-900">
//                     {group.title}
//                   </h3>
//                 </div>

//                 <p className="text-sm leading-relaxed text-gray-500">
//                   {group.description}
//                 </p>
//               </div>

//               {/* Skill Cards */}
//               <div className="flex flex-wrap gap-3">
//                 {group.skills.map((skill) => {
//                   const Icon = skill.icon;

//                   return (
//                     <div
//                       key={skill.name}
//                       className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/80 px-3.5 py-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
//                     >
//                       <Icon
//                         className={`shrink-0 text-xl ${skill.color} transition-transform duration-300 group-hover:scale-105`}
//                       />

//                       <span className="text-sm font-semibold text-gray-700">
//                         {skill.name}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;













// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiTypescript,
//   SiTailwindcss,
//   SiChakraui,
//   SiRedux,
//   SiJsonwebtokens,
//   SiFramer,
//   SiPostman,
//   SiFirebase,
//   SiPython

// } from "react-icons/si";

// import { TbApi } from "react-icons/tb";

// const Skills = () => {
//   const skills = [
//     { name: "React.js", icon: FaReact, color: "text-cyan-500" },
//     { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
//     { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
//     { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
//     { name: "Python", icon: SiPython, color: "text-orange-600" },
//     { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
//     { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
//     { name: "SQL", icon: SiPostgresql, color: "text-blue-500" },
//     { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400" },
//     { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
//     { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
//     { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//     { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
//     { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
//     { name: "Redux", icon: SiRedux, color: "text-purple-600" },
//     { name: "Context API", icon: FaReact, color: "text-cyan-500" },
//     { name: "RESTful APIs", icon: TbApi, color: "text-pink-500" },
//     { name: "JWT", icon: SiJsonwebtokens, color: "text-orange-500" },
//     { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
//     { name: "Framer Motion", icon: SiFramer, color: "text-pink-600" },
//     { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
//     { name: "Postman", icon: SiPostman, color: "text-orange-500" },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Skills & Technologies
//           </h2>

//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Skills */}
//         <div className="flex flex-wrap justify-center gap-5">
//           {skills.map((skill, index) => {
//             const Icon = skill.icon;

//             return (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
//               >
//                 <Icon className={`text-3xl ${skill.color}`} />
//                 <span className="font-semibold text-gray-700">
//                   {skill.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-14 text-center">
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Continuously expanding my toolkit to stay at the forefront of web
//             development. Passionate about building scalable, responsive, and
//             user-friendly applications while exploring modern technologies and
//             best practices.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
//   FaMicrosoft,
//   FaGoogle,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiTypescript,
//   SiTailwindcss,
//   SiChakraui,
//   SiRedux,
//   SiJsonwebtokens,
//   SiFramer,
//   SiPostman,
//   SiFirebase,
//   SiPython,
//   SiGmail,
// } from "react-icons/si";

// import { TbApi } from "react-icons/tb";

// const Skills = () => {
//   const skills = [
//     { name: "React.js", icon: FaReact, color: "text-cyan-500" },
//     { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
//     { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
//     { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
//     { name: "Python", icon: SiPython, color: "text-yellow-500" },
//     { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
//     { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
//     { name: "SQL", icon: SiPostgresql, color: "text-blue-500" },
//     { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400" },
//     { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
//     { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
//     { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//     { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
//     { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
//     { name: "Redux", icon: SiRedux, color: "text-purple-600" },
//     { name: "Context API", icon: FaReact, color: "text-cyan-500" },
//     { name: "RESTful APIs", icon: TbApi, color: "text-pink-500" },
//     { name: "JWT", icon: SiJsonwebtokens, color: "text-orange-500" },
//     { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
//     { name: "Framer Motion", icon: SiFramer, color: "text-pink-600" },
//     { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
//     { name: "Postman", icon: SiPostman, color: "text-orange-500" },

//     // Productivity Tools
//     { name: "MS Word", icon: FaMicrosoft, color: "text-blue-700" },
//     { name: "MS Excel", icon: FaMicrosoft, color: "text-green-700" },
//     { name: "Google Sheets", icon: FaGoogle, color: "text-green-600" },
//     { name: "Gmail", icon: SiGmail, color: "text-red-500" },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Skills & Technologies
//           </h2>

//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Skills */}
//         <div className="flex flex-wrap justify-center gap-5">
//           {skills.map((skill, index) => {
//             const Icon = skill.icon;

//             return (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
//               >
//                 <Icon className={`text-3xl ${skill.color}`} />
//                 <span className="font-semibold text-gray-700">
//                   {skill.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-14 text-center">
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Continuously expanding my toolkit to stay at the forefront of web
//             development. Passionate about building scalable, responsive, and
//             user-friendly applications while exploring modern technologies and
//             best practices.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
