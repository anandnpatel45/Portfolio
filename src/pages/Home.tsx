import { ArrowRight, User, GraduationCap, FolderGit2, BookText, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const projects = [
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      alt: 'Code Editor Project',
      features: [
        'Real-time code analysis and suggestions',
        'Support for 20+ programming languages',
        'Built with TypeScript and WebAssembly'
      ]
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      alt: 'Analytics Dashboard',
      features: [
        'Real-time data visualization',
        'Custom reporting engine',
        'React + D3.js implementation'
      ]
    },
    {
      id: 'health-tracking',
      title: 'Health Tracking App',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
      alt: 'Mobile App',
      features: [
        'Cross-platform mobile application',
        'ML-powered health insights',
        'React Native + TensorFlow.js'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image and Profile Photo */}
      <div 
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="mb-8 flex justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight animate-fade-in"
                style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}
              >
                <span className="block transform hover:scale-105 transition-transform duration-300">Hello, I'm</span>
                <span className="block text-blue-600 mt-2 transform hover:scale-105 transition-transform duration-300">Your Name</span>
              </h1>
              <p className="mt-6 max-w-md mx-auto text-xl sm:text-2xl text-gray-700 md:mt-8 md:max-w-3xl animate-fade-in-up">
                Software Engineer • Researcher • Tech Enthusiast
              </p>
              
              <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Previews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* About Preview */}
        <section className="group relative transform hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <User className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">About Me</h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Passionate software engineer with a focus on creating impactful solutions...
              </p>
              <Link 
                to="/about"
                className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn more about me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Education Preview */}
        <section className="group relative transform hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Education</h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Computer Science graduate with specialization in AI and Machine Learning...
              </p>
              <Link 
                to="/education"
                className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View my educational background
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="group relative transform hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <FolderGit2 className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Projects</h2>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link 
                    key={project.id}
                    to={`/projects#${project.id}`}
                    className="bg-gray-50 rounded-lg overflow-hidden group/card hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-lg">{project.title}</h3>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {project.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                to="/projects"
                className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Explore all projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Publications Preview */}
        <section className="group relative transform hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <BookText className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Publications</h2>
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Latest Publication</h3>
                <p className="text-gray-600">Your most recent research paper or article...</p>
              </div>
              <Link 
                to="/publications"
                className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View all publications
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="group relative transform hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Frontend Development</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>React</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>TypeScript</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CSS/Tailwind</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Backend Development</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Node.js</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Python</span>
                        <span>88%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>PostgreSQL</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">DevOps & Tools</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Docker</span>
                        <span>88%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AWS</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CI/CD</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/skills"
                className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                See detailed skills
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}