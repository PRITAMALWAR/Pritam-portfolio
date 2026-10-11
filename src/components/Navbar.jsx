
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
  Code2,
  FolderKanban,
  Mail,
  FileText,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Education", href: "#about", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const resumeUrl =
    "https://drive.google.com/file/d/1LTfljuU4qDYnivizXgucWpMM4mUlod9S/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-blue-100 bg-white/95 shadow-md shadow-blue-100/40 backdrop-blur-xl"
            : "border-blue-100/60 bg-gradient-to-r from-blue-50/95 via-white/95 to-cyan-50/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* LOGO */}
            <button
              type="button"
              onClick={goToTop}
              aria-label="Scroll to top"
              className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 hover:scale-105 sm:text-5xl"
            >
              𝒫𝓇𝒾𝓉𝒶𝓂
            </button>

            {/* DESKTOP NAVIGATION */}
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

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-200/70"
              >
                Resume
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm transition hover:bg-blue-50 active:scale-95 md:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* DIMMED BACKGROUND */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/35 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* COMPACT RIGHT-SIDE FLOATING MENU */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`mobile-menu-drawer fixed right-3 top-[76px] z-[70] flex max-h-[calc(100dvh-100px)] w-[min(78vw,300px)] flex-col overflow-y-auto rounded-3xl border border-white/80 bg-white/95 shadow-2xl shadow-blue-950/20 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[120%] opacity-0"
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-blue-100/80 px-4 py-3">
          <div>
            <p className="text-lg font-extrabold text-slate-900">
              𝒫𝓇𝒾𝓉𝒶𝓂<span className="text-blue-600">.</span>
            </p>
            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Quick Navigation
            </p>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 active:scale-95"
          >
            <X size={18} />
          </button>
        </div>

        {/* COMPACT INTRO CARD */}
        <div className="px-3 pt-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-3 text-white shadow-md shadow-blue-200/60">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15">
                <Code2 size={19} />
              </div>

              <div>
                <p className="text-xs font-extrabold">
                  Explore My Portfolio
                </p>
                <p className="mt-0.5 text-[9px] text-blue-50">
                  Build · Create · Connect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="px-3 pt-4">
          <p className="mb-2 px-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
            Menu
          </p>

          <div className="space-y-1.5">
            {navLinks.map((link, index) => {
              const Icon = link.icon;

              const subtitles = [
                "My background & education",
                "Technologies & expertise",
                "Selected work & demos",
                "Let's connect",
              ];

              return (
                <button
                  key={link.name}
                  type="button"
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex w-full items-center gap-2.5 rounded-xl border border-transparent bg-white/70 p-2.5 text-left transition-all duration-200 hover:border-blue-100 hover:bg-white hover:shadow-sm active:scale-[0.98]"
                  style={{
                    transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                  }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                    <Icon size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-extrabold text-slate-800">
                      {link.name}
                    </span>
                    <span className="mt-0.5 block truncate text-[9px] text-slate-400">
                      {subtitles[index]}
                    </span>
                  </span>

                  <ChevronRight
                    size={16}
                    className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* RESUME BUTTON */}
        <div className="mt-auto px-3 pb-3 pt-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-xs font-extrabold text-white shadow-md shadow-blue-200/70 transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
          >
            <FileText size={16} />
            View My Resume
            <ArrowUpRight size={15} />
          </a>

          <p className="mt-3 text-center text-[9px] font-medium text-slate-400">
            Thanks for visiting!
          </p>
        </div>
      </aside>

      <style>{`
        @media (max-width: 767px) {
          .mobile-menu-drawer {
            padding-bottom: env(safe-area-inset-bottom, 0px);
            scrollbar-width: thin;
            scrollbar-color: #bfdbfe transparent;
          }

          .mobile-menu-drawer button {
            -webkit-tap-highlight-color: transparent;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-drawer,
          .mobile-menu-drawer *,
          .mobile-menu-drawer + * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
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
