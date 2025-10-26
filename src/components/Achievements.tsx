import { Trophy, Award, Cpu, GraduationCap, Code, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'AMD Perspective AI Contest Hardware Winner',
      organization: 'AMD',
      year: '2024',
      description: 'Recognized for outstanding AI innovation. Awarded a MinisForum UM790 Pro PC for excellence in developing innovative AI solutions.',
      color: 'from-amber-400 to-orange-500',
      badge: '1st Place',
    },
    {
      icon: GraduationCap,
      title: 'Web Development Certification',
      organization: 'EdiGlobe',
      year: '2025',
      description: 'Successfully completed a comprehensive 2-month Web Development course covering HTML, CSS, JavaScript, and backend technologies.',
      color: 'from-[#00B4D8] to-[#0077B6]',
      badge: 'Certified',
    },
    {
      icon: Code,
      title: 'Full Stack Development Masterclass',
      organization: 'Industry Program',
      year: '2025',
      description: 'Completed an intensive 30-day masterclass in full-stack development, gaining expertise in modern web technologies.',
      color: 'from-purple-500 to-indigo-600',
      badge: 'Completed',
    },
    {
      icon: Cpu,
      title: 'AMD AI Hackathon Participant',
      organization: 'AMD',
      year: '2024',
      description: 'Actively participated in AMD AI Hackathon, developing innovative AI-powered solutions.',
      color: 'from-red-500 to-pink-600',
      badge: 'Participant',
    },
    {
      icon: Award,
      title: 'Intel Gen-AI Hackathon Participant',
      organization: 'Intel',
      year: '2024',
      description: 'Participated in Intel Generative AI Hackathon, exploring cutting-edge AI technologies.',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Participant',
    },
    {
      icon: Medal,
      title: 'Google Developers Programme Member',
      organization: 'Google',
      year: '2024-2025',
      description: 'Active participant in Google Developers Programme, staying updated with latest development trends.',
      color: 'from-green-500 to-teal-600',
      badge: 'Active',
    },
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ACHIEVEMENTS & CERTIFICATIONS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg px-4">
            Recognition and milestones achieved through dedication and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 lg:hover:scale-105 hover:shadow-2xl hover:shadow-[#00B4D8]/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold rounded-full`}>
                  {achievement.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors duration-300">
                {achievement.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <p className="text-[#00B4D8] font-semibold text-sm">{achievement.organization}</p>
                <span className="text-gray-500">•</span>
                <p className="text-gray-400 text-sm">{achievement.year}</p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-4 pt-4 border-t border-white border-opacity-10">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#00B4D8] animate-pulse"></div>
                  <span className="text-xs text-gray-400 font-medium">Verified Achievement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
