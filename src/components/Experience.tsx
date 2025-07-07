
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Self-Learning Journey",
      company: "Independent Study",
      location: "Surat, Gujarat",
      description: "Mastering modern frontend technologies through hands-on projects and continuous learning. Building responsive web applications and exploring new frameworks.",
      highlights: ["React.js Mastery", "JavaScript ES6+", "Responsive Design", "Modern CSS Frameworks"],
      color: "emerald",
      type: "experience"
    },
    {
      year: "2023 - 2024",
      title: "Frontend Development Focus",
      company: "Personal Projects",
      location: "Surat, Gujarat", 
      description: "Developed multiple e-commerce websites and interactive web applications, focusing on user experience and clean code architecture.",
      highlights: ["E-commerce Development", "UI/UX Implementation", "Bootstrap & Tailwind", "API Integration"],
      color: "amber",
      type: "experience"
    },
    {
      year: "2022 - 2023",
      title: "Web Development Foundation",
      company: "Academic & Self-Study",
      location: "Surat, Gujarat",
      description: "Built strong foundation in web technologies, starting with HTML, CSS, and JavaScript fundamentals.",
      highlights: ["HTML5 & CSS3", "JavaScript Basics", "Web Standards", "Problem Solving"],
      color: "orange",
      type: "experience"
    },
    {
      year: "2021 - 2024",
      title: "Bachelor of Computer Applications",
      company: "Veer Narmad South Gujarat University",
      location: "Surat, Gujarat",
      description: "Comprehensive study of computer science fundamentals, programming languages, and software development principles with focus on practical applications.",
      highlights: ["Computer Science Fundamentals", "Database Management", "Software Engineering", "Data Structures"],
      color: "blue",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-amber-400 to-orange-400 rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                        {item.year}
                      </div>
                      {item.type === 'education' ? (
                        <GraduationCap className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Award className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center text-emerald-300 mb-4">
                      <span className="font-medium">{item.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-xs font-medium border border-emerald-500/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
