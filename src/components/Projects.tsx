
import { ExternalLink, Github, ShoppingCart, Layers, Rocket, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Westside E-commerce Experience",
      description: "A modern, visually stunning e-commerce platform built with vanilla JavaScript. Features smooth animations, intuitive product filtering, and seamless cart management with local storage integration.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      features: [
        "Dynamic Product Filtering",
        "Interactive Shopping Cart", 
        "Wishlist Management",
        "JSON Data Integration",
        "Responsive Grid Layout"
      ],
      icon: ShoppingCart,
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400/60",
      hoverShadow: "hover:shadow-emerald-500/25"
    },
    {
      title: "Eddie Bauer Fashion Hub", 
      description: "A sophisticated React-powered clothing e-commerce platform inspired by Eddie Bauer. Showcases advanced component architecture, state management, and modern UI patterns with seamless user authentication.",
      tech: ["React.js", "JavaScript", "CSS Modules", "React Router"],
      features: [
        "JWT Authentication System",
        "Protected Route Management",
        "Responsive Product Catalog",
        "Advanced State Management",
        "Component-Based Architecture"
      ],
      icon: Layers,
      gradient: "from-amber-500 via-orange-500 to-red-600",
      border: "border-amber-500/30",
      hoverBorder: "hover:border-amber-400/60",
      hoverShadow: "hover:shadow-amber-500/25"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development techniques and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative animate-fade-in`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Glowing background */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 rounded-3xl blur-2xl transition-opacity duration-500`}></div>
              
              <div className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border ${project.border} ${project.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${project.hoverShadow} overflow-hidden`}>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Rocket className="w-6 h-6 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-emerald-400 font-bold mb-4 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-amber-400 font-bold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-emerald-500/30 text-emerald-300 rounded-xl text-sm font-medium hover:border-emerald-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </button>
                  <button className="flex-1 flex items-center justify-center px-6 py-3 border-2 border-amber-400/50 text-amber-400 rounded-2xl font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/30">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400/10 to-amber-400/10 border border-emerald-400/30 rounded-full">
            <Rocket className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">More projects coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
