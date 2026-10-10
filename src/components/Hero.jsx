// import { Github, Linkedin, Mail } from 'lucide-react';
// import mainImage from '../assest/PritamProfile.jpeg'; // ✅ Make sure this path is correct

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
//           {/* Left Side - Text Content */}
//           <div className="flex-1 space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-blue-600 font-semibold text-xl animate-fade-in">
//                 Hi there! I'm
//               </h2>
//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900 animate-fade-in">
//                 Pritam
//               </h1>
//               <h3 className="text-2xl md:text-4xl text-gray-700 animate-fade-in">
//                 Fullstack Developer
//               </h3>
//             </div>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
//               Crafting seamless web experiences with modern technologies.
//               Specialized in building responsive, user-centric applications
//               that bridge the gap between design and functionality.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={() =>
//                   document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
//                 }
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//               >
//                 Get In Touch
//               </button>
//               <button
//                 onClick={() =>
//                   document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
//                 }
//                 className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
//               >
//                 View Projects
//               </button>
//             </div>

//             <div className="flex gap-6 pt-4">
//               <a
//                 href="https://github.com/PRITAMALWAR"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
//               >
//                 <Github size={28} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/pritam-verma-45830328b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
//               >
//                 <Linkedin size={28} />
//               </a>
//               <a
//                 href="mailto:thepritamverma@gmail.com"
//                 className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
//               >
//                 <Mail size={28} />
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Profile Image */}
//           <div className="flex-1 flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//               <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
//                 <img
//                   src={mainImage}
//                   alt="Pritam"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






































// import { useEffect } from "react";
// import { Github, Linkedin, Mail } from "lucide-react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaMicrosoft,
//   FaGoogle,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiExpress,
//   SiPython,
//   SiMongodb,
//   SiPostgresql,
//   SiTypescript,
//   SiTailwindcss,
//   SiChakraui,
//   SiRedux,
//   SiJsonwebtokens,
//   SiFirebase,
//   SiFramer,
//   SiPostman,
//   SiGmail,
// } from "react-icons/si";
// import { TbApi } from "react-icons/tb";

// import mainImage from "../assest/PritamProfile.jpeg";

// const skills = [
//   { name: "React.js", icon: FaReact, color: "#06b6d4" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
//   { name: "Node.js", icon: FaNodeJs, color: "#16a34a" },
//   { name: "Express.js", icon: SiExpress, color: "#374151" },
//   { name: "Python", icon: SiPython, color: "#eab308" },
//   { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
//   { name: "PostgreSQL", icon: SiPostgresql, color: "#2563eb" },
//   { name: "SQL", icon: SiPostgresql, color: "#3b82f6" },
//   { name: "JavaScript (ES6+)", icon: FaJs, color: "#eab308" },
//   { name: "TypeScript", icon: SiTypescript, color: "#2563eb" },
//   { name: "HTML5", icon: FaHtml5, color: "#ea580c" },
//   { name: "CSS3", icon: FaCss3Alt, color: "#2563eb" },
//   { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
//   { name: "Chakra UI", icon: SiChakraui, color: "#0d9488" },
//   { name: "Redux", icon: SiRedux, color: "#9333ea" },
//   { name: "Context API", icon: FaReact, color: "#06b6d4" },
//   { name: "RESTful APIs", icon: TbApi, color: "#ec4899" },
//   { name: "JWT", icon: SiJsonwebtokens, color: "#f97316" },
//   { name: "Firebase", icon: SiFirebase, color: "#eab308" },
//   { name: "Framer Motion", icon: SiFramer, color: "#db2777" },
//   { name: "Git", icon: FaGitAlt, color: "#ea580c" },
//   { name: "Postman", icon: SiPostman, color: "#f97316" },
//   { name: "MS Word", icon: FaMicrosoft, color: "#1d4ed8" },
//   { name: "MS Excel", icon: FaMicrosoft, color: "#15803d" },
//   { name: "Google Sheets", icon: FaGoogle, color: "#16a34a" },
//   { name: "Gmail", icon: SiGmail, color: "#ef4444" },
// ];

