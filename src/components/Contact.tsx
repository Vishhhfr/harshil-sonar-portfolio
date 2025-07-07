
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Zap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sonarhett8426@gmail.com",
      href: "mailto:sonarhett8426@gmail.com",
      gradient: "from-emerald-500 to-teal-600",
      hoverColor: "hover:text-emerald-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9825856541",
      href: "tel:+919825856541",
      gradient: "from-amber-500 to-orange-600",
      hoverColor: "hover:text-amber-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat",
      href: "#",
      gradient: "from-orange-500 to-red-600",
      hoverColor: "hover:text-orange-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshilsonar",
      gradient: "from-slate-600 to-slate-800",
      hoverColor: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/harshil-sonar-b32273341",
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Let's <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in delay-300 mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6 justify-center">
                  <div className="p-3 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl mr-4">
                    <MessageCircle className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg text-center">
                  I'm always excited about new opportunities and interesting projects. 
                  Whether you have questions, want to collaborate, or just say hello, 
                  I'd love to hear from you!
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="group flex flex-col items-center text-center">
                      <div className={`p-4 bg-gradient-to-r ${info.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium mb-1">{info.label}</p>
                        <a 
                          href={info.href}
                          className={`text-white text-lg font-bold ${info.hoverColor} transition-colors duration-300`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 max-w-md mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex-1 p-6 bg-gradient-to-r ${social.gradient} rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center`}
              >
                <social.icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-bold">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-slate-700/50">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Harshil.dev
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Harshil Sonar. Crafted with passion and lots of coffee ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
