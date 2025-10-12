// import { Code2, Rocket, Users } from 'lucide-react';

// const About = () => {
//   const highlights = [
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: 'Masai School Bengaluru, Karnataka',
//       description: 'Fullstack Web Development',
//     },
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: 'Raj Rishi Bhartrihari Matsya University (RRBMU)',
//       description: 'Bachelor of Arts',
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Rajesh Sr. Sec. School, Ramgarh (301026) Alwar',
//       description: '12th Mathematics (Science Stream – PCM)',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//          <div className="space-y-6">
//   <p className="text-gray-700 text-lg leading-relaxed">
//     Passionate and results-driven <strong>MERN Stack Developer</strong> with a solid foundation in
//     full-stack web development and a deep commitment to continuous learning and innovation. Skilled in
//     building scalable, user-friendly web applications using MongoDB, Express.js, React, and Node.js. I
//     take pride in writing clean, efficient code and delivering quality projects on time.
//   </p>
//   <p className="text-gray-700 text-lg leading-relaxed">
//     Experienced in building responsive, scalable web applications with clean code and strong
//     problem-solving skills. Quick learner of new tools and technologies, including Generative AI.
//     Strong team player with a focus on collaboration, adaptability, and continuous improvement.
//   </p>
//   <p className="text-gray-700 text-lg leading-relaxed">
//     My journey into tech began in high school with a strong foundation in science (PCM), where I achieved
//     a 92.20% score. That analytical mindset sparked my interest in coding and led me to enroll at{" "}
//     <strong>Masai School</strong>, where I've been honing my skills through intensive hands-on projects and
//     real-world problem-solving.
//   </p>
// </div>


//           <div className="space-y-6">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;












import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Masai School, Bengaluru, Karnataka',
      description: 'Fullstack Web Development',
      duration: 'Aug 2024 - Jul 2025',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Raj Rishi Bhartrihari Matsya University (RRBMU)',
      description: 'Bachelor of Arts',
      duration: '2021 - 2024',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Rajesh Sr. Sec. School, Ramgarh (301026), Alwar',
      description: '12th Mathematics (Science Stream – PCM)',
      grade: 'Grade: 92.20%',
      duration: 'Apr 2020 - Jun 2021',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Passionate and results-driven <strong>MERN Stack Developer</strong> with a solid foundation in
              full-stack web development and a deep commitment to continuous learning and innovation. Skilled in
              building scalable, user-friendly web applications using MongoDB, Express.js, React, and Node.js. I
              take pride in writing clean, efficient code and delivering quality projects on time.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Experienced in building responsive, scalable web applications with clean code and strong
              problem-solving skills. Quick learner of new tools and technologies, including Generative AI.
              Strong team player with a focus on collaboration, adaptability, and continuous improvement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey into tech began in high school with a strong foundation in science (PCM), where I achieved
              a 92.20% score. That analytical mindset sparked my interest in coding and led me to enroll at{' '}
              <strong>Masai School</strong>, where I've been honing my skills through intensive hands-on projects and
              real-world problem-solving.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                  {item.grade && (
                    <p className="text-sm text-gray-500 mt-1">{item.grade}</p>
                  )}
                  {item.duration && (
                    <p className="text-sm text-gray-500">{item.duration}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
