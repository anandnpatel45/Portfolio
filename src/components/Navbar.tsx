import { Home, User, GraduationCap, FolderGit2, BookText, Code, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Me', icon: User },
    { path: '/education', label: 'Education', icon: GraduationCap },
    { path: '/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/publications', label: 'Publications', icon: BookText },
    { path: '/skills', label: 'Skills', icon: Code },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === path
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}