// const Hero = () => {
//   useEffect(() => {
//     const style = document.createElement("style");

//     style.textContent = `
//       .home-orbit-scene {
//         --orbit-size: min(580px, 100%);
//         --orbit-r1: 155px;
//         --orbit-r2: 205px;
//         --orbit-r3: 255px;
//         position: relative;
//         width: var(--orbit-size);
//         aspect-ratio: 1;
//         margin-inline: auto;
//         isolation: isolate;
//       }

//       .home-orbit-ring {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         border: 1px dashed rgba(59, 130, 246, .25);
//         border-radius: 50%;
//         transform: translate(-50%, -50%);
//         pointer-events: none;
//       }

//       .home-orbit-ring-1 {
//         width: calc(var(--orbit-r1) * 2);
//         height: calc(var(--orbit-r1) * 2);
//       }

//       .home-orbit-ring-2 {
//         width: calc(var(--orbit-r2) * 2);
//         height: calc(var(--orbit-r2) * 2);
//       }

//       .home-orbit-ring-3 {
//         width: calc(var(--orbit-r3) * 2);
//         height: calc(var(--orbit-r3) * 2);
//       }

//       .home-profile-center {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         width: 230px;
//         height: 230px;
//         padding: 6px;
//         border-radius: 50%;
//         transform: translate(-50%, -50%);
//         z-index: 2;
//       }

//       .home-profile-glow {
//         position: absolute;
//         inset: -12px;
//         z-index: -1;
//         border-radius: 50%;
//         background: linear-gradient(135deg, #2563eb, #06b6d4);
//         filter: blur(22px);
//         opacity: .3;
//         animation: home-profile-pulse 3s ease-in-out infinite;
//       }

//       .home-profile-image {
//         display: block;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         object-position: center;
//         border: 4px solid white;
//         border-radius: 50%;
//         box-shadow: 0 15px 40px rgba(37, 99, 235, .18);
//       }

//       .home-orbit-item {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         width: 0;
//         height: 0;
//         z-index: 3;
//         transform: rotate(var(--start-angle)) translateX(var(--orbit-radius));
//         animation: home-orbit-spin var(--orbit-duration) linear infinite;
//         animation-delay: var(--orbit-delay);
//         will-change: transform;
//       }

//       .home-orbit-skill {
//         position: absolute;
//         top: 0;
//         left: 0;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 6px;
//         padding: 9px 12px;
//         white-space: nowrap;
//         border: 1px solid rgba(148, 163, 184, .3);
//         border-radius: 12px;
//         background: rgba(255, 255, 255, .97);
//         box-shadow: 0 5px 18px rgba(15, 23, 42, .09);
//         transform: translate(-50%, -50%);
//         animation: home-skill-counter-spin var(--orbit-duration) linear infinite;
//         animation-delay: var(--orbit-delay);
//         transition: box-shadow .25s, border-color .25s;
//         cursor: default;
//       }

//       .home-orbit-skill span {
//         color: #334155;
//         font-size: 11px;
//         font-weight: 600;
//       }

//       .home-orbit-skill:hover {
//         border-color: var(--skill-color);
//         box-shadow: 0 8px 25px rgba(37, 99, 235, .2);
//         z-index: 10;
//       }

//       @keyframes home-orbit-spin {
//         from {
//           transform: rotate(var(--start-angle)) translateX(var(--orbit-radius));
//         }
//         to {
//           transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--orbit-radius));
//         }
//       }

//       @keyframes home-skill-counter-spin {
//         from {
//           transform: translate(-50%, -50%) rotate(var(--counter-angle));
//         }
//         to {
//           transform: translate(-50%, -50%) rotate(calc(var(--counter-angle) - 360deg));
//         }
//       }

//       @keyframes home-profile-pulse {
//         0%, 100% { opacity: .2; transform: scale(.96); }
//         50% { opacity: .4; transform: scale(1.04); }
//       }

