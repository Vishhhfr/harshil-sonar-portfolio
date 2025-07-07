
import { useState, useEffect, useRef } from "react";
import { Code, Database, Palette, Globe } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "HTML & CSS", level: 95, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "CSS Framework" },
    { name: "Tailwind CSS", level: 88, category: "CSS Framework" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "CSS Frameworks",
      icon: Palette,
      items: ["Bootstrap", "Tailwind CSS", "Material-UI", "Styled Components"]
    },
    {
      title: "Tools & Others",
      icon: Globe,
      items: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools"]
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 transform animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
