
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Harshil Sonar</span>
        </h1>
        
        <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12">
          <span className="border-r-2 border-blue-400 animate-pulse">{displayText}</span>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
          Experienced in building responsive, scalable web applications using HTML, CSS, JavaScript and React. 
          Known for problem-solving, clean code, and user-friendly designs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <a
            href="mailto:sonarhett8426@gmail.com"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 transform"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