//       @media (max-width: 1200px) {
//         .home-orbit-scene {
//           --orbit-size: min(500px, 100%);
//           --orbit-r1: 130px;
//           --orbit-r2: 175px;
//           --orbit-r3: 220px;
//         }

//         .home-profile-center {
//           width: 190px;
//           height: 190px;
//         }

//         .home-orbit-skill {
//           gap: 4px;
//           padding: 7px 9px;
//         }

//         .home-orbit-skill span {
//           font-size: 10px;
//         }

//         .home-orbit-skill svg {
//           width: 17px;
//           height: 17px;
//           flex-shrink: 0;
//         }
//       }

//       @media (max-width: 767px) {
//         .home-orbit-scene {
//           --orbit-size: min(92vw, 390px);
//           --orbit-r1: 83px;
//           --orbit-r2: 119px;
//           --orbit-r3: 155px;
//         }

//         .home-profile-center {
//           width: 125px;
//           height: 125px;
//           padding: 4px;
//         }

//         .home-profile-glow {
//           inset: -7px;
//           filter: blur(14px);
//         }

//         .home-orbit-skill {
//           gap: 4px;
//           padding: 6px;
//           border-radius: 9px;
//         }

//         .home-orbit-skill span {
//           font-size: 9px;
//         }

//         .home-orbit-skill svg {
//           width: 14px;
//           height: 14px;
//         }
//       }

//       @media (max-width: 380px) {
//         .home-orbit-scene {
//           --orbit-size: 320px;
//           --orbit-r1: 73px;
//           --orbit-r2: 105px;
//           --orbit-r3: 137px;
//         }

//         .home-profile-center {
//           width: 108px;
//           height: 108px;
//         }

//         .home-orbit-skill {
//           gap: 3px;
//           padding: 5px;
//         }

//         .home-orbit-skill span {
//           font-size: 8px;
//         }

//         .home-orbit-skill svg {
//           width: 12px;
//           height: 12px;
//         }
//       }

//       @media (prefers-reduced-motion: reduce) {
//         .home-orbit-item,
//         .home-orbit-skill,
//         .home-profile-glow {
//           animation: none !important;
//         }
//       }
//     `;

//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20"
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">

//           {/* Left side: introduction */}
//           <div className="flex-1 space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-blue-600 font-semibold text-xl">
//                 Hi there! I'm
//               </h2>

//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
//                 Pritam
//               </h1>

//               <h3 className="text-2xl md:text-4xl text-gray-700">
//                 Fullstack Developer
//               </h3>
//             </div>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
//               Crafting seamless web experiences with modern technologies.
//               Specialized in building responsive, user-centric applications
//               that bridge the gap between design and functionality.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 type="button"
//                 onClick={() =>
//                   document
//                     .querySelector("#contact")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
//               >
//                 Get In Touch
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   document
//                     .querySelector("#projects")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
//               >
//                 View Projects
//               </button>
//             </div>

//             <div className="flex gap-6 pt-2">
//               <a
//                 href="https://github.com/PRITAMALWAR"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300"
//               >
//                 <Github size={28} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/pritam-verma-45830328b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300"
//               >
//                 <Linkedin size={28} />
//               </a>

//               <a
//                 href="mailto:thepritamverma@gmail.com"
//                 aria-label="Email"
//                 className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300"
//               >
//                 <Mail size={28} />
//               </a>
//             </div>
//           </div>

//           {/* Right side: profile with orbiting skills */}
//           <div className="flex-1 min-w-0 w-full flex justify-center items-center">
//             <div className="home-orbit-scene">

//               {/* Orbit paths */}
//               <div className="home-orbit-ring home-orbit-ring-1" />
//               <div className="home-orbit-ring home-orbit-ring-2" />
//               <div className="home-orbit-ring home-orbit-ring-3" />

//               {/* Your original profile photo */}
//               <div className="home-profile-center">
//                 <div className="home-profile-glow" />

