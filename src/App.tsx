import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Dumbbell, 
  Code, 
  GraduationCap, 
  Zap,
  Award,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  BookOpen,
  Cpu,
  Activity
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'fitness', 'tech', 'teaching', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'tech', label: 'Tech' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              YourName
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-blue-400 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2 pt-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors ${
                      activeSection === item.id ? 'text-blue-400 bg-gray-800' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-600 rounded-full flex items-center justify-center">
              <Cpu size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Multi-Passionate Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              CrossFit Athlete • Software Developer • Kubestronaut • Udemy Instructor • Innovation Creator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Discover My Story
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-500 hover:bg-gray-500 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gray-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-300">The Complete Package</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate technologist who believes in pushing boundaries both in code and in life. 
                My journey spans from high-intensity CrossFit sessions to complex Kubernetes deployments, 
                from teaching thousands of students on Udemy to building innovative hardware projects.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As a certified Kubestronaut and experienced software developer, I bring the same dedication 
                to my technical work that I apply to my athletic pursuits. Whether it's crushing a WOD, 
                architecting cloud-native solutions, or creating the perfect automated cocktail, 
                I approach every challenge with precision and passion.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle size={20} className="text-gray-400" />
                <span>Certified Kubernetes Expert (Kubestronaut)</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle size={20} className="text-gray-400" />
                <span>Active Udemy Instructor with 10K+ Students</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle size={20} className="text-gray-400" />
                <span>Multi-Sport Athlete & Fitness Enthusiast</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-300">
                <h4 className="text-xl font-semibold mb-3 text-gray-300">Technical Excellence</h4>
                <p className="text-gray-300">Full-stack development, cloud architecture, and container orchestration expertise.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-300">
                <h4 className="text-xl font-semibold mb-3 text-gray-300">Athletic Performance</h4>
                <p className="text-gray-300">Dedicated to CrossFit, running, cycling, and swimming with a focus on continuous improvement.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-300">
                <h4 className="text-xl font-semibold mb-3 text-gray-300">Innovation & Teaching</h4>
                <p className="text-gray-300">Creating unique projects like automated cocktail machines and sharing knowledge through education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Section */}
      <section id="fitness" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Athletic <span className="text-gray-400">Pursuits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <Dumbbell size={48} className="text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">CrossFit</h3>
              <p className="text-gray-300">High-intensity functional fitness training that builds strength, endurance, and mental toughness.</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <Activity size={48} className="text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Running</h3>
              <p className="text-gray-300">Distance running for cardiovascular health and mental clarity, from 5Ks to marathons.</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <Zap size={48} className="text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Cycling</h3>
              <p className="text-gray-300">Road and mountain biking for adventure, exploration, and low-impact cardio training.</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
              <Activity size={48} className="text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Swimming</h3>
              <p className="text-gray-300">Full-body workout that builds endurance while being easy on joints and highly meditative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="text-gray-400">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
              <Code size={48} className="text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Software Development</h3>
              <p className="text-gray-300 mb-6">Full-stack development with modern frameworks, microservices architecture, and cloud-native solutions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Go</span>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
              <Award size={48} className="text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Kubestronaut</h3>
              <p className="text-gray-300 mb-6">Certified Kubernetes expert with deep knowledge of container orchestration, DevOps, and cloud infrastructure.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Terraform</span>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
              <Star size={48} className="text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-300">Certifications</h3>
              <p className="text-gray-300 mb-6">Multiple industry certifications validating expertise across various technologies and platforms.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">CKA</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">CKAD</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">CKS</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Teaching & <span className="text-gray-400">Education</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <GraduationCap size={64} className="text-gray-300 mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-gray-300">Udemy Instructor</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Passionate about sharing knowledge and helping others grow in their technical journey. 
                My courses focus on practical, real-world applications of complex technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Users size={20} className="text-gray-400" />
                  <span className="text-gray-300">10,000+ Students Taught</span>
                </div>
                <div className="flex items-center space-x-4">
                  <BookOpen size={20} className="text-gray-400" />
                  <span className="text-gray-300">Multiple Course Topics</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star size={20} className="text-gray-400" />
                  <span className="text-gray-300">4.8+ Average Rating</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600">
              <h4 className="text-2xl font-bold mb-6 text-gray-300">Course Specializations</h4>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-white mb-2">Kubernetes Mastery</h5>
                  <p className="text-sm text-gray-300">From basics to advanced orchestration techniques</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-white mb-2">Cloud Architecture</h5>
                  <p className="text-sm text-gray-300">Scalable, resilient cloud-native solutions</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-white mb-2">DevOps Practices</h5>
                  <p className="text-sm text-gray-300">CI/CD, automation, and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Innovation <span className="text-gray-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-600">
                <Zap size={64} className="text-gray-300 mb-6" />
                <h3 className="text-3xl font-bold mb-6 text-gray-300">Cocktail Machine</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  An automated cocktail dispensing machine that combines hardware engineering with software control. 
                  Features precision mixing, inventory management, and a sleek touch interface.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-gray-400" />
                    <span className="text-gray-300">Automated ingredient dispensing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-gray-400" />
                    <span className="text-gray-300">Recipe management system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-gray-400" />
                    <span className="text-gray-300">Touch screen interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-gray-400" />
                    <span className="text-gray-300">Inventory tracking</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
                <h4 className="text-2xl font-bold mb-6 text-gray-300">Technical Stack</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Hardware</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Raspberry Pi</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Arduino</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Sensors</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Pumps</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Software</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">SQLite</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">IoT</span>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>View Project Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Let's <span className="text-gray-400">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-300">Get In Touch</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to collaborate, learn, or just have a chat about technology, fitness, or innovative projects? 
                I'd love to hear from you! Book a call or send me a message.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-gray-400" />
                  <span className="text-gray-300">your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar size={20} className="text-gray-400" />
                  <span className="text-gray-300">Schedule a meeting</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-xl font-bold mb-6 text-gray-300">Schedule a Call</h4>
              
              {/* Calendly Integration Placeholder */}
              <div className="bg-gray-900 p-6 rounded-xl border-2 border-dashed border-gray-600 text-center">
                <Calendar size={48} className="text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">
                  Replace this section with your Calendly embed code
                </p>
                <div className="text-sm text-gray-500 bg-gray-800 p-4 rounded-lg">
                  <p className="mb-2">To integrate Calendly:</p>
                  <ol className="text-left space-y-1">
                    <li>1. Get your Calendly embed code</li>
                    <li>2. Replace this placeholder div</li>
                    <li>3. Add the Calendly script to your HTML head</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Your Name. Crafted with passion for technology and fitness.
          </p>
          <p className="text-sm text-gray-500">
            Ready to push boundaries, build amazing things, and help others grow.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;