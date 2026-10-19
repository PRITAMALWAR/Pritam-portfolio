


import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Layers3,
} from "lucide-react";

import vermaXImg from "../assest/vermaX.png";
import eduTrackImg from "../assest/EduTrack.png";
import movieZoneImg from "../assest/moviezone.png";
import glowNextImg from "../assest/glowNext.png";
import SyncUpimage from "../assest/SyncUp-image.png";
import DocDeskImage from "../assest/DocDeskImage.png";
import BlogsImage from "../assest/blogsHub.png";
import crmDashboardImg from "../assest/crmDashboardImg.png";
import AutoKeyEnvImage from "../assest/autokey-env.png"

const projects = [
  {
  title: "AutoKey Env",
  category: "Developer Tools / npm Package",
  description:
    " Built My Own npm Package — autokey-env,lightweight Node.js utility for loading .env files, validating required environment variables, and accessing configuration through a simple API.",
  image: AutoKeyEnvImage,
  tags: [
    "JavaScript",
    "Node.js",
    "npm",
    "Environment Variables",
    "CommonJS",
    "ES Modules",
    "TypeScript",
    "Automated Testing",
  ],
  liveLink: "https://www.npmjs.com/package/autokey-env",
  githubLink: "https://github.com/PRITAMALWAR/autokey-env",
},
  {
    title: "SyncUp",
    category: "Real-Time Communication",
    description:
      "A feature-packed real-time chat app combining a sleek React UI with a powerful Node.js and Socket.io backend for seamless messaging.",
    image: SyncUpimage,
    tags: [
      "React",
      "Context API",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redis Adapter",
      "Multer",
      "Helmet",
    ],
    liveLink: "https://syncup-web.onrender.com/",
    githubLink: "https://github.com/PRITAMALWAR/SyncUp",
  },
  {
    title: "DocDesk",
    category: "Healthcare Platform",
    description:
      "A full-stack doctor appointment booking platform connecting patients with doctors, including appointment management, medical history, and feedback.",
    image: DocDeskImage,
    tags: [
      "React",
      "Context API",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    liveLink: "https://docdesk-frontend.onrender.com/",
    githubLink: "https://github.com/PRITAMALWAR/DocDesk",
  },
  {
    title: "VermaX",
    category: "Full-Stack E-Commerce",
    description:
      "A full-stack e-commerce platform featuring secure JWT authentication, role-based access, a real-time cart system, and responsive UI.",
    image: vermaXImg,
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "CORS",
    ],
    liveLink: "https://celadon-tiramisu-301e89.netlify.app/",
    githubLink: "https://github.com/PRITAMALWAR/VermaX",
  },
  {
    title: "CRM System Dashboard",
    category: "Dashboard & Analytics",
    description:
      "A responsive CRM dashboard with customer CRUD operations, search, filtering, pagination, analytics charts, and Local Storage persistence.",
    image: crmDashboardImg,
    tags: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "JavaScript",
      "Context API",
      "React Router",
      "Recharts",
      "Local Storage",
    ],
    liveLink: "https://crm-dashboard-system.netlify.app/",
    githubLink: "https://github.com/PRITAMALWAR/crm-dashboard",
  },
  {
    title: "EduTrack",
    category: "Education Platform",
    description:
      "A course management system with secure authentication, instructor and student functionality, pagination, sorting, and filtering.",
    image: eduTrackImg,
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "Context API",
    ],
    liveLink: "https://transcendent-centaur-6f5f65.netlify.app/",
    githubLink: "https://github.com/PRITAMALWAR/EduTrack",
  },
  {
    title: "BlogHub",
    category: "Full-Stack Blogging",
    description:
      "A full-stack blogging platform built with secure JWT authentication and Google OAuth for a smooth content publishing experience.",
    image: BlogsImage,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google OAuth",
      "Passport.js",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "REST API",
    ],
    liveLink: "https://bloghub-1-w50n.onrender.com/",
    githubLink: "https://github.com/PRITAMALWAR/BlogHub",
  },
  {
    title: "MovieZone",
    category: "Movie Discovery",
    description:
      "A responsive movie discovery platform with real-time search, genre filters, sorting, pagination, and a persistent favorites system.",
    image: movieZoneImg,
    tags: ["HTML", "CSS", "JavaScript", "JSON", "LocalStorage"],
    liveLink: "https://prismatic-unicorn-1614a0.netlify.app/",
    githubLink: "https://github.com/PRITAMALWAR/MovieZone",
  },
  {
    title: "GlowNest",
    category: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with authentication, product browsing, cart management, Local Storage persistence, and toast notifications.",
    image: glowNextImg,
    tags: [
      "React",
      "Context API",
      "React Router",
      "Tailwind CSS",
      "LocalStorage",
    ],
    liveLink: "https://glittery-donut-e66996.netlify.app/",
    githubLink: "https://github.com/PRITAMALWAR/GlowNest-Ecom",
  },
];

function ProjectActions({ project }) {
  return (
    <div className="flex gap-2.5">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <ExternalLink size={16} />
        Live Demo
      </a>

      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
      >
        <Github size={16} />
        View Code
      </a>
    </div>
  );
}

