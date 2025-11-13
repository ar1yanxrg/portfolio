'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, Palette, Zap, Github, Mail, ExternalLink, Award, Star, User, 
  Menu, X, Home as HomeIcon, Briefcase, Code2, Phone, Send, MessageSquare
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML', level: 95, icon: Code, color: 'from-gray-400 to-gray-600' },
    { name: 'CSS', level: 90, icon: Palette, color: 'from-gray-300 to-gray-500' },
    { name: 'JavaScript', level: 88, icon: Zap, color: 'from-gray-500 to-gray-700' }
  ];

  const projects = [
    {
      title: 'پروژه ایی یافت نشده',
      description: '',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-gray-600 to-gray-800',
      image: ''
    },
    {
      title: 'پروژه ایی یافت نشده',
      description: '',
      tech: ['JavaScript', 'CSS', 'HTML'],
      gradient: 'from-gray-500 to-gray-700',
      image: ''
    },
    {
      title: 'پروژه ایی یافت نشده',
      description: '',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-gray-700 to-gray-900',
      image: ''
    },
    {
      title: 'روژه ایی یافت نشدهب',
      description: '',
      tech: ['JavaScript', 'CSS', 'HTML'],
      gradient: 'from-gray-400 to-gray-600',
      image: ''
    }
  ];

  const menuItems = [
    { name: 'خانه', id: 'home', icon: HomeIcon },
    { name: 'پروژه‌ها', id: 'projects', icon: Briefcase },
    { name: 'مهارت‌ها', id: 'skills', icon: Code2 },
    { name: 'درباره من', id: 'about', icon: User },
    { name: 'تماس', id: 'contact', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-700 flex items-center justify-center shadow-lg shadow-gray-500/50">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-l from-white to-gray-500 bg-clip-text text-transparent">
                توسعه‌دهنده وب
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white hover:bg-gray-800/50 font-bold text-lg px-6 py-2 rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 mt-4">
              <div className="container mx-auto px-6 py-4 space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-gray-800/50 font-bold text-lg px-6 py-3 rounded-xl flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Static Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gray-500 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full opacity-10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-600 rounded-full opacity-5 blur-3xl" />
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Right Side */}
            <div className="order-2 lg:order-1">
              <div className="fade-in-right">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-l from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-full px-6 py-3 mb-6">
                  <Star className="w-5 h-5 text-gray-300" />
                  <span className="font-black text-base text-gray-300">آماده برای پروژه‌های جدید</span>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight fade-in-right-delay">
                  <span className="bg-gradient-to-l from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                    برنامه‌نویس
                  </span>
                  <br />
                  <span className="text-white">
                    و طراح حرفه‌ای
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-slate-300 mb-8 font-bold leading-relaxed fade-in-right-delay-2">
                  تخصص در HTML، CSS و JavaScript
                  <br />
                  <span className="text-gray-300">ساخت تجربیات دیجیتال منحصر به فرد</span>
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-10 fade-in-right-delay-3">
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-l from-white to-gray-400 bg-clip-text text-transparent">
                      6+
                    </div>
                    <div className="text-slate-400 font-bold text-base">پروژه موفق</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-l from-gray-300 to-gray-500 bg-clip-text text-transparent">
                      1+
                    </div>
                    <div className="text-slate-400 font-bold text-base">سال تجربه</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-l from-gray-400 to-gray-600 bg-clip-text text-transparent">
                      6+
                    </div>
                    <div className="text-slate-400 font-bold text-base">مشتری راضی</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 flex-wrap fade-in-right-delay-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-l from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-black text-lg px-8 py-6 rounded-2xl shadow-2xl shadow-gray-500/50 hover:scale-105 transition-all duration-300"
                  >
                    مشاهده پروژه‌ها
                    <ExternalLink className="w-5 h-5 mr-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black font-black text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    تماس با من
                    <Mail className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile Image - Left Side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-20 blur-3xl animate-pulse" />
                
                {/* Main image container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-gray-600 rounded-3xl animate-spin-slow" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-1 bg-slate-900 rounded-3xl overflow-hidden">
					<img
                      src="https://avatars.githubusercontent.com/u/242852819?v=4"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl p-4 shadow-2xl shadow-gray-500/50 floating-animation">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl p-4 shadow-2xl shadow-gray-700/50 floating-animation-reverse">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="py-24 relative">
  <div className="container mx-auto px-8 lg:px-16">
    <div className="mb-16 fade-in-up">
      <h2 className="text-5xl md:text-6xl font-black mb-4">
        <span className="bg-gradient-to-l from-white to-gray-400 bg-clip-text text-transparent">
          مهارت‌های من
        </span>
      </h2>
      <p className="text-xl text-slate-400 font-bold">تخصص‌ها و توانایی‌های فنی</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div 
          key={skill.name} 
          className="fade-in-up skill-card"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="relative group min-h-[320px]">
            {/* Background که بالا میاد */}
            <div className="absolute inset-0 bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-lg transition-all duration-500 group-hover:bg-slate-900/70 group-hover:shadow-2xl group-hover:shadow-gray-500/20 group-hover:border-gray-500/50 group-hover:-translate-y-3" />
            
            {/* محتوا که ثابت میمونه */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${skill.color} p-5 shadow-2xl flex items-center justify-center`}>
                <skill.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">
                {skill.name}
              </h3>
              <div className="mt-auto">
                <div className="w-full bg-slate-800 rounded-full h-4 mb-4 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-l ${skill.color} rounded-full shadow-lg skill-progress`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-2xl font-black text-gray-300 text-center">
                  {skill.level}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="mb-16 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-l from-gray-300 to-gray-500 bg-clip-text text-transparent">
                پروژه‌های برگزیده
              </span>
            </h2>
            <p className="text-xl text-slate-400 font-bold">نمونه‌کارهای اخیر من</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm overflow-hidden group hover:shadow-2xl hover:shadow-gray-500/20 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-white text-slate-900 hover:bg-gray-200 font-black text-base">
                        <ExternalLink className="w-4 h-4 ml-2" />
                        مشاهده پروژه
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 font-bold mb-5 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-4 py-1.5 bg-gradient-to-l ${project.gradient} bg-opacity-20 text-gray-300 rounded-xl text-sm font-black border border-gray-500/30`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-l from-gray-400 to-gray-600 bg-clip-text text-transparent">
                درباره من
              </span>
            </h2>
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-8 hover:border-gray-500/50 transition-all duration-300 hover:scale-105">
              <div className="space-y-5 text-slate-300 font-bold text-xl leading-relaxed">
                <p>
                  سلام! من یک برنامه‌نویس و طراح وب هستم که به‌تازگی  در زمینه توسعه‌ی فرانت‌اند شروع کرده‌ام.
                </p>
                <p>
                  تخصص من در <span className="text-gray-300 font-black">HTML</span>، <span className="text-gray-400 font-black">CSS</span> و <span className="text-gray-500 font-black">JavaScript</span> است و می‌توانم وب‌سایت‌های زیبا و کارآمد بسازم.
                </p>
                <p>
                  علاقه‌مند به یادگیری تکنولوژی‌های جدید و حل مسائل پیچیده با راه‌حل‌های خلاقانه هستم.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-l from-white to-gray-500 bg-clip-text text-transparent">
                ارتباط با من
              </span>
            </h2>
            <p className="text-xl text-slate-300 font-bold mb-10">
              آماده همکاری در پروژه‌های جدید و جذاب هستم
            </p>

            <div className="flex gap-5 mb-10">
              {/* GitHub */}
              <a 
                href="https://github.com/j49k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-8 h-8 text-white" />
              </a>
              
              {/* Discord */}
              <a 
                href="https://discord.gg/xrg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <MessageSquare className="w-8 h-8 text-white" />
              </a>
              
              {/* Telegram */}
              <a 
                href="https://t.me/ariyanxrg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Send className="w-8 h-8 text-white" />
              </a>
              
              {/* Email */}
              <a 
                href="mailto:awaypythone@gmail.com" 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-8 h-8 text-white" />
              </a>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-l from-gray-600 via-gray-700 to-gray-900 hover:from-gray-500 hover:via-gray-600 hover:to-gray-800 text-white font-black text-xl px-10 py-7 rounded-2xl shadow-2xl hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300"
            >
              دانلود رزومه
              <Award className="w-6 h-6 mr-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-8 lg:px-16 text-right">
          <p className="text-slate-400 font-bold text-lg">
            ✨ از ایده تا اجرا، همراه شما
          </p>
          <p className="text-slate-500 font-bold mt-2">
            © 2025 تمامی حقوق محفوظ است
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .fade-in-right {
          animation: fadeInRight 1s ease-out;
        }
        
        .fade-in-right-delay {
          animation: fadeInRight 1s ease-out 0.2s both;
        }
        
        .fade-in-right-delay-2 {
          animation: fadeInRight 1s ease-out 0.4s both;
        }
        
        .fade-in-right-delay-3 {
          animation: fadeInRight 1s ease-out 0.6s both;
        }
        
        .fade-in-right-delay-4 {
          animation: fadeInRight 1s ease-out 0.8s both;
        }
        
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-animation-reverse {
          animation: floatReverse 3s ease-in-out infinite;
        }
        
        .skill-progress {
          transition: width 2s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );

}


