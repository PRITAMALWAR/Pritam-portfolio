import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', color: 'text-pink-500' },
    { name: 'Skills', href: '#skills', color: 'text-purple-500' },
    { name: 'Projects', href: '#projects', color: 'text-green-500' },
    { name: 'Contact', href: '#contact', color: 'text-yellow-500' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-md'
          : 'bg-gradient-to-r from-blue-50 to-cyan-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className={`text-5xl font-bold bg-clip-text ${
              isScrolled
                ? 'text-blue-700'
                : 'text-transparent bg-gradient-to-r from-blue-600 to-cyan-500'
            }`}
          >
            𝒫𝓇𝒾𝓉𝒶𝓂
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-semibold transition duration-300 hover:scale-105 ${
                  isScrolled
                    ? `${link.color} hover:underline`
                    : `text-gray-700 hover:${link.color}`
                }`}
              >
                {link.name}
              </button>
            ))}

            <a
              href="https://drive.google.com/file/d/1mmIm05qMj1MWk0ZIsz70zYdbGydh6YZN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-blue-700' : 'text-gray-700'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition duration-300 hover:bg-gray-100 ${link.color}`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="/https://drive.google.com/file/d/1mmIm05qMj1MWk0ZIsz70zYdbGydh6YZN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
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
