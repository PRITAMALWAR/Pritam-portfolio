
import {
  GraduationCap,
  Code2,
  Rocket,
  Users,
  CalendarDays,
  Award,
  Sparkles,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Suresh Gyan Vihar University",
      description:
        "Master of Computer Applications (MCA), AI & ML | Software Development",
      duration: "2026 - 2028",
      category: "POSTGRADUATE",
    },
    {
      icon: Code2,
      title: "Masai School, Bengaluru, Karnataka",
      description: "Fullstack Web Development",
      duration: "Aug 2024 - Jul 2025",
      category: "PROFESSIONAL TRAINING",
    },
    {
      icon: Rocket,
      title: "Raj Rishi Bhartrihari Matsya University (RRBMU)",
      description: "Bachelor of Arts",
      grade: "Grade: First Division ",
      duration: "2021 - 2024",
      category: "UNDERGRADUATE",
    },
    {
      icon: Users,
      title: "Rajesh Sr. Sec. School, Ramgarh (301026), Alwar",
      description: "12th Mathematics (Science Stream – PCM)",
      grade: "Grade: 92.20%",
      duration: "2021",
      category: "SENIOR SECONDARY",
    },
     {
      icon: Users,
      title: "Saini Sec. School, Ramgarh (301026), Alwar",
      description: "10th",
      grade: "Grade: 77.17%",
      duration: "2019",
      category: "SECONDARY",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Professional heading */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              My Background
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            My academic qualifications and professional development
            background.
          </p>
        </div>

        {/* Education list */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-blue-300 via-cyan-300 to-blue-100" />

          <div className="space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative pl-12 sm:pl-14"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* Education card */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {/* Icon block */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:ring-transparent">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Main details */}
                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-blue-700">
                            {item.category}
                          </span>

                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                            <CalendarDays className="h-3.5 w-3.5 text-blue-500" />
                            {item.duration}
                          </span>
                        </div>

                        <h3 className="text-base font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {item.description}
                        </p>

                        {item.grade && (
                          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
                            <Award className="h-4 w-4" />
                            {item.grade}
                          </div>
                        )}
                      </div>

                      {/* Sequence number */}
                      <span className="hidden text-2xl font-bold tabular-nums text-gray-200 transition-colors duration-300 group-hover:text-cyan-200 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-5 h-px bg-gray-100">
                      <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;






























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












// import {GraduationCap, Code2, Rocket, Users } from 'lucide-react';

// const About = () => {
// const highlights = [
//     {
//       icon: <GraduationCap className="w-8 h-8" />, // Don't forget to import GraduationCap
//       title: 'Suresh Gyan Vihar University',
//       description: 'Master of Computer Applications (MCA), AI & ML | Software Development',
//       duration: '2026 - 2028',
//     },
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: 'Masai School, Bengaluru, Karnataka',
//       description: 'Fullstack Web Development',
//       duration: 'Aug 2024 - Jul 2025',
//     },
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: 'Raj Rishi Bhartrihari Matsya University (RRBMU)',
//       description: 'Bachelor of Arts',
//       duration: '2021 - 2024',
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Rajesh Sr. Sec. School, Ramgarh (301026), Alwar',
//       description: '12th Mathematics (Science Stream – PCM)',
//       grade: 'Grade: 92.20%',
//       duration: 'Apr 2020 - Jun 2021',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Description */}
//           <div className="space-y-6">
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Passionate and results-driven <strong>MERN Stack Developer</strong> with a solid foundation in
//               full-stack web development and a deep commitment to continuous learning and innovation. Skilled in
//               building scalable, user-friendly web applications using MongoDB, Express.js, React, and Node.js. I
//               take pride in writing clean, efficient code and delivering quality projects on time.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Experienced in building responsive, scalable web applications with clean code and strong
//               problem-solving skills. Quick learner of new tools and technologies, including Generative AI.
//               Strong team player with a focus on collaboration, adaptability, and continuous improvement.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               My journey into tech began in high school with a strong foundation in science (PCM), where I achieved
//               a 92.20% score. That analytical mindset sparked my interest in coding and led me to enroll at{' '}
//               <strong>Masai School</strong>, where I've been honing my skills through intensive hands-on projects and
//               real-world problem-solving.
//             </p>
//           </div>

//           {/* Right: Highlights */}
//           <div className="space-y-6">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700">{item.description}</p>
//                   {item.grade && (
//                     <p className="text-sm text-gray-500 mt-1">{item.grade}</p>
//                   )}
//                   {item.duration && (
//                     <p className="text-sm text-gray-500">{item.duration}</p>
//                   )}
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














// =====================
// import {
//   GraduationCap,
//   Code2,
//   Rocket,
//   Users,
//   CalendarDays,
//   Award,
//   Sparkles,
//   ArrowUpRight,
// } from "lucide-react";

// const About = () => {
//   const highlights = [
//     {
//       icon: GraduationCap,
//       title: "Suresh Gyan Vihar University",
//       description:
//         "Master of Computer Applications (MCA), AI & ML | Software Development",
//       duration: "2026 - 2028",
//       color: "from-blue-600 to-cyan-500",
//     },
//     {
//       icon: Code2,
//       title: "Masai School, Bengaluru, Karnataka",
//       description: "Fullstack Web Development",
//       duration: "Aug 2024 - Jul 2025",
//       color: "from-cyan-600 to-blue-500",
//     },
//     {
//       icon: Rocket,
//       title: "Raj Rishi Bhartrihari Matsya University (RRBMU)",
//       description: "Bachelor of Arts",
//       duration: "2021 - 2024",
//       color: "from-blue-500 to-indigo-500",
//     },
//     {
//       icon: Users,
//       title: "Rajesh Sr. Sec. School, Ramgarh (301026), Alwar",
//       description: "12th Mathematics (Science Stream – PCM)",
//       grade: "Grade: 92.20%",
//       duration: "Apr 2020 - Jun 2021",
//       color: "from-cyan-500 to-teal-500",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
//     >
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

//       <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

//         {/* Section heading */}
//         <div className="mb-14 text-center sm:mb-16">
//           <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-700">
//             <Sparkles className="h-4 w-4" />
//             MY QUALIFICATIONS
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//             Education{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               & Learning
//             </span>
//           </h2>

//           <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
//         </div>

//         {/* Education timeline */}
//         <div className="relative">

//           {/* Timeline connector */}
//           <div className="absolute bottom-12 left-6 top-10 hidden w-px bg-gradient-to-b from-blue-400 via-cyan-400 to-cyan-100 sm:block" />

//           <div className="space-y-6">
//             {highlights.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group relative rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-blue-100/70 sm:p-7"
//                 >
//                   <div className="flex items-start gap-4 sm:gap-6">

//                     {/* Number and icon */}
//                     <div className="relative z-10 shrink-0">
//                       <div
//                         className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14`}
//                       >
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-bold text-blue-700">
//                         {String(index + 1).padStart(2, "0")}
//                       </div>
//                     </div>

//                     {/* Education details */}
//                     <div className="min-w-0 flex-1">

//                       {/* Duration */}
//                       <div className="mb-3 flex flex-wrap items-center gap-2">
//                         <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
//                           Education
//                         </span>

//                         <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1 text-[11px] font-medium text-gray-600 sm:text-xs">
//                           <CalendarDays className="h-3.5 w-3.5 text-blue-600" />
//                           {item.duration}
//                         </span>
//                       </div>

//                       <h3 className="text-base font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
//                         {item.description}
//                       </p>

//                       {/* Grade */}
//                       {item.grade && (
//                         <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
//                           <Award className="h-4 w-4" />
//                           {item.grade}
//                         </div>
//                       )}

//                       {/* Hover accent */}
//                       <div
//                         className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-20`}
//                       />
//                     </div>

//                     {/* Decorative arrow */}
//                     <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 text-blue-500 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white sm:flex">
//                       <ArrowUpRight className="h-5 w-5" />
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

