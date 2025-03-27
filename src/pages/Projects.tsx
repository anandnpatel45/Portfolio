import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      description: 'An intelligent code assistant that provides real-time suggestions and code analysis.',
      features: [
        'Real-time code analysis and suggestions',
        'Support for 20+ programming languages',
        'Built with TypeScript and WebAssembly',
        'Advanced error detection and fixes',
        'Customizable code style rules',
        'Integration with popular IDEs'
      ],
      technologies: ['TypeScript', 'WebAssembly', 'React', 'Node.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive analytics dashboard for visualizing and analyzing business metrics.',
      features: [
        'Real-time data visualization',
        'Custom reporting engine',
        'React + D3.js implementation',
        'Advanced filtering capabilities',
        'Export to multiple formats',
        'Role-based access control'
      ],
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'health-tracking',
      title: 'Health Tracking App',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
      description: 'A mobile application for tracking health metrics and providing personalized insights.',
      features: [
        'Cross-platform mobile application',
        'ML-powered health insights',
        'React Native + TensorFlow.js',
        'Real-time health monitoring',
        'Personalized recommendations',
        'Integration with health devices'
      ],
      technologies: ['React Native', 'TensorFlow.js', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900 mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}