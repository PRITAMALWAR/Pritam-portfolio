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






import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'thepritamverma@gmail.com',
      link: 'mailto:thepritamverma@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 8209318181',
      link: 'tel:+918209318181',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Alwar,Rajasthan,India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Drop me a message and let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.title}</p>
                    <p className="text-gray-900 font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="User Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="mail@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

