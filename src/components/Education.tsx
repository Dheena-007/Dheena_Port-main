import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.E. (Computer Science and Engineering)',
      institution: 'Chettinad College of Engineering and Technology',
      year: '2026',
      board: 'Anna University',
      percentage: '7.54 CGPA (Up to 6th Sem)',
      color: 'from-[#00B4D8] to-[#0077B6]',
    },
    {
      icon: BookOpen,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Hr.Sec.School',
      year: '2022',
      board: 'State Board',
      percentage: '63%',
      color: 'from-[#0077B6] to-[#005F8D]',
    },
    {
      icon: School,
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Municipal Boys Hr.Sec.School',
      year: '2020',
      board: 'State Board',
      percentage: '50%',
      color: 'from-[#005F8D] to-[#004768]',
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            EDUCATION
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00B4D8] to-transparent hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 lg:hover:scale-105 border border-gray-100 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${edu.color} mb-4`}>
                      <edu.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2">{edu.degree}</h3>
                    <p className="text-sm sm:text-base text-[#00B4D8] font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <p className="font-medium">{edu.board}</p>
                      <p className="text-sm">{edu.year}</p>
                      <p className="text-lg font-semibold text-[#111827] mt-2">{edu.percentage}</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex-shrink-0 hidden lg:block">
                  <div className="w-4 h-4 rounded-full bg-[#00B4D8] border-4 border-white shadow-lg"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
