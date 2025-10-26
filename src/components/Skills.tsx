import { Code, Globe, Wrench, Users, Lightbulb, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'C', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'MySQL', level: 80 },
  ];

  const tools = [
    { name: 'GitHub', icon: '🔧' },
    { name: 'Canva', icon: '🎨' },
    { name: 'UI Path', icon: '🤖' },
    { name: 'MS PowerPoint', icon: '📊' },
    { name: 'AI Tools', icon: '🧠' },
  ];

  const softSkills = [
    { name: 'Team Management', icon: Users, color: 'from-[#00B4D8] to-[#0077B6]' },
    { name: 'Quick Learning', icon: Lightbulb, color: 'from-[#0077B6] to-[#005F8D]' },
    { name: 'Collaboration', icon: Target, color: 'from-[#005F8D] to-[#004768]' },
    { name: 'Problem Solving', icon: Code, color: 'from-[#004768] to-[#003952]' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">SKILLS</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Code className="text-[#00B4D8] flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Programming Languages</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 sm:mb-2">
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm sm:text-base text-[#00B4D8] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-full transition-all duration-1000 ease-out hover:shadow-lg hover:shadow-[#00B4D8]/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Wrench className="text-[#00B4D8] flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Tools & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-lg text-white font-medium shadow-lg hover:scale-110 hover:shadow-[#00B4D8]/50 transition-all duration-300 cursor-pointer"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Globe className="text-[#00B4D8] flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-3 sm:p-4 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} mb-3`}>
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
