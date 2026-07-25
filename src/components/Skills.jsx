

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































import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaMicrosoft,
  FaGoogle,
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

const Skills = () => {
  const skills = [
    { name: "React.js", icon: FaReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "SQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "Context API", icon: FaReact, color: "text-cyan-500" },
    { name: "RESTful APIs", icon: TbApi, color: "text-pink-500" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-orange-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-600" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },

    // Productivity Tools
    { name: "MS Word", icon: FaMicrosoft, color: "text-blue-700" },
    { name: "MS Excel", icon: FaMicrosoft, color: "text-green-700" },
    { name: "Google Sheets", icon: FaGoogle, color: "text-green-600" },
    { name: "Gmail", icon: SiGmail, color: "text-red-500" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <Icon className={`text-3xl ${skill.color}`} />
                <span className="font-semibold text-gray-700">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Continuously expanding my toolkit to stay at the forefront of web
            development. Passionate about building scalable, responsive, and
            user-friendly applications while exploring modern technologies and
            best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;