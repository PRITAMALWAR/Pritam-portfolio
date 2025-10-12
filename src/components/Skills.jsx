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

























const Skills = () => {
  const skills = [
    { name: 'React.js', gradient: 'from-pink-500 to-yellow-500' },
    { name: 'Node.js', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', gradient: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', gradient: 'from-green-700 to-lime-500' },
    { name: 'JavaScript (ES6+)', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'HTML5', gradient: 'from-red-500 to-orange-600' },
    { name: 'CSS3', gradient: 'from-blue-500 to-indigo-500' },
    { name: 'Tailwind CSS', gradient: 'from-sky-400 to-cyan-500' },
    { name: 'Chakra UI', gradient: 'from-teal-400 to-green-400' },
    { name: 'Redux', gradient: 'from-purple-600 to-indigo-600' },
    { name: 'Context API', gradient: 'from-cyan-600 to-blue-400' },
    { name: 'RESTful APIs', gradient: 'from-rose-400 to-pink-500' },
    { name: 'JWT', gradient: 'from-yellow-500 to-amber-500' },
    { name: 'Firebase', gradient: 'from-orange-400 to-yellow-500' },
    { name: 'Framer Motion', gradient: 'from-fuchsia-500 to-purple-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Skill Grid */}
        <div className="max-w-5xl mx-auto">
          <div className=" p-8 md:p-12 duration-300">
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 text-white rounded-full font-medium text-sm md:text-base bg-gradient-to-br ${skill.gradient} hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Continuously expanding my toolkit to stay at the forefront of web development.
            Always eager to learn and master new technologies that enhance user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
