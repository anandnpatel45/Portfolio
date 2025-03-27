import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Hello! I'm a passionate Software Engineer with over 5 years of experience in building web applications and distributed systems. My journey in technology began with a fascination for problem-solving and has evolved into a career focused on creating impactful solutions that make a difference.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Professional Journey</h2>
              <p className="text-gray-600 mb-6">
                Currently, I work as a Senior Software Engineer at a leading tech company, where I lead the development of scalable cloud solutions. My expertise spans both frontend and backend development, with a particular focus on React, Node.js, and cloud technologies.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Research Interests</h2>
              <p className="text-gray-600 mb-6">
                My research interests lie at the intersection of artificial intelligence and software engineering. I'm particularly interested in how AI can be leveraged to improve developer productivity and code quality. I regularly contribute to open-source projects and publish research papers in this domain.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Beyond Coding</h2>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you'll find me contributing to tech communities, mentoring aspiring developers, or exploring the latest developments in technology. I'm also an avid reader and enjoy writing technical blogs about software architecture and best practices.
              </p>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Core Values</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-blue-900">Continuous Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-blue-900">Code Quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-blue-900">Knowledge Sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    <span className="text-blue-900">Innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}