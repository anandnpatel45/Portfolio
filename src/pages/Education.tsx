import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Education() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      period: "2018 - 2022",
      description: "Research focused on Machine Learning and Distributed Systems",
      achievements: [
        "Published 5 papers in top-tier conferences",
        "Received Outstanding Research Award",
        "Teaching Assistant for Advanced Algorithms"
      ]
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "MIT",
      period: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Software Engineering",
      achievements: [
        "4.0 GPA",
        "Research Assistant in AI Lab",
        "Best Master's Thesis Award"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "UC Berkeley",
      period: "2012 - 2016",
      description: "Foundation in Computer Science and Mathematics",
      achievements: [
        "Summa Cum Laude",
        "Dean's List all semesters",
        "President of Computer Science Club"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2021"
    }
  ];

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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Education</h1>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[10px] top-0"></div>
                  <h2 className="text-2xl font-bold text-gray-900">{edu.degree}</h2>
                  <h3 className="text-xl text-blue-600 mt-1">{edu.institution}</h3>
                  <p className="text-gray-500 mt-1">{edu.period}</p>
                  <p className="text-gray-600 mt-3">{edu.description}</p>
                  <ul className="mt-4 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600 mt-2">{cert.issuer}</p>
                    <p className="text-gray-500 mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}