//                 <img
//                   src={mainImage}
//                   alt="Pritam - Fullstack Developer"
//                   className="home-profile-image"
//                 />
//               </div>

//               {/* All 26 orbiting skills */}
//               {skills.map((skill, index) => {
//                 const Icon = skill.icon;
//                 const ring = index % 3;
//                 const position = Math.floor(index / 3);
//                 const count = Math.ceil((skills.length - ring) / 3);
//                 const angle = (360 / count) * position + ring * 17;
//                 const duration = 24 + ring * 8;

//                 return (
//                   <div
//                     key={skill.name}
//                     className="home-orbit-item"
//                     style={{
//                       "--orbit-radius": `var(--orbit-r${ring + 1})`,
//                       "--start-angle": `${angle}deg`,
//                       "--counter-angle": `${-angle}deg`,
//                       "--orbit-duration": `${duration}s`,
//                       "--orbit-delay": `${-(position / count) * duration}s`,
//                       "--skill-color": skill.color,
//                     }}
//                   >
//                     <div className="home-orbit-skill" title={skill.name}>
//                       <Icon
//                         size={22}
//                         color={skill.color}
//                         aria-hidden="true"
//                       />
//                       <span>{skill.name}</span>
//                     </div>
//                   </div>
//                 );
//               })}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;














import { useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Sparkles,
  Download,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaMicrosoft,
  FaGoogle,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiJsonwebtokens,
  SiFirebase,
  SiFramer,
  SiPostman,
  SiGmail,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import mainImage from "../assest/PritamProfile.jpeg";

const skills = [
  { name: "React.js", icon: FaReact, color: "#06b6d4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "Node.js", icon: FaNodeJs, color: "#16a34a" },
  { name: "Express.js", icon: SiExpress, color: "#374151" },
  { name: "Python", icon: SiPython, color: "#eab308" },
  { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#2563eb" },
  { name: "SQL", icon: SiPostgresql, color: "#3b82f6" },
  { name: "JavaScript (ES6+)", icon: FaJs, color: "#eab308" },
  { name: "TypeScript", icon: SiTypescript, color: "#2563eb" },
  { name: "HTML5", icon: FaHtml5, color: "#ea580c" },
  { name: "CSS3", icon: FaCss3Alt, color: "#2563eb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Chakra UI", icon: SiChakraui, color: "#0d9488" },
  { name: "Redux", icon: SiRedux, color: "#9333ea" },
  { name: "Context API", icon: FaReact, color: "#06b6d4" },
  { name: "RESTful APIs", icon: TbApi, color: "#ec4899" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#f97316" },
  { name: "Firebase", icon: SiFirebase, color: "#eab308" },
  { name: "Framer Motion", icon: SiFramer, color: "#db2777" },
  { name: "Git", icon: FaGitAlt, color: "#ea580c" },
  { name: "Postman", icon: SiPostman, color: "#f97316" },
  { name: "MS Word", icon: FaMicrosoft, color: "#1d4ed8" },
  { name: "MS Excel", icon: FaMicrosoft, color: "#15803d" },
  { name: "Google Sheets", icon: FaGoogle, color: "#16a34a" },
  { name: "Gmail", icon: SiGmail, color: "#ef4444" },
];

const featuredSkills = [0, 2, 5, 9, 12, 20];

const Hero = () => {
  useEffect(() => {
    const style = document.createElement("style");

    style.textContent = `
      .hero-premium {
        background:
          radial-gradient(ellipse at 85% 35%, rgba(34, 211, 238, .13), transparent 35%),
          radial-gradient(ellipse at 15% 75%, rgba(59, 130, 246, .08), transparent 35%),
          linear-gradient(135deg, #f8fbff 0%, #ffffff 48%, #effcff 100%);
      }

      .hero-eyebrow {
        animation: hero-rise .7s ease both;
      }

      .hero-heading {
        animation: hero-rise .8s ease .1s both;
      }

      .hero-description {
        animation: hero-rise .8s ease .2s both;
      }

      .hero-actions {
        animation: hero-rise .8s ease .3s both;
      }

      .hero-portrait-wrap {
        position: relative;
        width: min(100%, 410px);
        margin-inline: auto;
        animation: hero-portrait-enter .9s ease both;
      }

      .hero-portrait-frame {
        position: relative;
        padding: 10px;
        border-radius: 32px;
        background: linear-gradient(145deg, #ffffff, #dbeafe, #a5f3fc);
        box-shadow: 0 25px 70px rgba(37, 99, 235, .16);
        transform: rotate(2deg);
        transition: transform .45s ease, box-shadow .45s ease;
      }

      .hero-portrait-wrap:hover .hero-portrait-frame {
        transform: rotate(0deg) translateY(-4px);
        box-shadow: 0 32px 80px rgba(37, 99, 235, .22);
      }

      .hero-portrait-image {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 4.5;
        object-fit: cover;
        object-position: center;
        border-radius: 24px;
        background: #eaf4ff;
      }

      .hero-floating-badge {
        position: absolute;
        z-index: 4;
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 10px 13px;
        border: 1px solid rgba(255,255,255,.9);
        border-radius: 15px;
        background: rgba(255,255,255,.92);
        box-shadow: 0 10px 30px rgba(15,23,42,.1);
        backdrop-filter: blur(12px);
        animation: hero-float 4s ease-in-out infinite;
        transition: box-shadow .3s ease;
      }

      .hero-floating-badge:hover {
        box-shadow: 0 14px 35px rgba(37,99,235,.2);
      }

      .hero-badge-react {
        top: 12%;
        left: -10%;
      }

      .hero-badge-node {
        top: 34%;
        right: -12%;
        animation-delay: -1s;
      }

      .hero-badge-mongo {
        bottom: 25%;
        left: -12%;
        animation-delay: -2s;
      }

      .hero-badge-ts {
        bottom: 9%;
        right: -8%;
        animation-delay: -1.5s;
      }

      .hero-status-dot {
        position: relative;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
        flex-shrink: 0;
      }

      .hero-status-dot::after {
        content: "";
        position: absolute;
        inset: -4px;
        border: 1px solid #22c55e;
        border-radius: 50%;
        animation: hero-status-pulse 2s ease-out infinite;
      }

      .hero-skill-track {
        display: flex;
        width: max-content;
        animation: hero-marquee 38s linear infinite;
      }

      .hero-skill-marquee:hover .hero-skill-track {
        animation-play-state: paused;
      }

      .hero-skill-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-right: 12px;
        padding: 9px 13px;
        border: 1px solid #e5edf8;
        border-radius: 12px;
        background: rgba(255,255,255,.85);
        color: #475569;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        transition: all .25s ease;
      }

      .hero-skill-chip:hover {
        border-color: #93c5fd;
        background: #eff6ff;
        transform: translateY(-2px);
      }

      .hero-skill-marquee {
        overflow: hidden;
        width: 100%;
        mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      }

      @keyframes hero-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-9px); }
      }

      @keyframes hero-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @keyframes hero-rise {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes hero-portrait-enter {
        from { opacity: 0; transform: translateX(22px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes hero-status-pulse {
        0% { transform: scale(.7); opacity: 1; }
        100% { transform: scale(1.9); opacity: 0; }
      }

      @media (max-width: 767px) {
        .hero-portrait-wrap {
          width: min(78%, 320px);
          margin-top: 15px;
          margin-bottom: 15px;
        }

        .hero-portrait-frame {
          padding: 7px;
          border-radius: 25px;
        }

        .hero-portrait-image {
          border-radius: 19px;
        }

        .hero-floating-badge {
          gap: 6px;
          padding: 8px 10px;
          border-radius: 12px;
        }

        .hero-badge-react { left: -13%; }
        .hero-badge-node { right: -15%; }
        .hero-badge-mongo { left: -15%; }
        .hero-badge-ts { right: -12%; }
      }

      @media (max-width: 380px) {
        .hero-floating-badge {
          padding: 7px 8px;
        }

        .hero-floating-badge span {
          font-size: 10px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .hero-eyebrow,
        .hero-heading,
        .hero-description,
        .hero-actions,
        .hero-portrait-wrap,
        .hero-floating-badge,
        .hero-skill-track,
        .hero-status-dot::after {
          animation: none !important;
        }

        .hero-skill-track {
          flex-wrap: wrap;
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const FloatingBadge = ({ skillIndex, className }) => {
    const skill = skills[skillIndex];
    const Icon = skill.icon;

    return (
      <div className={`hero-floating-badge ${className}`}>
        <Icon size={23} color={skill.color} />
        <div>
          <p className="text-xs font-bold text-gray-900">
            {skill.name}
          </p>
          <p className="mt-0.5 text-[10px] text-gray-500">
            Technology
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="home"
      className="hero-premium relative flex min-h-screen items-center overflow-hidden pt-24 pb-12"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">

          {/* LEFT: Introduction */}
          <div className="order-2 space-y-7 lg:order-1">

            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="hero-status-dot" />
              <span className="text-xs font-semibold tracking-wide text-gray-700 sm:text-sm">
                FULLSTACK DEVELOPER
              </span>
              <Sparkles size={15} className="text-blue-500" />
            </div>

            <div className="hero-heading">
              <p className="mb-2 text-lg font-medium text-gray-600 sm:text-xl">
                Hi there, I'm
              </p>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                Pritam
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text pb-2 text-transparent">
                  Verma.
                </span>
              </h1>

              <h2 className="mt-3 text-xl font-semibold text-gray-700 sm:text-2xl">
                Building digital experiences
                <span className="text-blue-600"> that matter.</span>
              </h2>
            </div>

            <p className="hero-description max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Crafting seamless web experiences with modern technologies.
              Specialized in building responsive, user-centric applications
              that bridge the gap between design and functionality.
            </p>

            {/* Actions */}
            <div className="hero-actions flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Let's Talk
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600"
              >
                <Code2 size={17} />
                View Projects
              </button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Connect
              </span>

              <div className="h-px w-8 bg-gray-200" />

              <a
                href="https://github.com/PRITAMALWAR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/pritam-verma-45830328b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:thepritamverma@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* RIGHT: Profile portrait */}
          <div className="order-1 flex min-w-0 items-center justify-center lg:order-2">
            <div className="hero-portrait-wrap">

              {/* Decorative background rings */}
              <div className="pointer-events-none absolute -inset-6 rounded-[42px] border border-blue-200/50" />
              <div className="pointer-events-none absolute -inset-3 rounded-[37px] border border-cyan-200/60" />

              {/* Profile photo */}
              <div className="hero-portrait-frame">
                <img
                  src={mainImage}
                  alt="Pritam Verma - Fullstack Developer"
                  className="hero-portrait-image"
                />
              </div>

              {/* Floating technology cards */}
              <FloatingBadge
                skillIndex={featuredSkills[0]}
                className="hero-badge-react"
              />

              <FloatingBadge
                skillIndex={featuredSkills[1]}
                className="hero-badge-node"
              />

              <FloatingBadge
                skillIndex={featuredSkills[2]}
                className="hero-badge-mongo"
              />

              <FloatingBadge
                skillIndex={featuredSkills[3]}
                className="hero-badge-ts"
              />

              {/* Small decorative label */}
              <div className="absolute -bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white bg-white/95 px-4 py-2.5 shadow-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <Code2 size={15} />
                </span>
                <span className="text-xs font-bold text-gray-800">
                  Code. Create. Innovate.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* All skills: animated horizontal marquee */}
        <div className="mt-20 border-t border-blue-100/80 pt-7">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                My Tech Stack
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Technologies and tools I work with
              </p>
            </div>

            <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600">
              {skills.length} Skills & Tools
            </span>
          </div>

          <div className="hero-skill-marquee">
            <div className="hero-skill-track">
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="hero-skill-chip"
                  >
                    <Icon size={17} color={skill.color} />
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;














