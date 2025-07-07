
import { useState, useEffect, useRef } from "react";
import { Code, Palette, Globe, Zap, Star } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React.js", level: 90, category: "Frontend", color: "emerald" },
    { name: "JavaScript", level: 85, category: "Programming", color: "amber" },
    { name: "HTML & CSS", level: 95, category: "Frontend", color: "orange" },
    { name: "Bootstrap", level: 80, category: "Framework", color: "emerald" },
    { name: "Tailwind CSS", level: 88, category: "Framework", color: "amber" },
  ];

  const skillCategories = [
    {
      title: "Frontend Magic",
      icon: Code,
      items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design"],
      gradient: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400/60"
    },
    {
      title: "Design Systems",
      icon: Palette,
      items: ["Bootstrap", "Tailwind CSS", "Material-UI", "Styled Components"],
      gradient: "from-amber-500 to-orange-600",
      border: "border-amber-500/30",
      hoverBorder: "hover:border-amber-400/60"
    },
    {
      title: "Development Tools",
      icon: Globe,
      items: ["Git & GitHub", "VS Code", "Figma", "Chrome DevTools"],
      gradient: "from-orange-500 to-red-600",
      border: "border-orange-500/30",
      hoverBorder: "hover:border-orange-400/60"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`relative group animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r opacity-20 group-hover:opacity-40 rounded-3xl blur-xl transition-opacity duration-500"></div>
              <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border ${category.border} ${category.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl mr-4 shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={item} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      <Star className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Constellation */}
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400/10 to-amber-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Skill Constellation</h3>
            </div>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 font-bold text-lg">{skill.name}</span>
                    <span className={`text-${skill.color}-400 font-bold text-xl`}>{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden border border-slate-600/50">
                      <div
                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
