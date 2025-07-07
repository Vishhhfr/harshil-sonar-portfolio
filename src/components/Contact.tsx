
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Zap } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-amber-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl mr-4">
                    <MessageCircle className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  I'm always excited about new opportunities and interesting projects. 
                  Whether you have questions, want to collaborate, or just say hello, 
                  I'd love to hear from you!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="group flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${info.gradient} rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{info.label}</p>
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

            {/* Social Links */}
            <div className="flex space-x-4">
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

          {/* Contact Form */}
          <div className="animate-fade-in delay-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-2xl mr-4">
                    <Zap className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Send Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-emerald-400 text-sm font-bold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-amber-400 text-sm font-bold mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-emerald-400 text-sm font-bold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 bg-slate-700/50 border-2 border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
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
