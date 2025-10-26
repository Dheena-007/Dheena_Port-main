import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/dheena.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1tS2_BD3hR5fJiRINl4MUFak7lBUexqcT/view?usp=sharing';
    link.download = 'https://drive.google.com/file/d/1tS2_BD3hR5fJiRINl4MUFak7lBUexqcT/view?usp=sharing';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#00B4D8] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#00B4D8] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight break-words">
                DHEENADAYALAN S
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-[#00B4D8] to-transparent mb-6 mx-auto lg:mx-0"></div>
              <p className="text-base sm:text-xl md:text-2xl text-[#00B4D8] font-medium mb-6">
                Aspiring Engineer | AI & Web Development Enthusiast
              </p>
            </div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Aspiring Web Developer with a solid foundation in HTML, CSS, and JavaScript, dedicated to building
              responsive and user-friendly web applications. Passionate about creating modern, visually appealing
              interfaces and enhancing user experiences. Eager to contribute to dynamic projects while continuously
              learning and advancing toward full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-[#00B4D8] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00B4D8]/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-[#00B4D8] text-[#00B4D8] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00B4D8] hover:text-white hover:shadow-lg hover:shadow-[#00B4D8]/50 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Dheena-007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-10 rounded-lg text-gray-300 hover:text-[#00B4D8] hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dheenadayalan-s-80291927b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-10 rounded-lg text-gray-300 hover:text-[#00B4D8] hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sdheenadayalan896@gmail.com"
                className="p-3 bg-white bg-opacity-10 rounded-lg text-gray-300 hover:text-[#00B4D8] hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Dheenadayalan S"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
