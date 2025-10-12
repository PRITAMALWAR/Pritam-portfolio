import { Github, Linkedin, Mail } from 'lucide-react';
import mainImage from '../assest/PritamProfile.jpeg'; // ✅ Make sure this path is correct

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-semibold text-xl animate-fade-in">
                Hi there! I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 animate-fade-in">
                Pritam
              </h1>
              <h3 className="text-2xl md:text-4xl text-gray-700 animate-fade-in">
                Fullstack Developer
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Crafting seamless web experiences with modern technologies.
              Specialized in building responsive, user-centric applications
              that bridge the gap between design and functionality.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/PRITAMALWAR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/pritam-verma-45830328b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:thepritamverma@gmail.com"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={mainImage}
                  alt="Pritam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
