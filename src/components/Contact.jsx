import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL ME",
      value: "thepritamverma@gmail.com",
      link: "mailto:thepritamverma@gmail.com",
      description: "Let's talk about your ideas",
    },
    {
      icon: Phone,
      title: "CALL ME",
      value: "+91 8209318181",
      link: "tel:+918209318181",
      description: "Let's have a conversation",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Alwar, Rajasthan, India",
      link: null,
      description: "Based in India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-wider text-blue-700 shadow-sm">
            <Sparkles size={15} />
            LET'S CONNECT
          </span>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main Contact Panel */}
        <div className="overflow-hidden rounded-3xl border border-white bg-white/70 shadow-xl shadow-blue-100/50 backdrop-blur-sm">

          {/* Intro Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative max-w-3xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner">
                <Mail size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                Have something in mind?
              </p>

              <h3 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                Let's work together.
              </h3>

              <p className="max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
                Always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Drop me a message
                and let's create something amazing together!
              </p>

              <a
                href="mailto:thepritamverma@gmail.com"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Let's Talk
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 gap-5 p-6 sm:p-8 md:grid-cols-3 lg:p-10">
            {contactInfo.map((info) => {
              const Icon = info.icon;

              const cardContent = (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    {info.link && (
                      <ArrowUpRight
                        size={19}
                        className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                      />
                    )}
                  </div>

                  <p className="mb-2 text-xs font-bold tracking-[0.15em] text-blue-600">
                    {info.title}
                  </p>

                  <p className="mb-2 break-words text-base font-bold text-gray-900 transition-colors group-hover:text-blue-700 sm:text-lg">
                    {info.value}
                  </p>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {info.description}
                  </p>
                </>
              );

              const cardClass =
                "group block min-w-0 rounded-2xl border border-blue-100/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-100/60 sm:p-6";

              return info.link ? (
                <a
                  key={info.title}
                  href={info.link}
                  className={cardClass}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={info.title} className={cardClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Text */}
        <p className="mt-10 text-center text-sm font-medium text-gray-500">
          Have an idea? <span className="text-blue-700">I'd love to hear about it.</span>
        </p>
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

