
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Education", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1LTfljuU4qDYnivizXgucWpMM4mUlod9S/view?usp=sharing";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-blue-100 bg-white/95 shadow-md shadow-blue-100/40 backdrop-blur-xl"
          : "border-blue-100/60 bg-gradient-to-r from-blue-50/95 via-white/95 to-cyan-50/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent transition-transform duration-300 hover:scale-105 sm:text-5xl"
          >
            𝒫𝓇𝒾𝓉𝒶𝓂
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="relative py-2 font-semibold text-gray-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-all after:duration-300 hover:text-blue-700 hover:after:w-full"
              >
                {link.name}
              </button>
            ))}

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-200/70"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-blue-100 bg-white p-2 text-blue-700 shadow-sm transition-colors duration-300 hover:bg-blue-50 md:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/90 shadow-lg shadow-blue-100/30 md:hidden">
          <div className="space-y-2 px-4 pb-5 pt-3 sm:px-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="block w-full rounded-xl px-4 py-3 text-left font-medium text-gray-700 transition-all duration-300 hover:bg-blue-100/70 hover:text-blue-700"
              >
                {link.name}
              </button>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center font-semibold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:shadow-lg"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
































// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Education', href: '#about', color: 'text-pink-500' },
//     { name: 'Skills', href: '#skills', color: 'text-purple-500' },
//     { name: 'Projects', href: '#projects', color: 'text-green-500' },
//     { name: 'Contact', href: '#contact', color: 'text-yellow-500' },
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-md'
//           : 'bg-gradient-to-r from-blue-50 to-cyan-50'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div
//             className={`text-5xl font-bold bg-clip-text ${
//               isScrolled
//                 ? 'text-blue-700'
//                 : 'text-transparent bg-gradient-to-r from-blue-600 to-cyan-500'
//             }`}
//           >
//             𝒫𝓇𝒾𝓉𝒶𝓂
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className={`font-semibold transition duration-300 hover:scale-105 ${
//                   isScrolled
//                     ? `${link.color} hover:underline`
//                     : `text-gray-700 hover:${link.color}`
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}

//             <a
//               href="https://drive.google.com/file/d/1LTfljuU4qDYnivizXgucWpMM4mUlod9S/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//             >
//               Resume
//             </a>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             className={`md:hidden ${
//               isScrolled ? 'text-blue-700' : 'text-gray-700'
//             }`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gradient-to-r from-blue-50 to-cyan-50">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition duration-300 hover:bg-gray-100 ${link.color}`}
//               >
//                 {link.name}
//               </button>
//             ))}
//             <a
//               href="/https://drive.google.com/file/d/1mmIm05qMj1MWk0ZIsz70zYdbGydh6YZN/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
//             >
//               Resume
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
