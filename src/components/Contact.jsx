import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL ME",
      value: "thepritamverma@gmail.com",
      link: "mailto:thepritamverma@gmail.com",
      description: "Let's talk about your ideas",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-300",
    },
    {
      icon: Phone,
      title: "CALL ME",
      value: "+91 8209318181",
      link: "tel:+918209318181",
      description: "Let's have a conversation",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "group-hover:border-cyan-300",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Alwar, Rajasthan, India",
      link: null,
      description: "Based in India",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-300",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Modern split heading */}
        <div className="mb-10 grid items-end gap-5 md:grid-cols-2 md:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-700 shadow-sm">
              <Sparkles size={14} />
              LET'S CONNECT
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Get In
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Touch.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-600 md:justify-self-end md:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Compact contact panel */}
        <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-xl shadow-blue-100/40 backdrop-blur-sm">
          {/* Gradient introduction */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-7 text-white sm:px-9 sm:py-9">
            <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -right-1 -top-9 h-36 w-36 rounded-full border border-white/15" />

            <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  Have something in mind?
                </p>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Let's work together.
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Let's create something amazing together!
                </p>
              </div>

              <a
                href="mailto:thepritamverma@gmail.com"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:self-center"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
            {contactInfo.map((info) => {
              const Icon = info.icon;

              const content = (
                <div className="flex items-start gap-3.5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${info.bg} ${info.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-gray-500">
                      {info.title}
                    </p>

                    <p className="mt-1 break-words text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                      {info.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {info.description}
                    </p>
                  </div>

                  {info.link && (
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    />
                  )}
                </div>
              );

              const className = `group flex min-w-0 items-center rounded-2xl border border-blue-100/80 bg-white/90 p-4 transition-all duration-300 hover:-translate-y-1 ${info.border} hover:shadow-md`;

              return info.link ? (
                <a
                  key={info.title}
                  href={info.link}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={info.title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;








// import { useState } from 'react';
// import { Mail, MapPin, Phone, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email',
//       value: 'thepritamverma@gmail.com',
//       link: 'thepritamverma@gmail.com',
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Phone',
//       value: '+91 8209318181',
//       link: 'tel:+91 8209318181',
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Location',
//       value: 'Alwar, India',
//       link: '#',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//           <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Let's work together
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 I'm always open to discussing new projects, creative ideas, or opportunities
//                 to be part of your vision. Drop me a message and let's create something amazing together!
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={index}
//                   href={info.link}
//                   className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
//                 >
//                   <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">{info.title}</p>
//                     <p className="text-gray-900 font-semibold">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//               >
//                 <Send size={20} />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






// import { useState } from 'react';
// import { Mail, MapPin, Phone, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email',
//       value: 'thepritamverma@gmail.com',
//       link: 'mailto:thepritamverma@gmail.com',
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Phone',
//       value: '+91 8209318181',
//       link: 'tel:+918209318181',
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Location',
//       value: 'Alwar,Rajasthan,India',
//       link: '#',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
//           <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Let's work together
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Always open to discussing new projects, creative ideas, or opportunities
//                 to be part of your vision. Drop me a message and let's create something amazing together!
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={index}
//                   href={info.link}
//                   className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
//                 >
//                   <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">{info.title}</p>
//                     <p className="text-gray-900 font-semibold">{info.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
//                   placeholder="User Name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
//                   placeholder="mail@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//               >
//                 <Send size={20} />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

