import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Go", level: 80 },
        { name: "Rust", level: 75 }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 90 },
        { name: "CSS/Sass", level: 90 },
        { name: "Webpack", level: 85 }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Django", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "GraphQL", level: 90 },
        { name: "RESTful APIs", level: 95 }
      ]
    },
    {
      name: "Database Technologies",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 80 },
        { name: "Cassandra", level: 75 }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "System Design", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 90 },
        { name: "Software Architecture", level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills & Expertise</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-blue-600 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">GitHub Contributions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-2">Tech Talks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}