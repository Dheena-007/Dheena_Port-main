import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            INTERNSHIP EXPERIENCE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={40} />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">
                    Web Developer Intern
                  </h3>
                  <p className="text-xl text-[#00B4D8] font-semibold mb-3">
                    EdiGlobe (Zhagaram Technologies)
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">March 2025 - May 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="text-sm font-medium">Remote</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex gap-2 sm:gap-3">
                    <CheckCircle className="text-[#00B4D8] flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Built responsive web pages using <span className="font-semibold text-[#111827]">HTML, CSS, and JavaScript</span>, gaining hands-on experience with backend systems and database integration.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <CheckCircle className="text-[#00B4D8] flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Worked on <span className="font-semibold text-[#111827]">real-world projects</span> as part of a development team, collaborating with designers and developers to deliver high-quality solutions.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <CheckCircle className="text-[#00B4D8] flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Enhanced coding skills through <span className="font-semibold text-[#111827]">team collaboration</span> and continuous learning, implementing best practices in web development.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Backend', 'Database', 'Team Collaboration'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white text-sm font-medium rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
