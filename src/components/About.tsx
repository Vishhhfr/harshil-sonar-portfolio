
import { User, MapPin, Calendar, GraduationCap, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Profile info */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-2xl mr-4">
                  <User className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-4" />
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-emerald-400 mr-4" />
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-emerald-400 mr-4" />
                  <span>Passionate about clean, efficient code</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl mr-4">
                  <GraduationCap className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h4 className="text-lg font-bold text-emerald-400">Bachelor of Computer Application</h4>
                  <p className="text-gray-300 font-medium">Bhagwan Mahavir University</p>
                  <p className="text-gray-400 text-sm">Expected Graduation: May 2026</p>
                </div>
                
                <div className="border-l-4 border-amber-400 pl-6">
                  <h4 className="text-lg font-bold text-amber-400">Higher Secondary Education</h4>
                  <p className="text-gray-300 font-medium">Vedvant International</p>
                  <p className="text-gray-400 text-sm">June 2022 - May 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="space-y-8 animate-fade-in delay-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">My Story</h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate Frontend Developer with a keen eye for creating 
                    <span className="text-emerald-400 font-semibold"> responsive, scalable web applications</span> 
                    that deliver exceptional user experiences.
                  </p>
                  
                  <p>
                    My expertise lies in crafting clean, efficient code using modern technologies like 
                    <span className="text-amber-400 font-semibold"> React, JavaScript, HTML, and CSS</span>, 
                    with a strong focus on responsive design and user-centric interfaces.
                  </p>
                  
                  <p>
                    I thrive on <span className="text-emerald-400 font-semibold">problem-solving</span> and 
                    believe that great code should be both functional and beautiful. My goal is to contribute 
                    to innovative projects while continuously growing in a collaborative, fast-paced environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">2+</div>
                <div className="text-gray-300 text-sm">Years Learning</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
