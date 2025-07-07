
import { ExternalLink, Github, ShoppingCart, Filter } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Westside E-commerce Website",
      description: "A simple and visually appealing static website using HTML, CSS, and JavaScript. This project showcases the basic concepts of front-end development, although the website is not responsive, it has been properly structured and designed for desktop view.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Product Filtering",
        "Add/Delete Cart Items", 
        "Wishlist Integration JSON",
        "Server for Data"
      ],
      icon: ShoppingCart,
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Eddie Bauer E-commerce Website", 
      description: "A fully functional e-commerce clothing website inspired by Eddie Bauer using React.js. This project demonstrates my skills in building modular, component-based UIs along with state management, routing, and API integration.",
      tech: ["React.js", "JavaScript", "CSS"],
      features: [
        "Implemented user authentication",
        "Protected frontend routes",
        "Integrated responsive product listing UI"
      ],
      icon: Filter,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 transform animate-fade-in hover:shadow-2xl hover:shadow-blue-500/20`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </button>
                <button className="flex items-center px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 transform">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
