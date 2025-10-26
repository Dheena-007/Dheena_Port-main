import { ExternalLink, Github, Brain, ShoppingCart, Leaf, Users, Shield, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: 'AI-Driven Personalized Fitness & Nutrition Platform',
      description: 'An AI platform using Python to generate custom fitness and nutrition plans, with Supabase providing the complete backend database and user authentication.',
      tech: ['Python', 'AI/ML', 'Supabase', 'Authentication'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: ShoppingCart,
      title: 'Fruitkart',
      description: 'An online delivery platform that connects users with nearby local fruit vendors, streamlining the ordering process and supporting local businesses.',
      tech: ['Web Development', 'Maps API', 'Real-time'],
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: Leaf,
      title: 'Smart India Hackathon - Plant Disease Detection',
      description: 'A mobile application designed to help farmers detect plant diseases using image recognition and AI, improving crop health and yield.',
      tech: ['Mobile App', 'AI/ML', 'Image Recognition'],
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Direct Market Access For Farmers',
      description: 'A digital portal that eliminates middlemen, allowing farmers to sell directly to buyers, ensuring better prices and transparency.',
      tech: ['Web Platform', 'E-commerce', 'Database'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Accident Prevention System',
      description: 'An Arduino-powered real-time safety system for vehicles that detects potential accidents and alerts drivers, enhancing road safety.',
      tech: ['Arduino', 'IoT', 'Sensors', 'Real-time'],
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Bot,
      title: 'Dynamic Web Form Automation',
      description: 'A UiPath-based automation tool that simplifies the process of completing dynamic online forms, saving time and reducing manual errors.',
      tech: ['UiPath', 'Automation', 'RPA'],
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] mb-4">PROJECTS</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg px-4">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 lg:hover:scale-105 border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-4 sm:p-6">
                <div className={`inline-block p-3 sm:p-4 rounded-xl bg-gradient-to-r ${project.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <project.icon className="text-white" size={28} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-3 group-hover:text-[#00B4D8] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-[#00B4D8] hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 bg-[#00B4D8] text-white font-medium text-sm rounded-lg hover:bg-[#0077B6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B4D8]/30">
                    <Github size={16} />
                    <span>GitHub</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 border-2 border-[#00B4D8] text-[#00B4D8] font-medium text-sm rounded-lg hover:bg-[#00B4D8] hover:text-white transition-all duration-300">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
