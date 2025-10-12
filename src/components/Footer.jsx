import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-30 to-cyan-50 text-gray-800 py-14 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              𝒫𝓇𝒾𝓉𝒶𝓂
            </h3>
            <p className="text-gray-600 mt-2 font-medium">
              Passionate about building clean and scalable web experiences.
            </p>
            <p className="text-sm text-gray-500 italic mt-1">
              "Turning ideas into interactive reality."
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/PRITAMALWAR"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-blue-600"
            >
              <Github
                size={24}
                className="text-gray-700 group-hover:text-white transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pritam-verma-45830328b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-blue-600"
            >
              <Linkedin
                size={24}
                className="text-gray-700 group-hover:text-white transition duration-300"
              />
            </a>
            <a
              href="mailto:thepritamverma@gmail.com"
              className="group bg-white p-3 rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-blue-600"
            >
              <Mail
                size={24}
                className="text-gray-700 group-hover:text-white transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