function ProjectTags({ tags, limit = 5 }) {
  const visibleTags = tags.slice(0, limit);
  const remaining = tags.length - visibleTags.length;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleTags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700"
        >
          {tag}
        </span>
      ))}

      {remaining > 0 && (
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
          +{remaining} more
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const goPrevious = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="projects"
      className="projects-section overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="projects-heading mb-7 text-center sm:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm sm:text-xs">
            <FolderKanban size={14} />
            My Portfolio
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 sm:mt-4 sm:w-20" />

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500 sm:mt-5 sm:text-base sm:leading-7">
            A selection of projects showcasing my skills in full-stack
            development, responsive UI, and modern web technologies.
          </p>
        </div>

        {/* MOBILE: One project at a time */}
        <div className="mobile-project-view mx-auto max-w-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <Layers3 size={14} />
              PROJECT SHOWCASE
            </span>

            <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-extrabold text-blue-700">
              {String(activeProject + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <article
            key={project.title}
            className="mobile-project-card overflow-hidden rounded-3xl border border-white bg-white shadow-[0_15px_45px_rgba(30,64,175,0.12)]"
          >
            {/* Project image */}
            <div className="mobile-project-image relative overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent p-3 pt-12">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project details */}
            <div className="mobile-project-content p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-xl font-extrabold leading-tight text-slate-900">
                  {project.title}
                </h3>

                <span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                  Full Stack
                </span>
              </div>

              <p className="mobile-project-description mb-3 text-xs leading-5 text-slate-600">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  Built With
                </p>
                <ProjectTags tags={project.tags} limit={5} />
              </div>

              <ProjectActions project={project} />
            </div>
          </article>

          {/* Previous / Next controls */}
          <div className="mt-4 rounded-2xl border border-slate-100 bg-white/90 p-3 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous project"
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 active:scale-95"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <div className="text-center">
                <p className="text-xs font-extrabold text-slate-800">
                  {activeProject + 1} of {projects.length}
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400">
                  Explore projects
                </p>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-100 transition hover:shadow-lg active:scale-95"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Tap a number to jump to that project */}
            <div className="mt-3 flex justify-center gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  aria-label={`View ${item.title}`}
                  aria-current={activeProject === index ? "step" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeProject === index
                      ? "w-7 bg-gradient-to-r from-blue-600 to-cyan-500"
                      : "w-2 bg-slate-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-[10px] text-slate-400">
            Select a dot or tap Next to explore my work
          </p>
        </div>

        {/* DESKTOP: Original multi-column project grid */}
        <div className="desktop-project-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={`${item.title} project preview`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-blue-700 shadow-sm backdrop-blur">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mb-5">
                  <ProjectTags tags={item.tags} limit={7} />
                </div>

                <ProjectActions project={item} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .mobile-project-view {
          display: block;
        }

        .desktop-project-grid {
          display: none;
        }

        .mobile-project-card {
          animation: project-card-enter 260ms ease-out both;
        }

        .mobile-project-image {
          height: clamp(155px, 25vh, 220px);
        }

        @keyframes project-card-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          .mobile-project-view {
            display: none;
          }

          .desktop-project-grid {
            display: grid;
          }
        }

        @media (max-width: 380px) {
          .projects-section {
            padding-top: 20px;
            padding-bottom: 24px;
          }

          .projects-heading {
            margin-bottom: 16px;
          }

          .projects-heading h2 {
            font-size: 26px;
          }

          .mobile-project-image {
            height: clamp(125px, 21vh, 175px);
          }

          .mobile-project-content {
            padding: 12px;
          }

          .mobile-project-content h3 {
            font-size: 18px;
          }

          .mobile-project-description {
            font-size: 11px;
            line-height: 1.4;
          }

          .mobile-project-content a {
            padding: 10px 7px;
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-project-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}










































// import { ExternalLink, Github } from "lucide-react";
// import vermaXImg from "../assest/vermaX.png";
// import eduTrackImg from "../assest/EduTrack.png";
// import movieZoneImg from "../assest/moviezone.png";
// import glowNextImg from "../assest/glowNext.png";
// import SyncUpimage from "../assest/SyncUp-image.png";
// import DocDeskImage from "../assest/DocDeskImage.png";
// import BlogsImage from "../assest/blogsHub.png";
// import crmDashboardImg from "../assest/crmDashboardImg.png";


// const Projects = () => {
//   const projects = [
//     {
//       title: "SyncUp",
//       description:
//         "SyncUp is a feature-packed, real-time chat app combining sleek React UI with a powerful Node.js & Socket.io backend for seamless, secure messaging anywhere.",
//       image: SyncUpimage,
//       tags: [
//         "React",
//         "Context API",
//         "Tailwind CSS",
//         "Lucide React",
//         "Netlify",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Socket.io",
//         "helmet",
//         "multer",
//         "Socket.io + Redis adapter",
//       ],

//       liveLink: "https://syncup-web.onrender.com/",
//       githubLink: "https://github.com/PRITAMALWAR/SyncUp",
//     },
//     {
//       title: "DocDesk",
//       description:
//         "DocDesk is a full-stack doctor appointment booking platform built with the MERN stack, connecting patients with doctors for seamless appointment management, medical history tracking, and feedback collection.",
//       image: DocDeskImage,
//       tags: [
//         "React",
//         "Context API",
//         "Tailwind CSS",
//         "React Router",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Mongoose",
//         "JWT",
//         "bcryptjs",
//         "Render",
//       ],
//       liveLink: "https://docdesk-frontend.onrender.com/",
//       githubLink: "https://github.com/PRITAMALWAR/DocDesk",
//     },
//     {
//       title: "VermaX",
//       description:
//         "Full-stack e-commerce platform using the MERN stack with secure JWT auth, role-based access, and a real-time cart system. Designed a responsive, engaging UI with Tailwind CSS and Framer Motion, seamlessly integrated via RESTful APIs.",
//       image: vermaXImg,
//       tags: [
//         "React",
//         "Tailwind CSS",
//         "Framer Motion",
//         "Node.js",
//         "Express",
//         "MongoDB",
//         "Mongoose",
//         "JWT",
//         "CORS",
//       ],
//       liveLink: "https://celadon-tiramisu-301e89.netlify.app/",
//       githubLink: "https://github.com/PRITAMALWAR/VermaX",
//     },
//     {
//       title: "CRM System Dashboard",
//       description:
//         "A modern and responsive Customer Relationship Management (CRM) Dashboard built with React.js, Vite, Tailwind CSS, and shadcn/ui. It provides complete customer management with CRUD operations, search, filtering, pagination, analytics charts, and Local Storage persistence, delivering a clean and responsive user experience without requiring a backend.",
//       image: crmDashboardImg, 
//       tags: [
//         "React.js",
//         "Vite",
//         "Tailwind CSS",
//         "shadcn/ui",
//         "JavaScript",
//         "Context API",
//         "React Router",
//         "Recharts",
//         "Local Storage",
//       ],
//       liveLink: "https://crm-dashboard-system.netlify.app/",
//       githubLink: "https://github.com/PRITAMALWAR/crm-dashboard",
//     },
//     {
//       title: "EduTrack",
//       description:
//         "EduTrack, a full-featured course management system using React.js and Tailwind CSS with secure authentication and instructor/student functionalities. Enhanced UX with REST APIs, pagination, sorting, filtering, and a responsive Framer Motion-powered dashboard deployed on Netlify.",
//       image: eduTrackImg,
//       tags: [
//         "React.js",
//         "Tailwind CSS",
//         "JavaScript",
//         "Framer Motion",
//         "Context API",
//       ],
//       liveLink: "https://transcendent-centaur-6f5f65.netlify.app/",
//       githubLink: "https://github.com/PRITAMALWAR/EduTrack",
//     },
//     {
//       title: "BlogHub",
//       description:
//         "Built a full-stack Blog Platform using React.js, Node.js, Express.js, and MongoDB with secure JWT and Google OAuth authentication.",
//       image: BlogsImage,
//       tags: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Mongoose",
//         "JWT",
//         "Google OAuth",
//         "Passport.js",
//         "Tailwind CSS",
//         "Axios",
//         "React Router DOM ",
//         "REST API",
//       ],
//       liveLink: "https://bloghub-1-w50n.onrender.com/",
//       githubLink: "https://github.com/PRITAMALWAR/BlogHub",
//     },
//     {
//       title: "MovieZone",
//       description:
//         "fully responsive and feature-rich movie discovery platform built with vanilla HTML, CSS, and JavaScript. Includes multi-page navigation, real-time search, advanced genre filtering, multiple sorting options, dynamic pagination, and a persistent favorites system powered by LocalStorage. Features a mobile-first UI, dynamic content rendering, and clean modern design.",
//       image: movieZoneImg,
//       tags: ["HTML", "CSS", "JavaScript", "JSON", "LocalStorage"],
//       liveLink: "https://prismatic-unicorn-1614a0.netlify.app/",
//       githubLink: "https://github.com/PRITAMALWAR/MovieZone",
//     },
//     {
//       title: "GlowNest - E-Commerce Platform",
//       description:
//         "GlowNest is a fully featured modern e-commerce platform built with React, React Router, Tailwind CSS, and the Context API. It includes user authentication, product browsing, a complete cart system with LocalStorage persistence, toast notifications, and a clean, responsive UI.",
//       image: glowNextImg,
//       tags: [
//         "React",
//         "Context API",
//         "React Router",
//         "Tailwind CSS",
//         "LocalStorage",
//       ],
//       liveLink: "https://glittery-donut-e66996.netlify.app/",
//       githubLink: "https://github.com/PRITAMALWAR/GlowNest-Ecom",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//           <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
//             Showcasing my best work in fullstack development
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="relative overflow-hidden h-48">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                   >
//                     <ExternalLink size={16} />
//                     <span className="text-sm font-medium">Live Demo</span>
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
//                   >
//                     <Github size={16} />
//                     <span className="text-sm font-medium">Code</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
