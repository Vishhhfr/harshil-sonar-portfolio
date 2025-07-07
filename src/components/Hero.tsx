
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Frontend Developer", "UI/UX Enthusiast", "Problem Solver", "Code Artist"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];
    
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center px-4 max-w-6xl mx-auto">
        {/* Floating badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 border border-emerald-400/30 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
          <span className="text-emerald-300 text-sm font-medium">Available for exciting opportunities</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
          <span className="block text-white">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Harshil Sonar
          </span>
        </h1>
        
        <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
          <span className="font-light">I craft </span>
          <span className="mx-3 font-bold text-emerald-400 border-r-2 border-amber-400 animate-pulse min-w-[300px] text-left">
            {displayText}
          </span>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          Transforming ideas into elegant, responsive web experiences with clean code and creative problem-solving. 
          Let's build something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-900 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <a
            href="mailto:sonarhett8426@gmail.com"
            className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-2xl font-bold text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/25"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-3 rounded-full border-2 border-emerald-400/50">
          <ArrowDown className="text-emerald-400 w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
