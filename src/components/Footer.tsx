import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-500">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="space-y-3">
              <a href="https://github.com" className="flex items-center text-gray-600 hover:text-blue-500">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a href="https://linkedin.com" className="flex items-center text-gray-600 hover:text-blue-500">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href="https://twitter.com" className="flex items-center text-gray-600 hover:text-blue-500">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Resume</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}