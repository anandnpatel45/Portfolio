import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Publications() {
  const publications = [
    {
      title: "Deep Learning Approaches for Code Generation",
      authors: "Your Name, John Doe, Jane Smith",
      conference: "International Conference on Software Engineering (ICSE)",
      year: 2023,
      abstract: "This paper presents novel deep learning techniques for automated code generation, achieving state-of-the-art results across multiple programming languages.",
      link: "#"
    },
    {
      title: "Efficient Distributed Systems for Large-Scale Machine Learning",
      authors: "Your Name, Alice Johnson",
      conference: "ACM Symposium on Cloud Computing",
      year: 2022,
      abstract: "We propose a new architecture for distributed machine learning systems that reduces training time by 40% while maintaining model accuracy.",
      link: "#"
    },
    {
      title: "Improving Code Quality through Automated Refactoring",
      authors: "Your Name, Bob Wilson, Carol Brown",
      conference: "International Conference on Automated Software Engineering",
      year: 2021,
      abstract: "A novel approach to automated code refactoring using machine learning techniques, demonstrating significant improvements in code maintainability.",
      link: "#"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Publications</h1>

            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-blue-50 transition-colors duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600">
                    <a href={pub.link}>{pub.title}</a>
                  </h2>
                  <p className="text-gray-600 mt-2">{pub.authors}</p>
                  <p className="text-blue-600 mt-1">
                    {pub.conference} • {pub.year}
                  </p>
                  <p className="text-gray-600 mt-4">{pub.abstract}</p>
                  <div className="mt-4">
                    <a 
                      href={pub.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 mt-2">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-2">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">5</div>
                  <div className="text-gray-600 mt-2">Research Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}