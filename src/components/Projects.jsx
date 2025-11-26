import { ExternalLink, Github } from "lucide-react";
import vermaXImg from "../assest/vermaX.png";
import eduTrackImg from "../assest/EduTrack.png";
import movieZoneImg from "../assest/moviezone.png";
import glowNextImg from "../assest/glowNext.png";
import SyncUpimage from "../assest/SyncUp-image.png";
import DocDeskImage from "../assest/DocDeskImage.png";

const Projects = () => {
  const projects = [
    {
      title: "SyncUp",
      description:
        "SyncUp is a feature-packed, real-time chat app combining sleek React UI with a powerful Node.js & Socket.io backend for seamless, secure messaging anywhere.",
      image: SyncUpimage,
      tags: [
        "React",
        "Context API",
        "Tailwind CSS",
        "Lucide React",
        "Netlify",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "helmet",
        "multer",
        "Socket.io + Redis adapter",
      ],

      liveLink: "https://syncup-web.onrender.com/",
      githubLink: "https://github.com/PRITAMALWAR/SyncUp",
    },
    {
      title: "DocDesk",
      description:
        "DocDesk is a full-stack doctor appointment booking platform built with the MERN stack, connecting patients with doctors for seamless appointment management, medical history tracking, and feedback collection.",
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
        "Render",
      ],
      liveLink: "https://docdesk-frontend.onrender.com/",
      githubLink: "https://github.com/PRITAMALWAR/DocDesk",
    },
    {
      title: "VermaX",
      description:
        "Full-stack e-commerce platform using the MERN stack with secure JWT auth, role-based access, and a real-time cart system. Designed a responsive, engaging UI with Tailwind CSS and Framer Motion, seamlessly integrated via RESTful APIs.",
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
      title: "EduTrack",
      description:
        "EduTrack, a full-featured course management system using React.js and Tailwind CSS with secure authentication and instructor/student functionalities. Enhanced UX with REST APIs, pagination, sorting, filtering, and a responsive Framer Motion-powered dashboard deployed on Netlify.",
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
      title: "MovieZone",
      description:
        "fully responsive and feature-rich movie discovery platform built with vanilla HTML, CSS, and JavaScript. Includes multi-page navigation, real-time search, advanced genre filtering, multiple sorting options, dynamic pagination, and a persistent favorites system powered by LocalStorage. Features a mobile-first UI, dynamic content rendering, and clean modern design.",
      image: movieZoneImg,
      tags: ["HTML", "CSS", "JavaScript", "JSON", "LocalStorage"],
      liveLink: "https://prismatic-unicorn-1614a0.netlify.app/",
      githubLink: "https://github.com/PRITAMALWAR/MovieZone",
    },
    {
      title: "GlowNest - E-Commerce Platform",
      description:
        "GlowNest is a fully featured modern e-commerce platform built with React, React Router, Tailwind CSS, and the Context API. It includes user authentication, product browsing, a complete cart system with LocalStorage persistence, toast notifications, and a clean, responsive UI.",
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing my best work in fullstack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
