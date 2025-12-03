import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download,
  Code2,
  Brain,
  Server,
  Briefcase,
  GraduationCap,
  Trophy,
  BookOpen,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Images,
  ChevronLeft,
  Award
} from 'lucide-react';

// Profile Image - using placeholder, replace with actual image path
import profileImg from '/profile.jpg';

// Image Gallery Modal Component
function ImageGalleryModal({ isOpen, onClose, images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-display text-xl font-semibold">{title}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative bg-slate-800 rounded-2xl overflow-hidden">
          <img 
            src={images[currentIndex]} 
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Image count text */}
        <p className="text-center text-white/60 text-sm mt-2">
          {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [galleryModal, setGalleryModal] = useState({ isOpen: false, images: [], title: '' });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'education', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = {
    'Programming': ['Python', 'Java', 'JavaScript', 'C/C++', 'HTML & CSS'],
    'AI & Data': ['Machine Learning', 'Deep Learning', 'Data Science', 'Computer Vision', 'NLP'],
    'Frameworks': ['React.js', 'Node.js', 'Flask', 'Streamlit'],
    'Tools & Platforms': ['AWS', 'MySQL', 'Git', 'REST APIs'],
  };

  const experiences = [
    {
      title: 'Freelance Full Stack Developer',
      company: 'SK Web Labs',
      location: 'Remote',
      period: 'Nov 2025 — Present',
      type: 'Freelance',
      projectName: 'Hari Pooja Mandir',
      projectLink: 'https://haripoojamandir.com',
      logo: '/images/experiences/skweb.png',
      screenshots: [

      ],
      highlights: [
        'Developed a full-featured ecommerce web application for religious products and pooja items',
        'Built responsive frontend using React.js with modern UI/UX design principles',
        'Designed and implemented RESTful APIs using Node.js and Express.js',
        'Managed MySQL database for product catalog, orders, and user management',
        'Deployed and configured application on AWS EC2 with Nginx as reverse proxy',
        'Integrated Node Mailer for order confirmations and customer notifications',
      ],
    },
    {
      title: 'Junior Software Developer',
      company: 'Accolade Tech Solutions Private Limited',
      location: 'Mangaluru',
      period: 'Jun 2025 — Oct 2025',
      type: 'Full-time',
      logo: '/images/experiences/accolade-logo.png',
      screenshots: [
        '/images/experiences/exp1.jpg',
        '/images/experiences/exp3.jpg',
      ], // Add screenshots if available
      highlights: [
        'Developed full-stack applications using React.js, Node.js, PHP, MySQL, and Python Flask',
        'Integrated dynamic frontends with robust backend APIs and database systems',
        'Designed and implemented machine learning models for AI-driven products',
        'Deployed and managed projects on AWS, optimizing for scalability and performance',
        'Collaborated in agile teams to deliver interactive, efficient web applications',
      ],
    },
    {
      title: 'AI/ML Developer Intern',
      company: 'Accolade Tech Solutions Private Limited',
      location: 'Mangaluru',
      period: 'Feb 2025 — May 2025',
      type: 'Internship',
      logo: '/images/experiences/accolade-logo.png',
      screenshots: [
        '/images/experiences/exp2.jpg',
        '/images/experiences/exp4.jpg',
      ], // Add screenshots if available
      highlights: [
        'Developed robust Machine Learning and Deep Learning models across diverse projects',
        'Designed and implemented interactive frontends using React.js and Streamlit',
        'Integrated Flask APIs with MySQL databases for seamless data interaction',
        'Optimized code and designed RESTful APIs for improved performance and scalability',
      ],
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'Entertainment Technologists',
      location: 'Mangaluru',
      period: 'Sep 2024 — Nov 2024',
      type: 'Internship',
      logo: '/images/experiences/entertainment-tech-logo.png',
      screenshots: [], // Add screenshots if available
      highlights: [
        'Developed deep learning models using YOLOv5 and ResNet-50 for object detection',
        'Focused on identifying sensitive content from movie scenes in video frames',
        'Implemented data preprocessing and augmentation techniques to improve training',
        'Conducted performance evaluations and optimized algorithms for real-time processing',
      ],
    },
  ];

  const projects = [
    {
      title: 'Arecanut Dryness Monitoring System',
      description: 'Deep Learning-based system for monitoring and classifying arecanut dryness levels to assist farmers in quality assessment.',
      tech: ['Deep Learning', 'Python', 'Computer Vision', 'TensorFlow'],
      period: 'Aug 2024 — Jan 2025',
      github: 'https://github.com/srisha2373',
    },
    {
      title: 'Arecanut Disease Detection',
      description: 'ML model using SVM and deep learning algorithms to predict whether an arecanut is healthy or diseased, helping farmers with early detection.',
      tech: ['Machine Learning', 'SVM', 'Python', 'Deep Learning'],
      period: 'May 2024 — Jul 2024',
      github: 'https://github.com/srisha2373/Arecanut-Disease-Detection',
    },
    {
      title: 'Smart Water Irrigation System',
      description: 'IoT-based automated irrigation system using Raspberry Pi, Arduino, ESP8266, sensors and solenoid valves for remote monitoring and control.',
      tech: ['IoT', 'Raspberry Pi', 'Arduino', 'ESP8266', 'C'],
      period: 'Dec 2022 — Jul 2023',
      github: 'https://github.com/srisha2373/Smart-Water-Irrigation-System',
    },
  ];

  const achievements = [
    {
      title: 'Top 11 Project & Patent Pending',
      organization: 'Canara Engineering College',
      location: 'Benjanapadavu Bantwal',
      period: '2024 — 2025',
      description: 'Arecanut Dryness Monitoring System selected among Top 11 projects in the entire college. Patent application in progress - all rights including images, technology, and code are owned.',
      image: '/images/achievement/ach1.jpg',
      highlight: true,
    },
    {
      title: 'Best Outgoing Intern',
      organization: 'Accolade Tech Solutions',
      location: 'Mangaluru',
      period: 'Feb 2025 — May 2025',
      description: 'Recognized for outstanding performance and contributions during internship',
      image: '/images/achievement/ach2.jpg',
    },
    {
      title: 'Roborace Event - Top 14',
      organization: 'Technoxian',
      location: 'Delhi',
      description: 'Achieved top 14 position at World Technoxian Robotic Challenge',
      image: '/images/achievement/ach3.jpg',
    },
    {
      title: 'Caterpillar Autonomy Challenge - Top 10',
      organization: 'IIT Madras',
      location: 'Chennai',
      description: 'Secured top 10 position in the prestigious Caterpillar Autonomy Challenge',
      image: '/images/achievements/caterpillar.png',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Canara Engineering College',
      location: 'Benjanapadavu Bantwal',
      period: 'Dec 2021 — Oct 2025',
    },
    {
      degree: 'Pre University Course (PUC)',
      institution: 'MDS Pre University College',
      location: 'Mangaluru',
      period: 'Jul 2019 — Jul 2021',
    },
    {
      degree: 'SSLC',
      institution: 'Bharathi Educational Trust',
      location: 'Mangaluru',
      period: 'May 2018 — Jul 2019',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="font-display text-2xl font-bold text-slate-850">
              SRISHA P S<span className="text-sage-500">.</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'text-slate-850 after:w-full' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream-50 border-t border-cream-200 py-4">
            <div className="section-container flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-slate-850 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-copper-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-200/50 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <p className="text-sage-500 font-medium mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-sage-500"></span>
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-850 mb-6">
                SRISHA P S
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 mb-6">
                Junior Software Developer &{' '}
                <span className="text-gradient font-semibold">AI/ML Engineer</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
                Passionate about crafting intelligent web applications at the intersection of 
                AI and modern web development. Building impactful solutions that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#contact" className="btn-primary">
                  <Mail size={18} />
                  Get in Touch
                </a>
                <a 
                  href="/srisha_resume.pdf" 
                  download 
                  className="btn-secondary"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <span className="text-slate-400 text-sm">Find me on</span>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/srisha2373" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-cream-200 flex items-center justify-center text-slate-600 hover:bg-slate-850 hover:text-white hover:border-slate-850 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/srishamayya2373/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-cream-200 flex items-center justify-center text-slate-600 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in animate-delay-200">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-sage-400 rounded-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-copper-400/20 rounded-3xl"></div>
                
                {/* Image container */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Srisha P S"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-850/20 to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-sage-400/10 flex items-center justify-center">
                      <Code2 className="text-sage-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Experience</p>
                      <p className="font-semibold text-slate-850">1+ Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                I'm a <span className="font-semibold text-slate-850">Dynamic Junior Software Developer</span> with 
                hands-on experience in Python development, React.js, and AI-driven full-stack solutions. 
                I'm passionate about crafting and deploying intelligent web applications that seamlessly 
                integrate robust backends with responsive frontends.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                My expertise lies in designing machine learning models and optimizing code for scalable 
                automation projects. I thrive in agile environments and love collaborating with teams to 
                deliver innovative, user-centric applications that address real-world challenges.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Currently based in <span className="font-semibold text-slate-850">Mangalore, India</span>, 
                I'm always excited to take on new challenges and explore cutting-edge technologies at the 
                intersection of AI and web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: 'Full Stack', value: 'Development' },
                { icon: Brain, label: 'AI/ML', value: 'Engineering' },
                { icon: Server, label: 'Cloud', value: 'AWS Deployment' },
                { icon: BookOpen, label: 'Always', value: 'Learning' },
              ].map((item, index) => (
                <div key={index} className="card group text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-cream-100 flex items-center justify-center group-hover:bg-sage-400 transition-colors duration-300">
                    <item.icon className="text-sage-500 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="font-semibold text-slate-850 mb-1">{item.label}</h3>
                  <p className="text-slate-500 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="card" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="font-semibold text-slate-850 mb-4 pb-3 border-b border-cream-200">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="mt-12 card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-copper-400/10 flex items-center justify-center">
                <BookOpen className="text-copper-500" size={20} />
              </div>
              <h3 className="font-semibold text-slate-850">Certifications & Courses</h3>
            </div>
            <p className="text-slate-600">
              <span className="font-medium">AI, ML, DL, CV, NLP, Chatbots</span> — IIT Madras and Edu X Labs 
              <span className="text-slate-400 ml-2">(Apr 2024 — May 2024)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">My professional journey</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-cream-200 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full items-center justify-center bg-sage-400/10 ${exp.logo ? 'hidden' : 'flex'}`}>
                      <Briefcase className="text-sage-500" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-850">{exp.title}</h3>
                        <p className="text-sage-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-3 py-1 rounded-full bg-cream-100 text-slate-600">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-sage-400/10 text-sage-600">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin size={14} />
                      {exp.location}
                    </div>

                    {exp.projectName && (
                      <div className="flex flex-wrap items-center gap-3 mb-4 p-3 bg-cream-100 rounded-xl">
                        <span className="text-slate-600 text-sm">
                          <span className="font-medium">Project:</span> {exp.projectName}
                        </span>
                        {exp.projectLink && (
                          <a 
                            href={exp.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sage-500 hover:text-sage-600 text-sm font-medium"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <ChevronRight className="text-sage-400 shrink-0 mt-1" size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* View Screenshots Button */}
                    {exp.screenshots && exp.screenshots.length > 0 && (
                      <button
                        onClick={() => setGalleryModal({ 
                          isOpen: true, 
                          images: exp.screenshots, 
                          title: `${exp.company} - ${exp.projectName || 'Screenshots'}` 
                        })}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-copper-400/10 text-copper-600 rounded-lg text-sm font-medium hover:bg-copper-400 hover:text-white transition-all duration-300"
                      >
                        <Images size={16} />
                        View Screenshots ({exp.screenshots.length})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-cream-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Things I've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card group flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-copper-400/10 flex items-center justify-center group-hover:bg-copper-400 transition-colors duration-300">
                    <Code2 className="text-copper-500 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-850 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-slate-850 mb-2 group-hover:text-sage-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <p className="text-xs text-slate-400 mb-3">{project.period}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-cream-100 text-slate-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://github.com/srisha2373" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              View All on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle">Recognition and accomplishments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`card text-center group relative overflow-hidden ${
                  achievement.highlight ? 'ring-2 ring-copper-400 ring-offset-2' : ''
                }`}
              >
                {/* Highlight Badge */}
                {achievement.highlight && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-copper-400 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Award size={12} />
                      Featured
                    </span>
                  </div>
                )}

                {/* Achievement Image */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-copper-400/20 to-sage-400/20 flex items-center justify-center">
                  {achievement.image ? (
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full items-center justify-center bg-gradient-to-br from-copper-400 to-sage-400 ${achievement.image ? 'hidden' : 'flex'}`}>
                    <Trophy className="text-white" size={32} />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-slate-850 mb-2 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-sage-500 font-medium text-sm mb-2">
                  {achievement.organization}
                </p>
                <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.period && (
                  <p className="text-xs text-slate-400">{achievement.period}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-cream-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic background</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-400/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-sage-500" size={24} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-850">{edu.degree}</h3>
                      <p className="text-sage-500">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-slate-400 shrink-0">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-850 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">Let's Connect</h2>
            <p className="text-slate-400 text-lg">Have a project in mind? Let's talk!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <a 
                href="mailto:hello@srishaps.in" 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-sage-400/20 flex items-center justify-center group-hover:bg-sage-400 transition-colors duration-300">
                  <Mail className="text-sage-400 group-hover:text-white" size={24} />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-slate-400 text-sm">hello@srishaps.in</p>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919341679055" 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-copper-400/20 flex items-center justify-center group-hover:bg-copper-400 transition-colors duration-300">
                  <Phone className="text-copper-400 group-hover:text-white" size={24} />
                </div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-slate-400 text-sm">+91 9341679055</p>
              </a>

              {/* Location */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="text-white/60" size={24} />
                </div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-slate-400 text-sm">Mangalore, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-slate-400 mb-6">Connect with me on social media</p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/srisha2373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-850 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/srishamayya2373/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center">
        <div className="section-container">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Srisha P S. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-sage-500 text-white shadow-lg flex items-center justify-center hover:bg-sage-600 transition-all duration-300 animate-fade-in z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Image Gallery Modal */}
      <ImageGalleryModal 
        isOpen={galleryModal.isOpen}
        onClose={() => setGalleryModal({ isOpen: false, images: [], title: '' })}
        images={galleryModal.images}
        title={galleryModal.title}
      />
    </div>
  );
}

export default App;
