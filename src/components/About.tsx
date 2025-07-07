
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in delay-300">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Frontend Developer experienced in building responsive, scalable web applications using 
              HTML, CSS, JavaScript and React. Known for problem-solving, clean code, and user-friendly 
              designs, with good front-end skills being eager to contribute and grow in a fast-paced, 
              supportive company.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span>Surat, Gujarat</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-500">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Bachelor of Computer Application</h4>
                  <p className="text-gray-300">Bhagwan Mahavir University</p>
                  <p className="text-gray-400 text-sm">05/2026 - excepted graduation</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Higher Secondary Education</h4>
                  <p className="text-gray-300">Vedvant International</p>
                  <p className="text-gray-400 text-sm">06/2022 - 05/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
