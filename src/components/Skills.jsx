// const Skills = () => {
//   const skills = [
//     'React.js',
//     'Node.js',
//     'Express.js',
//     'MongoDB',
//     'JavaScript (ES6+)',
//     'HTML5',
//     'CSS3',
//     'Tailwind CSS',
//     'Chakra UI',
//     'Redux',
//     'Context API',
//     'RESTful APIs',
//     'JWT',
//     'Firebase',
//     'Framer Motion',
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         <div className="max-w-5xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
//             <div className="flex flex-wrap gap-4 justify-center">
//               {skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="px-6 py-3 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full font-medium text-sm md:text-base hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default"
//                   style={{
//                     animationDelay: `${index * 0.05}s`,
//                   }}
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Continuously expanding my toolkit to stay at the forefront of web development.
//             Always eager to learn and master new technologies that enhance user experiences.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

























// const Skills = () => {
//   const skills = [
//     { name: 'React.js', gradient: 'from-pink-500 to-yellow-500' },
//     { name: 'Next.js', gradient: 'from-red-500 to-yellow-500' },
//     { name: 'Node.js', gradient: 'from-green-500 to-emerald-500' },
//     { name: 'Express.js', gradient: 'from-gray-600 to-gray-800' },
//     { name: "SQL", gradient: 'from-gray-600 to-gray-800' },
//     { name: 'MongoDB', gradient: 'from-green-700 to-lime-500' },
//     { name: 'Postgreql', gradient: 'from-green-700 to-lime-500' },
//     { name: 'JavaScript (ES6+)', gradient: 'from-yellow-400 to-orange-500' },
//     { name: 'Typescript', gradient: 'from-sky-400 to-cyan-500'},
//     { name: 'HTML5', gradient: 'from-red-500 to-orange-600' },
//     { name: 'CSS3', gradient: 'from-blue-500 to-indigo-500' },
//     { name: 'Tailwind CSS', gradient: 'from-sky-400 to-cyan-500' },
//     { name: 'Chakra UI', gradient: 'from-teal-400 to-green-400' },
//     { name: 'Redux', gradient: 'from-purple-600 to-indigo-600' },
//     { name: 'Context API', gradient: 'from-cyan-600 to-blue-400' },
//     { name: 'RESTful APIs', gradient: 'from-rose-400 to-pink-500' },
//     { name: 'JWT', gradient: 'from-yellow-500 to-amber-500' },
//     { name: 'Firebase', gradient: 'from-orange-400 to-yellow-500' },
//     { name: 'Framer Motion', gradient: 'from-fuchsia-500 to-purple-600' },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Skill Grid */}
//         <div className="max-w-5xl mx-auto">
//           <div className=" p-8 md:p-12 duration-300">
//             <div className="flex flex-wrap gap-4 justify-center">
//               {skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className={`px-6 py-3 text-white rounded-full font-medium text-sm md:text-base bg-gradient-to-br ${skill.gradient} hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
//                   style={{
//                     animationDelay: `${index * 0.05}s`,
//                   }}
//                 >
//                   {skill.name}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Paragraph */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             Continuously expanding my toolkit to stay at the forefront of web development.
//             Always eager to learn and master new technologies that enhance user experiences.
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
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: FaReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
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